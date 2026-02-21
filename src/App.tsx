export default function App() {
  return (
    <div className="layout">
      
      {/* Sidebar (PC only) */}
      <div className="sidebar">
        <span>🏠</span>
        <span>🎬</span>
        <span>🎮</span>
        <span>⚽</span>
      </div>

      {/* Main */}
      <div className="app">
        <h1>Gidan Kallo</h1>
        <p>Entertainment Hub</p>

        <div>
          <h2>Movies</h2>
          <h2>Games</h2>
          <h2>Sports</h2>
          <h2>Food</h2>
        </div>
      </div>

    </div>
  );
}
