import Link from 'next/link';
import Image from 'next/image';

const projects = {
  'remix-the-archive': {
    title: 'RMXTA Helsinki',
    date: 'December 13, 2024',
    author: 'Alvar Mahlberg',
    team: `**Team**
Systems Design: Mitja Kaipiainen
Creative Direction: Erno Forsström
Communications: Milla Paananen
Production: Anna Puhakka
Hardware: Elias Hakala
Photos: Juho Huttunen`,
    content: `
      [LAAJAKUVA]

      [UUSI_KUVA]

      [PYSTYKUVAT]

      [VAALEA_KUVA]

      [KAKSI_KUVAA]
    `
  },
  'alusta-space': {
    title: 'Alusta Space',
    date: 'September 15, 2024',
    author: 'Alvar Mahlberg',
    team: `**Team**
Space Design: Tuuli Kanerva, Leo Lindroos, Antti Soini
Construction: Niko Rissanen
Electrical installation: Markku Huvilinna
Photos: Kalle Kouhia`,
    content: `
      [NEW_IMAGE]   

      [SECOND_IMAGE]

      [THIRD_IMAGE]
    `
  },
  'combine24': {
    title: 'Combine24',
    date: 'September 1, 2024',
    author: 'Alvar Mahlberg',
    team: `**Team**
Producer: Anna Puhakka
Systems Designer: Mitja Kaipiainen
Production: Milla Paananen
Website: Rasmus Haikka 
Visual identity: Antoine Paikert
Posters: Erno Forsström`,
    content: `
      [NELIO_KUVA]

      [COMBINE_KUVA_3]

      [COMBINE_VIDEO_3]

      [KAKSI_VIDEOTA]

      [KAKSI_VIDEOTA_2]
    `
  },
  'alusta-art': {
    title: 'Alusta.art',
    date: 'December 15, 2023',
    author: 'Alvar Mahlberg',
    team: `**Team**
Lead Developer: Kasper Tontti
System Architect: Kai-Markus Lehtimäki
Software Development: Artur Veselovski, Manu Matila
UI Designer: Erno Forsström
Brand Identity: Antoine Paikert, Joni Stanley
Creative Direction: Veera Almila, Juho Vesanen
FNG: Mitja Kaipiainen, Anna Puhakka
Partnerships: Marja Konttinen`,
    content: `
      [ALUSTA_VAAKA]

      [ALUSTA_NELIO_VIDEO]

      [ALUSTA_VIDEO]
    `
  },
  'metaspace': {
    title: 'Metaspace',
    date: 'June 10, 2022',
    author: 'Alvar Mahlberg',
    team: '',
    content: `
      [NEW_IMAGE] 

      [METASPACE_KUVA]
    `
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

export default async function ProjectPage({ params }) {
  const { slug } = params;
  const project = projects[slug];

  if (!project) {
    return <div>Project not found</div>;
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
            <MediaWrapper creator="Remix the Archive Exhibition in Vallila, Helsinki">
              <Image
                src="/rmxta2.jpg"
                alt="RMXTA exhibition overview"
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
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[3/4] relative md:block hidden">
            <MediaWrapper creator="Poster video by Milla Paananen">
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
            <MediaWrapper creator="Exhibition video by Milla Paananen">
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
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
          <div className="aspect-[3/4] relative">
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
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
          <div className="aspect-[2/3] relative">
            <MediaWrapper creator="Remix the Archive T-shirt by VAIN">
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
            <MediaWrapper creator="Remix the Archive controller by Elias Hakala">
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
    if (paragraph.trim() === '[COMBINE_KUVA_3]') {
      return (
        <div key={index}>
          <div className="aspect-[4/3] relative border border-gray-200">
            <MediaWrapper creator="" darkText>
              <Image
                src="/aikataulu.jpg"
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
        <p key={index}>
          {parts.reduce((acc, part, i) => {
            if (i % 4 === 1) {
              const linkUrl = parts[i + 2];
              return [...acc, 
                <Link key={i} href={linkUrl} className="underline hover:text-black" target="_blank">
                  {part}
                </Link>
              ];
            } else if (i % 4 === 0) {
              return [...acc, part];
            }
            return acc;
          }, [])}
        </p>
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
            <MediaWrapper creator="Alusta brand video by Antoine Paikert">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/alusta-brand.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </MediaWrapper>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[ALUSTA_NELIO_VIDEO]') {
      return (
        <div key={index}>
          <div className="aspect-square relative">
            <MediaWrapper creator="Alusta.art release video by Erno Forsström">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/alusta-flick.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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

        <h1 className="text-[28px] md:text-[48px] font-bold text-black mb-10">
          {project.title}
        </h1>

        <div className="text-gray-600 space-y-10 text-[16px] md:text-[18px] leading-relaxed">
          {project.content.split('\n\n').map((paragraph, index) => renderContent(paragraph, index))}
        </div>

        <div className="border-t border-gray-200 pt-8 mt-16">
          <pre className="text-[10px] md:text-[14px] text-gray-900 mb-8 font-sans whitespace-pre-wrap">
            <span className="font-bold">Project Team</span>
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