"use client";

import React from 'react';
import { useJourney } from '@/context/JourneyContext';
import { Printer, X, Award, CheckCircle2 } from 'lucide-react';

interface PrintableJourneyBookletProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrintableJourneyBooklet({
  isOpen,
  onClose
}: PrintableJourneyBookletProps) {
  const { data } = useJourney();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white text-slate-900 overflow-y-auto">
      {/* Top Floating Control Bar (Hidden in Print) */}
      <div className="sticky top-0 z-10 bg-[#0A1128] text-white px-6 py-4 flex items-center justify-between shadow-lg no-print">
        <div className="flex items-center gap-3">
          <Award className="w-5 h-5 text-amber-400" />
          <div>
            <h3 className="text-sm font-bold">
              Silver Jubilee Printable Booklet Preview
            </h3>
            <p className="text-xs text-slate-400">
              Click &apos;Save as PDF / Print&apos; to generate a clean document.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-cyan-accent text-navy-deep font-bold text-xs hover:bg-cyan-400 transition-colors"
          >
            <Printer className="w-4 h-4" /> Save as PDF / Print
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Printable Document Area */}
      <div className="max-w-4xl mx-auto p-8 sm:p-12 space-y-12">
        {/* Cover Section */}
        <div className="border-b-2 border-slate-900 pb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
            Amrita Institute of Technology • Batch of 2001 • Silver Jubilee Edition
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mt-2">
            {data.hero.headline}
          </h1>
          <p className="text-lg text-slate-700 mt-3 font-normal">
            {data.hero.subheadline}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold text-slate-800">
            {data.hero.milestoneLabels.map((lbl, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-slate-100 border border-slate-300"
              >
                {lbl.value} — {lbl.label}
              </span>
            ))}
          </div>
        </div>

        {/* Reflection Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Opening Reflection
          </h2>
          <p className="text-base text-slate-800 leading-relaxed">
            &ldquo;{data.openingReflection.introParagraph1}&rdquo;
          </p>
          <p className="text-base text-slate-800 leading-relaxed">
            {data.openingReflection.introParagraph2}
          </p>
          <div className="p-6 rounded-2xl bg-amber-50 border-l-4 border-amber-600 italic font-serif text-slate-800">
            &ldquo;{data.openingReflection.quote}&rdquo;
          </div>
        </div>

        {/* Milestones Chronology */}
        <div className="space-y-8 print-break">
          <h2 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-300 pb-2">
            25-Year Chronological Journey
          </h2>
          {data.milestones.map((m) => (
            <div
              key={m.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-slate-900 text-white text-xs font-bold">
                  {m.period}
                </span>
                <span className="text-xs text-slate-600">
                  {m.organization || m.location}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">
                {m.title}
              </h3>
              {m.subtitle && (
                <p className="text-sm font-semibold text-slate-700">
                  {m.subtitle}
                </p>
              )}
              <p className="text-sm text-slate-800 leading-relaxed pt-1">
                {m.description}
              </p>
              {m.lessonLearned && (
                <div className="mt-3 p-3 rounded-lg bg-cyan-50 border border-cyan-200 text-xs font-medium text-slate-800">
                  <strong>Lesson Learned:</strong> {m.lessonLearned}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Lessons Summary */}
        <div className="space-y-6 print-break">
          <h2 className="text-2xl font-serif font-bold text-slate-900 border-b border-slate-300 pb-2">
            Core Lessons & Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.lessons.map((les) => (
              <div
                key={les.id}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
              >
                <h4 className="text-base font-serif font-bold text-slate-900">
                  {les.title}
                </h4>
                <p className="text-xs italic text-slate-700">
                  &ldquo;{les.quoteOrHighlight}&rdquo;
                </p>
                <p className="text-xs text-slate-800 leading-relaxed">
                  {les.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CloudEngine Labs Profile */}
        <div className="p-8 rounded-2xl bg-slate-900 text-white space-y-4 print-break">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono">
            Independent Technology Consulting Practice
          </span>
          <h2 className="text-3xl font-serif font-bold">
            CloudEngine Labs
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {data.cloudEngineLabs.summary}
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            {data.cloudEngineLabs.focusAreas.map((fa) => (
              <div key={fa.id} className="p-3 rounded-xl bg-slate-800 text-xs">
                <strong className="text-cyan-300 block mb-1">
                  {fa.title}
                </strong>
                <span className="text-slate-300">{fa.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final Creed */}
        <div className="text-center pt-8 border-t border-slate-300">
          <p className="text-xl font-serif italic text-slate-900">
            &ldquo;{data.finalMessage.closingCreed}&rdquo;
          </p>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mt-2">
            Saravanan Gnanaguru • Silver Jubilee 2026
          </p>
        </div>
      </div>
    </div>
  );
}
