import "../styles/home.css";
import { useState, useEffect } from "react";

/* Images */
import foodImage from "../assets/images/burger.jpg";
import saladImage from "../assets/images/salad.jpg";
import sushiImage from "../assets/images/sushi.jpg";
import steakImage from "../assets/images/panner.jpg";
import pizzaImage from "../assets/images/pizza.jpg";
import vegBurgerImage from "../assets/images/vegetable burger.jpg";
import friesImage from "../assets/images/french fries.jpg";

function Home() {
  /* ================= Carousel Items ================= */
  const items = [
    { img: saladImage, title: "Fresh Salad" },
    { img: sushiImage, title: "Sushi" },
    { img: steakImage, title: "Paneer" },
    { img: pizzaImage, title: "Pepperoni Pizza" },
    { img: vegBurgerImage, title: "Vegetable Burger" },
    { img: friesImage, title: "French Fries" },
    { img: saladImage, title: "Fresh Salad" },
    { img: sushiImage, title: "Sushi" },
    { img: steakImage, title: "Paneer" },
  ];

  const [index, setIndex] = useState(0);
  const CARD_WIDTH = 260;

  const slideNext = () => setIndex((prev) => (prev + 1) % items.length);
  const slidePrev = () =>
    setIndex((prev) => (prev - 1 + items.length) % items.length);

  /* Auto-slide every 3 seconds */
  useEffect(() => {
    const interval = setInterval(slideNext, 3000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ================= Book Table Form State ================= */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    people: 1,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    alert("Your table has been booked!");
    setFormData({
      name: "",
      email: "",
      mobile: "",
      date: "",
      people: 1,
      message: "",
    });
  };

  return (
    <div className="home">
      {/* ================= Hero Section ================= */}
      <section className="hero">
        <div className="hero-content animate-slide-fade">
          <h1>Welcome to Foodie</h1>
          <p>Delicious food, fresh ingredients, and a cozy atmosphere.</p>
          <a href="/menu" className="hero-btn">
            Explore Menu
          </a>
        </div>

        <div className="hero-image animate-fade-in">
          <img src={foodImage} alt="Delicious food" />
        </div>
      </section>

      {/* ================= About Section ================= */}
      <section className="about">
        <div className="about-image animate-fade-in">
          <img src={foodImage} alt="About Foodie" />
        </div>

        <div className="about-content animate-slide-fade">
          <h2 className="about-title">About Us</h2>
          <p>
            At Foodie, we believe that great food brings people together.
            We serve fresh, delicious meals made from the finest ingredients.
          </p>
          <p>
            Whether you're craving classics or new flavors, Foodie has something
            for everyone.
          </p>
          <a href="/about" className="about-btn">
            Learn More
          </a>
        </div>
      </section>

      {/* ================= Popular Food Carousel ================= */}
      <section className="popular-food">
        <h2 className="popular-title animate-slide-fade">
          Popular Food Items
        </h2>

        <div className="carousel-arrows">
          <button className="carousel-btn" onClick={slidePrev} aria-label="Previous">
            ❮
          </button>
          <button className="carousel-btn" onClick={slideNext} aria-label="Next">
            ❯
          </button>
        </div>

        <div className="carousel-wrapper">
          <div
            className="popular-grid"
            style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}
          >
            {items.map((item, i) => (
              <div className="popular-card" key={i}>
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Book Your Table Form ================= */}
      <section className="book-table">
        <h2 className="book-title animate-slide-fade">Book Your Table</h2>
        <p className="book-text animate-slide-fade" style={{ animationDelay: "0.2s" }}>
          Reserve your table now and enjoy an unforgettable dining experience.
        </p>

        <form className="book-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              name="people"
              value={formData.people}
              onChange={handleChange}
              placeholder="Total People"
              min="1"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
            />
          </div>

          <button type="submit" className="book-btn">
            Book Your Table
          </button>
        </form>
      </section>
    </div>
  );
}

export default Home;
