import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar'
import Image from 'next/image';
import { services } from '@/data/services';

export default function ServicesPage() {
    
  return (
    <>
    <Navbar />
    <section className="max-w-7xl mx-auto py-20 mt-12 px-6">

          <h1 className="text-4xl font-bold mb-12 text-center">My Services</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                  <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group block border rounded-lg overflow-hidden shadow hover:shadow-xl transition"
                  >
                      <Image
                          src={service.coverImage}
                          alt={service.title}
                          width={600}
                          height={400}
                          className="w-full h-52 object-cover" />
                      <div className="p-4">
                          <h2 className="text-xl font-semibold group-hover:text-[#B00D1C] transition">{service.title}</h2>
                          <p className="text-sm text-gray-600 mt-2">{service.description}</p>
                      </div>
                  </Link>
              ))}
          </div>
      </section></>
  );
}
