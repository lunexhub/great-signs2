import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Building2, Lightbulb, Zap, Award, Users } from "lucide-react";
import Layout from "@/components/Layout";
import Marquee from "@/components/Marquee";
import heroImage from "@/assets/hero-bg.png";

// Import gallery preview images
import spicee from "@/assets/gallery/spicee.png";
import huawei from "@/assets/gallery/huawei.png";
import boardriders from "@/assets/gallery/boardriders.png";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Index = () => {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);

  const businessNames = [
    "Chery",
    "Quiksilver",
    "City Chicks",
    "Boardriders",
    "MyBrands",
    "Billabong",
    "RVCA",
    "Spicee",
    "Huawei",
    "Ladies Billabong",
    "Hillcrest",
    "Just Japs",
    "Fashion Fusion",
    "Catwalk",
    "Markaz Ul Ansaar",
    "Emergency Services"
  ];

  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "LED Signage",
      description: "Eye-catching illuminated signs that make your brand shine day and night.",
      gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "3D Letters",
      description: "Premium dimensional lettering for storefronts and corporate buildings.",
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Custom Designs",
      description: "Bespoke signage solutions tailored to your unique brand identity.",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const stats = [
    { icon: <Award />, number: "500+", label: "Projects" },
    { icon: <Users />, number: "200+", label: "Clients" },
    { icon: <Zap />, number: "10+", label: "Years" },
  ];

  const previewImages = [
    { src: spicee, title: "Retail Signage" },
    { src: huawei, title: "Tech Stores" },
    { src: boardriders, title: "Brand Walls" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Image */}
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroImage}
            alt="Professional signage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-96 h-96 border border-primary/10 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: -360,
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] border border-primary/5 rounded-full"
          />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary px-5 py-2.5 rounded-full mb-8"
              >
                <Sparkles size={16} className="animate-pulse" />
                <span className="text-sm font-semibold tracking-wide uppercase">Premium Signage</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8"
              >
                Make Your Brand{" "}
                <span className="relative">
                  <span className="gradient-text">Unforgettable</span>
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                  >
                    <motion.path
                      d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8"
                      stroke="hsl(var(--primary))"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
              >
                We craft stunning signage that transforms businesses. From illuminated 
                storefront signs to custom 3D lettering, we bring your vision to life.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary inline-flex items-center justify-center gap-3 group"
                  >
                    Get Started
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <Link to="/gallery">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-outline inline-flex items-center justify-center gap-3"
                  >
                    View Our Work
                  </motion.button>
                </Link>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                variants={fadeInUp}
                className="flex gap-8 mt-12 pt-8 border-t border-border/50"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Business Names Marquee */}
      <Marquee items={businessNames} />

      {/* Services Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer comprehensive signage solutions for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative bg-card p-8 rounded-3xl card-hover border border-border/50"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Featured Work
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A glimpse of our premium signage projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {previewImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group gallery-item aspect-[4/3] relative cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                  <h3 className="text-primary-foreground font-display text-xl font-semibold">
                    {img.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/gallery">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline inline-flex items-center gap-3 group"
              >
                View All Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground rounded-full" />
            <div className="absolute bottom-10 right-10 w-60 h-60 border border-primary-foreground rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-primary-foreground rounded-full" />
          </div>
        </div>

        <div className="container-custom text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Let's create signage that makes a lasting impression. 
              Contact us today for a free consultation.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-10 py-5 rounded-2xl font-semibold text-lg hover:opacity-90 transition-all duration-300 group"
              >
                Get Your Free Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
