export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'Bridal' | 'Hair' | 'Aesthetics' | 'Packages';
  duration: string;
  price: string;
  features: string[];
}

export interface CourseModule {
  week: string;
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  image: string;
  description: string;
  learn: string[];
  nextBatch: string;
  seatsLeft: number;
  schedule: string;
  price: string;
  kitIncluded: string[];
  modules: CourseModule[];
}

export const services: Service[] = [
  {
    id: 's1',
    name: "Luxury Bridal Makeup",
    category: "Bridal",
    duration: "2.5 Hours",
    price: "Starts at 7,000 ETB",
    description: "Flawless, long-lasting high-definition makeup customized for your special wedding day. At-home or in-studio.",
    image: "/IMG_20260226_230532_105.jpg",
    features: [
      "Full face Ultra-HD bridal glam & contouring",
      "Premium faux mink lash application",
      "16-hour sweat & tear-proof setting technique",
      "Complementary bridal emergency touch-up kit"
    ]
  },
  {
    id: 's2',
    name: "Ethiopian Melse & Traditional Glam",
    category: "Bridal",
    duration: "2 Hours",
    price: "Starts at 5,500 ETB",
    description: "Vibrant and radiant traditional makeup created to harmonize with Habesha Kemis and cultural celebrations.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&auto=format&fit=crop&q=80",
    features: [
      "Habesha outfit & jewelry color matching",
      "Radiant golden dewy skin finish",
      "Precision sculpted brows & winged eye look",
      "Transfer-resistant luxury lip blend"
    ]
  },
  {
    id: 's3',
    name: "Advanced Bridal & Gala Updos",
    category: "Hair",
    duration: "1.5 Hours",
    price: "Starts at 3,500 ETB",
    description: "From textured romantic waves to royal structural updos tailored for brides, banquets, and red carpet events.",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
    features: [
      "Hollywood waves or textured romantic updos",
      "Veil, crown & custom hair jewelry placement",
      "Extension blending & structural hair padding",
      "High-humidity anti-frizz luxury seal"
    ]
  },
  {
    id: 's4',
    name: "Luxury Silk Press & Deep Nourishment",
    category: "Hair",
    duration: "2 Hours",
    price: "Starts at 3,000 ETB",
    description: "Deep ultrasonic hydration steam treatment followed by a featherlight, glass-finish silk press without chemical damage.",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800",
    features: [
      "Deep moisture ozone steam conditioning",
      "Split-end precision micro-trim",
      "Thermal heat defense shield application",
      "Weightless high-shine silk finish"
    ]
  },
  {
    id: 's5',
    name: "Radiance Facial & Skincare Prep",
    category: "Aesthetics",
    duration: "1.5 Hours",
    price: "Starts at 4,000 ETB",
    description: "Pre-event rejuvenating facial designed to detoxify pores, deeply hydrate, and create the perfect canvas for makeup.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    features: [
      "Ultrasonic pore extraction & gentle peel",
      "Facial contouring lymphatic drainage massage",
      "24K Gold or hyaluronic collagen jelly mask",
      "Instant skin plumping & radiant glow"
    ]
  },
  {
    id: 's6',
    name: "Full Bridal Party VIP Package",
    category: "Packages",
    duration: "4 - 5 Hours",
    price: "Custom Package",
    description: "Complete all-inclusive glamour experience for the bride plus mother of the bride and bridesmaids at your venue.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    features: [
      "Bride + up to 3 bridesmaids full makeup & hair",
      "On-site service in Addis Ababa (Home, Hotel, Venue)",
      "Complimentary skin-prep for the bridal party",
      "Dedicated stylist presence for touch-ups before photos"
    ]
  }
];

