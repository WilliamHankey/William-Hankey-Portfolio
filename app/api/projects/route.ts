import { NextResponse } from 'next/server';
import { getProjectsFromSanity } from '@/app/projects/[slug]/sanity-data';

/**
 * GET /api/projects
 * Fetches all projects from Sanity (runs on server so SANITY_API_READ_TOKEN is available).
 */
export async function GET() {
  try {
    const projects = await getProjectsFromSanity();
    return NextResponse.json(projects ?? []);
  } catch (error) {
    console.error('API /api/projects error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}
