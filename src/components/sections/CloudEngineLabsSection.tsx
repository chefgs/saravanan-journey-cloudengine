"use client";

import React from 'react';
import { useJourney } from '@/context/JourneyContext';
import {
  Cloud,
  ShieldCheck,
  Workflow,
  Cpu,
  ExternalLink,
  ArrowRight,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';

export default function CloudEngineLabsSection() {
  const { data } = useJourney();
  const { cloudEngineLabs } = data;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-cyan-accent" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-cyan-accent" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-amber-400" />;
      default:
        return <Cloud className="w-6 h-6 text-cyan-accent" />;
    }
  };

  return (
    <section
      id="cloudengine"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A1128] via-[#0D1636] to-[#0A1128] border-t border-slate-800/80 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Banner Tag & Official Logo */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-xs font-semibold uppercase tracking-wider mb-6">
            <Building2 className="w-3.5 h-3.5" />
            Founder Practice • Established 2023
          </div>

          <div className="flex justify-center mb-6">
            <div className="bg-white px-8 py-4 rounded-2xl shadow-2xl border border-slate-700/60 inline-flex items-center justify-center max-w-sm sm:max-w-md">
              <img
                src="/cloudengine-logo.png"
                alt="CloudEngine Labs — Cloud Engineering Redefined"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
          </div>

          <p className="text-cyan-accent font-mono text-xs sm:text-sm uppercase tracking-widest mt-2">
            {cloudEngineLabs.tagline}
          </p>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed font-light">
            {cloudEngineLabs.summary}
          </p>
        </div>

        {/* 4 Focus Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {cloudEngineLabs.focusAreas.map((area) => (
            <div
              key={area.id}
              className="group p-8 rounded-3xl bg-navy-card/90 border border-slate-800 hover:border-cyan-accent/50 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#0A1128] border border-slate-700/80 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {getIcon(area.icon)}
                </div>

                <h3 className="text-2xl font-serif font-bold text-white group-hover:text-cyan-accent transition-colors">
                  {area.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mt-3">
                  {area.description}
                </p>

                {/* Deliverables tags */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                  <span className="block text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Core Capabilities
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {area.deliverables.map((deliv, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A1128] border border-slate-700/80 text-xs font-medium text-slate-200"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-accent" />
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons Row */}
        <div className="p-8 sm:p-10 rounded-3xl bg-navy-card border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white">
              Partner with CloudEngine Labs
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Building or scaling a secure cloud architecture? Let&apos;s talk process-first engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://cloudenginelabs.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-cyan-accent text-navy-deep font-semibold text-xs sm:text-sm hover:bg-cyan-400 shadow-lg shadow-cyan-accent/20 transition-all"
            >
              <span>Visit Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0A1128] border border-slate-700 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-all"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/saravanan-gnanaguru/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0A66C2]/20 border border-[#0A66C2]/50 text-sky-300 font-semibold text-xs sm:text-sm hover:bg-[#0A66C2]/30 transition-all"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
