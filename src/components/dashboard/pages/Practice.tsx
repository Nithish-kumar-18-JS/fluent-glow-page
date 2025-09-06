import { useState } from "react";
import { Mic, Send, Volume2, AlertCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const conversations = [
  { sender: "ai", message: "Hello! I'm your AI English tutor. What would you like to practice today?", time: "10:30 AM" },
  { sender: "user", message: "I want to practice talking about my hobbies.", time: "10:31 AM" },
  { sender: "ai", message: "Great choice! Tell me about your favorite hobby. What do you enjoy doing in your free time?", time: "10:31 AM" },
];

const feedbackItems = [
  { word: "pronunciation", issue: "Try to emphasize the 'nun-ci-A-tion' syllables", type: "warning" },
  { word: "favorite", issue: "Perfect pronunciation! 🎉", type: "success" },
  { word: "hobbies", issue: "Good effort! The 'bb' sound should be softer", type: "info" },
];

export default function Practice() {
  const [isRecording, setIsRecording] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full"
    >
      {/* Chat Panel */}
      <div className="lg:col-span-2">
        <GlassCard className="h-full flex flex-col">
          <div className="p-4 border-b border-glass-border/50">
            <h2 className="text-xl font-semibold text-foreground">AI Conversation Practice</h2>
            <p className="text-sm text-white">Practice speaking naturally with your AI tutor</p>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {conversations.map((conv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: conv.sender === "user" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${conv.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl glass-panel ${
                    conv.sender === "user"
                      ? "bg-gradient-to-r from-primary/20 to-purple-500/20 border-primary/30"
                      : "bg-gradient-to-r from-glass/20 to-glass/10"
                  }`}
                >
                  <p className="text-foreground">{conv.message}</p>
                  <p className="text-xs text-white mt-1">{conv.time}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-glass-border/50">
            <div className="flex items-center gap-3">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message or use voice..."
                className="glass-panel border-glass-border text-foreground"
              />
              <GlassButton
                variant={isRecording ? "primary" : "outline"}
                size="icon"
                onClick={() => setIsRecording(!isRecording)}
                className={isRecording ? "animate-pulse" : ""}
              >
                <Mic className="h-4 w-4" />
              </GlassButton>
              <GlassButton variant="primary" size="icon">
                <Send className="h-4 w-4" />
              </GlassButton>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Feedback Panel */}
      <div className="space-y-6">
        <GlassCard className="p-4">
          <h3 className="text-lg font-semibold text-foreground mb-4">Real-time Feedback</h3>
          <div className="space-y-3">
            {feedbackItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 glass-panel rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-1 rounded-full ${
                    item.type === "success" ? "bg-green-500/20" :
                    item.type === "warning" ? "bg-yellow-500/20" :
                    "bg-blue-500/20"
                  }`}>
                    {item.type === "success" ? (
                      <Volume2 className="h-3 w-3 text-green-400" />
                    ) : (
                      <AlertCircle className="h-3 w-3 text-yellow-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{item.word}</p>
                    <p className="text-xs text-white">{item.issue}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-4">
          <h3 className="text-lg font-semibold text-foreground mb-4">Session Progress</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white">Speaking Time</span>
                <span className="text-foreground">8:42 / 15:00</span>
              </div>
              <div className="w-full bg-glass/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-primary to-purple-500 h-2 rounded-full w-3/5 shadow-glow" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white">Fluency Score</span>
                <span className="text-foreground">87%</span>
              </div>
              <div className="w-full bg-glass/20 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full w-4/5 shadow-glow" />
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
}