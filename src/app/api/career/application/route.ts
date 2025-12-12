
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { z } from 'zod';

const prisma = new PrismaClient();

const applicationSchema = z.object({
    jobId: z.string().uuid('Invalid Job ID'),
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(1, 'Phone number is required'),
    address: z.string().optional(),
    education: z.string().optional(),
    experience: z.string().optional(),
    skills: z.string().optional(),
    resumeUrl: z.string().url('Invalid resume URL'),
    coverLetter: z.string().optional(),
});

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const jobId = searchParams.get('jobId');
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const skip = (page - 1) * limit;

        const where: any = {};
        if (jobId) where.jobId = jobId;

        const [applications, total] = await Promise.all([
            prisma.jobApplication.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    job: {
                        select: {
                            title: true
                        }
                    }
                }
            }),
            prisma.jobApplication.count({ where }),
        ]);

        return NextResponse.json({
            applications,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        }, { status: 200 });

    } catch (error) {
        console.error('Error fetching applications:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const result = applicationSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
        }

        const existingApplication = await prisma.jobApplication.findFirst({
            where: {
                jobId: result.data.jobId,
                email: result.data.email
            }
        });

        if (existingApplication) {
            return NextResponse.json({ error: 'You have already applied for this job.' }, { status: 409 });
        }

        const application = await prisma.jobApplication.create({
            data: result.data,
        });

        return NextResponse.json(application, { status: 201 });
    } catch (error) {
        console.error('Error submitting application:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
