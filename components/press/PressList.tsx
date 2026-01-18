'use client';

import { useState, useEffect } from 'react';
import { PressItem as PressItemType, PressCategory } from '@/lib/types';
import PressItem from './PressItem';
import PressFilter from './PressFilter';

export default function PressList() {
  const [pressItems, setPressItems] = useState<PressItemType[]>([]);
  const [filter, setFilter] = useState<PressCategory>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPress() {
      try {
        const res = await fetch('/data/press.json');
        if (res.ok) {
          const data = await res.json();
          // Sort by date, newest first
          const sorted = data.sort((a: PressItemType, b: PressItemType) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          setPressItems(sorted);
        }
      } catch (e) {
        console.log('Could not load press items');
      } finally {
        setLoading(false);
      }
    }
    loadPress();
  }, []);

  const filteredItems = filter === 'All'
    ? pressItems
    : pressItems.filter(item => item.category === filter);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <PressFilter activeFilter={filter} onFilterChange={setFilter} />
      </div>

      <div className="space-y-4">
        {filteredItems.map((item) => (
          <PressItem key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No press items found for this category.
        </div>
      )}
    </div>
  );
}
