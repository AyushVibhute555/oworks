import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { blogPosts } from "@/data/blog";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const nextPost = blogPosts[(postIndex + 1) % blogPosts.length];

  return (
    <Layout>
      {/* Article Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="eyebrow">{post.category}</span>
                <span className="text-ink-muted px-2 border-l border-divider">{post.date}</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="font-serif text-4xl md:text-6xl text-ink mb-8 leading-tight">
                {post.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl text-ink-light leading-relaxed">
                {post.excerpt}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16 md:pb-24">
        <div className="w-full">
          <ScrollReveal>
            <div className="aspect-[16/9] md:aspect-[21/9] bg-cream overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
                alt={`Placeholder — ${post.title} main image, to be replaced`}
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto prose prose-lg md:prose-xl prose-stone">
            <ScrollReveal>
              <p className="text-ink-light leading-relaxed">{post.content}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Next Article */}
      <section className="border-t border-divider">
        <Link 
          to={`/blog/${nextPost.slug}`}
          className="group block"
        >
          <div className="container-editorial px-6 md:px-12 lg:px-20 py-16 md:py-24">
            <div className="flex items-center justify-between">
              <div>
                <p className="eyebrow mb-4">Next Article</p>
                <h2 className="font-serif text-3xl md:text-4xl text-ink group-hover:opacity-70 transition-opacity duration-300">
                  {nextPost.title}
                </h2>
              </div>
              <ArrowRight 
                size={32} 
                strokeWidth={1} 
                className="text-ink transition-transform duration-300 group-hover:translate-x-2" 
              />
            </div>
          </div>
        </Link>
      </section>

      {/* Back Link */}
      <section className="bg-cream-dark border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20 py-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors duration-300"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Back to all articles
          </Link>
        </div>
      </section>
    </Layout>
  );
}
