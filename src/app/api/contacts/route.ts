import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    
    const body = await request.json();
    const { name, email, subject, message, phone, company } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Get client IP and user agent for tracking
    const ipAddress = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Create new contact document
    const contactDoc = {
      name,
      email,
      subject,
      message,
      phone: phone || '',
      company: company || '',
      status: 'new',
      priority: 'medium',
      ipAddress,
      userAgent,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await db.collection('contacts').insertOne(contactDoc);

    return NextResponse.json(
      { 
        success: true,
        message: 'Message sent successfully! I\'ll get back to you soon.',
        contactId: result.insertedId 
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Contact form error:', error);
    
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { error: validationErrors.join(', ') },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('contacts');
    
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const status = url.searchParams.get('status');
    const priority = url.searchParams.get('priority');
    const search = url.searchParams.get('search');

    // Build query
    const query: Record<string, any> = {};
    if (status) query.status = status;
    if (priority) query.priority = priority;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { subject: { $regex: search, $options: 'i' } },
        { message: { $regex: search, $options: 'i' } }
      ];
    }

    const skip = (page - 1) * limit;
    
    const [contacts, total] = await Promise.all([
      collection.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
      collection.countDocuments(query)
    ]);

    // Get statistics
    const stats = await collection.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]).toArray();

    const statusStats = stats.reduce((acc: Record<string, number>, stat: any) => {
      acc[stat._id] = stat.count;
      return acc;
    }, {});

    return NextResponse.json({
      contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      },
      stats: statusStats
    });

  } catch (error) {
    console.error('Get contacts error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}
