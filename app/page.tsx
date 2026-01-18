import Hero from '@/components/home/Hero';
import ExpertiseSection from '@/components/home/ExpertiseSection';
import FeaturedClients from '@/components/home/FeaturedClients';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Hero />
      <ExpertiseSection />
      <FeaturedClients />

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Tell Your Story?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how strategic PR can help your healthcare or digital health
            company reach the audiences that matter most.
          </p>
          <Link
            href="mailto:tara@tarawagnerpr.com"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-primary-600 bg-white hover:bg-gray-100 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
