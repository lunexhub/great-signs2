import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/27123456789"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="floating-btn w-14 h-14 flex items-center justify-center cursor-pointer"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="text-white" size={24} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+27123456789"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="floating-btn w-14 h-14 bg-primary flex items-center justify-center cursor-pointer"
        aria-label="Call us"
      >
        <Phone className="text-primary-foreground" size={24} />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
