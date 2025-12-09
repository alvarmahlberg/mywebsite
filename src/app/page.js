"use client";
import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image';

export default function Home() {
  const [activeView, setActiveView] = useState("projects");

  const projects = [
    {
      title: 'Remix the Archive New York',
      description: 'Generative art exhibition',
      year: '2025',
      image: '/rmxta-newyork-1.jpg',
      href: '/rmxta-newyork'
    },
    {
      title: 'Museum of Tomorrow',
      description: 'Documentary Series',
      year: '2025',
      image: '/tomorrow5.jpg',
      href: '/museum-of-tomorrow'
    },
    {
      title: "Remix the Archive Helsinki",
      description: "Generative art exhibition",
      year: "2024",
      image: '/juho-nelio.jpeg',
      href: "/rmxta-helsinki"
    },
    {
      title: "Alusta Space",
      description: "Modern exhibition venue",
      year: "2024",
      image: '/alusta-space3.jpg',
      href: "/alusta-space"
    },
    {
      title: "Combine24",
      description: "Global art competition",
      year: "2024",
      image: '/image3.jpg',
      href: "/combine24"
    },
    {
      title: "Alusta.art",
      description: "Digital art platform",
      year: "2023",
      image: '/logoalusta.png',
      href: "/alusta-art"
    },
    {
      title: "Metaspace",
      description: "Virtual art galleries",
      year: "2022",
      image: '/meta1.jpg',
      href: "/metaspace"
    },
    {
      title: "Blockchain Laboratory",
      description: "Research Group",
      year: "2020",
      image: '/labra3.jpg',
      href: "/blockchain-laboratory"
    }
  ]

  return (
    <div className="flex flex-col items-center pt-8">
      <div className="w-[90%] md:w-[800px] px-4 md:px-0 pb-12 md:pb-16">
        <header className="mb-16">
          <h1 className="text-[22px] font-bold mb-2 text-black">Alvar Mahlberg</h1>
          <nav className="flex gap-6">
            <button 
              onClick={() => setActiveView("projects")}
              className={`text-[15px] ${activeView === "projects" ? "text-black font-bold" : "text-gray-500"}`}
            >
              Projects
            </button>
            <button 
              onClick={() => setActiveView("about")}
              className={`text-[15px] ${activeView === "about" ? "text-black font-bold" : "text-gray-500"}`}
            >
              About
            </button>
          </nav>
        </header>

        {activeView === "projects" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <Link key={project.title} href={project.href} className="group">
                <div className="aspect-square relative mb-4 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
                <h2 className="text-[18px] font-bold text-black mb-2 group-hover:underline">
                  {project.title}
                </h2>
                <p className="text-[14px] text-gray-600 mb-1">
                  {project.description}
                </p>
                <span className="text-[12px] text-gray-400">
                  {project.year}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-[240px] aspect-[3/4] relative flex-shrink-0">
              <Image
                src="/profile.jpg"
                alt="Alvar Mahlberg"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="text-[18px] md:text-[20px] space-y-6 text-gray-600">
              <p>
              I lead ambitious projects and teams at the intersection of art, culture, and technology.
              
              </p>
              <p>
              I work with artists, galleries, and museums to develop digital initiatives that expand audiences, strengthen institutional capabilities, and open new revenue streams.
              </p>
              <p>
              My expertise lies in digital strategy, project leadership, and concept development, with a strong focus on digital art and emerging technologies.
              </p>
              <p>
              I grew up in Helsinki and hold an M.Sc. in Information Systems Science.
              </p>
              <p>
                You can reach me at <a href="mailto:alvar@alvar.energy" className="underline">alvar@alvar.energy</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
