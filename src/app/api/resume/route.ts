import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const pdfPath = join(process.cwd(), 'public', 'Narender Singh Resume.pdf');
    const pdfBuffer = readFileSync(pdfPath);
    
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Narender Singh Resume.pdf"',
        'Cache-Control': 'public, max-age=31536000',
        'X-Frame-Options': 'SAMEORIGIN',
      },
    });
  } catch (error) {
    console.error('PDF serving error:', error);
    return NextResponse.json(
      { error: 'PDF not found' },
      { status: 404 }
    );
  }
}
