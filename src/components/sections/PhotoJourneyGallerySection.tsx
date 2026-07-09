"use client";

import React, { useState } from 'react';
import { useJourney } from '@/context/JourneyContext';
import { GalleryImage } from '@/types/journey';
import {
  Image as ImageIcon,
  Maximize2,
  X,
  MapPin,
  Star,
  Upload,
  LayoutGrid,
  Layers
} from 'lucide-react';
import LazyImage from '@/components/ui/LazyImage';

export default function PhotoJourneyGallerySection() {
  const { data, isAdminLoggedIn, openAdminModal } = useJourney();
  const { gallery } = data;

  // Default to 'travel-collage' so visitors immediately see the Year-by-Year space-saving Collage
  const [activeCategory, setActiveCategory] = useState<string>('travel-collage');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const categories: { id: string; label: string }[] = [
    { id: 'travel-collage', label: 'Global Travel Collages (by Year)' },
    { id: 'all', label: 'All Life Archive Photos' },
    { id: 'Speaking and community events', label: 'Speaking & Keynotes' },
    { id: 'Boston HashiConf & HUG', label: 'Boston HashiConf & HUG' },
    { id: 'GITEX Dubai 2026', label: 'GITEX Dubai 2026' },
    { id: 'Travel 2005', label: '2005 (Wipro Era)' },
    { id: 'Travel 2006', label: '2006 (UK Projects)' },
    { id: 'Travel 2008', label: '2008 (London)' },
    { id: 'Travel 2010', label: '2010 (France & Paris)' },
    { id: 'Travel 2014-2018', label: '2014–2018 (UK & Europe)' },
    { id: 'Travel 2019', label: '2019 (Istanbul & UK)' },
    { id: 'Travel 2024-2026', label: '2024–2026 (Consulting Era)' },
    { id: 'College', label: 'College & Foundations' },
    { id: 'CloudEngine Labs', label: 'CloudEngine Labs' },
    { id: 'Family and life moments', label: 'Family & Life Moments' }
  ];

  // Group travel photos by year for the Collage per Year view
  const travelYears = [
    { id: 'Travel 2005', title: '2005 — Wipro Career Launch & Early Enterprise Projects', era: '2005' },
    { id: 'Travel 2006', title: '2006 — First UK International Assignments (London & Westminster)', era: '2006' },
    { id: 'Travel 2008', title: '2008 — UK Enterprise Architecture & Consulting Expansion', era: '2008' },
    { id: 'Travel 2010', title: '2010 — European Consulting Across Paris & France (Eiffel & Montparnasse)', era: '2010' },
    { id: 'Travel 2014-2018', title: '2014–2018 — UK Cloud Governance Leadership (London & Piccadilly)', era: '2014–2018' },
    { id: 'Travel 2019', title: '2019 — Cross-Continental Tech Summits (Istanbul & UK)', era: '2019' },
    { id: 'Travel 2024-2026', title: '2024–2026 — CloudEngine Labs Founder Global Consulting Era', era: '2024–2026' }
  ];

  const filteredGallery = gallery.filter(
    (img) => activeCategory === 'all' || img.category === activeCategory
  );

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0D1636]/60 border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent text-xs font-semibold uppercase tracking-wider mb-4">
              <ImageIcon className="w-3.5 h-3.5" />
              21-Year Global Visual Archive
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
              Photo Journey & Speaking Leadership
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-2xl">
              Curated interactive collages showcasing 25 years of engineering evolution, global consulting across 21 years, keynote speaking, and community building.
            </p>
          </div>

          {isAdminLoggedIn && (
            <button
              onClick={openAdminModal}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-accent text-navy-deep font-semibold text-xs sm:text-sm hover:bg-cyan-400 transition-all self-start md:self-auto shadow-md"
            >
              <Upload className="w-4 h-4" />
              <span>Manage Gallery & Upload Photos</span>
            </button>
          )}
        </div>

        {/* Categories Pill Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-cyan-accent text-navy-deep shadow-md'
                  : 'bg-navy-card/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60'
              }`}
            >
              {cat.id === 'travel-collage' && <Layers className="w-3.5 h-3.5" />}
              {cat.id === 'all' && <LayoutGrid className="w-3.5 h-3.5" />}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* YEAR-BY-YEAR COLLAGE VIEW (Space-Saving Bento Collages) */}
        {activeCategory === 'travel-collage' ? (
          <div className="space-y-14">
            {travelYears.map((yearGroup) => {
              const yearPhotos = gallery.filter((img) => img.category === yearGroup.id);
              if (yearPhotos.length === 0) return null;

              const featuredPhoto = yearPhotos[0];
              const companionPhotos = yearPhotos.slice(1, 5); // Up to 4 supporting photos in the collage preview

              return (
                <div
                  key={yearGroup.id}
                  className="p-6 sm:p-8 rounded-3xl bg-navy-card/80 border border-slate-800 hover:border-amber-500/30 transition-all shadow-xl"
                >
                  {/* Collage Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                        Era: {yearGroup.era}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                        {yearGroup.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setActiveCategory(yearGroup.id)}
                      className="text-xs font-semibold text-cyan-accent hover:underline self-start sm:self-auto"
                    >
                      View all {yearPhotos.length} photos from {yearGroup.era} →
                    </button>
                  </div>

                  {/* Bento Collage Grid — Perfectly side-by-side when exactly 2 photos */}
                  {yearPhotos.length === 2 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {yearPhotos.map((photo) => (
                        <div
                          key={photo.id}
                          onClick={() => setLightboxImage(photo)}
                          className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 border border-slate-700/80 cursor-pointer group shadow-lg"
                        >
                          <LazyImage
                            src={photo.url}
                            alt={photo.altText || photo.title}
                            containerClassName="w-full h-full"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5">
                            <span className="text-xs font-bold text-amber-400 block mb-1">
                              {photo.year} Milestone
                            </span>
                            <h4 className="text-base sm:text-lg font-serif font-bold text-white">
                              {photo.title}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      {/* Main Hero Shot in Collage */}
                      <div
                        onClick={() => setLightboxImage(featuredPhoto)}
                        className="lg:col-span-2 relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 border border-slate-700/80 cursor-pointer group shadow-lg"
                      >
                        <LazyImage
                          src={featuredPhoto.url}
                          alt={featuredPhoto.altText || featuredPhoto.title}
                          containerClassName="w-full h-full"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                          <span className="text-xs font-bold text-amber-400 block">
                            Featured Memory • {featuredPhoto.year}
                          </span>
                          <h4 className="text-base font-serif font-bold text-white">
                            {featuredPhoto.title}
                          </h4>
                        </div>
                      </div>

                      {/* Side Companion Thumbnails Grid */}
                      <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                        {companionPhotos.map((compPhoto) => (
                          <div
                            key={compPhoto.id}
                            onClick={() => setLightboxImage(compPhoto)}
                            className="relative rounded-2xl overflow-hidden aspect-[16/10] lg:aspect-auto lg:h-full bg-slate-900 border border-slate-700/80 cursor-pointer group shadow-md"
                          >
                            <LazyImage
                              src={compPhoto.url}
                              alt={compPhoto.altText || compPhoto.title}
                              containerClassName="w-full h-full"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3">
                              <h5 className="text-xs font-serif font-bold text-white line-clamp-1">
                                {compPhoto.title}
                              </h5>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* STANDARD MASONRY GRID (Dynamically aligned based on count) */
          <div
            className={`grid gap-6 ${
              filteredGallery.length === 1
                ? 'grid-cols-1 max-w-xl mx-auto'
                : filteredGallery.length === 2
                ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {filteredGallery.map((image) => (
              <div
                key={image.id}
                onClick={() => setLightboxImage(image)}
                className="group relative rounded-3xl overflow-hidden bg-navy-card border border-slate-800 hover:border-cyan-accent/50 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
              >
                <div
                  className={`relative aspect-[16/11] overflow-hidden ${
                    image.url.includes('logo') ? 'bg-white p-6 flex items-center justify-center' : 'bg-slate-900'
                  }`}
                >
                  <LazyImage
                    src={image.url}
                    alt={image.altText || image.title}
                    containerClassName="w-full h-full flex items-center justify-center"
                    className={
                      image.url.includes('logo')
                        ? 'w-full h-full object-contain'
                        : 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                    }
                  />

                  {/* Featured Star Badge */}
                  {image.isFeatured && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-500/90 text-navy-deep text-[11px] font-bold inline-flex items-center gap-1 shadow-md">
                      <Star className="w-3 h-3 fill-navy-deep" />
                      <span>Featured</span>
                    </div>
                  )}

                  {/* Year Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#0A1128]/80 backdrop-blur-md border border-slate-700 text-xs font-semibold text-cyan-accent">
                    {image.year}
                  </div>
                </div>

                {/* Card Footer Info */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                      {image.category}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-cyan-accent transition-colors">
                      {image.title}
                    </h3>
                    {image.caption && (
                      <p className="text-xs text-slate-300 line-clamp-2 mt-1.5">
                        {image.caption}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400 pt-4 mt-4 border-t border-slate-800">
                    {image.location ? (
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {image.location}
                      </span>
                    ) : (
                      <span>Life Archive</span>
                    )}

                    <span className="inline-flex items-center gap-1 text-cyan-accent font-semibold group-hover:translate-x-1 transition-transform">
                      View Story <Maximize2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#060B19]/90 backdrop-blur-xl p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-3xl bg-navy-card border border-slate-700/80 overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-[#0A1128]/80 p-2.5 text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Photo */}
            <div
              className={`lg:w-3/5 flex items-center justify-center relative overflow-hidden p-6 ${
                lightboxImage.url.includes('logo') ? 'bg-white' : 'bg-black'
              }`}
            >
              <LazyImage
                priority={true}
                src={lightboxImage.url}
                alt={lightboxImage.altText || lightboxImage.title}
                containerClassName="w-full h-full flex items-center justify-center"
                className="max-h-[70vh] lg:max-h-[85vh] w-auto h-auto object-contain mx-auto"
              />
            </div>

            {/* Right Story Details */}
            <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase">
                    {lightboxImage.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {lightboxImage.year}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  {lightboxImage.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {lightboxImage.story || lightboxImage.caption}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-accent" />
                  <span>{lightboxImage.location || 'Ettimadai to Global Journey'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
