import { Clock, MapPin } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div>
          <div className="logo">Continental Cafe</div>

          <div className="tagline">
            WOOD-FIRED · NO SHORTCUTS
          </div>
        </div>

        <div className="restaurant-info">
          <span>
            <Clock size={14} />
            9:00–23:00
          </span>

          <span>
            <MapPin size={14} />
            Meerut,Baghpat road
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;