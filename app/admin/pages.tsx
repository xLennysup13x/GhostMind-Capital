'use client';
import { useState } from 'react';
import AdminUpload from '@/components/AdminUpload';

export default function Admin() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Ghostmind Admin</h1>
      <AdminUpload />
    </div>
  );
}