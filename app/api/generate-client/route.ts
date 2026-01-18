import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: NextRequest) {
  try {
    const { input } = await request.json();

    if (!input) {
      return NextResponse.json({ error: 'Input is required' }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant that generates company information for a PR portfolio website. Given a company name or URL, provide:
1. The official company name
2. A brief description (1-2 sentences) of what the company does
3. A category: either "Digital Health" (for healthcare, medical, health tech, telehealth, digital therapeutics companies) or "Consumer Tech" (for all other technology companies)

Respond in JSON format only:
{
  "name": "Company Name",
  "description": "Brief description of the company",
  "category": "Digital Health" or "Consumer Tech"
}`
        },
        {
          role: 'user',
          content: `Generate information for: ${input}`
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
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error generating client info:', error);
    return NextResponse.json(
      { error: 'Failed to generate client information' },
      { status: 500 }
    );
  }
}
