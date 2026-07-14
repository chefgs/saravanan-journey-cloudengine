"use client";

import React, { useState } from 'react';
import { useJourney } from '@/context/JourneyContext';
import { GalleryImage } from '@/types/journey';
import { MapPin, Maximize2, Mic2, X } from 'lucide-react';
import LazyImage from '@/components/ui/LazyImage';

export default function SpeakingEventsGallerySection() {
  const { data } = useJourney();
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const speakingEvents = data.gallery
    .filter((image) => image.category === 'Speaking and community events')
    .sort((a, b) => Number(b.year) - Number(a.year) || a.orderIndex - b.orderIndex);

  if (speakingEvents.length === 0) return null;

  return (
    <section id="speaking-events" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mic2 className="w-3.5 h-3.5" />
            Speaking Events
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Speaking, Teaching & Community
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-2xl">
            Talks, keynotes, and community conversations on cloud engineering, DevSecOps, and independent consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakingEvents.map((image) => (
            <button
              key={image.id}
              onClick={() => setLightboxImage(image)}
              className="group text-left rounded-3xl overflow-hidden bg-navy-card border border-slate-800 hover:border-amber-500/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <LazyImage src={image.url} alt={image.altText || image.title} containerClassName="w-full h-full" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#0A1128]/85 border border-slate-700 text-xs font-semibold text-cyan-accent">{image.year}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-400 transition-colors">{image.title}</h3>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1.5">{image.caption}</p>
                <div className="flex items-center justify-between gap-3 text-xs text-slate-400 pt-4 mt-4 border-t border-slate-800">
                  <span className="inline-flex items-center gap-1 min-w-0"><MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />{image.location}</span>
                  <span className="inline-flex items-center gap-1 text-cyan-accent font-semibold shrink-0">View <Maximize2 className="w-3 h-3" /></span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div onClick={() => setLightboxImage(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-[#060B19]/90 backdrop-blur-xl p-4 sm:p-8">
          <div onClick={(event) => event.stopPropagation()} className="relative max-w-4xl w-full rounded-3xl bg-navy-card border border-slate-700/80 overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]">
            <button onClick={() => setLightboxImage(null)} className="absolute top-4 right-4 z-10 rounded-full bg-[#0A1128]/80 p-2.5 text-slate-300 hover:text-white hover:bg-slate-800" aria-label="Close speaking event photo"><X className="w-5 h-5" /></button>
            <div className="lg:w-3/5 flex items-center justify-center overflow-hidden p-6 bg-black"><LazyImage priority src={lightboxImage.url} alt={lightboxImage.altText || lightboxImage.title} containerClassName="w-full h-full flex items-center justify-center" className="max-h-[70vh] lg:max-h-[85vh] w-auto h-auto object-contain mx-auto" /></div>
            <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div><span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">{lightboxImage.year}</span><h3 className="text-2xl font-serif font-bold text-white mt-4 mb-3">{lightboxImage.title}</h3><p className="text-slate-300 text-sm leading-relaxed">{lightboxImage.story || lightboxImage.caption}</p></div>
              <div className="pt-6 mt-6 border-t border-slate-800 text-xs text-slate-400 inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-accent" />{lightboxImage.location}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
