import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Mic, Volume2, BookOpen, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "AI Conversation Practice",
    description: "Practice speaking with our advanced AI that adapts to your skill level and interests. Get natural conversations anytime.",
    gradient: "from-primary/20 to-primary/10"
  },
  {
    icon: Volume2,
    title: "Real-time Pronunciation Correction",
    description: "Receive instant feedback on your pronunciation with phonetic analysis and personalized improvement suggestions.",
    gradient: "from-secondary/20 to-secondary/10"
  },
  {
    icon: BookOpen,
    title: "Vocabulary Building",
    description: "Expand your vocabulary with contextual learning, spaced repetition, and real-world usage examples.",
    gradient: "from-accent/20 to-accent/10"
  },
  {
    icon: BarChart3,
    title: "Progress Tracking Dashboard",
    description: "Monitor your speaking fluency, pronunciation accuracy, and vocabulary growth with detailed analytics.",
    gradient: "from-primary/20 via-secondary/20 to-accent/20"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground-landing">Powerful</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-primary-landing max-w-3xl mx-auto">
            Everything you need to master English speaking, powered by cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="group cursor-pointer h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-feature rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-primary-landing" />
                    </div>
                    
                    {/* Decorative glow */}
                    <div className="w-20 h-20 bg-gradient-glow rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-xl" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground-landing group-hover:text-primary-landing transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-primary-landing leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-primary-landing text-sm font-medium">
                      Learn more →
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass-panel inline-flex items-center gap-3 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text:black dark:text-white">
              Join thousands of learners improving their English daily
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;