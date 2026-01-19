import ServicesList from '@/components/services/ServicesList';
import Link from 'next/link';

export const metadata = {
  title: 'Services | Tara Wagner PR',
  description: 'Strategic PR services including media relations, PR strategy, messaging, agency collaboration, and thought leadership.',
};

export default function ServicesPage() {
  return (
    <main className="py-16 bg-cream-100">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-text-primary mb-4">
            Services
          </h1>
          <p className="text-xl text-text-secondary">
            Strategic communications services tailored for healthcare, digital health,
            and technology companies ready to amplify their story.
          </p>
        </div>

        <ServicesList />

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-sage-50 to-plum-50 rounded-xl p-8 md:p-12 text-center border border-cream-200">
          <h2 className="text-2xl md:text-3xl font-serif text-text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how these services can be tailored to meet your
            specific communications goals.
          </p>
          <Link href="mailto:tara@tarawagnerpr.com" className="btn-primary">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
