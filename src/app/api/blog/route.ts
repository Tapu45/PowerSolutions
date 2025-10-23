import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { z } from 'zod';

const prisma = new PrismaClient();

// Validation schema for creating/updating blog
const blogSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    slug: z.string().min(1, 'Slug is required'),
    excerpt: z.string().optional(),
    content: z.string().min(1, 'Content is required'),
    featuredImage: z.string().url().optional().or(z.literal('')),
    status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
    publishedAt: z.string().datetime().optional().or(z.literal('')),
    readTimeMinutes: z.number().int().positive().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    authorId: z.string().uuid('Invalid author ID'),
    categoryId: z.string().uuid().optional().or(z.literal('')),
    tagIds: z.array(z.string().uuid()).optional(),
});

// GET - Fetch all blogs or single blog by ID
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        const status = searchParams.get('status');
        const authorId = searchParams.get('authorId');
        const categoryId = searchParams.get('categoryId');
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const skip = (page - 1) * limit;

        // Fetch single blog by ID
        if (id) {
            const blog = await prisma.blog.findUnique({
                where: { id },
                include: {
                    author: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            avatar: true,
                        },
                    },
                    category: true,
                    tags: {
                        include: {
                            tag: true,
                        },
                    },
                    comments: {
                        include: {
                            author: {
                                select: {
                                    id: true,
                                    name: true,
                                    avatar: true,
                                },
                            },
                        },
                        orderBy: {
                            createdAt: 'desc',
                        },
                    },
                    likes: {
                        include: {
                            user: {
                                select: {
                                    id: true,
                                    name: true,
                                },
                            },
                        },
                    },
                },
            });

            if (!blog) {
                return NextResponse.json(
                    { error: 'Blog not found' },
                    { status: 404 }
                );
            }

            // Increment view count
            await prisma.blog.update({
                where: { id },
                data: { viewCount: { increment: 1 } },
            });

            return NextResponse.json({ blog }, { status: 200 });
        }

        // Build filter conditions
        const where: any = {};
        if (status) where.status = status;
        if (authorId) where.authorId = authorId;
        if (categoryId) where.categoryId = categoryId;

        // Fetch all blogs with pagination
        const [blogs, total] = await Promise.all([
            prisma.blog.findMany({
                where,
                include: {
                    author: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            avatar: true,
                        },
                    },
                    category: true,
                    tags: {
                        include: {
                            tag: true,
                        },
                    },
                    _count: {
                        select: {
                            comments: true,
                            likes: true,
                        },
                    },
                },
                orderBy: {
                    createdAt: 'desc',
                },
                skip,
                take: limit,
            }),
            prisma.blog.count({ where }),
        ]);

        return NextResponse.json(
            {
                blogs,
                pagination: {
                    total,
                    page,
                    limit,
                    totalPages: Math.ceil(total / limit),
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// POST - Create a new blog
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input
        const validatedData = blogSchema.parse(body);

        // Check if slug already exists
        const existingBlog = await prisma.blog.findUnique({
            where: { slug: validatedData.slug },
        });

        if (existingBlog) {
            return NextResponse.json(
                { error: 'Blog with this slug already exists' },
                { status: 400 }
            );
        }

        // Verify author exists
        const author = await prisma.user.findUnique({
            where: { id: validatedData.authorId },
        });

        if (!author) {
            return NextResponse.json(
                { error: 'Author not found' },
                { status: 404 }
            );
        }

        // Verify category exists if provided
        if (validatedData.categoryId) {
            const category = await prisma.category.findUnique({
                where: { id: validatedData.categoryId },
            });

            if (!category) {
                return NextResponse.json(
                    { error: 'Category not found' },
                    { status: 404 }
                );
            }
        }

        // Extract tagIds and remove from main data
        const { tagIds, ...blogData } = validatedData;

        // Create blog with tags
        const blog = await prisma.blog.create({
            data: {
                ...blogData,
                categoryId: blogData.categoryId || null,
                featuredImage: blogData.featuredImage || null,
                publishedAt: blogData.publishedAt ? new Date(blogData.publishedAt) : null,
                tags: tagIds
                    ? {
                        create: tagIds.map((tagId) => ({
                            tag: {
                                connect: { id: tagId },
                            },
                        })),
                    }
                    : undefined,
            },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        avatar: true,
                    },
                },
                category: true,
                tags: {
                    include: {
                        tag: true,
                    },
                },
            },
        });

        return NextResponse.json(
            {
                message: 'Blog created successfully',
                blog,
            },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation error', details: error.issues },
                { status: 400 }
            );
        }

        console.error('Error creating blog:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// PUT - Update an existing blog
export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const { id, ...updateData } = body;

        if (!id) {
            return NextResponse.json(
                { error: 'Blog ID is required' },
                { status: 400 }
            );
        }

        // Validate input
        const validatedData = blogSchema.partial().parse(updateData);

        // Check if blog exists
        const existingBlog = await prisma.blog.findUnique({
            where: { id },
        });

        if (!existingBlog) {
            return NextResponse.json(
                { error: 'Blog not found' },
                { status: 404 }
            );
        }

        // Check if slug is being updated and already exists
        if (validatedData.slug && validatedData.slug !== existingBlog.slug) {
            const slugExists = await prisma.blog.findUnique({
                where: { slug: validatedData.slug },
            });

            if (slugExists) {
                return NextResponse.json(
                    { error: 'Blog with this slug already exists' },
                    { status: 400 }
                );
            }
        }

        // Extract tagIds and remove from main data
        const { tagIds, ...blogData } = validatedData;

        // Update blog
        const blog = await prisma.blog.update({
            where: { id },
            data: {
                ...blogData,
                categoryId: blogData.categoryId === '' ? null : blogData.categoryId,
                featuredImage: blogData.featuredImage === '' ? null : blogData.featuredImage,
                publishedAt: blogData.publishedAt
                    ? new Date(blogData.publishedAt)
                    : blogData.publishedAt === ''
                        ? null
                        : undefined,
                tags: tagIds
                    ? {
                        deleteMany: {},
                        create: tagIds.map((tagId) => ({
                            tag: {
                                connect: { id: tagId },
                            },
                        })),
                    }
                    : undefined,
            },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        avatar: true,
                    },
                },
                category: true,
                tags: {
                    include: {
                        tag: true,
                    },
                },
            },
        });

        return NextResponse.json(
            {
                message: 'Blog updated successfully',
                blog,
            },
            { status: 200 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Validation error', details: error.issues },
                { status: 400 }
            );
        }

        console.error('Error updating blog:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// DELETE - Delete a blog
export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { error: 'Blog ID is required' },
                { status: 400 }
            );
        }

        // Check if blog exists
        const existingBlog = await prisma.blog.findUnique({
            where: { id },
        });

        if (!existingBlog) {
            return NextResponse.json(
                { error: 'Blog not found' },
                { status: 404 }
            );
        }

        // Delete blog (cascade will handle related records)
        await prisma.blog.delete({
            where: { id },
        });

        return NextResponse.json(
            { message: 'Blog deleted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error deleting blog:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}