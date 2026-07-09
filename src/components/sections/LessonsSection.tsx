"use client";

import React from 'react';
import { useJourney } from '@/context/JourneyContext';
import { Lightbulb, CheckCircle2, Quote } from 'lucide-react';

export default function LessonsSection() {
  const { data } = useJourney();
  const { lessons } = data;

  return (
    <section id="lessons" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Lightbulb className="w-3.5 h-3.5" />
            Core Reflections
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Lessons from 25 Years
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            Principles forged through an average academic start, a delayed career entry, corporate leadership, and independent entrepreneurship.
          </p>
        </div>

        {/* Lessons Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson, idx) => (
            <div
              key={lesson.id}
              className="group relative p-8 rounded-3xl bg-navy-card/80 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-amber-400/80 uppercase tracking-widest">
                    Lesson 0{idx + 1}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {lesson.title}
                </h3>

                {/* Quote highlight */}
                <div className="p-4 rounded-2xl bg-[#0A1128]/80 border-l-2 border-amber-500 text-sm font-serif italic text-amber-200/90 mb-4">
                  &ldquo;{lesson.quoteOrHighlight}&rdquo;
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {lesson.body}
                </p>

                {lesson.bulletPoints && lesson.bulletPoints.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {lesson.bulletPoints.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-accent shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex justify-between">
                <span>Saravanan Gnanaguru</span>
                <span>Silver Jubilee Creed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
