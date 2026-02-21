import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { 
  Bell, Star, ChevronRight, Play, Film, Search, 
  Map as MapIcon, Gamepad2, Utensils, Home, Ticket, 
  Menu, Plus, Clock, X, Heart, MessageSquare, 
  ShoppingBag, CreditCard, Trash2, CheckCircle2 
} from "lucide-react";

// --- PASTE YOUR LOGO & DATA HERE ---
const LOGO_URL = "https://i.postimg.cc/d0pZcWFK/Whats-App-Image-2026-02-20-at-11-20-53-PM.jpg";

// ... (Keep all your 'const movies', 'const foodMenu', etc. from your original code)

// --- MAIN APP ENGINE ---
export default function App() {
  const [page, setPage] = useState("home");
  
  // States for your booking logic
  const [foodCart, setFoodCart] = useState([]);
  const [turfBooking, setTurfBooking] = useState(null);
  const [turfCustomer, setTurfCustomer] = useState(null);
  const [gamesBooking, setGamesBooking] = useState(null);

  // THIS IS THE STEERING WHEEL - It tells the app what to show
  const renderCurrentPage = () => {
    switch(page) {
      case "home":
        return <HomeDashboard setPage={setPage} />;
      case "cinema":
        return <div className="p-10 text-center">Cinema Logic Active</div>; // Replace with your Cinema function
      case "turf":
        return <div className="p-10 text-center">Turf Logic Active</div>; // Replace with your Turf function
      case "food":
        return <div className="p-10 text-center">Food Menu Active</div>; // Replace with your Food function
      default:
        return <HomeDashboard setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans pb-24">
      {/* GLOBAL HEADER */}
      <header className="p-5 flex items-center justify-between sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-xl z-50">
        <div className="flex items-center gap-3" onClick={() => setPage("home")}>
          <img src={LOGO_URL} className="w-10 h-10 rounded-xl bg-white object-contain" />
          <h1 className="text-xl font-black text-yellow-500">Gidan Kallo</h1>
        </div>
      </header>

      {/* RENDER THE ACTIVE PAGE */}
      <main>{renderCurrentPage()}</main>

      {/* GLOBAL NAVIGATION BAR */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-white/5 px-8 py-5 flex justify-between items-center z-50">
        <button onClick={() => setPage("home")} className={page === "home" ? "text-yellow-500" : "text-gray-600"}><Home /></button>
        <button onClick={() => setPage("cinema")} className={page === "cinema" ? "text-yellow-500" : "text-gray-600"}><Film /></button>
        <button onClick={() => setPage("turf")} className={page === "turf" ? "text-yellow-500" : "text-gray-600"}><MapIcon /></button>
        <button onClick={() => setPage("food")} className={page === "food" ? "text-yellow-500" : "text-gray-600"}><Utensils /></button>
      </nav>
    </div>
  );
}

// --- DASHBOARD COMPONENT ---
function HomeDashboard({ setPage }) {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="px-5 mb-8">
        <div className="relative h-64 rounded-[32px] overflow-hidden bg-gradient-to-br from-[#1a0533] to-[#6b00cc] p-6 flex flex-col justify-end border border-white/10 shadow-2xl">
          <h2 className="text-4xl font-black mb-1">Taqdeer</h2>
          <button onClick={() => setPage('cinema')} className="w-full bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2">
            <Ticket size={20} /> Get Tickets
          </button>
        </div>
      </div>
      
      <div className="px-5 grid grid-cols-4 gap-3">
        {['cinema', 'turf', 'games', 'food'].map(item => (
          <button key={item} onClick={() => setPage(item)} className="flex flex-col items-center gap-2">
            <div className="w-full aspect-square bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center text-gray-400 capitalize">
              {item === 'cinema' ? <Film /> : item === 'turf' ? <MapIcon /> : item === 'games' ? <Gamepad2 /> : <Utensils />}
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase">{item}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// --- CRITICAL: THE START COMMAND ---
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
