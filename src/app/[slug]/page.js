import Link from 'next/link';
import { notFound } from 'next/navigation';
import Carousel from './Carousel';

const projects = {
  'rmxta-newyork': {
    title: 'Remix the Archive New York',
    date: '2025',
    description: `Generative art exhibition at Dunkunsthalle, a former Dunkin' Donuts in Manhattan's Financial District transformed into an immersive cyberpunk bathhouse setting for generative art.`,
    links: [
      { label: 'Shadowplay Magazine Article', url: 'https://www.shadowplaymagazine.com/review/ov571e8xp7lxbyos01roy3l7o5gou9/' },
      { label: 'Remix the Archive Website', url: 'https://remixthearchive.com/' },
    ],
    slides: [
      { type: 'image', src: '/dunkkuj.jpg', alt: 'Exhibition view' },
      { type: 'image', src: '/rmxta-newyork-3.jpg', alt: 'Exhibition detail' },
      { type: 'image', src: '/janne8.jpg', alt: 'Exhibition detail' },
      { type: 'image', src: '/jannetupla4.jpg', alt: 'Exhibition detail' },
      { type: 'image', src: '/rmxta-newyork-6.jpg', alt: 'Exhibition detail' },
      { type: 'image', src: '/jannetupla2.jpg', alt: 'Exhibition detail' },
      { type: 'image', src: '/janne9.jpg', alt: 'Exhibition detail' },
    ],
    credits: `Artists: Newyellow, Nahuel Gerth, Andreas Rau, Ilmo Kapanen & Aarni Kapanen, Blas.v, Roni Kaufman, Agoston Nagy, Jeremy Schoenherr (Jeres), Arttu Koskela (Shaderism), Tuomo Rainio

Systems Design: Mitja Kaipiainen
Space Design: Leo Lindroos, Tuuli Kanerva, Antti Soini
Visual Design: Milla Paananen
Podium Design: Hanna Anonen
Communications: Emma Termonen, Rowena Hurme
Exhibition Texts: Sofia Garcia
Consulate General of Finland, NY: Anssi Vallius
FCINY: Kati Laakso
Finnish National Gallery: Johanna Eiramo
Dunkunsthalle: Rachel Rossin, Rebecca Picanso
Photos: Janne Tuunanen`,
  },

  'rmxta-helsinki': {
    title: 'Remix the Archive Helsinki',
    date: '2024',
    description: `Generative art exhibition presented at Alusta Space, Helsinki. The exhibition featured ten works based on archival material from Finland's national art collections. Visitors could explore the algorithms behind the artworks through specially designed interfaces.`,
    links: [
      { label: 'Fakewhale Article', url: 'https://log.fakewhale.xyz/remix-the-archive-at-alusta-space-helsinki/' },
      { label: 'STT Info', url: 'https://www.sttinfo.fi/tiedote/70520187/remix-the-archive-gives-artworks-from-the-finnish-national-gallerys-collection-a-new-form-through-generative-art?publisherId=17525083&lang=en' },
    ],
    slides: [
      { type: 'image', src: '/juhob1.jpg', alt: 'Exhibition detail' },
      { type: 'image', src: '/juhob2.jpg', alt: 'Exhibition detail' },
      { type: 'image', src: '/juhob3.jpg', alt: 'Exhibition detail' },
      { type: 'image', src: '/juhob4.jpg', alt: 'Exhibition detail' },
      { type: 'image', src: '/juhob5.jpg', alt: 'Exhibition detail' },
      { type: 'image', src: '/juhob6.jpg', alt: 'Exhibition detail' },
    ],
    credits: `Artists: Newyellow, Nahuel Gerth, Andreas Rau, Ilmo Kapanen & Aarni Kapanen, Blas.v, Roni Kaufman, Agoston Nagy, Jeremy Schoenherr (Jeres), Arttu Koskela (Shaderism), Tuomo Rainio

Systems Design: Mitja Kaipiainen
Creative Direction & Visual Identity: Erno Forsström
Communications: Milla Paananen
Production: Anna Puhakka
Technical: Elias Hakala
Photos: Juho Huttunen`,
  },

  'alusta-space': {
    title: 'Alusta Space',
    date: '2024',
    description: 'Conversion of an industrial office building into a contemporary exhibition venue in Helsinki. The space was designed for adaptable programming with a focus on flexible layout and sustainable materials.',
    slides: [
      { type: 'image', src: '/alustaspace4.jpg', alt: 'Interior view of Alusta Space' },
      { type: 'image', src: '/alustaspace8.jpg', alt: 'Curved wall detail' },
      { type: 'image', src: '/alusta-space3.jpg', alt: 'Alusta Space' },
      { type: 'image', src: '/alusta-space2.jpg', alt: 'Reflective stainless steel wall' },
    ],
    credits: `Space Design: Tuuli Kanerva, Leo Lindroos, Antti Soini
Construction: Niko Rissanen
Electrical Installation: Markku Huvilinna
Photos: Kalle Kouhia`,
  },

  'combine24': {
    title: 'Combine24',
    date: '2024',
    description: `Open international generative art competition inviting artists from around the world to create new works using CC0 material from Finland's national art collections. Participants were free to interpret the open archival material through their own generative practice.`,
    links: [
      { label: 'Combine24 Website', url: 'https://combine24.alusta.art' },
      { label: 'Finnish National Collection', url: 'https://www.kansallisgalleria.fi/en/search' },
    ],
    durations: [3000, 7000],
    slides: [
      { type: 'video', src: '/rmxta-video3.mp4', alt: 'Combine24 opening' },
      { type: 'image', src: '/combineaikataulu.png', alt: 'Combine24 schedule' },
    ],
    credits: `Producer: Anna Puhakka
Systems Design: Mitja Kaipiainen
Production: Milla Paananen
Website: Rasmus Haikka
Visual Identity: Antoine Paikert
Poster Series: Erno Forsström
Shortlist Committee: Sofia Garcia, Licia He,
Joonas Toivonen, Linda Dounia, Emily Xie
Final Jury: Martin Grasser, Luka Piškorec,
Diana Velasco, Leevi Haapala, Melissa Wiederrecht`,
  },

  'alusta-art': {
    title: 'Alusta.art',
    date: '2023',
    description: 'Blockchain-based platform for publishing, sharing, and collecting digital artworks — including images, video, music, 3D objects, and text. The platform was built for the Finnish National Gallery to support artists and collectors in the digital space.',
    links: [
      { label: 'Alusta.art', url: 'https://alusta.art/' },
    ],
    slides: [
      { type: 'video', src: '/platta1.mp4', alt: 'Alusta.art platform' },
    ],
    credits: `Lead Developer: Kasper Tontti
System Architect: Kai-Markus Lehtimäki
Software Development: Artur Veselovski, Manu Matila
UI Design: Erno Forsström
Brand Identity: Antoine Paikert, Joni Stanley
Creative Direction: Veera Almila, Juho Vesanen
FNG Team: Mitja Kaipiainen, Anna Puhakka
Partnerships: Marja Konttinen`,
  },

  'metaspace': {
    title: 'Metaspace',
    date: '2022',
    description: 'Web3-native virtual gallery platform enabling artists and institutions to present digital artworks in immersive online spaces. Co-founded as a startup exploring new models for digital exhibition and collecting.',
    slides: [
      { type: 'video', src: '/metaspace-video1.mp4', alt: 'Metaspace virtual gallery' },
      { type: 'image', src: '/metaspace1.jpg', alt: 'Metaspace gallery environment' },
      { type: 'image', src: '/metaspace3.jpg', alt: 'Metaspace gallery overview' },
    ],
    credits: `Startup adventure from my friends basement`,
  },

  'museum-of-tomorrow': {
    title: 'Museum of Tomorrow',
    date: '2025',
    description: 'Documentary series exploring how digital transformation is reshaping museums and their relationship with audiences. Filmed in New York with leading figures from the art and technology worlds.',
    links: [
      { label: 'Museum of Tomorrow Documentary', url: 'https://www.museumoftomorrow.fi' },
    ],
    slides: [
      { type: 'vimeo', src: 'https://player.vimeo.com/video/1144884805?title=0&byline=0&portrait=0', alt: 'Museum of Tomorrow documentary' },
    ],
    credits: `Interviewees: Asher Remy-Toledo, Billy Clark, Eileen Isagon Skyers, Dina Litovsky, Josh Hubberman, Lawrence Siu, Lynn Hershman Leeson, Manuel Dilone, Nick Law, Peter Hastings Falk, Timo Kiuru

Production: Veli Studio
Executive Producer: Veera Almila
Directors & Cinematography: Juho Vesanen, kaverikarim
Editor: Juho Vesanen
Website: Antoine Paikert, Manu Matila
Together with: Mitja Kaipiainen, Kati Laakso, Anssi Vallius`,
  },
};

