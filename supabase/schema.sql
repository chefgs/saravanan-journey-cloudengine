-- ==============================================================================
-- Supabase Schema for Saravanan Gnanaguru's 25-Year Journey & CloudEngine Labs
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Table: milestones
CREATE TABLE IF NOT EXISTS public.milestones (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  period TEXT NOT NULL,
  year INTEGER NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT NOT NULL,
  location TEXT,
  organization TEXT,
  lesson_learned TEXT,
  gratitude_note TEXT,
  external_link_label TEXT,
  external_link_url TEXT,
  category TEXT NOT NULL DEFAULT 'career',
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Table: gallery_images
CREATE TABLE IF NOT EXISTS public.gallery_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  url TEXT NOT NULL,
  title TEXT NOT NULL,
  caption TEXT,
  story TEXT,
  year TEXT NOT NULL,
  category TEXT NOT NULL,
  location TEXT,
  alt_text TEXT NOT NULL,
  is_featured BOOLEAN DEFAULT FALSE,
  order_index INTEGER NOT NULL DEFAULT 0,
  milestone_id UUID REFERENCES public.milestones(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Table: site_content (Store Wheel of Life, Lessons, and Gratitude JSON state)
CREATE TABLE IF NOT EXISTS public.site_content (
  key TEXT PRIMARY KEY,
  content JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE public.milestones ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- Public READ access for published content
CREATE POLICY "Public read access for milestones"
  ON public.milestones FOR SELECT USING (true);

CREATE POLICY "Public read access for gallery_images"
  ON public.gallery_images FOR SELECT USING (true);

CREATE POLICY "Public read access for site_content"
  ON public.site_content FOR SELECT USING (true);

-- Admin WRITE access (Authenticated Supabase Users Only)
CREATE POLICY "Admin write access for milestones"
  ON public.milestones FOR ALL
  USING (auth.role() = 'authenticated');

CREATE POLICY "Admin write access for gallery_images"
  ON public.gallery_images FOR ALL
  USING (auth.role() = 'authenticated');

CREATE POLICY "Admin write access for site_content"
  ON public.site_content FOR ALL
  USING (auth.role() = 'authenticated');

-- ==============================================================================
-- STORAGE BUCKET FOR PHOTOS
-- ==============================================================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('journey-photos', 'journey-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Public read access on journey-photos bucket
CREATE POLICY "Public view journey-photos"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'journey-photos');

-- Admin write access on journey-photos bucket
CREATE POLICY "Admin upload journey-photos"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'journey-photos' AND auth.role() = 'authenticated');
