import { useState } from "react";
import { Heart, BookOpen, Volume2, RotateCcw } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { motion } from "framer-motion";

const vocabularyWords = [
  {
    word: "Serendipity",
    meaning: "The occurrence of events by chance in a happy way",
    example: "It was pure serendipity that I met my best friend at the coffee shop.",
    difficulty: "Advanced",
    saved: true
  },
  {
    word: "Eloquent",
    meaning: "Fluent or persuasive in speaking or writing",
    example: "The politician gave an eloquent speech about climate change.",
    difficulty: "Intermediate",
    saved: false
  },
  {
    word: "Ubiquitous",
    meaning: "Present, appearing, or found everywhere",
    example: "Smartphones have become ubiquitous in modern society.",
    difficulty: "Advanced",
    saved: true
  },
  {
    word: "Resilient",
    meaning: "Able to withstand or recover quickly from difficult conditions",
    example: "Children are often more resilient than adults think.",
    difficulty: "Intermediate",
    saved: false
  },
];

export default function Vocabulary() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [quizMode, setQuizMode] = useState(false);

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleSave = (index: number) => {
    // In a real app, this would update the backend
    vocabularyWords[index].saved = !vocabularyWords[index].saved;
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
          <h1 className="text-2xl font-bold text-foreground">Vocabulary Builder</h1>
          <p className="text-muted-foreground">Expand your English vocabulary with interactive cards</p>
        </div>
        <div className="flex items-center gap-3">
          <GlassButton
            variant={quizMode ? "primary" : "outline"}
            onClick={() => setQuizMode(!quizMode)}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            {quizMode ? "Exit Quiz" : "Quiz Mode"}
          </GlassButton>
        </div>
      </div>

      {/* Vocabulary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vocabularyWords.map((vocab, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <GlassCard 
              className={`p-0 h-64 cursor-pointer transition-all duration-500 transform-gpu ${
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
                        vocab.difficulty === "Advanced" 
                          ? "bg-red-500/20 text-red-300"
                          : "bg-yellow-500/20 text-yellow-300"
                      }`}>
                        {vocab.difficulty}
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
                            vocab.saved ? "fill-red-500 text-red-500" : "text-muted-foreground"
                          }`} 
                        />
                      </GlassButton>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground text-center">
                      {vocab.word}
                    </h3>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Click to see definition
                    </p>
                    <GlassButton
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Play pronunciation
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </GlassButton>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotateY-180 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{vocab.word}</h3>
                    <p className="text-foreground mb-4 font-medium">{vocab.meaning}</p>
                    <div className="p-3 glass-panel rounded-lg">
                      <p className="text-sm text-muted-foreground italic">"{vocab.example}"</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <GlassButton
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Play pronunciation
                      }}
                    >
                      <Volume2 className="h-4 w-4" />
                    </GlassButton>
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
        {[
          { label: "Words Learned", value: "342" },
          { label: "Saved Words", value: "28" },
          { label: "Weekly Goal", value: "15/20" },
          { label: "Streak", value: "7 days" },
        ].map((stat, index) => (
          <GlassCard key={index} className="p-4 text-center">
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </GlassCard>
        ))}
      </div>
    </motion.div>
  );
}