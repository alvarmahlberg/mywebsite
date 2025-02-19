"use client";
import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image';

export default function Home() {
  const [activeView, setActiveView] = useState("projects");

  const articles = [
    {
      title: "RMXTA Helsinki",
      description: "A large-scale generative art exhibition from concept to completion",
      mobileDescription: "A generative art exhibition from concept to completion",
      year: "2024",
      href: "/remix-the-archive"
    },
    {
      title: "Alusta Space",
      description: "An old office building transformed into a modern and versatile gallery space",
      mobileDescription: "An old office building converted into a modern gallery space",
      year: "2024",
      href: "/alusta-space"
    },
    {
      title: "Combine24",
      description: "A pioneering digital art competition elevating Finland's national art collection",
      mobileDescription: "A digital art competition based on national art collection",
      year: "2024",
      href: "/combine24"
    },
    {
      title: "Alusta.art",
      description: "A decentralized art platform for artists and creators",
      mobileDescription: "A decentralized art platform for artists and creators",
      year: "2023",
      href: "/alusta-art"
    },
    {
      title: "Metaspace",
      description: "A WebGL-powered platform for virtual art exhibitions",
      mobileDescription: "A WebGL-powered platform for virtual art exhibitions",
      year: "2022",
      href: "/metaspace"
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
          <>
            <div className="space-y-6">
              {articles.map((article) => (
                <article key={article.title} className="flex items-baseline">
                  <Link href={article.href} className="group w-full">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-0">
                      <div className="flex items-baseline gap-2">
                        <h2 className="text-[20px] font-bold hover:underline underline-offset-4 text-black">
                          {article.title}
                        </h2>
                        <span className="md:hidden text-[13px] text-gray-400">
                          {article.year}
                        </span>
                      </div>
                      <span className="text-[11px] whitespace-nowrap overflow-hidden text-ellipsis md:text-[15px] md:whitespace-normal text-gray-500 md:mx-2">
                        <span className="hidden md:inline">— </span>
                        <span className="md:hidden">{article.mobileDescription}</span>
                        <span className="hidden md:inline">{article.description}</span>
                      </span>
                      <span className="hidden md:inline text-[15px] text-gray-400">
                        {article.year}
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-20 pb-16">
              <div className="aspect-square relative">
                <Image
                  src="/image1.jpg"
                  alt="Artwork 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="aspect-square relative">
                <Image
                  src="/alustanelio.jpg"
                  alt="Artwork 2"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="aspect-square relative">
                <Image
                  src="/image3.jpg"
                  alt="Artwork 3"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-[300px] aspect-[3/4] relative flex-shrink-0">
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
                I currently work for the Finnish National Gallery where we redefine museum practices by integrating emerging technologies, digital art, and agile exhibition models to create more dynamic and accessible cultural experiences.
              </p>
              <p>
                I grew up in Helsinki and studied Information Systems Science at the University of Jyväskylä.
              </p>
              <p>
                You can reach me at <a href="mailto:alvar.mahlberg@fng.fi" className="underline">alvar.mahlberg@fng.fi</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
