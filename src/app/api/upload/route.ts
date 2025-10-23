import { NextRequest, NextResponse } from 'next/server';
import { uploadToCloudinary, deleteFromCloudinary } from '@/lib/cloudinary';
import { z } from 'zod';

// Validation schema
const uploadSchema = z.object({
    folder: z.string().optional().default('blogs'),
    maxSize: z.number().optional().default(5 * 1024 * 1024), // 5MB default
});

// Allowed image types
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

// POST - Upload image to Cloudinary
export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const folder = (formData.get('folder') as string) || 'blogs';

        // Validate file exists
        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            );
        }

        // Validate file type
        if (!ALLOWED_TYPES.includes(file.type)) {
            return NextResponse.json(
                { error: 'Invalid file type. Only images are allowed (JPEG, PNG, WebP, GIF)' },
                { status: 400 }
            );
        }

        // Validate file size
        if (file.size > MAX_FILE_SIZE) {
            return NextResponse.json(
                { error: `File size exceeds ${MAX_FILE_SIZE / (1024 * 1024)}MB limit` },
                { status: 400 }
            );
        }

        // Convert file to buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Upload to Cloudinary
        const result = await uploadToCloudinary(buffer, folder);

        return NextResponse.json(
            {
                message: 'File uploaded successfully',
                url: result.url,
                publicId: result.publicId,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json(
            { error: 'Failed to upload file' },
            { status: 500 }
        );
    }
}

// DELETE - Delete image from Cloudinary
export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const publicId = searchParams.get('publicId');

        if (!publicId) {
            return NextResponse.json(
                { error: 'Public ID is required' },
                { status: 400 }
            );
        }

        // Delete from Cloudinary
        await deleteFromCloudinary(publicId);

        return NextResponse.json(
            { message: 'File deleted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error deleting file:', error);
        return NextResponse.json(
            { error: 'Failed to delete file' },
            { status: 500 }
        );
    }
}