'use client';
import { useState } from 'react';
import LandingPage from '@/app/components/landingpage';
import LivePrices from '@/app/components/liveprices';


export default function Page() {
  const [showPrices, setShowPrices] = useState(false); 
  return (
    <main className="bg-white min-h-screen">
      {!showPrices ? (
        <LandingPage onFinish={() => setShowPrices(true)} />
      ) : (
        <LivePrices />
      )}
    </main>
  );
}