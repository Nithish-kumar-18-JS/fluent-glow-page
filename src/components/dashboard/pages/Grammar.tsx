/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Heart, BookOpen, Volume2, RotateCcw, RefreshCcwDot, CircleCheck } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { motion } from "framer-motion";

export default function Grammar() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [grammarRules,setGrammarRules] = useState([
  // =====================
  // 🟢 BEGINNER LEVEL
  // =====================
  {
    id: 1,
    title: "Using 'am', 'is', 'are'",
    level: "Beginner",
    rule: "Used to describe yourself, people, and things in the present.",
    formula: "Subject + am/is/are + complement",
    example: "I am a student. She is tired. They are friends.",
    speakingTip: "Use contractions in speech — 'I’m', 'He’s', 'They’re'.",
    saved: false
  },
  {
    id: 2,
    title: "Talking About Daily Routines",
    level: "Beginner",
    rule: "Use simple present tense to describe habits or routines.",
    formula: "Subject + base verb (+s/es for he/she/it)",
    example: "I wake up at 7. She goes to work by bus.",
    speakingTip: "Add time expressions like 'every day', 'usually', 'in the morning'.",
    saved: false
  },
  {
    id: 3,
    title: "Talking About the Present Moment",
    level: "Beginner",
    rule: "Use present continuous for actions happening now.",
    formula: "am/is/are + verb-ing",
    example: "I’m watching TV. They’re cooking dinner.",
    speakingTip: "Use short answers in speech — 'Yeah, I am', 'No, I’m not'.",
    saved: false
  },
  {
    id: 4,
    title: "Asking Simple Questions",
    level: "Beginner",
    rule: "Use question words (who, what, where, when, why, how).",
    formula: "Wh + auxiliary + subject + verb",
    example: "Where do you live? What are you doing?",
    speakingTip: "Ask naturally — raise your tone at the end slightly.",
    saved: false
  },
  {
    id: 5,
    title: "Talking About the Past",
    level: "Beginner",
    rule: "Use simple past for completed actions.",
    formula: "Subject + past verb",
    example: "I watched a movie yesterday. He went to school.",
    speakingTip: "Use 'did' in questions: 'Did you go out?'",
    saved: false
  },
  {
    id: 6,
    title: "Expressing Likes and Dislikes",
    level: "Beginner",
    rule: "Use 'like', 'love', 'don’t like', 'hate' + verb-ing.",
    formula: "Subject + like/love/hate + verb-ing",
    example: "I like reading. She doesn’t like swimming.",
    speakingTip: "Add emotion: 'I really like it!' or 'I don’t like it at all!'",
    saved: false
  },
  {
    id: 7,
    title: "Giving and Asking for Opinions",
    level: "Beginner",
    rule: "Use 'I think', 'I believe', 'In my opinion' to express ideas.",
    formula: "I think + clause",
    example: "I think English is important.",
    speakingTip: "Practice agreeing/disagreeing: 'I agree', 'Not really'.",
    saved: false
  },
  {
    id: 8,
    title: "Making Requests and Offers",
    level: "Beginner",
    rule: "Use 'Can', 'Could', 'Would' for polite speech.",
    formula: "Can/Could/Would + you + base verb?",
    example: "Can you help me? Would you like some coffee?",
    speakingTip: "Be polite — smile, use 'please' and 'thank you'.",
    saved: false
  },

  // =====================
  // 🟡 INTERMEDIATE LEVEL
  // =====================
  {
    id: 9,
    title: "Talking About Experiences",
    level: "Intermediate",
    rule: "Use present perfect for life experiences.",
    formula: "have/has + past participle",
    example: "I’ve been to London. She’s never tried sushi.",
    speakingTip: "Use contractions — 'I’ve', 'She’s', 'We’ve'.",
    saved: false
  },
  {
    id: 10,
    title: "Future Plans and Intentions",
    level: "Intermediate",
    rule: "Use 'going to' for planned future actions.",
    formula: "am/is/are + going to + base verb",
    example: "I’m going to learn Spanish. They’re going to travel next month.",
    speakingTip: "You can also use 'gonna' in casual speech.",
    saved: false
  },
  {
    id: 11,
    title: "Talking About Abilities",
    level: "Intermediate",
    rule: "Use 'can', 'could', 'be able to' to express ability.",
    formula: "Subject + can/could/be able to + base verb",
    example: "I can drive. She could swim when she was five.",
    speakingTip: "In speech, say 'I’m able to' for polite emphasis.",
    saved: false
  },
  {
    id: 12,
    title: "Describing Situations",
    level: "Intermediate",
    rule: "Use 'there is/there are' and descriptive adjectives.",
    formula: "There is/are + noun + adjective",
    example: "There’s a big park near my house.",
    speakingTip: "Add fillers naturally: 'You know', 'like', 'I mean'.",
    saved: false
  },
  {
    id: 13,
    title: "Giving Suggestions and Advice",
    level: "Intermediate",
    rule: "Use 'should', 'ought to', 'had better' for advice.",
    formula: "You should + base verb",
    example: "You should eat more vegetables.",
    speakingTip: "Say gently: 'Maybe you could...' for softer tone.",
    saved: false
  },
  {
    id: 14,
    title: "Talking About Possibilities",
    level: "Intermediate",
    rule: "Use 'might', 'may', 'could' for uncertain situations.",
    formula: "Subject + might/may/could + base verb",
    example: "It might rain later. She could be tired.",
    speakingTip: "Don’t overuse 'maybe' — mix it with modal verbs.",
    saved: false
  },
  {
    id: 15,
    title: "Agreeing and Disagreeing",
    level: "Intermediate",
    rule: "Use phrases to express agreement or disagreement politely.",
    formula: "I agree / I don’t think so / That’s true / Not really",
    example: "A: It’s too cold today. B: I know, right!",
    speakingTip: "Use your tone to sound natural — not robotic.",
    saved: false
  },
  {
    id: 16,
    title: "Making Comparisons in Conversation",
    level: "Intermediate",
    rule: "Use 'as...as', 'more than', 'less than', 'the most'.",
    formula: "X is more/less + adj + than Y",
    example: "This coffee is better than that one.",
    speakingTip: "Use naturally — 'It’s way better', 'Not as good'.",
    saved: false
  },

  // =====================
  // 🔴 ADVANCED LEVEL
  // =====================
  {
    id: 17,
    title: "Polite & Indirect Speech",
    level: "Advanced",
    rule: "Use indirect forms to sound more polite in conversation.",
    formula: "I was wondering if... / Do you think you could...?",
    example: "I was wondering if you could send me the file.",
    speakingTip: "Use softer intonation to sound friendly.",
    saved: false
  },
  {
    id: 18,
    title: "Using Conditionals in Conversation",
    level: "Advanced",
    rule: "Use 'if' clauses for real and hypothetical situations.",
    formula: "If + clause, result clause",
    example: "If I were you, I’d take that job.",
    speakingTip: "In speech, shorten — 'If I were you, I’d...' (not 'I would').",
    saved: false
  },
  {
    id: 19,
    title: "Talking About Hypothetical Situations",
    level: "Advanced",
    rule: "Use would/could/might + base verb for imaginary cases.",
    formula: "If + past, would + base verb",
    example: "If I won the lottery, I’d travel the world.",
    speakingTip: "Say 'I’d' instead of 'I would' — sounds natural.",
    saved: false
  },
  {
    id: 20,
    title: "Using Emphasis in Speech",
    level: "Advanced",
    rule: "Use stress and emphatic structures for strong feelings.",
    formula: "do/does/did + base verb",
    example: "I *do* like your idea! She *did* tell you!",
    speakingTip: "Use tone and emotion — spoken English loves emphasis.",
    saved: false
  },
  {
    id: 21,
    title: "Connected Speech & Contractions",
    level: "Advanced",
    rule: "Native speakers join words and reduce sounds.",
    formula: "Wanna (want to), Gonna (going to), Gotta (got to)",
    example: "I’m gonna call you later. Whatcha doing?",
    speakingTip: "Learn rhythm and linking — record yourself!",
    saved: false
  },
  {
    id: 22,
    title: "Conversation Fillers and Pauses",
    level: "Advanced",
    rule: "Use natural fillers to sound fluent, not robotic.",
    formula: "like / you know / actually / basically / well",
    example: "Well, you know, it’s kind of hard to say.",
    speakingTip: "Don’t overuse them — keep it balanced.",
    saved: false
  },
  {
    id: 23,
    title: "Using Tag Questions Naturally",
    level: "Advanced",
    rule: "Used to confirm or check agreement in speech.",
    formula: "Statement + tag?",
    example: "You’ve met her before, haven’t you?",
    speakingTip: "Raise your tone if you’re not sure, fall if you expect 'yes'.",
    saved: false
  },
  {
    id: 24,
    title: "Softening Statements",
    level: "Advanced",
    rule: "Use modifiers to sound more polite or less direct.",
    formula: "a bit / kind of / sort of / maybe",
    example: "It’s kind of expensive. Maybe we should wait.",
    speakingTip: "Makes you sound natural, not too strong or rude.",
    saved: false
  },
  {
    id: 25,
    title: "Idioms & Expressions in Speech",
    level: "Advanced",
    rule: "Use common idioms to sound fluent and natural.",
    formula: "Idiomatic phrase + context",
    example: "Break the ice, hit the books, piece of cake.",
    speakingTip: "Use idioms only when you’re sure of their meaning.",
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
          <p className="text-muted-foreground">Master English grammar with interactive rule cards</p>
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
              className={`p-0 h-[450px] cursor-pointer transition-all duration-500 transform-gpu ${
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
                    <div className="p-3 bg-muted/50 rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground font-medium mb-2">Rule:</p>
                      <p className="text-sm text-foreground">{rule.rule}</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground font-medium mb-2">Formula:</p>
                      <p className="text-sm text-foreground italic">{rule.formula}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <GlassButton
                      variant="outline"
                      className="h-8"
                      onClick={(e) => {
                        e.stopPropagation();
                        // handleMarkLearned(rule.id);
                      }}
                    >
                      <CircleCheck className="h-4 w-4 mr-2" />
                        Practice
                    </GlassButton>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotateY-180 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{rule.title}</h3>
                    <p className="text-foreground mb-4 font-medium">{rule.rule}</p>
                    <div className="p-3 bg-muted/50 rounded-lg border border-border mb-3">
                      <p className="text-sm text-muted-foreground font-medium mb-2">Example:</p>
                      <p className="text-sm text-foreground italic">"{rule.example}"</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground font-medium mb-2">Formula:</p>
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
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </GlassCard>
        ))}
      </div>
    </motion.div>
  );
}
