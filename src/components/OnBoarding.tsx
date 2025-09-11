"use client"

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/glass-card";
import { GlassButton } from "./ui/glass-button";
import { cn } from "@/lib/utils";
import { onBoarding } from "@/apis/users";

export default function OnBoarding({
  setIsOnBoardingCompleted,
}: {
  setIsOnBoardingCompleted: (isOnBoardingCompleted: boolean) => void;
}) {
  const questions = [
    // 1. Welcome Screen
    {
      q: "👋 Welcome! Meet English AI tutor, your English learning buddy. Ready to start your journey?",
      type: "intro",
    },
    // 2. Language Selection
    {
      q: "What’s your English proficiency goal?",
      type: "options",
      options: [
        "Beginner English",
        "Conversational English",
        "Fluent English",
        "Professional",
      ],
    },
    // 3. Learning Goals
    {
      q: "Why are you learning English?",
      type: "options",
      options: ["Travel", "Career", "Hobby", "Academic", "Other"],
    },
    // 4. Experience Level Assessment
    {
      q: "How would you describe your current English level?",
      type: "options",
      options: [
        "I’m just starting",
        "I can handle basics",
        "I’m intermediate",
        "I’m advanced",
      ],
    },
    // 5. Daily Goal Setting
    {
      q: "How much time can you dedicate daily to English learning?",
      type: "options",
      options: ["5 mins", "10 mins", "15 mins", "30 mins"],
    },
    // 6. Notification Permissions
    {
      q: "Would you like to receive reminders and streak alerts?",
      type: "options",
      options: ["Yes, keep me motivated!", "No, I’ll manage myself"],
    },
    // 7. First Lesson Preview
    {
      q: "Here’s a quick challenge: How do you say 'Hello' in English?",
      type: "options",
      options: ["Hello", "Bonjour", "Hola", "Ciao"],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<number, string>>({});
  const [loading, setLoading] = React.useState(false);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    let answer = {
      english_proficiency_goal: answers[1],
      why_are_learning_english: answers[2],
      english_level: answers[3],
      time_spent_english: answers[4],
      streak_alerts: answers[5] === "Yes, keep me motivated!" ? true : false,
      quick_challenge: answers[6]
    }
    await onBoarding(answer)
    setIsOnBoardingCompleted(true)
    setLoading(false)
  };

  const q = questions[currentQuestion];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full h-full flex items-center justify-center pt-8">
        <div className="glass-card-outline w-[88%] md:w-[65%] h-[600px] rounded-lg relative flex flex-col items-center justify-center">
          {/* Skip */}
          <div className="absolute top-4 right-4">
            <button
              className="text-primary px-4 py-2 rounded-full hover:text-primary transition-colors"
              onClick={() => setIsOnBoardingCompleted(true)}
            >
              Skip
            </button>
          </div>

          {/* Question */}
          <div className="w-[80%] h-[80%] flex flex-col items-center justify-center">
            <p className="text-xl md:text-xl font-bold text-center">
              {currentQuestion + 1}/{questions.length} — {q.q}
            </p>

            {/* Intro Screen */}
            {q.type === "intro" && (
              <div className="flex flex-col items-center space-y-6">
                <img src="/onBoardingBackground.jpg" alt="onBoardingBackground" className="w-[450px] h-full object-cover rounded-lg mt-10"/>
                <p className="text-lg text-gray-300 text-center">
                  English AI tutor will guide you step by step. Let’s get started!
                </p>
                <GlassButton
                  className="w-[160px] h-[50px] "
                  onClick={handleNext}
                >
                  Start
                </GlassButton>
              </div>
            )}

            {/* Options */}
            {q.type === "options" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 w-full max-w-md">
                {q.options?.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GlassButton
                      className={cn(
                        "text-primary text-md font-bold px-4 py-2 w-full h-[50px]",
                      )}
                    variant={answers[currentQuestion] === option ? "primary" : "outline"}                      
                      onClick={() =>
                        setAnswers({ ...answers, [currentQuestion]: option })
                      }
                    >
                      {option}
                    </GlassButton>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Text Input */}
            {q.type === "text" && (
              <div className="mt-10 w-full flex justify-center">
                <input
                  type="text"
                  value={answers[currentQuestion] || ""}
                  onChange={(e) =>
                    setAnswers({
                      ...answers,
                      [currentQuestion]: e.target.value,
                    })
                  }
                  className="w-full max-w-md h-16 text-xl p-4 rounded-full bg-transparent border border-gray-700 text-primary"
                  placeholder="Type your answer..."
                />
              </div>
            )}

            {/* Navigation */}
            {q.type !== "intro" && (
              <div className="flex items-center justify-center space-x-4 mt-10">
                {currentQuestion > 0 && (
                  <GlassButton
                    className="w-[100px] h-[50px]"
                    onClick={handleBack}
                  >
                    Back
                  </GlassButton>
                )}
                {currentQuestion < questions.length - 1 && (
                  <GlassButton
                    className="w-[100px] h-[50px]"
                    onClick={handleNext}
                  >
                    Next
                  </GlassButton>
                )}
                {currentQuestion === questions.length - 1 && (
                  <GlassButton
                    disabled={loading}
                    className="w-[120px] h-[50px]"
                    onClick={handleSubmit}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </GlassButton>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
