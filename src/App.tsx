import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  RotateCcw,
  CheckCircle2,
  XCircle,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Settings,
  BookOpen,
  Trophy,
  History,
  Eye,
  EyeOff
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { vocabData, Word } from './vocab';

// --- TYPES ---
interface SRSData {
  level: number; // 0-5
  lastSeen?: number;
}

type Tab = 'home' | 'dictionary' | 'stats' | 'settings';

// --- HELPERS ---
const stripNikud = (text: string) => text.replace(/[\u0591-\u05C7]/g, '');

const getSRSBadge = (level: number) => {
  if (level === 0) return { label: 'New', color: 'bg-slate-600' };
  if (level >= 5) return { label: 'Mastered', color: 'bg-[#CCFF00] text-[#0C0C0E]' };
  return { label: `Level ${level}`, color: 'bg-[#8A2BE2]' };
};

export default function App() {
  // --- STATE ---
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [userProgress, setUserProgress] = useState<Record<string, SRSData>>(() => {
    const saved = localStorage.getItem('hebrew_srs_data');
    return saved ? JSON.parse(saved) : {};
  });
  const [selectedChapters, setSelectedChapters] = useState<string[]>([Object.keys(vocabData)[0]]);
  const [chapterMenuOpen, setChapterMenuOpen] = useState(false);
  const [activeWords, setActiveWords] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showNikud, setShowNikud] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sessionCorrect, setSessionCorrect] = useState(0);

  // --- HELPERS ---
  const formatChapter = (key: string) => key.replace('Ch ', 'Chapter ');

  const chapterSummary = selectedChapters.length === 0
    ? 'Select chapters...'
    : selectedChapters.length === 1
      ? formatChapter(selectedChapters[0])
      : `${selectedChapters.length} chapters selected`;

  const toggleChapter = (chap: string) => {
    if (chap === 'REVIEW') {
      setSelectedChapters(['REVIEW']);
      setChapterMenuOpen(false);
    } else {
      setSelectedChapters(prev => {
        const withoutReview = prev.filter(c => c !== 'REVIEW');
        if (withoutReview.includes(chap)) {
          return withoutReview.length > 1 ? withoutReview.filter(c => c !== chap) : withoutReview;
        }
        return [...withoutReview, chap];
      });
    }
  };

  // --- INITIALIZATION & EFFECTS ---
  useEffect(() => {
    if (selectedChapters.includes('REVIEW')) {
      const reviewWords = Object.values(vocabData)
        .flat()
        .filter(w => (userProgress[w.h]?.level || 0) < 5 && (userProgress[w.h]?.level || 0) > 0);
      setActiveWords(reviewWords.length > 0 ? reviewWords : []);
    } else {
      const words = selectedChapters.flatMap(chap => vocabData[chap] || []);
      setActiveWords([...words]);
    }
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [selectedChapters, userProgress]);

  useEffect(() => {
    localStorage.setItem('hebrew_srs_data', JSON.stringify(userProgress));
  }, [userProgress]);

  // --- LOGIC ---
  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (activeWords.length === 0) return;
    
    const word = activeWords[currentIndex];
    const prevData = userProgress[word.h] || { level: 0 };
    let newLevel = isCorrect ? Math.min(5, prevData.level + 1) : Math.max(0, prevData.level - 1);
    
    setUserProgress(prev => ({
      ...prev,
      [word.h]: { level: newLevel, lastSeen: Date.now() }
    }));

    if (isCorrect) {
      setSessionCorrect(s => s + 1);
      if (newLevel === 5) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#8B5CF6', '#D9F99D', '#FB7185']
        });
      }
    }

    // Move to next card
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex(prev => (prev + 1) % activeWords.length);
    }, 150);
  }, [activeWords, currentIndex, userProgress]);

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % (activeWords.length || 1));
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + activeWords.length) % (activeWords.length || 1));
  };

  const shuffleWords = () => {
    setActiveWords(prev => [...prev].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeTab !== 'home') return;
      if (e.code === 'Space') { e.preventDefault(); setIsFlipped(f => !f); }
      if (e.code === 'ArrowRight') nextCard();
      if (e.code === 'ArrowLeft') prevCard();
      if (e.code === 'KeyC') handleAnswer(true);
      if (e.code === 'KeyX') handleAnswer(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, handleAnswer]);

  // --- DERIVED ---
  const stats = useMemo(() => {
    const all = Object.values(vocabData).flat();
    const mastered = Object.values(userProgress).filter((p: SRSData) => p.level >= 5).length;
    return {
      total: all.length,
      mastered,
      percent: all.length > 0 ? Math.round((mastered / all.length) * 100) : 0
    };
  }, [userProgress]);

  const filteredSearch = useMemo(() => {
    if (!searchQuery) return [];
    const all = Object.values(vocabData).flat();
    return all.filter(w => 
      w.e.toLowerCase().includes(searchQuery.toLowerCase()) || 
      w.h.includes(searchQuery)
    ).slice(0, 10);
  }, [searchQuery]);

  const currentWord = activeWords[currentIndex];
  const srsData = currentWord ? (userProgress[currentWord.h] || { level: 0 }) : { level: 0 };
  const badge = getSRSBadge(srsData.level);

  // --- RENDER HELPERS ---
  const renderHome = () => (
    <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col lg:flex-row gap-8 items-start justify-center min-h-0">
        
        {/* LEFT SIDEBAR (Desktop Only) */}
        <div className="hidden lg:flex flex-col w-64 space-y-4 shrink-0">
          <motion.div className="vibrant-card p-6 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.05 }}>
             <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 mx-auto" style={{ background: 'rgba(204,255,0,0.12)', border: '1px solid rgba(204,255,0,0.25)', color: '#CCFF00' }}>
                <Trophy size={18} />
             </div>
             <h2 className="font-mono-tag text-slate-500 text-[10px] font-bold uppercase tracking-widest">Mastery</h2>
             <div className="flex items-baseline justify-center gap-2 mt-1">
               <span className="text-3xl font-grotesk font-black text-white">{stats.mastered}</span>
               <span className="text-slate-500 text-sm">/ {stats.total}</span>
             </div>
          </motion.div>

          <motion.div className="vibrant-card p-6 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
             <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 mx-auto" style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.2)', color: '#00E5FF' }}>
                <History size={18} />
             </div>
             <h2 className="font-mono-tag text-slate-500 text-[10px] font-bold uppercase tracking-widest">Today</h2>
             <div className="flex items-baseline justify-center gap-2 mt-1">
               <span className="text-3xl font-grotesk font-black text-white">{sessionCorrect}</span>
               <span className="text-slate-500 text-sm font-bold">words</span>
             </div>
          </motion.div>

          <motion.div className="vibrant-card p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.15 }}>
             <h3 className="font-mono-tag text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">Milestone</h3>
             <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden mb-2">
                <motion.div
                   initial={{ width: 0 }}
                   animate={{ width: `${stats.percent}%` }}
                   className="h-full progress-fill"
                />
             </div>
             <p className="font-mono-tag text-xs font-bold" style={{ color: '#00E5FF' }}>{stats.percent}%</p>
          </motion.div>
        </div>

        {/* CENTER COLUMN (Core Logic) */}
        <div className="flex-1 flex flex-col items-center gap-3 lg:gap-6 w-full max-w-md mx-auto min-h-0">
          
          {/* Mobile Settings Row */}
          <div className="w-full lg:hidden flex gap-2 items-center">
            <div className="flex-1 relative">
              <button
                onClick={() => setChapterMenuOpen(o => !o)}
                className="w-full flex items-center justify-between bg-slate-900 border-2 border-slate-800 rounded-xl px-3 py-2.5 text-sm font-black text-slate-200"
              >
                <span className="truncate text-left">{chapterSummary}</span>
                <ChevronDown size={14} className={`ml-2 shrink-0 transition-transform ${chapterMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {chapterMenuOpen && (
                <div className="absolute top-full mt-1 left-0 right-0 z-50 bg-slate-900 border-2 border-slate-800 rounded-xl shadow-2xl max-h-64 overflow-y-auto">
                  <label className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-800 cursor-pointer">
                    <input type="checkbox" checked={selectedChapters.includes('REVIEW')} onChange={() => toggleChapter('REVIEW')} className="accent-blue-500 w-4 h-4" />
                    <span className="text-sm font-black text-orange-400">🔥 Due for Review</span>
                  </label>
                  <div className="border-t border-slate-800" />
                  {Object.keys(vocabData).map(chap => (
                    <label key={chap} className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-800 cursor-pointer">
                      <input type="checkbox" checked={selectedChapters.includes(chap)} onChange={() => toggleChapter(chap)} className="accent-blue-500 w-4 h-4" />
                      <span className="text-sm font-black text-slate-200">{formatChapter(chap)}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={shuffleWords}
              className="bg-slate-900 border-2 border-slate-800 rounded-xl p-2.5 text-slate-400 shrink-0"
            >
              <RotateCcw size={16} />
            </button>
          </div>

          {/* 1. Flashcard Component (Prioritized at top for mobile) */}
          <div className="w-full relative flex-1 lg:flex-none lg:h-[380px] min-h-[200px] perspectiv-1000">
            {activeWords.length === 0 ? (
              <div className="absolute inset-0 vibrant-card border-dashed flex flex-col items-center justify-center text-center p-8 space-y-4">
                 <BookOpen size={48} className="text-slate-300" />
                 <p className="text-slate-400 font-black italic">No words here yet. Select a chapter to begin learning!</p>
              </div>
            ) : (
              <div
                className="absolute inset-0 preserve-3d cursor-pointer transition-transform duration-700 ease-in-out"
                style={{ transform: isFlipped ? 'rotateY(180deg)' : 'none' }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden w-full h-full vibrant-card flex flex-col items-center justify-center p-8">
                  <div className={`absolute top-6 right-8 px-4 py-1 rounded-full text-[10px] font-mono-tag font-bold uppercase tracking-widest ${badge.color}`}>
                    {badge.label}
                  </div>
                  <h1 className="text-8xl font-black text-white leading-none font-hebrew drop-shadow-sm" dir="rtl">
                    {showNikud ? currentWord.h : stripNikud(currentWord.h)}
                  </h1>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 backface-hidden w-full h-full vibrant-card p-8 flex flex-col items-center justify-center text-center rotate-y-180" style={{ borderColor: 'rgba(0,229,255,0.2)' }}>
                   <span className="font-mono-tag font-bold uppercase tracking-[0.2em] text-[10px] mb-2 px-3 py-1 rounded-full" style={{ color: '#00E5FF', background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.2)' }}>
                     {currentWord.c}
                   </span>
                   <h2 className="text-6xl font-grotesk font-black text-white mb-4 tracking-tight">
                     {currentWord.e}
                   </h2>
                   {currentWord.v && (
                     <div className="mt-4 p-5 rounded-[20px] max-w-sm mx-auto" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <p className="text-slate-400 text-sm italic font-bold leading-relaxed">
                          "{currentWord.v}"
                        </p>
                     </div>
                   )}
                </div>
              </div>
            )}
          </div>

          {/* 2. Actions (Directly under card) */}
          <div className="w-full flex gap-4">
            <button
              onClick={(e) => { e.stopPropagation(); handleAnswer(false); }}
              className="flex-1 py-4 rounded-2xl flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed text-white cursor-pointer"
              style={{ background: '#FF4D6D', boxShadow: '4px 4px 0px #C0003A' }}
              onMouseEnter={e => { if (!(e.currentTarget as HTMLButtonElement).disabled) { e.currentTarget.style.transform='translate(-2px,-2px)'; e.currentTarget.style.boxShadow='6px 6px 0px #C0003A'; }}}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='4px 4px 0px #C0003A'; }}
              disabled={activeWords.length === 0 || !isFlipped}
            >
              <XCircle size={22} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleAnswer(true); }}
              className="flex-1 py-4 rounded-2xl flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed text-[#0C0C0E] cursor-pointer"
              style={{ background: '#00C853', boxShadow: '4px 4px 0px #007B33' }}
              onMouseEnter={e => { if (!(e.currentTarget as HTMLButtonElement).disabled) { e.currentTarget.style.transform='translate(-2px,-2px)'; e.currentTarget.style.boxShadow='6px 6px 0px #007B33'; }}}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='4px 4px 0px #007B33'; }}
              disabled={activeWords.length === 0 || !isFlipped}
            >
              <CheckCircle2 size={22} />
            </button>
          </div>

          {/* 3. Navigation Buttons (Directly under actions) */}
          <div className="w-full flex justify-between px-4 text-slate-400 font-black text-[10px] uppercase tracking-widest">
            <button onClick={prevCard} className="flex items-center gap-2 hover:text-blue-600 transition-colors disabled:opacity-30 p-2" disabled={activeWords.length === 0}>
               <div className="w-10 h-10 rounded-2xl flex items-center justify-center vibrant-card shadow-sm"><ChevronLeft size={18} /></div>
               Prev
            </button>
            <button onClick={nextCard} className="flex items-center gap-2 hover:text-blue-600 transition-colors disabled:opacity-30 p-2" disabled={activeWords.length === 0}>
               Next 
               <div className="w-10 h-10 rounded-2xl flex items-center justify-center vibrant-card shadow-sm"><ChevronRight size={18} /></div>
            </button>
          </div>

        </div>

        {/* RIGHT SIDEBAR (Desktop Only) */}
        <div className="hidden lg:flex flex-col w-64 space-y-6 shrink-0">
          <div className="vibrant-card p-6 border-slate-200 dark:border-slate-800/60 space-y-4 outline outline-4 outline-black/5 dark:outline-white/5">
            
            <div className="space-y-2">
              <label className="text-[11px] text-slate-500 dark:text-slate-400 font-black uppercase tracking-wider block ml-1">Chapter Selection</label>
              <div className="relative">
                <button
                  onClick={() => setChapterMenuOpen(o => !o)}
                  className="w-full flex items-center justify-between bg-slate-50 dark:bg-slate-900/80 border-2 border-slate-100 dark:border-slate-800 rounded-xl px-4 py-3 text-sm font-black text-slate-800 dark:text-slate-200 shadow-sm"
                >
                  <span className="truncate text-left">{chapterSummary}</span>
                  <ChevronDown size={14} className={`ml-2 shrink-0 transition-transform ${chapterMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {chapterMenuOpen && (
                  <div className="absolute top-full mt-1 left-0 right-0 z-50 bg-slate-900 border-2 border-slate-800 rounded-xl shadow-2xl max-h-64 overflow-y-auto">
                    <label className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-800 cursor-pointer">
                      <input type="checkbox" checked={selectedChapters.includes('REVIEW')} onChange={() => toggleChapter('REVIEW')} className="accent-blue-500 w-4 h-4" />
                      <span className="text-sm font-black text-orange-400">🔥 Due for Review</span>
                    </label>
                    <div className="border-t border-slate-800" />
                    {Object.keys(vocabData).map(chap => (
                      <label key={chap} className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-800 cursor-pointer">
                        <input type="checkbox" checked={selectedChapters.includes(chap)} onChange={() => toggleChapter(chap)} className="accent-blue-500 w-4 h-4" />
                        <span className="text-sm font-black text-slate-200">{formatChapter(chap)}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={shuffleWords}
              className="w-full flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-mono-tag font-bold transition-all"
              style={{ background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.2)', color: '#00E5FF' }}
            >
              <RotateCcw size={16} /> Shuffle Queue
            </button>
          </div>
        </div>

    </div>
  );

  const renderDictionary = () => (
    <div className="w-full max-w-2xl mx-auto space-y-6">
       <div className="w-full relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search size={18} className="text-slate-400 dark:text-slate-500" />
        </div>
        <input 
          autoFocus
          type="text"
          placeholder="Search for a word (e.g. 'King' or 'מלך')..."
          className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors shadow-sm text-slate-900 dark:text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {filteredSearch.length === 0 && searchQuery ? (
          <div className="text-center py-12 text-slate-400 dark:text-slate-600 italic font-bold">No matches found for "{searchQuery}"</div>
        ) : (
          filteredSearch.map((w) => (
            <div 
              key={w.h}
              className="vibrant-card rounded-3xl p-5 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              onClick={() => {
                const chapterKey = Object.keys(vocabData).find(chap => vocabData[chap].some(word => word.h === w.h));
                if (chapterKey) {
                  setSelectedChapters([chapterKey]);
                  const wordsInChapter = vocabData[chapterKey];
                  const index = wordsInChapter.findIndex(word => word.h === w.h);
                  setActiveWords([...wordsInChapter]);
                  setCurrentIndex(index);
                  setActiveTab('home');
                  setSearchQuery('');
                }
              }}
            >
              <div>
                <h3 className="text-4xl font-hebrew text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" dir="rtl">{w.h}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">{w.e}</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-all">
                <ChevronRight size={20} />
              </div>
            </div>
          ))
        )}
      </div>

      {!searchQuery && (
        <div className="text-center py-12 text-slate-300 space-y-4">
           <BookOpen className="mx-auto opacity-20" size={64} />
           <p className="text-[10px] font-black uppercase tracking-[0.2em]">Type to search the lexicon</p>
        </div>
      )}
    </div>
  );

  const renderStats = () => (
    <div className="w-full max-w-3xl mx-auto space-y-8">
       <div className="text-center space-y-2">
          <h2 className="text-5xl font-black bg-gradient-to-br from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent tracking-tighter">Learning Journey</h2>
          <p className="text-slate-500 dark:text-slate-400 font-bold italic">Level up your Biblical Hebrew skills!</p>
       </div>

       <div className="grid grid-cols-2 gap-4">
          <div className="vibrant-card p-6 space-y-2">
             <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800">
                <Trophy size={20} />
             </div>
             <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.15em]">Mastered</p>
             <p className="text-4xl font-black text-slate-800 dark:text-white tracking-tighter">{stats.mastered}</p>
          </div>
          <div className="vibrant-card p-6 space-y-2">
             <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <History size={20} />
             </div>
             <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.15em]">Words Today</p>
             <p className="text-4xl font-black text-slate-800 dark:text-white tracking-tighter">{sessionCorrect}</p>
          </div>
       </div>

       <div className="vibrant-card p-8 space-y-6 border-blue-100 dark:border-blue-900 outline outline-8 outline-blue-50/50 dark:outline-blue-900/10">
          <div className="flex justify-between items-center">
             <h3 className="font-black text-xl tracking-tighter text-slate-800 dark:text-white">Overall Progress</h3>
             <span className="text-blue-600 dark:text-blue-400 font-black bg-blue-50 dark:bg-blue-900/30 px-4 py-1.5 rounded-full border-2 border-blue-100 dark:border-blue-800">{stats.percent}%</span>
          </div>
          <div className="w-full h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border-2 border-slate-50 dark:border-slate-800/50">
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: `${stats.percent}%` }}
               className="h-full progress-fill"
             />
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-bold italic">
            You've smashed <span className="font-black text-blue-600 dark:text-blue-400 not-italic">{stats.mastered}</span> out of <span className="font-black text-slate-800 dark:text-white not-italic">{stats.total}</span> words. Keep it up, legend!
          </p>
       </div>

       <button 
         onClick={() => {
           if (confirm('Are you sure you want to reset all progress?')) {
             setUserProgress({});
             localStorage.removeItem('hebrew_srs_data');
             setSessionCorrect(0);
           }
         }}
         className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:text-red-500 hover:border-red-500 transition-all flex items-center justify-center gap-2"
       >
         <Settings size={14} /> Reset Training Data
       </button>
    </div>
  );

  const renderSettings = () => (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="vibrant-card p-6 space-y-4">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Display</h3>
        <button
          onClick={() => setShowNikud(!showNikud)}
          className="w-full flex items-center justify-between bg-slate-900/80 border-2 border-slate-800 rounded-xl px-4 py-4 hover:bg-slate-800 transition-colors"
        >
          <div className="text-left">
            <p className="text-sm font-black text-slate-200">Nikud (Vowels)</p>
            <p className="text-xs text-slate-500 font-bold mt-0.5">Show vowel markings on Hebrew text</p>
          </div>
          {showNikud
            ? <Eye size={20} className="text-blue-400 shrink-0" />
            : <EyeOff size={20} className="text-slate-600 shrink-0" />}
        </button>
      </div>

      <div className="vibrant-card p-6 space-y-4">
        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Keyboard Controls</h3>
        <ul className="space-y-3">
          {([
            ['Space', 'Flip card'],
            ['← →', 'Navigate cards'],
            ['C', 'Mark correct'],
            ['X', 'Mark for review'],
          ] as [string, string][]).map(([key, desc]) => (
            <li key={key} className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-400">{desc}</span>
              <kbd className="px-3 py-1 bg-slate-800 border-2 border-slate-700 rounded-lg text-xs font-black text-slate-300">{key}</kbd>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen dark text-slate-100 font-sans selection:bg-blue-500/20 overflow-x-hidden flex flex-col">
      <div className="max-w-6xl mx-auto px-4 py-8 pb-32 flex-1 flex flex-col w-full">
        <header className="flex justify-between items-center mb-10 px-2 lg:px-4">
          <div className="flex items-center gap-5">
             <div className="w-14 h-14 bg-gradient-to-br from-[#8A2BE2] to-[#00E5FF] rounded-3xl flex items-center justify-center font-black text-3xl text-white border-t border-white/20">
                א
             </div>
             <div>
                <h1 className="text-3xl font-grotesk font-black tracking-tight bg-gradient-to-r from-[#8A2BE2] to-[#00E5FF] bg-clip-text text-transparent">HEBREW PRO</h1>
                <p className="font-mono-tag text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-0.5">Biblical Training</p>
             </div>
          </div>
          <div className="flex gap-2">
             <button 
                onClick={() => setActiveTab('stats')}
                className="p-3 bg-[var(--card-bg)] border-2 border-[var(--card-border)] rounded-2xl hover:bg-slate-800 transition-colors group shadow-sm backdrop-blur-sm"
             >
                <Trophy size={22} className="text-orange-500 group-hover:scale-110 transition-transform" />
             </button>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.main
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex-1 flex flex-col min-h-0"
          >
            {activeTab === 'home' && renderHome()}
            {activeTab === 'dictionary' && renderDictionary()}
            {activeTab === 'stats' && renderStats()}
            {activeTab === 'settings' && renderSettings()}
          </motion.main>
        </AnimatePresence>
      </div>

      {chapterMenuOpen && <div className="fixed inset-0 z-40" onClick={() => setChapterMenuOpen(false)} />}

      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50">
        <div className="bg-[#1A1A1E] border border-white/5 rounded-[40px] px-8 py-5 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
           <button 
             onClick={() => setActiveTab('home')}
             className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === 'home' ? 'text-[#00E5FF] scale-110' : 'text-slate-500 hover:text-slate-300'}`}
           >
              <BookOpen size={26} strokeWidth={2.5} />
              <span className="text-[10px] font-black uppercase tracking-widest">Learn</span>
           </button>
           <button 
             onClick={() => setActiveTab('dictionary')}
             className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === 'dictionary' ? 'text-[#00E5FF] scale-110' : 'text-slate-500 hover:text-slate-300'}`}
           >
              <Search size={26} strokeWidth={2.5} />
              <span className="text-[10px] font-black uppercase tracking-widest">Lexicon</span>
           </button>
           <button
             onClick={() => setActiveTab('stats')}
             className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === 'stats' ? 'text-[#00E5FF] scale-110' : 'text-slate-500 hover:text-slate-300'}`}
           >
              <Trophy size={26} strokeWidth={2.5} />
              <span className="text-[10px] font-black uppercase tracking-widest">Stats</span>
           </button>
           <button
             onClick={() => setActiveTab('settings')}
             className={`flex flex-col items-center gap-1.5 transition-all ${activeTab === 'settings' ? 'text-[#00E5FF] scale-110' : 'text-slate-500 hover:text-slate-300'}`}
           >
              <Settings size={26} strokeWidth={2.5} />
              <span className="text-[10px] font-black uppercase tracking-widest">Settings</span>
           </button>
        </div>
      </nav>

      <style>{`
        /* Modern styling overrides */
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .perspectiv-1000 { perspective: 1000px; }
      `}</style>
    </div>
  );
}