export const courses: Course[] = [
  {
    id: 'c1',
    title: "Professional Makeup Masterclass & Artistry",
    duration: "6 Weeks",
    level: "Beginner to Professional",
    nextBatch: "Starts April 20, 2026",
    seatsLeft: 4,
    schedule: "Mon, Wed & Fri (9:00 AM - 12:30 PM)",
    price: "24,500 ETB",
    image: "/IMG_20260226_230532_105.jpg",
    description: "A comprehensive accredited diploma course that takes you from zero to a certified professional makeup artist ready to work with high-paying bridal and commercial clients.",
    learn: [
      "Facial Anatomy & Undertone Science for Melanin Skin",
      "Luxury Bridal, Melse & Red Carpet Artistry",
      "Advanced Baking, Contouring & Dewy Glass-Skin Methods",
      "Sanitation, Client Consultation & High-End Pricing Strategy"
    ],
    kitIncluded: [
      "32-Piece Professional Brush Set & Leather Roll",
      "Full 18-Shade Ultra HD Cream Complexion Palette",
      "35-Color Luxury Pigment Eyeshadow & Highlighter Palette",
      "Stainless Steel Mixing Palette, Spatula & Sponge Blender",
      "Pro Lash Kit, Adhesive & Dual-Head Applicator",
      "Sanitizing Mist & Brush Shampoo"
    ],
    modules: [
      {
        week: "Week 01",
        title: "Hygiene, Skin Science & Color Theory",
        topics: [
          "Dermatological hygiene & tool sterilization standards",
          "Skin types (oily, combination, dry) & tailored skin prep",
          "Color wheel mastery: neutralizing hyperpigmentation & undertones"
        ]
      },
      {
        week: "Week 02",
        title: "Complexion Architecture & Base Perfecting",
        topics: [
          "Color matching under daylight vs. tungsten studio lights",
          "Cream vs. powder contouring & modern micro-baking",
          "Long-wear formulas and transfer-resistant techniques"
        ]
      },
      {
        week: "Week 03",
        title: "Eye Artistry & Brow Sculpting",
        topics: [
          "Brow symmetry, mapping and natural feathering",
          "Smoky eyes, cut creases, and halo blending for varied eye shapes",
          "Custom lash clustering & strip lash application"
        ]
      },
      {
        week: "Week 04",
        title: "Luxury Bridal & Ethiopian Traditional Glam",
        topics: [
          "Wedding day timelines and tear-proof bridal finishes",
          "Ethiopian traditional Kemis/Melse color harmony and styling",
          "Speed application techniques for large bridal parties"
        ]
      },
      {
        week: "Week 05",
        title: "Editorial, Photography & Live Model Practicum",
        topics: [
          "Lighting dynamics: ring lights, flash photography & HD cameras",
          "High-fashion editorial looks and glossy skin textures",
          "Supervised live model practical assessment with instructor feedback"
        ]
      },
      {
        week: "Week 06",
        title: "Business of Beauty & Graduation Portfolio",
        topics: [
          "Pricing your services and client contracting",
          "Building an Instagram portfolio & content creation with smartphones",
          "Final graduation practical exam and certificate ceremony"
        ]
      }
    ]
  },
  {
    id: 'c2',
    title: "Advanced Bridal Hairstyling Certification",
    duration: "4 Weeks",
    level: "Intermediate",
    nextBatch: "Starts May 5, 2026",
    seatsLeft: 5,
    schedule: "Tue, Thu & Sat (2:00 PM - 5:30 PM)",
    price: "17,500 ETB",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
    description: "Master modern bridal hairstyles, intricate textured updos, extension placement, and veil anchoring for salon owners and freelance stylists looking to increase earnings.",
    learn: [
      "Hollywood Glam Waves & Structural Teasing",
      "Romantic Low Chignons & Bohemian Textured Buns",
      "Seamless Clip-in & Net Padding Integration",
      "Veil, Tiara & Cultural Headpiece Anchoring"
    ],
    kitIncluded: [
      "Professional Ceramic Tourmaline Styling Wand Set",
      "Carbon Fiber Teasing, Detangling & Edge Brushes",
      "Multi-Size Donut Fillers, Hair Padding & Invisible Nets",
      "500-Piece Heavy-Duty Bobby Pin & Hairpin Organizer",
      "Pro Sectioning Crocodile Clips & Tail Combs",
      "Humidity Shield Finishing Spray & Hair Polish"
    ],
    modules: [
      {
        week: "Week 01",
        title: "Hair Anatomy, Prep & Volume Foundation",
        topics: [
          "Texture analysis and thermal heat protection",
          "Mastering the salon blowout & foundation root lift",
          "Hair curling techniques: ribbon curls, flat-iron curls & wand sets"
        ]
      },
      {
        week: "Week 02",
        title: "Classic & Modern Bridal Updos",
        topics: [
          "Clean French twists & structured royal chignons",
          "Messy-chic textured buns and side-swept pin-ups",
          "Smoothing flyaways without stiffness or crunch"
        ]
      },
      {
        week: "Week 03",
        title: "Extension Integration & Hollywood Waves",
        topics: [
          "Seamless placement of clip-ins & wire extensions",
          "The signature Hollywood wave: brushing out and finger-setting",
          "Hidden structural hair padding for fine-hair brides"
        ]
      },
      {
        week: "Week 04",
        title: "Veils, Accessories & Final Practical Exam",
        topics: [
          "Securing heavy veils, crowns, and Ethiopian cultural headpieces",
          "Bridal morning emergency fixes and quick transition looks",
          "Live model photoshoot exam and certification handover"
        ]
      }
    ]
  }
];

export interface TransformationLook {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  serviceName: string;
}

export const transformationLooks: TransformationLook[] = [
  {
    id: "look-1",
    title: "Royal Ethiopian Bridal Glam",
    subtitle: "Wedding Day High-Definition Transformation",
    category: "Bridal",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000",
    afterImage: "/IMG_20260226_230532_105.jpg",
    beforeLabel: "Bare Canvas & Prep",
    afterLabel: "Ultra-HD Bridal Glam",
    description: "Flawless undertone color matching, sculptured brow architecture, dimensional contouring, and a 16-hour sweat-and-tear-proof setting technique.",
    serviceName: "Luxury Bridal Makeup"
  },
  {
    id: "look-2",
    title: "Traditional Melse Radiant Glow",
    subtitle: "Habesha Kemis & Cultural Harmony",
    category: "Traditional",
    beforeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000",
    afterImage: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=1000",
    beforeLabel: "Clean Skin",
    afterLabel: "Golden Melse Radiance",
    description: "Warm golden undertone enhancement, dramatic winged eyes, dewy skin highlights, and transfer-resistant luxury lip artistry.",
    serviceName: "Ethiopian Melse & Traditional Glam"
  }
];

