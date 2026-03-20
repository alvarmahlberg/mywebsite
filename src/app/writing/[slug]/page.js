import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const writings = {
  'what-cc0-actually-unlocks': {
    title: 'What CC0 Actually Unlocks',
    date: 'March 2026',
    content: `Most licenses tell you what you can't do. CC0 removes every restriction at once — no permissions, no fees, no gatekeeping. It maximizes reuse while giving up the creator's control over how the work travels. That trade-off is the point.

Remix culture has always built on what already exists. Sampling in music, collage in visual art. CC0 makes that permission structural rather than negotiated. The archive is already yours.

Combine24 tested this at scale. Artists from over 45 countries built generative works from the Finnish National Gallery's CC0 collection — centuries-old portraits and landscapes reprocessed through creative code. The ten best entries traveled into exhibitions, onto digital platforms, and into collectors' collections.

A small country's remarkable art collection, reaching audiences it had never reached before. That's what open infrastructure enables — not just reuse, but reach.`,
    images: [],
  },
  'generative-art-national-archive': {
    title: 'When generative artists get access to a national archive',
    date: 'February 2026',
    content: `The Finnish National Gallery holds around 27,000 works in the public domain — paintings, drawings, and sculptures documented across centuries. For most of its history, this collection lived in storage rooms and catalogues. Combine24 was an attempt to see what would happen if we handed it to generative artists worldwide and stepped back.

The data package we prepared included high-resolution images and metadata: titles, dates, techniques, dimensions, and provenance. Artists could download everything.

Nearly 200 works were submitted from across the world. What surprised me wasn't the volume — it was the range of what people noticed.

One artist built a system that analyzes historical paintings, identifies the poses of human figures, and generatively combines them into new, movement-like entities — creating a kind of visual "dance" where gestures from different eras merge into a continuous flow. Another created a work that layers silhouettes of people from the collection with contemporary figures, revealing an underlying sense of connection across time and space, where individual identities blur into a shared, ever-evolving whole. A third created a work that reflects on identity, tradition, and time through a continuous digital weaving process, where past, present, and future intertwine into a single evolving structure shaped by contemporary technology.

The archive revealed things that weren't obvious from inside the institution. Patterns that curators hadn't named. Gaps that became visible only when someone tried to work with the data programmatically.

What stays with me is how the artists talked about the material. Several of them said the collection felt different once it was data. Not lesser — different. More workable, in some ways more intimate. You could ask questions of it that you couldn't ask standing in a museum.`,
    images: [],
  },
  'museums-reaching-for-new-audiences': {
    title: 'Algorithm Is the Artwork',
    date: 'February 2026',
    content: `Most people think generative art is about the output. It isn't. It's about the decision that came before the output — the system the artist designed, the rules they chose to follow and the ones they chose to break.

Behind each screen is a system authored by the artist: a program that evolves, mutates, and recombines. What renders isn't the work itself. It's one instantiation of the work. The algorithm is the artwork. And that distinction changes everything about how you look at it.

Consider Vera Molnár, who began writing code-based drawings in the late 1960s. She wasn't automating her hand. She was designing a space where certain kinds of images became possible — and then watching what emerged. The surprise wasn't a bug in her process. It was the point. A generative artist isn't someone who makes things; they're someone who makes the conditions under which things make themselves.

This is why generative art is fundamentally different from AI-generated imagery, even when the outputs look similar. In generative art, the artist is accountable for the system — its logic, its constraints, its range of possibility. There's no prompt and no prayer. Tyler Hobbs didn't ask a model to make Fidenza. He wrote the grammar that made Fidenza possible, and then let a hash determine which sentence got spoken. Authorship moved upstream, but it didn't disappear.

The question generative art keeps asking — quietly, persistently — is whether creativity is an act or a structure. Whether the artist needs to be present at the moment of making, or whether presence is already encoded in the rules.

Most art answers that question by putting the artist in the room. Generative art answers it by leaving the room — and trusting the system to speak.`,
    images: [],
  },
  'selling-generative-art-on-chain': {
    title: 'What we learned from selling generative art on-chain',
    date: 'February 2026',
    content: `Combine24 finalists had the opportunity to put their works up for sale through Highlight. They set their own prices, chose their own print sizes, and selected the network on which to publish them. We didn't interfere.

Total sales were around €30,000. The money went directly to the artists — without any institutional cut. But the distribution was uneven in ways that are worth examining.

Most of the sales were concentrated among artists who already had a presence in digital art circles. Those who performed well were artists with existing collectors, who knew how to communicate around a release, and who had prior experience. The archive gave everyone the same raw material; the market responded to reputation.

Pricing strategy mattered more than most artists expected. In several cases, $1 editions — algorithmically published and open to the public — performed better than more expensive, limited editions.

The choice of network also proved significant. Layer-2 solutions worked well for accessible, lower-priced works — the fees are low enough to make a $1 transaction viable. However, for higher-value works, the Ethereum mainnet performed better. Collectors willing to spend more are often already active on the mainnet and place value on works published there. Choosing a Layer-2 for expensive works can quietly reduce the potential buyer base.

The broader question raised by the experiment is whether an institution can create the conditions for such a direct economic relationship between artists and collectors. I believe it can — but it requires genuine progress from the institution, not just in principle, but in practice.`,
    images: [],
  },
  'example-article': {
    title: 'Example Article',
    date: 'February 2026',
    content: `This is an example text. Replace this with the actual content of the article.

You can write multiple paragraphs here. Each double line break creates a new paragraph.

This is the third paragraph of the example article.`,
    images: ['/blogi1.jpg', '/nykki.jpg', '/blogi2.jpg'],
  },
  'second-article': {
    title: 'Second Article',
    date: 'February 2026',
    content: `This is the second example article. Replace this with the actual content.

Another paragraph goes here.`,
    images: [],
  },
};

