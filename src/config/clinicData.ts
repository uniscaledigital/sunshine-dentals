export interface Doctor {
  id: string;
  name: string;
  role: string;
  qualification: string;
  qualificationDescription: string;
  registrationNumber: string;
  focus: string;
  quote: string;
  bio: string;
  image: string;
  specialties: string[];
  schedule: string;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  keyTrigger: string;
  features: string[];
  icon: string;
}

export interface ClinicalCase {
  id: string;
  title: string;
  category: string;
  description?: string;
  image: string;
  tag: string;
}

export const clinicInfo = {
  name: "Sunshine Dental Clinic",
  tagline: "Your Smile, Our Priority",
  headline: "Advanced, Painless Dental Care in Hanamkonda",
  description: "Experience modern, anxiety-free dental care with advanced hospital sterilization, digital diagnosis, and gentle specialists in Hanamkonda.",
  address: "1st Floor, Sunshine Dental Clinic, above Satyam’s Diabetic Clinic, Ennugulagada, Raganna Darwaja, Gandhi Nagar, Chowrastha, Hanamkonda, Warangal, Telangana – 506011.",
  landmark: "Above Satyam’s Diabetic Clinic, Ennugulagada, Raganna Darwaja, Gandhi Nagar, Chowrastha",
  phone: "+91 98765 43210",
  phoneFormatted: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "care@sunshinedentalhanamkonda.com",
  timings: {
    weekdays: "10:00 AM – 8:30 PM (Continuous OPD)",
    sunday: "10:00 AM – 1:30 PM (Consultation by Slot)",
    emergency: "24/7 On-Call Support for Acute Pain"
  },
  mapUrl: "https://www.google.com/maps/dir//1st+floor,+SUNSHINE+DENTAL+CLINIC,+above+Satyam%E2%80%99s+Diabetic+Clinic,+Ennugulagada,+Raganna+Darwaja,+Gandhi+Nagar,+Chowrastha,+Hanamkonda,+Warangal,+Telangana+506011/@18.0062914,79.5727145,15z/data=!3m1!5s0x3a33459cdbf21753:0x6843682872eb6a55!4m16!1m7!3m6!1s0x3a3345c246e700e9:0x7d5418ab93def97b!2sSUNSHINE+DENTAL+CLINIC!8m2!3d18.0062638!4d79.572622!16s%2Fg%2F11m5nvbjpf!4m7!1m0!1m5!1m1!1s0x3a3345c246e700e9:0x7d5418ab93def97b!2m2!1d79.572622!2d18.0062638?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15177.62923104924!2d79.57271449999999!3d18.006291400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3345c246e700e9%3A0x7d5418ab93def97b!2sSUNSHINE%20DENTAL%20CLINIC!5e0!3m2!1sen!2sin!4v1793217617964!5m2!1sen!2sin",
  trustBadges: [
    { title: "100% Autoclaved Tools", subtitle: "Class-B Hospital Sterilization", icon: "verified" },
    { title: "Zero Pain Protocols", subtitle: "Gentle Anesthetic Administration", icon: "healing" },
    { title: "Certified Practitioners", subtitle: "Comprehensive Care for All Dental Needs", icon: "medical_services" },
    { title: "Digital Low-Dose Scans", subtitle: "Immediate Chairside Radiography", icon: "radiology" }
  ]
};

