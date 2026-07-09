"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useJourney } from '@/context/JourneyContext';
import PrintableJourneyBooklet from '@/components/PrintableJourneyBooklet';
import {
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
  CheckCircle2,
  ArrowLeft,
  Compass,
  FileText,
  Image as ImageIcon
} from 'lucide-react';
import { Milestone, GalleryImage, GalleryCategory } from '@/types/journey';

export default function AdminPage() {
  const {
    isAdminLoggedIn,
    loginAdmin,
    logoutAdmin,
    data,
    addMilestone,
    updateMilestone,
    deleteMilestone,
    addGalleryImage,
    deleteGalleryImage,
    exportJson,
    importJson,
    resetToDefault
  } = useJourney();

  const [pinInput, setPinInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [activeTab, setActiveTab] = useState<'milestones' | 'gallery' | 'export' | 'print'>('milestones');
  const [jsonImportText, setJsonImportText] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [isBookletOpen, setIsBookletOpen] = useState(false);

  // New Milestone state
  const [newMilestoneTitle, setNewMilestoneTitle] = useState('');
  const [newMilestoneYear, setNewMilestoneYear] = useState('2026');
  const [newMilestonePeriod, setNewMilestonePeriod] = useState('2026');
  const [newMilestoneDesc, setNewMilestoneDesc] = useState('');

  // New Gallery Image state
  const [newImgUrl, setNewImgUrl] = useState('');
  const [newImgTitle, setNewImgTitle] = useState('');
  const [newImgCaption, setNewImgCaption] = useState('');
  const [newImgYear, setNewImgYear] = useState('2025');
  const [newImgCategory, setNewImgCategory] = useState<GalleryCategory>('CloudEngine Labs');

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(pinInput);
    if (!success) {
      setLoginError(true);
    } else {
      setLoginError(false);
      setPinInput('');
    }
  };

  const handleAddMilestone = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMilestoneTitle || !newMilestoneDesc) return;

    const newM: Milestone = {
      id: `custom-${Date.now()}`,
      period: newMilestonePeriod || newMilestoneYear,
      year: parseInt(newMilestoneYear) || 2026,
      title: newMilestoneTitle,
      description: newMilestoneDesc,
      photos: [],
      category: 'career',
      orderIndex: data.milestones.length
    };

    addMilestone(newM);
    setNewMilestoneTitle('');
    setNewMilestoneDesc('');
  };

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImgUrl || !newImgTitle) return;

    const newImg: GalleryImage = {
      id: `custom-img-${Date.now()}`,
      url: newImgUrl,
      title: newImgTitle,
      caption: newImgCaption,
      year: newImgYear,
      category: newImgCategory,
      altText: newImgTitle,
      orderIndex: data.gallery.length
    };

    addGalleryImage(newImg);
    setNewImgUrl('');
    setNewImgTitle('');
    setNewImgCaption('');
  };

  const handleImportJson = () => {
    if (!jsonImportText.trim()) return;
    const ok = importJson(jsonImportText);
    if (ok) {
      setImportStatus('JSON imported successfully! Your site updates are live.');
      setJsonImportText('');
    } else {
      setImportStatus('Failed to import JSON. Please verify syntax.');
    }
  };

  return (
    <div className="min-h-screen bg-[#081026] text-slate-100 selection:bg-cyan-accent selection:text-navy-deep">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-[#0A1128]/90 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white px-3 py-1.5 rounded-xl bg-slate-800/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Live Website</span>
            </Link>

            <span className="h-4 w-px bg-slate-800 hidden sm:block" />

            <div className="hidden sm:flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-accent" />
              <h1 className="text-sm font-serif font-bold text-white tracking-wide">
                CloudEngine Labs • Admin CMS Portal
              </h1>
            </div>
          </div>

          <div>
            {isAdminLoggedIn && (
              <button
                onClick={logoutAdmin}
                className="px-3.5 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 hover:bg-rose-500/20 text-xs font-semibold transition-all"
              >
                Sign Out Admin
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {!isAdminLoggedIn ? (
          /* LOGIN SCREEN */
          <div className="max-w-md mx-auto my-16 p-8 rounded-3xl bg-[#0A1128] border border-slate-800 shadow-2xl text-center space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-cyan-accent/15 border border-cyan-accent/30 flex items-center justify-center text-cyan-accent mx-auto">
              <Lock className="w-7 h-7" />
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-white">
                Admin Content Portal
              </h2>
              <p className="text-xs text-slate-400 mt-2">
                Manage 25-year journey milestones, photo archives, and JSON backup.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-navy-card/90 border border-slate-800 text-xs text-slate-300">
              PIN Protected Access
              <span className="block text-amber-400 font-semibold mt-1">
                Tip: Enter PIN &quot;2026&quot; (Jubilee Year) or &quot;2001&quot;
              </span>
            </div>

            <form onSubmit={handlePinSubmit} className="space-y-4">
              <input
                type="password"
                placeholder="Enter 4-Digit PIN"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-navy-card border border-slate-700 text-white text-center tracking-widest text-lg font-mono focus:outline-none focus:border-cyan-accent"
                autoFocus
              />

              {loginError && (
                <p className="text-xs text-rose-400 font-medium">
                  Invalid PIN. Please try 2026 or 2001.
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-cyan-accent text-navy-deep font-bold text-sm hover:bg-cyan-400 transition-all shadow-lg"
              >
                Access Portal
              </button>
            </form>
          </div>
        ) : (
          /* LOGGED IN DASHBOARD */
          <div className="space-y-8">
            {/* Top Bar Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveTab('milestones')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                    activeTab === 'milestones'
                      ? 'bg-cyan-accent text-navy-deep shadow-md'
                      : 'bg-[#0A1128] text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Timeline Milestones ({data.milestones.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                    activeTab === 'gallery'
                      ? 'bg-cyan-accent text-navy-deep shadow-md'
                      : 'bg-[#0A1128] text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>Gallery Archive ({data.gallery.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('export')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                    activeTab === 'export'
                      ? 'bg-cyan-accent text-navy-deep shadow-md'
                      : 'bg-[#0A1128] text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  <Download className="w-4 h-4" />
                  <span>Export & Import JSON</span>
                </button>

                <button
                  onClick={() => setActiveTab('print')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                    activeTab === 'print'
                      ? 'bg-amber-400 text-navy-deep shadow-md'
                      : 'bg-[#0A1128] text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  <Printer className="w-4 h-4" />
                  <span>Printable PDF Booklet</span>
                </button>
              </div>

              <button
                onClick={resetToDefault}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium inline-flex items-center gap-1.5 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Factory Data</span>
              </button>
            </div>

            {/* TAB 1: MILESTONES */}
            {activeTab === 'milestones' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Add Milestone Form */}
                <div className="lg:col-span-4 p-6 rounded-3xl bg-[#0A1128] border border-slate-800 space-y-4">
                  <h3 className="text-base font-serif font-bold text-white flex items-center gap-2">
                    <Plus className="w-4 h-4 text-cyan-accent" />
                    <span>Add New Milestone</span>
                  </h3>

                  <form onSubmit={handleAddMilestone} className="space-y-3">
                    <div>
                      <label className="text-[11px] text-slate-400 font-medium">Title</label>
                      <input
                        type="text"
                        placeholder="e.g. Speaking at Global DevOps Summit"
                        value={newMilestoneTitle}
                        onChange={(e) => setNewMilestoneTitle(e.target.value)}
                        className="w-full mt-1 px-3 py-2 rounded-xl bg-navy-card border border-slate-700 text-xs text-white"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[11px] text-slate-400 font-medium">Year</label>
                        <input
                          type="number"
                          value={newMilestoneYear}
                          onChange={(e) => setNewMilestoneYear(e.target.value)}
                          className="w-full mt-1 px-3 py-2 rounded-xl bg-navy-card border border-slate-700 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 font-medium">Period Tag</label>
                        <input
                          type="text"
                          value={newMilestonePeriod}
                          onChange={(e) => setNewMilestonePeriod(e.target.value)}
                          className="w-full mt-1 px-3 py-2 rounded-xl bg-navy-card border border-slate-700 text-xs text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] text-slate-400 font-medium">Description</label>
                      <textarea
                        rows={3}
                        placeholder="Detailed story or reflection..."
                        value={newMilestoneDesc}
                        onChange={(e) => setNewMilestoneDesc(e.target.value)}
                        className="w-full mt-1 px-3 py-2 rounded-xl bg-navy-card border border-slate-700 text-xs text-white"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-cyan-accent text-navy-deep font-bold text-xs hover:bg-cyan-400 transition-all shadow-md"
                    >
                      Save Milestone
                    </button>
                  </form>
                </div>

                {/* Existing Milestones List */}
                <div className="lg:col-span-8 space-y-3">
                  <h3 className="text-base font-serif font-bold text-white mb-2">
                    Active Milestones ({data.milestones.length})
                  </h3>

                  <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                    {data.milestones.map((m) => (
                      <div
                        key={m.id}
                        className="p-4 rounded-2xl bg-[#0A1128] border border-slate-800 flex items-start justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono font-bold text-cyan-accent">
                              {m.period}
                            </span>
                            <span className="text-xs font-semibold text-white">
                              {m.title}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-2">
                            {m.description}
                          </p>
                        </div>

                        <button
                          onClick={() => deleteMilestone(m.id)}
                          className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-all shrink-0"
                          title="Delete Milestone"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: GALLERY ARCHIVES */}
            {activeTab === 'gallery' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Add Photo Form */}
                <div className="lg:col-span-4 p-6 rounded-3xl bg-[#0A1128] border border-slate-800 space-y-4">
                  <h3 className="text-base font-serif font-bold text-white flex items-center gap-2">
                    <Plus className="w-4 h-4 text-cyan-accent" />
                    <span>Add New Archive Photo</span>
                  </h3>

                  <form onSubmit={handleAddImage} className="space-y-3">
                    <div>
                      <label className="text-[11px] text-slate-400 font-medium">Image URL / Path</label>
                      <input
                        type="text"
                        placeholder="e.g. /cloudengine-logo.png or https://..."
                        value={newImgUrl}
                        onChange={(e) => setNewImgUrl(e.target.value)}
                        className="w-full mt-1 px-3 py-2 rounded-xl bg-navy-card border border-slate-700 text-xs text-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-slate-400 font-medium">Title</label>
                      <input
                        type="text"
                        placeholder="e.g. HashiConf Boston Keynote"
                        value={newImgTitle}
                        onChange={(e) => setNewImgTitle(e.target.value)}
                        className="w-full mt-1 px-3 py-2 rounded-xl bg-navy-card border border-slate-700 text-xs text-white"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[11px] text-slate-400 font-medium">Year</label>
                        <input
                          type="text"
                          value={newImgYear}
                          onChange={(e) => setNewImgYear(e.target.value)}
                          className="w-full mt-1 px-3 py-2 rounded-xl bg-navy-card border border-slate-700 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-400 font-medium">Category</label>
                        <select
                          value={newImgCategory}
                          onChange={(e) => setNewImgCategory(e.target.value as GalleryCategory)}
                          className="w-full mt-1 px-3 py-2 rounded-xl bg-navy-card border border-slate-700 text-xs text-white"
                        >
                          <option value="CloudEngine Labs">CloudEngine Labs</option>
                          <option value="Global Consulting">Global Consulting</option>
                          <option value="Speaking & Keynotes">Speaking & Keynotes</option>
                          <option value="Family & Life">Family & Life</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] text-slate-400 font-medium">Caption</label>
                      <input
                        type="text"
                        placeholder="Short descriptive subtitle..."
                        value={newImgCaption}
                        onChange={(e) => setNewImgCaption(e.target.value)}
                        className="w-full mt-1 px-3 py-2 rounded-xl bg-navy-card border border-slate-700 text-xs text-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-cyan-accent text-navy-deep font-bold text-xs hover:bg-cyan-400 transition-all shadow-md"
                    >
                      Save Gallery Photo
                    </button>
                  </form>
                </div>

                {/* Existing Gallery List */}
                <div className="lg:col-span-8 space-y-3">
                  <h3 className="text-base font-serif font-bold text-white mb-2">
                    Active Gallery Items ({data.gallery.length})
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[600px] overflow-y-auto pr-2">
                    {data.gallery.map((img) => (
                      <div
                        key={img.id}
                        className="p-3 rounded-2xl bg-[#0A1128] border border-slate-800 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3 truncate">
                          <img
                            src={img.url}
                            alt={img.altText}
                            className="w-12 h-12 rounded-xl object-cover bg-navy-card shrink-0"
                          />
                          <div className="truncate">
                            <span className="text-xs font-semibold text-white block truncate">
                              {img.title}
                            </span>
                            <span className="text-[11px] text-slate-400 block">
                              {img.year} • {img.category}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => deleteGalleryImage(img.id)}
                          className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-all shrink-0"
                          title="Delete Photo"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: EXPORT & IMPORT */}
            {activeTab === 'export' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-[#0A1128] border border-slate-800 space-y-4">
                  <h3 className="text-xl font-serif font-bold text-white">
                    Export Full Website JSON
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Download a complete backup of all milestones, gallery items, wheel scores, and philosophies as a JSON file.
                  </p>
                  <button
                    onClick={exportJson}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-accent text-navy-deep font-bold text-sm hover:bg-cyan-400 transition-all shadow-lg"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download JSON Backup File</span>
                  </button>
                </div>

                <div className="p-8 rounded-3xl bg-[#0A1128] border border-slate-800 space-y-4">
                  <h3 className="text-xl font-serif font-bold text-white">
                    Restore / Import JSON
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Paste previously exported JSON to restore your entire timeline and gallery instantly.
                  </p>
                  <textarea
                    rows={5}
                    placeholder="Paste JSON content here..."
                    value={jsonImportText}
                    onChange={(e) => setJsonImportText(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-navy-card border border-slate-700 text-xs font-mono text-white"
                  />
                  {importStatus && (
                    <p className="text-xs text-emerald-400 font-semibold">
                      {importStatus}
                    </p>
                  )}
                  <button
                    onClick={handleImportJson}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 text-navy-deep font-bold text-sm hover:bg-amber-300 transition-all shadow-lg"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Restore Site from JSON</span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB 4: PRINTABLE BOOKLET GENERATOR */}
            {activeTab === 'print' && (
              <div className="p-8 rounded-3xl bg-[#0A1128] border border-slate-800">
                <div className="text-center max-w-2xl mx-auto mb-8">
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Printable Silver Jubilee Commemorative Booklet
                  </h3>
                  <p className="text-xs text-slate-400 mt-2">
                    Click below to open the full-screen print preview and trigger print or save as PDF.
                  </p>
                  <button
                    onClick={() => setIsBookletOpen(true)}
                    className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 text-navy-deep font-bold text-sm hover:bg-amber-300 transition-all shadow-lg"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Open Printable Booklet Preview</span>
                  </button>
                </div>

                <PrintableJourneyBooklet
                  isOpen={isBookletOpen}
                  onClose={() => setIsBookletOpen(false)}
                />
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
