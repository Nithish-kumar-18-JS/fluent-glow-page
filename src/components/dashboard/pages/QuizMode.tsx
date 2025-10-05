import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { getQuiz } from "@/apis/quiz";

interface QuizQuestion {
  word: string;
  question: string;
  options: string[];
  answer: string;
}

interface QuizModeProps {
  onExit: () => void;
  quizData : any
}


export default function QuizMode({ onExit , quizData=[] }: QuizModeProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<{ question: number; selected: string; correct: string }[]>([]);
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / quizData.length) * 100;
  const isLastQuestion = currentQuestion === quizData.length - 1;

  const handleAnswerSelect = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (selectedAnswer) {
      const newAnswers = [
        ...answers,
        {
          question: currentQuestion,
          selected: selectedAnswer,
          correct: quizData[currentQuestion].answer
        }
      ];
      setAnswers(newAnswers);

      if (isLastQuestion) {
        setShowResults(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResults(false);
  };

  const correctAnswers = answers.filter(a => a.selected === a.correct).length;
  const score = Math.round((correctAnswers / quizData.length) * 100);

  if (showResults) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <GlassButton variant="ghost" onClick={onExit}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Vocabulary
          </GlassButton>
        </div>

        <GlassCard className="p-8 text-center space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            {score >= 80 ? (
              <CheckCircle2 className="h-20 w-20 text-green-400 mx-auto mb-4" />
            ) : (
              <XCircle className="h-20 w-20 text-yellow-400 mx-auto mb-4" />
            )}
          </motion.div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Quiz Complete!
            </h2>
            <p className="text-xl text-primary">
              Your Score: {correctAnswers}/{quizData.length}
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="text-6xl font-bold text-foreground mb-4">
              {score}%
            </div>
            <Progress value={score} className="h-3" />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto text-left">
            {answers.map((ans, idx) => {
              const isCorrect = ans.selected === ans.correct;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <GlassCard className={`p-4 ${isCorrect ? 'border-green-500/50' : 'border-red-500/50'}`}>
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-foreground mb-1">
                          {quizData[ans.question].word.charAt(0).toUpperCase() + quizData[ans.question].word.slice(1)}
                        </p>
                        <p className="text-sm text-primary">
                          Your answer: <span className={isCorrect ? 'text-green-400' : 'text-red-400'}>{ans.selected}</span>
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-green-400">
                            Correct answer: {ans.correct}
                          </p>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          <div className="flex gap-4 justify-center pt-4">
            <GlassButton variant="outline" onClick={onExit}>
              Back to Vocabulary
            </GlassButton>
            <GlassButton variant="primary" onClick={handleRestart}>
              Retry Quiz
            </GlassButton>
          </div>
        </GlassCard>
      </motion.div>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <GlassButton variant="ghost" onClick={onExit}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Vocabulary
        </GlassButton>
        <div className="text-sm text-primary">
          Question {currentQuestion + 1} of {quizData.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-primary text-right">{Math.round(progress)}% Complete</p>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <GlassCard className="p-6 space-y-4">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-3">
                Word: {question.word.charAt(0).toUpperCase() + question.word.slice(1)}
              </div>
              <h2 className="text-xl font-bold text-foreground">
                {question.question}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-2">
              {question.options.map((option, idx) => (
                <motion.div
                  key={option}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <GlassButton
                    variant={selectedAnswer === option ? "primary" : "outline"}
                    className={`w-full justify-start text-left h-auto py-3 px-4 text-sm ${
                      selectedAnswer === option ? 'shadow-glow-hover scale-105' : ''
                    }`}
                    onClick={() => handleAnswerSelect(option)}
                  >
                    <span className="flex items-center gap-2">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center font-semibold text-xs">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </span>
                  </GlassButton>
                </motion.div>
              ))}
            </div>

            {/* Next Button */}
            <div className="flex justify-end pt-2">
              <GlassButton
                variant="primary"
                onClick={handleNext}
                disabled={!selectedAnswer}
                className="min-w-28"
              >
                {isLastQuestion ? "Finish" : "Next"}
              </GlassButton>
            </div>
          </GlassCard>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
