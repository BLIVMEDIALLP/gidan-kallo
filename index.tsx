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

// ── DATA AND COMPONENTS ──
const LOGO_URL = "https://i.postimg.cc/d0pZcWFK/Whats-App-Image-2026-02-20-at-11-20-53-PM.jpg";

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

const movies = [
  { id:1, title:"Taqdeer", sub:"Divine Decree", genre:"Drama", duration:"2h 10m", lang:"Hausa / English", rating:4.7, badge:"FEATURED", badgeColor:"#a855f7", gradient:"linear-gradient(135deg,#1a0533,#4a0080,#6b00cc)", posterLetter:"T", showtimes:[{time:"14:00",type:"Standard"},{time:"17:30",type:"VIP"},{time:"20:00",type:"Standard"}], dome:"Dome 1", price:2000 },
  { id:2, title:"Hakeem", sub:"Seeking Justice", genre:"Action", duration:"1h 58m", lang:"English", rating:4.6, badge:"BLOCKBUSTER", badgeColor:"#f97316", gradient:"linear-gradient(135deg,#0f0c29,#302b63,#1a1a4e)", posterLetter:"H", showtimes:[{time:"15:30",type:"IMAX"},{time:"18:00",type:"Standard"},{time:"21:30",type:"VIP"}], dome:"Dome 1", price:2000 },
  { id:3, title:"Rigar Aro", sub:"Kamal Films International", genre:"Drama", duration:"2h 00m", lang:"Hausa", rating:4.5, badge:"NOW SHOWING", badgeColor:"#22c55e", gradient:"linear-gradient(135deg,#0d1f0d,#1a4a1a,#0a2e0a)", posterLetter:"R", showtimes:[{time:"16:00",type:"Standard"},{time:"19:30",type:"VIP"}], dome:"Dome 1", price:2000 },
  { id:4, title:"Varanasi", sub:"SS Rajamouli", genre:"Epic", duration:"2h 45m", lang:"Telugu / Hindi / English", rating:4.9, badge:"EPIC", badgeColor:"#a855f7", gradient:"linear-gradient(135deg,#1a0a00,#7a3000,#c45000)", posterLetter:"V", showtimes:[{time:"13:00",type:"IMAX"},{time:"17:00",type:"Standard"},{time:"21:00",type:"VIP"}], dome:"Dome 1", price:2000 },
];

const allReviews = [
  { name:"Aminu Hassan", initials:"AH", color:"#3b82f6", rating:5, text:"Amazing experience! The IMAX screen is top-notch and the seats are super comfortable.", category:"Cinema", when:"2 days ago" },
  { name:"Fatima Bello", initials:"FB", color:"#eab308", rating:4, text:"Great sound quality and clean environment. Will definitely come back for more movies.", category:"Cinema", when:"2 days ago" },
  { name:"Ibrahim Yusuf", initials:"IY", color:"#10b981", rating:5, text:"Best football turf in Kano! The grass is fresh, floodlights are perfect for evening games.", category:"Turf", when:"3 days ago" },
  { name:"Aisha Abdullahi", initials:"AA", color:"#3b82f6", rating:5, text:"The PS5 setup is insane! Played for 2 hours straight. Staff were super friendly.", category:"Games Lounge", when:"Yesterday" },
  { name:"Halima Danladi", initials:"HD", color:"#a855f7", rating:4, text:"The popcorn combo is delicious! Prices are reasonable and service is quick.", category:"Snacks", when:"Yesterday" },
  { name:"Kabir Musa", initials:"KM", color:"#ec4899", rating:5, text:"Beef burger was absolutely amazing. Fresh ingredients and great taste.", category:"Snacks", when:"Yesterday" },
];

// ... [REMAINING DATA: snackItems, foodMenu, turfSlots, gameSlots, etc.]

// Note: To keep this response short, please ensure you have your full 
// component definitions here (CinemaPage, TurfPage, FoodPage, etc.) 
// from your original file.

export default function App() {
  const [page, setPage] = useState("home");
  const [modal, setModal] = useState(false);
  
  // PASTE YOUR FULL APP LOGIC HERE (THE RETURN BLOCK)
  return (
    <div className="min-h-screen bg-black text-white">
       {/* All your existing page routing logic */}
       <h1 className="p-10 text-center">Gidan Kallo Loading...</h1>
    </div>
  );
}

// ── THE STARTER GLUE (The "Starter" you were missing) ──
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
