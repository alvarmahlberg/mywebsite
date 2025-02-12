import Link from 'next/link';
import Image from 'next/image';

const projects = {
  'remix-the-archive': {
    title: 'RMXTA Helsinki',
    date: 'February 6, 2024',
    author: 'Alvar Mahlberg',
    content: `
    [LAAJAKUVA]

    [KAKSI_KUVAA]

    [UUSI_KUVA]

    [PYSTYKUVAT]
    `
  },
  'alusta-space': {
    title: 'Alusta Space',
    date: 'January 15, 2024',
    author: 'Alvar Mahlberg',
    content: `
      [NEW_IMAGE]   

      The space features multiple exhibition areas, each designed to showcase different aspects of digital art and interactive installations. Our focus has been on creating flexible spaces that can adapt to various types of presentations while maintaining optimal viewing conditions for digital works.

      [SECOND_IMAGE]

      The lighting system combines natural and artificial sources, creating an optimal environment for both digital displays and physical artworks. The modular wall system allows for quick reconfigurations, enabling us to adapt the space for different types of exhibitions and events.

      [THIRD_IMAGE]

      Space Design: Nervin Architecture, Construction: Niko Rissanen, Electrical Work: Markku Huvilinna
    `
  },
  'combine24': {
    title: 'Combine24',
    date: 'March 21, 2021',
    author: 'Alvar Mahlberg',
    content: `
      
      [NEW_IMAGE]

      [SECOND_IMAGE]

      [THIRD_IMAGE]
    `
  },
  'alusta-art': {
    title: 'Alusta.art',
    date: 'September 15, 2023',
    author: 'Alvar Mahlberg',
    content: `
      Alusta.art is a decentralized art platform that leverages the Zora protocol to create new opportunities for digital artists and collectors. The platform combines traditional art market mechanisms with blockchain technology.

      The platform enables:
      - Direct artist-to-collector sales
      - Transparent provenance tracking
      - Automated royalty distributions
      - Community-driven curation

      [NEW_IMAGE]

      We've built a robust infrastructure that supports various digital art formats while ensuring the highest standards of security and authenticity for both artists and collectors.

      [SECOND_IMAGE]

      The platform has already attracted a diverse community of artists and has facilitated numerous successful digital art transactions.
    `
  },
  'metaspace': {
    title: 'Metaspace',
    date: 'June 10, 2022',
    author: 'Alvar Mahlberg',
    content: `
      Metaspace is a WebGL-powered platform designed specifically for virtual art exhibitions. It provides an immersive environment where digital art can be experienced in ways not possible in traditional galleries.

      [NEW_IMAGE] 

      The platform utilizes advanced WebGL techniques to create smooth, high-performance 3D environments that work across all modern browsers.
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

  return (
    <div className="flex flex-col items-center pt-8 md:pt-16">
      <div className="w-[90%] md:w-[800px] px-4 md:px-0">
        <div className="mb-12 md:mb-16">
          <div className="text-gray-600 mb-2">
            {project.date} by <Link href="/" className="underline hover:text-black">{project.author}</Link>
          </div>
          <h1 className="text-[32px] md:text-[48px] font-bold text-black mb-8 md:mb-12">{project.title}</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            {project.content.split('\n\n').map((paragraph, index) => {
            
              if (paragraph.includes('- ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={index} className="my-6">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.trim() === '[NEW_IMAGE]' && params.slug === 'metaspace') {
                return (
                  <div key={index} className="my-12">
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
                  <div key={index} className="my-12">
                    <div className="aspect-square relative">
                      <Image
                        src="/combine24-1.jpg"
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
                  <div key={index} className="my-12">
                    <div className="aspect-square relative">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src="/combine24-video1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                );
              }
              if (paragraph.trim() === '[THIRD_IMAGE]') {
                return (
                  <div key={index} className="my-12">
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
                  <div key={index} className="my-12">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/uusikuva.jpg"
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
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-12">
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
                  <div key={index} className="my-12">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/etusivu1.jpg"
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
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-12">
                    <div className="aspect-[2/3] relative">
                      <Image
                        src="/rmxta5.jpg"
                        alt="RMXTA Project Portrait 1"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="aspect-[2/3] relative md:block hidden">
                      <Image
                        src="/rmxta6.jpg"
                        alt="RMXTA Project Portrait 2"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                );
              }
              return <p key={index} className="mb-6">{paragraph.trim()}</p>;
            })}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <Link 
            href="/" 
            className="text-gray-500 hover:text-black transition-colors"
          >
            ← Back to projects
          </Link>
        </div>
      </div>
    </div>
  );
} 