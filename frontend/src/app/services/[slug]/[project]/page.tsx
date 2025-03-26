import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: { slug: string; project: string };
};

export default function ProjectPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  const project = service.samples.find((p) => p.slug === params.project);
  if (!project) return notFound();

  return (
    <section className="max-w-5xl mx-auto py-20 px-4 md:px-6">
      <Link href={`/services/${service.slug}`} className="text-[#B00D1C] text-sm hover:underline mb-4 inline-block">
        ← Back to {service.title}
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>

      <Image
        src={project.img}
        alt={project.title}
        width={1000}
        height={600}
        className="rounded-lg w-full object-cover mb-8"
      />

      <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{project.content}</p>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-[#B00D1C] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#B00D1C] border border-[#B00D1C] transition"
        >
          Visit Live Site
        </a>
      )}
    </section>
  );
}
