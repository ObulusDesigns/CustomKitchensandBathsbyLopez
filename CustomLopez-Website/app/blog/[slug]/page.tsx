import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import PageLayout from '@/components/layout/PageLayout';
import { getBlogPostBySlug, getRelatedPosts, blogPosts } from '@/lib/blog-data';
import { BUSINESS_INFO } from '@/lib/constants';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | ${BUSINESS_INFO.name} Blog`,
    description: post.metaDescription,
    keywords: post.keywords.join(', '),
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug);

  // Structured data for blog post
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: `${process.env.NEXT_PUBLIC_SITE_URL}${post.image}`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo/SHOP-LOPEZKITCHEN-PROOF-1.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PageLayout
        hero={{
          title: post.title,
          subtitle: `${post.category} • ${post.date} • ${post.readTime} min read`,
          breadcrumbs: [
            { text: 'Blog', href: '/blog' },
            { text: post.title, href: `/blog/${post.slug}` }
          ],
          backgroundImage: post.image
        }}
      >
        {/* Article Content */}
        <article className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            {/* Author Info */}
            <div className="flex items-center mb-8 pb-8 border-b">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-burgundy">{post.author}</p>
                <p className="text-gray-600">Expert Kitchen & Bath Remodelers</p>
              </div>
            </div>

            {/* Article Lead */}
            <div className="mb-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-xl overflow-hidden mb-12">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none prose-headings:text-burgundy prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-gold hover:prose-a:text-burgundy prose-strong:text-burgundy prose-ul:list-disc prose-ol:list-decimal prose-li:text-gray-700">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-cream rounded-lg text-center">
              <h3 className="text-2xl font-semibold text-burgundy mb-4">
                Ready to Start Your Remodeling Project?
              </h3>
              <p className="text-gray-700 mb-6">
                Turn your remodeling ideas into reality with Monmouth County's trusted experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`tel:${BUSINESS_INFO.phone}`} className="btn-primary">
                  Call {BUSINESS_INFO.phone}
                </Link>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t">
              <h4 className="text-lg font-semibold text-burgundy mb-4">Share This Article</h4>
              <div className="flex space-x-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Share on Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Share on X
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Share on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="heading-2 text-burgundy mb-10 text-center">
              Related Articles
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-burgundy text-white px-3 py-1 rounded-full text-sm">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{relatedPost.date}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.readTime} min read</span>
                    </div>
                    
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <h3 className="text-xl font-semibold text-burgundy mb-3 hover:text-gold transition-colors">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    
                    <Link 
                      href={`/blog/${relatedPost.slug}`}
                      className="text-gold font-semibold hover:text-burgundy transition-colors inline-flex items-center"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link href="/blog" className="btn-secondary">
                View All Blog Posts
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}