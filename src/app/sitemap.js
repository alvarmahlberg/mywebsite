export default function sitemap() {
  const baseUrl = 'https://alvar.energy';

  // Projektien slugit
  const projects = [
    'remix-the-archive',
    'alusta-space',
    'combine24',
    'alusta-art',
    'metaspace'
  ];

  // Luo projekteille URL:t
  const projectUrls = projects.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projectUrls,
  ];
} 