export const BUSINESS_INFO = {
  name: 'Gym Holic – The Fitness Club',
  shortName: 'Gym Holic',
  tagline: 'The Fitness Club',
  addressLine1: 'Manendragarh Road,',
  addressLine2: 'Ambikapur, Chhattisgarh – 497001',
  fullAddress: 'Manendragarh Road, Ambikapur, Chhattisgarh – 497001',
  phoneDisplay: '088188 75600',
  phoneTel: 'tel:+918818875600',
  whatsappNumber: '918818875600',
  instagramHandle: '@_.gym_holic._',
  instagramUrl: 'https://www.instagram.com/_.gym_holic._/',
  googleRating: '4.6',
  googleReviewCount: 134,
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Gym+Holic+The+Fitness+Club+Manendragarh+Road+Ambikapur+Chhattisgarh+497001',
};

export function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Membership', href: '#membership' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const ABOUT_HIGHLIGHTS = [
  'Professional training environment designed for focus and consistency',
  'Experienced trainers guiding proper form and steady progression',
  'Modern, well-maintained fitness equipment for every fitness level',
  'Supportive community that keeps you motivated every session',
  'Multiple fitness programs tailored to strength, stamina, and mobility',
];

export const SERVICES = [
  {
    id: 'strength',
    title: 'Gym & Strength Training',
    iconName: 'Dumbbell',
    image: '/images/service-strength.webp',
    alt: 'Modern strength training dumbbells and barbell rack in warm natural lighting at Gym Holic Ambikapur',
    description:
      'Structured resistance and free-weight training with modern machines and guided form to build lean muscle, posture, and everyday strength.',
    whatsappPrompt:
      'Hello Gym Holic! I would like to enquire about Gym & Strength Training.',
  },
  {
    id: 'crossfit',
    title: 'CrossFit',
    iconName: 'Flame',
    image: '/images/service-crossfit.webp',
    alt: 'Functional CrossFit training space with kettlebells and plyo boxes in daylight',
    description:
      'High-energy functional conditioning combining kettlebells, bodyweight drills, and metabolic circuits to elevate endurance and agility.',
    whatsappPrompt:
      'Hello Gym Holic! I would like to enquire about CrossFit sessions.',
  },
  {
    id: 'zumba',
    title: 'Zumba',
    iconName: 'Music',
    image: '/images/service-zumba.webp',
    alt: 'Bright sunlit Zumba dance fitness studio session with warm wooden floors',
    description:
      'Uplifting, rhythm-driven group dance workouts that make cardio joyful while burning calories and boosting coordination.',
    whatsappPrompt:
      'Hello Gym Holic! I would like to know more about Zumba class timings and joining.',
  },
  {
    id: 'aerobics',
    title: 'Aerobics',
    iconName: 'HeartPulse',
    image: '/images/service-aerobics.webp',
    alt: 'Boutique aerobics and cardio studio with exercise mats and natural light',
    description:
      'Dynamic low- and moderate-impact aerobic routines crafted to improve cardiovascular health, stamina, flexibility, and active recovery.',
    whatsappPrompt:
      'Hello Gym Holic! I would like to enquire about Aerobics classes.',
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    iconName: 'UserCheck',
    image: '/images/service-pt.webp',
    alt: 'One-on-one personal training session in a warm boutique fitness studio',
    description:
      'Dedicated one-on-one coaching with personalized workout programming, technique feedback, and accountability aligned to your goals.',
    whatsappPrompt:
      'Hello Gym Holic! I am interested in Personal Training. Please share details.',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Trainers',
    iconName: 'Award',
    description:
      'Attentive coaching focused on safe technique, sustainable progress, and realistic goal setting.',
  },
  {
    title: 'Well-maintained Equipment',
    iconName: 'ShieldCheck',
    description:
      'Clean, regularly serviced strength and conditioning gear ready for smooth daily workouts.',
  },
  {
    title: 'Positive Workout Environment',
    iconName: 'Sun',
    description:
      'A welcoming, clutter-free atmosphere where beginners and seasoned athletes feel equally at home.',
  },
  {
    title: 'Multiple Fitness Programs',
    iconName: 'Layers',
    description:
      'From Strength Training and CrossFit to Zumba, Aerobics, and Personal Training under one roof.',
  },
  {
    title: 'Supportive Fitness Community',
    iconName: 'Users',
    description:
      'Train alongside encouraging members in Ambikapur who celebrate consistency and healthy habits.',
  },
];

