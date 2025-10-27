'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/common/Table';
import { INITIAL_ASSETS } from '@/data/assets';

export default function InventoryPage() {
  const [assets, setAssets] = useState(INITIAL_ASSETS);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    condition: 'Baik',
    location: '',
    status: 'Tersedia'
  });

  const handleSubmit = () => {
    if (formData.name && formData.category && formData.location) {
      const newAsset = {
        id: assets.length + 1,
        ...formData
      };
      setAssets([...assets, newAsset]);
      setFormData({ name: '', category: '', condition: 'Baik', location: '', status: 'Tersedia' });
      setIsDialogOpen(false);
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Inventaris Alat</h1>
            <p className="text-gray-600 mt-1">Manajemen aset dan alat laboratorium</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Tambah Aset
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Tambah Aset Baru</DialogTitle>
                <DialogDescription>Masukkan detail aset laboratorium yang ingin ditambahkan</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nama Alat</label>
                  <Input 
                    placeholder="Contoh: Multimeter Fluke 117"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Kategori</label>
                  <Input 
                    placeholder="Contoh: Electrical"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Lokasi</label>
                  <Input 
                    placeholder="Contoh: Lab 1"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Batal</Button>
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSubmit}>Simpan</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="shadow-sm">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Nama Alat</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead>Kondisi</TableHead>
                  <TableHead>Lokasi</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assets.map((asset) => (
                  <TableRow key={asset.id}>
                    <TableCell className="font-medium">{asset.id}</TableCell>
                    <TableCell>{asset.name}</TableCell>
                    <TableCell>{asset.category}</TableCell>
                    <TableCell>{asset.condition}</TableCell>
                    <TableCell>{asset.location}</TableCell>
                    <TableCell>
                      <Badge variant={asset.status === "Tersedia" ? "default" : "secondary"}>
                        {asset.status}
                      </Badge>
                    </TableCell>
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