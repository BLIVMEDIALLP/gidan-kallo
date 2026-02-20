import React, { useState, useEffect } from "react";
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
  { id:1, title:"Taqdeer", sub:"Divine Decree", genre:"Drama", duration:"2h 10m", lang:"Hausa / English", rating:4.7, badge:"FEATURED", badgeColor:"#a855f7", gradient:"linear-gradient(135deg,#1a0533,#4a0080,#6b00cc)", posterLetter:"T", showtimes:[{time:"14:00",type:"Standard"},{time:"17:30",type:"VIP"},{time:"20:00",type:"Standard"}], dome:"Dome 1", price:2000 },
  { id:2, title:"Hakeem", sub:"Seeking Justice", genre:"Action", duration:"1h 58m", lang:"English", rating:4.6, badge:"BLOCKBUSTER", badgeColor:"#f97316", gradient:"linear-gradient(135deg,#0f0c29,#302b63,#1a1a4e)", posterLetter:"H", showtimes:[{time:"15:30",type:"IMAX"},{time:"18:00",type:"Standard"},{time:"21:30",type:"VIP"}], dome:"Dome 1", price:2000 }
];

// ── 2. COMPONENTS ──
function GKLogo({ size = 36 }) {
  const [err, setErr] = useState(false);
  if (LOGO_URL && !err) return (
    <div style={{width:size,height:size,borderRadius:size*0.22,overflow:"hidden",background:"white",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
      <img src={LOGO_URL} style={{width:"90%",height:"90%",objectFit:"contain"}} alt="GK" onError={()=>setErr(true)}/>
    </div>
  );
  return (
    <div style={{width:size,height:size,borderRadius:size*0.22,background:"linear-gradient(135deg,#1a1a2e,#16213e)",border:"2px solid #FFD700",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
      <span style={{color:"#FFD700",fontWeight:900,fontSize:size*0.38}}>GK</span>
    </div>
  );
}

// ── 3. MAIN APP ──
export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "black", color: "white", fontFamily: "sans-serif" }}>
      {/* HEADER */}
      <header style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #27272a" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <GKLogo size={40} />
          <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Gidan Kallo</h1>
        </div>
        <Menu size={24} />
      </header>

      {/* HERO SECTION */}
      <main style={{ padding: "20px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Now Showing</h2>
        <div style={{ display: "grid", gap: "20px" }}>
          {movies.map(movie => (
            <div key={movie.id} style={{ background: "#18181b", borderRadius: "12px", overflow: "hidden", border: "1px solid #27272a" }}>
              <div style={{ height: "150px", background: movie.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px", fontWeight: "bold" }}>
                {movie.posterLetter}
              </div>
              <div style={{ padding: "15px" }}>
                <div style={{ color: movie.badgeColor, fontSize: "12px", fontWeight: "bold" }}>{movie.badge}</div>
                <h3 style={{ fontSize: "18px", margin: "5px 0" }}>{movie.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: "14px" }}>{movie.genre} • {movie.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// ── 4. STARTER GLUE ──
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
