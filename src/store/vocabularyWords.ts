import { create } from "zustand";

export interface VocabularyWords {
  word: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  partsOfSpeech: string;
  phonetics_text?: string;
  phonetics_audio?: string;
  definitions: string;
  example_Sentence?: string;
  synonyms?: string[];
}

interface VocabularyWordsStore {
  wordsByLevel: {
    Beginner: VocabularyWords[];
    Intermediate: VocabularyWords[];
    Advanced: VocabularyWords[];
  };
  setWordsByLevel: (data: Partial<{
    Beginner: VocabularyWords[];
    Intermediate: VocabularyWords[];
    Advanced: VocabularyWords[];
  }>) => void;
  getWordsByLevel: () => {
    Beginner: VocabularyWords[];
    Intermediate: VocabularyWords[];
    Advanced: VocabularyWords[];
  };
}

const useVocabularyWordsStore = create<VocabularyWordsStore>((set, get) => ({
  wordsByLevel: {
    Beginner: [],
    Intermediate: [],
    Advanced: [],
  },
  setWordsByLevel: (data) => set((state) => ({
    wordsByLevel: { ...state.wordsByLevel, ...data }
  })),
  getWordsByLevel: () => get().wordsByLevel,
}));

export default useVocabularyWordsStore;
