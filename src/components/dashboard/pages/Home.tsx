import { Calendar, Clock, BookOpen, Zap, Play } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { motion } from "framer-motion";

const stats = [
  { label: "Sessions Completed", value: "47", icon: Calendar, change: "+12 this week" },
  { label: "Hours Spoken", value: "23.5", icon: Clock, change: "+3.2 today" },
  { label: "Words Learned", value: "342", icon: BookOpen, change: "+18 this week" },
  { label: "Streak Days", value: "15", icon: Zap, change: "Keep it up!" },
];

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Welcome Panel */}
      <GlassCard className="p-8 text-center ">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Ready to practice, Sarah?
          </h1>
          <p className="text-primary mb-6 max-w-md mx-auto">
            Continue your English learning journey with personalized AI conversations
          </p>
          <GlassButton variant="default" size="lg" className="group text-foreground">
            <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Start Conversation
          </GlassButton>
        </motion.div>
      </GlassCard>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 1) }}
          >
            <GlassCard className="p-6 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-white/30 rounded-xl">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-primary">{stat.label}</p>
                </div>
              </div>
              <div className="text-xs text-primary px-2 py-1 rounded-full">
                {stat.change}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <GlassCard className="p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { activity: "Completed conversation about travel", time: "2 hours ago", score: "94%" },
            { activity: "Practiced pronunciation: 'Entrepreneur'", time: "4 hours ago", score: "87%" },
            { activity: "Learned 5 new vocabulary words", time: "1 day ago", score: "100%" },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 glass-panel rounded-lg">
              <div>
                <p className="text-foreground font-medium">{item.activity}</p>
                <p className="text-sm text-primary">{item.time}</p>
              </div>
              <div className="text-primary font-semibold">{item.score}</div>
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}