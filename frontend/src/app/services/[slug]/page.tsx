

import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
        <p className="text-gray-600 text-lg">{service.description}</p>
      </div>

      {/* Cover Image */}
      <div className="mb-12">
        <Image
          src={service.coverImage}
          alt={service.title}
          width={1200}
          height={600}
          className="rounded-lg object-cover w-full max-h-[500px]"
        />
      </div>

      {/* Engineering approach / description */}
      <div className="prose max-w-4xl mx-auto mb-16 text-lg leading-relaxed text-gray-700 whitespace-pre-line">
        {service.content}
      </div>

      {/* Project samples */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Sample Works</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.samples.map((project) => (
            <div
              key={project.slug}
              className="group rounded-lg overflow-hidden shadow border hover:shadow-lg transition bg-white"
            >
              <Image
                src={project.img}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg group-hover:text-[#B00D1C] transition">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-1">Client: {project.client}</p>
                <p className="text-sm text-gray-600 mb-2">{project.content}</p>
                <div className="text-xs text-gray-700 mb-1">
                  <strong>Tech Stack:</strong> {project.techStack?.join(', ') || 'N/A'}
                </div>
                <div className="text-xs text-green-700">
                  <strong>Achievement:</strong> {project.achievement}
                </div>
                <Link
                  href={`/services/${service.slug}/${project.slug}`}
                  className="inline-block mt-3 text-[#B00D1C] hover:underline text-sm"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
  const service = services.find((s) => s.slug === params.slug);
  
  return {
    title: `${service?.title} | Your Name`,
    description: service?.description,
    openGraph: {
      images: [service?.coverImage],
    },
  };
}