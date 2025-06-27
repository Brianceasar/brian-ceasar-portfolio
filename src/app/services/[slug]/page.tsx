import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Code, Award } from 'lucide-react';
import Contact from '../../../components/Contact/Contact';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-gray-50  mt-12 via-white to-gray-100">
      

      <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header - Changed from centered to left aligned */}
        <div className="text-left max-w-4xl mb-16 relative">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#B00D1C]/10 rounded-full text-sm font-semibold text-[#B00D1C]">
              <Code className="w-4 h-4" />
              Service Details
            </span>
            
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
            {service.title}
            
          </h1>
          
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl">
            {service.description}
          </p>
          {/* Decorative line */}
          <div className="absolute -bottom-6 left-0 w-20 h-1 bg-gradient-to-r from-[#B00D1C] to-red-600 rounded-full"></div>
          
          
        </div>

        {service.coverImage && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={service.coverImage}
              alt={service.title}
              width={1200}
              height={500}
              className="w-full h-72 md:h-96 object-cover"
              priority
            />
          </div>
        )}

        {/* Content Section */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                My Approach
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line mb-10">
                {service.approach}
              </div>
              {/* Process Section */}
              {service.process && service.process.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#B00D1C] to-red-600 rounded-lg flex items-center justify-center">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    My Process
                  </h3>
                  
                  <div className="grid gap-6 md:gap-8">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="relative group">
                        {/* Timeline connector line */}
                        {idx !== service.process.length - 1 && (
                          <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-[#B00D1C]/30 to-gray-200 hidden md:block" />
                        )}
                        
                        <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#B00D1C]/20 hover:shadow-lg transition-all duration-300 group-hover:translate-x-1">
                          {/* Step number */}
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#B00D1C] to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {String(idx + 1).padStart(2, '0')}
                          </div>
                          
                          {/* Step content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#B00D1C] transition-colors duration-300">
                              {step.title}
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                          
                          {/* Arrow indicator */}
                          <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Process summary */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-[#B00D1C]/5 to-red-50 rounded-2xl border border-[#B00D1C]/10">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#B00D1C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4 text-[#B00D1C]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Why This Process Works</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {service.processSummary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sample Works Section */}
        <div className="mb-8">
          <div className="text-left mb-12 relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Sample Works</h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Explore some of my recent projects that showcase the quality and creativity I bring to every client.
            </p>
            <div className="absolute -bottom-4 left-0 w-16 h-1 bg-gradient-to-r from-[#B00D1C] to-red-600 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.samples.map((project, index) => (
              <div
                key={project.slug}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-4 right-4">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                        <ExternalLink className="w-5 h-5 text-gray-700" />
                      </div>
                    </div>
                  </div>

                  {/* Client Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                    {project.client}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-[#B00D1C] transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.content}
                  </p>

                  {/* Tech Stack */}
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium hover:bg-[#B00D1C]/10 hover:text-[#B00D1C] transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs">
                            +{project.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Achievement */}
                  {project.achievement && (
                    <div className="mb-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                      <div className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-xs font-semibold text-green-800 block mb-1">Achievement</span>
                          <span className="text-xs text-green-700">{project.achievement}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* View Details Link */}
                  <Link
                    href={`/services/${service.slug}/${project.slug}`}
                    className="inline-flex items-center gap-2 text-[#B00D1C] font-semibold hover:gap-3 transition-all duration-300 group/link"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Card border animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#B00D1C]/20 transition-colors duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Contact />
        </div>
      </section>
    </div>
  );
}

// Generate static paths for SSG
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Set dynamic metadata
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  return {
    title: `${service?.title} | Brian Ceasar`,
    description: service?.description,
    openGraph: {
      images: [service?.coverImage],
    },
  };
}