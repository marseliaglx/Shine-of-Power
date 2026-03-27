/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Crown, 
  BookOpen, 
  ChevronRight, 
  Scroll, 
  Sparkles, 
  Zap, 
  Target, 
  MessageSquare, 
  ShieldAlert, 
  Hourglass, 
  Layout, 
  Menu, 
  X, 
  Quote, 
  Sword, 
  Wand2, 
  Flame, 
  Skull, 
  Compass, 
  RotateCcw, 
  Star,
  ChevronLeft
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import confetti from 'canvas-confetti';
import { FRAMEWORKS } from './constants';
import { AppView, Framework } from './types';

interface QuestCardProps {
  quest: Framework;
  idx: number;
  isCompleted: boolean;
  onClick: () => void;
  key?: number | string;
}

function QuestCard({ quest, idx, isCompleted, onClick }: QuestCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty('--x', `${x}%`);
    cardRef.current.style.setProperty('--y', `${y}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className="arcane-card p-10 group cursor-pointer relative overflow-hidden"
    >
      <div className="arcane-card-glow" />
      <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
        <Star className="w-40 h-40 text-mystic" />
      </div>
      <div className="relative z-10">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
          <Scroll className="w-12 h-12" />
        </div>
        
        <div className="flex justify-between items-start mb-8">
          <span className="font-mono text-[10px] opacity-30">SCROLL 0{idx + 1}</span>
          {isCompleted && (
            <div className="bg-mystic/20 p-1 rounded-full">
              <Sparkles className="w-4 h-4 text-mystic" />
            </div>
          )}
        </div>
        
        <h3 className="text-2xl font-display mb-4 group-hover:text-mystic transition-colors uppercase tracking-wider">{quest.title}</h3>
        <p className="text-[11px] opacity-40 mb-10 leading-relaxed uppercase tracking-widest line-clamp-2 font-sans">{quest.summary}</p>
        
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-micro opacity-30 font-sans mb-1">{quest.category}</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-mystic font-bold">{quest.xp} XP</span>
              <Zap className="w-4 h-4 text-mystic" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-mystic opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
            <span className="text-[10px] font-bold uppercase tracking-widest">Begin Quest</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [view, setView] = useState<AppView>('home');
  const [selectedQuest, setSelectedQuest] = useState<Framework | null>(null);
  const [dailyQuest, setDailyQuest] = useState<Framework | null>(null);
  const [completedQuests, setCompletedQuests] = useState<number[]>([]);
  const [totalXP, setTotalXP] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizResult, setQuizResult] = useState<'correct' | 'incorrect' | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Initialize daily quest
  useEffect(() => {
    const randomQuest = FRAMEWORKS[Math.floor(Math.random() * FRAMEWORKS.length)];
    setDailyQuest(randomQuest);
  }, []);

  const getNewQuest = useCallback(() => {
    const randomQuest = FRAMEWORKS[Math.floor(Math.random() * FRAMEWORKS.length)];
    setDailyQuest(randomQuest);
    setView('home');
    window.scrollTo(0, 0);
  }, []);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('wisdom-quest-progress');
    if (saved) {
      const { completed, xp } = JSON.parse(saved);
      setCompletedQuests(completed || []);
      setTotalXP(xp || 0);
    }
  }, []);

  // Save progress
  useEffect(() => {
    localStorage.setItem('wisdom-quest-progress', JSON.stringify({
      completed: completedQuests,
      xp: totalXP
    }));
  }, [completedQuests, totalXP]);

  const handleStartQuest = (quest: Framework) => {
    setSelectedQuest(quest);
    setView('quest-detail');
    window.scrollTo(0, 0);
  };

  const openArchive = () => {
    setActiveCategory('All');
    setView('quest-list');
    window.scrollTo(0, 0);
  };

  const handleCompleteQuest = () => {
    if (selectedQuest && !completedQuests.includes(selectedQuest.id)) {
      setCompletedQuests([...completedQuests, selectedQuest.id]);
      setTotalXP(totalXP + selectedQuest.xp);
      
      // Magical confetti
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, colors: ['#FF2D95', '#7C3AED', '#D946EF'] };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
    }
    setView('success');
  };

  const handleQuizSubmit = (index: number) => {
    setQuizAnswer(index);
    if (selectedQuest && index === selectedQuest.quiz.correctIndex) {
      setQuizResult('correct');
      setTimeout(() => handleCompleteQuest(), 1500);
    } else {
      setQuizResult('incorrect');
    }
  };

  const downloadPDF = (quest: Framework) => {
    const doc = new jsPDF();
    
    // RPG Style PDF
    doc.setFillColor(15, 1, 20);
    doc.rect(0, 0, 210, 297, 'F');
    
    doc.setTextColor(255, 45, 149);
    doc.setFontSize(26);
    doc.text(quest.title.toUpperCase(), 105, 30, { align: 'center' });
    
    doc.setDrawColor(255, 45, 149);
    doc.setLineWidth(0.5);
    doc.line(40, 35, 170, 35);
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.text(`CATEGORY: ${quest.category.toUpperCase()}`, 105, 45, { align: 'center' });
    doc.text(`XP REWARD: ${quest.xp}`, 105, 52, { align: 'center' });
    
    doc.setTextColor(255, 45, 149);
    doc.setFontSize(18);
    doc.text("THE ARCANE CONCEPT", 20, 75);
    
    doc.setTextColor(200, 200, 200);
    doc.setFontSize(11);
    const conceptLines = doc.splitTextToSize(quest.concept, 170);
    doc.text(conceptLines, 20, 85);
    
    doc.setTextColor(255, 45, 149);
    doc.setFontSize(18);
    doc.text("MANIFESTATION IN REALITY", 20, 130);
    
    doc.setTextColor(200, 200, 200);
    doc.setFontSize(11);
    const realityLines = doc.splitTextToSize(quest.reality, 170);
    doc.text(realityLines, 20, 140);
    
    doc.setTextColor(255, 45, 149);
    doc.setFontSize(16);
    doc.text("THE ULTIMATE WISDOM", 105, 200, { align: 'center' });
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13);
    const takeawayLines = doc.splitTextToSize(`"${quest.quiz.takeaway}"`, 150);
    doc.text(takeawayLines, 105, 215, { align: 'center' });
    
    doc.save(`Scroll_of_${quest.title.replace(/\s+/g, '_')}.pdf`);
  };

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(FRAMEWORKS.map(f => f.category)))];
  }, []);

  const filteredQuests = useMemo(() => {
    if (!activeCategory || activeCategory === 'All') return FRAMEWORKS;
    return FRAMEWORKS.filter(q => q.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-void text-white/90 font-sans selection:bg-mystic selection:text-void relative overflow-x-hidden">
      {/* Mystical Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-arcane/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-mystic/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="mystic-mist" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-void/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setView('home')}
          >
            <div className="w-10 h-10 bg-mystic rounded-sm flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(255,45,149,0.3)]">
              <Wand2 className="text-void w-6 h-6" />
            </div>
            <span className="text-xl font-display text-mystic tracking-widest uppercase">Shrine of <span className="font-black">Power</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <button onClick={openArchive} className="flex items-center gap-2 text-micro opacity-50 hover:opacity-100 transition-opacity">
              <BookOpen className="w-4 h-4" /> The Archive
            </button>
            <div className="flex items-center gap-4 bg-white/5 px-5 py-2 border border-white/10 rounded-full">
              <Star className="w-4 h-4 text-mystic fill-mystic/20" />
              <span className="text-[11px] font-bold tabular-nums tracking-widest text-mystic">{totalXP} XP</span>
            </div>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <main className="pt-20">
        <AnimatePresence mode="wait">
          {view === 'home' && dailyQuest && (
            <motion.section 
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden"
            >
              {/* Magical Background Elements */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-arcane/5 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-mystic/5 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-arcane/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                
                {/* Floating Particles */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ 
                      x: Math.random() * 100 + "%", 
                      y: Math.random() * 100 + "%",
                      opacity: Math.random() * 0.5
                    }}
                    animate={{ 
                      y: ["-10%", "110%"],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{ 
                      duration: 10 + Math.random() * 20, 
                      repeat: Infinity,
                      delay: Math.random() * 10,
                      ease: "linear"
                    }}
                    className="absolute w-1 h-1 bg-mystic rounded-full blur-[1px]"
                  />
                ))}
              </div>

              <div className="relative z-10 text-center max-w-4xl">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8 flex justify-center"
                >
                  <div className="p-4 bg-mystic/10 border border-mystic/20 rounded-full">
                    <Flame className="w-8 h-8 text-mystic animate-pulse" />
                  </div>
                </motion.div>

                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-[8vw] md:text-[5vw] font-display leading-[1.1] mb-12 max-w-4xl mx-auto tracking-widest uppercase text-glow-mystic"
                >
                  AI is <span className="italic text-mystic text-glow-mystic">leveling up</span>, are you? <br />
                  <span className="text-[4vw] md:text-[2.5vw] opacity-60">Take a quest to level up your human skills.</span>
                </motion.h1>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="arcane-card p-10 md:p-16 max-w-2xl mx-auto mb-12 relative group"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-mystic/30" />
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-mystic/30" />
                  
                  <span className="text-micro text-mystic/60 mb-6 block font-sans">Wisdom of the Day</span>
                  <h2 className="text-4xl md:text-5xl mb-6 font-display uppercase tracking-wider">{dailyQuest.title}</h2>
                  <p className="text-sm opacity-60 leading-relaxed uppercase tracking-[0.2em] mb-10 font-sans">
                    {dailyQuest.summary}
                  </p>
                  
                  <div className="flex items-center justify-center gap-6 mb-10">
                    <div className="flex items-center gap-2 text-micro opacity-40">
                      <Hourglass className="w-3 h-3" /> 4 MIN TRIAL
                    </div>
                    <div className="w-1 h-1 bg-white/20 rounded-full" />
                    <div className="flex items-center gap-2 text-micro text-mystic">
                      <Star className="w-3 h-3" /> {dailyQuest.xp} XP
                    </div>
                  </div>

                  <button 
                    onClick={() => handleStartQuest(dailyQuest)}
                    className="btn-arcane w-full py-6 text-[12px]"
                  >
                    Accept the Quest
                  </button>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center gap-8"
                >
                  <button 
                    onClick={getNewQuest}
                    className="flex items-center gap-2 text-micro opacity-40 hover:opacity-100 transition-opacity"
                  >
                    <RotateCcw className="w-3 h-3" /> Scry for another quest
                  </button>
                  
                  <div className="flex gap-6 mt-8">
                    <button 
                      onClick={openArchive}
                      className="px-8 py-3 bg-white/5 border border-white/10 text-micro hover:bg-white/10 transition-colors flex items-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" /> The Archive
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {view === 'quest-list' && (
            <motion.section 
              key="quest-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto px-6 py-24"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                <div className="max-w-2xl">
                  <button 
                    onClick={() => setView('home')}
                    className="flex items-center gap-2 text-micro opacity-40 hover:opacity-100 transition-opacity mb-6"
                  >
                    <ChevronLeft className="w-3 h-3" /> Return to the Shrine
                  </button>
                  <h2 className="text-6xl md:text-7xl font-display text-mystic mb-6 uppercase tracking-widest">The Great <span className="font-black text-white">Archive</span></h2>
                  <p className="opacity-40 text-sm leading-relaxed uppercase tracking-widest font-sans">A repository of all known wisdom. Complete the trials to earn your XP.</p>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                  {categories.map(cat => (
                    <button 
                      key={cat} 
                      onClick={() => setActiveCategory(cat)}
                      className={`whitespace-nowrap px-6 py-3 border text-micro transition-all rounded-full ${
                        (activeCategory === cat || (!activeCategory && cat === 'All'))
                          ? 'bg-mystic/10 border-mystic text-mystic opacity-100' 
                          : 'bg-white/5 border-white/10 opacity-50 hover:opacity-100 hover:border-mystic/30'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredQuests.length > 0 ? (
                  filteredQuests.map((quest, idx) => (
                    <QuestCard 
                      key={quest.id} 
                      quest={quest} 
                      idx={idx} 
                      isCompleted={completedQuests.includes(quest.id)}
                      onClick={() => handleStartQuest(quest)}
                    />
                  ))
                ) : (
                  <div className="col-span-full py-24 text-center">
                    <p className="text-xl font-serif italic opacity-40">No scrolls found in this category.</p>
                  </div>
                )}
              </div>
            </motion.section>
          )}

          {view === 'quest-detail' && selectedQuest && (
            <motion.section 
              key="quest-detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-6xl mx-auto px-6 py-24"
            >
              {/* Progress Indicator */}
              <div className="flex justify-center mb-20">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-mystic flex items-center justify-center text-void font-bold shadow-[0_0_20px_rgba(255,45,149,0.5)]">1</div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-mystic">Study</span>
                  </div>
                  <div className="w-16 h-px bg-white/10" />
                  <div className="flex flex-col items-center gap-2 opacity-30">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-bold">2</div>
                    <span className="text-[9px] uppercase tracking-widest font-bold">Trial</span>
                  </div>
                  <div className="w-16 h-px bg-white/10" />
                  <div className="flex flex-col items-center gap-2 opacity-30">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-bold">3</div>
                    <span className="text-[9px] uppercase tracking-widest font-bold">Mastery</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setView('home')}
                className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity mb-16 text-micro"
              >
                <ChevronLeft className="w-4 h-4" /> Abandon Quest
              </button>

              <div className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-mystic text-micro">Quest 0{selectedQuest.id}</span>
                  <div className="h-px w-12 bg-mystic/20" />
                  <span className="text-micro opacity-40">{selectedQuest.category}</span>
                </div>
                <h2 className="text-[8vw] md:text-[6vw] font-display leading-[0.9] mb-10 uppercase tracking-tighter">
                  {selectedQuest.title}
                </h2>
                <p className="text-xl md:text-2xl opacity-60 max-w-3xl leading-relaxed uppercase tracking-[0.15em] font-sans">
                  {selectedQuest.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-7 space-y-24">
                  <div className="arcane-card p-12 md:p-16 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-mystic shadow-[0_0_20px_rgba(255,45,149,0.5)]" />
                    <div className="flex items-center justify-between mb-12 relative z-10">
                      <div className="flex flex-col gap-2">
                        <h4 className="text-micro text-mystic flex items-center gap-2 font-sans uppercase tracking-[0.3em] font-bold">
                          <BookOpen className="w-4 h-4" /> The Sacred Knowledge
                        </h4>
                        <span className="text-[10px] opacity-40 uppercase tracking-widest font-bold">Phase 1: Deep Study</span>
                      </div>
                      <div className="flex items-center gap-3 bg-mystic/10 px-4 py-2 rounded-full border border-mystic/20">
                        <div className="w-2 h-2 rounded-full bg-mystic animate-pulse" />
                        <span className="text-[10px] text-mystic font-bold uppercase tracking-widest">Step 1: Learn</span>
                      </div>
                    </div>
                    
                    <div className="relative mb-16 z-10">
                      <Quote className="absolute -top-10 -left-10 w-24 h-24 text-mystic opacity-5" />
                      <h3 className="text-micro opacity-30 uppercase tracking-[0.2em] mb-6 font-bold">The Core Principle</h3>
                      <p className="text-3xl md:text-5xl leading-[1.4] text-white font-serif italic">
                        {selectedQuest.concept}
                      </p>
                    </div>

                    <div className="p-8 bg-mystic/5 border border-mystic/10 rounded-sm relative overflow-hidden z-10">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Sparkles className="w-12 h-12 text-mystic" />
                      </div>
                      <p className="text-sm opacity-60 uppercase tracking-widest leading-loose max-w-2xl">
                        Absorb this arcane wisdom. This concept is the foundation of your mastery. Once internalized, proceed to the <span className="text-mystic font-bold">Knowledge Quiz</span> to prove your understanding.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="aspect-[4/5] arcane-card overflow-hidden group flex items-center justify-center relative bg-void/50">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,45,149,0.15)_0%,transparent_50%)]" />
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ 
                          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="relative z-10"
                      >
                        <Wand2 className="w-24 h-24 text-mystic opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 blur-2xl bg-mystic/20 rounded-full animate-pulse" />
                        
                        {/* Orbiting Sparkles */}
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              rotate: [i * 90, i * 90 + 360],
                            }}
                            transition={{ 
                              duration: 5 + i, 
                              repeat: Infinity, 
                              ease: "linear" 
                            }}
                            className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2"
                          >
                            <Sparkles className="w-3 h-3 text-mystic absolute top-0 left-1/2 -translate-x-1/2" />
                          </motion.div>
                        ))}
                      </motion.div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="h-px w-full bg-mystic/20 mb-2" />
                        <span className="text-[10px] font-mono text-mystic/40 uppercase tracking-widest">Arcane Relic Detected</span>
                      </div>
                    </div>
                    <div className="arcane-card p-10 flex flex-col justify-center relative overflow-hidden bg-mystic/5 border-mystic/20">
                      <div className="absolute top-0 right-0 p-6 opacity-5">
                        <Scroll className="w-32 h-32 text-mystic" />
                      </div>
                      
                      <div className="flex items-center justify-between mb-10 relative z-10">
                        <div className="flex flex-col gap-2">
                          <h4 className="text-micro text-mystic flex items-center gap-2 font-sans uppercase tracking-[0.2em] font-bold">
                            <Scroll className="w-4 h-4" /> Manifestation in Reality
                          </h4>
                          <span className="text-[10px] opacity-50 uppercase tracking-widest font-bold">Bridging Theory & Reality</span>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-mystic/30 flex items-center justify-center bg-mystic/10 shadow-[0_0_15px_rgba(255,45,149,0.2)]">
                          <Zap className="w-5 h-5 text-mystic" />
                        </div>
                      </div>
                      
                      <div className="space-y-8 relative z-10">
                        <div className="flex gap-6">
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-mystic/40" />
                            <div className="w-px h-full bg-gradient-to-b from-mystic/40 to-transparent" />
                          </div>
                          <div className="pb-4">
                            <span className="text-[9px] uppercase tracking-widest font-bold text-mystic/60 mb-3 block">The Core Wisdom</span>
                            <p className="text-sm opacity-60 leading-relaxed font-serif italic">“{selectedQuest.summary}”</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-6">
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full border border-mystic flex items-center justify-center text-[12px] text-mystic font-bold shadow-[0_0_10px_rgba(255,45,149,0.3)]">
                              <ChevronRight className="w-4 h-4" />
                            </div>
                          </div>
                          <div className="flex-1 bg-void/40 p-8 rounded-sm border border-white/5 relative group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-mystic/40" />
                            <span className="text-[9px] uppercase tracking-widest font-bold text-mystic mb-4 block">Real-World Application</span>
                            <div className="text-xl leading-relaxed text-white/90 font-serif">
                              {selectedQuest.reality.split('\n').map((para, i) => (
                                <p key={i} className="mb-4 last:mb-0">
                                  {para}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="sticky top-28 space-y-8">
                    <div className="arcane-card p-10 grid-visible relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Target className="w-24 h-24 text-mystic" />
                      </div>
                      
                      <div className="flex items-center justify-between mb-10 relative z-10">
                        <div className="flex flex-col gap-2">
                          <h5 className="text-micro opacity-30 uppercase tracking-[0.2em] font-bold">Trial Requirements</h5>
                          <span className="text-[10px] bg-mystic/10 text-mystic px-3 py-1 rounded-full font-bold uppercase tracking-widest">Step 2: Prove Mastery</span>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-mystic/20 flex items-center justify-center bg-void/50">
                          <Sword className="w-4 h-4 text-mystic" />
                        </div>
                      </div>
                      
                      {/* Journey Map */}
                      <div className="flex justify-between items-center mb-12 px-2 relative z-10">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-8 h-8 rounded-full border border-mystic/40 flex items-center justify-center text-[10px] text-mystic font-bold bg-mystic/10">✓</div>
                          <span className="text-[8px] uppercase tracking-widest opacity-40 font-bold">Study</span>
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-mystic/40 to-white/10 mx-2" />
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-8 h-8 rounded-full border-2 border-mystic flex items-center justify-center text-[10px] text-mystic font-bold shadow-[0_0_10px_rgba(255,45,149,0.3)] bg-mystic/5">2</div>
                          <span className="text-[8px] uppercase tracking-widest text-mystic font-bold">Quiz</span>
                        </div>
                        <div className="flex-1 h-px bg-white/10 mx-2" />
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] opacity-30 font-bold">3</div>
                          <span className="text-[8px] uppercase tracking-widest opacity-20 font-bold">Mastery</span>
                        </div>
                      </div>

                      <div className="space-y-6 mb-10 relative z-10">
                        <div className="flex items-center justify-between py-4 border-b border-white/5">
                          <span className="text-micro opacity-40">Wisdom Reward</span>
                          <span className="text-lg font-bold text-mystic font-mono">+{selectedQuest.xp} XP</span>
                        </div>
                        <div className="flex items-center justify-between py-4 border-b border-white/5">
                          <span className="text-micro opacity-40">Arcane Difficulty</span>
                          <div className="flex gap-1.5">
                            {[1,2,3,4,5].map(i => (
                            <div key={i} className={`w-5 h-1.5 ${i <= 3 ? 'bg-mystic shadow-[0_0_10px_rgba(255,45,149,0.5)]' : 'bg-white/10'}`} />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mb-8 p-6 bg-mystic/5 border border-mystic/10 rounded-sm relative z-10">
                        <p className="text-[11px] opacity-60 leading-relaxed font-sans uppercase tracking-widest">
                          The trial will <span className="text-mystic font-bold">test your understanding</span> of this wisdom. Complete it successfully to <span className="text-white font-bold">earn your XP</span> and unlock the final transcription (PDF).
                        </p>
                      </div>

                      <button 
                        onClick={() => setView('quiz')}
                        className="btn-arcane w-full py-6 flex items-center justify-center gap-3 group relative z-10"
                      >
                        <Sword className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        Begin Knowledge Quiz & Earn XP
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-1 h-1 rounded-full bg-mystic/40" />
                        <span className="text-[10px] opacity-40 uppercase tracking-widest font-bold">Final Step: Archive Wisdom</span>
                      </div>
                      <button 
                        onClick={() => downloadPDF(selectedQuest)}
                        className="w-full bg-white/5 border border-white/10 py-5 text-micro hover:bg-white/10 transition-colors flex items-center justify-center gap-3 group"
                      >
                        <Scroll className="w-4 h-4 group-hover:scale-110 transition-transform" /> Download Wisdom (PDF)
                      </button>
                      <p className="text-[10px] opacity-30 text-center uppercase tracking-widest font-sans leading-relaxed">
                        Transcribe this scroll to your local archives as a permanent PDF document for future study.
                      </p>
                    </div>

                    <div className="arcane-card p-8 flex items-center gap-6 bg-mystic/5 border-mystic/20">
                      <div className="w-12 h-12 rounded-full border border-mystic/30 flex items-center justify-center">
                        <Flame className="w-5 h-5 text-mystic animate-pulse" />
                      </div>
                      <p className="text-micro opacity-50 leading-relaxed">Focus required:<br /><span className="text-white font-bold">Deep Concentration</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {view === 'quiz' && selectedQuest && (
            <motion.section 
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="max-w-4xl mx-auto px-6 py-24"
            >
              {/* Progress Indicator */}
              <div className="flex justify-center mb-20">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-2 opacity-40">
                    <div className="w-10 h-10 rounded-full border border-mystic/50 flex items-center justify-center text-mystic font-bold">✓</div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-mystic">Study</span>
                  </div>
                  <div className="w-16 h-px bg-mystic/30" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-mystic flex items-center justify-center text-void font-bold shadow-[0_0_20px_rgba(255,45,149,0.5)]">2</div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-mystic">Trial</span>
                  </div>
                  <div className="w-16 h-px bg-white/10" />
                  <div className="flex flex-col items-center gap-2 opacity-30">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center font-bold">3</div>
                    <span className="text-[9px] uppercase tracking-widest font-bold">Mastery</span>
                  </div>
                </div>
              </div>

              <div className="text-center mb-20">
                <span className="text-mystic text-micro mb-6 block font-sans">Step 2: The Trial of Understanding</span>
                <h2 className="text-5xl md:text-6xl font-display uppercase tracking-widest mb-4">{selectedQuest.title}</h2>
                <div className="w-24 h-px bg-mystic/30 mx-auto" />
              </div>

              <div className="arcane-card p-12 md:p-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mystic/50 to-transparent" />
                <h3 className="text-2xl md:text-3xl font-serif italic mb-16 text-center max-w-2xl mx-auto leading-relaxed">
                  “{selectedQuest.quiz.question}”
                </h3>

                <div className="space-y-4 max-w-xl mx-auto">
                  {selectedQuest.quiz.options.map((option, idx) => (
                    <button
                      key={idx}
                      disabled={quizResult !== null}
                      onClick={() => handleQuizSubmit(idx)}
                      className={`w-full text-left p-8 border transition-all duration-300 flex items-center justify-between group ${
                        quizAnswer === idx
                          ? quizResult === 'correct'
                          ? 'bg-mystic/10 border-mystic text-mystic shadow-[0_0_20px_rgba(255,45,149,0.1)]'
                            : 'bg-red-500/10 border-red-500 text-red-400'
                          : 'bg-white/5 border-white/10 hover:border-mystic/40 hover:bg-white/[0.08]'
                      }`}
                    >
                      <span className="text-[11px] font-bold uppercase tracking-widest opacity-80">{option}</span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                        quizAnswer === idx ? 'border-current' : 'border-white/10 group-hover:border-mystic/50'
                      }`}>
                        {quizAnswer === idx && <div className="w-2.5 h-2.5 rounded-full bg-current shadow-[0_0_10px_currentColor]" />}
                      </div>
                    </button>
                  ))}
                </div>

                {quizResult === 'incorrect' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-12 p-8 bg-red-500/5 border border-red-500/20 text-red-400 text-center"
                  >
                    <p className="text-micro mb-4 flex items-center justify-center gap-2">
                      <Skull className="w-4 h-4" /> Trial Failed
                    </p>
                    <p className="text-sm opacity-60 mb-6 uppercase tracking-widest">Your vision is clouded. Meditate on the concept once more.</p>
                    <button 
                      onClick={() => { setQuizAnswer(null); setQuizResult(null); }}
                      className="text-micro underline hover:text-white transition-colors"
                    >
                      Retry the Trial
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.section>
          )}

          {view === 'success' && selectedQuest && (
            <motion.section 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto px-6 py-24 text-center relative"
            >
              {/* Progress Indicator */}
              <div className="flex justify-center mb-20">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-2 opacity-40">
                    <div className="w-10 h-10 rounded-full border border-mystic/50 flex items-center justify-center text-mystic font-bold">✓</div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-mystic">Study</span>
                  </div>
                  <div className="w-16 h-px bg-mystic/30" />
                  <div className="flex flex-col items-center gap-2 opacity-40">
                    <div className="w-10 h-10 rounded-full border border-mystic/50 flex items-center justify-center text-mystic font-bold">✓</div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-mystic">Trial</span>
                  </div>
                  <div className="w-16 h-px bg-mystic/30" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-mystic flex items-center justify-center text-void font-bold shadow-[0_0_20px_rgba(255,45,149,0.5)]">3</div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-mystic">Mastery</span>
                  </div>
                </div>
              </div>

              {/* Success Flash */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="fixed inset-0 z-[100] bg-white pointer-events-none"
              />
              
              <div className="mystic-mist" />
              {/* Magical Background Sparkles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ 
                      x: Math.random() * 100 - 50 + "%", 
                      y: Math.random() * 100 - 50 + "%",
                      opacity: 0,
                      scale: 0
                    }}
                    animate={{ 
                      y: [null, "-120%"],
                      x: [null, (Math.random() - 0.5) * 20 + "%"],
                      opacity: [0, 1, 0],
                      scale: [0, Math.random() * 1.5 + 0.5, 0],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 2 + Math.random() * 3,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2"
                  >
                    {i % 3 === 0 ? (
                      <Sparkles className="w-4 h-4 text-mystic/40" />
                    ) : i % 3 === 1 ? (
                      <Star className="w-3 h-3 text-arcane/40" />
                    ) : (
                      <Zap className="w-3 h-3 text-mana/40" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Magical Expanding Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`ring-${i}`}
                  initial={{ width: 0, height: 0, opacity: 0.5, borderWeight: 2 }}
                  animate={{ 
                    width: ["0vw", "100vw"],
                    height: ["0vw", "100vw"],
                    opacity: [0.5, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    delay: i * 0.4,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  className="magical-ring"
                  style={{ borderColor: i === 0 ? 'var(--color-mystic)' : i === 1 ? 'var(--color-arcane)' : 'var(--color-mana)' }}
                />
              ))}

              <motion.div 
                initial={{ y: 50, opacity: 0, rotate: -15 }}
                animate={{ 
                  y: 0, 
                  opacity: 1, 
                  rotate: 0,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "backOut",
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-32 h-32 bg-mystic rounded-sm flex items-center justify-center mx-auto mb-16 shadow-[0_0_80px_rgba(255,45,149,0.5)] relative z-10"
              >
                <div className="absolute inset-0 animate-pulse bg-mystic/20 blur-2xl rounded-full" />
                <Crown className="text-void w-14 h-14 relative z-10" />
              </motion.div>
              
              <div className="relative mb-20 py-10">
                {/* Poof Effect Background */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1.5, 2.5],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute inset-0 bg-mystic/30 rounded-full blur-[100px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 30 }}
                  animate={{ 
                    opacity: 1, 
                    scale: [0.5, 1.2, 1],
                    y: 0 
                  }}
                  transition={{ 
                    duration: 0.7,
                    times: [0, 0.6, 1],
                    ease: "backOut"
                  }}
                  className="relative z-10"
                >
                  <motion.h2 
                    className="text-6xl md:text-8xl font-display text-mystic mb-8 flex items-center justify-center gap-2 text-glow-mystic"
                  >
                    {/* Smoke Particles */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={`smoke-${i}`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: [0, 2, 3],
                          opacity: [0, 0.4, 0],
                          x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200],
                          y: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200]
                        }}
                        transition={{ duration: 1.2, delay: 0.1 }}
                        className="absolute w-20 h-20 bg-mystic/20 rounded-full blur-3xl pointer-events-none"
                      />
                    ))}
                    {"POOF!".split("").map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, y: 50, rotate: -45 }}
                        animate={{ 
                          scale: [0, 1.5, 1],
                          y: 0,
                          rotate: 0,
                          textShadow: [
                            "0 0 20px rgba(255, 45, 149, 0.6)",
                            "0 0 40px rgba(255, 45, 149, 0.9)",
                            "0 0 20px rgba(255, 45, 149, 0.6)"
                          ]
                        }}
                        transition={{ 
                          duration: 0.6, 
                          delay: i * 0.08,
                          ease: "backOut",
                          textShadow: { duration: 2, repeat: Infinity, delay: i * 0.2 }
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                    <motion.span 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-white not-italic ml-4 font-sans uppercase tracking-[0.2em] text-2xl opacity-80"
                    >
                      Wisdom Transcribed
                    </motion.span>
                  </motion.h2>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center gap-4 mb-10"
                  >
                    {[...Array(7)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          y: [0, -40, -60],
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                          rotate: [0, 90, 180]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: i * 0.25,
                          ease: "easeOut"
                        }}
                      >
                        <Star className={`w-5 h-5 ${i % 2 === 0 ? 'text-mystic' : 'text-arcane'} fill-current/20`} />
                      </motion.div>
                    ))}
                  </motion.div>

                  <p className="text-xl md:text-2xl opacity-50 uppercase tracking-[0.3em] max-w-2xl mx-auto leading-relaxed">
                    You have successfully integrated the wisdom of <br />
                    <span className="text-white font-black text-3xl block mt-4 tracking-normal">{selectedQuest.title}</span>
                  </p>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="arcane-card p-12 md:p-16 mb-20 text-left relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-mystic shadow-[0_0_20px_rgba(255,45,149,0.5)]" />
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-20 h-20" />
                </div>
                <h4 className="text-micro text-mystic mb-8 flex items-center gap-2 font-sans">
                  <Scroll className="w-4 h-4" /> The Ultimate Wisdom
                </h4>
                <p className="text-3xl md:text-4xl font-serif italic opacity-95 leading-relaxed relative z-10">
                  “{selectedQuest.quiz.takeaway}”
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-8 justify-center"
              >
                <button 
                  onClick={getNewQuest}
                  className="btn-arcane px-16 py-6 text-sm"
                >
                  Seek New Wisdom
                </button>
                <button 
                  onClick={openArchive}
                  className="px-16 py-6 bg-white/5 border border-white/10 text-micro hover:bg-white/10 transition-colors flex items-center justify-center gap-4"
                >
                  <BookOpen className="w-5 h-5" /> The Archive
                </button>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-24 border-t border-white/5 mt-24 bg-void/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-3">
              <Wand2 className="w-6 h-6 text-gold" />
              <span className="text-xl font-serif italic text-gold tracking-tight">Shrine of <span className="font-black not-italic">Power</span></span>
            </div>
            <div className="flex gap-10 text-micro opacity-30">
              <button onClick={() => setView('home')} className="hover:opacity-100 transition-opacity">Shrine of Power</button>
              <button onClick={openArchive} className="hover:opacity-100 transition-opacity">Archive</button>
              <a href="#" className="hover:opacity-100 transition-opacity">Manifesto</a>
            </div>
            <p className="text-micro opacity-20 tracking-[0.4em]">© MMXXVI The Digital Curator</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
