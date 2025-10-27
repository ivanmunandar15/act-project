'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MENU_ITEMS } from '@/data/menu';

const Sidebar = ({ isOpen }) => {
  const pathname = usePathname();

  return (
    <aside className={`${isOpen ? 'w-64' : 'w-0'} bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden`}>
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-blue-600">Lab Dashboard</h2>
        <p className="text-sm text-gray-500">Digital Laboratory</p>
      </div>
      <nav className="p-4 space-y-2">
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
        <div className="pt-4 mt-4 border-t border-gray-200">
          <div className="px-4 py-3 text-sm text-gray-500 italic">
            <p className="font-medium text-gray-700 mb-1">Fitur Mendatang:</p>
            <p>• Lembar Pengujian IEC 62368</p>
            <p>• Scan Peminjaman</p>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;