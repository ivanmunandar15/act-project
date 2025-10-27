'use client';

import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ sidebarOpen, onToggleSidebar }) => (
  <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
    <button
      onClick={onToggleSidebar}
      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
    >
      {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
    </button>
    <div className="flex items-center gap-4">
      <div className="text-right">
        <p className="text-sm font-medium text-gray-900">Admin User</p>
        <p className="text-xs text-gray-500">Laboratorium Digital</p>
      </div>
      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
        A
      </div>
    </div>
  </header>
);

export default Header;