import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { MessageSquare, Brain, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Practice",
    description: "Start conversations with our AI tutor on topics that interest you. Practice speaking naturally."
  },
  {
    icon: Brain,
    title: "Feedback",
    description: "Get instant pronunciation corrections and grammar suggestions powered by advanced AI."
  },
  {
    icon: TrendingUp,
    title: "Progress",
    description: "Track your improvement with detailed analytics and personalized learning recommendations."
  }
];

const HowItWorksSection = () => {
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
            <span className="text-foreground-landing">How It</span>{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-primary-landing max-w-3xl mx-auto">
            Three simple steps to transform your English speaking skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <GlassCard className="text-center group relative overflow-hidden">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-glow rounded-full flex items-center justify-center text-primary-landing-foreground text-white font-bold text-lg shadow-glow">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-feature rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary-landing" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4 text-foreground-landing">
                  {step.title}
                </h3>
                <p className="text-primary-landing leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connection Line for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary/30 to-secondary/30"></div>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;