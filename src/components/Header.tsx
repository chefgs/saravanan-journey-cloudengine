"use client";

import React, { useState, useEffect } from 'react';
import { useJourney } from '@/context/JourneyContext';
import AlumniQRModal from '@/components/AlumniQRModal';
import {
  Compass,
  QrCode,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  Award
} from 'lucide-react';

export default function Header() {
  const { activeSection } = useJourney();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Story', href: '#reflection', id: 'reflection' },
    { label: '25-Year Timeline', href: '#timeline', id: 'timeline' },
    { label: 'Archive Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Philosophies', href: '#philosophies', id: 'philosophies' },
    { label: 'Wheel of Life', href: '#holistic-life', id: 'holistic-life' },
    { label: 'Gratitude', href: '#gratitude', id: 'gratitude' },
    { label: 'CloudEngine Labs', href: '#cloudengine', id: 'cloudengine' },
    { label: 'Reach Out', href: '#contact', id: 'contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
          isScrolled
            ? 'bg-[#0A1128]/90 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-xl'
            : 'bg-gradient-to-b from-[#0A1128] via-[#0A1128]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Title */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-accent to-blue-600 flex items-center justify-center text-navy-deep font-bold shadow-lg shadow-cyan-accent/20 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-navy-deep" />
            </div>
            <div>
              <span className="block text-sm sm:text-base font-serif font-bold text-white tracking-wide group-hover:text-cyan-accent transition-colors">
                Saravanan Gnanaguru
              </span>
              <span className="block text-[11px] text-slate-400 font-medium">
                Amrita 2001 • Founder, CloudEngine Labs
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex shrink-0 items-center gap-1.5 bg-navy-card/60 border border-slate-700/50 rounded-full px-3 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`shrink-0 whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-cyan-accent text-navy-deep font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions Bar (QR Share + Admin Mode) */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setQrModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-xs font-semibold transition-all shadow-sm"
              title="Share QR Code at Alumni Gathering"
            >
              <QrCode className="w-4 h-4 text-amber-400" />
              <span>Alumni QR</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-800 bg-[#0A1128]/95 backdrop-blur-xl px-6 py-5 mt-3 space-y-3 shadow-2xl">
            <div className="flex flex-wrap gap-2 pb-3 border-b border-slate-800">
              <button
                onClick={() => {
                  setQrModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-semibold"
              >
                <QrCode className="w-4 h-4" /> Share at Alumni Gathering
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-cyan-accent text-navy-deep font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Alumni QR Code Modal */}
      <AlumniQRModal
        isOpen={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
      />
    </>
  );
}
