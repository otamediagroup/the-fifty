import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name') || 'The Fifty';
    const rank = searchParams.get('rank');
    const score = searchParams.get('score');

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '1200px',
            height: '630px',
            backgroundColor: '#0F1720',
            padding: '60px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background gradient accent */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(5,103,115,0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Top Section: "THE FIFTY" */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#C9A84C',
                letterSpacing: '4px',
              }}
            >
              THE FIFTY
            </div>
          </div>

          {/* Middle Section: Name */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#FFFFFF',
                lineHeight: '1.2',
                marginBottom: '24px',
                maxWidth: '900px',
                wordWrap: 'break-word',
              }}
            >
              {name}
            </div>

            {/* Rank and Score Row */}
            {(rank || score) && (
              <div
                style={{
                  display: 'flex',
                  gap: '40px',
                  fontSize: '24px',
                  color: '#A0A0A0',
                }}
              >
                {rank && (
                  <div>
                    <span style={{ color: '#C9A84C', fontWeight: 'bold' }}>
                      Rank:
                    </span>{' '}
                    #{rank}
                  </div>
                )}
                {score && (
                  <div>
                    <span style={{ color: '#C9A84C', fontWeight: 'bold' }}>
                      Score:
                    </span>{' '}
                    {score}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Section: OTA Media Info */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              paddingTop: '20px',
              borderTop: '1px solid rgba(201,168,76,0.2)',
            }}
          >
            <div
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#FFFFFF',
              }}
            >
              OTA Media
            </div>
            <div
              style={{
                fontSize: '18px',
                color: '#056773',
                fontWeight: '500',
              }}
            >
              otamediagroup.com
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    return new Response('Failed to generate image', { status: 500 });
  }
}