export const TRAINER_PLACEHOLDERS = [
  {
    id: 'trainer-1',
    role: 'Strength & Conditioning Coach',
    statusLabel: 'Trainer Profile Placeholder',
    focus: 'Gym & Strength Training • Form & Progression',
    note: 'Actual trainer name, photo, and certifications will be updated once confirmed by the Gym Holic team.',
  },
  {
    id: 'trainer-2',
    role: 'CrossFit & Functional Coach',
    statusLabel: 'Trainer Profile Placeholder',
    focus: 'CrossFit • Conditioning & Mobility',
    note: 'Actual trainer name, photo, and certifications will be updated once confirmed by the Gym Holic team.',
  },
  {
    id: 'trainer-3',
    role: 'Zumba & Aerobics Instructor',
    statusLabel: 'Trainer Profile Placeholder',
    focus: 'Zumba • Aerobics • Group Fitness',
    note: 'Actual trainer name, photo, and certifications will be updated once confirmed by the Gym Holic team.',
  },
];

export const MEMBERSHIP_PLANS = [
  {
    id: 'monthly',
    name: 'Monthly Membership',
    duration: '1 Month',
    price: '₹XXXX',
    badge: 'Flexible Start',
    featured: false,
    description:
      'Ideal for getting started, building your routine, and experiencing all core gym floor facilities.',
    features: [
      'Full access to Gym & Strength Training floor',
      'Locker & changing area access',
      'Initial floor orientation & guidance',
      'Access to supportive community environment',
    ],
    whatsappMessage:
      'Hello Gym Holic! I would like to enquire about the Monthly Membership plan and current pricing.',
  },
  {
    id: 'quarterly',
    name: 'Quarterly Membership',
    duration: '3 Months',
    price: '₹XXXX',
    badge: 'Most Popular',
    featured: true,
    description:
      'Designed for members committed to measurable strength, stamina, and lifestyle transformation.',
    features: [
      'Full access to Gym & Strength Training floor',
      'Program variety across CrossFit, Zumba & Aerobics*',
      'Periodic progress check-ins with floor trainers',
      'Priority slot guidance for group sessions',
    ],
    whatsappMessage:
      'Hello Gym Holic! I would like to enquire about the Quarterly Membership plan and current pricing.',
  },
  {
    id: 'yearly',
    name: 'Yearly Membership',
    duration: '12 Months',
    price: '₹XXXX',
    badge: 'Best Value',
    featured: false,
    description:
      'Our long-term commitment plan for year-round consistency, strength, and overall wellness.',
    features: [
      'Full year access to Gym & Strength floor',
      'Access to group fitness & conditioning programs*',
      'Ongoing trainer support & form check-ins',
      'Best annual value once confirmed by gym owner',
    ],
    whatsappMessage:
      'Hello Gym Holic! I would like to enquire about the Yearly Membership plan and current pricing.',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    category: 'Gym Interior',
    title: 'Sunlit Main Training Floor',
    image: '/images/hero-studio.webp',
    alt: 'Gym Holic warm sunlit main interior and training floor',
    span: 'wide',
  },
  {
    id: 'g2',
    category: 'Workout Equipment',
    title: 'Free Weights & Strength Zone',
    image: '/images/service-strength.webp',
    alt: 'Neatly arranged dumbbells and barbell rack in Gym Holic',
    span: 'normal',
  },
  {
    id: 'g3',
    category: 'Training Sessions',
    title: 'Guided Kettlebell Coaching',
    image: '/images/about-community.webp',
    alt: 'Trainer guiding a member during a kettlebell training session',
    span: 'tall',
  },
  {
    id: 'g4',
    category: 'Group Fitness',
    title: 'High-Energy Zumba Studio',
    image: '/images/service-zumba.webp',
    alt: 'Group Zumba fitness session in warm natural light',
    span: 'normal',
  },
  {
    id: 'g5',
    category: 'Training Sessions',
    title: 'CrossFit & Functional Rig',
    image: '/images/service-crossfit.webp',
    alt: 'CrossFit functional training zone with plyo boxes and kettlebells',
    span: 'normal',
  },
  {
    id: 'g6',
    category: 'Group Fitness',
    title: 'Aerobics & Mobility Space',
    image: '/images/service-aerobics.webp',
    alt: 'Aerobics studio with exercise mats and sunlit windows',
    span: 'normal',
  },
  {
    id: 'g7',
    category: 'Training Sessions',
    title: 'One-on-One Personal Training',
    image: '/images/service-pt.webp',
    alt: 'Focused personal training session at Gym Holic',
    span: 'normal',
  },
  {
    id: 'g8',
    category: 'Workout Environment',
    title: 'Welcoming Lounge & Studio Atmosphere',
    image: '/images/gallery-environment.webp',
    alt: 'Clean and welcoming boutique fitness club lounge and workout environment',
    span: 'wide',
  },
];

export const GALLERY_CATEGORIES = [
  'All',
  'Gym Interior',
  'Workout Equipment',
  'Training Sessions',
  'Group Fitness',
  'Workout Environment',
];
