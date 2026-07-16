import { useState } from "react";
import FoodCard from "../components/FoodCard";
import { MENU, CATEGORIES } from "../data/menu";

function Menu() {
  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES[0]
  );

  return (
    <div className="menu-page">
      <div className="category-tabs">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {MENU[activeCategory].map((item, index) => (
          <FoodCard
            key={item.id}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;