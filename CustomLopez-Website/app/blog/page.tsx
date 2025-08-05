'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import { BUSINESS_INFO } from '@/lib/constants';
import { blogPosts } from '@/lib/blog-data';

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [displayedPosts, setDisplayedPosts] = useState(POSTS_PER_PAGE);
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  // Filter posts by category
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  
  // Get posts to display
  const postsToShow = filteredPosts.slice(0, displayedPosts);
  
  const handleLoadMore = () => {
    setDisplayedPosts(prev => prev + POSTS_PER_PAGE);
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setDisplayedPosts(POSTS_PER_PAGE); // Reset to initial amount when category changes
  };

  return (
    <PageLayout
      hero={{
        title: 'Our Remodeling Blog',
        subtitle: 'Expert tips, design trends, and remodeling insights for Monmouth County homeowners',
        breadcrumbs: [
          { text: 'Blog', href: '/blog' }
        ],
        backgroundImage: '/images/gallery/IMG_0428.jpeg'
      }}
    >
      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-burgundy mb-4">
              Your Resource for Home Remodeling Excellence
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              With over {new Date().getFullYear() - BUSINESS_INFO.yearEstablished} years of experience 
              transforming Monmouth County homes, we share our expertise to help you make informed 
              decisions about your next remodeling project.
            </p>
          </div>

          {/* Blog Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-burgundy text-white hover:bg-burgundy-dark'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Articles' : category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          {postsToShow.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postsToShow.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-burgundy text-white px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-semibold text-burgundy mb-3 hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found in this category.</p>
            </div>
          )}

          {/* Load More Button */}
          {displayedPosts < filteredPosts.length && (
            <div className="text-center mt-12">
              <button 
                onClick={handleLoadMore}
                className="btn-secondary"
              >
                Load More Articles ({filteredPosts.length - displayedPosts} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-cream">
        <div className="container-custom max-w-4xl">
          <div className="text-center">
            <h2 className="heading-3 text-burgundy mb-4">
              Stay Updated with Remodeling Tips & Trends
            </h2>
            <p className="text-gray-600 mb-8">
              Join our newsletter for monthly updates on design trends, remodeling tips, 
              and exclusive offers for Monmouth County homeowners.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-burgundy"
                required
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-burgundy mb-8 text-center">
            Popular Topics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/category/kitchen-design" className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow text-center group">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-semibold text-burgundy group-hover:text-gold transition-colors">
                Kitchen Design Ideas
              </h3>
            </Link>

            <Link href="/blog/category/bathroom-trends" className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow text-center group">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-burgundy group-hover:text-gold transition-colors">
                Bathroom Trends
              </h3>
            </Link>

            <Link href="/blog/category/cost-guides" className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow text-center group">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-burgundy group-hover:text-gold transition-colors">
                Cost & Budget Guides
              </h3>
            </Link>

            <Link href="/blog/category/diy-tips" className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow text-center group">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-burgundy group-hover:text-gold transition-colors">
                DIY Tips & Tricks
              </h3>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}