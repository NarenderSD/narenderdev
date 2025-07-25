import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('contacts');

    const { id } = params;
    const body = await request.json();
    const { status, priority, notes } = body;
    
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid contact ID' },
        { status: 400 }
      );
    }

    const updateData: Record<string, unknown> = { updatedAt: new Date() };
    if (status) updateData.status = status;
    if (priority) updateData.priority = priority;
    if (notes !== undefined) updateData.notes = notes;

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      );
    }

    // Get updated contact
    const updatedContact = await collection.findOne({ _id: new ObjectId(id) });

    return NextResponse.json({ 
      message: 'Contact updated successfully',
      contact: updatedContact 
    });

  } catch (error) {
    console.error('Update contact error:', error);
    return NextResponse.json(
      { error: 'Failed to update contact' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('contacts');

    const id = params.id;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid contact ID' },
        { status: 400 }
      );
    }
    
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      message: 'Contact deleted successfully' 
    });

  } catch (error) {
    console.error('Delete contact error:', error);
    return NextResponse.json(
      { error: 'Failed to delete contact' },
      { status: 500 }
    );
  }
}
