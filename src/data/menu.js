import { LayoutDashboard, Package, ClipboardList, Thermometer } from 'lucide-react';

export const MENU_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { id: 'inventory', label: 'Inventaris', icon: Package, href: '/inventory' },
  { id: 'loans', label: 'Peminjaman', icon: ClipboardList, href: '/loans' },
  { id: 'monitoring', label: 'Monitoring', icon: Thermometer, href: '/monitoring' },
];