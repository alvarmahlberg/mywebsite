import Image from 'next/image';
import Link from 'next/link';

export default async function ProjectPage({ params, searchParams }) {
  const project = {
    title: 'RMXTA New York',
    date: 'March 15, 2024',
    author: 'Alvar Mahlberg',
    team: `**Team**
Systems Design: Mitja Kaipiainen
Space Design: Leo Lindroos, Tuuli Kanerva, Antti Soini
Podiums: Hanna Anonen
Production: Milla Paananen
Thank you: Kati Laakso, Anssi Vallius, Johanna Eiramo, Emma Termonen`,
    content: `
      [KUVA_1]

      [KUVA_2]

      [KUVA_3]

      [KUVA_4]

      [KUVA_5]
    `
  };

  const renderContent = async (paragraph, index) => {
    if (paragraph.trim() === '[KUVA_1]') {
      return (
        <div key={index}>
          <div className="aspect-[4/3] relative">
            <Image
              src="/rmxta-newyork-1.jpg"
              alt="RMXTA New York exhibition view"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      );
    }

    if (paragraph.trim() === '[KUVA_2]') {
      return (
        <div key={index}>
          <div className="aspect-[4/3] relative">
            <Image
              src="/rmxta-newyork-2.jpg"
              alt="RMXTA New York exhibition detail"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      );
    }

    if (paragraph.trim() === '[KUVA_3]') {
      return (
        <div key={index} className="hidden">
          <div className="aspect-[3/4] relative">
            <Image
              src="/rmxta-newyork-3.jpg"
              alt="RMXTA New York exhibition detail"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      );
    }

    if (paragraph.trim() === '[KUVA_4]') {
      return (
        <div key={index}>
          <div className="aspect-[4/5] relative">
            <Image
              src="/rmxta-newyork-4.jpg"
              alt="RMXTA New York exhibition detail"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      );
    }

    if (paragraph.trim() === '[KUVA_5]') {
      return (
        <div key={index} className="hidden">
          <div className="aspect-[3/4] relative">
            <Image
              src="/rmxta-newyork-5.jpg"
              alt="RMXTA New York exhibition detail"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      );
    }
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col items-center pt-8">
      <div className="w-[90%] md:w-[800px] px-4 md:px-0 pb-12 md:pb-16">
        <div className="mb-16">
          <h1 className="text-[32px] font-bold mb-2">
            {project.title}
          </h1>
          <div className="text-[15px] text-gray-500">
            {project.date} by <Link href="/" className="underline">{project.author}</Link>
          </div>
        </div>

        <div className="space-y-8">
          {project.content.split('\n').map((paragraph, index) => (
            renderContent(paragraph, index)
          ))}
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