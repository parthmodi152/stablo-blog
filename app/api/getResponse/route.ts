import { NextResponse } from 'next/server'
 
export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')
  try {
    await fetch('https://api.getresponse.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': 'api-key as2nj1ssd0463uzqncwptsawzl1edy17',
        },
        body: JSON.stringify({
              email: email,
              dayOfCycle: 0,
              campaign: {
                campaignId: 'qJVBJ',
              },
            }),
      })

      NextResponse.json({status: 200});
  } catch (error) {
      console.error('Failed to send contact to GetResponse', error);
      NextResponse.json({ error: 'An error occurred while sending the contact to GetResponse', status: 500 });
    }
}
