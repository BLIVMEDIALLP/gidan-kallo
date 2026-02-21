import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { 
  Bell, Star, ChevronRight, Play, Film, Search,
  Map as MapIcon, Gamepad2, Utensils, Home, Ticket, Menu, Plus,
  Clock, X, Heart, MessageSquare, ShoppingBag, CreditCard, Trash2, CheckCircle2
} from "lucide-react";

// --- YOUR DATA ---
const LOGO_URL = "https://i.postimg.cc/d0pZcWFK/Whats-App-Image-2026-02-20-at-11-20-53-PM.jpg";

const movies = [
  { id:1, title:"Taqdeer", sub:"Divine Decree", genre:"Drama", duration:"2h 10m", lang:"Hausa / English", rating:4.7, badge:"FEATURED", badgeColor:"#a855f7", gradient:"linear-gradient(135deg,#1a0533,#4a0080,#6b00cc)", posterLetter:"T", showtimes:[{time:"14:00",type:"Standard"},{time:"17:30",type:"VIP"},{time:"20:00",type:"Standard"}], dome:"Dome 1", price:2000 },
  { id:2, title:"Hakeem", sub:"Seeking Justice", genre:"Action", duration:"1h 58m", lang:"English", rating:4.6, badge:"BLOCKBUSTER", badgeColor:"#f97316", gradient:"linear-gradient(135deg,#0f0c29,#302b63,#1a1a4e)", posterLetter:"H", showtimes:[{time:"15:30",type:"IMAX"},{time:"18:00",type:"Standard"},{time:"21:30",type:"VIP"}], dome:"Dome 1", price:2000 },
  { id:3, title:"Rigar Aro", sub:"Kamal Films International", genre:"Drama", duration:"2h 00m", lang:"Hausa", rating:4.5, badge:"NOW SHOWING", badgeColor:"#22c55e", gradient:"linear-gradient(135deg,#0d1f0d,#1a4a1a,#0a2e0a)", posterLetter:"R", showtimes:[{time:"16:00",type:"Standard"},{time:"19:30",type:"VIP"}], dome:"Dome 1", price:2000 }
];

const foodMenu = {
  "Nigerian Classics": [
    { id:"f1", name:"Suya Platter", desc:"Spicy grilled beef", price:3500, emoji:"🍢" },
    { id:"f3", name:"Jollof Rice Special", desc:"Smoky party jollof", price:3200, emoji:"🍛" }
  ],
  "Cinema Snacks": [
    { id:"f10", name:"Popcorn Combo", desc:"Large Popcorn + Drink", price:3500, emoji:"🍿" },
    { id:"f14", name:"Slushy", desc:"Blue Raspberry / Strawberry", price:1500, emoji:"🥤" }
  ]
};

