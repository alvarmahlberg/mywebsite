import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: { default: 'Alvar Mahlberg', template: '%s — Alvar Mahlberg' },
  description: 'I lead ambitious projects at the intersection of art, culture, and technology — generative art, digital exhibitions, and cultural platforms.',
  keywords: ['generative art', 'digital exhibition', 'art technology', 'cultural projects', 'Helsinki', 'project manager'],
  authors: [{ name: 'Alvar Mahlberg', url: 'https://alvar.energy' }],
  metadataBase: new URL('https://alvar.energy'),
  openGraph: {
    siteName: 'Alvar Mahlberg',
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', creator: '@alvarmahlberg' },
  icons: {
    icon: '/icon.png',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alvar Mahlberg',
  url: 'https://alvar.energy',
  jobTitle: 'Project Manager',
  description: 'I lead ambitious projects at the intersection of art, culture, and technology — generative art, digital exhibitions, and cultural platforms.',
  sameAs: ['https://www.linkedin.com/in/alvarmahlberg'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
