export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { z } from "zod";

const prisma = new PrismaClient();

const categorySchema = z.object({
    name: z.string().min(1, "Category name is required"),
    slug: z.string().min(1, "Slug is required"),
    description: z.string().optional(),
});

// GET - Fetch all categories or single category by ID
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        // Fetch single category by ID
        if (id) {
            const category = await prisma.category.findUnique({
                where: { id },
                include: {
                    _count: {
                        select: {
                            blogs: true,
                        },
                    },
                },
            });

            if (!category) {
                return NextResponse.json(
                    { error: "Category not found" },
                    { status: 404 }
                );
            }

            return NextResponse.json({ category }, { status: 200 });
        }

        // Fetch all categories
        const categories = await prisma.category.findMany({
            include: {
                _count: {
                    select: {
                        blogs: true,
                    },
                },
            },
            orderBy: {
                name: "asc",
            },
        });

        return NextResponse.json({ categories }, { status: 200 });
    } catch (error) {
        console.error("Error fetching categories:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// POST - Create a new category
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input
        const validatedData = categorySchema.parse(body);

        // Check if category with same name already exists
        const existingCategory = await prisma.category.findUnique({
            where: { name: validatedData.name },
        });

        if (existingCategory) {
            return NextResponse.json(
                { error: "Category with this name already exists" },
                { status: 400 }
            );
        }

        // Check if slug already exists
        const existingSlug = await prisma.category.findUnique({
            where: { slug: validatedData.slug },
        });

        if (existingSlug) {
            return NextResponse.json(
                { error: "Category with this slug already exists" },
                { status: 400 }
            );
        }

        // Create category
        const category = await prisma.category.create({
            data: validatedData,
        });

        return NextResponse.json({ category }, { status: 201 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ errors: error.issues }, { status: 400 });
        }

        console.error("Error creating category:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// PUT - Update an existing category
export async function PUT(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { error: "Category ID is required" },
                { status: 400 }
            );
        }

        const body = await request.json();
        const validatedData = categorySchema.partial().parse(body);

        // Verify category exists
        const existingCategory = await prisma.category.findUnique({
            where: { id },
        });

        if (!existingCategory) {
            return NextResponse.json(
                { error: "Category not found" },
                { status: 404 }
            );
        }

        // Check for duplicate name if updating
        if (validatedData.name && validatedData.name !== existingCategory.name) {
            const duplicateName = await prisma.category.findUnique({
                where: { name: validatedData.name },
            });

            if (duplicateName) {
                return NextResponse.json(
                    { error: "Category with this name already exists" },
                    { status: 400 }
                );
            }
        }

        // Check for duplicate slug if updating
        if (validatedData.slug && validatedData.slug !== existingCategory.slug) {
            const duplicateSlug = await prisma.category.findUnique({
                where: { slug: validatedData.slug },
            });

            if (duplicateSlug) {
                return NextResponse.json(
                    { error: "Category with this slug already exists" },
                    { status: 400 }
                );
            }
        }

        // Update category
        const updatedCategory = await prisma.category.update({
            where: { id },
            data: validatedData,
        });

        return NextResponse.json({ category: updatedCategory }, { status: 200 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ errors: error.issues }, { status: 400 });
        }

        console.error("Error updating category:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// DELETE - Delete a category
export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { error: "Category ID is required" },
                { status: 400 }
            );
        }

        // Verify category exists
        const existingCategory = await prisma.category.findUnique({
            where: { id },
            include: {
                _count: {
                    select: {
                        blogs: true,
                    },
                },
            },
        });

        if (!existingCategory) {
            return NextResponse.json(
                { error: "Category not found" },
                { status: 404 }
            );
        }

        // Check if category has associated blogs
        if (existingCategory._count.blogs > 0) {
            return NextResponse.json(
                {
                    error: `Cannot delete category with ${existingCategory._count.blogs} associated blog(s)`,
                },
                { status: 400 }
            );
        }

        // Delete category
        await prisma.category.delete({
            where: { id },
        });

        return NextResponse.json(
            { message: "Category deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting category:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}