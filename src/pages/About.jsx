import "../styles/about.css";
import { useState, useEffect } from "react";
import aboutImage from "../assets/images/pizza.jpg";

function About() {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll button on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScroll(true);
      else setShowScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="about-page">
      

      {/* ================= Hero Section ================= */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Foodie</h1>
          <p>
            At Foodie Restaurant, we believe in serving delicious food made with fresh ingredients in a warm and welcoming atmosphere.
          </p>
        </div>
        <div className="about-hero-image">
          <img src={aboutImage} alt="Delicious pizza" />
        </div>
      </section>

      {/* ================= Story & Mission Section ================= */}
      <section className="about-content">
        <div className="about-text">
          <div className="about-box animate-slide-fade" style={{ animationDelay: "0.2s" }}>
            <h2>Our Story</h2>
            <p>
              Founded in 2024, Foodie began as a small family-run restaurant passionate about delivering quality food. Over the years, we’ve grown, but our commitment to fresh ingredients, exceptional taste, and outstanding customer service remains.
            </p>
          </div>

          <div className="about-box animate-slide-fade" style={{ animationDelay: "0.4s" }}>
            <h2>Our Mission</h2>
            <p>
              To provide a delightful dining experience, combining mouth-watering dishes with a cozy and friendly environment for all our guests.
            </p>
          </div>

          <div className="about-box animate-slide-fade" style={{ animationDelay: "0.6s" }}>
            <h2>Our Vision</h2>
            <p>
              To become a go-to destination for food lovers seeking quality, freshness, and an unforgettable dining experience.
            </p>
          </div>
        </div>

       
      </section>

      

      {/* ================= Scroll-to-top Button ================= */}
      {showScroll && (
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
    </div>
  );
}

export default About;
