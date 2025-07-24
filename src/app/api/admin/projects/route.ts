import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('projects');
    
    const projects = await collection.find({}).sort({ createdAt: -1 }).toArray();
    
    return NextResponse.json({ success: true, projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('projects');
    
    const newProject = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    const result = await collection.insertOne(newProject);
    
    return NextResponse.json({ 
      success: true, 
      projectId: result.insertedId,
      message: 'Project added successfully' 
    });
  } catch (error) {
    console.error('Error adding project:', error);
    return NextResponse.json({ success: false, error: 'Failed to add project' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { _id, ...updateData } = body;
    
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('projects');
    
    const result = await collection.updateOne(
      { _id: new ObjectId(_id) },
      { 
        $set: { 
          ...updateData, 
          updatedAt: new Date() 
        } 
      }
    );
    
    if (result.matchedCount === 0) {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Project updated successfully' 
    });
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json({ success: false, error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ success: false, error: 'Project ID required' }, { status: 400 });
    }
    
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('projects');
    
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 0) {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Project deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete project' }, { status: 500 });
  }
}
