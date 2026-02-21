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

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans pb-24">
      {/* HEADER */}
      <header className="p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl border-2 border-yellow-500 overflow-hidden bg-white flex items-center justify-center">
            <img src={LOGO_URL} className="w-10 h-10 object-contain" alt="Logo" />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Welcome Back</p>
            <h1 className="text-xl font-black text-yellow-500">Gidan Kallo</h1>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold">HA</div>
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-yellow-500"><Bell size={20} fill="currentColor" /></div>
        </div>
      </header>

      {/* RENDER PAGES BASED ON NAVIGATION */}
      {page === "home" ? (
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
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-500"><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} className="opacity-30"/></div>
                <span className="text-xs text-gray-300 font-medium">• 2h 10m • Drama</span>
              </div>
              
              <button className="w-full bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-transform">
                <Ticket size={20} fill="black" /> Get Tickets
              </button>
            </div>
          </div>

          {/* QUICK ACCESS */}
          <div className="px-5 mb-8">
            <h3 className="text-lg font-black mb-4">Quick Access</h3>
            <div className="grid grid-cols-4 gap-3">
              {[
                { id: 'cinema', name: 'Cinema', icon: <Film /> },
                { id: 'turf', name: 'Turf', icon: <MapIcon /> },
                { id: 'games', name: 'Games', icon: <Gamepad2 /> },
                { id: 'food', name: 'Food', icon: <Utensils /> }
              ].map(item => (
                <button key={item.id} onClick={() => setPage(item.id)} className="flex flex-col items-center gap-2">
                  <div className="w-full aspect-square bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center text-gray-400 active:bg-yellow-500 active:text-black transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* THE ARENA */}
          <div className="px-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black">The Arena</h3>
              <button className="text-green-500 text-[10px] font-black uppercase tracking-widest">Book Pitch</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-[#111] rounded-[24px] overflow-hidden border border-white/5">
                  <div className="h-28 bg-gradient-to-br from-green-900 to-green-600 p-4 relative">
                    <MapIcon className="absolute right-2 bottom-2 text-white/10" size={60} />
                    <div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded-full inline-flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-[8px] font-black uppercase">Available Now</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm">5-a-Side Turf A</h4>
                  </div>
               </div>
               <div className="bg-[#111] rounded-[24px] overflow-hidden border border-white/5 opacity-60">
                  <div className="h-28 bg-gradient-to-br from-orange-900 to-orange-600 p-4">
                    <div className="bg-orange-500 px-2 py-1 rounded-md inline-block text-[8px] font-black uppercase">Tournament</div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm">Weekend League</h4>
                  </div>
               </div>
            </div>
          </div>
        </>
      ) : (
        <div className="p-10 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-tighter">{page} Section</h2>
          <p className="text-gray-500 mt-2">Updating live content...</p>
          <button onClick={() => setPage('home')} className="mt-10 text-yellow-500 font-black underline">Back Home</button>
        </div>
      )}

      {/* BOTTOM NAVIGATION */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-2xl border-t border-white/5 px-6 py-4 flex justify-between items-center z-50">
        <button onClick={() => setPage('home')} className={`flex flex-col items-center gap-1 transition-all ${page === 'home' ? 'text-yellow-500 scale-110' : 'text-gray-600'}`}>
          <Home size={22} fill={page === 'home' ? 'currentColor' : 'none'} />
          <span className="text-[9px] font-black uppercase">Home</span>
        </button>
        <button onClick={() => setPage('cinema')} className={`flex flex-col items-center gap-1 transition-all ${page === 'cinema' ? 'text-yellow-500 scale-110' : 'text-gray-600'}`}>
          <Film size={22} /><span className="text-[9px] font-black uppercase">Cinema</span>
        </button>
        <button onClick={() => setPage('turf')} className={`flex flex-col items-center gap-1 transition-all ${page === 'turf' ? 'text-yellow-500 scale-110' : 'text-gray-600'}`}>
          <MapIcon size={22} /><span className="text-[9px] font-black uppercase">Turf</span>
        </button>
        <button onClick={() => setPage('games')} className={`flex flex-col items-center gap-1 transition-all ${page === 'games' ? 'text-yellow-500 scale-110' : 'text-gray-600'}`}>
          <Gamepad2 size={22} /><span className="text-[9px] font-black uppercase">Games</span>
        </button>
        <button onClick={() => setPage('food')} className={`flex flex-col items-center gap-1 transition-all ${page === 'food' ? 'text-yellow-500 scale-110' : 'text-gray-600'}`}>
          <Utensils size={22} /><span className="text-[9px] font-black uppercase">Food</span>
        </button>
      </div>
    </div>
  );
}

// --- 3. RENDER LOGIC ---
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
