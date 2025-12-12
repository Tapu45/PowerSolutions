
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { z } from 'zod';

const prisma = new PrismaClient();

const contactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(1, 'Phone number is required'),
    company: z.string().optional().or(z.literal('')),
    location: z.string().optional().or(z.literal('')),
    service: z.string().min(1, 'Service type is required'),
    message: z.string().min(1, 'Message is required'),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const result = contactSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
        }

        const contactQuery = await prisma.contactQuery.create({
            data: {
                ...result.data,
                status: 'NEW',
            },
        });

        return NextResponse.json({ message: 'Query submitted successfully', id: contactQuery.id }, { status: 201 });
    } catch (error) {
        console.error('Error submitting contact query:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const skip = (page - 1) * limit;

        const where: any = {};
        if (status) where.status = status;

        const [queries, total] = await Promise.all([
            prisma.contactQuery.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            prisma.contactQuery.count({ where }),
        ]);

        return NextResponse.json({
            queries,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        }, { status: 200 });

    } catch (error) {
        console.error('Error fetching contact queries:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        await prisma.contactQuery.delete({
            where: { id },
        });

        return NextResponse.json({ message: 'Query deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting contact query:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const body = await request.json();
        const { id, status } = body;

        if (!id || !status) {
            return NextResponse.json({ error: 'ID and Status are required' }, { status: 400 });
        }

        const updatedQuery = await prisma.contactQuery.update({
            where: { id },
            data: { status }
        });

        return NextResponse.json(updatedQuery, { status: 200 });

    } catch (error) {
        console.error('Error updating status:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
