import Hero from '@/components/home/Hero';
import ExpertiseSection from '@/components/home/ExpertiseSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import FeaturedClients from '@/components/home/FeaturedClients';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Hero />
      <ExpertiseSection />
      <ServicesPreview />
      <FeaturedClients />

      {/* Personal CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-600 to-primary-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-800 rounded-full blur-3xl opacity-40" />

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
              Let&apos;s tell your story together.
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Whether you&apos;re launching a new product, raising a round, or ready
              to build your brand&apos;s voice, I&apos;d love to hear what you&apos;re working on.
            </p>
            <Link
              href="mailto:tara@tarawagnerpr.com"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-primary-700 bg-white hover:bg-cream-100 transition-all duration-300 hover:shadow-xl"
            >
              Get in Touch
            </Link>
            <p className="mt-6 text-primary-200 text-sm">
              tara@tarawagnerpr.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
