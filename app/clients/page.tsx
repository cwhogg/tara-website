import ClientGrid from '@/components/clients/ClientGrid';

export const metadata = {
  title: 'Clients | Tara Wagner PR',
  description: 'Proud to have partnered with innovative companies transforming healthcare and technology.',
};

export default function ClientsPage() {
  return (
    <main className="py-16 bg-cream-100">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-text-primary mb-4">
            Our Clients
          </h1>
          <p className="text-xl text-text-secondary">
            Proud to have partnered with innovative companies transforming healthcare,
            digital health, and consumer technology.
          </p>
        </div>

        <ClientGrid />
      </div>
    </main>
  );
}
