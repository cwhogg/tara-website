import { PressCategory } from '@/lib/types';

interface PressFilterProps {
  activeFilter: PressCategory;
  onFilterChange: (filter: PressCategory) => void;
}

const filters: PressCategory[] = ['All', 'Trade', 'Business', 'Consumer'];

export default function PressFilter({ activeFilter, onFilterChange }: PressFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
            activeFilter === filter
              ? 'bg-primary-500 text-white'
              : 'bg-cream-200 text-text-secondary hover:bg-cream-300'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
