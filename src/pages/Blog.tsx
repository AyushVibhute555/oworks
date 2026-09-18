import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <ScrollReveal>
              <h1 className="font-serif text-5xl md:text-7xl text-ink mb-8">
                Insights & Thoughts
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-ink-light leading-relaxed">
                Explore our latest thoughts on digital marketing, design trends, and strategies to grow your brand.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-cream-dark border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 100}>
                <Link to={`/blog/${post.slug}`} className="group block h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden mb-6 bg-cream">
                    <img
                      src={`https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&sig=${index}`}
                      alt={`Placeholder for ${post.title}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="eyebrow">{post.category}</span>
                      <span className="text-sm text-ink-muted">{post.date}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-ink mb-3 group-hover:text-ink-light transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-ink-light line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto inline-flex items-center text-sm font-medium text-ink transition-colors group-hover:text-ink-light">
                      Read Article
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
