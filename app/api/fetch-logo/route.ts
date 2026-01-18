import { NextRequest, NextResponse } from 'next/server';

function guessDomain(companyName: string): string {
  // Remove common suffixes and clean up
  const cleaned = companyName
    .toLowerCase()
    .replace(/\s+(inc|llc|ltd|corp|co|company|health|labs|medical)\.?$/i, '')
    .replace(/[^a-z0-9]/g, '');

  return `${cleaned}.com`;
}

export async function POST(request: NextRequest) {
  try {
    const { companyName, domain } = await request.json();

    if (!companyName && !domain) {
      return NextResponse.json(
        { error: 'Company name or domain is required' },
        { status: 400 }
      );
    }

    // Use provided domain or guess from company name
    const targetDomain = domain || guessDomain(companyName);

    // Use Google's favicon service (reliable and free)
    const logoUrl = `https://www.google.com/s2/favicons?domain=${targetDomain}&sz=128`;

    return NextResponse.json({
      logoUrl,
      domain: targetDomain,
    });

  } catch (error) {
    console.error('Error fetching logo:', error);
    return NextResponse.json(
      { error: 'Failed to fetch logo' },
      { status: 500 }
    );
  }
}
