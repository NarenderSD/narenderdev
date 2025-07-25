import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    console.log('Upload API called');
    
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    console.log('File received:', file ? file.name : 'None', 'Size:', file ? file.size : 0);
    
    if (!file) {
      console.error('No file provided in request');
      return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 });
    }

    // Check Cloudinary configuration
    console.log('Cloudinary config:', {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME ? 'Set' : 'Missing',
      api_key: process.env.CLOUDINARY_API_KEY ? 'Set' : 'Missing',
      api_secret: process.env.CLOUDINARY_API_SECRET ? 'Set' : 'Missing'
    });

    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      console.error('Cloudinary configuration missing');
      return NextResponse.json({ success: false, error: 'Cloudinary configuration missing' }, { status: 500 });
    }

    // Convert file to buffer
    console.log('Converting file to buffer...');
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    console.log('Buffer created, size:', buffer.length);

    // Upload to Cloudinary
    console.log('Starting Cloudinary upload...');
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: 'portfolio-projects',
          transformation: [
            { width: 800, height: 450, crop: 'fill', quality: 'auto' },
            { format: 'webp' }
          ]
        },
        (error, result) => {
          if (error) {
            console.error('Cloudinary upload error:', error);
            reject(error);
          } else {
            console.log('Cloudinary upload success:', result?.secure_url);
            resolve(result);
          }
        }
      ).end(buffer);
    });

    const uploadResult = result as { secure_url: string; public_id: string };
    
    console.log('Upload completed successfully:', uploadResult.secure_url);

    return NextResponse.json({
      success: true,
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id,
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json({ 
      success: false, 
      error: `Failed to upload image: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const publicId = searchParams.get('publicId');
    
    if (!publicId) {
      return NextResponse.json({ success: false, error: 'Public ID required' }, { status: 400 });
    }

    await cloudinary.uploader.destroy(publicId);
    
    return NextResponse.json({
      success: true,
      message: 'Image deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting image:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete image' }, { status: 500 });
  }
}
