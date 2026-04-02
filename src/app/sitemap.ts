import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saidulalom.com'
  
  const slugs = [
    "onesoul-e-corner", 
    "guwahati-flavors", 
    "bella-vista", 
    "modern-landing-page", 
    "weather-app", 
    "futuristic-start-up", 
    "fitflow-gym", 
    "buildmart10", 
    "fintrack"
  ];

  const defaultPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    }
  ];

  const projectPages = slugs.map((slug) => ({
    url: `${baseUrl}/project/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...defaultPages, ...projectPages];
}
