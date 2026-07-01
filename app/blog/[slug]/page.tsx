import Link from 'next/link';
import Image from 'next/image';
import { HeaderProfessional } from '@/components/header-professional';
import { FooterProfessional } from '@/components/footer-professional';
import { blogPosts, getBlogPost } from '@/lib/blog-data';
import { ArrowLeft, ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <>
      <HeaderProfessional />
      <main>
        {/* Back Button */}
        <div className="bg-background border-b border-border pt-32 pb-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 font-semibold transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <section className="bg-background relative overflow-hidden py-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                {post.category}
              </span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-foreground-secondary border-b border-border pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                By {post.author}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-background py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="bg-background py-16">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <style>{`
              .dropcap {
                float: left;
                font-size: 2.5rem;
                font-weight: bold;
                line-height: 0.9;
                padding-right: 0.5rem;
                color: var(--color-primary);
              }
            `}</style>
            <div className="prose prose-invert max-w-none mb-12">
              <div
                className="text-lg leading-relaxed text-foreground-secondary space-y-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>
        </section>

        {/* Navigation */}
        <section className="bg-background-secondary py-16 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Continue Reading</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Previous Post */}
              {previousPost ? (
                <Link href={`/blog/${previousPost.id}`}>
                  <div className="group card h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-semibold text-primary">Previous Post</span>
                      </div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {previousPost.title}
                      </h3>
                      <p className="text-sm text-foreground-secondary line-clamp-2 mb-4">
                        {previousPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-foreground-secondary mt-auto">
                        <Tag className="w-3 h-3" />
                        {previousPost.category}
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="card bg-muted/50 flex items-center justify-center p-6 h-full">
                  <p className="text-foreground-secondary">No previous post</p>
                </div>
              )}

              {/* Next Post */}
              {nextPost ? (
                <Link href={`/blog/${nextPost.id}`}>
                  <div className="group card h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-primary">Next Post</span>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {nextPost.title}
                      </h3>
                      <p className="text-sm text-foreground-secondary line-clamp-2 mb-4">
                        {nextPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-foreground-secondary mt-auto">
                        <Tag className="w-3 h-3" />
                        {nextPost.category}
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="card bg-muted/50 flex items-center justify-center p-6 h-full">
                  <p className="text-foreground-secondary">No next post</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <FooterProfessional />
    </>
  );
}
