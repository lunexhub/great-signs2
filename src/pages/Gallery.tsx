import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";

// Import all gallery images - Original set
import cityChicks from "@/assets/gallery/city-chicks.png";
import mybrands from "@/assets/gallery/mybrands.png";
import spicee from "@/assets/gallery/spicee.png";
import huawei from "@/assets/gallery/huawei.png";
import hillcrest from "@/assets/gallery/hillcrest.png";
import justJaps from "@/assets/gallery/just-japs.png";
import fashionFusion from "@/assets/gallery/fashion-fusion.png";
import markaz from "@/assets/gallery/markaz.png";
import chery1 from "@/assets/gallery/chery-1.png";

// New images
import quiksilverBrands from "@/assets/gallery/quiksilver-brands.png";
import quiksilverStore from "@/assets/gallery/quiksilver-store.png";
import boardriders from "@/assets/gallery/boardriders.png";
import billabongRvca from "@/assets/gallery/billabong-rvca.png";
import ladiesBillabong from "@/assets/gallery/ladies-billabong.png";
import billabongWall from "@/assets/gallery/billabong-wall.png";
import quiksilverTower from "@/assets/gallery/quiksilver-tower.png";
import emergencyServices from "@/assets/gallery/emergency-services.png";
import catwalk from "@/assets/gallery/catwalk.png";
import cheryPylon from "@/assets/gallery/chery-pylon.png";

const galleryImages = [
  { src: chery1, title: "Chery Dealership", category: "Automotive" },
  { src: quiksilverBrands, title: "Quiksilver Brand Tower", category: "Retail" },
  { src: cityChicks, title: "City Chicks Restaurant", category: "Food & Beverage" },
  { src: boardriders, title: "Boardriders Store", category: "Retail" },
  { src: mybrands, title: "MyBrands Store", category: "Retail" },
  { src: billabongRvca, title: "Billabong & RVCA", category: "Retail" },
  { src: spicee, title: "Spicee Market", category: "Retail" },
  { src: quiksilverStore, title: "Quiksilver Store", category: "Retail" },
  { src: huawei, title: "Huawei Store", category: "Technology" },
  { src: ladiesBillabong, title: "Ladies Billabong", category: "Retail" },
  { src: hillcrest, title: "Hillcrest House & Home", category: "Retail" },
  { src: billabongWall, title: "Billabong Wall Art", category: "Retail" },
  { src: justJaps, title: "Just Japs", category: "Retail" },
  { src: quiksilverTower, title: "Quiksilver Tower Sign", category: "Retail" },
  { src: fashionFusion, title: "Fashion Fusion", category: "Fashion" },
  { src: catwalk, title: "Catwalk Fashion", category: "Fashion" },
  { src: markaz, title: "Markaz Ul Ansaar", category: "Community" },
  { src: emergencyServices, title: "Emergency Medical Services", category: "Government" },
  { src: cheryPylon, title: "Chery Pylon Sign", category: "Automotive" },
];

const categories = ["All", ...new Set(galleryImages.map(img => img.category))];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-80 h-80 border border-primary/10 rounded-full"
          />
        </div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-semibold text-sm uppercase tracking-wider"
            >
              Our Work
            </motion.span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mt-4 mb-8">
              Our <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of stunning signage projects. From illuminated 
              storefronts to custom 3D lettering, see how we've helped businesses 
              make a lasting impression.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-20 z-30 glass-card border-b border-border/50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding pt-12">
        <div className="container-custom">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  onClick={() => setSelectedImage(image)}
                  className="group gallery-item aspect-[4/3] relative cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      <span className="text-primary-foreground/70 text-xs font-semibold uppercase tracking-wider">
                        {image.category}
                      </span>
                      <h3 className="text-primary-foreground font-display text-xl font-semibold mt-2">
                        {image.title}
                      </h3>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-12 h-12 bg-background/20 backdrop-blur rounded-full flex items-center justify-center text-primary-foreground hover:bg-background/30 transition-colors"
            >
              <X size={24} />
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="mt-6 text-center">
                <span className="text-primary-foreground/60 text-sm uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-primary-foreground font-display text-2xl md:text-3xl font-semibold mt-2">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "10+", label: "Years Experience" },
              { number: "200+", label: "Happy Clients" },
              { number: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/70 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
