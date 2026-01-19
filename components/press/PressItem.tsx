import { PressItem as PressItemType } from '@/lib/types';

interface PressItemProps {
  item: PressItemType;
}

export default function PressItem({ item }: PressItemProps) {
  const categoryColors = {
    Trade: 'bg-primary-50 text-primary-600',
    Business: 'bg-success-light text-success',
    Consumer: 'bg-primary-100 text-primary-700',
  };

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-cream-50 rounded-xl border border-cream-300 p-6 hover:shadow-md hover:border-primary-200 transition-all duration-200 group"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex-grow">
          <h3 className="text-lg font-serif text-text-primary group-hover:text-primary-500 transition-colors mb-2">
            {item.title}
          </h3>
          <p className="text-sm font-medium text-text-secondary">{item.publication}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[item.category]}`}>
            {item.category}
          </span>
          <svg
            className="w-5 h-5 text-text-subtle group-hover:text-primary-500 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}
