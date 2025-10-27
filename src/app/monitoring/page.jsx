'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MainLayout from '@/components/layout/MainLayout';
import { MONITORING_DATA } from '@/data/monitoring';
import { getRoomStatus } from '@/utils/helpers';

export default function MonitoringPage() {
  const [selectedRoom, setSelectedRoom] = useState('Lab 1');
  const currentData = MONITORING_DATA[selectedRoom];
  const roomStatus = getRoomStatus(currentData);

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Monitoring Lingkungan</h1>
          <p className="text-gray-600 mt-1">Pantau kondisi suhu dan kelembapan laboratorium</p>
        </div>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Pilih Ruangan</CardTitle>
            <CardDescription>Lihat detail monitoring per laboratorium</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedRoom} onValueChange={setSelectedRoom} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="Lab 1">Lab 1</TabsTrigger>
                <TabsTrigger value="Lab 2">Lab 2</TabsTrigger>
                <TabsTrigger value="Lab 3">Lab 3</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Temperature Chart */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Grafik Suhu - {selectedRoom}</CardTitle>
              <CardDescription>Monitoring suhu ruang laboratorium hari ini</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={currentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="timestamp" stroke="#6b7280" />
                  <YAxis domain={[20, 35]} stroke="#6b7280" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="temperature" stroke="#3b82f6" strokeWidth={2} name="Suhu (°C)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Humidity Chart */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Grafik Kelembapan - {selectedRoom}</CardTitle>
              <CardDescription>Monitoring kelembapan ruang laboratorium hari ini</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={currentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="timestamp" stroke="#6b7280" />
                  <YAxis domain={[40, 65]} stroke="#6b7280" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="humidity" stroke="#10b981" strokeWidth={2} name="Kelembapan (%)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Room Status Card */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Status Ruangan - {selectedRoom}</CardTitle>
            <CardDescription>Kondisi terkini laboratorium</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Suhu Minimum</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.min(...currentData.map(d => d.temperature))}°C
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Suhu Maksimum</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.max(...currentData.map(d => d.temperature))}°C
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg flex flex-col justify-center">
                <p className="text-sm text-gray-600 mb-2">Status Kondisi</p>
                <Badge className={`${roomStatus.color} w-fit`}>{roomStatus.status}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* All Rooms Summary */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Ringkasan Semua Ruangan</CardTitle>
            <CardDescription>Status terkini semua laboratorium</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(MONITORING_DATA).map(([room, data]) => {
                const latestData = data[data.length - 1];
                const status = getRoomStatus(data);
                return (
                  <div key={room} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{room}</h3>
                      <Badge className={status.color}>{status.status}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Suhu:</span>
                        <span className="font-semibold text-gray-900">{latestData.temperature}°C</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Kelembapan:</span>
                        <span className="font-semibold text-gray-900">{latestData.humidity}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}