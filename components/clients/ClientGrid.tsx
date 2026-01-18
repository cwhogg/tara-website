'use client';

import { useState, useEffect } from 'react';
import { Client, ClientCategory } from '@/lib/types';
import ClientCard from './ClientCard';

const categories: (ClientCategory | 'All')[] = ['All', 'Digital Health', 'Consumer Tech'];

export default function ClientGrid() {
  const [clients, setClients] = useState<Client[]>([]);
  const [filter, setFilter] = useState<ClientCategory | 'All'>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadClients() {
      try {
        const res = await fetch('/data/clients.json');
        if (res.ok) {
          const data = await res.json();
          setClients(data);
        }
      } catch (e) {
        console.log('Could not load clients');
      } finally {
        setLoading(false);
      }
    }
    loadClients();
  }, []);

  const filteredClients = (filter === 'All'
    ? clients
    : clients.filter(c => c.category === filter)
  ).sort((a, b) => a.name.localeCompare(b.name));

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              filter === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Client Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>

      {filteredClients.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No clients found for this category.
        </div>
      )}
    </div>
  );
}
