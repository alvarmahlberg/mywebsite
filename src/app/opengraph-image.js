import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Alvar Mahlberg';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, color: '#000000', marginBottom: 16 }}>
          Alvar Mahlberg
        </div>
        <div style={{ fontSize: 28, color: '#6b7280' }}>
          Art · Culture · Technology
        </div>
      </div>
    ),
    { ...size }
  );
}