export const dynamic = 'force-static';

export function generateStaticParams() {
  return Object.keys(writings).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const piece = writings[slug];
  if (!piece) return {};
  return {
    title: piece.title,
    description: piece.content.split('\n\n')[0].slice(0, 160),
    openGraph: {
      title: piece.title,
      description: piece.content.split('\n\n')[0].slice(0, 160),
      type: 'article',
      publishedTime: piece.date,
    },
  };
}

export default async function WritingPage({ params }) {
  notFound();

  const { slug } = await params;
  const piece = writings[slug];

  if (!piece) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: piece.title,
    description: piece.content.split('\n\n')[0].slice(0, 160),
    author: { '@type': 'Person', name: 'Alvar Mahlberg', url: 'https://alvar.energy' },
    datePublished: piece.date,
    url: `https://alvar.energy/writing/${slug}`,
  };

  return (
    <div className="pb-32 max-w-[1000px] mx-auto px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Nav */}
      <div className="pt-8 mb-12">
        <header>
          <Link href="/" className="text-[22px] font-bold text-black hover:text-gray-500 transition-colors">
            Alvar Mahlberg
          </Link>
          <nav className="flex gap-6 mt-1">
            <Link href="/" className="text-[15px] text-gray-500 hover:text-black transition-colors">
              Projects
            </Link>
            <Link href="/?view=writing" className="text-[15px] text-gray-500 hover:text-black transition-colors">
              Thoughts
            </Link>
            <Link href="/?view=about" className="text-[15px] text-gray-500 hover:text-black transition-colors">
              About
            </Link>
          </nav>
        </header>
      </div>

      {/* Otsikko */}
      <div className="mb-10">
        <h1 className="text-[22px] font-bold text-black mb-2">{piece.title}</h1>
        <p className="text-[14px] text-gray-400">{piece.date}</p>
      </div>

      {/* Sisältö */}
      <div className="space-y-6">
        {piece.content.split('\n\n').map((paragraph, i) => (
          <p key={i} className="text-[17px] text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Kuvat */}
      {piece.images && piece.images.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mt-12">
          {piece.images.map((src, i) => (
            <div key={i} className="relative aspect-square">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
