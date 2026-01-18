import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // First, try to fetch the page content
    let pageContent = '';
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; TaraWagnerPR/1.0)',
        },
      });
      if (response.ok) {
        const html = await response.text();
        // Extract title and meta description
        const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
        const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
        const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i);

        pageContent = `
Title: ${titleMatch?.[1] || ogTitleMatch?.[1] || 'Unknown'}
Description: ${descMatch?.[1] || 'No description available'}
URL: ${url}`;
      }
    } catch (e) {
      // If fetch fails, we'll just use the URL
      pageContent = `URL: ${url}`;
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant that extracts press article information. Given a URL and optional page content, extract:
1. The article headline/title
2. The publication name (e.g., TechCrunch, Forbes, Wall Street Journal)
3. A category: "Trade" (industry publications like Healthcare IT News, MobiHealthNews), "Business" (business publications like Forbes, WSJ, TechCrunch), or "Consumer" (general consumer publications like USA Today, Good Housekeeping)

Respond in JSON format only:
{
  "title": "Article headline",
  "publication": "Publication Name",
  "category": "Trade" or "Business" or "Consumer"
}`
        },
        {
          role: 'user',
          content: `Extract press information from:\n${pageContent}`
        }
      ],
      temperature: 0.3,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      return NextResponse.json({ error: 'No response from AI' }, { status: 500 });
    }

    // Parse the JSON response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ error: 'Invalid response format' }, { status: 500 });
    }

    const data = JSON.parse(jsonMatch[0]);
    return NextResponse.json({ ...data, url });

  } catch (error) {
    console.error('Error generating press info:', error);
    return NextResponse.json(
      { error: 'Failed to generate press information' },
      { status: 500 }
    );
  }
}
