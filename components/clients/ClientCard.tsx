import { Client } from '@/lib/types';
import ClientLogo from '@/components/ui/ClientLogo';

interface ClientCardProps {
  client: Client;
}

const categoryColors = {
  'Digital Health': 'bg-sage-50 text-sage-600',
  'Consumer Tech': 'bg-plum-50 text-plum-600',
};

export default function ClientCard({ client }: ClientCardProps) {
  const categoryClass = categoryColors[client.category as keyof typeof categoryColors] || 'bg-taupe-50 text-taupe-600';

  return (
    <div className="bg-cream-50 rounded-xl border border-cream-300 p-6 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group">
      <div className="flex items-center gap-4 mb-4">
        <ClientLogo name={client.name} logoUrl={client.logoUrl} size="lg" />
        <span className="text-lg font-serif text-text-primary group-hover:text-primary-500 transition-colors">{client.name}</span>
      </div>
      <p className="text-text-muted text-sm leading-relaxed">{client.description}</p>
      <div className="mt-4">
        <span className={`inline-block px-3 py-1 rounded-md text-xs font-medium ${categoryClass}`}>
          {client.category}
        </span>
      </div>
    </div>
  );
}
