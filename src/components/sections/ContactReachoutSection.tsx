"use client";

import React from 'react';
import {
  ExternalLink,
  Mail,
  Calendar,
  Globe,
  BookOpen,
  Sparkles,
  Building2,
  Users,
  Code2,
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import {
  GithubIcon,
  InstagramIcon,
  DevToIcon,
  TopmateIcon
} from '@/components/icons/SocialIcons';

export default function ContactReachoutSection() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A1128] via-[#0E1738] to-[#0A1128] border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Reach Out to Me
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed font-light">
            Whether you are looking for enterprise cloud consulting, 1-on-1 mentorship, technical advisory, or simply want to connect—explore my direct links below.
          </p>
        </div>

        {/* 1. Featured Advisory & Mentoring Row (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Topmate Mentoring & Consulting */}
          <a
            href="https://topmate.io/saravanan_gnanaguru"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-navy-card via-[#111A3E] to-navy-card border border-cyan-500/30 hover:border-cyan-accent hover:-translate-y-1.5 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-accent group-hover:scale-110 transition-transform">
                  <TopmateIcon className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-accent text-[11px] font-bold uppercase tracking-wider">
                  Mentoring
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-cyan-accent transition-colors flex items-center gap-2">
                <span>Topmate Mentoring</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-accent transition-colors" />
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                1-on-1 career guidance, cloud engineering roadmaps, and personal founder advisory.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-accent">
              <span>topmate.io/saravanan_gnanaguru</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Card 2: Book a Dedicated Call */}
          <a
            href="https://topmate.io/saravanan_gnanaguru?utm_source=gsaravanan_blog&utm_medium=site_cta&utm_campaign=advisory_call"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-navy-card via-[#121E45] to-navy-card border border-amber-500/30 hover:border-amber-400 hover:-translate-y-1.5 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                  Direct Session
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors flex items-center gap-2">
                <span>Book a Call</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-300 transition-colors" />
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Schedule a dedicated discovery or consultation call for technical architecture & strategy.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400">
              <span>Book Discovery Call</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Card 3: Enterprise Advisory */}
          <a
            href="https://gsaravanan.dev/?utm_source=gsaravanan_blog&utm_medium=site_cta&utm_campaign=enterprise_advisory"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-navy-card via-[#141B3B] to-navy-card border border-blue-500/30 hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-400/10 text-blue-300 text-[11px] font-bold uppercase tracking-wider">
                  CloudEngine Labs
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-blue-300 transition-colors flex items-center gap-2">
                <span>Enterprise Advisory</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-300 transition-colors" />
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Strategic tech advisory, cloud migration frameworks, and high-performance engineering consulting.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-400">
              <span>Enterprise Consulting</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* 2. Socials & Developer Network Grid */}
        <div className="mb-12">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-1">
            Social Profiles & Code Repositories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/saravanan-gnanaguru/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-navy-card border border-slate-800 hover:border-cyan-accent/50 hover:bg-slate-800/60 transition-all shadow-md"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2] shrink-0 group-hover:scale-105 transition-transform">
                <LinkedInIcon className="w-5 h-5 fill-[#0A66C2]" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-sm font-bold text-white group-hover:text-cyan-accent transition-colors truncate">
                  LinkedIn Profile
                </span>
                <span className="block text-xs text-slate-400 truncate">
                  in/saravanan-gnanaguru
                </span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/chefgs"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-navy-card border border-slate-800 hover:border-cyan-accent/50 hover:bg-slate-800/60 transition-all shadow-md"
            >
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-sm font-bold text-white group-hover:text-cyan-accent transition-colors truncate">
                  GitHub Repositories
                </span>
                <span className="block text-xs text-slate-400 truncate">
                  github.com/chefgs
                </span>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/nameis_gsaravanan"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-navy-card border border-slate-800 hover:border-cyan-accent/50 hover:bg-slate-800/60 transition-all shadow-md"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0 group-hover:scale-105 transition-transform">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-sm font-bold text-white group-hover:text-pink-400 transition-colors truncate">
                  Instagram
                </span>
                <span className="block text-xs text-slate-400 truncate">
                  @nameis_gsaravanan
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* 3. Tech Blogs, Portfolios & AI Ecosystem Grid */}
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-1">
            Articles, Portfolios & AI Community Ecosystem
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Tech Blogs */}
            <a
              href="https://gsaravanan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-navy-card border border-slate-800 hover:border-cyan-accent/50 hover:bg-slate-800/60 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-accent">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-white group-hover:text-cyan-accent transition-colors">
                    Tech Blogs
                  </span>
                  <span className="block text-xs text-slate-400">gsaravanan.com</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-accent transition-colors" />
            </a>

            {/* Dev.to Technical Blogs */}
            <a
              href="https://dev.to/chefgs"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-navy-card border border-slate-800 hover:border-cyan-accent/50 hover:bg-slate-800/60 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <DevToIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                    DEV.to Articles
                  </span>
                  <span className="block text-xs text-slate-400">dev.to/chefgs</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
            </a>

            {/* Official Portfolio */}
            <a
              href="https://gsaravanan.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-navy-card border border-slate-800 hover:border-cyan-accent/50 hover:bg-slate-800/60 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    Tech Portfolio
                  </span>
                  <span className="block text-xs text-slate-400">gsaravanan.dev</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
            </a>

            {/* AI Engineering Circle */}
            <a
              href="https://ai-engineering.in/?utm_source=gsaravanan_blog&utm_medium=site_cta&utm_campaign=ecosystem"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-navy-card border border-slate-800 hover:border-cyan-accent/50 hover:bg-slate-800/60 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    AI Engineering Circle
                  </span>
                  <span className="block text-xs text-slate-400">ai-engineering.in</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            </a>

            {/* Vibe Codes Portfolio */}
            <a
              href="https://gs-vibe-codes.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-navy-card border border-slate-800 hover:border-cyan-accent/50 hover:bg-slate-800/60 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-white group-hover:text-pink-400 transition-colors">
                    Vibe Codes Portfolio
                  </span>
                  <span className="block text-xs text-slate-400">Interactive UI Showcase</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-pink-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
