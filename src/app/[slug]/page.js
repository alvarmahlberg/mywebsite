import Link from 'next/link';
import Image from 'next/image';

const projects = {
  'rmxta-newyork': {
    title: 'RMXTA New York',
    date: 'June 15, 2025',
    author: 'Alvar Mahlberg',
    description: `A former Dunkin' Donuts in Financial District transformed into a stage for the generative art exhibition. Executed from concept to completion.`,
    team: `**Team**
Systems Design: Mitja Kaipiainen
Space Design: Leo Lindroos, Tuuli Kanerva, Antti Soini
Visual Design: Milla Paananen
Podium Design: Hanna Anonen
Communications: Emma Termonen, Rowena Hurme
Photos: Janne Tuunanen
Together with: Kati Laakso, Anssi Vallius, Johanna Eiramo`,
    content: `
      [KUVA_1]

      [KUVA_2]

      [KUVA_3]

      

      [KUVA_4]

      [KUVA_5]

      [KUVA_6]

      This project was a collaboration between the Finnish National Gallery, the Finnish Cultural Institute, and Consulate General of Finland in New York.

      [Shadowplay Magazine Article](https://www.shadowplaymagazine.com/review/ov571e8xp7lxbyos01roy3l7o5gou9/)
      [Remix the Archive Website](https://remixthearchive.com/)
      [Museum of Tomorrow Documentary](https://www.museumoftomorrow.fi)
    `
  },
  'rmxta-helsinki': {
    title: 'RMXTA Helsinki',
    date: 'December 13, 2024',
    author: 'Alvar Mahlberg',
    description: 'Moving beyond the museum’s walls to present new forms of art and engage new audiences. Full-scale generative art exhibition from concept to completion.',
    team: `**Team**
Systems Design: Mitja Kaipiainen
CD & Visual Identity: Erno Forsström
Communications: Milla Paananen
Production: Anna Puhakka
Controllers: Elias Hakala
Photos: Juho Huttunen`,
    content: `
      [MOBILE_1]

      [MOBILE_2]

      [MOBILE_3]

      [MOBILE_4]

      [MOBILE_5]

      [LAAJAKUVA]

      [UUSI_KUVA]

      [PYSTYKUVAT]

      [VAALEA_KUVA]

      [KAKSI_KUVAA]

      [Fakewhale Article](https://log.fakewhale.xyz/remix-the-archive-at-alusta-space-helsinki/)
      [STT Info](https://www.sttinfo.fi/tiedote/70520187/remix-the-archive-gives-artworks-from-the-finnish-national-gallerys-collection-a-new-form-through-generative-art?publisherId=17525083&lang=en)
    `,
  },
  'alusta-space': {
    title: 'Alusta Space',
    date: 'September 15, 2024',
    author: 'Alvar Mahlberg',
    description: 'Conversion of an old office building into a modern exhibition venue. Strong focus on recyclable materials and the multi-purpose nature of the space.',
    team: `**Team**
Space Design: Tuuli Kanerva, Leo Lindroos, Antti Soini
Construction: Niko Rissanen
Electrical installation: Markku Huvilinna
Photos: Kalle Kouhia`,
    content: `
      [NEW_IMAGE]   

      [SECOND_IMAGE]

      [THIRD_IMAGE]
    `,
  },
  'combine24': {
    title: 'Combine24',
    date: 'September 1, 2024',
    author: 'Alvar Mahlberg',
    description: 'A global digital art competition to elevate Finland’s national art collection through creative coding.',
    team: `**Team**
Producer: Anna Puhakka
Systems Designer: Mitja Kaipiainen
Production: Milla Paananen
Website: Rasmus Haikka 
Visual identity: Antoine Paikert
Poster Series: Erno Forsström`,
    content: `
      [COMBINE_KUVA_3]

      [COMBINE_NELIO]

      [COMBINE_VIDEO_3]

      [NELIO_KUVA]

      [KAKSI_VIDEOTA]

      [KAKSI_VIDEOTA_2]

      [Combine24 Website](https://combine24.alusta.art)
      [Finnish National Gallery](https://www.kansallisgalleria.fi/en)
    `,
  },
  'alusta-art': {
    title: 'Alusta.art',
    date: 'December 15, 2023',
    author: 'Alvar Mahlberg',
    description: 'Blockchain-based platform that enables the publishing, sharing, and collecting of digital content — including images, videos, music, 3d objects, and texts.',
    team: `**Team**
Lead Developer: Kasper Tontti
System Architect: Kai-Markus Lehtimäki
Software Development: Artur Veselovski, Manu Matila
UI Designer: Erno Forsström

Brand Identity: Antoine Paikert, Joni Stanley
Creative Direction: Veera Almila, Juho Vesanen
FNG Team: Mitja Kaipiainen, Anna Puhakka
Partnerships: Marja Konttinen`,
    content: `
      [ALUSTA_VAAKA]

      [ALUSTA_VIDEO]

      [ALUSTA_NELIO_VIDEO]

      [Alusta.art](https://alusta.art/)
    `,
  },
  'metaspace': {
    title: 'Metaspace',
    date: 'June 10, 2022',
    author: 'Alvar Mahlberg',
    description: 'Web3 native platform for WebGL-based virtual galleries where users could create their own art exhibitions.',
    team: 'Startup adventure from my friends basement',
    content: `
      [NEW_IMAGE] 

      [METASPACE_KUVA]

      [METASPACE_VAAKA]
    `,
  }
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

const MediaWrapper = ({ children, creator, darkText }) => (
  <div className="group">
    {children}
    {creator && (
      <div className={`opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-0 left-0 right-0 ${darkText ? 'text-black' : 'text-white'} p-2 text-[12px] md:text-[13px] pointer-events-none z-10`}>
        {creator}
      </div>
    )}
  </div>
);

export default async function ProjectPage({ params, searchParams }) {
  const slug = await Promise.resolve(params.slug);
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const renderContent = async (paragraph, index) => {
    if (paragraph.includes('- ')) {
      const items = paragraph.split('\n');
      return (
        <ul key={index}>
          {items.map((item, i) => (
            <li key={i}>{item.replace('- ', '')}</li>
          ))}
        </ul>
      );
    }
    if (paragraph.trim() === '[NEW_IMAGE]' && slug === 'metaspace') {
      return (
        <div key={index}>
          <div className="aspect-[4/3] relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/metaspace-video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );
    } else if (paragraph.trim() === '[NEW_IMAGE]') {
      return (
        <div key={index}>
          <div className="aspect-[5/4] relative">
            <MediaWrapper creator="">
              <Image
                src="/alustaspace4.jpg"
                alt="Interior view of Alusta Space gallery"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[SECOND_IMAGE]') {
      return (
        <div key={index}>
          <div className="aspect-[5/4] relative">
            <MediaWrapper creator="">
              <Image
                src="/alustaspace8.jpg"
                alt="Curved wall detail in Alusta Space"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[THIRD_IMAGE]') {
      return (
        <div key={index}>
          <div className="aspect-[3/4] relative">
            <MediaWrapper creator="">
              <Image
                src="/alusta-space2.jpg"
                alt="Reflective stainless steel wall in Alusta Space"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[LAAJAKUVA]') {
      return (
        <div key={index} className="hidden md:block">
          <div className="aspect-[4/3] relative">
            <MediaWrapper creator="RMXTA Helsinki Exhibition">
              <Image
                src="/rmxta-helsinki-1.jpg"
                alt="RMXTA Helsinki exhibition overview"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[VAALEA_KUVA]') {
      return (
        <div key={index} className="hidden md:block">
          <div className="aspect-[4/3] relative">
            <MediaWrapper creator="Exhibition Posters by Erno Forsström">
              <Image
                src="/vaaleakuva.jpg"
                alt="RMXTA exhibition space"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[KAKSI_KUVAA]') {
      return (
        <div key={index} className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/4] relative md:block hidden">
            <MediaWrapper creator="Exhibition Video by Milla Paananen">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/juliste.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </MediaWrapper>
          </div>
          <div className="aspect-[3/4] relative">
            <MediaWrapper creator="Exhibition Video by Milla Paananen">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/rmxta-video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[UUSI_KUVA]') {
      return (
        <div key={index} className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
          <div className="aspect-[3/4] relative md:block hidden">
            <MediaWrapper creator="">
              <Image
                src="/image1.jpg"
                alt="Interactive installation at RMXTA exhibition"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
          <div className="aspect-[3/4] relative">
            <MediaWrapper creator="">
              <Image
                src="/uusikuva1.jpg"
                alt="RMXTA exhibition detail"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[PYSTYKUVAT]') {
      return (
        <div key={index} className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
          <div className="aspect-[2/3] relative md:block hidden">
            <MediaWrapper creator="">
              <Image
                src="/image6.jpg"
                alt="RMXTA exhibition controller detail"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
          <div className="aspect-[2/3] relative">
            <MediaWrapper creator="">
              <Image
                src="/taso.jpg"
                alt="RMXTA exhibition display setup"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim().startsWith('Team:')) {
      return (
        <p key={index} className="text-[12px] md:text-[14px] text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">
          {paragraph.trim()}Elia
        </p>
      );
    }
    if (paragraph.trim() === '[COMBINE_KUVA_3]') {
      return (
        <div key={index}>
          <div className="aspect-[5/3] relative border border-gray-200">
            <MediaWrapper creator="" darkText>
              <Image
                src="/combineaikataulu.jpg"
                alt="Combine24 timeline"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[COMBINE_VIDEO_3]') {
      return (
        <div key={index}>
          <div className="aspect-[4/3] relative border border-gray-200">
            <MediaWrapper creator="" darkText>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/blas.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[KAKSI_VIDEOTA]') {
      return (
        <div key={index} className="hidden md:grid md:grid-cols-2 gap-4 md:gap-4">
          <div className="aspect-square relative">
            <MediaWrapper creator="Perseverance by Blas.v">
              <Image
                src="/claudio.jpg"
                alt="Generative artwork by Claudio"
                data-creator="Perseverance by Blas.v"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
          <div className="aspect-square relative">
            <MediaWrapper creator="A Dance With History by Newyellow" darkText>
              <Image
                src="/dance.jpg"
                alt="Generative artwork by NewYellow"
                data-creator="A Dance With History by Newyellow"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[KAKSI_VIDEOTA_2]') {
      return (
        <div key={index} className="hidden md:grid md:grid-cols-2 gap-4 md:gap-4">
          <div className="aspect-square relative">
            <MediaWrapper creator="Repetition and Noise by Jeres">
              <Image
                src="/jeres1.jpg"
                alt="Generative artwork by Jeres"
                data-creator="Repetition and Noise by Jeres"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
          <div className="aspect-square relative">
            <MediaWrapper creator="Portrait Robot by Roni Kaufman">
              <Image
                src="/roni.jpg"
                alt="Generative artwork by Roni"
                data-creator="Portrait Robot by Roni Kaufman"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[KAKSI_VIDEOTA_ALUSTA]') {
      return (
        <div key={index}>
          <div className="aspect-square relative">
            <MediaWrapper creator="Alusta.art platform release video by Erno Forsström">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/alusta ig.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[ALUSTA_NELIO]') {
      return (
        <div key={index}>
          <div className="aspect-square relative">
            <MediaWrapper creator="Alusta brand assets">
              <Image
                src="/alustataso.jpg"
                alt="Alusta brand assets"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[ALUSTA_INTRO_KUVA]') {
      return (
        <div key={index}>
          <div className="aspect-[16/9] relative">
            <MediaWrapper creator="Alusta.art platform interface">
              <Image
                src="/valko.jpg"
                alt="Alusta.art platform interface"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[METASPACE_KUVA]') {
      return (
        <div key={index}>
          <div className="aspect-[16/9] relative">
            <MediaWrapper creator="Metaspace">
              <Image
                src="/metaspace1.jpg"
                alt="Metaspace virtual gallery environment"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[METASPACE_VAAKA]') {
      return (
        <div key={index}>
          <div className="aspect-[16/10] relative">
            <MediaWrapper creator="">
              <Image
                src="/metaspace3.jpg"
                alt="Metaspace virtual gallery overview"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.includes('**')) {
      const parts = paragraph.split('**');
      return (
        <p key={index}>
          {parts.map((part, i) => 
            i % 2 === 0 ? part : <strong key={i}>{part}</strong>
          )}
        </p>
      );
    }
    if (paragraph.includes('[') && paragraph.includes('](')) {
      const parts = paragraph.split(/\[|\]|\(|\)/);
      return (
        <div key={index} className="space-y-1">
          {parts.reduce((acc, part, i) => {
            if (i % 4 === 1) {
              const linkUrl = parts[i + 2];
              return [...acc, 
                <Link key={i} href={linkUrl} className="underline hover:text-black block" target="_blank">
                  {part}
                </Link>
              ];
            } else if (i % 4 === 0) {
              return [...acc, part];
            }
            return acc;
          }, [])}
        </div>
      );
    }
    if (paragraph.trim() === '[ALUSTA_VAAKA]') {
      return (
        <div key={index}>
          <div className="aspect-[4/3] relative">
            <MediaWrapper creator="">
              <Image
                src="/platform.jpg"
                alt="Alusta.art platform interface"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[ALUSTA_VIDEO]') {
      return (
        <div key={index}>
          <div className="aspect-square relative">
            <MediaWrapper creator="">
              <Image
                src="/mobile.jpg"
                alt="Alusta.art mobile interface"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[ALUSTA_NELIO_VIDEO]') {
      return (
        <div key={index}>
          <div className="aspect-[3/2] relative">
            <MediaWrapper creator="">
              <Image
                src="/alustateksti.jpg"
                alt="Alusta brand logo"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[MOBILE_1]') {
      return (
        <div key={index} className="md:hidden">
          <div className="aspect-[4/3] relative">
            <MediaWrapper creator="">
              <Image
                src="/rmxta-helsinki-1.jpg"
                alt="RMXTA Helsinki exhibition view"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[MOBILE_2]') {
      return (
        <div key={index} className="md:hidden">
          <div className="aspect-[3/4] relative">
            <MediaWrapper creator="">
              <Image
                src="/rmxta-helsinki-2.jpg"
                alt="RMXTA Helsinki exhibition view"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[MOBILE_3]') {
      return (
        <div key={index} className="md:hidden">
          <div className="aspect-[3/4] relative">
            <MediaWrapper creator="">
              <Image
                src="/rmxta-helsinki-3.jpg"
                alt="RMXTA Helsinki exhibition view"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[MOBILE_4]') {
      return (
        <div key={index} className="md:hidden">
          <div className="aspect-[3/4] relative">
            <MediaWrapper creator="">
              <Image
                src="/rmxta-helsinki-4.jpg"
                alt="RMXTA Helsinki exhibition view"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[MOBILE_5]') {
      return (
        <div key={index} className="md:hidden">
          <div className="aspect-[3/4] relative">
            <MediaWrapper creator="">
              <Image
                src="/rmxta-helsinki-5.jpg"
                alt="RMXTA Helsinki exhibition view"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[COMBINE_NELIO]') {
      return (
        <div key={index}>
          <div className="aspect-[3/2] relative border border-gray-200">
            <MediaWrapper creator="" darkText>
              <Image
                src="/combinesaannot.jpg"
                alt="Combine24 artwork"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[NELIO_KUVA]') {
      return (
        <div key={index}>
          <div className="aspect-square relative">
            <MediaWrapper creator="">
              <Image
                src="/CombineNelio.jpg"
                alt="Combine24 competition artwork"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[KUVA_1]') {
      return (
        <div key={index}>
          <div className="aspect-[3/2] relative">
            <MediaWrapper creator="">
              <Image
                src="/dunkku.jpeg"
                alt="RMXTA New York exhibition view"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[KUVA_2]') {
      return (
        <div key={index}>
          <div className="aspect-[2/3] relative">
            <MediaWrapper creator="">
              <Image
                src="/rmxta-newyork-2.jpg"
                alt="RMXTA New York exhibition detail"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[KUVA_3]') {
      return (
        <div key={index}>
          <div className="aspect-[3/2] relative">
            <MediaWrapper creator="">
              <Image
                src="/rmxta-newyork-3.jpg"
                alt="RMXTA New York exhibition detail"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[KUVA_4]') {
      return (
        <div key={index}>
          <div className="aspect-[2/3] relative">
            <MediaWrapper creator="">
              <Image
                src="/rmxta-newyork-4.jpg"
                alt="RMXTA New York exhibition detail"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[KUVA_5]') {
      return (
        <div key={index}>
          <div className="aspect-[2/3] relative">
            <MediaWrapper creator="">
              <Image
                src="/rmxta-newyork-5.jpg"
                alt="RMXTA New York exhibition detail"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[KUVA_6]') {
      return (
        <div key={index}>
          <div className="aspect-[3/2] relative">
            <MediaWrapper creator="">
              <Image
                src="/rmxta-newyork-6.jpg"
                alt="RMXTA New York exhibition detail"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    return <p key={index}>{paragraph.trim()}</p>;
  };

  return (
    <div className="flex flex-col items-center pt-8 md:pt-16">
      <div className="w-[90%] md:w-[800px] px-4 md:px-0">
        <div className="text-[13px] md:text-[15px] text-gray-600 mb-4">
          {project.date} by <Link href="/" className="underline hover:text-black">{project.author}</Link>
        </div>

        <h1 className="text-[28px] md:text-[48px] font-bold text-black mb-6">
          {project.title}
        </h1>

        <p className="text-[16px] md:text-[18px] text-gray-700 leading-relaxed mb-10">
          {project.description}
        </p>

        <div className="text-gray-600 space-y-10 text-[16px] md:text-[18px] leading-relaxed">
          {project.content.split('\n\n').map((paragraph, index) => renderContent(paragraph, index))}
        </div>

        <div className="border-t border-gray-200 pt-8 mt-16">
          <pre className="text-[10px] md:text-[14px] text-gray-900 mb-8 font-sans whitespace-pre-wrap">
            <span className="font-bold">Team</span>
            {'\n'}
            {project.team.replace('**Team**\n', '')}
          </pre>
          
          <Link 
            href="/" 
            className="text-[13px] md:text-[15px] text-gray-500 hover:text-black transition-colors underline block pb-4"
          >
            ← Back to projects
          </Link>
        </div>
      </div>
    </div>
  );
} 