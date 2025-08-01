import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import mongoose from 'mongoose';

// Visitor Schema
const visitorSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now },
  dailyVisits: [{
    date: { type: String, required: true }, // YYYY-MM-DD format
    count: { type: Number, default: 0 }
  }],
  uniqueVisitors: { type: Number, default: 0 },
  totalSessions: { type: Number, default: 0 }
}, { timestamps: true });

const Visitor = mongoose.models.Visitor || mongoose.model('Visitor', visitorSchema);

export async function GET() {
  try {
    await connectDB();
    
    let visitorData = await Visitor.findOne({});
    
    if (!visitorData) {
      // Create initial visitor data
      visitorData = new Visitor({
        count: 0,
        uniqueVisitors: 0,
        totalSessions: 0,
        dailyVisits: []
      });
      await visitorData.save();
    }
    
    return NextResponse.json({
      success: true,
      data: {
        totalVisits: visitorData.count,
        uniqueVisitors: visitorData.uniqueVisitors,
        totalSessions: visitorData.totalSessions,
        dailyVisits: visitorData.dailyVisits,
        lastUpdated: visitorData.lastUpdated
      }
    });
    
  } catch (error) {
    console.error('Error fetching visitor count:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch visitor count' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { sessionId, isNewSession = true } = body;
    
    let visitorData = await Visitor.findOne({});
    
    if (!visitorData) {
      visitorData = new Visitor({
        count: 1,
        uniqueVisitors: 1,
        totalSessions: 1,
        dailyVisits: []
      });
    } else {
      // Increment total visits
      visitorData.count += 1;
      
      // If it's a new session, increment session count
      if (isNewSession) {
        visitorData.totalSessions += 1;
      }
      
      // Update daily visits
      const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
      const todayVisit = visitorData.dailyVisits.find(visit => visit.date === today);
      
      if (todayVisit) {
        todayVisit.count += 1;
      } else {
        visitorData.dailyVisits.push({
          date: today,
          count: 1
        });
      }
      
      // Keep only last 30 days
      visitorData.dailyVisits = visitorData.dailyVisits
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 30);
    }
    
    visitorData.lastUpdated = new Date();
    await visitorData.save();
    
    return NextResponse.json({
      success: true,
      data: {
        totalVisits: visitorData.count,
        uniqueVisitors: visitorData.uniqueVisitors,
        totalSessions: visitorData.totalSessions,
        dailyVisits: visitorData.dailyVisits,
        lastUpdated: visitorData.lastUpdated
      }
    });
    
  } catch (error) {
    console.error('Error updating visitor count:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update visitor count' },
      { status: 500 }
    );
  }
}
