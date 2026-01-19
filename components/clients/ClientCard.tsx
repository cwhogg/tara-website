import { Client } from '@/lib/types';
import ClientLogo from '@/components/ui/ClientLogo';

interface ClientCardProps {
  client: Client;
}

export default function ClientCard({ client }: ClientCardProps) {
  return (
    <div className="bg-cream-50 rounded-xl border border-cream-300 p-6 hover:shadow-lg hover:border-primary-200 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <ClientLogo name={client.name} logoUrl={client.logoUrl} size="lg" />
        <span className="text-lg font-serif text-text-primary">{client.name}</span>
      </div>
      <p className="text-text-muted text-sm leading-relaxed">{client.description}</p>
      <div className="mt-4">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            client.category === 'Digital Health'
              ? 'bg-primary-50 text-primary-600'
              : 'bg-primary-100 text-primary-700'
          }`}
        >
          {client.category}
        </span>
      </div>
    </div>
  );
}
