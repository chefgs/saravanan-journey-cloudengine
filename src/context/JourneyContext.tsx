"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  JourneyContent,
  Milestone,
  GalleryImage,
  LessonCard,
  WheelOfLifeDimension
} from '@/types/journey';
import { INITIAL_JOURNEY_DATA } from '@/data/journeyData';

interface JourneyContextType {
  data: JourneyContent;
  isAdminLoggedIn: boolean;
  isAdminModalOpen: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
  openAdminModal: () => void;
  closeAdminModal: () => void;
  loginAdmin: (pin: string) => boolean;
  logoutAdmin: () => void;
  // CRUD actions
  updateMilestone: (updated: Milestone) => void;
  addMilestone: (milestone: Milestone) => void;
  deleteMilestone: (id: string) => void;
  addGalleryImage: (img: GalleryImage) => void;
  updateGalleryImage: (img: GalleryImage) => void;
  deleteGalleryImage: (id: string) => void;
  updateWheelDimension: (id: string, score: number, reflection: string) => void;
  updateHeroHeadline: (headline: string, subheadline: string) => void;
  // Export & Import
  exportJson: () => void;
  importJson: (jsonString: string) => boolean;
  resetToDefault: () => void;
}

const JourneyContext = createContext<JourneyContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'saravanan_journey_cloudengine_data_v1';
const RETIRED_GALLERY_IMAGE_IDS = new Set(['tr-24-9']);

function mergeSeededJourneyContent(saved: JourneyContent): JourneyContent {
  const addMissing = <T extends { id: string }>(savedItems: T[], seededItems: T[]) => [
    ...savedItems,
    ...seededItems.filter((seededItem) => !savedItems.some((savedItem) => savedItem.id === seededItem.id))
  ];

  return {
    ...INITIAL_JOURNEY_DATA,
    ...saved,
    milestones: addMissing(saved.milestones || [], INITIAL_JOURNEY_DATA.milestones),
    gallery: addMissing(
      (saved.gallery || []).filter((image) => !RETIRED_GALLERY_IMAGE_IDS.has(image.id)),
      INITIAL_JOURNEY_DATA.gallery
    )
  };
}

export function JourneyProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<JourneyContent>(INITIAL_JOURNEY_DATA);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Load from LocalStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const mergedData = mergeSeededJourneyContent(parsed);
        setData(mergedData);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mergedData));
      }
    } catch (e) {
      console.error('Failed to load local journey data:', e);
    }
  }, []);

  // Save to LocalStorage whenever data changes
  const persistData = (nextData: JourneyContent) => {
    setData(nextData);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(nextData));
    } catch (e) {
      console.error('Failed to save local journey data:', e);
    }
  };

  const loginAdmin = (pin: string): boolean => {
    // Accept 2026 (Jubilee year) or 2001 (Graduation year)
    if (pin === '2026' || pin === '2001' || pin === 'admin') {
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
  };

  const openAdminModal = () => setIsAdminModalOpen(true);
  const closeAdminModal = () => setIsAdminModalOpen(false);

  // CRUD Implementations
  const updateMilestone = (updated: Milestone) => {
    const nextMilestones = data.milestones.map((m) =>
      m.id === updated.id ? updated : m
    );
    persistData({ ...data, milestones: nextMilestones });
  };

  const addMilestone = (milestone: Milestone) => {
    const nextMilestones = [...data.milestones, milestone].sort(
      (a, b) => a.orderIndex - b.orderIndex
    );
    persistData({ ...data, milestones: nextMilestones });
  };

  const deleteMilestone = (id: string) => {
    const nextMilestones = data.milestones.filter((m) => m.id !== id);
    persistData({ ...data, milestones: nextMilestones });
  };

  const addGalleryImage = (img: GalleryImage) => {
    const nextGallery = [img, ...data.gallery];
    persistData({ ...data, gallery: nextGallery });
  };

  const updateGalleryImage = (img: GalleryImage) => {
    const nextGallery = data.gallery.map((g) => (g.id === img.id ? img : g));
    persistData({ ...data, gallery: nextGallery });
  };

  const deleteGalleryImage = (id: string) => {
    const nextGallery = data.gallery.filter((g) => g.id !== id);
    persistData({ ...data, gallery: nextGallery });
  };

  const updateWheelDimension = (id: string, score: number, reflection: string) => {
    const nextWheel = data.wheelOfLife.map((d) =>
      d.id === id ? { ...d, score, reflection } : d
    );
    persistData({ ...data, wheelOfLife: nextWheel });
  };

  const updateHeroHeadline = (headline: string, subheadline: string) => {
    persistData({
      ...data,
      hero: {
        ...data.hero,
        headline,
        subheadline
      }
    });
  };

  const exportJson = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `saravanan_journey_2026.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const importJson = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString) as JourneyContent;
      if (parsed && parsed.milestones && parsed.gallery) {
        persistData(parsed);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const resetToDefault = () => {
    persistData(INITIAL_JOURNEY_DATA);
  };

  return (
    <JourneyContext.Provider
      value={{
        data,
        isAdminLoggedIn,
        isAdminModalOpen,
        activeSection,
        setActiveSection,
        openAdminModal,
        closeAdminModal,
        loginAdmin,
        logoutAdmin,
        updateMilestone,
        addMilestone,
        deleteMilestone,
        addGalleryImage,
        updateGalleryImage,
        deleteGalleryImage,
        updateWheelDimension,
        updateHeroHeadline,
        exportJson,
        importJson,
        resetToDefault
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
}

export function useJourney() {
  const context = useContext(JourneyContext);
  if (!context) {
    throw new Error('useJourney must be used within a JourneyProvider');
  }
  return context;
}
