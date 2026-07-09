"use client";

import React, { useState } from 'react';
import { useJourney } from '@/context/JourneyContext';
import PrintableJourneyBooklet from '@/components/PrintableJourneyBooklet';
import {
  X,
  Lock,
  Unlock,
  Plus,
  Trash2,
  Edit3,
  Download,
  Upload,
  RotateCcw,
  Printer,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { Milestone, GalleryImage, GalleryCategory } from '@/types/journey';

export default function AdminModal() {
  const {
    isAdminModalOpen,
    closeAdminModal,
    isAdminLoggedIn,
    loginAdmin,
    logoutAdmin,
    data,
    addMilestone,
    updateMilestone,
    deleteMilestone,
    addGalleryImage,
    deleteGalleryImage,
    updateHeroHeadline,
    exportJson,
    importJson,
    resetToDefault
  } = useJourney();

  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [activeTab, setActiveTab] = useState<'milestones' | 'gallery' | 'hero' | 'backup'>('milestones');
  const [printBookletOpen, setPrintBookletOpen] = useState(false);
  const [importText, setImportText] = useState('');
  const [importSuccess, setImportSuccess] = useState(false);

  // New Milestone Form State
  const [newMilestone, setNewMilestone] = useState<Partial<Milestone>>({
    period: '',
    year: 2026,
    title: '',
    subtitle: '',
    description: '',
    location: '',
    organization: '',
    category: 'career',
    orderIndex: data.milestones.length + 1,
    lessonLearned: '',
    gratitudeNote: '',
    photos: []
  });

  // New Gallery Photo Form State
  const [newPhoto, setNewPhoto] = useState<Partial<GalleryImage>>({
    url: '',
    title: '',
    caption: '',
    story: '',
    year: '2026',
    category: 'College',
    location: '',
    altText: '',
    isFeatured: false,
    orderIndex: data.gallery.length + 1
  });

  // Hero Edit Form
  const [heroHeadline, setHeroHeadline] = useState(data.hero.headline);
  const [heroSubheadline, setHeroSubheadline] = useState(data.hero.subheadline);

  if (!isAdminModalOpen) return null;

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(pinInput.trim());
    if (success) {
      setPinError(false);
      setPinInput('');
    } else {
      setPinError(true);
    }
  };

  const handleAddMilestone = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMilestone.title || !newMilestone.description || !newMilestone.period) return;

    addMilestone({
      id: `milestone-${Date.now()}`,
      period: newMilestone.period,
      year: Number(newMilestone.year) || 2026,
      title: newMilestone.title,
      subtitle: newMilestone.subtitle || '',
      description: newMilestone.description,
      location: newMilestone.location || '',
      organization: newMilestone.organization || '',
      category: newMilestone.category || 'career',
      orderIndex: Number(newMilestone.orderIndex) || data.milestones.length + 1,
      lessonLearned: newMilestone.lessonLearned || undefined,
      gratitudeNote: newMilestone.gratitudeNote || undefined,
      photos: []
    });

    // Reset input
    setNewMilestone({
      period: '',
      year: 2026,
      title: '',
      subtitle: '',
      description: '',
      location: '',
      organization: '',
      category: 'career',
      orderIndex: data.milestones.length + 2,
      lessonLearned: '',
      gratitudeNote: '',
      photos: []
    });
  };

  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhoto.url || !newPhoto.title) return;

    addGalleryImage({
      id: `photo-${Date.now()}`,
      url: newPhoto.url,
      title: newPhoto.title,
      caption: newPhoto.caption || '',
      story: newPhoto.story || '',
      year: newPhoto.year || '2026',
      category: (newPhoto.category as GalleryCategory) || 'College',
      location: newPhoto.location || '',
      altText: newPhoto.altText || newPhoto.title,
      isFeatured: newPhoto.isFeatured || false,
      orderIndex: data.gallery.length + 1
    });

    setNewPhoto({
      url: '',
      title: '',
      caption: '',
      story: '',
      year: '2026',
      category: 'College',
      location: '',
      altText: '',
      isFeatured: false
    });
  };

  const handleHeroSave = () => {
    updateHeroHeadline(heroHeadline, heroSubheadline);
  };

  const handleImport = () => {
    const success = importJson(importText);
    if (success) {
      setImportSuccess(true);
      setTimeout(() => setImportSuccess(false), 3000);
      setImportText('');
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/85 backdrop-blur-xl p-4 sm:p-6 overflow-y-auto animate-fade-in">
        <div className="relative w-full max-w-4xl rounded-3xl bg-navy-card border border-slate-700/80 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-accent/20 border border-cyan-accent/40 flex items-center justify-center text-cyan-accent">
                {isAdminLoggedIn ? <Unlock className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">
                  Content Management Portal
                </h3>
                <p className="text-xs text-slate-400">
                  {isAdminLoggedIn
                    ? 'Admin Access Granted — Live Updates & JSON Persistence'
                    : 'PIN Protected Admin Access'}
                </p>
              </div>
            </div>

            <button
              onClick={closeAdminModal}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto pt-6">
            {!isAdminLoggedIn ? (
              /* LOGIN SCREEN */
              <div className="max-w-md mx-auto py-8 text-center space-y-6">
                <div className="p-4 rounded-2xl bg-[#0A1128] border border-slate-800 text-sm text-slate-300">
                  Enter Admin PIN to edit milestones, upload gallery photos, export JSON, or generate printable booklets.
                  <span className="block text-xs font-semibold text-amber-400 mt-2">
                    Tip: Enter PIN &quot;2026&quot; (Jubilee Year) or &quot;2001&quot; (Graduation Year)
                  </span>
                </div>

                <form onSubmit={handlePinSubmit} className="space-y-4">
                  <input
                    type="password"
                    placeholder="Enter PIN (e.g. 2026)"
                    value={pinInput}
                    onChange={(e) => setPinInput(e.target.value)}
                    className="w-full bg-[#0A1128] border border-slate-700 rounded-xl px-4 py-3 text-center font-mono text-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-accent"
                  />
                  {pinError && (
                    <p className="text-xs text-rose-400 font-semibold">
                      Incorrect PIN. Please try 2026 or 2001.
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-cyan-accent text-navy-deep font-bold text-sm hover:bg-cyan-400 transition-all shadow-lg"
                  >
                    Unlock Admin CMS
                  </button>
                </form>
              </div>
            ) : (
              /* LOGGED IN CMS TABS */
              <div className="space-y-6">
                {/* Navigation Tabs */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      { id: 'milestones', label: 'Milestones Manager' },
                      { id: 'gallery', label: 'Photo Archive Manager' },
                      { id: 'hero', label: 'Hero Settings' },
                      { id: 'backup', label: 'Export / Import & Booklet' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                          activeTab === tab.id
                            ? 'bg-cyan-accent text-navy-deep'
                            : 'bg-[#0A1128] text-slate-300 hover:text-white border border-slate-800'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={logoutAdmin}
                    className="px-3.5 py-1.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-semibold hover:bg-rose-500/30"
                  >
                    Lock & Logout
                  </button>
                </div>

                {/* TAB 1: MILESTONES */}
                {activeTab === 'milestones' && (
                  <div className="space-y-8">
                    {/* Add Milestone Form */}
                    <form
                      onSubmit={handleAddMilestone}
                      className="p-6 rounded-2xl bg-[#0A1128] border border-slate-800 space-y-4"
                    >
                      <h4 className="text-sm font-bold text-cyan-accent uppercase tracking-wider">
                        Add New Milestone
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <input
                          type="text"
                          placeholder="Period (e.g. 2005–2010)"
                          value={newMilestone.period}
                          onChange={(e) => setNewMilestone({ ...newMilestone, period: e.target.value })}
                          className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                          required
                        />
                        <input
                          type="number"
                          placeholder="Year (e.g. 2005)"
                          value={newMilestone.year}
                          onChange={(e) => setNewMilestone({ ...newMilestone, year: Number(e.target.value) })}
                          className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                          required
                        />
                        <select
                          value={newMilestone.category}
                          onChange={(e) => setNewMilestone({ ...newMilestone, category: e.target.value as any })}
                          className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        >
                          <option value="education">Education</option>
                          <option value="career">Career</option>
                          <option value="entrepreneurship">Entrepreneurship</option>
                          <option value="reflection">Reflection</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Title (e.g. Senior Cloud Architect)"
                          value={newMilestone.title}
                          onChange={(e) => setNewMilestone({ ...newMilestone, title: e.target.value })}
                          className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Organization / Subtitle"
                          value={newMilestone.organization}
                          onChange={(e) => setNewMilestone({ ...newMilestone, organization: e.target.value })}
                          className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        />
                      </div>

                      <textarea
                        placeholder="Milestone Description Narrative..."
                        value={newMilestone.description}
                        onChange={(e) => setNewMilestone({ ...newMilestone, description: e.target.value })}
                        rows={3}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white"
                        required
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Lesson Learned (Optional)"
                          value={newMilestone.lessonLearned}
                          onChange={(e) => setNewMilestone({ ...newMilestone, lessonLearned: e.target.value })}
                          className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        />
                        <input
                          type="text"
                          placeholder="Gratitude Note (Optional)"
                          value={newMilestone.gratitudeNote}
                          onChange={(e) => setNewMilestone({ ...newMilestone, gratitudeNote: e.target.value })}
                          className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-accent text-navy-deep font-bold text-xs hover:bg-cyan-400"
                      >
                        <Plus className="w-4 h-4" /> Add Milestone to Timeline
                      </button>
                    </form>

                    {/* Existing Milestones List */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Existing Milestones ({data.milestones.length})
                      </h4>
                      {data.milestones.map((m) => (
                        <div
                          key={m.id}
                          className="p-4 rounded-2xl bg-[#0A1128] border border-slate-800 flex items-center justify-between gap-4"
                        >
                          <div>
                            <span className="px-2.5 py-0.5 rounded bg-cyan-accent/20 text-cyan-accent text-[11px] font-bold">
                              {m.period}
                            </span>
                            <h5 className="text-sm font-serif font-bold text-white mt-1">
                              {m.title}
                            </h5>
                            <p className="text-xs text-slate-400 line-clamp-1">
                              {m.description}
                            </p>
                          </div>

                          <button
                            onClick={() => deleteMilestone(m.id)}
                            className="p-2 rounded-xl bg-rose-500/20 text-rose-300 hover:bg-rose-500/30"
                            title="Delete Milestone"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 2: GALLERY MANAGER */}
                {activeTab === 'gallery' && (
                  <div className="space-y-8">
                    <form
                      onSubmit={handleAddPhoto}
                      className="p-6 rounded-2xl bg-[#0A1128] border border-slate-800 space-y-4"
                    >
                      <h4 className="text-sm font-bold text-cyan-accent uppercase tracking-wider">
                        Upload / Add Photo to Archive
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Image URL (Unsplash / Supabase / Public URL)"
                          value={newPhoto.url}
                          onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
                          className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Photo Title (e.g. Amrita Campus 2001)"
                          value={newPhoto.title}
                          onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
                          className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <input
                          type="text"
                          placeholder="Year (e.g. 2001)"
                          value={newPhoto.year}
                          onChange={(e) => setNewPhoto({ ...newPhoto, year: e.target.value })}
                          className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        />
                        <select
                          value={newPhoto.category}
                          onChange={(e) => setNewPhoto({ ...newPhoto, category: e.target.value as any })}
                          className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        >
                          <option value="College">College</option>
                          <option value="First job">First job</option>
                          <option value="Software career">Software career</option>
                          <option value="Projects and workplaces">Projects and workplaces</option>
                          <option value="International travel">International travel</option>
                          <option value="Cloud and DevOps journey">Cloud and DevOps journey</option>
                          <option value="Speaking and community events">Speaking and community events</option>
                          <option value="CloudEngine Labs">CloudEngine Labs</option>
                          <option value="AI Engineering Circle">AI Engineering Circle</option>
                          <option value="Family and life moments">Family and life moments</option>
                          <option value="Self-employment milestones">Self-employment milestones</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Location (e.g. Coimbatore)"
                          value={newPhoto.location}
                          onChange={(e) => setNewPhoto({ ...newPhoto, location: e.target.value })}
                          className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                        />
                      </div>

                      <textarea
                        placeholder="Story behind the photo (Editorial lightbox narrative)..."
                        value={newPhoto.story}
                        onChange={(e) => setNewPhoto({ ...newPhoto, story: e.target.value })}
                        rows={2}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white"
                      />

                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-accent text-navy-deep font-bold text-xs hover:bg-cyan-400"
                      >
                        <Plus className="w-4 h-4" /> Add Photo to Archive
                      </button>
                    </form>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {data.gallery.map((img) => (
                        <div
                          key={img.id}
                          className="p-3 rounded-2xl bg-[#0A1128] border border-slate-800 flex items-center justify-between gap-3"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={img.url}
                              alt={img.title}
                              className="w-12 h-12 rounded-xl object-cover"
                            />
                            <div>
                              <span className="text-xs font-serif font-bold text-white block">
                                {img.title}
                              </span>
                              <span className="text-[10px] text-slate-400">
                                {img.year} • {img.category}
                              </span>
                            </div>
                          </div>

                          <button
                            onClick={() => deleteGalleryImage(img.id)}
                            className="p-2 rounded-xl bg-rose-500/20 text-rose-300 hover:bg-rose-500/30"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 3: HERO SETTINGS */}
                {activeTab === 'hero' && (
                  <div className="p-6 rounded-2xl bg-[#0A1128] border border-slate-800 space-y-4">
                    <h4 className="text-sm font-bold text-cyan-accent uppercase tracking-wider">
                      Edit Hero Headline & Subheadline
                    </h4>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Hero Headline
                      </label>
                      <input
                        type="text"
                        value={heroHeadline}
                        onChange={(e) => setHeroHeadline(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Hero Supporting Text
                      </label>
                      <textarea
                        rows={3}
                        value={heroSubheadline}
                        onChange={(e) => setHeroSubheadline(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white"
                      />
                    </div>

                    <button
                      onClick={handleHeroSave}
                      className="px-5 py-2.5 rounded-xl bg-cyan-accent text-navy-deep font-bold text-xs"
                    >
                      Save Hero Updates
                    </button>
                  </div>
                )}

                {/* TAB 4: EXPORT / IMPORT & PRINTABLE BOOKLET */}
                {activeTab === 'backup' && (
                  <div className="space-y-6">
                    {/* Booklet Preview & Export PDF */}
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-[#0A1128] border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div>
                        <h4 className="text-base font-serif font-bold text-white">
                          Silver Jubilee Printable Booklet Mode
                        </h4>
                        <p className="text-xs text-slate-300 mt-1">
                          Open a clean, print-optimized document view to Save as PDF or print offline for alumni events.
                        </p>
                      </div>

                      <button
                        onClick={() => setPrintBookletOpen(true)}
                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-navy-deep font-bold text-xs hover:bg-amber-400 transition-colors shrink-0 shadow-lg"
                      >
                        <Printer className="w-4 h-4" /> Open Printable Booklet / PDF
                      </button>
                    </div>

                    {/* JSON Export */}
                    <div className="p-6 rounded-2xl bg-[#0A1128] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          Export Complete Journey JSON
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">
                          Download all milestones, gallery items, and reflections as a backup (`saravanan_journey_2026.json`).
                        </p>
                      </div>

                      <button
                        onClick={exportJson}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-accent text-navy-deep font-bold text-xs hover:bg-cyan-400"
                      >
                        <Download className="w-4 h-4" /> Export JSON
                      </button>
                    </div>

                    {/* JSON Import */}
                    <div className="p-6 rounded-2xl bg-[#0A1128] border border-slate-800 space-y-3">
                      <h4 className="text-sm font-bold text-white">
                        Restore / Import Journey JSON
                      </h4>
                      <textarea
                        rows={3}
                        placeholder="Paste exported journey JSON here..."
                        value={importText}
                        onChange={(e) => setImportText(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 font-mono text-xs text-white"
                      />

                      <div className="flex items-center justify-between">
                        <button
                          onClick={handleImport}
                          className="px-5 py-2 rounded-xl bg-emerald-500 text-navy-deep font-bold text-xs hover:bg-emerald-400"
                        >
                          Import JSON Data
                        </button>

                        <button
                          onClick={resetToDefault}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white text-xs font-semibold"
                        >
                          <RotateCcw className="w-3.5 h-3.5" /> Reset to Factory Seed
                        </button>
                      </div>

                      {importSuccess && (
                        <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Data imported successfully!
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Printable Booklet Modal View */}
      <PrintableJourneyBooklet
        isOpen={printBookletOpen}
        onClose={() => setPrintBookletOpen(false)}
      />
    </>
  );
}
