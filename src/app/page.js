import HomeContent from './HomeContent';

export const metadata = {
  title: 'Alvar Mahlberg',
  description: 'I lead ambitious projects at the intersection of art, culture, and technology — generative art, digital exhibitions, and cultural platforms.',
  openGraph: {
    title: 'Alvar Mahlberg',
    description: 'I lead ambitious projects at the intersection of art, culture, and technology — generative art, digital exhibitions, and cultural platforms.',
    url: 'https://alvar.energy',
    siteName: 'Alvar Mahlberg',
    images: [{ url: 'https://alvar.energy/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Alvar Mahlberg' },
};

export default function Home() {
  return <HomeContent />;
}
