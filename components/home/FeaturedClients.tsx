'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Client } from '@/lib/types';

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
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600">
            Proud to have partnered with innovative companies transforming healthcare
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-lg p-6 flex items-center justify-center h-24 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <span className="text-gray-700 font-medium text-center">{client.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/clients" className="btn-secondary">
            View All Clients
          </Link>
        </div>
      </div>
    </section>
  );
}
