import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GlassButton } from "@/components/ui/glass-button";
import { Sparkles, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-bg-3.png";
import { auth, googleProvider } from "../../../firebase.js";
import { signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "@/apis/auth/index.js";

  

const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animationDelay: Math.random() * 6 + "s",
            animationDuration: (Math.random() * 3 + 4) + "s"
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => auth.currentUser);
   useEffect(() => {
    const unsub = auth.onAuthStateChanged(setUser);
    return () => unsub();
  }, []);

  const handleLoginWithGoogle = async () => {
    // You can use popup or redirect
    await signInWithPopup(auth, googleProvider);
  
    // Get the signed-in user
    const user = auth.currentUser;
    // // ✅ Fetch a valid Firebase ID token
    const idToken = await user.getIdToken();
  
    // // Call your backend to verify + create user in Postgres
    const verifyToken = await verifyUser(idToken);
    console.log("verifyToken : ", verifyToken)
    if (verifyToken.id) {
      localStorage.setItem('accessToken', idToken);
      localStorage.setItem('refreshToken', user.refreshToken); // Firebase issues one
    }
    navigate("/dashboard");
  };
  

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-primary/80" />
        <div className="absolute top-4 right-4 z-10">
         <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
        <GlassButton variant="hero" size="lg" className="hover:border-primary/60">
              Login
        </GlassButton>
        </motion.div>
        </div>
      </div>
      
      {/* Floating Particles */}
      <ParticleField />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            // className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full text-sm font-medium text-foreground-landing/80"
          >
            <GlassButton variant="primary" size="lg" className="text-black">
            <Sparkles className="w-4 h-4 text-black mr-2" />
            AI-Powered English Learning
            </GlassButton>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="text-foreground-landing">Speak English with</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Confidence
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-primary-landing max-w-2xl mx-auto leading-relaxed"
          >
            Your personal AI tutor for fluent conversations. Practice speaking, 
            get instant feedback, and track your progress with advanced AI technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <GlassButton variant="outline" size="xl" className="group text-white" onClick={handleLoginWithGoogle}>
              <img src="google.svg" alt="google" className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Sign in with google
            </GlassButton>
            
            <Link to="/dashboard">
              <GlassButton variant="hero" size="xl" className="group text-white">
                View Dashboard
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </GlassButton>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 pt-12"
          >
            {[
              { number: "10K+", label: "Active Learners" },
              { number: "95%", label: "Success Rate" },
              { number: "50+", label: "Languages Supported" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary-landing">{stat.number}</div>
                <div className="text-sm text-primary-landing">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;