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
    <section className="py-20 lg:py-28 bg-cream-100">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
            Companies I&apos;ve Worked With
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From early-stage startups to public companies, I&apos;ve had the privilege
            of partnering with teams who are reimagining healthcare.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center h-32 border border-cream-300 hover:border-primary-300 hover:shadow-lg transition-all duration-300 group"
            >
              <ClientLogo name={client.name} logoUrl={client.logoUrl} size="md" />
              <span className="text-gray-700 font-medium text-center text-sm mt-3 group-hover:text-primary-700 transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 text-primary-700 font-medium hover:text-primary-800 transition-colors group"
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
