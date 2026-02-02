/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import galleryData from "../data/gallery";
import "../styles/gallery.css";

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const closeModal = () => setSelectedImg(null);

  // Framer Motion variants for gallery cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="gallery-page">
      {/* Page Header */}
      <h1 className="gallery-title">Our Gallery</h1>
      <p className="gallery-subtitle">
        Explore some of our delicious dishes and restaurant ambiance.
      </p>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {galleryData.map((img, index) => (
          <motion.div
            key={img.id}
            className="gallery-card"
            onClick={() => setSelectedImg(img.src)}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
          >
            <img src={img.src} alt={img.alt} />
            <div className="overlay">
              <span>View</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="modal-backdrop"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImg}
              alt="Enlarged view"
              className="modal-img"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
