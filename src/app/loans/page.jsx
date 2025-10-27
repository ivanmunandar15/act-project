'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import MainLayout from '@/components/layout/MainLayout';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/common/Table';
import StatusBadge from '@/components/common/StatusBadge';
import { INITIAL_LOANS } from '@/data/loans';

export default function LoansPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Data Peminjaman</h1>
          <p className="text-gray-600 mt-1">Kelola peminjaman alat laboratorium</p>
        </div>

        <Card className="shadow-sm">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Nama Peminjam</TableHead>
                  <TableHead>Nama Alat</TableHead>
                  <TableHead>Tanggal Pinjam</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {INITIAL_LOANS.map((loan) => (
                  <TableRow key={loan.id}>
                    <TableCell className="font-medium">{loan.id}</TableCell>
                    <TableCell>{loan.borrower}</TableCell>
                    <TableCell>{loan.tool}</TableCell>
                    <TableCell>{loan.date}</TableCell>
                    <TableCell><StatusBadge status={loan.status} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}