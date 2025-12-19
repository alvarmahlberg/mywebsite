import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const projects = {
  'rmxta-newyork': {
    title: 'Remix the Archive NYC',
    date: 'June 15, 2025',
    author: 'Alvar Mahlberg',
    description: `
    `,
    team: `**Credits**
Artists: Newyellow, Nahuel Gerth, Andreas Rau, Ilmo Kapanen & Aarni Kapanen, Blas.v, Roni Kaufman, Agoston Nagy, Jeremy Schoenherr (Jeres), Arttu Koskela (Shaderism), and Tuomo Rainio

Project Manager: Alvar Mahlberg
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
    content: `

  [KUVA_1]

    I led the international generative art exhibition project and coordinated the working team together with several cultural institutions. Seeing the outcome come alive and observing how audiences interacted with the generative artworks was deeply rewarding. 

[KUVA_3]



[KUVA_6]





      [KUVA_4]



      The exhibition was realized in collaboration with the Finnish National Gallery, the Finnish Cultural Institute, and the Consulate General of Finland in New York.

      [Shadowplay Magazine Article](https://www.shadowplaymagazine.com/review/ov571e8xp7lxbyos01roy3l7o5gou9/)
      [Remix the Archive Website](https://remixthearchive.com/)
    `
  },
  'rmxta-helsinki': {
    title: 'RMXTA Helsinki',
    date: 'December 13, 2024',
    author: 'Alvar Mahlberg',
    description: '',
    team: `**Credits**
Project Manager: Alvar Mahlberg
Systems Design: Mitja Kaipiainen
CD & Visual Identity: Erno Forsström
Communications: Milla Paananen
Production: Anna Puhakka
Controllers: Elias Hakala
Photos: Juho Huttunen`,
    content: `
    I led the generative art exhibition project from concept to execution. It was a pleasure to work with a small and dedicated team to present new generative artworks and engage new audiences for the museum.

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

      *The exhibition Remix the Archive was open to the public from 20 September – 26 October 2024 in an exhibition space in Helsinki’s Vallila district (Teollisuuskatu 9D). Hosted by the Finnish National Gallery.*

      [Fakewhale Article](https://log.fakewhale.xyz/remix-the-archive-at-alusta-space-helsinki/)
      [STT Info](https://www.sttinfo.fi/tiedote/70520187/remix-the-archive-gives-artworks-from-the-finnish-national-gallerys-collection-a-new-form-through-generative-art?publisherId=17525083&lang=en)
    `,
  },
  'alusta-space': {
    title: 'Alusta Space',
    date: 'September 15, 2024',
    author: 'Alvar Mahlberg',
    description: 'I led a conversion of an old office building into a modern exhibition venue. Strong focus on recyclable materials and the multi-purpose nature of the space.',
    team: `**Credits**
Project Manager: Alvar Mahlberg
Space Design: Tuuli Kanerva, Leo Lindroos, Antti Soini (Nervin Architecture)
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
    description: 'I led an open international generative art competition as part of The Digital Finnish National Gallery program. The competition invited participants from over 47 countries to create a new generative artwork that innovatively used the copyright-free collection data and archive material of the Finnish National Gallery.',
    team: `**Credits**
Project Manager: Alvar Mahlberg
Producer: Anna Puhakka
Systems Designer: Mitja Kaipiainen
Production: Milla Paananen
Website: Rasmus Haikka 
Visual identity: Antoine Paikert
Poster Series: Erno Forsström
Shortlist Committee: Sofia Garcia, Licia He, Joonas Toivonen, Linda Dounia, Emily Xie
Final Jury: Martin Grasser, Luka Piškorec, Diana Velasco, Leevi Haapala, Melissa Wiederrecht`,
    content: `
      [COMBINE_KUVA_3]



 

      [COMBINE_VIDEO_3]

      



      [Combine24 Website](https://combine24.alusta.art)
      [Finnish National Gallery](https://www.kansallisgalleria.fi/en)
    `,
  },
  'alusta-art': {
    title: 'Alusta.art',
    date: 'December 15, 2023',
    author: 'Alvar Mahlberg',
    description: 'Blockchain-based platform that enables the publishing, sharing, and collecting of digital content — including images, videos, music, 3d objects, and texts.',
    team: `**Credits**
Project Manager: Alvar Mahlberg
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
    description: 'I led a company developing Web3-native virtual art galleries, enabling artists and institutions to present and experience digital artworks in immersive online gallery spaces.',
    team: 'Startup adventure from my friends basement',
    content: `
      [NEW_IMAGE] 

      [METASPACE_KUVA]

      [METASPACE_VAAKA]
    `,
  },
  'museum-of-tomorrow': {
    title: 'Museum of Tomorrow',
    date: '2025',
    author: 'Alvar Mahlberg',
    description: '',
    team: `**Credits**
Interviewees: Asher Remy-Toledo, Billy Clark, Eileen Isagon Skyers, Dina Litovsky, Josh Hubberman, Lawrence Siu, Lynn Hershman Leeson, Manuel Dilone, Nick Law, Peter Hastings Falk, Timo Kiuru

Production company: Veli Studio
Executive Producer: Veera Almila
Directors & Cinematography: Juho Vesanen & kaverikarim
Editor: Juho Vesanen
Website: Antoine Paikert & Manu Matila
Together with: Mitja Kaipiainen, Kati Laakso, Anssi Vallius`,
    content: `

      [VIMEO_VIDEO]

      I led a documentary initiative exploring how digital transformation might reshape museums in the coming years. The production was carried out by a highly capable production team from Veli Studio.


      [Museum of Tomorrow Documentary](https://www.museumoftomorrow.fi)
    `,
  }
};

export const dynamic = 'force-static';

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
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const renderContent = async (paragraph, index) => {
    // Check if this is the artist list section
    if (paragraph.includes('Participating Artists & Works')) {
      const lines = paragraph.trim().split('\n');
      const title = lines[0];
      // Filter out empty lines and the "The exhibition was realized..." text
      const allLines = lines.slice(1);
      const exhibitionTextIndex = allLines.findIndex(line => line.includes('The exhibition was realized'));
      
      let artists, exhibitionText;
      if (exhibitionTextIndex !== -1) {
        artists = allLines.slice(0, exhibitionTextIndex).filter(line => line.trim() !== '');
        exhibitionText = allLines[exhibitionTextIndex];
      } else {
        artists = allLines.filter(line => line.trim() !== '');
        exhibitionText = null;
      }
      
      return (
        <div key={index} className="space-y-4">
          <h3 className="text-[18px] md:text-[22px] font-bold text-black">{title}</h3>
          <ul className="space-y-2">
            {artists.map((artist, i) => {
              const parts = artist.split(' – ');
              const artistName = parts[0];
              const workName = parts[1] || '';
              return (
                <li key={i} className="flex flex-row flex-nowrap gap-2">
                  <span className="font-medium text-black whitespace-nowrap">{artistName}</span>
                  {workName && <span className="text-gray-600 whitespace-nowrap">– {workName}</span>}
                </li>
              );
            })}
          </ul>
          {exhibitionText && (
            <p className="mt-6">{exhibitionText}</p>
          )}
        </div>
      );
    }
    // Check if this is the interviewees list section
    if (paragraph.includes('Interviewees')) {
      const lines = paragraph.trim().split('\n');
      const title = lines[0];
      const interviewees = lines.slice(1).filter(line => line.trim() !== '' && line.trim().startsWith('–'));
      
      return (
        <div key={index} className="space-y-4">
          <h3 className="text-[18px] md:text-[22px] font-bold text-black">{title}</h3>
          <ul className="space-y-2">
            {interviewees.map((interviewee, i) => {
              const text = interviewee.replace('–', '').trim();
              // Split by first comma
              const commaIndex = text.indexOf(',');
              let name, title;
              if (commaIndex !== -1) {
                name = text.substring(0, commaIndex).trim();
                title = text.substring(commaIndex + 1).trim();
              } else {
                // If no comma, assume first 2 words are name, rest is title
                // For "Asher Remy-Toledo Founder, Hyphen Hub"
                const words = text.split(' ');
                if (words.length > 2) {
                  name = words.slice(0, 2).join(' ');
                  title = words.slice(2).join(' ');
                } else {
                  name = text;
                  title = '';
                }
              }
              return (
                <li key={i} className="flex flex-row flex-nowrap gap-2">
                  <span className="font-bold text-black">{name}</span>
                  {title && <span className="text-gray-600"> – {title}</span>}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    // Check if this is Final Jury or Shortlist Committee list
    if (paragraph.includes('**Final Jury**') || paragraph.includes('**Shortlist Committee**')) {
      const lines = paragraph.trim().split('\n');
      const sections = [];
      let currentSection = null;
      
      lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed.includes('**Final Jury**')) {
          if (currentSection) sections.push(currentSection);
          currentSection = { title: 'Final Jury', members: [] };
        } else if (trimmed.includes('**Shortlist Committee**')) {
          if (currentSection) sections.push(currentSection);
          currentSection = { title: 'Shortlist Committee', members: [] };
        } else if (currentSection && trimmed !== '') {
          currentSection.members.push(trimmed);
        }
      });
      if (currentSection) sections.push(currentSection);
      
      return (
        <div key={index} className="space-y-6">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <h3 className="text-[18px] md:text-[22px] font-bold text-black">{section.title}</h3>
              <ul className="space-y-2">
                {section.members.map((member, i) => (
                  <li key={i} className="flex flex-row flex-nowrap">
                    <span className="text-black">{member}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }
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
          <div className="aspect-[4/4] relative border border-gray-200">
            <MediaWrapper creator="" darkText>
              <Image
                src="/image3.jpg"
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
    if (paragraph.includes('*') && !paragraph.includes('**')) {
      const parts = paragraph.split('*');
      // Check if this is a date/address line that should stay on one line
      const isDateAddressLine = paragraph.includes('May') && paragraph.includes('June') && paragraph.includes('Dunkunsthalle');
      return (
        <p key={index} className={isDateAddressLine ? "whitespace-nowrap" : ""}>
          {parts.map((part, i) => 
            i % 2 === 0 ? part : <em key={i}>{part}</em>
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
                src="/dunkkuj.jpg"
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
          <div className="aspect-[3/2] relative">
            <MediaWrapper creator="">
              <Image
                src="/janne8.jpg"
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
    if (paragraph.trim() === '[MUSEUM_OF_TOMORROW_IMAGE]') {
      return (
        <div key={index}>
          <div className="aspect-[3/2] relative">
            <MediaWrapper creator="">
              <Image
                src="/tomorrow5.jpg"
                alt="Museum of Tomorrow"
                fill
                className="object-cover"
                priority
              />
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[VIMEO_VIDEO]') {
      const videoId = '1144884805';
      const vimeoUrl = `https://player.vimeo.com/video/${videoId}?context=Vimeo%5CController%5CApi%5CResources%5CVideoController.&h=86cf956dc5&s=97b6ba742b36b632bc1e0671b57bec67911622be_1765390788&title=0&byline=0&portrait=0`;
      return (
        <div key={index} className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="aspect-video relative max-w-7xl mx-auto">
            <iframe
              src={vimeoUrl}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Museum of Tomorrow"
            />
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

        <h1 className="text-[28px] md:text-[42px] font-bold text-black mb-6">
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
            <span className="font-bold">Credits</span>
            {'\n'}
            {project.team.replace('**Credits**\n', '')}
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