export default function sitemap() {
  const baseUrl = 'https://alvar.energy';

  const projects = [
    'rmxta-newyork',
    'museum-of-tomorrow',
    'rmxta-helsinki',
    'alusta-space',
    'combine24',
    'alusta-art',
    'metaspace',
    'blockchain-laboratory',
  ];

  const writings = [
    'generative-art-national-archive',
    'museums-reaching-for-new-audiences',
    'selling-generative-art-on-chain',
    'example-article',
    'second-article',
  ];

  const projectUrls = projects.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const writingUrls = writings.map((slug) => ({
    url: `${baseUrl}/writing/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projectUrls,
  ];
}
