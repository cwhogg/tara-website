'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Client } from '@/lib/types';
import ClientLogo from '@/components/ui/ClientLogo';

export default function FeaturedClients() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    async function loadClients() {
      try {
        const res = await fetch('/data/clients.json');
        if (res.ok) {
          const data: Client[] = await res.json();
          setClients(data.filter(c => c.featured).slice(0, 8));
        }
      } catch (e) {
        console.log('Could not load clients');
      }
    }
    loadClients();
  }, []);

  if (clients.length === 0) return null;

  return (
    <section className="py-24 lg:py-32 bg-cream-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-taupe-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-sage-100 rounded-full blur-3xl opacity-30" />

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-taupe-500 font-medium tracking-[0.15em] uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6">
            Companies I&apos;ve Worked With
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed">
            From early-stage startups to public companies, I&apos;ve had the privilege
            of partnering with teams who are reimagining healthcare.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {clients.map((client, index) => {
            // Alternate subtle background colors
            const bgColors = ['bg-cream-50', 'bg-white'];
            const bgColor = bgColors[index % 2];

            return (
              <div
                key={client.id}
                className={`${bgColor} rounded-xl p-6 flex flex-col items-center justify-center h-32 border border-cream-300 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group`}
              >
                <ClientLogo name={client.name} logoUrl={client.logoUrl} size="md" />
                <span className="text-text-secondary font-medium text-center text-sm mt-3 group-hover:text-primary-500 transition-colors">
                  {client.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 text-primary-500 font-medium hover:text-primary-600 transition-colors group"
          >
            View all clients
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
