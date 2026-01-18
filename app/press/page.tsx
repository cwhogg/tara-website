import PressList from '@/components/press/PressList';

export const metadata = {
  title: 'Press | Tara Wagner PR',
  description: 'Media coverage and press hits for our clients across trade, business, and consumer publications.',
};

export default function PressPage() {
  return (
    <main className="py-16">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Press Coverage
          </h1>
          <p className="text-xl text-gray-600">
            Selected media coverage showcasing our clients&apos; stories across trade,
            business, and consumer publications.
          </p>
        </div>

        <PressList />
      </div>
    </main>
  );
}
