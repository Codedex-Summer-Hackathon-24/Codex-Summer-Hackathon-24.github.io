import React from 'react';
import './play.css';

function PlayPage() {
  return (
    <div className="PlayPage">
      <header>
        <img src={`${process.env.PUBLIC_URL}//workspaces/board-game-website/assets/sipnplay_logo.png`} alt="Sip & Play Logo" className="logo" />
        <nav className="nav-menu">
          <span className="menu-icon">&#9776;</span>
        </nav>
      </header>
      <main>
        <section className="content">
          <button className="btn large">All You Need to Play</button>
          <hr />
          <button className="btn large">Magic The Gathering</button>
          <button className="btn primary">Join Our Sip & Play Community</button>
          <div className="info-box">
            <p>Players who make top 8 will receive prizes in store credit and promos, and the first 32 registrants will receive a Springleaf Drum participation promo! Specific prizing structure to be determined based on attendance.</p>
            <button className="btn secondary">Pre - Register</button>
          </div>
          <button className="btn large">Prizes</button>
          <div className="info-box">
            <p>*Top 8 Prizing subject to change if event has less than 32 players</p>
            <p>Example prizing for 32 attendees:</p>
            <ul>
              <li>1st) $250 Travel Stipend + foil Goblin Guide + non-foil Goblin Guide + Regional Championship invitation</li>
              <li>2nd) $200 store credit + non-foil Goblin Guide</li>
              <li>3rd and 4th) $125 store credit + non-foil Goblin Guide</li>
              <li>5th-8th) $75 store credit + non-foil Goblin Guide</li>
            </ul>
          </div>
          <button className="btn primary">Our Game Collection</button>
          <button className="btn primary">Buy a Booster Collection</button>
          <div className="exchange-box">
            <p>You can exchange:</p>
            <ul>
              <li>4 play boosters for a free play pass</li>
              <li>6 play boosters for a collector booster pack</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PlayPage;
