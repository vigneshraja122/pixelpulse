'use client';
import { useState } from 'react';
import LandingPage from '@/app/components/landingpage';
import LivePrices from '@/app/components/liveprices';


export default function Page() {
  
  return (
    <main className="bg-white min-h-screen">
        <LandingPage  />
    </main>
  );
}