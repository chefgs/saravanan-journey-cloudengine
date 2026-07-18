export type MilestoneCategory =
  | 'education'
  | 'career'
  | 'entrepreneurship'
  | 'global-travel'
  | 'reflection';

export type GalleryCategory = string;

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  caption?: string;
  story?: string;
  year: string;
  category: GalleryCategory;
  location?: string;
  altText: string;
  isFeatured?: boolean;
  orderIndex: number;
}

export interface Milestone {
  id: string;
  period: string;
  year: number;
  title: string;
  subtitle?: string;
  description: string;
  location?: string;
  organization?: string;
  photos: GalleryImage[];
  lessonLearned?: string;
  gratitudeNote?: string;
  externalLink?: { label: string; url: string };
  category: MilestoneCategory;
  orderIndex: number;
}

export interface LessonCard {
  id: string;
  title: string;
  quoteOrHighlight: string;
  body: string;
  bulletPoints?: string[];
}

export interface WheelOfLifeDimension {
  id: string;
  name: string;
  score: number; // 1 to 10
  reflection: string;
  color: string;
}

export interface GratitudePerson {
  name: string;
  roleOrRelation: string;
  websiteUrl?: string;
  websiteLabel?: string;
  message: string;
  highlight?: boolean;
}

export interface GratitudeCategory {
  id: string;
  title: string;
  people: GratitudePerson[];
}

export interface CloudEngineLabsFocusArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface HeroInfo {
  headline: string;
  subheadline: string;
  heroPhotoUrl: string;
  milestoneLabels: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
}

export interface OpeningReflection {
  introParagraph1: string;
  introParagraph2: string;
  quote: string;
}

export interface FinalMessage {
  statement: string;
  silverJubileeReflection: string;
  closingCreed: string;
}

export interface JourneyContent {
  hero: HeroInfo;
  openingReflection: OpeningReflection;
  milestones: Milestone[];
  gallery: GalleryImage[];
  lessons: LessonCard[];
  wheelOfLife: WheelOfLifeDimension[];
  gratitude: GratitudeCategory[];
  cloudEngineLabs: {
    tagline: string;
    summary: string;
    focusAreas: CloudEngineLabsFocusArea[];
  };
  finalMessage: FinalMessage;
  lastUpdated: string;
}