export const dynamic = 'force-static';

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.slides?.[0]?.src
        ? [{ url: `https://alvar.energy${project.slides[0].src}` }]
        : [],
      type: 'website',
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    creator: { '@type': 'Person', name: 'Alvar Mahlberg', url: 'https://alvar.energy' },
    dateCreated: project.date,
    url: `https://alvar.energy/${slug}`,
  };

  return (
    <div className="pb-32 max-w-[1000px] mx-auto px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />

      {/* Nav */}
      <div className="pt-8 mb-8">
        <header>
          <Link href="/" className="text-[22px] font-bold text-black hover:text-gray-500 transition-colors">
            Alvar Mahlberg
          </Link>
          <nav className="flex gap-6 mt-1">
            <Link href="/" className="text-[15px] text-gray-500 hover:text-black transition-colors">
              Projects
            </Link>

            <Link href="/?view=about" className="text-[15px] text-gray-500 hover:text-black transition-colors">
              About
            </Link>
          </nav>
        </header>
      </div>

      {/* Karuselli */}
      <Carousel slides={project.slides} waitForVideo={slug === 'metaspace'} durations={project.durations || null} />

      {/* Header + teksti */}
      <div className="mt-8">
        <h1 className="text-[18px] md:text-[20px] font-bold text-black mb-3">
          {project.title}
        </h1>
        <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Linkit + credits */}
      <div>

        {project.links && project.links.length > 0 && (
          <div className="mt-6 space-y-1">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-black transition-colors group"
              >
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                {link.label}
              </a>
            ))}
          </div>
        )}

        <div className="mt-12">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4">Credits</p>
          <div className="columns-1 md:columns-2 gap-x-16">
            {project.credits.split('\n').map((line, i) => (
              line.trim()
                ? <p key={i} className="text-[13px] text-gray-500 leading-relaxed break-inside-avoid">{line}</p>
                : <div key={i} className="h-3" />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
