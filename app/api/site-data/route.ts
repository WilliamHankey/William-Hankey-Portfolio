import { NextResponse } from 'next/server';
import { getSiteData } from '@/lib/site-data';

/**
 * GET /api/site-data
 * Returns { profile, skills, testimonials, experiences, articles } from Sanity.
 * Runs on the server so the read token is available; the client components
 * share a single cached request via useSiteData().
 */
export async function GET() {
  try {
    const data = await getSiteData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API /api/site-data error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch site data' },
      { status: 500 }
    );
  }
}