export interface GraduateSpotlight {
  id: string;
  name: string;
  course: string;
  year: string;
  currentRole: string;
  location: string;
  quote: string;
  image: string;
}

export const graduateSpotlights: GraduateSpotlight[] = [
  {
    id: "grad-1",
    name: "Tigist Alemu",
    course: "Professional Makeup Masterclass",
    year: "Class of 2025",
    currentRole: "Lead Bridal Artist & Studio Owner",
    location: "Bole, Addis Ababa",
    quote: "BeautyVibes didn't just teach me how to apply foundation — Hermela taught me color theory for Ethiopian skin tones and the business of bridal contracts. Within 3 months of graduating, I booked 14 brides!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "grad-2",
    name: "Bethlehem Haile",
    course: "Advanced Bridal Hairstyling",
    year: "Class of 2025",
    currentRole: "Celebrity & Editorial Hair Stylist",
    location: "Kazanchis, Addis Ababa",
    quote: "The pro kit and hands-on live model training gave me immense confidence. Learning Hollywood waves and veil anchoring elevated my salon revenue dramatically.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "grad-3",
    name: "Selamawit Desta",
    course: "Professional Makeup Masterclass",
    year: "Class of 2026",
    currentRole: "Freelance Fashion & Commercial Artist",
    location: "CMC, Addis Ababa",
    quote: "The small cohort size (we were only 7 students) meant personal critique every single morning. The certificate gave me immediate credibility with media productions.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400"
  }
];

export interface FAQItem {
  question: string;
  answer: string;
  category: 'salon' | 'academy';
}

export const faqs: FAQItem[] = [
  {
    category: 'salon',
    question: "How far in advance should I book my bridal makeup?",
    answer: "We recommend booking 1 to 3 months in advance, especially during the peak Ethiopian wedding seasons (after Tikemt, Genna, and Fasika). This guarantees your preferred morning or afternoon time slot and allows time for a bridal consultation trial."
  },
  {
    category: 'salon',
    question: "How does the at-home mobile service work in Addis Ababa?",
    answer: "Our certified artists arrive at your home, hotel, or preparation venue anywhere across Addis Ababa (including Bole, CMC, Sarbet, Kazanchis, Old Airport, and surroundings). We bring complete professional lighting, sanitized makeup kits, and hair equipment so you can relax without dealing with city traffic."
  },
  {
    category: 'salon',
    question: "Can you accommodate my bridesmaids and mother on wedding morning?",
    answer: "Yes! With our Full Bridal Party VIP Package, our team coordinates the bride plus up to 3 or more bridesmaids/family members. We deploy dedicated assistants to ensure everyone is completed on schedule for photography."
  },
  {
    category: 'salon',
    question: "What cosmetics brands and hygiene standards do you maintain?",
    answer: "We strictly use 100% authentic, dermatologically tested luxury palettes and foundation systems (NARS, MAC, Laura Mercier, Charlotte Tilbury) tailored for melanin-rich and sensitive skin. All brushes and tools undergo medical-grade UV and alcohol sterilization between each client."
  },
  {
    category: 'salon',
    question: "What is your deposit and cancellation policy?",
    answer: "A 30% reservation deposit via Telebirr or CBE Birr secures your wedding date. Dates can be rescheduled with at least 14 days' notice subject to artist calendar availability."
  },
  {
    category: 'academy',
    question: "Do I need prior makeup or styling experience to enroll?",
    answer: "No prior experience is necessary for our Professional Makeup Masterclass. We start from absolute fundamentals — brush ergonomics, hygiene, skin preparation, and color theory — and progress step-by-step into advanced bridal and red-carpet glam."
  },
  {
    category: 'academy',
    question: "Is the professional makeup brush set and toolkit included in the tuition fee?",
    answer: "Yes! Every enrolled student receives their own comprehensive 32-piece professional brush roll, foundation complexion palette, contour kit, mixing spatula, and lash kit to use during class and keep permanently for client work."
  },
  {
    category: 'academy',
    question: "Will I receive an accredited certification upon graduation?",
    answer: "Yes. Upon completing the required course hours, practical assignments, and the final live model graduation exam, you will receive an official BeautyVibes Certified Diploma recognized across local salons and studios."
  },
  {
    category: 'academy',
    question: "Do you offer flexible installment payment plans?",
    answer: "Yes! Tuition can be settled in two convenient installments (50% deposit upon registration to reserve your seat and the remaining 50% midway through the diploma program) via Telebirr or CBE Birr."
  },
  {
    category: 'academy',
    question: "Do students practice on live models or mannequins?",
    answer: "You will practice on both! Technique foundations are perfected on mannequins, followed by intensive live model practical sessions where you work on different skin types, undertones, and face shapes with instructor coaching."
  }
];

