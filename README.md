# From a Humble Student to Building Something of My Own

## A 25-Year Personal Milestone & CloudEngine Labs Landing Page (2001–2026)

Built for **Saravanan Gnanaguru**, Founder of **CloudEngine Labs**, marking 25 years since completing Bachelor of Engineering (Amrita Institute of Technology, Batch of 2001) and completing 3 years of self-employment in 2026.

---

## 🌟 Key Features

1. **Stunning Editorial Storytelling**: Full-width visual hero, dignified typography (`Playfair Display` + `Inter`), and warm editorial spacing.
2. **Interactive 25-Year Timeline**: Filterable chronological journey covering Amrita 2001, SSN lab assistant days, Wipro 2005 entry, 18 years in enterprise architecture, and founding CloudEngine Labs.
3. **Curated Visual Life Archive**: Masonry gallery across 11 life categories with lightbox story view.
4. **Holistic Wheel of Life Chart**: Interactive SVG radar visualization referencing the **21DC Goal Progression System** and **TiE Chennai Wheel of Life**.
5. **Restrained Gratitude Section**: Deeply appreciative tributes to family, mentors (`Raghavan sir`, Wipro opportunity provider), colleagues, and clients.
6. **Alumni Event QR Code Modal**: Instant QR code generator for sharing at the 2026 Amrita Silver Jubilee gathering.
7. **Live Admin Content Management System (CMS)**:
   - Secure PIN login (Default PIN: `2026` or `2001`)
   - Add, edit, delete, and reorder milestones and gallery photos
   - Full JSON Export / Import (`saravanan_journey_2026.json`)
   - **Printable Silver Jubilee Booklet View**: Clean print-friendly document for saving to PDF or physical printing.
8. **Dual Storage Architecture**:
   - Works **100% out of the box locally** using pre-seeded data + browser persistence.
   - Ready for **Supabase Postgres + Storage + RLS** cloud sync (`supabase/schema.sql`).

---

## 🚀 Local Development Setup

```bash
# 1. Navigate to the project directory
cd saravanan-journey-cloudengine

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🔐 Admin Mode & CMS Usage

1. Click **"Admin Mode"** in the top navigation bar or footer.
2. Enter PIN **`2026`** (Jubilee Year) or **`2001`** (Graduation Year).
3. Use the tabs to:
   - Add new milestones to the timeline.
   - Upload or register new photos in the archive.
   - Edit hero headlines.
   - Export full JSON backup or restore from file.
   - Open the **Printable Booklet PDF View**.

---

## ☁️ Supabase Cloud Deployment (Optional)

To connect a live Supabase database:
1. Run the script located at `supabase/schema.sql` in your Supabase SQL editor.
2. Create `.env.local` copying values from `.env.example`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
3. Deploy to **Vercel** with zero configuration required.

---

## 📜 License & Copyright
© 2026 Saravanan Gnanaguru. Founder, CloudEngine Labs. All rights reserved.
