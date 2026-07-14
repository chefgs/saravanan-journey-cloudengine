"use client";

import React, { useState } from 'react';
import { useJourney } from '@/context/JourneyContext';
import { Milestone, MilestoneCategory } from '@/types/journey';
import {
  Calendar,
  MapPin,
  Building2,
  Lightbulb,
  Heart,
  ExternalLink,
  Search,
  Sparkles,
  Edit3,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import LazyImage from '@/components/ui/LazyImage';

export default function InteractiveTimelineSection() {
  const { data, isAdminLoggedIn, openAdminModal } = useJourney();
  const { milestones } = data;

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    { id: 'all', label: 'All 25-Year Milestones' },
    { id: 'education', label: 'Engineering Years' },
    { id: 'career', label: 'Software Career & Industry' },
    { id: 'entrepreneurship', label: 'CloudEngine Labs & Self-Employment' },
    { id: 'global-travel', label: 'Global Travel & HashiConf' },
    { id: 'reflection', label: 'Silver Jubilee 2026' }
  ];

  const filteredMilestones = milestones.filter((m) => {
    const matchCategory =
      selectedCategory === 'all' || m.category === selectedCategory;
    const matchSearch =
      searchQuery.trim() === '' ||
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (m.organization && m.organization.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (m.location && m.location.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <section id="timeline" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5" />
            25-Year Interactive Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            The Path That Built the Founder
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            From Amrita Batch of 2001 to 18 years in enterprise architecture, to founding CloudEngine Labs. Click any milestone to explore photos, lessons learned, and gratitude notes.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-14 bg-navy-card/80 border border-slate-800 p-4 rounded-2xl backdrop-blur-md">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-accent text-navy-deep shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search timeline..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-accent"
            />
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative">
          {/* Center vertical line for desktop / left line on mobile */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-accent via-slate-700 to-amber-500 transform -translate-x-1/2" />

          <div className="space-y-16">
            {filteredMilestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isExpanded = expandedIds[item.id] ?? true; // expanded by default

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 top-2 w-8 h-8 rounded-full bg-[#0A1128] border-2 border-cyan-accent flex items-center justify-center transform -translate-x-1/2 shadow-lg z-10 group">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-accent" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Milestone Card Content */}
                  <div
                    className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                      isEven ? 'sm:pr-12' : 'sm:pl-12'
                    }`}
                  >
                    <div className="p-6 sm:p-8 rounded-3xl bg-navy-card/90 border border-slate-800/90 hover:border-cyan-accent/40 transition-all shadow-xl">
                      {/* Top Row: Year Period + Admin Edit */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-accent/15 border border-cyan-accent/30 text-cyan-accent text-xs font-bold uppercase tracking-wider">
                          {item.period}
                        </span>

                        {isAdminLoggedIn && (
                          <button
                            onClick={openAdminModal}
                            className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-medium"
                          >
                            <Edit3 className="w-3.5 h-3.5" /> Edit
                          </button>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-sm font-semibold text-amber-400 mt-1">
                          {item.subtitle}
                        </p>
                      )}

                      {/* Organization & Location Meta */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-3 pb-4 border-b border-slate-800">
                        {item.organization && (
                          <span className="inline-flex items-center gap-1.5">
                            <Building2 className="w-3.5 h-3.5 text-cyan-accent" />
                            {item.organization}
                          </span>
                        )}
                        {item.location && (
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-amber-400" />
                            {item.location}
                          </span>
                        )}
                      </div>

                      {/* Main Narrative Description */}
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                        {item.description}
                      </p>

                      {/* Photos Row */}
                      {item.photos && item.photos.length > 0 && (
                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {item.photos.map((photo) => (
                            <div
                              key={photo.id}
                              className={`group relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-800 ${
                                photo.url.includes('logo') ? 'bg-white p-4 flex items-center justify-center' : 'bg-slate-900'
                              }`}
                            >
                              <LazyImage
                                src={photo.url}
                                alt={photo.altText || photo.title}
                                containerClassName="w-full h-full flex items-center justify-center"
                                className={
                                  photo.url.includes('logo')
                                    ? 'w-full h-full object-contain'
                                    : 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                                }
                              />
                              {!photo.url.includes('logo') && (
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/90 via-transparent to-transparent opacity-90 flex items-end p-3">
                                  <div>
                                    <span className="block text-xs font-semibold text-white">
                                      {photo.title}
                                    </span>
                                    {photo.caption && (
                                      <span className="block text-[11px] text-slate-300 line-clamp-1">
                                        {photo.caption}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Key Lesson Learned Box */}
                      {item.lessonLearned && (
                        <div className="mt-5 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
                          <div className="flex items-start gap-3">
                            <Lightbulb className="w-5 h-5 text-cyan-accent shrink-0 mt-0.5" />
                            <div>
                              <span className="block text-xs font-bold text-cyan-accent uppercase tracking-wider">
                                Key Lesson Learned
                              </span>
                              <p className="text-sm font-medium text-slate-200 mt-1">
                                {item.lessonLearned}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Gratitude Note Box */}
                      {item.gratitudeNote && (
                        <div className="mt-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                          <div className="flex items-start gap-3">
                            <Heart className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 fill-amber-400/20" />
                            <div>
                              <span className="block text-xs font-bold text-amber-400 uppercase tracking-wider">
                                Expressed Gratitude
                              </span>
                              <p className="text-sm font-medium text-slate-200 mt-1">
                                {item.gratitudeNote}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* External Link */}
                      {item.externalLink && (
                        <div className="mt-4">
                          <a
                            href={item.externalLink.url}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-accent hover:underline"
                          >
                            <span>{item.externalLink.label}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
