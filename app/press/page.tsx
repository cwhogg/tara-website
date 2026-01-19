import PressList from '@/components/press/PressList';

export const metadata = {
  title: 'Press | Tara Wagner PR',
  description: 'Media coverage and press hits for our clients across trade, business, and consumer publications.',
};

export default function PressPage() {
  return (
    <main className="py-16 bg-cream-100">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-text-primary mb-4">
            Press Coverage
          </h1>
          <p className="text-xl text-text-secondary">
            Selected media coverage showcasing our clients&apos; stories across trade,
            business, and consumer publications.
          </p>
        </div>

        <PressList />
      </div>
    </main>
  );
}
