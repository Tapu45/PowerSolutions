import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const prisma = new PrismaClient();

// Admin credentials
const ADMIN_EMAIL = 'info@power-n.in';
const ADMIN_PASSWORD = 'admin@123';

// Validation schema
const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input
        const validatedData = loginSchema.parse(body);

        // Check if credentials match admin
        if (validatedData.email !== ADMIN_EMAIL || validatedData.password !== ADMIN_PASSWORD) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            );
        }

        // Check if admin user exists in database
        let user = await prisma.user.findUnique({
            where: { email: ADMIN_EMAIL },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                avatar: true,
                createdAt: true,
            },
        });

        // If user doesn't exist, create admin user
        if (!user) {
            const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);

            user = await prisma.user.create({
                data: {
                    email: ADMIN_EMAIL,
                    password: hashedPassword,
                    name: 'Admin',
                    role: 'ADMIN',
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    role: true,
                    avatar: true,
                    createdAt: true,
                },
            });
        }

        return NextResponse.json(
            {
                message: 'Login successful',
                user,
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

        console.error('Error during login:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}