import { Plus, Minus } from "lucide-react";
import { useCart } from "../contexts/CartContext";

function FoodCard({ item, index }) {
  const { cart, addItem, removeItem } = useCart();

  const quantity = cart[item.id] || 0;

  return (
    <div
      className="food-card"
      style={{
        animationDelay: `${index * 40}ms`,
      }}
    >
      {/* Food image / icon and details */}
      <div className="food-header">
        <div className="food-icon">
          {item.icon}
        </div>

        <div>
          <h3>{item.name}</h3>

          <p className="food-price">
            ${item.price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Food description */}
      <p className="food-description">
        {item.desc}
      </p>

      {/* Add / Remove buttons */}
      <div className="food-actions">

        {quantity > 0 && (
          <>
            <button
              onClick={() => removeItem(item.id)}
              className="quantity-button"
            >
              <Minus size={14} />
            </button>

            <span className="quantity">
              {quantity}
            </span>
          </>
        )}

        <button
          onClick={() => addItem(item.id)}
          className="add-button"
        >
          <Plus size={16} />
        </button>

      </div>
    </div>
  );
}

export default FoodCard;