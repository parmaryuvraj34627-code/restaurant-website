import { useParams, Link } from "react-router-dom";
import menuData from "../data/menuData";
import "../styles/menuDetails.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function MenuDetails() {
  const { id } = useParams();
  const item = menuData.find((dish) => dish.id === parseInt(id));

  if (!item) {
    return (
      <div className="menu-page">
        <h2 className="not-found">Menu item not found.</h2>
        <Link to="/menu" className="menu-btn">
          Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="menu-details-page">
      <div className="menu-details-container">
        {/* Image Section */}
        <motion.div
          className="menu-details-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={item.image} alt={item.name} />
          <div className="menu-rating">⭐ {item.rating ? item.rating : 5}</div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="menu-details-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{item.name}</h1>
          <p className="menu-details-desc">{item.description}</p>

          {item.ingredients && (
            <div className="menu-ingredients">
              <h3>Ingredients:</h3>
              <ul>
                {item.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="menu-details-bottom">
            <span className="menu-details-price">{item.price}</span>
            
          </div>

          <Link to="/menu" className="menu-btn back-btn">
            Back to Menu
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default MenuDetails;