export const doctors: Doctor[] = [
  {
    id: "bhanuja",
    name: "Dr. Bhanuja",
    role: "General Dentistry & Comprehensive Dental Care",
    qualification: "BDS, FMCD",
    qualificationDescription: "Master's in Clinical Dentistry",
    registrationNumber: "A-6605",
    focus: "Comprehensive dental care for a wide range of oral health needs.",
    quote: "Dental wellness should never begin with dread. My focus is on creating a peaceful, calm clinical environment where gentle technique and clear communication remove all anxiety from your procedure.",
    bio: "Dr. Bhanuja provides comprehensive dental care for a wide range of dental concerns at Sunshine Dental Clinic, helping patients find appropriate treatment for their oral health needs. With diagnostic precision and empathetic chairside reassurance, she practices anxiety-conscious dental care so that every patient feels thoroughly heard, educated, and comfortable prior to any clinical intervention.",
    image: "/images/doctors/dr-bhanuja.jpg",
    specialties: [
      "Painless Tooth Extractions & Wisdom Tooth Management",
      "Conservative Restorative Care & Composite Fillings",
      "Emergency Tooth Pain Relief & Gentle Care",
      "Comprehensive Oral Health Examinations & Diagnostics",
      "Preventive Dentistry & Post-Procedure Recovery Planning"
    ],
    schedule: "Mon - Sat: 10:00 AM - 04:30 PM"
  },
  {
    id: "madhuri",
    name: "Dr. Madhuri",
    role: "General Dentistry & Comprehensive Dental Care",
    qualification: "BDS, FCD",
    qualificationDescription: "Fellowship in Clinical Dentistry",
    registrationNumber: "A-10922",
    focus: "Comprehensive dental care for a wide range of oral health needs.",
    quote: "Every smile has a unique anatomical balance. By combining precise technique with gentle care, we preserve natural teeth and help every patient achieve healthy, confident oral wellness.",
    bio: "Dr. Madhuri provides comprehensive dental care for a wide range of dental concerns at Sunshine Dental Clinic, helping patients find appropriate treatment for their oral health needs. Recognized for her compassionate demeanor and meticulous attention to biological conservation, she works closely with patients to ensure gentle, high-quality dental care in a welcoming environment.",
    image: "/images/doctors/dr-madhuri.jpg",
    specialties: [
      "Endodontic & Root Canal Treatments (RCT)",
      "Aesthetic Restorations & Tooth-Colored Fillings",
      "Custom Porcelain Veneers & Smile Aesthetics",
      "Clear Aligners & Malalignment Consultations",
      "Ultrasonic Teeth Scaling & Stain Removal"
    ],
    schedule: "Mon - Sat: 02:00 PM - 08:30 PM"
  }
];

export const services: Service[] = [
  {
    id: "wisdom-tooth",
    name: "Wisdom Tooth & Extractions",
    category: "Surgical Care",
    description: "Painless removal of deeply impacted wisdom teeth (Gnana Dantham), emergency relief for acute pressure, and sterile minor oral surgeries.",
    keyTrigger: "Painless Extraction • 1-Day Healing Care",
    features: [
      "Atraumatic extraction protocol with local sedation",
      "Deeply impacted wisdom tooth surgical management",
      "Minimal postoperative swelling and rapid recovery",
      "Strict hospital-grade sterile operatory protocol"
    ],
    icon: "dentistry"
  },
  {
    id: "rct",
    name: "Root Canal Treatment (RCT)",
    category: "Endodontics",
    description: "Single-sitting microscope-guided root canals to eliminate severe pulp infection, preserve natural teeth, and fit durable zirconia crowns.",
    keyTrigger: "Single-Sitting RCT • Zero Pain Protocol",
    features: [
      "Microscopic rotary canal debridement",
      "Same-day single-sitting completion for acute cases",
      "Biocompatible hermetic seal preventing reinfection",
      "High-translucency Zirconia & CAD/CAM ceramic crowns"
    ],
    icon: "healing"
  },
  {
    id: "whitening-veneers",
    name: "Teeth Whitening & Veneers",
    category: "Aesthetic Dentistry",
    description: "In-office laser whitening, stain removal, chipped tooth repair, porcelain veneers, and complete aesthetic smile makeovers.",
    keyTrigger: "Same-Day Whitening • Instant Radiance",
    features: [
      "Non-invasive laser teeth whitening up to 6 shades lighter",
      "Ultra-thin ceramic & composite veneers for diastema/chips",
      "Enamel-safe stain removal from smoking/coffee",
      "Custom digital aesthetic preview before bonding"
    ],
    icon: "auto_awesome"
  },
  {
    id: "braces-aligners",
    name: "Braces & Clear Aligners",
    category: "Orthodontics",
    description: "Invisible aligner treatment for adults and adolescents. Correction of crowded, misaligned, or spaced teeth with digitally mapped progress.",
    keyTrigger: "Discreet Aligners • Free Digital Scan",
    features: [
      "Nearly invisible customized clear aligner trays",
      "Correction for crowded teeth, crossbites, and open gaps",
      "3D digital intraoral scan for predictable progress",
      "Traditional ceramic & self-ligating metal braces available"
    ],
    icon: "view_in_ar"
  },
  {
    id: "implants-bridges",
    name: "Dental Implants & Bridges",
    category: "Implantology",
    description: "Permanent replacement for missing teeth using biocompatible titanium fixtures, immediate loading implants, and full arch restoration.",
    keyTrigger: "Lifetime Stability • Natural Chew Function",
    features: [
      "Medical-grade titanium root posts fused to jawbone",
      "Single tooth, multiple teeth, or full arch restoration",
      "Restores 100% natural chewing power and facial structure",
      "Fixed crown and bridge prosthetics with lifetime durability"
    ],
    icon: "token"
  },
  {
    id: "kids-scaling",
    name: "Kids Dental & Deep Scaling",
    category: "Pediatric & Preventive",
    description: "Gentle ultrasonic plaque scaling, cavity prevention with fluoride varnish, pit & fissure sealants, and gentle pediatric dentistry.",
    keyTrigger: "Child-Friendly OPD • Routine Cleaning",
    features: [
      "Gentle ultrasonic cavitation plaque and tartar removal",
      "Painless pediatric dental care to prevent early dental phobia",
      "Protective fluoride varnish and pit & fissure sealants",
      "Custom oral hygiene guidance for parents and children"
    ],
    icon: "child_care"
  }
];

