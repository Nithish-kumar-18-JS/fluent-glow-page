import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassButton } from "@/components/ui/glass-button";
import { Rocket } from "lucide-react";

const StickyGlowButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <GlassButton
            variant="primary"
            size="lg"
            className="shadow-glow-hover animate-glow-pulse group"
          >
            <Rocket className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Start Learning Now
          </GlassButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyGlowButton;