"use client";

import React, { useState } from 'react';
import { useJourney } from '@/context/JourneyContext';
import AlumniQRModal from '@/components/AlumniQRModal';
import {
  QrCode,
  ExternalLink,
  Compass,
  Heart
} from 'lucide-react';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';

export default function FooterSection() {
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const currentYear = 2026;

  return (
    <>
      <footer className="bg-[#060B19] border-t border-slate-800/80 py-16 px-4 sm:px-6 lg:px-8 text-slate-400 no-print">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-accent to-blue-600 flex items-center justify-center text-navy-deep font-bold">
                <Compass className="w-5 h-5 text-navy-deep" />
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-white">
                  Saravanan Gnanaguru
                </h4>
                <p className="text-xs text-slate-400">
                  Founder, CloudEngine Labs • 25-Year Journey
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Documenting a 25-year journey from completing Bachelor of Engineering in 2001 to founder of CloudEngine Labs and 3 years of self-employment.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-300">
            <a
              href="https://cloudenginelabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/95 px-3 py-1.5 rounded-lg hover:scale-105 transition-all shadow-md"
            >
              <img src="/cloudengine-logo.png" alt="CloudEngine Labs" className="h-5 w-auto" />
              <ExternalLink className="w-3.5 h-3.5 text-slate-700" />
            </a>

            <a
              href="https://www.linkedin.com/in/saravanangnanaguru/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-cyan-accent transition-colors"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={() => setQrModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>Alumni Event QR</span>
            </button>
          </div>

          {/* Copyright Column */}
          <div className="md:col-span-3 text-left md:text-right text-xs text-slate-400 space-y-1">
            <p>© {currentYear} Saravanan Gnanaguru. All rights reserved.</p>
            <p className="text-[11px] text-slate-500">
              Amrita Institute of Technology • Batch of 2001 Silver Jubilee
            </p>
          </div>
        </div>
      </footer>

      {/* Alumni QR Code Modal */}
      <AlumniQRModal
        isOpen={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
      />
    </>
  );
}
