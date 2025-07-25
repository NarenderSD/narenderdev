import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('project_views');
    
    const views = await collection.find({}).toArray();
    
    return NextResponse.json({ success: true, views });
  } catch (error) {
    console.error('Error fetching views:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch views' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { projectId } = await request.json();
    
    if (!projectId) {
      return NextResponse.json({ success: false, error: 'Project ID required' }, { status: 400 });
    }
    
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('project_views');
    
    // Increment or create view count
    const result = await collection.findOneAndUpdate(
      { projectId },
      { 
        $inc: { count: 1 },
        $set: { updatedAt: new Date() },
        $setOnInsert: { createdAt: new Date() }
      },
      { 
        upsert: true, 
        returnDocument: 'after' 
      }
    );
    
    console.log(`📊 View count for project ${projectId}: ${result?.count || 1}`);
    
    return NextResponse.json({ 
      success: true, 
      projectId,
      count: result?.count || 1
    });
  } catch (error) {
    console.error('Error updating view count:', error);
    return NextResponse.json({ success: false, error: 'Failed to update view count' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get('projectId');
    
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('project_views');
    
    if (projectId) {
      // Reset specific project
      await collection.updateOne(
        { projectId },
        { $set: { count: 0, updatedAt: new Date() } }
      );
    } else {
      // Reset all projects
      await collection.updateMany(
        {},
        { $set: { count: 0, updatedAt: new Date() } }
      );
    }
    
    return NextResponse.json({ success: true, message: 'View counts reset' });
  } catch (error) {
    console.error('Error resetting view counts:', error);
    return NextResponse.json({ success: false, error: 'Failed to reset view counts' }, { status: 500 });
  }
}
