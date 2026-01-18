import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Strategic PR for Healthcare Innovators
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            20+ years leading PR and storytelling for mission-driven companies
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl">
            Translating complex healthcare and technology stories into compelling narratives
            that resonate with the audiences that matter most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services" className="btn-primary">
              View Services
            </Link>
            <Link href="/clients" className="btn-secondary">
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
