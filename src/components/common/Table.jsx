import React from 'react';

export const Table = ({ children, className = "" }) => (
  <div className={`w-full overflow-auto ${className}`}>
    <table className="w-full caption-bottom text-sm">
      {children}
    </table>
  </div>
);

export const TableHeader = ({ children }) => (
  <thead className="border-b bg-gray-50">{children}</thead>
);

export const TableBody = ({ children }) => (
  <tbody className="divide-y">{children}</tbody>
);

export const TableRow = ({ children, className = "" }) => (
  <tr className={`border-b transition-colors hover:bg-gray-50 ${className}`}>
    {children}
  </tr>
);

export const TableHead = ({ children, className = "" }) => (
  <th className={`h-12 px-4 text-left align-middle font-medium text-gray-700 ${className}`}>
    {children}
  </th>
);

export const TableCell = ({ children, className = "" }) => (
  <td className={`p-4 align-middle ${className}`}>{children}</td>
);