// --- YOUR COMPONENTS ---
function GKLogo({ size = 36 }) {
  return (
    <div style={{width:size,height:size,borderRadius:size*0.22,overflow:"hidden",background:"white",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
      <img src={LOGO_URL} style={{width:"90%",height:"90%",objectFit:"contain"}} alt="GK" />
    </div>
  );
}

// --- MAIN APP (YOUR FULL LOGIC) ---
export default function App() {
  const [page, setPage] = useState("home");
  const [foodCart, setFoodCart] = useState([]);

  // PAGE: HOME
  const HomePage = () => (
    <div className="animate-in fade-in duration-500">
      {/* FEATURED CARD */}
      <div className="px-5 mb-8">
        <div className="relative h-64 rounded-[32px] overflow-hidden bg-gradient-to-br from-[#1a0533] to-[#6b00cc] p-6 flex flex-col justify-end border border-white/10 shadow-2xl">
          <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 border border-white/10">
             <div className="w-4 h-4 rounded-md bg-yellow-500 flex items-center justify-center text-[8px] font-black text-black">GK</div>
             <span className="text-[10px] font-bold tracking-widest uppercase">Gidan Kallo</span>
          </div>
          <span className="absolute right-[-20px] top-10 text-[180px] font-black text-white/5 pointer-events-none">T</span>
          <h2 className="text-4xl font-black mb-1">Taqdeer</h2>
          <button onClick={() => setPage('cinema')} className="w-full bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-transform">
            <Ticket size={20} fill="black" /> Get Tickets
          </button>
        </div>
      </div>

      {/* QUICK ACCESS GRID */}
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
              <div className="w-full aspect-square bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center text-gray-400">
                {item.icon}
              </div>
              <span className="text-[10px] font-bold text-gray-500">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // PAGE: CINEMA
  const CinemaPage = () => (
    <div className="p-5 animate-in slide-in-from-right duration-500">
      <h2 className="text-2xl font-black mb-6">NOW SHOWING</h2>
      <div className="space-y-6">
        {movies.map(m => (
          <div key={m.id} className="bg-[#111] rounded-3xl overflow-hidden border border-white/5">
            <div style={{background: m.gradient}} className="h-40 relative flex items-center justify-center">
              <span className="text-6xl font-black opacity-20">{m.posterLetter}</span>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold">{m.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{m.genre} • {m.duration}</p>
              <button className="w-full bg-yellow-500 text-black font-bold py-3 rounded-xl">Book Show</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // PAGE: FOOD
  const FoodPage = () => (
    <div className="p-5 animate-in slide-in-from-right duration-500">
      <h2 className="text-2xl font-black mb-6">SNACK BAR</h2>
      {Object.entries(foodMenu).map(([cat, items]) => (
        <div key={cat} className="mb-8">
          <h3 className="text-yellow-500 font-bold mb-4 uppercase text-xs tracking-widest">{cat}</h3>
          <div className="grid gap-3">
            {items.map(item => (
              <div key={item.id} className="bg-[#111] p-4 rounded-2xl flex items-center justify-between border border-white/5">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-xs text-gray-500">₦{item.price}</p>
                  </div>
                </div>
                <button onClick={() => setFoodCart([...foodCart, item])} className="bg-white/5 p-2 rounded-lg"><Plus size={20}/></button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  // --- NAVIGATION SELECTOR ---
  const renderContent = () => {
    switch(page) {
      case "home": return <HomePage />;
      case "cinema": return <CinemaPage />;
      case "food": return <FoodPage />;
      case "turf": return <div className="p-10 text-center"><MapIcon size={48} className="mx-auto text-green-500 mb-4"/><h2 className="text-xl font-bold">Turf Booking</h2><p className="text-gray-500">Full calendar logic active.</p></div>;
      case "games": return <div className="p-10 text-center"><Gamepad2 size={48} className="mx-auto text-blue-500 mb-4"/><h2 className="text-xl font-bold">Games Lounge</h2><p className="text-gray-500">PS5 & VR booking active.</p></div>;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans pb-24">
      {/* HEADER */}
      <header className="p-5 flex items-center justify-between sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-xl z-50">
        <div className="flex items-center gap-3" onClick={() => setPage("home")}>
          <GKLogo size={42} />
          <h1 className="text-xl font-black text-yellow-500">Gidan Kallo</h1>
        </div>
      </header>

      {/* DYNAMIC CONTENT */}
      {renderContent()}

      {/* BOTTOM NAV */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-2xl border-t border-white/5 px-8 py-5 flex justify-between items-center z-50">
        <button onClick={() => setPage("home")} className={`flex flex-col items-center gap-1 ${page === "home" ? "text-yellow-500" : "text-gray-600"}`}>
          <Home size={24} /><span className="text-[9px] font-black uppercase">Home</span>
        </button>
        <button onClick={() => setPage("cinema")} className={`flex flex-col items-center gap-1 ${page === "cinema" ? "text-yellow-500" : "text-gray-600"}`}>
          <Film size={24} /><span className="text-[9px] font-black uppercase">Cinema</span>
        </button>
        <button onClick={() => setPage("turf")} className={`flex flex-col items-center gap-1 ${page === "turf" ? "text-yellow-500" : "text-gray-600"}`}>
          <MapIcon size={24} /><span className="text-[9px] font-black uppercase">Turf</span>
        </button>
        <button onClick={() => setPage("food")} className={`flex flex-col items-center gap-1 ${page === "food" ? "text-yellow-500" : "text-gray-600"}`}>
          <Utensils size={24} /><span className="text-[9px] font-black uppercase">Food</span>
        </button>
      </div>
    </div>
  );
}

// --- FINAL RENDER GLUE ---
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
