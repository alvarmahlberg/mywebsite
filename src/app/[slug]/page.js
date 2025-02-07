import Link from 'next/link';
import Image from 'next/image';

const projects = {
  'remix-the-archive': {
    title: 'RMXTA Helsinki',
    date: 'February 6, 2024',
    author: 'Alvar Mahlberg',
    content: `
      A few weeks ago, I started developing a new AI-powered platform for remixing and reinterpreting archival content. The goal is to make cultural heritage more accessible and interactive through modern technology.

      The platform uses advanced machine learning models to analyze and transform historical materials while preserving their cultural significance.

      [VIDEOS]

      Key features of the platform include:
      - AI-powered content analysis and transformation
      - Collaborative creation tools
      - Digital preservation standards compliance
      - Real-time visualization of archival data

      We're currently working with several museums and archives to pilot the platform and develop best practices for AI-enhanced cultural heritage preservation.

      [IMAGES]

      The project has already received significant interest from cultural institutions and we're planning to launch a public beta version in late 2024.
      The platform uses advanced machine learning models to analyze and transform historical materials while preserving their cultural significance.
    `
  },
  'alusta-space': {
    title: 'Alusta Space',
    date: 'January 15, 2024',
    author: 'Alvar Mahlberg',
    content: `
      Alusta Space represents the next evolution of our spatial computing platform. Building on our experience with AR/VR technologies, we've created a comprehensive environment for developing and deploying spatial computing applications.

      The platform addresses key challenges in modern spatial computing:
      - Complex multi-user interactions in virtual spaces
      - Real-time 3D asset management
      - Cross-platform compatibility
      - Performance optimization for mobile devices

      Our team has been working closely with early adopters from various industries, including architecture, education, and entertainment. Their feedback has been instrumental in shaping the platform's features and user experience.

      The initial response has exceeded our expectations, with several major organizations already using Alusta Space in their production environments.
    `
  },
  'combine24': {
    title: 'Combine24',
    date: 'March 21, 2021',
    author: 'Alvar Mahlberg',
    content: `
      Combine24 is an innovative approach to combining blockchain technology with traditional financial systems. The project aims to bridge the gap between decentralized finance and established banking infrastructure.

      The platform provides:
      - Seamless integration between crypto and fiat currencies
      - Automated regulatory compliance
      - Real-time transaction monitoring
      - Advanced security features

      We've partnered with several financial institutions to ensure the platform meets all necessary regulatory requirements while maintaining the flexibility and innovation potential of blockchain technology.
    `
  }
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = params;
  
  const project = projects[slug];

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
              if (paragraph.trim() === '[VIDEOS]') {
                return (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-12">
                    <div className="aspect-[9/16] relative">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src="/rmxta-video1.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className="aspect-[9/16] relative">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src="/rmxta-video2.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                );
              }
              if (paragraph.trim() === '[IMAGES]') {
                return (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-12">
                    <div className="aspect-square relative">
                      <Image
                        src="/rmxta1.jpg"
                        alt="RMXTA Exhibition 1"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="aspect-square relative">
                      <Image
                        src="/rmxta2.jpg"
                        alt="RMXTA Exhibition 2"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                );
              }
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