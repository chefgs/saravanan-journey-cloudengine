import type { Metadata } from "next";
import "./globals.css";
import { JourneyProvider } from "@/context/JourneyContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://gsaravanan-journey.vercel.app"),
  title: "From a Humble Student to Founder | Saravanan Gnanaguru",
  description:
    "A 25-year journey from a humble engineering student to software professional and founder of CloudEngine Labs — shaped by perseverance, continuous learning, gratitude, and self-employment.",
  keywords: [
    "Saravanan Gnanaguru",
    "CloudEngine Labs",
    "Amrita Institute of Technology Batch of 2001",
    "Silver Jubilee 2026",
    "Cloud Architecture",
    "DevSecOps Consulting",
    "Founder Journey",
    "Self-Employment"
  ],
  openGraph: {
    title: "From a Humble Student to Founder | Saravanan Gnanaguru",
    description:
      "A 25-year journey of perseverance, continuous learning, survival, gratitude, and self-employment.",
    url: "https://gsaravanan-journey.vercel.app",
    siteName: "Saravanan Gnanaguru — 25-Year Journey",
    images: [
      {
        url: "/saravanan-headshot.jpg",
        width: 1200,
        height: 630,
        alt: "Saravanan Gnanaguru — Founder of CloudEngine Labs"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "From a Humble Student to Founder | Saravanan Gnanaguru",
    description:
      "A 25-year journey from Amrita Batch of 2001 to founder of CloudEngine Labs.",
    images: [
      "/saravanan-headshot.jpg"
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredDataPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saravanan Gnanaguru",
    jobTitle: "Founder & Cloud Architect",
    worksFor: {
      "@type": "Organization",
      name: "CloudEngine Labs"
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Amrita Institute of Technology, Ettimadai"
    },
    url: "https://cloudenginelabs.io",
    sameAs: ["https://www.linkedin.com/in/saravanan-gnanaguru/"]
  };

  const structuredDataOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CloudEngine Labs",
    url: "https://cloudenginelabs.io",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop",
    description:
      "A process-first technology consulting company helping software product teams build and scale secure, reliable, and maintainable applications.",
    founder: {
      "@type": "Person",
      name: "Saravanan Gnanaguru"
    }
  };

  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([structuredDataPerson, structuredDataOrg])
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A1128] text-slate-100">
        <JourneyProvider>{children}</JourneyProvider>
      </body>
    </html>
  );
}
