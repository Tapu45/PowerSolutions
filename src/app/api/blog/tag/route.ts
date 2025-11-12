import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { z } from "zod";

const prisma = new PrismaClient();

const tagSchema = z.object({
    name: z.string().min(1, "Tag name is required"),
    slug: z.string().min(1, "Slug is required"),
});

// GET - Fetch all tags or single tag by ID
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        // Fetch single tag by ID
        if (id) {
            const tag = await prisma.tag.findUnique({
                where: { id },
                include: {
                    _count: {
                        select: {
                            blogs: true,
                        },
                    },
                },
            });

            if (!tag) {
                return NextResponse.json({ error: "Tag not found" }, { status: 404 });
            }

            return NextResponse.json({ tag }, { status: 200 });
        }

        // Fetch all tags
        const tags = await prisma.tag.findMany({
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

        return NextResponse.json({ tags }, { status: 200 });
    } catch (error) {
        console.error("Error fetching tags:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// POST - Create a new tag
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input
        const validatedData = tagSchema.parse(body);

        // Check if tag with same name already exists
        const existingTag = await prisma.tag.findUnique({
            where: { name: validatedData.name },
        });

        if (existingTag) {
            return NextResponse.json(
                { error: "Tag with this name already exists" },
                { status: 400 }
            );
        }

        // Check if slug already exists
        const existingSlug = await prisma.tag.findUnique({
            where: { slug: validatedData.slug },
        });

        if (existingSlug) {
            return NextResponse.json(
                { error: "Tag with this slug already exists" },
                { status: 400 }
            );
        }

        // Create tag
        const tag = await prisma.tag.create({
            data: validatedData,
        });

        return NextResponse.json({ tag }, { status: 201 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ errors: error.issues }, { status: 400 });
        }

        console.error("Error creating tag:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// PUT - Update an existing tag
export async function PUT(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { error: "Tag ID is required" },
                { status: 400 }
            );
        }

        const body = await request.json();
        const validatedData = tagSchema.partial().parse(body);

        // Verify tag exists
        const existingTag = await prisma.tag.findUnique({
            where: { id },
        });

        if (!existingTag) {
            return NextResponse.json({ error: "Tag not found" }, { status: 404 });
        }

        // Check for duplicate name if updating
        if (validatedData.name && validatedData.name !== existingTag.name) {
            const duplicateName = await prisma.tag.findUnique({
                where: { name: validatedData.name },
            });

            if (duplicateName) {
                return NextResponse.json(
                    { error: "Tag with this name already exists" },
                    { status: 400 }
                );
            }
        }

        // Check for duplicate slug if updating
        if (validatedData.slug && validatedData.slug !== existingTag.slug) {
            const duplicateSlug = await prisma.tag.findUnique({
                where: { slug: validatedData.slug },
            });

            if (duplicateSlug) {
                return NextResponse.json(
                    { error: "Tag with this slug already exists" },
                    { status: 400 }
                );
            }
        }

        // Update tag
        const updatedTag = await prisma.tag.update({
            where: { id },
            data: validatedData,
        });

        return NextResponse.json({ tag: updatedTag }, { status: 200 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ errors: error.issues }, { status: 400 });
        }

        console.error("Error updating tag:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// DELETE - Delete a tag
export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { error: "Tag ID is required" },
                { status: 400 }
            );
        }

        // Verify tag exists
        const existingTag = await prisma.tag.findUnique({
            where: { id },
            include: {
                _count: {
                    select: {
                        blogs: true,
                    },
                },
            },
        });

        if (!existingTag) {
            return NextResponse.json({ error: "Tag not found" }, { status: 404 });
        }

        // Check if tag has associated blogs
        if (existingTag._count.blogs > 0) {
            return NextResponse.json(
                {
                    error: `Cannot delete tag with ${existingTag._count.blogs} associated blog(s)`,
                },
                { status: 400 }
            );
        }

        // Delete tag
        await prisma.tag.delete({
            where: { id },
        });

        return NextResponse.json(
            { message: "Tag deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting tag:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}