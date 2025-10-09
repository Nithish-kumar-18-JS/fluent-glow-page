/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Heart, BookOpen, Volume2, RotateCcw, RefreshCcwDot, CircleCheck } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { motion } from "framer-motion";

export default function Grammar() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [grammarRules] = useState([
    {
      id: 1,
      title: "Present Perfect",
      level: "Intermediate",
      rule: "Use present perfect for actions that happened at an unspecified time before now.",
      formula: "have/has + past participle",
      example: "I have visited Paris three times.",
      saved: false
    },
    {
      id: 2,
      title: "Subject-Verb Agreement",
      level: "Beginner",
      rule: "The verb must agree with the subject in number and person.",
      formula: "Singular subject + singular verb / Plural subject + plural verb",
      example: "She walks to school. They walk to school.",
      saved: false
    },
    {
      id: 3,
      title: "Conditional Sentences",
      level: "Advanced",
      rule: "Type 2 conditionals express hypothetical or unlikely situations in the present or future.",
      formula: "If + past simple, would + base verb",
      example: "If I had more time, I would learn Spanish.",
      saved: false
    },
    {
      id: 4,
      title: "Modal Verbs",
      level: "Intermediate",
      rule: "Modal verbs express ability, possibility, permission, or obligation.",
      formula: "Modal + base verb",
      example: "You should study harder. She can speak three languages.",
      saved: false
    },
    {
      id: 5,
      title: "Passive Voice",
      level: "Advanced",
      rule: "Use passive voice when the action is more important than who performed it.",
      formula: "be + past participle",
      example: "The book was written by Shakespeare.",
      saved: false
    },
    {
      id: 6,
      title: "Articles (a, an, the)",
      level: "Beginner",
      rule: "Use 'a/an' for non-specific items, 'the' for specific items.",
      formula: "a + consonant sound / an + vowel sound",
      example: "I saw a dog. The dog was friendly.",
      saved: false
    }
  ]);

  const [statsData] = useState([
    {
      label: "Rules Learned 📚",
      value: 0,
      message: "Start learning grammar rules today!"
    },
    {
      label: "Daily Practice 🔥",
      value: "-",
      message: "No practice yet. Keep going!"
    },
    {
      label: "Weekly Progress 🏆",
      value: `0/12`,
      message: "Set your weekly goal and start learning!"
    },
    {
      label: "Mastery Level ⭐",
      value: "-",
      message: "Your mastery will appear here once you start."
    }
  ]);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleSave = (index: number) => {
    grammarRules[index].saved = !grammarRules[index].saved;
  };

  const handleMarkLearned = (id: number) => {
    console.log("Marked as learned:", id);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Improve Grammar</h1>
          <p className="text-primary">Master English grammar with interactive rule cards</p>
        </div>
        <div className="flex items-center gap-3">
          <GlassButton
            variant="outline"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Practice Mode
          </GlassButton>
          <GlassButton
            variant="primary"
          >
            <RefreshCcwDot className="h-4 w-4 mr-2" />
            Refresh
          </GlassButton>
        </div>
      </div>

      {/* Grammar Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {grammarRules.map((rule, index) => (
          <motion.div
            key={rule.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <GlassCard 
              className={`p-0 h-72 cursor-pointer transition-all duration-500 transform-gpu ${
                flippedCards.includes(index) ? 'rotateY-180' : ''
              }`}
              onClick={() => toggleCard(index)}
            >
              <div className="relative w-full h-full preserve-3d">
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        rule.level === "Advanced" 
                          ? "bg-red-500/20 text-red-300"
                          : rule.level === "Intermediate"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-green-500/20 text-green-300"
                      }`}>
                        {rule.level}
                      </span>
                      
                      <GlassButton
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSave(index);
                        }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart 
                          className={`h-4 w-4 ${
                            rule.saved ? "fill-red-500 text-red-500" : "text-primary"
                          }`} 
                        />
                      </GlassButton>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground text-center mb-4">
                      {rule.title}
                    </h3>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="p-3 glass-panel rounded-lg">
                      <p className="text-sm text-primary font-medium mb-2">Rule:</p>
                      <p className="text-sm text-foreground">{rule.rule}</p>
                    </div>
                    <div className="p-3 glass-panel rounded-lg">
                      <p className="text-sm text-primary font-medium mb-2">Formula:</p>
                      <p className="text-sm text-foreground italic">{rule.formula}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <GlassButton
                      variant="outline"
                      className="h-8"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMarkLearned(rule.id);
                      }}
                    >
                      <CircleCheck className="h-4 w-4 mr-2" />
                      Mark as Learned
                    </GlassButton>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotateY-180 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{rule.title}</h3>
                    <p className="text-foreground mb-4 font-medium">{rule.rule}</p>
                    <div className="p-3 glass-panel rounded-lg mb-3">
                      <p className="text-sm text-primary font-medium mb-2">Example:</p>
                      <p className="text-sm text-foreground italic">"{rule.example}"</p>
                    </div>
                    <div className="p-3 glass-panel rounded-lg">
                      <p className="text-sm text-primary font-medium mb-2">Formula:</p>
                      <p className="text-sm text-foreground">{rule.formula}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end">
                    <GlassButton
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCard(index);
                      }}
                    >
                      <RotateCcw className="h-3 w-3 mr-1" />
                      Flip
                    </GlassButton>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <GlassCard key={index} className="p-4 text-center">
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-primary">{stat.label}</p>
          </GlassCard>
        ))}
      </div>
    </motion.div>
  );
}
