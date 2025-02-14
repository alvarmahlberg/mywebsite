import Link from 'next/link';
import Image from 'next/image';

const projects = {
  'remix-the-archive': {
    title: 'RMXTA Helsinki',
    date: 'February 6, 2024',
    author: 'Alvar Mahlberg',
    team: 'Team: Mitja Kaipiainen, Anna Puhakka, Milla Paananen, Erno Forsström, Elias Hakala',
    content: `
    [LAAJAKUVA]

    Remix The Archive exhibition explores the intersection of tradition and technology through ten generative artworks that reinterpret traditional techniques in a digital context. The exhibition invites visitors to engage directly with the works using custom remix controllers, fostering interaction and transformation.

    [KAKSI_KUVAA]

    Themes such as cultural memory, portraiture, landscapes, and artistic representation are examined, challenging the boundaries between digital and physical art. More than just a display, the exhibition sparks a dynamic conversation on how technology reshapes artistic heritage and collective creativity..

    [UUSI_KUVA]

    [PYSTYKUVAT]
  `
  },
  'alusta-space': {
    title: 'Alusta Space',
    date: 'January 15, 2024',
    author: 'Alvar Mahlberg',
    team: 'Team: Tuuli Kanerva, Leo Lindroos, Antti Soini, Niko Rissanen, Markku Huvilinna',
    content: `
      [NEW_IMAGE]   

      The space features multiple exhibition areas, each designed to showcase different aspects of digital art and interactive installations. Our focus has been on creating flexible spaces that can adapt to various types of presentations while maintaining optimal viewing conditions for digital works.

      [SECOND_IMAGE]

      The lighting system combines natural and artificial sources, creating an optimal environment for both digital displays and physical artworks. The modular wall system allows for quick reconfigurations, enabling us to adapt the space for different types of exhibitions and events.

      [THIRD_IMAGE]
    `
  },
  'combine24': {
    title: 'Combine24',
    date: 'March 21, 2021',
    author: 'Alvar Mahlberg',
    team: 'Team: Anna Puhakka, Mitja Kaipiainen, Johanna Eiramo, Milla Paananen, Rasmus Haikka, Antoine Paikert, Erno Forsström',
    content: `
      [NELIO_KUVA]

      Combine24 is a digital art competition that brings together emerging artists and Finland's national art collection. The project explores new ways of interpreting and transforming traditional artworks through contemporary digital tools and creative coding.

      [KAKSI_VIDEOTA]

      The competition attracted over 200 submissions from artists across Finland. Selected works were exhibited at Ateneum Art Museum, creating a dialogue between historical masterpieces and their contemporary digital interpretations.

      [KAKSI_VIDEOTA_2]
    `
  },
  'alusta-art': {
    title: 'Alusta.art',
    date: 'September 15, 2023',
    author: 'Alvar Mahlberg',
    team: 'Team: Mitja Kaipiainen, Anna Puhakka, Marja Konttinen, Antoine Paikert, Joni Stanley, Veera Almila, Juho Vesanen, Kasper Tontti, Erno Forsström, Manu Matila, Kai-Markus Lehtimäki, Artur Veselovski',
    content: `
      [ALUSTA_INTRO_KUVA]

      Alusta.art is a decentralized art platform that leverages blockchain technology to create new opportunities for digital artists and collectors. The platform combines traditional art market mechanisms with web3 infrastructure, enabling direct artist-to-collector relationships and transparent provenance tracking.
    `
  },
  'metaspace': {
    title: 'Metaspace',
    date: 'June 10, 2022',
    author: 'Alvar Mahlberg',
    team: '',
    content: `
      [NEW_IMAGE] 

      Metaspace is a WebGL-powered platform designed specifically for virtual art exhibitions. It provides an immersive environment where digital art can be experienced in ways not possible in traditional galleries.

      [METASPACE_KUVA]
    `
  }
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectPage({ params }) {
  await Promise.resolve();
  const project = projects[params.slug];

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
    const slug = await params.slug;
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
          <div className="aspect-square relative">
            <Image
              src="/alusta-space3.jpg"
              alt="Alusta Space Gallery"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[SECOND_IMAGE]') {
      return (
        <div key={index}>
          <div className="aspect-square relative">
            <Image
              src="/alusta-space2.jpg"
              alt="Combine24 Second Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[THIRD_IMAGE]') {
      return (
        <div key={index}>
          <div className="aspect-square relative">
            <Image
              src="/alusta-space.jpg"
              alt="Alusta Space Lighting"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[LAAJAKUVA]') {
      return (
        <div key={index}>
          <div className="aspect-[4/3] relative">
            <Image
              src="/rmxta2.jpg"
              alt="RMXTA Project Wide"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[KAKSI_KUVAA]') {
      return (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-square relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/Controller.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="aspect-square relative md:block hidden">
            <Image
              src="/rmxta4.jpg"
              alt="RMXTA Project Square 2"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[UUSI_KUVA]') {
      return (
        <div key={index}>
          <div className="aspect-square relative">
            <Image
              src="/image1.jpg"
              alt="RMXTA Project Additional"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[PYSTYKUVAT]') {
      return (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-[2/3] relative">
            <Image
              src="/image6.jpg"
              alt="RMXTA Project Portrait 1"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="aspect-[2/3] relative md:block hidden">
            <Image
              src="/taso.jpg"
              alt="RMXTA Project Portrait 2"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      );
    }
    if (paragraph.trim().startsWith('Team:')) {
      return (
        <p key={index} className="text-[12px] md:text-[14px] text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">
          {paragraph.trim()}
        </p>
      );
    }
    if (paragraph.trim() === '[NELIO_KUVA]') {
      return (
        <div key={index}>
          <div className="aspect-square relative">
            <Image
              src="/combineseina.jpg"
              alt="Alusta.art Platform"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[KAKSI_VIDEOTA]') {
      return (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-square relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/shaderism.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="aspect-square relative md:block hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/ilmojaaarni.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[KAKSI_VIDEOTA_2]') {
      return (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="aspect-square relative">
            <Image
              src="/jeres.jpg"
              alt="Combine24 Additional Image 1"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="aspect-square relative md:block hidden">
            <Image
              src="/trip2.jpg"
              alt="Combine24 Additional Image 2"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[KAKSI_VIDEOTA_ALUSTA]') {
      return (
        <div key={index}>
          <div className="aspect-square relative">
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
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[ALUSTA_NELIO]') {
      return (
        <div key={index}>
          <div className="aspect-square relative">
            <Image
              src="/workshop.jpg"
              alt="Alusta.art Platform Interface"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[ALUSTA_INTRO_KUVA]') {
      return (
        <div key={index}>
          <div className="aspect-[16/9] relative">
            <Image
              src="/platform.jpg"
              alt="Alusta Studio"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      );
    }
    if (paragraph.trim() === '[METASPACE_KUVA]') {
      return (
        <div key={index}>
          <div className="aspect-[16/9] relative">
            <Image
              src="/metaspace1.jpg"
              alt="Metaspace Platform Interface"
              fill
              className="object-cover"
              priority
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

        <h1 className="text-[28px] md:text-[48px] font-bold text-black mb-10">
          {project.title}
        </h1>

        <div className="text-gray-600 space-y-10 text-[16px] md:text-[18px] leading-relaxed">
          {project.content.split('\n\n').map((paragraph, index) => renderContent(paragraph, index))}
        </div>

        <div className="border-t border-gray-200 pt-8 mt-16">
          <p className="text-[10px] md:text-[14px] text-gray-900 mb-8">
            {project.team}
          </p>
          
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