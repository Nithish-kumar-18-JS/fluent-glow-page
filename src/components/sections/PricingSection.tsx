import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out our AI tutor",
    features: [
      "5 conversations per day",
      "Basic pronunciation feedback", 
      "Limited vocabulary lessons",
      "Progress tracking",
      "Community support"
    ],
    buttonText: "Get Started Free",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "Ideal for serious learners",
    features: [
      "Unlimited conversations",
      "Advanced pronunciation analysis",
      "Personalized learning path",
      "Detailed progress analytics",
      "Priority support",
      "Vocabulary builder pro",
      "Speaking challenges"
    ],
    buttonText: "Start Pro Trial",
    buttonVariant: "primary" as const,
    popular: true
  },
  {
    name: "Lifetime",
    price: "$299",
    period: "one-time payment",
    description: "Best value for long-term learners",
    features: [
      "Everything in Pro",
      "Lifetime updates",
      "Advanced AI models",
      "1-on-1 coaching sessions",
      "Custom learning modules",
      "API access",
      "White-label options"
    ],
    buttonText: "Get Lifetime Access",
    buttonVariant: "hero" as const,
    popular: false
  }
];

const PricingSection = () => {
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
            <span className="text-foreground">Choose Your</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Learning Plan
            </span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Start free and upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-glow text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-glow">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <GlassCard className={`h-full relative overflow-hidden ${plan.popular ? 'ring-2 ring-primary/30 shadow-glow' : ''}`}>
                {/* Background Glow for Popular */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-glow opacity-5" />
                )}
                
                <div className="relative z-10 p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-white text-sm">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-white mt-2">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-feature rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground/90 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <GlassButton 
                    variant={plan.buttonVariant} 
                    size="lg" 
                    className="w-full group"
                  >
                    {plan.name === "Pro" && <Zap className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />}
                    {plan.buttonText}
                  </GlassButton>
                  
                  {/* Money-back guarantee */}
                  {plan.name !== "Free" && (
                    <p className="text-center text-xs text-white mt-4">
                      30-day money-back guarantee
                    </p>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white">
            Have questions about our pricing?{" "}
            <a href="#" className="text-primary hover:text-primary-glow transition-colors">
              Check our FAQ
            </a>{" "}
            or{" "}
            <a href="#" className="text-primary hover:text-primary-glow transition-colors">
              contact support
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;