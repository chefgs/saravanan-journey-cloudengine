"use client";

import React, { useState } from 'react';
import {
  Compass,
  ShieldCheck,
  Heart,
  Sparkles,
  Flame,
  Activity,
  Clock,
  Target,
  Quote,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface PhilosophyItem {
  id: string;
  number: string;
  quote: string;
  title: string;
  explanation: string;
  journeyLink: string;
  milestoneTag: string;
}

const SIGNATURE_CREED = [
  {
    id: "sig-1",
    quote: "The definition of success should be defined by overcoming our own limitations, not by the way society sees us.",
    tag: "Signature Philosophy",
    context: "From an average student in 2001 to self-employed founder defining success by inner satisfaction and family presence."
  },
  {
    id: "sig-2",
    quote: "Survival itself can become a strength.",
    tag: "Resilience & Courage",
    context: "Years of enduring early career struggles forged the self-belief and courage needed to launch CloudEngine Labs."
  },
  {
    id: "sig-3",
    quote: "From survival to soul satisfaction.",
    tag: "Inner Alignment",
    context: "Transitioning from fighting for survival to achieving the calm fulfillment your heart chakra silently waited for."
  },
  {
    id: "sig-4",
    quote: "Sometimes success is being available at home when your family needs you.",
    tag: "Time Freedom",
    context: "Choosing freedom over titles—picking up children from school and supporting family alongside business growth."
  },
  {
    id: "sig-5",
    quote: "A good life is not only about career; it is about health, family, money, relationships, purpose, time, peace, and alignment.",
    tag: "Holistic Vision",
    context: "Measuring life through the 21DC Goal Progression System and TiE Chennai's Wheel of Life."
  }
];

const PILLAR_1_PHILOSOPHIES: PhilosophyItem[] = [
  {
    id: "p1-1",
    number: "01",
    title: "Success is Personal",
    quote: "The definition of success should be defined by overcoming our own limitations, not by the way society sees us.",
    explanation: "True growth happens when you compete only with your former self rather than external titles or societal benchmarks.",
    journeyLink: "Reflects the journey from graduating as an average student at Amrita in 2001 to defining independent success on your own terms.",
    milestoneTag: "Batch of 2001 • Self-Defined Success"
  },
  {
    id: "p1-2",
    number: "02",
    title: "Survival Becomes Strength",
    quote: "Survival itself can become a strength. The courage built through years of survival helped me start my own company.",
    explanation: "Hardship is not just something to endure; survival builds adaptability, experimentation, and fearless resilience.",
    journeyLink: "Directly inspired starting CloudEngine Labs after 20+ years of navigating complex enterprise environments.",
    milestoneTag: "CloudEngine Labs • Founder Courage"
  },
  {
    id: "p1-3",
    number: "03",
    title: "Average is Not a Permanent Identity",
    quote: "Marks may describe one chapter of life, but they do not have to write the entire story.",
    explanation: "An average student can build an extraordinary journey through deliberate effort, persistence, and continuous self-education.",
    journeyLink: "Starting as a lab assistant without formal programming education and growing into an international cloud architect.",
    milestoneTag: "Continuous Learning • Career Evolution"
  },
  {
    id: "p1-4",
    number: "04",
    title: "Replace Limiting Beliefs with Growth",
    quote: "I am capable of learning and improving. Every challenge is an opportunity for growth.",
    explanation: "Consciously removing self-doubt and replacing it with unshakeable conviction that any skill can be learned.",
    journeyLink: "Mastering cloud infrastructure, DevSecOps, and AI engineering through self-taught discipline.",
    milestoneTag: "Growth Mindset • Technical Mastery"
  },
  {
    id: "p1-5",
    number: "05",
    title: "Progress Does Not Have to Be Linear",
    quote: "A delayed beginning does not mean a failed journey.",
    explanation: "A non-linear path with setbacks and late starts often builds deeper wisdom than a conventional career climb.",
    journeyLink: "Overcoming early post-graduation hurdles in 2001 to building a thriving international consulting practice.",
    milestoneTag: "Non-Linear Journey • Endurance"
  }
];

const PILLAR_2_PHILOSOPHIES: PhilosophyItem[] = [
  {
    id: "p2-1",
    number: "06",
    title: "Freedom is More Than Money",
    quote: "Financial freedom matters, but time freedom can be the greater joy.",
    explanation: "Being debt-free and financially stable is foundational, but true wealth is the sovereignty of your daily schedule.",
    journeyLink: "Being present for school drop-offs and pick-ups, and supporting family enterprises alongside consulting.",
    milestoneTag: "Time Freedom • Family First"
  },
  {
    id: "p2-2",
    number: "07",
    title: "Live Life on Your Own Terms",
    quote: "Self-employment gave me a way to live life as I wanted—beyond titles, calendars, roles, and expectations.",
    explanation: "Entrepreneurship is an ethical commitment to ownership, responsibility, and living with uncompromised integrity.",
    journeyLink: "Celebrating 3 years of debt-free self-employment and autonomous decision-making.",
    milestoneTag: "Self-Employment • 3-Year Milestone"
  },
  {
    id: "p2-3",
    number: "08",
    title: "Consistency Over Excitement",
    quote: "Growth often comes from repeating ordinary work consistently, long after the initial excitement has disappeared.",
    explanation: "Endurance and discipline through repetitive, unglamorous execution separate lasting institutions from fleeting ideas.",
    journeyLink: "Delivering process-first DevSecOps blueprints and consistent client outcomes day after day.",
    milestoneTag: "Process Discipline • Execution"
  },
  {
    id: "p2-4",
    number: "09",
    title: "Focus Within Your Circle of Influence",
    quote: "Do not spend all your energy worrying about what you cannot control. Strengthen what is within your influence.",
    explanation: "Channeling mental and emotional focus exclusively into personal actions, craft quality, and health.",
    journeyLink: "Navigating shifting global tech markets by anchoring on timeless architecture and consulting excellence.",
    milestoneTag: "Circle of Influence • Focus"
  },
  {
    id: "p2-5",
    number: "10",
    title: "Soul Satisfaction Matters",
    quote: "From survival to soul satisfaction—the kind of fulfillment my heart chakra had been silently waiting for.",
    explanation: "Aligning professional output with deep inner peace so that work nourishes rather than depletes the spirit.",
    journeyLink: "Finding harmony between consulting impact, community contribution, and family presence.",
    milestoneTag: "Inner Alignment • Heart Fulfillment"
  }
];

const PILLAR_3_PHILOSOPHIES: PhilosophyItem[] = [
  {
    id: "p3-1",
    number: "11",
    title: "Holistic Life Balance",
    quote: "A good life is not only about career. It is also about health, family, money, relationships, purpose, time, peace, and alignment.",
    explanation: "True success requires equilibrium across every dimension of human existence.",
    journeyLink: "Rooted in the 21DC Goal Progression System and TiE Chennai Wheel of Life framework.",
    milestoneTag: "Holistic Wheel • 21DC Framework"
  },
  {
    id: "p3-2",
    number: "12",
    title: "Mental & Physical Health Interconnection",
    quote: "Protect your mental health to protect your physical health. Avoid letting external pressure disturb your inner system.",
    explanation: "Emotional calm and stress reduction directly regulate biological energy, immunity, and cellular vitality.",
    journeyLink: "Prioritizing daily mindfulness, stress isolation, and holistic wellness alongside high-stakes consulting.",
    milestoneTag: "Mind-Body Unity • Vitality"
  },
  {
    id: "p3-3",
    number: "13",
    title: "Cellular Consciousness & Gratitude",
    quote: "You are not just taking care of yourself; you are taking care of your cells. Your cells listen to how you live, think, and speak.",
    explanation: "Treating the body with reverence—speaking kindly to oneself, honoring water, and recognizing cellular vitality.",
    journeyLink: "Integrating mindful bio-awareness and daily positive intention into the entrepreneur journey.",
    milestoneTag: "Cellular Health • Mindful Living"
  },
  {
    id: "p3-4",
    number: "14",
    title: "Inner Beliefs Shape Outer Progress",
    quote: "Some days give you enough happiness and dopamine to remind you that your inner beliefs were right all along.",
    explanation: "Trusting your intuitive moral compass even when external validation takes years to catch up.",
    journeyLink: "Seeing long-term bets on self-employment and process engineering pay off in lasting freedom.",
    milestoneTag: "Inner Conviction • Dopamine & Joy"
  },
  {
    id: "p3-5",
    number: "15",
    title: "Gratitude is Part of Progress",
    quote: "I feel immense gratitude to the universe for constantly providing me the strength to move forward.",
    explanation: "Gratitude is an active recognition of family, mentors, employers, and communities who elevated the journey.",
    journeyLink: "Honoring parents, partner Malini, mentors, past companies, and community friends.",
    milestoneTag: "Active Gratitude • Community Ecosystem"
  }
];

export default function LifePhilosophiesSection() {
  const [activeTab, setActiveTab] = useState<'pillar1' | 'pillar2' | 'pillar3'>('pillar1');

  return (
    <section
      id="philosophies"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A1128] via-[#0C1534] to-[#0A1128] border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Wisdom & Core Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Life Philosophies & Lessons Learned
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed font-light">
            The core beliefs, habits, and lessons that guided my 25-year journey—from an humble student to an international consulting leader and proud founder of CloudEngine Labs.
          </p>
        </div>

        {/* TOP SIGNATURE CREED CAROUSEL / GRID (5 Signature Lines) */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              The 5 Signature Creed Lines
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIGNATURE_CREED.map((item, idx) => (
              <div
                key={item.id}
                className={`relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-navy-card via-[#111A3E] to-navy-card border border-slate-700/80 hover:border-cyan-accent/60 transition-all duration-300 shadow-xl flex flex-col justify-between ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#121D47] via-[#10193E] to-navy-card border-cyan-500/40' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-cyan-accent uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <Quote className="w-5 h-5 text-cyan-accent/40" />
                  </div>
                  <blockquote className="text-lg sm:text-xl font-serif font-bold text-white leading-relaxed">
                    “{item.quote}”
                  </blockquote>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
                    <span className="text-cyan-accent font-semibold">Journey Link: </span>
                    {item.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INTERACTIVE PILLAR SWITCHER FOR ALL 15 PHILOSOPHIES */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              15 Core Principles Linked to My Journey
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Select a category below to explore the real-life beliefs and practical habits behind every milestone.
            </p>
          </div>

          {/* Pillar Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveTab('pillar1')}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'pillar1'
                  ? 'bg-cyan-accent text-navy-deep shadow-lg shadow-cyan-accent/20 scale-105'
                  : 'bg-navy-card text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>I. Inner Strength & Survival (01–05)</span>
            </button>

            <button
              onClick={() => setActiveTab('pillar2')}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'pillar2'
                  ? 'bg-amber-400 text-navy-deep shadow-lg shadow-amber-400/20 scale-105'
                  : 'bg-navy-card text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>II. Freedom & Purpose (06–10)</span>
            </button>

            <button
              onClick={() => setActiveTab('pillar3')}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'pillar3'
                  ? 'bg-emerald-400 text-navy-deep shadow-lg shadow-emerald-400/20 scale-105'
                  : 'bg-navy-card text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>III. Cellular Health & Gratitude (11–15)</span>
            </button>
          </div>

          {/* Active Pillar Philosophy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(activeTab === 'pillar1'
              ? PILLAR_1_PHILOSOPHIES
              : activeTab === 'pillar2'
              ? PILLAR_2_PHILOSOPHIES
              : PILLAR_3_PHILOSOPHIES
            ).map((phil) => (
              <div
                key={phil.id}
                className="rounded-3xl p-6 sm:p-8 bg-navy-card/90 border border-slate-800 hover:border-cyan-accent/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-cyan-accent px-2.5 py-1 rounded-lg bg-cyan-accent/10 border border-cyan-accent/30">
                      Principle #{phil.number}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700">
                      {phil.milestoneTag}
                    </span>
                  </div>

                  <h4 className="text-xl font-serif font-bold text-white mb-3">
                    {phil.title}
                  </h4>

                  <blockquote className="text-base font-serif italic text-cyan-accent/95 mb-4 pl-3 border-l-2 border-cyan-accent">
                    “{phil.quote}”
                  </blockquote>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {phil.explanation}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-start gap-2.5 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-cyan-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Journey Connection: </span>
                    <span>{phil.journeyLink}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COMPLETE BROADER PHILOSOPHY SYNTHESIS BOX */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#0F1A42] via-[#121F4E] to-[#0F1A42] border border-cyan-500/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Sparkles className="w-40 h-40 text-cyan-accent" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <span className="inline-block text-xs font-bold text-cyan-accent uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
              My Broader Philosophy in One Synthesis
            </span>

            <blockquote className="text-lg sm:text-2xl font-serif font-medium text-white leading-relaxed italic">
              “Life should not be measured only by marks, job titles, salary, business size, or society’s expectations. A meaningful life comes from overcoming our own limitations, staying open to learning, building courage through survival, protecting mental and physical health, being present for family, achieving financial and time freedom, expressing gratitude, and living with greater purpose and inner alignment.”
            </blockquote>

            <div className="mt-8 pt-6 border-t border-slate-700/60 inline-flex items-center gap-2 text-sm font-semibold text-slate-300">
              <span>— Saravanan Gnanaguru • Founder, CloudEngine Labs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
