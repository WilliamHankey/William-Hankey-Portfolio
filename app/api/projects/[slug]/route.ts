import { NextResponse } from 'next/server';
import { getProjectBySlugFromSanity } from '@/app/projects/[slug]/sanity-data';

/**
 * GET /api/projects/[slug]
 * Fetches a single project from Sanity (runs on server so SANITY_API_READ_TOKEN is available).
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    if (!slug) {
      return NextResponse.json(
        { error: 'Slug is required' },
        { status: 400 }
      );
    }
    const project = await getProjectBySlugFromSanity(slug);
    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(project);
  } catch (error) {
    console.error('API /api/projects/[slug] error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}
