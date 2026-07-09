"use client";

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, Share2, Copy, Check, Send, Sparkles } from 'lucide-react';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';

interface AlumniQRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AlumniQRModal({ isOpen, onClose }: AlumniQRModalProps) {
  const currentUrl = 'https://gsaravanan-journey.vercel.app';
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareText = encodeURIComponent(
    "Celebrating a 25-year journey from Amrita Batch of 2001 to Founder of CloudEngine Labs — average student to self-employed founder. Explore my story:"
  );

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}%20${encodeURIComponent(currentUrl)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/80 backdrop-blur-md p-4 animate-fade-in">
      <div className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-[#111C3A] to-[#0A1128] border border-cyan-accent/30 p-6 sm:p-8 shadow-2xl shadow-cyan-accent/10">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Alumni Gathering 2026
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">
            Share the Journey
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            Scan with a phone camera to open this visual story at the Amrita Batch of 2001 Silver Jubilee.
          </p>
        </div>

        {/* QR Code Card */}
        <div className="flex justify-center my-6">
          <div className="p-5 rounded-2xl bg-white shadow-xl flex flex-col items-center">
            <QRCodeSVG
              value={currentUrl}
              size={200}
              level="H"
              includeMargin={true}
              imageSettings={{
                src: "/saravanan-qr-center.png",
                x: undefined,
                y: undefined,
                height: 46,
                width: 46,
                excavate: true
              }}
            />
            <span className="mt-3 text-xs font-semibold text-navy-deep tracking-wide uppercase">
              Saravanan Gnanaguru • 25 Years
            </span>
          </div>
        </div>

        {/* URL copy bar */}
        <div className="flex items-center gap-2 rounded-xl bg-slate-900/80 border border-slate-700/60 p-2 mb-6">
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="w-full bg-transparent text-xs text-slate-300 px-2 outline-none truncate"
          />
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-accent text-navy-deep font-semibold text-xs hover:bg-cyan-400 transition-colors shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" /> Copied
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Copy Link
              </>
            )}
          </button>
        </div>

        {/* Share buttons */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0A66C2]/20 border border-[#0A66C2]/50 text-sky-300 hover:bg-[#0A66C2]/30 text-xs font-semibold transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
            Share on LinkedIn
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366]/20 border border-[#25D366]/50 text-emerald-300 hover:bg-[#25D366]/30 text-xs font-semibold transition-colors"
          >
            <Send className="w-4 h-4" />
            WhatsApp Alumni
          </a>
        </div>
      </div>
    </div>
  );
}
