
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { z } from 'zod';

const prisma = new PrismaClient();

const jobSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    slug: z.string().min(1, 'Slug is required'),
    location: z.string().min(1, 'Location is required'),
    type: z.string().min(1, 'Type is required'),
    department: z.string().min(1, 'Department is required'),
    description: z.string().min(1, 'Description is required'),
    requirements: z.string().min(1, 'Requirements are required'),
    status: z.enum(['OPEN', 'CLOSED']).optional(),
});

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        const slug = searchParams.get('slug');
        const status = searchParams.get('status');
        const department = searchParams.get('department');
        const location = searchParams.get('location');
        const type = searchParams.get('type');
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const skip = (page - 1) * limit;

        if (id || slug) {
            const whereClause = id ? { id } : { slug: slug as string };
            const job = await prisma.job.findUnique({
                where: whereClause,
            });

            if (!job) {
                return NextResponse.json({ error: 'Job not found' }, { status: 404 });
            }

            return NextResponse.json(job, { status: 200 });
        }

        const where: any = {};
        if (status) where.status = status;
        if (department) where.department = department;
        if (location) where.location = location;
        if (type) where.type = type;

        const [jobs, total] = await Promise.all([
            prisma.job.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            prisma.job.count({ where }),
        ]);

        return NextResponse.json({
            jobs,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        }, { status: 200 });

    } catch (error) {
        console.error('Error fetching jobs:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const result = jobSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
        }

        const job = await prisma.job.create({
            data: {
                ...result.data,
                status: result.data.status || 'OPEN',
            },
        });

        return NextResponse.json(job, { status: 201 });
    } catch (error) {
        console.error('Error creating job:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const { id, ...data } = body;

        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        const result = jobSchema.partial().safeParse(data);

        if (!result.success) {
            return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
        }

        const job = await prisma.job.update({
            where: { id },
            data: result.data,
        });

        return NextResponse.json(job, { status: 200 });
    } catch (error) {
        console.error('Error updating job:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'Job ID is required' }, { status: 400 });
        }

        await prisma.job.delete({
            where: { id },
        });

        return NextResponse.json({ message: 'Job deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting job:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
