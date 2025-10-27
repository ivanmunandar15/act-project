'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Thermometer, Droplets } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import StatCard from '@/components/common/StatCard';
import StatusBadge from '@/components/common/StatusBadge';
import { INITIAL_ASSETS } from '@/data/assets';
import { INITIAL_LOANS } from '@/data/loans';
import { MONITORING_DATA } from '@/data/monitoring';
import { calculateAverage, getRoomStatus, formatDateTime } from '@/utils/helpers';

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCurrentTime(new Date());
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const allMonitoringData = Object.values(MONITORING_DATA).flat();
  const totalAssets = INITIAL_ASSETS.length;
  const borrowedAssets = INITIAL_ASSETS.filter(a => a.status === "Dipinjam").length;
  const avgTemp = calculateAverage(allMonitoringData, 'temperature');
  const avgHumidity = calculateAverage(allMonitoringData, 'humidity');

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            {isMounted && currentTime ? (
              <p className="text-gray-600 mt-1 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDateTime(currentTime)}
              </p>
            ) : (
              <p className="text-gray-600 mt-1 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Memuat waktu...
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Aset" value={totalAssets} description="Total alat laboratorium" />
          <StatCard title="Alat Dipinjam" value={borrowedAssets} description="Sedang dipinjam" />
          <StatCard title="Suhu Rata-Rata" value={`${avgTemp}°C`} description="Semua laboratorium" />
          <StatCard title="Kelembapan Rata-Rata" value={`${avgHumidity}%`} description="Semua laboratorium" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Loans Card */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Peminjaman Terbaru</CardTitle>
              <CardDescription>Daftar peminjaman alat laboratorium</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {INITIAL_LOANS.slice(0, 3).map(loan => (
                  <div key={loan.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{loan.tool}</p>
                      <p className="text-sm text-gray-500">{loan.borrower} • {loan.date}</p>
                    </div>
                    <StatusBadge status={loan.status} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* All Rooms Status Card */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Status Semua Ruangan</CardTitle>
              <CardDescription>Kondisi suhu dan kelembapan per laboratorium</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(MONITORING_DATA).map(([room, data]) => {
                  const latestData = data[data.length - 1];
                  const roomStatus = getRoomStatus(data);
                  return (
                    <div key={room} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{room}</h3>
                        <Badge className={roomStatus.color}>{roomStatus.status}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Thermometer className="w-4 h-4 text-blue-600" />
                          <span className="text-gray-600">Suhu:</span>
                          <span className="font-medium text-gray-900">{latestData.temperature}°C</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Droplets className="w-4 h-4 text-blue-600" />
                          <span className="text-gray-600">Kelembapan:</span>
                          <span className="font-medium text-gray-900">{latestData.humidity}%</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}