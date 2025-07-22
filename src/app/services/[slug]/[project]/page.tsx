import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Props = {
  params: Promise<{
    slug: string;
    project: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  const project = service?.samples?.find((p) => p.slug === resolvedParams.project);

  return {
    title: `${project?.title || 'Project'} | ${service?.title || 'Service'}`,
    description: project?.content?.substring(0, 160) || 'Project details',
    openGraph: {
      images: [project?.img || '/default-project.jpg'],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  if (!service) return notFound();

  const project = service.samples?.find((p) => p.slug === resolvedParams.project);
  if (!project) return notFound();

  return (
    <article className="max-w-5xl mx-auto py-12 md:py-20 px-4 md:px-6">
      <div className="mb-8">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center text-[#B00D1C] hover:underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {service.title}
        </Link>
      </div>

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          {project.title}
        </h1>
        {project.client && (
          <p className="text-lg text-gray-600">Client: {project.client}</p>
        )}
      </header>

      <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg mb-8 bg-gray-100">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none">
        {project.organisation && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Understanding the Organisation</h2>
            <p className="text-gray-700 whitespace-pre-line">{project.organisation}</p>
          </section>
        )}

        {project.problem && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Understanding the Problem</h2>
            <p className="text-gray-700 whitespace-pre-line">{project.problem}</p>
          </section>
        )}

        {project.approach && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Methodology and Approach</h2>
            <p className="text-gray-700 whitespace-pre-line">{project.approach}</p>
          </section>
        )}

        <div className="whitespace-pre-line text-gray-700 leading-relaxed">
          {project.content}
        </div>

        {project.techStack && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.achievement && (
          <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-100">
            <h3 className="font-medium text-green-800 mb-2">Key Achievement</h3>
            <p className="text-green-700">{project.achievement}</p>
          </div>
        )}
      </div>

      {project.link && (
        <div className="mt-12">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#B00D1C] text-white rounded-full hover:bg-[#D51515] transition-colors"
          >
            Visit Live Site
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      )}
    </article>
  );
}
