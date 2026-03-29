import { NextRequest, NextResponse } from 'next/server';
import { logAnalyticsEvent, getAnalyticsSummary } from '@/lib/admin/db';

// GET analytics summary
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '30');

    const summary = getAnalyticsSummary(days);

    return NextResponse.json({ success: true, data: summary });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}

// POST log analytics event
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.type) {
      return NextResponse.json(
        { success: false, error: 'Event type is required' },
        { status: 400 }
      );
    }

    logAnalyticsEvent({
      type: body.type,
      productId: body.productId,
      page: body.page,
      userAgent: request.headers.get('user-agent') || undefined,
      referrer: request.headers.get('referer') || undefined,
    });

    return NextResponse.json({ success: true, message: 'Event logged' });
  } catch (error) {
    console.error('Error logging event:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to log event' },
      { status: 500 }
    );
  }
}
