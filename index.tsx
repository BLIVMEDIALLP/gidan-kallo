import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { 
  Search, Menu, X, Bell, User, Star, Clock, 
  MapPin, Calendar, ChevronRight, Play, ShoppingBag, 
  Plus, Minus, Trash2, CheckCircle2, CreditCard,
  Film, Map as MapIcon, Gamepad2, Utensils,
  History, Settings, Heart, MessageSquare, Users,
  Info, Shield, Phone, Mail, Instagram, Twitter, Facebook
} from "lucide-react";

// ── 1. DATA ──
const LOGO_URL = "https://i.postimg.cc/d0pZcWFK/Whats-App-Image-2026-02-20-at-11-20-53-PM.jpg";

const movies = [
  { id:1, title:"Taqdeer", sub:"Divine Decree", genre:"Drama", duration:"2h 10m", lang:"Hausa / English", rating:4.7, badge:"FEATURED", badgeColor:"#a855f7", gradient:"linear-gradient(135deg,#1a0533,#4a0080,#6b00cc)", posterLetter:"T", showtimes:[{time:"14:00",type:"Standard"},{time:"17:30",type:"VIP"},{time:"20:00",type:"Standard"}], price:2000 },
  { id:2, title:"Hakeem", sub:"Seeking Justice", genre:"Action", duration:"1h 58m", lang:"English", rating:4.6, badge:"BLOCKBUSTER", badgeColor:"#f97316", gradient:"linear-gradient(135deg,#0f0c29,#302b63,#1a1a4e)", posterLetter:"H", showtimes:[{time:"15:30",type:"IMAX"},{time:"18:00",type:"Standard"}], price:2000 }
];

const snackItems = [
  { id:"sp", name:"Popcorn", desc:"Large Salted", price:2500, icon:"🍿" },
  { id:"bb", name:"Beef Burger", desc:"Double Cheese", price:4500, icon:"🍔" },
  { id:"sl", name:"Slushie", desc:"Blue Raspberry", price:1500, icon:"🥤" }
];

// ── 2. LOGO COMPONENT ──
function GKLogo({ size = 36 }) {
  return (
    <div style={{width:size,height:size,borderRadius:size*0.22,overflow:"hidden",background:"white",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <img src={LOGO_URL} style={{width:"90%",height:"90%",objectFit:"contain"}} alt="GK" />
    </div>
  );
}

// ── 3. MAIN APP ──
export default function App() {
  const [page, setPage] = useState("home");

  const renderContent = () => {
    // THIS PART HANDLES THE PAGE SWITCHING
    if (page === "home") {
      return (
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Now Showing</h2>
            <div className="text-yellow-500 text-sm font-semibold flex items-center gap-1">View All <ChevronRight size={16} /></div>
          </div>
          <div className="space-y-6">
            {movies.map(movie => (
              <div key={movie.id} className="bg-[#111] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                <div className="h-48 relative flex items-center justify-center" style={{ background: movie.gradient }}>
                  <span className="text-7xl font-black text-white/20">{movie.posterLetter}</span>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider" style={{ background: movie.badgeColor }}>{movie.badge}</span></div>
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg flex items-center gap-1"><Star size={12} className="text-yellow-500 fill-yellow-500" /><span>{movie.rating}</span></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">{movie.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{movie.genre} • {movie.duration}</p>
                  <button className="w-full bg-yellow-500 text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95"><Play size={18} fill="black" /> Book Tickets</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (page === "turf") {
      return (
        <div className="p-10 text-center animate-in fade-in duration-500">
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapIcon size={48} className="text-green-500" />
          </div>
          <h2 className="text-3xl font-bold mb-3">Turf Booking</h2>
          <p className="text-gray-400 mb-8">Reserve the Gidan Kallo Football Turf for your next match.</p>
          <button className="bg-green-500 text-black font-black px-10 py-4 rounded-2xl shadow-lg shadow-green-500/20">Check Slots</button>
        </div>
      );
    }

    if (page === "food") {
      return (
        <div className="p-4 animate-in fade-in duration-500">
          <h2 className="text-2xl font-bold mb-6">Cinema Snacks</h2>
          <div className="grid gap-4">
            {snackItems.map(item => (
              <div key={item.id} className="bg-[#111] p-5 rounded-2xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-4xl bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center">{item.icon}</div>
                  <div><h4 className="font-bold text-lg">{item.name}</h4><p className="text-sm text-yellow-500 font-bold">₦{item.price}</p></div>
                </div>
                <button className="bg-white/10 p-3 rounded-xl hover:bg-yellow-500 transition-colors"><Plus size={24} /></button>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="p-20 text-center">
        <Gamepad2 size={64} className="mx-auto text-blue-500 mb-4" />
        <h2 className="text-2xl font-bold">Games Zone</h2>
        <p className="text-gray-400 mt-2">VR & Console bookings coming soon.</p>
        <button onClick={() => setPage("home")} className="text-yellow-500 mt-6 font-bold">Back to Movies</button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans pb-28">
      {/* TOP HEADER */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3" onClick={() => setPage("home")}>
          <GKLogo size={38} />
          <span className="text-2xl font-black tracking-tighter">Gidan Kallo</span>
        </div>
        <div className="bg-white/5 p-2 rounded-full"><Menu size={24} /></div>
      </nav>

      {/* DYNAMIC CONTENT */}
      {renderContent()}

      {/* BOTTOM NAV BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-2xl border-t border-white/10 px-8 py-5 flex justify-between items-center z-50">
        <button onClick={() => setPage("home")} className={`flex flex-col items-center gap-1 transition-all ${page === "home" ? "text-yellow-500 scale-110" : "text-gray-500"}`}>
          <Film size={24} /><span className="text-[10px] font-black uppercase tracking-widest">Cinema</span>
        </button>
        <button onClick={() => setPage("turf")} className={`flex flex-col items-center gap-1 transition-all ${page === "turf" ? "text-yellow-500 scale-110" : "text-gray-500"}`}>
          <MapIcon size={24} /><span className="text-[10px] font-black uppercase tracking-widest">Turf</span>
        </button>
        <button onClick={() => setPage("games")} className={`flex flex-col items-center gap-1 transition-all ${page === "games" ? "text-yellow-500 scale-110" : "text-gray-500"}`}>
          <Gamepad2 size={24} /><span className="text-[10px] font-black uppercase tracking-widest">Games</span>
        </button>
        <button onClick={() => setPage("food")} className={`flex flex-col items-center gap-1 transition-all ${page === "food" ? "text-yellow-500 scale-110" : "text-gray-500"}`}>
          <Utensils size={24} /><span className="text-[10px] font-black uppercase tracking-widest">Food</span>
        </button>
      </div>
    </div>
  );
}

// ── 4. FINAL RENDER GLUE ──
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
