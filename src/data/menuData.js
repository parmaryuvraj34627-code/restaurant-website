// Each menu item has: id, name, description, price, rating, image

import burgerImage from "../assets/images/burger.jpg";
import pizzaImage from "../assets/images/pizza.jpg";
import pastaImage from "../assets/images/pasta.jpg";
import pannerImage from "../assets/images/panner.jpg";

const menuData = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, cheese, and our special sauce.",
    price: 199,
    rating: 4.2,
    image: burgerImage,
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Fresh tomato sauce, mozzarella, and basil on a crispy crust.",
    price: 299,
    rating: 4.4,
    image: pizzaImage,
  },
  {
    id: 3,
    name: "Creamy Alfredo Pasta",
    description: "Penne pasta tossed in a rich creamy Alfredo sauce with parmesan.",
    price: 249,
    rating: 4.3,
    image: pastaImage,
  },
  {
    id: 4,
    name: "Cheeseburger Deluxe",
    description: "Double beef patties, cheddar cheese, lettuce, tomato, and pickles.",
    price: 279,
    rating: 4.5,
    image: burgerImage,
  },
  {
    id: 5,
    name: "Pepperoni Pizza",
    description: "Classic pepperoni with tomato sauce and mozzarella cheese.",
    price: 329,
    rating: 4.6,
    image: pizzaImage,
  },
  {
    id: 6,
    name: "Spaghetti Bolognese",
    description: "Spaghetti pasta topped with a rich and flavorful meat sauce.",
    price: 269,
    rating: 4.4,
    image: pastaImage,
  },
  {
    id: 7,
    name: "Veg Burger",
    description: "Healthy vegetable burger",
    price: 199,
    rating: 4.0,
    image: burgerImage,
  },
  {
    id: 8,
    name: "Paneer",
    description: "Cottage cheese in a rich, creamy sauce.",
    price: 249,
    rating: 4.2,
    image: pannerImage,
  },
];

export default menuData;
