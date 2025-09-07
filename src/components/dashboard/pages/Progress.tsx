import { TrendingUp, Clock, Target, Award } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, RadialBarChart, RadialBar } from "recharts";
import { motion } from "framer-motion";

const speakingData = [
  { day: "Mon", minutes: 25 },
  { day: "Tue", minutes: 35 },
  { day: "Wed", minutes: 18 },
  { day: "Thu", minutes: 42 },
  { day: "Fri", minutes: 28 },
  { day: "Sat", minutes: 38 },
  { day: "Sun", minutes: 31 },
];

const vocabularyData = [
  { week: "Week 1", words: 12 },
  { week: "Week 2", words: 18 },
  { week: "Week 3", words: 25 },
  { week: "Week 4", words: 32 },
];

const fluencyData = [
  { name: "Fluency", value: 78, fill: "#8B5CF6" },
];

const achievements = [
  { title: "7-Day Streak", description: "Practiced 7 days in a row", icon: Award, color: "text-yellow-400" },
  { title: "Vocabulary Master", description: "Learned 300+ words", icon: Target, color: "text-green-400" },
  { title: "Conversation Expert", description: "Completed 50 conversations", icon: Clock, color: "text-blue-400" },
];

export default function Progress() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Your Progress</h1>
        <p className="text-primary">Track your English learning journey</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Overall Progress", value: "78%", icon: TrendingUp },
          { label: "This Week", value: "5.2h", icon: Clock },
          { label: "Streak", value: "15 days", icon: Target },
          { label: "Level", value: "B2", icon: Award },
        ].map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  <p className="text-sm text-primary">{metric.label}</p>
                </div>
                <div className="p-2 bg-gradient-to-br from-primary/20 to-white/30 rounded-lg">
                  <metric.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Speaking Time Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Speaking Time (Last 7 Days)</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={speakingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="day" stroke="rgba(255,255,255,0.6)" />
                <YAxis stroke="rgba(255,255,255,0.6)" />
                <Line 
                  type="monotone" 
                  dataKey="minutes" 
                  stroke="#8B5CF6" 
                  strokeWidth={3}
                  dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "#8B5CF6", strokeWidth: 2, fill: "#fff" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </GlassCard>
        </motion.div>

        {/* Vocabulary Growth Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Vocabulary Growth</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={vocabularyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="week" stroke="rgba(255,255,255,0.6)" />
                <YAxis stroke="rgba(255,255,255,0.6)" />
                <Bar 
                  dataKey="words" 
                  fill="url(#barGradient)"
                  radius={[4, 4, 0, 0]}
                />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </motion.div>
      </div>

      {/* Fluency Score & Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Fluency Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <GlassCard className="p-6 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-4">Fluency Score</h3>
            <div className="relative w-32 h-32 mx-auto mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="90%" data={fluencyData}>
                  <RadialBar
                    dataKey="value"
                    cornerRadius={10}
                    fill="#8B5CF6"
                    className="drop-shadow-lg"
                  />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-foreground">78%</span>
              </div>
            </div>
            <p className="text-sm text-primary">Upper Intermediate (B2)</p>
            <div className="mt-4 p-3 glass-panel rounded-lg">
              <p className="text-xs text-primary">+5% improvement this month</p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Achievements */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Recent Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 glass-panel rounded-lg"
                  >
                    <div className={`p-2 bg-gradient-to-br from-primary/20 to-white/30 rounded-lg ${achievement.color}`}>
                      <achievement.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{achievement.title}</p>
                      <p className="text-sm text-primary">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}