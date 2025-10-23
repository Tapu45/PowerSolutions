import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

// Upload image to Cloudinary
export const uploadToCloudinary = async (
    file: Buffer,
    folder: string = 'blogs'
): Promise<{ url: string; publicId: string }> => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader
            .upload_stream(
                {
                    folder,
                    resource_type: 'auto',
                    transformation: [
                        { width: 1200, height: 630, crop: 'limit' },
                        { quality: 'auto' },
                        { fetch_format: 'auto' },
                    ],
                },
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else if (result) {
                        resolve({
                            url: result.secure_url,
                            publicId: result.public_id,
                        });
                    }
                }
            )
            .end(file);
    });
};

// Delete image from Cloudinary
export const deleteFromCloudinary = async (publicId: string): Promise<void> => {
    try {
        await cloudinary.uploader.destroy(publicId);
    } catch (error) {
        console.error('Error deleting from Cloudinary:', error);
        throw error;
    }
};

// Get optimized image URL
export const getOptimizedImageUrl = (
    publicId: string,
    width?: number,
    height?: number
): string => {
    return cloudinary.url(publicId, {
        width,
        height,
        crop: 'fill',
        quality: 'auto',
        fetch_format: 'auto',
    });
};