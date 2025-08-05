import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import { getProjectBySlug, getRelatedProjects, getAllProjectSlugs } from '@/lib/portfolio-data';
import { BUSINESS_INFO } from '@/lib/constants';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Portfolio | ${BUSINESS_INFO.name}`,
    description: project.metaDescription,
    keywords: project.keywords.join(', '),
    openGraph: {
      title: project.title,
      description: project.metaDescription,
      images: [
        {
          url: project.images[0].src,
          width: 1200,
          height: 630,
          alt: project.images[0].alt,
        },
      ],
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  const relatedProjects = getRelatedProjects(params.slug, 3);

  if (!project) {
    notFound();
  }

  return (
    <PageLayout
      hero={{
        title: project.title,
        subtitle: project.location,
        breadcrumbs: [
          { text: 'Portfolio', href: '/portfolio' },
          { text: project.title, href: `/portfolio/${project.slug}` }
        ],
        backgroundImage: project.images[0].src
      }}
    >
      {/* Project Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6">{project.description}</p>
                {project.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              {/* Before & After (if available) */}
              {project.beforeImages && project.beforeImages.length > 0 && (
                <div className="mt-12">
                  <h3 className="heading-3 text-burgundy mb-6">Before & After</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Before</h4>
                      <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={project.beforeImages[0].src}
                          alt={project.beforeImages[0].alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">After</h4>
                      <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={project.images[0].src}
                          alt={project.images[0].alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Challenges & Solutions */}
              {project.challenges && project.solutions && (
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="heading-4 text-burgundy mb-4">Challenges</h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="heading-4 text-burgundy mb-4">Solutions</h3>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project Details */}
              <div className="bg-cream rounded-lg p-6 mb-8">
                <h3 className="heading-4 text-burgundy mb-4">Project Details</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="font-semibold text-gray-700">Location</dt>
                    <dd className="text-gray-600">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-700">Category</dt>
                    <dd className="text-gray-600 capitalize">{project.category.replace('-', ' ')}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-700">Completion Date</dt>
                    <dd className="text-gray-600">{project.completionDate}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-700">Project Duration</dt>
                    <dd className="text-gray-600">{project.duration}</dd>
                  </div>
                  {project.projectValue && (
                    <div>
                      <dt className="font-semibold text-gray-700">Investment Range</dt>
                      <dd className="text-gray-600">{project.projectValue}</dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Features */}
              <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
                <h3 className="heading-4 text-burgundy mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-burgundy text-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center space-x-1 text-gold mb-3">
                  {[...Array(project.testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-cream italic mb-3">
                  "{project.testimonial.text}"
                </blockquote>
                <cite className="text-sm text-cream/80 not-italic">— {project.testimonial.author}</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-2 text-burgundy text-center mb-12">Project Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="group">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {image.caption && (
                  <p className="text-sm text-gray-600 mt-2 text-center">{image.caption}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Used */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-burgundy text-center mb-12">Materials & Finishes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.materials.map((category, index) => (
              <div key={index} className="text-center">
                <h3 className="font-semibold text-burgundy mb-3">{category.category}</h3>
                <ul className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="heading-2 text-burgundy text-center mb-12">Related Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link 
                  key={relatedProject.id} 
                  href={`/portfolio/${relatedProject.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={relatedProject.images[0].src}
                        alt={relatedProject.images[0].alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-burgundy mb-2 group-hover:text-gold transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">{relatedProject.location}</p>
                      <p className="text-sm text-gray-700">{relatedProject.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-burgundy text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="body-large mb-8 max-w-3xl mx-auto">
            Let's create something beautiful together. Contact us today to discuss your 
            kitchen, bathroom, or home remodeling project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-secondary">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}