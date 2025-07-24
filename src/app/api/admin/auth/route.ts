import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-key';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const username = body.email || body.username; // Support both email and username fields
    const password = body.password;

    // Check if username matches admin username
    if (username !== ADMIN_USERNAME) {
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid credentials' 
      }, { status: 401 });
    }

    // Simple password check for development
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid credentials' 
      }, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign(
      { username: ADMIN_USERNAME, role: 'admin' },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      user: { username: ADMIN_USERNAME, role: 'admin' }
    });

    // Set HTTP-only cookie
    response.cookies.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400, // 24 hours
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Login failed' 
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('admin-token')?.value;

    if (!token) {
      return NextResponse.json({ 
        success: false, 
        error: 'No token provided' 
      }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { username: string; role: string };

    return NextResponse.json({
      success: true,
      user: { username: decoded.username, role: decoded.role }
    });
  } catch {
    return NextResponse.json({ 
      success: false, 
      error: 'Invalid token' 
    }, { status: 401 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({
    success: true,
    message: 'Logged out successfully'
  });

  response.cookies.delete('admin-token');
  return response;
}
