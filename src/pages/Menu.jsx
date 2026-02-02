import { Link } from "react-router-dom";
import "../styles/menu.css";
import menuData from "../data/menuData";

function Menu() {
  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Menu</h1>

      <div className="menu-grid">
        {menuData.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="menu-card-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="menu-price">{item.price}</p>

              <Link to={`/menu/${item.id}`} className="menu-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