export const clinicalGallery: ClinicalCase[] = [
  {
    id: "case-1",
    title: "Midline Diastema Aesthetic Closure",
    category: "Cosmetic & Veneers",
    image: "/images/clinical/case-1-midline-diastema-closure.jpg",
    tag: "Before & After"
  },
  {
    id: "case-2",
    title: "Deep Ultrasonic Scaling & Stain Removal",
    category: "Preventive Periodontics",
    image: "/images/clinical/case-2-ultrasonic-deep-scaling.jpg",
    tag: "Before & After"
  },
  {
    id: "case-3",
    title: "Fractured Incisor Crown Restoration",
    category: "Restorative Dentistry",
    image: "/images/clinical/case-4-fractured-incisor-crown-restoration.jpg",
    tag: "Before & After"
  },
  {
    id: "case-4",
    title: "Orthodontic Crowding & Alignment",
    category: "Clear Aligners",
    image: "/images/clinical/case-8-anterior-malocclusion-correction.jpg",
    tag: "Before & After"
  },
  {
    id: "case-5",
    title: "Anterior Spacing & Bite Harmony",
    category: "Smile Architecture",
    image: "/images/clinical/case-7-anterior-spacing-closure.jpg",
    tag: "Before & After"
  },
  {
    id: "case-6",
    title: "Occlusal Stain & Plaque Cleanse",
    category: "Preventive Care",
    image: "/images/clinical/case-9-occlusal-stain-removal.jpg",
    tag: "Before & After"
  }
];

export const clinicPhotos = [
  {
    title: "Reception & Consultation Welcome Lounge",
    subtitle: "Airy, clean studio aesthetics designed to immediately relieve clinical tension",
    image: "/images/stitch/stitch_img_5.jpg"
  },
  {
    title: "Class-B Hospital Autoclave Lab",
    subtitle: "Pristine sterile instrument processing with hermetically sealed pouches",
    image: "/images/stitch/stitch_img_6.jpg"
  },
  {
    title: "Digital Radiography & Chairside Consultation",
    subtitle: "High-definition diagnostic displays for completely transparent treatment discussions",
    image: "/images/stitch/stitch_img_7.jpg"
  },
  {
    title: "Sterilized Operatory Suite",
    subtitle: "Modern ergonomic dental chairs with medical-grade air filtration and gentle lighting",
    image: "/images/stitch/stitch_img_8.jpg"
  }
];

export interface GoogleReview {
  id: string;
  name: string;
  avatarLetter: string;
  avatarBg: string;
  rating: number;
  timeAgo: string;
  reviewerMeta: string;
  reviewText: string;
}

export const googleReviews: GoogleReview[] = [
  {
    id: "review-1",
    name: "Athmakuri Sumalatha",
    avatarLetter: "A",
    avatarBg: "#7B1FA2",
    rating: 5,
    timeAgo: "3 months ago",
    reviewerMeta: "4 reviews · 1 photo",
    reviewText: "We had a wonderful experience at Sunshine Dental Hospital. My 5-year-old daughter had cavities, and the doctors treated her with great care, patience, and kindness. They explained everything clearly and made her feel comfortable throughout ..."
  },
  {
    id: "review-2",
    name: "Omprakash Kumbarakar",
    avatarLetter: "O",
    avatarBg: "#0288D1",
    rating: 5,
    timeAgo: "2 months ago",
    reviewerMeta: "2 reviews",
    reviewText: "Most affordable and best dental clinic in hanumakonda done with root canal treatment which was painless and dr. Bhanuja and dr. Madhuri was so patient and explained and done treatment in a comfortable way. I highly recommend it"
  },
  {
    id: "review-3",
    name: "Anjali M",
    avatarLetter: "A",
    avatarBg: "#E65100",
    rating: 5,
    timeAgo: "1 year ago",
    reviewerMeta: "1 review",
    reviewText: "Yesterday, I visited Sunshine Dental Clinic to have my wisdom tooth removed. The treatment was completely painless, and the doctors did a great job. They treated me with full care and made me feel very comfortable as a patient. Highly recommended their service."
  }
];
