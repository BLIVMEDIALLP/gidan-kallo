import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { 
  Bell, Star, ChevronRight, Play, Film, 
  Map as MapIcon, Gamepad2, Utensils, Home, Ticket, Menu
} from "lucide-react";

// --- 1. CONFIGURATION ---
const LOGO_URL = "https://i.postimg.cc/d0pZcWFK/Whats-App-Image-2026-02-20-at-11-20-53-PM.jpg";

// --- 2. MAIN APP ---
export default function App() {
  const [page, setPage] = useState("home");

  // --- THIS FUNCTION PICKS WHAT TO SHOW ON SCREEN ---
  const renderPageContent = () => {
    switch(page) {
      case "cinema":
        return (
          <div className="px-5 animate-in fade-in duration-500">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter">Current Movies</h2>
            {/* You can paste your Movie Cards code here later */}
            <div className="bg-[#111] p-10 rounded-[32px] text-center border border-white/5">
               <Film size={48} className="mx-auto mb-4 text-purple-500" />
               <p className="text-gray-400">Loading movie schedules...</p>
            </div>
          </div>
        );
      case "turf":
        return (
          <div className="px-5 animate-in fade-in duration-500">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter">Arena Booking</h2>
            <div className="bg-green-500/10 p-8 rounded-[32px] border border-green-500/20 text-center">
               <MapIcon size={48} className="mx-auto mb-4 text-green-500" />
               <h3 className="text-xl font-bold mb-2">Book the Turf</h3>
               <button className="bg-green-500 text-black font-black px-6 py-3 rounded-2xl">Check Slots</button>
            </div>
          </div>
        );
      case "food":
        return (
          <div className="px-5 animate-in fade-in duration-500">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter">Cinema Snacks</h2>
            <div className="grid gap-4">
              {['Popcorn', 'Slushie', 'Burger'].map(item => (
                <div key={item} className="bg-[#111] p-5 rounded-2xl flex justify-between items-center border border-white/5">
                  <span className="font-bold">{item}</span>
                  <button className="bg-yellow-500 text-black p-2 rounded-lg"><Plus size={20}/></button>
                </div>
              ))}
            </div>
          </div>
        );
      default: // THIS IS THE "HOME" DASHBOARD
        return (
          <>
            {/* FEATURED MOVIE CARD */}
            <div className="px-5 mb-8">
              <div className="relative h-64 rounded-[32px] overflow-hidden bg-gradient-to-br from-[#1a0533] to-[#6b00cc] p-6 flex flex-col justify-end border border-white/10 shadow-2xl shadow-purple-900/20">
                <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 border border-white/10">
                   <div className="w-4 h-4 rounded-md bg-yellow-500 flex items-center justify-center text-[8px] font-black text-black">GK</div>
                   <span className="text-[10px] font-bold tracking-widest uppercase">Gidan Kallo</span>
                </div>
                <div className="absolute top-6 right-6 bg-purple-500/50 backdrop-blur-md px-4 py-1 rounded-lg text-[10px] font-black uppercase">Featured</div>
                <span className="absolute right-[-20px] top-10 text-[180px] font-black text-white/5 pointer-events-none">T</span>
                <h2 className="text-4xl font-black mb-1">Taqdeer</h2>
                <button className="w-full bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-transform">
                  <Ticket size={20} fill="black" /> Get Tickets
                </button>
              </div>
            </div>

            {/* QUICK ACCESS GRID */}
            <div className="px-5 mb-8">
              <h3 className="text-lg font-black mb-4 tracking-tight">Quick Access</h3>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { id: 'cinema', name: 'Cinema', icon: <Film /> },
                  { id: 'turf', name: 'Turf', icon: <MapIcon /> },
                  { id: 'games', name: 'Games', icon: <Gamepad2 /> },
                  { id: 'food', name: 'Food', icon: <Utensils /> }
                ].map(item => (
                  <button key={item.id} onClick={() => setPage(item.id)} className="flex flex-col items-center gap-2">
                    <div className="w-full aspect-square bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center text-gray-400">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold text-gray-500">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans pb-24">
      {/* HEADER (Same as before) */}
      <header className="p-5 flex items-center justify-between">
        <div className="flex items-center gap-3" onClick={() => setPage("home")}>
          <div className="w-12 h-12 rounded-xl border-2 border-yellow-500 overflow-hidden bg-white flex items-center justify-center">
            <img src={LOGO_URL} className="w-10 h-10 object-contain" alt="Logo" />
          </div>
          <h1 className="text-xl font-black text-yellow-500">Gidan Kallo</h1>
        </div>
      </header>

      {/* RENDER THE CONTENT BASED ON BUTTONS */}
      <main>
        {renderPageContent()}
      </main>

      {/* BOTTOM NAV (Same as before) */}
    </div>
  );
}

// --- 3. RENDER LOGIC ---
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
