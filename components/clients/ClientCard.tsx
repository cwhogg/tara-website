import { Client } from '@/lib/types';
import ClientLogo from '@/components/ui/ClientLogo';

interface ClientCardProps {
  client: Client;
}

export default function ClientCard({ client }: ClientCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:border-primary-200 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <ClientLogo name={client.name} logoUrl={client.logoUrl} size="lg" />
        <span className="text-lg font-semibold text-gray-800">{client.name}</span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{client.description}</p>
      <div className="mt-4">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            client.category === 'Digital Health'
              ? 'bg-primary-100 text-primary-700'
              : 'bg-purple-100 text-purple-700'
          }`}
        >
          {client.category}
        </span>
      </div>
    </div>
  );
}
