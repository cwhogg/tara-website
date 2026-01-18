'use client';

import { useState } from 'react';
import { Client, ClientCategory } from '@/lib/types';
import { generateId } from '@/lib/data-utils';
import ClientLogo from '@/components/ui/ClientLogo';

interface ClientFormProps {
  client?: Client;
  onSave: (client: Client) => void;
  onCancel: () => void;
}

const categories: ClientCategory[] = ['Digital Health', 'Consumer Tech'];

export default function ClientForm({ client, onSave, onCancel }: ClientFormProps) {
  const [autoFillInput, setAutoFillInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isFetchingLogo, setIsFetchingLogo] = useState(false);
  const [error, setError] = useState('');
  const [logoError, setLogoError] = useState('');

  const [formData, setFormData] = useState({
    name: client?.name || '',
    description: client?.description || '',
    logoUrl: client?.logoUrl || '',
    category: client?.category || 'Digital Health' as ClientCategory,
    featured: client?.featured || false,
  });

  const handleAutoFill = async () => {
    if (!autoFillInput.trim()) return;

    setIsGenerating(true);
    setError('');

    try {
      const res = await fetch('/api/generate-client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: autoFillInput }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to generate');
      }

      const data = await res.json();
      setFormData({
        ...formData,
        name: data.name || formData.name,
        description: data.description || formData.description,
        category: data.category || formData.category,
      });
      setAutoFillInput('');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to generate client info');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleFetchLogo = async () => {
    if (!formData.name.trim()) {
      setLogoError('Enter a company name first');
      return;
    }

    setIsFetchingLogo(true);
    setLogoError('');

    try {
      const res = await fetch('/api/fetch-logo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyName: formData.name }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Logo not found');
      }

      setFormData({ ...formData, logoUrl: data.logoUrl });
    } catch (e) {
      setLogoError(e instanceof Error ? e.message : 'Failed to fetch logo');
    } finally {
      setIsFetchingLogo(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: client?.id || generateId(),
      ...formData,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Auto-fill section */}
      {!client && (
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quick Add with AI
          </label>
          <p className="text-xs text-gray-500 mb-2">
            Enter a company name or URL to auto-fill details
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              value={autoFillInput}
              onChange={(e) => setAutoFillInput(e.target.value)}
              placeholder="e.g., Stripe or https://stripe.com"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAutoFill();
                }
              }}
            />
            <button
              type="button"
              onClick={handleAutoFill}
              disabled={isGenerating || !autoFillInput.trim()}
              className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Generating...
                </>
              ) : (
                'Generate'
              )}
            </button>
          </div>
          {error && <p className="text-red-600 text-xs mt-2">{error}</p>}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          required
          rows={3}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <ClientLogo name={formData.name || 'Company'} logoUrl={formData.logoUrl} size="lg" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={formData.logoUrl}
                onChange={(e) => setFormData({ ...formData, logoUrl: e.target.value })}
                placeholder="https://logo.clearbit.com/example.com"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
              />
              {formData.logoUrl && (
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, logoUrl: '' })}
                  className="px-3 py-2 text-sm text-gray-600 hover:text-red-600"
                  title="Clear logo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
            <button
              type="button"
              onClick={handleFetchLogo}
              disabled={isFetchingLogo || !formData.name.trim()}
              className="px-3 py-1.5 text-xs font-medium text-primary-700 bg-primary-50 rounded-md hover:bg-primary-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
            >
              {isFetchingLogo ? (
                <>
                  <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Fetching...
                </>
              ) : (
                'Fetch from Clearbit'
              )}
            </button>
            {logoError && <p className="text-red-600 text-xs">{logoError}</p>}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value as ClientCategory })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="featured"
          checked={formData.featured}
          onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
          className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
        />
        <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
          Featured client (shows on homepage)
        </label>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
        >
          {client ? 'Update' : 'Add'} Client
        </button>
      </div>
    </form>
  );
}
