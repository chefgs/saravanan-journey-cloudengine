import { JourneyContent } from '@/types/journey';

export const INITIAL_JOURNEY_DATA: JourneyContent = {
  hero: {
    headline: "From Humble Student to Entrepreneur: Building a Life with Purpose",
    subheadline: "A 25-year celebration of continuous learning, resilience, and process discipline—from engineering graduate to international consulting leader and proud founder of CloudEngine Labs.",
    heroPhotoUrl: "/saravanan-headshot.jpg",
    milestoneLabels: [
      {
        value: "Batch of 2001",
        label: "Engineering Graduate",
        sublabel: "Amrita Institute of Technology"
      },
      {
        value: "20+ Years",
        label: "In Technology",
        sublabel: "Architecture & Engineering"
      },
      {
        value: "Founder",
        label: "CloudEngine Labs",
        sublabel: "Process-First Consulting"
      },
      {
        value: "3 Years",
        label: "Self-Employed",
        sublabel: "Debt-free & Aligned (2026)"
      }
    ]
  },
  openingReflection: {
    introParagraph1:
      "I was never a top-ranking student. I had to put in significant effort to complete my Bachelor of Engineering with first class because I did not want to disappoint my father and family.",
    introParagraph2:
      "My journey did not begin with a clear plan or an immediate job. It developed through persistence, support from people who believed in me, continuous learning, and the courage to keep moving.",
    quote:
      "Academic performance may describe one stage of life, but it does not define the entire journey. Perseverance, continuous learning, courage, and the willingness to begin again can create a different future."
  },
  milestones: [
    {
      id: "eng-1997-2001",
      period: "1997–2001",
      year: 2001,
      title: "Engineering Years",
      subtitle: "Amrita Institute of Technology, Ettimadai",
      description:
        "Studied Electronics and Communications Engineering at Amrita Institute of Technology, Ettimadai, Coimbatore. Completed my Bachelor of Engineering in 2001. While I was average academically, I completed the degree with first class through sustained daily effort, driven by a deep desire to honor my family's sacrifices.",
      location: "Coimbatore, Tamil Nadu",
      organization: "Amrita Institute of Technology",
      category: "education",
      orderIndex: 1,
      lessonLearned: "Consistency can compensate for a lack of natural academic strength.",
      gratitudeNote: "Deeply grateful to my father and family whose unwavering belief kept me focused during challenging academic semesters.",
      photos: [
        {
          id: "m-photo-1",
          url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
          title: "Amrita Campus Days",
          caption: "Late evening study sessions at the Ettimadai campus surrounded by the Western Ghats.",
          story: "Those four years taught me how to sit with difficult engineering concepts until they made sense.",
          year: "2001",
          category: "College",
          location: "Coimbatore",
          altText: "Amrita Institute of Technology campus view",
          orderIndex: 1
        }
      ]
    },
    {
      id: "search-2001-2004",
      period: "2001–2004",
      year: 2002,
      title: "Finding a Starting Point",
      subtitle: "Navigating the Post-2001 Slowdown",
      description:
        "Faced difficulty finding an immediate job after graduating during a tough economic downturn. Instead of giving up, I continued searching, learning new tools, and applying continuously. During these testing years, my family stood by me quietly without pressure.",
      location: "Chennai, Tamil Nadu",
      organization: "Independent Search & Self-Learning",
      category: "career",
      orderIndex: 2,
      lessonLearned: "A delayed beginning does not mean a failed journey.",
      gratitudeNote: "Grateful to my parents for offering home, shelter, and encouragement when rejection letters felt constant.",
      photos: [
        {
          id: "m-photo-2",
          url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
          title: "Early Notes & Practice",
          caption: "Writing code on paper and practicing on shared lab desktops.",
          story: "Every day spent studying without a job offer built resilience that would serve me two decades later.",
          year: "2002",
          category: "First job",
          location: "Chennai",
          altText: "Handwritten notes and computer practice desk",
          orderIndex: 2
        }
      ]
    },
    {
      id: "ssn-first-job",
      period: "2003–2004",
      year: 2003,
      title: "First Job — Computer Lab Assistant at SSN",
      subtitle: "SSN College of Engineering",
      description:
        "Started working as a computer lab assistant at SSN. This role gave me invaluable hands-on exposure to computer hardware, networking, operating systems, and professional engineering environments. It was my practical bridge into the world of software engineering.",
      location: "Chennai, Tamil Nadu",
      organization: "SSN College of Engineering",
      category: "career",
      orderIndex: 3,
      lessonLearned: "Humility in accepting where you start opens doors to where you can grow.",
      gratitudeNote: "Profound gratitude to the family member who helped secure this opportunity, and to Raghavan sir for constantly encouraging me to learn programming and transition toward software engineering.",
      photos: [
        {
          id: "m-photo-3",
          url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
          title: "SSN Lab Workstation",
          caption: "Setting up Linux and Windows lab environments for engineering students.",
          story: "Raghavan sir noticed my interest after lab hours and pushed me to write software instead of just administering machines.",
          year: "2003",
          category: "First job",
          location: "Chennai",
          altText: "Computer lab workstation row",
          orderIndex: 3
        }
      ]
    },
    {
      id: "wipro-2005",
      period: "2005",
      year: 2005,
      title: "Entering the Software Industry",
      subtitle: "Wipro Technologies",
      description:
        "Received a breakthrough opportunity at Wipro. Entered enterprise software engineering without having formally studied programming in computer science. I prepared relentlessly, learnt on the job, applied concepts, failed at times, and tried repeatedly until I mastered enterprise delivery.",
      location: "Bangalore & Chennai",
      organization: "Wipro Technologies",
      category: "career",
      orderIndex: 4,
      lessonLearned: "Opportunities often appear after persistent effort.",
      gratitudeNote: "Forever grateful to the interviewer at Wipro who looked past a non-CS background and saw someone willing to work harder than anyone else in the room.",
      photos: [
        {
          id: "m-photo-4",
          url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
          title: "Wipro Entry & Training",
          caption: "Stepping into enterprise software development.",
          story: "My first corporate badge meant everything to me and my family after years of uncertainty.",
          year: "2005",
          category: "Software career",
          location: "Bangalore",
          altText: "Modern enterprise glass office building",
          orderIndex: 4
        }
      ]
    },
    {
      id: "tech-career-2005-2023",
      period: "2005–2023",
      year: 2015,
      title: "Building a Technology Career across 18 Years",
      subtitle: "Software Engineer → Technology Architect & Leader",
      description:
        "Worked across multiple software and technology organizations over nearly two decades. Developed deep expertise in enterprise software engineering, cloud architecture, DevOps, security, and global delivery. Travelled to countries and customer locations that once felt beyond imagination, building solid financial stability and proudly supporting family responsibilities.",
      location: "Global & India",
      organization: "Multiple Technology Organizations",
      category: "career",
      orderIndex: 5,
      lessonLearned: "Continuous self-learning creates true upward mobility.",
      gratitudeNote: "Grateful to every manager, team member, and client across 18 years who trusted me with complex production architectures.",
      photos: [
        {
          id: "m-photo-5",
          url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
          title: "Global Architecture Workshops",
          caption: "Whiteboarding cloud migration strategies with cross-functional engineering teams.",
          story: "From lab assistant to guiding multi-region enterprise cloud deployments.",
          year: "2016",
          category: "Cloud and DevOps journey",
          location: "International",
          altText: "Engineering team collaborating around a whiteboard",
          orderIndex: 5
        },
        {
          id: "m-photo-6",
          url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop",
          title: "International Client Visits",
          caption: "Travelling across continents to deliver mission-critical software transformations.",
          story: "Standing in airports abroad, I often remembered the days in 2002 when I wondered if I would ever get a first interview.",
          year: "2018",
          category: "International travel",
          location: "Global",
          altText: "International travel skyline",
          orderIndex: 6
        }
      ]
    },
    {
      id: "cloudengine-start-2023",
      period: "2023",
      year: 2023,
      title: "Starting CloudEngine Labs",
      subtitle: "Taking the Leap into Independent Consulting",
      description:
        "Began the self-employment journey by founding CloudEngine Labs—an independent, process-first technology consulting company. Focused on helping software product teams architect cloud infrastructure, embed DevSecOps guardrails, implement secure delivery pipelines, and integrate AI workflow automation.",
      location: "Chennai, India",
      organization: "CloudEngine Labs",
      category: "entrepreneurship",
      orderIndex: 6,
      lessonLearned: "Survival built the courage required for entrepreneurship.",
      gratitudeNote: "Grateful to my life partner Malini for encouraging me to take the entrepreneurial leap when comfortable corporate jobs were available.",
      externalLink: {
        label: "CloudEngine Labs Focus",
        url: "#cloudengine"
      },
      photos: [
        {
          id: "m-photo-7",
          url: "/cloudengine-logo.png",
          title: "Founding CloudEngine Labs",
          caption: "Designing process-first cloud & DevSecOps blueprints for our early clients.",
          story: "Founding my own firm wasn't about ego; it was about taking ownership of craft and time.",
          year: "2023",
          category: "CloudEngine Labs",
          location: "Chennai",
          altText: "Cloud architecture screen and design charts",
          orderIndex: 7
        }
      ]
    },
    {
      id: "three-years-self-employed-2023-2026",
      period: "2023–2026",
      year: 2025,
      title: "Three Years of Self-Employment & Holistic Growth",
      subtitle: "Debt-Free, Meaningful Work, Family Alignment",
      description:
        "Completed three fulfilling years of self-employment. Partnered with founders, software product teams, and engineering communities. Built internal tools, AI workflows, and resilient delivery systems. More importantly: achieved complete financial stability and became debt-free, gained control over my time, spent meaningful moments with my children, supported Malini as she grew AJ Academy, and experienced the priceless daily joy of dropping off and picking up my children from school.",
      location: "Chennai, India",
      organization: "CloudEngine Labs",
      category: "entrepreneurship",
      orderIndex: 7,
      lessonLearned: "Sometimes true success means being available when your family needs you.",
      gratitudeNote: "Grateful to every client who trusted an independent founder and to my children who inspire me every single day.",
      photos: [
        {
          id: "m-photo-8",
          url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
          title: "Family & Everyday Moments",
          caption: "The quiet freedom of school drop-offs and unhurried family dinners.",
          story: "Self-employment didn't just transform how I work; it restored balance to how our family lives.",
          year: "2025",
          category: "Family and life moments",
          location: "Chennai",
          altText: "Family walking together happily",
          orderIndex: 8
        }
      ]
    },
    {
      id: "hashiconf-global-travel-2023-2025",
      period: "2023-2025",
      year: 2024,
      title: "HashiConf Travel: San Francisco & Boston",
      subtitle: "Global Infrastructure Community & Cloud Learning",
      description:
        "Travelled from San Francisco to Boston to learn directly from the HashiCorp community. The journey began with a visit to HashiCorp headquarters in SFO, continued through HashiConf and HUG conversations in Boston in 2024, and returned to Boston in 2025. Each trip brought practical Infrastructure as Code, Terraform, and cloud architecture ideas back to CloudEngine Labs.",
      location: "San Francisco, CA & Boston, MA, USA",
      organization: "HashiConf & HashiCorp User Group",
      category: "global-travel",
      orderIndex: 8,
      lessonLearned: "The best global events turn community conversations into practical improvements for clients and teams at home.",
      gratitudeNote: "Grateful to the HashiCorp community, fellow practitioners, and every conversation that made international learning feel welcoming and useful.",
      photos: [
        {
          id: "hashiconf-timeline-sfo-2023",
          url: "/gallery/hashicorp-office-visit.jpg",
          title: "HashiCorp Headquarters",
          caption: "San Francisco, 2023",
          story: "The first stop in a multi-year HashiConf travel journey.",
          year: "2023",
          category: "Global travel",
          location: "San Francisco, CA",
          altText: "Saravanan Gnanaguru at HashiCorp headquarters in San Francisco",
          orderIndex: 1
        },
        {
          id: "hashiconf-timeline-boston-2024",
          url: "/gallery/pics3/hashiconf-2024.JPG",
          title: "HashiConf Boston Summit",
          caption: "Boston, 2024",
          story: "Connecting with cloud architects and community builders at HashiConf.",
          year: "2024",
          category: "Global travel",
          location: "Boston, MA",
          altText: "HashiConf Boston 2024 summit",
          orderIndex: 2
        },
        {
          id: "hashiconf-timeline-boston-2025",
          url: "/gallery/pics3/hashiconf-2025.jpg",
          title: "HashiConf Boston Leadership",
          caption: "Boston, 2025",
          story: "Returning to the community with another year of practical learning.",
          year: "2025",
          category: "Global travel",
          location: "Boston, MA",
          altText: "HashiConf Boston 2025 leadership gathering",
          orderIndex: 3
        }
      ]
    },
    {
      id: "gitex-dubai-2026",
      period: "2026",
      year: 2026,
      title: "GITEX GLOBAL & Expand North Star Dubai",
      subtitle: "International Technology Engagement & Founder Ecosystem",
      description:
        "Participating in GITEX GLOBAL Dubai and Expand North Star at Dubai Harbour. Engaging with enterprise cloud architects, AI engineering pioneers, and founder communities across the Middle East and global tech corridor — bringing world-class infrastructure practices to CloudEngine Labs.",
      location: "Dubai World Trade Centre & Dubai Harbour, UAE",
      organization: "CloudEngine Labs @ GITEX",
      category: "entrepreneurship",
      orderIndex: 9,
      lessonLearned: "Innovation accelerates when you step into global arenas with a process-first mindset.",
      gratitudeNote: "Grateful for global peer connections and the courage to build an enterprise practice that travels across borders.",
      photos: [
        {
          id: "gitex-photo-1",
          url: "/gallery/gitex-accelerate-the-future.jpg",
          title: "GITEX GLOBAL Dubai: Accelerate the Future",
          caption: "Representing CloudEngine Labs at GITEX GLOBAL Dubai.",
          story: "Engaging directly with enterprise cloud leaders at GITEX GLOBAL.",
          year: "2026",
          category: "Speaking and community events",
          location: "Dubai World Trade Centre, UAE",
          altText: "Saravanan Gnanaguru at GITEX Global Dubai",
          orderIndex: 1
        },
        {
          id: "gitex-photo-2",
          url: "/gallery/gitex-expand-north-star.jpg",
          title: "Expand North Star Dubai Harbour",
          caption: "Exploring international founder ecosystems at Dubai Harbour.",
          story: "Global conversations that inspire resilient enterprise architecture.",
          year: "2026",
          category: "CloudEngine Labs",
          location: "Dubai Harbour, UAE",
          altText: "Saravanan Gnanaguru at Expand North Star Dubai Harbour",
          orderIndex: 2
        }
      ]
    },
    {
      id: "silver-jubilee-2026",
      period: "2026",
      year: 2026,
      title: "Silver Jubilee Reflection — 25 Years Since Engineering",
      subtitle: "Returning to the Alumni Gathering as a Founder",
      description:
        "Marking 25 years since graduating from Amrita Institute of Technology in 2001. Returning to the alumni gathering not as someone who was top of the class, but as living proof that an average student can build a dignified, high-impact, independent journey through perseverance, continuous learning, and courage.",
      location: "Coimbatore & Chennai",
      organization: "Alumni Jubilee 2026",
      category: "reflection",
      orderIndex: 10,
      lessonLearned: "Marks describe one chapter. They do not have to write the entire story.",
      gratitudeNote: "Grateful to every classmate, alumnus, and mentor who shared this 25-year road.",
      photos: [
        {
          id: "m-photo-9",
          url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
          title: "Alumni Silver Jubilee 2026",
          caption: "Standing together 25 years after our Bachelor of Engineering graduation.",
          story: "We all took different paths, but perseverance united our journeys.",
          year: "2026",
          category: "Self-employment milestones",
          location: "Coimbatore",
          altText: "Alumni gathering celebration",
          orderIndex: 9
        }
      ]
    }
  ],
  gallery: [
    {
      id: "gal-family-airport",
      url: "/gallery/saravanan-family-airport.jpg",
      title: "Family Anchor & Shared Journey",
      caption: "With my family — the heart, strength, and daily anchor behind every milestone.",
      story: "Building CloudEngine Labs and navigating 25 years of professional growth has been a shared family journey. Being present for everyday life is the greatest reward of self-employment.",
      year: "2026",
      category: "Family and life moments",
      location: "Chennai",
      altText: "Saravanan Gnanaguru with wife Malini and children",
      isFeatured: true,
      orderIndex: 1
    },
    {
      id: "gal-gitex-accelerate",
      url: "/gallery/gitex-accelerate-the-future.jpg",
      title: "GITEX GLOBAL Dubai: Accelerate the Future",
      caption: "Representing CloudEngine Labs at GITEX GLOBAL Dubai — connecting with global tech innovators.",
      story: "Attending global summits like GITEX expands our perspective on AI, process-first cloud architecture, and enterprise transformation.",
      year: "2026",
      category: "Speaking and community events",
      location: "Dubai World Trade Centre, UAE",
      altText: "Saravanan Gnanaguru at GITEX Global Accelerate the Future",
      isFeatured: true,
      orderIndex: 1
    },
    {
      id: "gal-gitex-northstar",
      url: "/gallery/gitex-expand-north-star.jpg",
      title: "Expand North Star — GITEX GLOBAL Dubai",
      caption: "At Expand North Star Dubai Harbour — exploring startup ecosystems and cloud scale.",
      story: "Engaging with founders and tech leaders from over 100 countries at Dubai Harbour fuels CloudEngine Labs' international engineering vision.",
      year: "2026",
      category: "CloudEngine Labs",
      location: "Dubai Harbour, UAE",
      altText: "Saravanan Gnanaguru at Expand North Star GITEX Dubai",
      isFeatured: true,
      orderIndex: 2
    },
    {
      id: "gal-gitex-burj",
      url: "/gallery/gitex-dubai-burj-khalifa.jpg",
      title: "Under the Dubai Lights — Burj Khalifa",
      caption: "Evening reflections under the iconic Burj Khalifa during the GITEX GLOBAL summit in Dubai.",
      story: "Standing before world-class architectural marvels reminds us of what ambitious engineering and relentless execution can achieve.",
      year: "2026",
      category: "International travel",
      location: "Downtown Dubai, UAE",
      altText: "Saravanan Gnanaguru at Burj Khalifa Dubai",
      isFeatured: true,
      orderIndex: 3
    },
    {
      id: "gal-gitex-ain-dubai",
      url: "/gallery/gitex-ain-dubai-bluewaters.jpg",
      title: "Dubai Waterfront & Ain Dubai Vista",
      caption: "Taking in the Bluewaters Island skyline and Ain Dubai during international tech engagements.",
      story: "Balancing high-energy tech summits with moments of reflection across Dubai's waterfront architecture.",
      year: "2026",
      category: "International travel",
      location: "Bluewaters Island, Dubai, UAE",
      altText: "Saravanan Gnanaguru at Ain Dubai waterfront",
      isFeatured: true,
      orderIndex: 4
    },
    {
      id: "gal-sf-bridge",
      url: "/gallery/sf-golden-gate-bridge.jpg",
      title: "Golden Gate Bridge, San Francisco",
      caption: "Iconic vistas overlooking the San Francisco Bay during international travel and tech summits.",
      story: "Visiting global tech hubs across the Bay Area reminded me how far a journey that started in Ettimadai can reach.",
      year: "2024",
      category: "International travel",
      location: "San Francisco, CA",
      altText: "Golden Gate Bridge San Francisco",
      isFeatured: true,
      orderIndex: 1
    },
    {
      id: "gal-hashicorp",
      url: "/gallery/hashicorp-office-visit.jpg",
      title: "At HashiCorp Headquarters",
      caption: "Visiting HashiCorp offices — collaborating around modern Cloud & DevOps infrastructure.",
      story: "As a Cloud Architect and DevOps practitioner, engaging directly with ecosystem leaders like HashiCorp reinforces process-first infrastructure design.",
      year: "2023",
      category: "Cloud and DevOps journey",
      location: "San Francisco, CA",
      altText: "Saravanan Gnanaguru at HashiCorp HQ",
      isFeatured: true,
      orderIndex: 2
    },
    {
      id: "gal-golden-gate-portrait",
      url: "/gallery/saravanan-golden-gate-sf.jpg",
      title: "Overlooking the San Francisco Bay",
      caption: "Reflecting on global cloud consulting and community leadership at the Golden Gate overlook.",
      story: "Every summit and international trip is an opportunity to learn global best practices and bring them back to our clients.",
      year: "2024",
      category: "Speaking and community events",
      location: "San Francisco, CA",
      altText: "Saravanan Gnanaguru at Golden Gate Bridge San Francisco",
      isFeatured: true,
      orderIndex: 3
    },
    {
      id: "gal-golden-gate-sunset",
      url: "/gallery/saravanan-golden-gate-sunset.jpg",
      title: "Golden Hour at Golden Gate",
      caption: "Taking in the sunset over the Pacific — balancing intense consulting with perspective.",
      story: "Building CloudEngine Labs required long hours, but taking moments to appreciate the journey keeps the vision clear.",
      year: "2024",
      category: "International travel",
      location: "San Francisco, CA",
      altText: "Saravanan Gnanaguru at Golden Gate sunset",
      isFeatured: true,
      orderIndex: 4
    },
    {
      id: "gal-sf-downtown",
      url: "/gallery/sf-downtown-california-st.jpg",
      title: "San Francisco Financial & Tech District",
      caption: "Walking downtown San Francisco — where enterprise architecture meets modern cloud scale.",
      story: "Exploring global innovation hubs inspires how we architect resilient systems for our clients at CloudEngine Labs.",
      year: "2024",
      category: "Projects and workplaces",
      location: "San Francisco, CA",
      altText: "San Francisco California Street sunset",
      isFeatured: true,
      orderIndex: 5
    },
    {
      id: "gal-1",
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
      title: "Amrita Campus Days (2001)",
      caption: "Completing BE Engineering with first class through sheer consistency.",
      story: "Late evenings in Ettimadai where consistency mattered more than brilliance.",
      year: "2001",
      category: "College",
      location: "Coimbatore",
      altText: "Amrita college campus library",
      isFeatured: true,
      orderIndex: 1
    },
    {
      id: "gal-2",
      url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      title: "SSN Computer Lab Assistant",
      caption: "Learning hands-on hardware, Linux systems, and lab environments.",
      story: "Raghavan sir's encouragement turned a lab assistant role into a launchpad.",
      year: "2003",
      category: "First job",
      location: "Chennai",
      altText: "Computer lab setups at SSN",
      isFeatured: true,
      orderIndex: 2
    },
    {
      id: "gal-3",
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      title: "Wipro Induction & Enterprise Entry",
      caption: "Stepping into enterprise software delivery without a CS degree.",
      story: "Every challenge was met with double the preparation.",
      year: "2005",
      category: "Software career",
      location: "Bangalore",
      altText: "Corporate technology campus",
      isFeatured: true,
      orderIndex: 3
    },
    {
      id: "gal-4",
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
      title: "Architecture & Delivery Projects",
      caption: "Leading DevOps and cloud infrastructure transformations.",
      story: "Collaborating with brilliant engineering minds across diverse industries.",
      year: "2015",
      category: "Projects and workplaces",
      location: "Chennai",
      altText: "Team whiteboarding architecture",
      isFeatured: false,
      orderIndex: 4
    },
    {
      id: "gal-5",
      url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop",
      title: "International Travel & Consulting",
      caption: "Visiting overseas customer locations to deploy mission-critical systems.",
      story: "Experiencing cultures and engineering practices globally.",
      year: "2018",
      category: "International travel",
      location: "Global",
      altText: "International flight skyline",
      isFeatured: false,
      orderIndex: 5
    },
    {
      id: "gal-6",
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      title: "Cloud & DevSecOps Evolution",
      caption: "Mastering cloud architecture, security guardrails, and automated pipelines.",
      story: "Building robust, production-ready systems that sleep soundly at night.",
      year: "2021",
      category: "Cloud and DevOps journey",
      location: "Chennai",
      altText: "Cloud network visual representation",
      isFeatured: true,
      orderIndex: 6
    },
    {
      id: "gal-7",
      url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
      title: "Speaking & Engineering Community",
      caption: "Sharing lessons on practical DevSecOps and cloud delivery.",
      story: "Giving back to the developer community that helped me learn.",
      year: "2023",
      category: "Speaking and community events",
      location: "Chennai",
      altText: "Tech conference speaker stage",
      isFeatured: false,
      orderIndex: 7
    },
    {
      id: "gal-8",
      url: "/cloudengine-logo.png",
      title: "Founding CloudEngine Labs",
      caption: "Launching our process-first technology consulting practice.",
      story: "Architecting cloud and AI solutions for product teams and founders.",
      year: "2023",
      category: "CloudEngine Labs",
      location: "Chennai",
      altText: "CloudEngine Labs office workspace",
      isFeatured: true,
      orderIndex: 8
    },
    {
      id: "gal-9",
      url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      title: "AI Engineering Circle & Workflows",
      caption: "Exploring LLM applications and automated developer workflows.",
      story: "Staying at the cutting edge of practical AI engineering.",
      year: "2024",
      category: "AI Engineering Circle",
      location: "Chennai",
      altText: "AI engineering nodes and workflows",
      isFeatured: false,
      orderIndex: 9
    },
    {
      id: "gal-10",
      url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
      title: "School Drop-offs & Family Presence",
      caption: "Supporting Malini with AJ Academy and spending real time with our children.",
      story: "The greatest dividend of self-employment is being present for the everyday moments.",
      year: "2025",
      category: "Family and life moments",
      location: "Chennai",
      altText: "Family walking hand in hand",
      isFeatured: true,
      orderIndex: 10
    },
    {
      id: "gal-11",
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
      title: "Completing 3 Years Self-Employed (2026)",
      caption: "Debt-free, independent, and returning to the Batch of 2001 Silver Jubilee.",
      story: "Proof that persistence writes a much bigger story than academic ranking.",
      year: "2026",
      category: "Self-employment milestones",
      location: "Coimbatore",
      altText: "Silver jubilee milestone celebration",
      isFeatured: true,
      orderIndex: 11
    },
    {
      id: "sp-1",
      url: "/gallery/pics3/speaking-2026-hindustan-college.jpg",
      title: "Keynote Speaker @ Hindustan College",
      caption: "Delivering an inspiring keynote address to aspiring engineers at Hindustan College.",
      story: "Delivering an inspiring keynote address to aspiring engineers at Hindustan College.",
      year: "2026",
      category: "Speaking and community events",
      location: "Chennai",
      altText: "Keynote Speaker @ Hindustan College",
      isFeatured: false,
      orderIndex: 100
    },
    {
      id: "sp-2",
      url: "/gallery/pics3/speking-2026-sri-sairam-college.jpg",
      title: "Invited Talk @ Sri Sairam Engineering College",
      caption: "Empowering future tech leaders on process-first cloud engineering & resilience.",
      story: "Empowering future tech leaders on process-first cloud engineering & resilience.",
      year: "2026",
      category: "Speaking and community events",
      location: "Chennai",
      altText: "Invited Talk @ Sri Sairam Engineering College",
      isFeatured: false,
      orderIndex: 101
    },
    {
      id: "sp-3",
      url: "/gallery/pics3/speaking-global-freelance-festival-2025-2.jpg",
      title: "Global Freelance Festival Speaker",
      caption: "Addressing global independent consultants and founders at the Global Freelance Festival.",
      story: "Addressing global independent consultants and founders at the Global Freelance Festival.",
      year: "2025",
      category: "Speaking and community events",
      location: "Chennai",
      altText: "Global Freelance Festival Speaker",
      isFeatured: false,
      orderIndex: 102
    },
    {
      id: "sp-4",
      url: "/gallery/pics3/gff-2025.png",
      title: "Global Freelance Festival Address",
      caption: "Sharing practical frameworks for debt-free self-employment and high-end consulting.",
      story: "Sharing practical frameworks for debt-free self-employment and high-end consulting.",
      year: "2025",
      category: "Speaking and community events",
      location: "Chennai",
      altText: "Global Freelance Festival Address",
      isFeatured: false,
      orderIndex: 103
    },
    {
      id: "sp-5",
      url: "/gallery/pics3/speaking.jpg",
      title: "Tech Community Keynote Address",
      caption: "Sharing DevSecOps architecture patterns and career survival lessons.",
      story: "Sharing DevSecOps architecture patterns and career survival lessons.",
      year: "2024",
      category: "Speaking and community events",
      location: "Chennai",
      altText: "Tech Community Keynote Address",
      isFeatured: false,
      orderIndex: 104
    },
    {
      id: "sp-6",
      url: "/gallery/pics3/spaeking2.JPG",
      title: "Architecting Cloud Native Systems Session",
      caption: "Interactive engineering workshop with founders and architects.",
      story: "Interactive engineering workshop with founders and architects.",
      year: "2024",
      category: "Speaking and community events",
      location: "Chennai",
      altText: "Architecting Cloud Native Systems Session",
      isFeatured: false,
      orderIndex: 105
    },
    {
      id: "sp-7",
      url: "/gallery/pics3/bni-meet.jpeg",
      title: "BNI Business Leadership Summit",
      caption: "Collaborating with fellow entrepreneurs and regional business leaders.",
      story: "Collaborating with fellow entrepreneurs and regional business leaders.",
      year: "2025",
      category: "Speaking and community events",
      location: "Chennai",
      altText: "BNI Business Leadership Summit",
      isFeatured: false,
      orderIndex: 106
    },
    {
      id: "hc-1",
      url: "/gallery/pics3/hashiconf-2024.JPG",
      title: "Boston HashiConf 2024 Summit",
      caption: "Collaborating with cloud architects and community builders at Boston HashiConf & HUG.",
      story: "Connecting directly with ecosystem leaders at HashiConf Boston reinforces modern Infrastructure as Code best practices.",
      year: "2024",
      category: "Boston HashiConf & HUG",
      location: "Boston, MA",
      altText: "Boston HashiConf 2024 Summit",
      isFeatured: false,
      orderIndex: 107
    },
    {
      id: "hc-2",
      url: "/gallery/pics3/hug-2024.JPG",
      title: "HashiCorp User Group (HUG) Meetup",
      caption: "Collaborating with cloud architects and community builders at Boston HashiConf & HUG.",
      story: "Connecting directly with ecosystem leaders at HashiConf Boston reinforces modern Infrastructure as Code best practices.",
      year: "2024",
      category: "Boston HashiConf & HUG",
      location: "Boston, MA",
      altText: "HashiCorp User Group (HUG) Meetup",
      isFeatured: false,
      orderIndex: 108
    },
    {
      id: "hc-3",
      url: "/gallery/pics3/hug-hashiconf-2024.JPG",
      title: "HashiConf Boston Infrastructure Community",
      caption: "Collaborating with cloud architects and community builders at Boston HashiConf & HUG.",
      story: "Connecting directly with ecosystem leaders at HashiConf Boston reinforces modern Infrastructure as Code best practices.",
      year: "2024",
      category: "Boston HashiConf & HUG",
      location: "Boston, MA",
      altText: "HashiConf Boston Infrastructure Community",
      isFeatured: false,
      orderIndex: 109
    },
    {
      id: "hc-4",
      url: "/gallery/pics3/hshiconf-2024-2.JPG",
      title: "Terraform & Cloud Architecture Discussions",
      caption: "Collaborating with cloud architects and community builders at Boston HashiConf & HUG.",
      story: "Connecting directly with ecosystem leaders at HashiConf Boston reinforces modern Infrastructure as Code best practices.",
      year: "2024",
      category: "Boston HashiConf & HUG",
      location: "Boston, MA",
      altText: "Terraform & Cloud Architecture Discussions",
      isFeatured: false,
      orderIndex: 110
    },
    {
      id: "hc-5",
      url: "/gallery/pics3/hashiconf-2025.jpg",
      title: "Boston HashiConf 2025 Leadership",
      caption: "Collaborating with cloud architects and community builders at Boston HashiConf & HUG.",
      story: "Connecting directly with ecosystem leaders at HashiConf Boston reinforces modern Infrastructure as Code best practices.",
      year: "2025",
      category: "Boston HashiConf & HUG",
      location: "Boston, MA",
      altText: "Boston HashiConf 2025 Leadership",
      isFeatured: false,
      orderIndex: 111
    },
    {
      id: "hc-6",
      url: "/gallery/pics3/boston-2.JPG",
      title: "Boston Tech Meetup & City Walk",
      caption: "Collaborating with cloud architects and community builders at Boston HashiConf & HUG.",
      story: "Connecting directly with ecosystem leaders at HashiConf Boston reinforces modern Infrastructure as Code best practices.",
      year: "2024",
      category: "Boston HashiConf & HUG",
      location: "Boston, MA",
      altText: "Boston Tech Meetup & City Walk",
      isFeatured: false,
      orderIndex: 112
    },
    {
      id: "tr-05-1",
      url: "/gallery/pics2/2005-wipro.JPG",
      title: "Wipro Enterprise Career Beginnings (2005)",
      caption: "Foundational enterprise IT career launch @ Wipro.",
      story: "Where discipline and global software delivery began.",
      year: "2005",
      category: "Travel 2005",
      location: "India",
      altText: "Wipro Enterprise Career Beginnings (2005)",
      isFeatured: false,
      orderIndex: 113
    },
    {
      id: "tr-05-2",
      url: "/gallery/pics2/2005-wipro2.JPG",
      title: "Early Software Engineering @ Wipro (2005)",
      caption: "Foundational enterprise IT career launch @ Wipro.",
      story: "Where discipline and global software delivery began.",
      year: "2005",
      category: "Travel 2005",
      location: "India",
      altText: "Early Software Engineering @ Wipro (2005)",
      isFeatured: false,
      orderIndex: 114
    },
    {
      id: "tr-06-1",
      url: "/gallery/pics2/2006-london.JPG",
      title: "First UK Projects — London (2006)",
      caption: "International enterprise project deployment across London, UK.",
      story: "First major international assignment leading software delivery.",
      year: "2006",
      category: "Travel 2006",
      location: "London, UK",
      altText: "First UK Projects — London (2006)",
      isFeatured: false,
      orderIndex: 115
    },
    {
      id: "tr-06-2",
      url: "/gallery/pics2/picadilly-2006.JPG",
      title: "Piccadilly Circus London (2006)",
      caption: "International enterprise project deployment across London, UK.",
      story: "First major international assignment leading software delivery.",
      year: "2006",
      category: "Travel 2006",
      location: "London, UK",
      altText: "Piccadilly Circus London (2006)",
      isFeatured: false,
      orderIndex: 116
    },
    {
      id: "tr-06-3",
      url: "/gallery/pics2/london-bigben.JPG",
      title: "Big Ben & Westminster London (2006)",
      caption: "International enterprise project deployment across London, UK.",
      story: "First major international assignment leading software delivery.",
      year: "2006",
      category: "Travel 2006",
      location: "London, UK",
      altText: "Big Ben & Westminster London (2006)",
      isFeatured: false,
      orderIndex: 117
    },
    {
      id: "tr-06-4",
      url: "/gallery/pics2/Palace_of_Westminster.jpg",
      title: "Palace of Westminster UK (2006)",
      caption: "International enterprise project deployment across London, UK.",
      story: "First major international assignment leading software delivery.",
      year: "2006",
      category: "Travel 2006",
      location: "London, UK",
      altText: "Palace of Westminster UK (2006)",
      isFeatured: false,
      orderIndex: 118
    },
    {
      id: "tr-06-5",
      url: "/gallery/pics2/2006.JPG",
      title: "London Enterprise Consulting (2006)",
      caption: "International enterprise project deployment across London, UK.",
      story: "First major international assignment leading software delivery.",
      year: "2006",
      category: "Travel 2006",
      location: "London, UK",
      altText: "London Enterprise Consulting (2006)",
      isFeatured: false,
      orderIndex: 119
    },
    {
      id: "tr-06-6",
      url: "/gallery/pics2/2006-2.JPG",
      title: "UK Project Milestone (2006)",
      caption: "International enterprise project deployment across London, UK.",
      story: "First major international assignment leading software delivery.",
      year: "2006",
      category: "Travel 2006",
      location: "London, UK",
      altText: "UK Project Milestone (2006)",
      isFeatured: false,
      orderIndex: 120
    },
    {
      id: "tr-08-1",
      url: "/gallery/pics2/london-2008.JPG",
      title: "London Consulting Leadership (2008)",
      caption: "Scaling global delivery across client sites in London.",
      story: "Continued global consulting across British enterprises.",
      year: "2008",
      category: "Travel 2008",
      location: "London, UK",
      altText: "London Consulting Leadership (2008)",
      isFeatured: false,
      orderIndex: 121
    },
    {
      id: "tr-08-2",
      url: "/gallery/pics2/london-2008-3.JPG",
      title: "UK Architecture Delivery (2008)",
      caption: "Scaling global delivery across client sites in London.",
      story: "Continued global consulting across British enterprises.",
      year: "2008",
      category: "Travel 2008",
      location: "London, UK",
      altText: "UK Architecture Delivery (2008)",
      isFeatured: false,
      orderIndex: 122
    },
    {
      id: "tr-10-1",
      url: "/gallery/pics2/france-2010.JPG",
      title: "Paris France Consulting Engagement (2010)",
      caption: "European consulting assignments across Paris and France.",
      story: "Expanding international footprint across European tech hubs.",
      year: "2010",
      category: "Travel 2010",
      location: "Paris, France",
      altText: "Paris France Consulting Engagement (2010)",
      isFeatured: false,
      orderIndex: 123
    },
    {
      id: "tr-10-2",
      url: "/gallery/pics2/france.JPG",
      title: "France Enterprise Delivery (2010)",
      caption: "European consulting assignments across Paris and France.",
      story: "Expanding international footprint across European tech hubs.",
      year: "2010",
      category: "Travel 2010",
      location: "Paris, France",
      altText: "France Enterprise Delivery (2010)",
      isFeatured: false,
      orderIndex: 124
    },
    {
      id: "tr-10-3",
      url: "/gallery/pics2/france-2.JPG",
      title: "Paris Architecture Summit (2010)",
      caption: "European consulting assignments across Paris and France.",
      story: "Expanding international footprint across European tech hubs.",
      year: "2010",
      category: "Travel 2010",
      location: "Paris, France",
      altText: "Paris Architecture Summit (2010)",
      isFeatured: false,
      orderIndex: 125
    },
    {
      id: "tr-10-4",
      url: "/gallery/pics2/france-eiffel.JPG",
      title: "Eiffel Tower Paris (2010)",
      caption: "European consulting assignments across Paris and France.",
      story: "Expanding international footprint across European tech hubs.",
      year: "2010",
      category: "Travel 2010",
      location: "Paris, France",
      altText: "Eiffel Tower Paris (2010)",
      isFeatured: false,
      orderIndex: 126
    },
    {
      id: "tr-10-5",
      url: "/gallery/pics2/france-eiffel2.JPG",
      title: "Eiffel Tower Evening Paris (2010)",
      caption: "European consulting assignments across Paris and France.",
      story: "Expanding international footprint across European tech hubs.",
      year: "2010",
      category: "Travel 2010",
      location: "Paris, France",
      altText: "Eiffel Tower Evening Paris (2010)",
      isFeatured: false,
      orderIndex: 127
    },
    {
      id: "tr-10-6",
      url: "/gallery/pics2/eiffel.jpg",
      title: "Iconic Eiffel Tower Vista (2010)",
      caption: "European consulting assignments across Paris and France.",
      story: "Expanding international footprint across European tech hubs.",
      year: "2010",
      category: "Travel 2010",
      location: "Paris, France",
      altText: "Iconic Eiffel Tower Vista (2010)",
      isFeatured: false,
      orderIndex: 128
    },
    {
      id: "tr-10-7",
      url: "/gallery/pics2/eiffel2.JPG",
      title: "Paris Skyline & Landmark (2010)",
      caption: "European consulting assignments across Paris and France.",
      story: "Expanding international footprint across European tech hubs.",
      year: "2010",
      category: "Travel 2010",
      location: "Paris, France",
      altText: "Paris Skyline & Landmark (2010)",
      isFeatured: false,
      orderIndex: 129
    },
    {
      id: "tr-10-8",
      url: "/gallery/pics2/eiffel3.JPG",
      title: "Paris France Memories (2010)",
      caption: "European consulting assignments across Paris and France.",
      story: "Expanding international footprint across European tech hubs.",
      year: "2010",
      category: "Travel 2010",
      location: "Paris, France",
      altText: "Paris France Memories (2010)",
      isFeatured: false,
      orderIndex: 130
    },
    {
      id: "tr-10-9",
      url: "/gallery/pics2/france-montreparnasse.JPG",
      title: "Montparnasse Tower Paris (2010)",
      caption: "European consulting assignments across Paris and France.",
      story: "Expanding international footprint across European tech hubs.",
      year: "2010",
      category: "Travel 2010",
      location: "Paris, France",
      altText: "Montparnasse Tower Paris (2010)",
      isFeatured: false,
      orderIndex: 131
    },
    {
      id: "tr-10-10",
      url: "/gallery/pics2/montreparnasse.JPG",
      title: "Overlooking Paris from Montparnasse (2010)",
      caption: "European consulting assignments across Paris and France.",
      story: "Expanding international footprint across European tech hubs.",
      year: "2010",
      category: "Travel 2010",
      location: "Paris, France",
      altText: "Overlooking Paris from Montparnasse (2010)",
      isFeatured: false,
      orderIndex: 132
    },
    {
      id: "tr-10-11",
      url: "/gallery/pics2/montreparnasse2.JPG",
      title: "Paris Panoramic View (2010)",
      caption: "European consulting assignments across Paris and France.",
      story: "Expanding international footprint across European tech hubs.",
      year: "2010",
      category: "Travel 2010",
      location: "Paris, France",
      altText: "Paris Panoramic View (2010)",
      isFeatured: false,
      orderIndex: 133
    },
    {
      id: "tr-10-12",
      url: "/gallery/pics2/france-disney.JPG",
      title: "Disneyland Paris Visit (2010)",
      caption: "European consulting assignments across Paris and France.",
      story: "Expanding international footprint across European tech hubs.",
      year: "2010",
      category: "Travel 2010",
      location: "Paris, France",
      altText: "Disneyland Paris Visit (2010)",
      isFeatured: false,
      orderIndex: 134
    },
    {
      id: "tr-14-1",
      url: "/gallery/pics2/picadilly-2014.JPG",
      title: "Piccadilly London Return (2014)",
      caption: "Senior cloud architecture and governance leadership across the UK.",
      story: "Multi-year consulting leadership across British enterprise clients.",
      year: "2014",
      category: "Travel 2014-2018",
      location: "London, UK",
      altText: "Piccadilly London Return (2014)",
      isFeatured: false,
      orderIndex: 135
    },
    {
      id: "tr-14-2",
      url: "/gallery/pics2/picadilly-2014-2.JPG",
      title: "London Tech Engagement (2014)",
      caption: "Senior cloud architecture and governance leadership across the UK.",
      story: "Multi-year consulting leadership across British enterprise clients.",
      year: "2014",
      category: "Travel 2014-2018",
      location: "London, UK",
      altText: "London Tech Engagement (2014)",
      isFeatured: false,
      orderIndex: 136
    },
    {
      id: "tr-14-3",
      url: "/gallery/pics2/westminster-2014.JPG",
      title: "Westminster UK Architecture (2014)",
      caption: "Senior cloud architecture and governance leadership across the UK.",
      story: "Multi-year consulting leadership across British enterprise clients.",
      year: "2014",
      category: "Travel 2014-2018",
      location: "London, UK",
      altText: "Westminster UK Architecture (2014)",
      isFeatured: false,
      orderIndex: 137
    },
    {
      id: "tr-17-1",
      url: "/gallery/pics2/bigben-2017.jpg",
      title: "Big Ben & London Skyline (2017)",
      caption: "Senior cloud architecture and governance leadership across the UK.",
      story: "Multi-year consulting leadership across British enterprise clients.",
      year: "2017",
      category: "Travel 2014-2018",
      location: "London, UK",
      altText: "Big Ben & London Skyline (2017)",
      isFeatured: false,
      orderIndex: 138
    },
    {
      id: "tr-17-2",
      url: "/gallery/pics2/picadilly-2017.jpg",
      title: "Piccadilly Circus Evening (2017)",
      caption: "Senior cloud architecture and governance leadership across the UK.",
      story: "Multi-year consulting leadership across British enterprise clients.",
      year: "2017",
      category: "Travel 2014-2018",
      location: "London, UK",
      altText: "Piccadilly Circus Evening (2017)",
      isFeatured: false,
      orderIndex: 139
    },
    {
      id: "tr-17-3",
      url: "/gallery/pics2/picadilly-2017-2.jpg",
      title: "London Evening Architecture (2017)",
      caption: "Senior cloud architecture and governance leadership across the UK.",
      story: "Multi-year consulting leadership across British enterprise clients.",
      year: "2017",
      category: "Travel 2014-2018",
      location: "London, UK",
      altText: "London Evening Architecture (2017)",
      isFeatured: false,
      orderIndex: 140
    },
    {
      id: "tr-17-4",
      url: "/gallery/pics2/picadilly-2017-3.jpg",
      title: "Central London Tech Walk (2017)",
      caption: "Senior cloud architecture and governance leadership across the UK.",
      story: "Multi-year consulting leadership across British enterprise clients.",
      year: "2017",
      category: "Travel 2014-2018",
      location: "London, UK",
      altText: "Central London Tech Walk (2017)",
      isFeatured: false,
      orderIndex: 141
    },
    {
      id: "tr-18-1",
      url: "/gallery/pics2/london-2018.jpg",
      title: "London Architecture Governance (2018)",
      caption: "Senior cloud architecture and governance leadership across the UK.",
      story: "Multi-year consulting leadership across British enterprise clients.",
      year: "2018",
      category: "Travel 2014-2018",
      location: "London, UK",
      altText: "London Architecture Governance (2018)",
      isFeatured: false,
      orderIndex: 142
    },
    {
      id: "tr-18-2",
      url: "/gallery/pics2/london-2018-fam.jpg",
      title: "London Trip Highlights (2018)",
      caption: "Senior cloud architecture and governance leadership across the UK.",
      story: "Multi-year consulting leadership across British enterprise clients.",
      year: "2018",
      category: "Travel 2014-2018",
      location: "London, UK",
      altText: "London Trip Highlights (2018)",
      isFeatured: false,
      orderIndex: 143
    },
    {
      id: "tr-18-3",
      url: "/gallery/pics2/picadilly-2018.jpg",
      title: "London West End (2018)",
      caption: "Senior cloud architecture and governance leadership across the UK.",
      story: "Multi-year consulting leadership across British enterprise clients.",
      year: "2018",
      category: "Travel 2014-2018",
      location: "London, UK",
      altText: "London West End (2018)",
      isFeatured: false,
      orderIndex: 144
    },
    {
      id: "tr-19-1",
      url: "/gallery/pics2/istanbul-2019.JPG",
      title: "Istanbul Cross-Continental Summit (2019)",
      caption: "Cross-continental tech summits and client engagements.",
      story: "Bridging continents through cloud consulting.",
      year: "2019",
      category: "Travel 2019",
      location: "Istanbul, Turkey",
      altText: "Istanbul Cross-Continental Summit (2019)",
      isFeatured: false,
      orderIndex: 145
    },
    {
      id: "tr-19-2",
      url: "/gallery/pics2/istanbul.JPG",
      title: "Bosphorus Waterfront Istanbul (2019)",
      caption: "Cross-continental tech summits and client engagements.",
      story: "Bridging continents through cloud consulting.",
      year: "2019",
      category: "Travel 2019",
      location: "Istanbul, Turkey",
      altText: "Bosphorus Waterfront Istanbul (2019)",
      isFeatured: false,
      orderIndex: 146
    },
    {
      id: "tr-19-3",
      url: "/gallery/pics2/london-2019.JPG",
      title: "London Cloud Summit (2019)",
      caption: "Cross-continental tech summits and client engagements.",
      story: "Bridging continents through cloud consulting.",
      year: "2019",
      category: "Travel 2019",
      location: "London, UK",
      altText: "London Cloud Summit (2019)",
      isFeatured: false,
      orderIndex: 147
    },
    {
      id: "tr-24-1",
      url: "/gallery/pics2/london-2024-1.png",
      title: "London Founder Consulting Era (2024)",
      caption: "CloudEngine Labs global consulting missions and family moments.",
      story: "Independent self-employed consulting footprint across the UK.",
      year: "2024",
      category: "Travel 2024-2026",
      location: "London, UK",
      altText: "London Founder Consulting Era (2024)",
      isFeatured: false,
      orderIndex: 148
    },
    {
      id: "tr-24-2",
      url: "/gallery/pics2/london-2024-2.png",
      title: "UK Enterprise Consulting (2024)",
      caption: "CloudEngine Labs global consulting missions and family moments.",
      story: "Independent self-employed consulting footprint across the UK.",
      year: "2024",
      category: "Travel 2024-2026",
      location: "London, UK",
      altText: "UK Enterprise Consulting (2024)",
      isFeatured: false,
      orderIndex: 149
    },
    {
      id: "tr-24-3",
      url: "/gallery/pics2/london-2024-3.png",
      title: "CloudEngine Labs London Visit (2024)",
      caption: "CloudEngine Labs global consulting missions and family moments.",
      story: "Independent self-employed consulting footprint across the UK.",
      year: "2024",
      category: "Travel 2024-2026",
      location: "London, UK",
      altText: "CloudEngine Labs London Visit (2024)",
      isFeatured: false,
      orderIndex: 150
    },
    {
      id: "tr-24-4",
      url: "/gallery/pics2/london-2024-4.png",
      title: "London Tech District (2024)",
      caption: "CloudEngine Labs global consulting missions and family moments.",
      story: "Independent self-employed consulting footprint across the UK.",
      year: "2024",
      category: "Travel 2024-2026",
      location: "London, UK",
      altText: "London Tech District (2024)",
      isFeatured: false,
      orderIndex: 151
    },
    {
      id: "tr-24-5",
      url: "/gallery/pics2/london-2024-5.png",
      title: "Global Consulting Footprint (2024)",
      caption: "CloudEngine Labs global consulting missions and family moments.",
      story: "Independent self-employed consulting footprint across the UK.",
      year: "2024",
      category: "Travel 2024-2026",
      location: "London, UK",
      altText: "Global Consulting Footprint (2024)",
      isFeatured: false,
      orderIndex: 152
    },
    {
      id: "tr-24-6",
      url: "/gallery/pics2/london-2024-6.png",
      title: "Central London Architecture Walk (2024)",
      caption: "CloudEngine Labs global consulting missions and family moments.",
      story: "Independent self-employed consulting footprint across the UK.",
      year: "2024",
      category: "Travel 2024-2026",
      location: "London, UK",
      altText: "Central London Architecture Walk (2024)",
      isFeatured: false,
      orderIndex: 153
    },
    {
      id: "tr-24-7",
      url: "/gallery/pics2/london-2024-7.png",
      title: "London Evening Skyline (2024)",
      caption: "CloudEngine Labs global consulting missions and family moments.",
      story: "Independent self-employed consulting footprint across the UK.",
      year: "2024",
      category: "Travel 2024-2026",
      location: "London, UK",
      altText: "London Evening Skyline (2024)",
      isFeatured: false,
      orderIndex: 154
    },
    {
      id: "tr-24-8",
      url: "/gallery/pics2/london-2024-8.png",
      title: "UK Consulting Retrospective (2024)",
      caption: "CloudEngine Labs global consulting missions and family moments.",
      story: "Independent self-employed consulting footprint across the UK.",
      year: "2024",
      category: "Travel 2024-2026",
      location: "London, UK",
      altText: "UK Consulting Retrospective (2024)",
      isFeatured: false,
      orderIndex: 155
    },
  ],
  lessons: [
    {
      id: "les-1",
      title: "Average is not a permanent identity",
      quoteOrHighlight: "Academic ranking reflects one phase of life. It does not define curiosity, resilience, practical intelligence, or future potential.",
      body: "We are often conditioned to believe that our college grades place a permanent ceiling on what we can achieve. Over 25 years, I discovered that curiosity and discipline matter infinitely more than early test scores."
    },
    {
      id: "les-2",
      title: "Survival can become a strength",
      quoteOrHighlight: "Years of uncertainty built resilience, adaptability, and the willingness to keep moving.",
      body: "When you face delays or difficult job markets early in life, you learn how to handle uncertainty without panic. That muscle became essential when launching CloudEngine Labs."
    },
    {
      id: "les-3",
      title: "Progress does not need to be linear",
      quoteOrHighlight: "A delayed job, a different starting role, career changes, and repeated attempts can still lead to meaningful progress.",
      body: "Starting as a lab assistant rather than a software engineer did not hold me back—it gave me foundational hardware and systems knowledge that made me a better cloud architect."
    },
    {
      id: "les-4",
      title: "Learning creates mobility",
      quoteOrHighlight: "Formal education provided the foundation, but continuous self-learning created career opportunities.",
      body: "In technology, what you knew five years ago is already out of date. Those who teach themselves daily can pivot into cloud, DevSecOps, and AI regardless of their initial background."
    },
    {
      id: "les-5",
      title: "Gratitude matters",
      quoteOrHighlight: "Acknowledge family, mentors, interviewers, colleagues, organizations, clients, friends, and communities who influenced the journey.",
      body: "No one succeeds in isolation. Every breakthrough I experienced happened because someone gave me a chance, offered advice, or supported me quietly when times were tough."
    },
    {
      id: "les-6",
      title: "Success must be personally defined",
      quoteOrHighlight: "Success is not only a designation, salary, company size, or public recognition.",
      body: "Over time, I redefined success. True success to me means:",
      bulletPoints: [
        "Freedom from debt",
        "Meaningful work and technical mastery",
        "Quality time with children and family",
        "The courage to make independent decisions",
        "Inner alignment and soul satisfaction"
      ]
    }
  ],
  wheelOfLife: [
    {
      id: "wheel-career",
      name: "Career & Mastery",
      score: 9,
      reflection: "Transitioning to independent consulting enabled deep focus on process-first architecture without corporate bureaucracy.",
      color: "#06B6D4"
    },
    {
      id: "wheel-family",
      name: "Family & Presence",
      score: 9,
      reflection: "Experiencing school drop-offs, family dinners, and supporting Malini with AJ Academy every day.",
      color: "#F59E0B"
    },
    {
      id: "wheel-time",
      name: "Time Sovereignty",
      score: 9,
      reflection: "Greater control over daily schedule, aligning client delivery with personal rhythms.",
      color: "#38BDF8"
    },
    {
      id: "wheel-money",
      name: "Financial Peace",
      score: 9,
      reflection: "Becoming completely debt-free while building sustainable consulting and advisory revenue.",
      color: "#10B981"
    },
    {
      id: "wheel-health",
      name: "Health & Vitality",
      score: 8,
      reflection: "Replacing commute stress with consistent movement, sleep hygiene, and holistic wellness.",
      color: "#EC4899"
    },
    {
      id: "wheel-relationships",
      name: "Relationships & Community",
      score: 8,
      reflection: "Deepening genuine bonds with clients, alumni, and peers rather than transactional networking.",
      color: "#8B5CF6"
    },
    {
      id: "wheel-purpose",
      name: "Purpose & Impact",
      score: 9,
      reflection: "Helping founders build reliable systems and mentoring engineers who start from average beginnings.",
      color: "#EAB308"
    },
    {
      id: "wheel-peace",
      name: "Inner Peace",
      score: 9,
      reflection: "Soul satisfaction grounded in the 21DC Goal Progression System and TiE Chennai Wheel of Life.",
      color: "#14B8A6"
    }
  ],
  gratitude: [
    {
      id: "grat-employers",
      title: "Companies & Engineering Foundation",
      people: [
        {
          name: "Wipro & Wipro Digital",
          roleOrRelation: "Enterprise IT & Digital Transformation Launchpad",
          message: "For opening the doors to enterprise software engineering, instilling a strong professional discipline, and enabling me to deliver high-scale digital solutions.",
          highlight: true
        },
        {
          name: "Capgemini & Accenture",
          roleOrRelation: "Global Consulting & Architecture Discipline",
          message: "For sharpening end-to-end enterprise architecture governance, client engagement models, and global delivery excellence.",
          highlight: true
        },
        {
          name: "HCLTech & InfraCloud",
          roleOrRelation: "Cloud Engineering & Modern DevOps",
          message: "For empowering hands-on cloud native engineering, process-first automation, and deep Kubernetes & DevOps technical leadership.",
          highlight: true
        },
        {
          name: "Raghavan Sir & SSN College",
          roleOrRelation: "Early Breakthrough Mentors",
          message: "For looking at a lab assistant during SSN Lab Days and encouraging me to learn programming and transition into software engineering.",
          highlight: false
        }
      ]
    },
    {
      id: "grat-entrepreneurship",
      title: "Entrepreneurship Mentors & Business Orgs",
      people: [
        {
          name: "Dharaneedharan",
          roleOrRelation: "Mentor — 21DC & Social Eagle Community",
          message: "For helping me discover my true life purpose, implementing the Goal Progression System, and guiding my transition into aligned self-employment.",
          highlight: true
        },
        {
          name: "TiE Chennai & BNI India",
          roleOrRelation: "Business Leadership & Accountability Networks",
          message: "For invaluable entrepreneurship frameworks, peer learning, structured business networking, and professional accountability.",
          highlight: true
        },
        {
          name: "Tamilpreneur, The Founder Circle & DNA Community",
          roleOrRelation: "Founder Communities",
          message: "For fostering vibrant founder brotherhood, knowledge sharing, and creating a community where founders continuously uplift one another.",
          highlight: true
        }
      ]
    },
    {
      id: "grat-cloudengine",
      title: "CloudEngine Labs Team & Founder Community",
      people: [
        {
          name: "Employees of CloudEngine Labs",
          roleOrRelation: "The Heart & Execution Engine of Our Mission",
          message: "To every dedicated employee at CloudEngine Labs — thank you for building with process discipline, craftsmanship, and unwavering dedication every day.",
          highlight: true
        },
        {
          name: "Founder Friends & Communities",
          roleOrRelation: "Co-Travelers on the Entrepreneurial Journey",
          message: "To the founder friends and communities I have traveled with so far — for candid advice, shared resilience, and celebrating each milestone together.",
          highlight: true
        },
        {
          name: "CloudEngine Labs Clients",
          roleOrRelation: "Enterprise Partners",
          message: "For placing your trust in CloudEngine Labs to architect, streamline, and secure your mission-critical software platforms.",
          highlight: false
        }
      ]
    },
    {
      id: "grat-family",
      title: "Parents, Partner & Family",
      people: [
        {
          name: "My Parents",
          roleOrRelation: "Foundation of Belief",
          message: "For providing unwavering shelter, moral support, and quiet belief during the challenging post-2001 job search.",
          highlight: true
        },
        {
          name: "Malini",
          roleOrRelation: "Life Partner & Founder of",
          websiteUrl: "https://aj-academy.in",
          websiteLabel: "AJ Academy",
          message: "For standing by every bold decision, sharing the entrepreneurship journey, and showing what dedication to education looks like.",
          highlight: true
        },
        {
          name: "My Children",
          roleOrRelation: "Daily Inspiration",
          message: "For bringing boundless joy to every school run and reminding me why building a balanced life matters above all else.",
          highlight: true
        },
        {
          name: "Sister & Brother-in-Law",
          roleOrRelation: "Family Pillars",
          message: "For constant encouragement, wisdom, and standing together through every major milestone.",
          highlight: false
        }
      ]
    }
  ],
  cloudEngineLabs: {
    tagline: "Process-First Technology Consulting",
    summary:
      "CloudEngine Labs helps software product teams build and scale secure, reliable, and maintainable applications. We bridge the gap between architectural ambition and production reality.",
    focusAreas: [
      {
        id: "cel-cloud",
        title: "Cloud & DevOps Architecture",
        description: "High-resilience, multi-environment cloud topologies built for scale and cost-efficiency.",
        icon: "Cloud",
        deliverables: ["AWS / Azure Landing Zones", "Infrastructure as Code (Terraform)", "Zero-Downtime Pipelines"]
      },
      {
        id: "cel-devsecops",
        title: "DevSecOps & Security Guardrails",
        description: "Security built directly into the delivery lifecycle without slowing down developer velocity.",
        icon: "ShieldCheck",
        deliverables: ["Automated SAST / DAST", "IAM Least-Privilege Design", "Compliance & Audit Readiness"]
      },
      {
        id: "cel-sdlc",
        title: "Software Delivery Processes",
        description: "Process-first SDLC consulting to eliminate engineering bottlenecks and release friction.",
        icon: "Workflow",
        deliverables: ["Release Governance", "Quality Gateways", "Developer Experience Optimization"]
      },
      {
        id: "cel-ai",
        title: "AI Applications & Workflow Automation",
        description: "Practical AI integration and internal engineering automation that drives tangible productivity.",
        icon: "Cpu",
        deliverables: ["LLM Workflow Pipelines", "Internal Engineering Tools", "Automated Testing Assistants"]
      }
    ]
  },
  finalMessage: {
    statement: "I stand here not as an exceptional student, but as proof that an average student can build a meaningful journey by refusing to stop.",
    silverJubileeReflection: "Marks may describe one chapter. They do not have to write the entire story.",
    closingCreed: "Success should be defined by overcoming our own limitations, not by the way society sees us."
  },
  lastUpdated: "2026 Silver Jubilee Edition"
};
