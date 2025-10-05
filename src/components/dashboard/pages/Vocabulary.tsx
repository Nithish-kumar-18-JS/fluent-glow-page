/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Heart, BookOpen, Volume2, RotateCcw, RefreshCcwDot, CircleCheck } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { motion } from "framer-motion";
import useVocabularyWordsStore from "@/store/vocabularyWords";
import { getWords, updateWords, wordsStats } from "@/apis/words";
import QuizMode from "./QuizMode";
import { getQuiz } from "@/apis/quiz";



export default function Vocabulary() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [quizMode, setQuizMode] = useState(false);
  const [quizData,setQuizData] = useState([])
  const [refresh,setRefresh] = useState(false);
  const wordsList:any = useVocabularyWordsStore((state) => state.getWordsByLevel());
  const vocabularyWords:any =  wordsList
  const setWords = useVocabularyWordsStore((state) => state.setWordsByLevel);
  const [wordsStatsData,setWordStatsData] = useState([
    {
        label: "Words Learned 📚",
        value: 0,
        message: "Start learning your first word today!"
    },
    {
        label: "Daily Streak 🔥",
        value: "-",
        message: "No streaks yet. Keep practicing daily!"
    },
    {
        label: "Weekly Goal 🏆",
        value: `0/12`,
        message: "Set your weekly goal and start learning!"
    },
    {
        label: "Current Streak ⭐",
        value: "-",
        message: "Your streak will appear here once you start learning."
    }
])

  useEffect(()=>{
    const getWordsList = async () => {
      try {
          const response:any = await getWords()
          setWords(response)
          setRefresh(false)
      } catch (error) {
        console.log(error)
      }
    }
    getWordsList()
  },[refresh])

  useEffect(()=>{
    const getWordsStreaks = async () => {
      try {
        const response:any = await wordsStats()
        setWordStatsData(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getWordsStreaks()
  },[])

    useEffect(()=>{
    const fetchQuiz = async () => {
      let result = await getQuiz()
      if(result){
        setQuizData(result.quiz)
      }
    }
    fetchQuiz()
  },[])

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

  const handlePlayAudio = (audio) => {
    if(!audio){
      return false
    }
    const audioPlayer = new Audio(audio)
    audioPlayer.play().catch((err) => console.error("Audio play error:", err));
  }

  const handleLearnedWords = async (id) => {
    if(id){
      let data = {
        id,
        status:"LEARNED"
      }
      const updateLearnedWord = await updateWords(data)
      console.log(updateLearnedWord)
    }
  }

  // Show Quiz Mode if active
  if (quizMode) {
    return <QuizMode onExit={() => setQuizMode(false)} quizData={quizData}/>;
  }

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
          <p className="text-primary">Expand your English vocabulary with interactive cards</p>
        </div>
        <div className="flex items-center gap-3">
          <GlassButton
            variant="outline"
            onClick={() => setQuizMode(!quizMode)}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Quiz Mode
          </GlassButton>
          <GlassButton
            variant="primary"
            onClick={() => setRefresh(true)}
          >
            <RefreshCcwDot className="h-4 w-4 mr-2" />
            Refresh
          </GlassButton>
        </div>
      </div>

      {/* Vocabulary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          ["Beginner", "Intermediate", "Advanced"].map((level)=>(vocabularyWords[level].map((vocab, index) => (
          <motion.div
            key={index}
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
                        vocab.level === "Advanced" 
                          ? "bg-red-500/20 text-red-300"
                          : "bg-yellow-500/20 text-yellow-300"
                      }`}>
                        {vocab.level}
                      </span>
                      
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        vocab.partsOfSpeech === "noun" 
                          ? "bg-red-500/20 text-red-300"
                          : "bg-yellow-500/20 text-yellow-300"
                      }`}>
                        {vocab.partsOfSpeech}
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
                            vocab.saved ? "fill-red-500 text-red-500" : "text-primary"
                          }`} 
                        />
                      </GlassButton>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground text-center uppercase">
                      {vocab.word} 
                      {vocab.phoneticsAudio && <GlassButton
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlayAudio(vocab.phoneticsAudio)
                        // Play pronunciation
                      }}
                    >
                      <Volume2 className="h-4 w-4"  />
                    </GlassButton>}
                    </h3>
                    <p className="text-md text-center">Pronounciation :{vocab.phoneticsText ? vocab.phoneticsText : "Not Available"}</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-primary mb-4">
                     Definition : {vocab.definitions ? vocab.definitions : "null"}
                    </p>
                    <p className="text-sm text-primary mb-4">
                     Example : {vocab.exampleSentence}
                    </p>
                    
                  </div>
                  <div className="text-right">
                     <GlassButton
                      variant={"outline"}
                      className="h-8"
                      onClick={() => handleLearnedWords(vocab.id)}
                    >
                      <CircleCheck className="h-4 w-4 mr-2" />
                        Mark as Learned
                    </GlassButton>
                  </div>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotateY-180 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{vocab.word}</h3>
                    <p className="text-foreground mb-4 font-medium">{vocab.definitions}</p>
                    <div className="p-3 glass-panel rounded-lg">
                      <p className="text-sm text-primary italic">"{vocab.example_Sentence}"</p>
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
        ))))
        }
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {wordsStatsData.map((stat, index) => (
          <GlassCard key={index} className="p-4 text-center">
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-primary">{stat.label}</p>
          </GlassCard>
        ))}
      </div>
    </motion.div>
  );
}