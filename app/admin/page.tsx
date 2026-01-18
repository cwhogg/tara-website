'use client';

import { useState, useEffect } from 'react';
import { Client, PressItem } from '@/lib/types';
import ClientForm from '@/components/admin/ClientForm';
import PressForm from '@/components/admin/PressForm';
import DataTable from '@/components/admin/DataTable';
import BulkUpload from '@/components/admin/BulkUpload';

const ADMIN_PASSWORD = 'tarawagner2024';
const AUTH_KEY = 'tara_admin_auth';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'clients' | 'press'>('clients');
  const [clients, setClients] = useState<Client[]>([]);
  const [pressItems, setPressItems] = useState<PressItem[]>([]);
  const [showClientForm, setShowClientForm] = useState(false);
  const [showPressForm, setShowPressForm] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | undefined>();
  const [editingPress, setEditingPress] = useState<PressItem | undefined>();

  // Check authentication on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = sessionStorage.getItem(AUTH_KEY);
      if (auth === 'true') {
        setIsAuthenticated(true);
      }
    }
  }, []);

  // Load data when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const loadData = async () => {
    // Load from localStorage first, fall back to JSON files
    const storedClients = localStorage.getItem('tara_clients');
    const storedPress = localStorage.getItem('tara_press');

    if (storedClients) {
      setClients(JSON.parse(storedClients));
    } else {
      try {
        const res = await fetch('/data/clients.json');
        if (res.ok) {
          const data = await res.json();
          setClients(data);
          localStorage.setItem('tara_clients', JSON.stringify(data));
        }
      } catch (e) {
        console.log('Could not load clients');
      }
    }

    if (storedPress) {
      setPressItems(JSON.parse(storedPress));
    } else {
      try {
        const res = await fetch('/data/press.json');
        if (res.ok) {
          const data = await res.json();
          setPressItems(data);
          localStorage.setItem('tara_press', JSON.stringify(data));
        }
      } catch (e) {
        console.log('Could not load press');
      }
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_KEY, 'true');
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_KEY);
  };

  // Client operations
  const saveClient = (client: Client) => {
    const index = clients.findIndex(c => c.id === client.id);
    let newClients;
    if (index >= 0) {
      newClients = [...clients];
      newClients[index] = client;
    } else {
      newClients = [...clients, client];
    }
    setClients(newClients);
    localStorage.setItem('tara_clients', JSON.stringify(newClients));
    setShowClientForm(false);
    setEditingClient(undefined);
  };

  const deleteClient = (id: string) => {
    const newClients = clients.filter(c => c.id !== id);
    setClients(newClients);
    localStorage.setItem('tara_clients', JSON.stringify(newClients));
  };

  // Press operations
  const savePressItem = (item: PressItem) => {
    const index = pressItems.findIndex(p => p.id === item.id);
    let newItems;
    if (index >= 0) {
      newItems = [...pressItems];
      newItems[index] = item;
    } else {
      newItems = [...pressItems, item];
    }
    setPressItems(newItems);
    localStorage.setItem('tara_press', JSON.stringify(newItems));
    setShowPressForm(false);
    setEditingPress(undefined);
  };

  const deletePressItem = (id: string) => {
    const newItems = pressItems.filter(p => p.id !== id);
    setPressItems(newItems);
    localStorage.setItem('tara_press', JSON.stringify(newItems));
  };

  // Bulk operations
  const handleBulkUploadClients = (data: unknown[]) => {
    const newClients = data as Client[];
    setClients(newClients);
    localStorage.setItem('tara_clients', JSON.stringify(newClients));
  };

  const handleBulkUploadPress = (data: unknown[]) => {
    const newItems = data as PressItem[];
    setPressItems(newItems);
    localStorage.setItem('tara_press', JSON.stringify(newItems));
  };

  const exportData = () => {
    const data = activeTab === 'clients' ? clients : pressItems;
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeTab}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Login form
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full mx-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter admin password"
              />
            </div>
            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    );
  }

  const clientColumns = [
    { key: 'name', label: 'Name' },
    { key: 'category', label: 'Category' },
    {
      key: 'featured',
      label: 'Featured',
      render: (value: unknown) => (value ? 'Yes' : 'No'),
    },
  ];

  const pressColumns = [
    { key: 'title', label: 'Title' },
    { key: 'publication', label: 'Publication' },
    { key: 'category', label: 'Category' },
    { key: 'date', label: 'Date' },
  ];

  return (
    <main className="py-8">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('clients')}
              className={`pb-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'clients'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Clients ({clients.length})
            </button>
            <button
              onClick={() => setActiveTab('press')}
              className={`pb-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'press'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Press ({pressItems.length})
            </button>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => {
              if (activeTab === 'clients') {
                setEditingClient(undefined);
                setShowClientForm(true);
              } else {
                setEditingPress(undefined);
                setShowPressForm(true);
              }
            }}
            className="btn-primary text-sm py-2 px-4"
          >
            Add {activeTab === 'clients' ? 'Client' : 'Press Item'}
          </button>
          <button
            onClick={exportData}
            className="btn-secondary text-sm py-2 px-4"
          >
            Export JSON
          </button>
        </div>

        {/* Bulk Upload */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Bulk Upload</h3>
          <BulkUpload
            dataType={activeTab}
            onUpload={activeTab === 'clients' ? handleBulkUploadClients : handleBulkUploadPress}
          />
        </div>

        {/* Forms */}
        {showClientForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4">
                {editingClient ? 'Edit' : 'Add'} Client
              </h2>
              <ClientForm
                client={editingClient}
                onSave={saveClient}
                onCancel={() => {
                  setShowClientForm(false);
                  setEditingClient(undefined);
                }}
              />
            </div>
          </div>
        )}

        {showPressForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4">
                {editingPress ? 'Edit' : 'Add'} Press Item
              </h2>
              <PressForm
                item={editingPress}
                onSave={savePressItem}
                onCancel={() => {
                  setShowPressForm(false);
                  setEditingPress(undefined);
                }}
              />
            </div>
          </div>
        )}

        {/* Data Tables */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {activeTab === 'clients' ? (
            <DataTable
              data={clients as unknown as Record<string, unknown>[]}
              columns={clientColumns}
              onEdit={(item) => {
                setEditingClient(item as unknown as Client);
                setShowClientForm(true);
              }}
              onDelete={deleteClient}
            />
          ) : (
            <DataTable
              data={pressItems as unknown as Record<string, unknown>[]}
              columns={pressColumns}
              onEdit={(item) => {
                setEditingPress(item as unknown as PressItem);
                setShowPressForm(true);
              }}
              onDelete={deletePressItem}
            />
          )}
        </div>
      </div>
    </main>
  );
}
