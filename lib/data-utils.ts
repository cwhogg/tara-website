import { Client, PressItem, Service } from './types';

const CLIENTS_KEY = 'tara_clients';
const PRESS_KEY = 'tara_press';
const SERVICES_KEY = 'tara_services';

// Helper to check if we're in browser
const isBrowser = typeof window !== 'undefined';

// Generate unique ID
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Clients
export function getClients(): Client[] {
  if (!isBrowser) return [];
  const data = localStorage.getItem(CLIENTS_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveClients(clients: Client[]): void {
  if (!isBrowser) return;
  localStorage.setItem(CLIENTS_KEY, JSON.stringify(clients));
}

export function addClient(client: Omit<Client, 'id'>): Client {
  const clients = getClients();
  const newClient = { ...client, id: generateId() };
  clients.push(newClient);
  saveClients(clients);
  return newClient;
}

export function updateClient(id: string, updates: Partial<Client>): Client | null {
  const clients = getClients();
  const index = clients.findIndex(c => c.id === id);
  if (index === -1) return null;
  clients[index] = { ...clients[index], ...updates };
  saveClients(clients);
  return clients[index];
}

export function deleteClient(id: string): boolean {
  const clients = getClients();
  const filtered = clients.filter(c => c.id !== id);
  if (filtered.length === clients.length) return false;
  saveClients(filtered);
  return true;
}

// Press Items
export function getPressItems(): PressItem[] {
  if (!isBrowser) return [];
  const data = localStorage.getItem(PRESS_KEY);
  return data ? JSON.parse(data) : [];
}

export function savePressItems(items: PressItem[]): void {
  if (!isBrowser) return;
  localStorage.setItem(PRESS_KEY, JSON.stringify(items));
}

export function addPressItem(item: Omit<PressItem, 'id'>): PressItem {
  const items = getPressItems();
  const newItem = { ...item, id: generateId() };
  items.push(newItem);
  savePressItems(items);
  return newItem;
}

export function updatePressItem(id: string, updates: Partial<PressItem>): PressItem | null {
  const items = getPressItems();
  const index = items.findIndex(p => p.id === id);
  if (index === -1) return null;
  items[index] = { ...items[index], ...updates };
  savePressItems(items);
  return items[index];
}

export function deletePressItem(id: string): boolean {
  const items = getPressItems();
  const filtered = items.filter(p => p.id !== id);
  if (filtered.length === items.length) return false;
  savePressItems(filtered);
  return true;
}

// Services (typically static, but editable via admin)
export function getServices(): Service[] {
  if (!isBrowser) return [];
  const data = localStorage.getItem(SERVICES_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveServices(services: Service[]): void {
  if (!isBrowser) return;
  localStorage.setItem(SERVICES_KEY, JSON.stringify(services));
}

// Bulk operations
export function importClients(clients: Client[]): void {
  saveClients(clients);
}

export function importPressItems(items: PressItem[]): void {
  savePressItems(items);
}

export function importServices(services: Service[]): void {
  saveServices(services);
}

export function exportAllData(): { clients: Client[]; press: PressItem[]; services: Service[] } {
  return {
    clients: getClients(),
    press: getPressItems(),
    services: getServices(),
  };
}

// Initialize from JSON (call on app load)
export async function initializeFromJson(): Promise<void> {
  if (!isBrowser) return;

  // Only initialize if localStorage is empty
  if (!localStorage.getItem(CLIENTS_KEY)) {
    try {
      const res = await fetch('/data/clients.json');
      if (res.ok) {
        const clients = await res.json();
        saveClients(clients);
      }
    } catch (e) {
      console.log('No clients.json found, starting fresh');
    }
  }

  if (!localStorage.getItem(PRESS_KEY)) {
    try {
      const res = await fetch('/data/press.json');
      if (res.ok) {
        const press = await res.json();
        savePressItems(press);
      }
    } catch (e) {
      console.log('No press.json found, starting fresh');
    }
  }

  if (!localStorage.getItem(SERVICES_KEY)) {
    try {
      const res = await fetch('/data/services.json');
      if (res.ok) {
        const services = await res.json();
        saveServices(services);
      }
    } catch (e) {
      console.log('No services.json found, starting fresh');
    }
  }
}
