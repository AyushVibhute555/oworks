export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sample-blog-post-1",
    title: "Sample Blog Post 1",
    excerpt: "This is a placeholder excerpt for the sample blog post to demonstrate layout and styling.",
    content: "This is placeholder content for Sample Blog Post 1. It will be replaced during the WordPress migration.",
    date: "May 15, 2024",
    category: "Marketing Insights"
  },
  {
    slug: "sample-blog-post-2",
    title: "Sample Blog Post 2",
    excerpt: "This is a placeholder excerpt for the sample blog post to demonstrate layout and styling.",
    content: "This is placeholder content for Sample Blog Post 2. It will be replaced during the WordPress migration.",
    date: "June 02, 2024",
    category: "SEO Trends"
  },
  {
    slug: "sample-blog-post-3",
    title: "Sample Blog Post 3",
    excerpt: "This is a placeholder excerpt for the sample blog post to demonstrate layout and styling.",
    content: "This is placeholder content for Sample Blog Post 3. It will be replaced during the WordPress migration.",
    date: "July 20, 2024",
    category: "Digital Strategy"
  },
  {
    slug: "sample-blog-post-4",
    title: "Sample Blog Post 4",
    excerpt: "This is a placeholder excerpt for the sample blog post to demonstrate layout and styling.",
    content: "This is placeholder content for Sample Blog Post 4. It will be replaced during the WordPress migration.",
    date: "August 10, 2024",
    category: "Social Media"
  },
  {
    slug: "sample-blog-post-5",
    title: "Sample Blog Post 5",
    excerpt: "This is a placeholder excerpt for the sample blog post to demonstrate layout and styling.",
    content: "This is placeholder content for Sample Blog Post 5. It will be replaced during the WordPress migration.",
    date: "September 05, 2024",
    category: "Content Creation"
  }
];
