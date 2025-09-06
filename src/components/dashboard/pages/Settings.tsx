import { Crown, CreditCard, Check } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    current: true,
    features: ["5 conversations/day", "Basic vocabulary", "Progress tracking", "Community support"]
  },
  {
    name: "Pro",
    price: "$19",
    period: "month",
    popular: true,
    features: ["Unlimited conversations", "Advanced vocabulary", "Real-time feedback", "Priority support", "Custom topics", "Pronunciation analysis"]
  },
  {
    name: "Lifetime",
    price: "$199",
    period: "one-time",
    features: ["All Pro features", "Lifetime access", "Early access to new features", "Personal tutor sessions", "Custom learning plans"]
  }
];

export default function Settings() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings & Subscription</h1>
        <p className="text-white">Manage your account and upgrade your plan</p>
      </div>

      {/* Current Plan */}
      <GlassCard className="p-6 bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/30">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Current Plan: Free</h3>
            <p className="text-white">5/5 daily conversations used</p>
          </div>
          <div className="text-right">
            <GlassButton variant="primary">
              <Crown className="h-4 w-4 mr-2" />
              Upgrade Now
            </GlassButton>
          </div>
        </div>
      </GlassCard>

      {/* Subscription Plans */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-6">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard 
                className={`p-6 relative ${
                  plan.popular 
                    ? "border-2 border-primary shadow-glow scale-105" 
                    : plan.current 
                    ? "border border-green-500/50" 
                    : "border border-glass-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                {plan.current && (
                  <div className="absolute -top-3 right-3">
                    <span className="bg-green-500/20 border border-green-500/50 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                      Current Plan
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-white">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <GlassButton
                  variant={plan.popular ? "primary" : plan.current ? "outline" : "outline"}
                  className="w-full"
                  disabled={plan.current}
                >
                  {plan.current ? "Current Plan" : `Choose ${plan.name}`}
                </GlassButton>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* General Settings */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">General Settings</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-foreground font-medium">Email Notifications</h4>
              <p className="text-sm text-white">Receive updates about your progress</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-foreground font-medium">Daily Reminders</h4>
              <p className="text-sm text-white">Get reminded to practice daily</p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-foreground font-medium">Sound Effects</h4>
              <p className="text-sm text-white">Play sounds for interactions</p>
            </div>
            <Switch />
          </div>
        </div>
      </GlassCard>

      {/* Account Management */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">Account Management</h3>
        <div className="space-y-4">
          <GlassButton variant="outline" className="w-full justify-start">
            <CreditCard className="h-4 w-4 mr-2" />
            Billing History
          </GlassButton>
          
          <GlassButton variant="outline" className="w-full justify-start">
            Export Data
          </GlassButton>
          
          <GlassButton 
            variant="outline" 
            className="w-full justify-start text-red-400 hover:text-red-300 border-red-500/50"
          >
            Delete Account
          </GlassButton>
        </div>
      </GlassCard>
    </motion.div>
  );
}