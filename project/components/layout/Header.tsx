// 'use client';
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import {
//   ChevronDown,
//   Menu,
//   X,
//   ArrowRight,
//   Building2,
//   HeartPulse,
//   ShoppingBag,
//   Briefcase,
//   Scale,
//   Landmark,
//   GraduationCap,
//   Hotel,
//   UtensilsCrossed,
//   Sparkles,
//   Search,
//   TrendingUp,
//   Code2,
//   MousePointerClick,
//   PenTool,
//   Share2,
//   LayoutGrid,
//   Mail,
//   Phone,
//   MapPin,
//   type LucideIcon,
// } from 'lucide-react';
// import { services } from '@/lib/services';
// import { cn } from '@/lib/utils';
// import { BASE_URL } from '@/utils/baseUrl';

// const industryIcons: Record<string, LucideIcon> = {
//   'real-estate': Building2,
//   healthcare: HeartPulse,
//   ecommerce: ShoppingBag,
//   b2b: Briefcase,
//   legal: Scale,
//   finance: Landmark,
//   education: GraduationCap,
//   hospitality: Hotel,
//   food: UtensilsCrossed,
//   beauty: Sparkles,
//   'digital-marketing-for-ecommerce': ShoppingBag,
//   more: Briefcase,
// };

// const defaultIcon = Building2;

// interface Industry {
//   _id: string;
//   title: string;
//   slug: string;
//   banner: {
//     public_id: string;
//     secure_url: string;
//   };
//   overview: string;
//   content: string;
//   benefits: string[];
//   faq: Array<{
//     question: string;
//     answer: string;
//   }>;
//   cta: {
//     heading: string;
//     subheading: string;
//     buttonText: string;
//     buttonLink: string;
//   };
//   metaTitle: string;
//   metaDescription: string;
//   status: string;
//   createdAt: string;
//   updatedAt: string;
// }

// interface MenuCategory {
//   _id: string;
//   name: string;
//   slug: string;
//   services: Array<{
//     _id: string;
//     title: string;
//     slug: string;
//   }>;
// }

// const menuCategoryIcons: Record<string, LucideIcon> = {
//   'seo': Search,
//   'digital-marketing': TrendingUp,
//   'social-media': Share2,
//   'web-development': Code2,
//   'content-marketing': PenTool,
//   'ppc': MousePointerClick,
// };

// const getMenuCategoryIcon = (slug: string): LucideIcon => {
//   return menuCategoryIcons[slug] || Briefcase;
// };

// function ServicesIllustration() {
//   return (
//     <svg viewBox="0 0 240 180" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
//       <defs>
//         <linearGradient id="svcGrad" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor="#0868A0" stopOpacity="0.16" />
//           <stop offset="100%" stopColor="#0868A0" stopOpacity="0.04" />
//         </linearGradient>
//       </defs>
//       <rect x="0" y="0" width="240" height="180" rx="20" fill="url(#svcGrad)" />
//       <rect x="34" y="112" width="18" height="34" rx="4" fill="#0868A0" opacity="0.35" />
//       <rect x="62" y="94" width="18" height="52" rx="4" fill="#0868A0" opacity="0.55" />
//       <rect x="90" y="70" width="18" height="76" rx="4" fill="#0868A0" opacity="0.8" />
//       <rect x="118" y="46" width="18" height="100" rx="4" fill="#0868A0" />
//       <path
//         d="M34 108 L62 88 L90 62 L118 40 L152 30"
//         stroke="#0F1C4C"
//         strokeWidth="3"
//         strokeLinecap="round"
//         fill="none"
//       />
//       <circle cx="152" cy="30" r="6" fill="#0F1C4C" />
//       <circle cx="182" cy="70" r="22" fill="#ffffff" stroke="#0868A0" strokeWidth="4" />
//       <line x1="197" y1="86" x2="212" y2="101" stroke="#0868A0" strokeWidth="5" strokeLinecap="round" />
//       <path d="M172 70a10 10 0 0 1 10 -10" stroke="#0868A0" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
//     </svg>
//   );
// }

// function IndustriesIllustration() {
//   return (
//     <svg viewBox="0 0 220 170" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
//       <defs>
//         <linearGradient id="indGrad" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor="#0F1C4C" stopOpacity="0.08" />
//           <stop offset="100%" stopColor="#0868A0" stopOpacity="0.14" />
//         </linearGradient>
//       </defs>
//       <rect x="0" y="0" width="220" height="170" rx="20" fill="url(#indGrad)" />
//       <rect x="26" y="90" width="26" height="56" rx="5" fill="#0868A0" opacity="0.9" />
//       <rect x="58" y="66" width="26" height="80" rx="5" fill="#0F1C4C" opacity="0.85" />
//       <rect x="90" y="104" width="26" height="42" rx="5" fill="#0868A0" opacity="0.6" />
//       <rect x="122" y="50" width="26" height="96" rx="5" fill="#0868A0" />
//       <rect x="154" y="80" width="26" height="66" rx="5" fill="#0F1C4C" opacity="0.7" />
//       {[0, 1, 2].map((row) =>
//         [26, 58, 90, 122, 154].map((x, i) => (
//           <rect
//             key={`${row}-${x}`}
//             x={x + 8}
//             y={70 + row * 16}
//             width="10"
//             height="8"
//             rx="1.5"
//             fill="#ffffff"
//             opacity="0.55"
//           />
//         ))
//       )}
//       <circle cx="39" cy="60" r="4" fill="#0F1C4C" />
//       <circle cx="167" cy="46" r="4" fill="#0868A0" />
//       <path d="M39 60 L167 46" stroke="#0868A0" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
//     </svg>
//   );
// }

// function TopBar({ scrolled }: { scrolled: boolean }) {
//   return (
//     <div
//       className={cn(
//         'fixed inset-x-0 top-0 z-[60] hidden bg-[#E90102] text-white transition-all duration-300 md:block',
//         scrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
//       )}
//     >
//       <div className="container mx-auto flex h-10 items-center px-4 text-xs">
//         <div className="flex items-center gap-2 border-r border-white/15 pr-4">
//           <Mail className="h-3.5 w-3.5 text-[#5DB8E8]" />
//           <a href="mailto:hello@infotechagency.com" className="transition-colors hover:text-[#5DB8E8]">
//             hello@infotechagency.com
//           </a>
//         </div>
//         <div className="flex flex-1 items-center justify-center gap-4 border-r border-white/15 px-4">
//           <div className="flex items-center gap-2">
//             <Phone className="h-3.5 w-3.5 text-[#5DB8E8]" />
//             <a href="tel:+9192201 47497" className="transition-colors hover:text-[#5DB8E8]">
//               +91 92201 47497
//             </a>
//           </div>
//           <span className="h-3 w-px bg-white/15" />
//           <div className="flex items-center gap-2">
//             <MapPin className="h-3.5 w-3.5 text-[#5DB8E8]" />
//             <span>Malviya Nagar, Delhi, India</span>
//           </div>
//         </div>
//         <Link
//           href="/contact"
//           className="flex items-center gap-1.5 pl-4 font-semibold text-white transition-colors hover:text-[#5DB8E8]"
//         >
//           Get Free Audit
//           <ArrowRight className="h-3 w-3" />
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openMenu, setOpenMenu] = useState<string | null>(null);
//   const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
//   const [industries, setIndustries] = useState<Industry[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [mobileServiceSubmenu, setMobileServiceSubmenu] = useState<string | null>(null);

//   const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
//   const [menuLoading, setMenuLoading] = useState(true);
//   const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

//   const [activeServiceSlug, setActiveServiceSlug] = useState(services[0]?.slug ?? '');
//   const activeService = services.find((s) => s.slug === activeServiceSlug) ?? services[0];

//   const pathname = usePathname();

//   useEffect(() => {
//     const fetchIndustries = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/industries?status=published&limit=20`);
//         const data = await res.json();
//         if (data.success && data.data) {
//           setIndustries(data.data);
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching industries:', error);
//         setLoading(false);
//       }
//     };
//     fetchIndustries();
//   }, []);

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/services/menu`);
//         const data = await res.json();
//         if (data.success && data.data) {
//           setMenuCategories(data.data);
//           if (data.data.length > 0) {
//             setActiveCategoryId(data.data[0]._id);
//           }
//         }
//         setMenuLoading(false);
//       } catch (error) {
//         console.error('Error fetching menu:', error);
//         setMenuLoading(false);
//       }
//     };
//     fetchMenu();
//   }, []);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     setMobileOpen(false);
//     setOpenMenu(null);
//   }, [pathname]);

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? 'hidden' : '';
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [mobileOpen]);

//   const getIndustryIcon = (slug: string): LucideIcon => {
//     return industryIcons[slug] || defaultIcon;
//   };

//   const getShortDescription = (overview: string, maxLength: number = 60) => {
//     if (!overview) return '';
//     if (overview.length <= maxLength) return overview;
//     return overview.substring(0, maxLength) + '...';
//   };

//   const activeCategory = menuCategories.find(c => c._id === activeCategoryId);
//   const activeCategoryServices = activeCategory?.services || [];

//   return (
//     <>
//       <TopBar scrolled={scrolled} />
//       <header
//         className={cn(
//           'fixed inset-x-0 z-50 transition-all duration-300',
//           scrolled
//             ? 'top-0 bg-white py-3 shadow-[0_4px_24px_rgba(15,28,76,0.1)]'
//             : 
//             'top-0 bg-white py-4 border-b border-border lg:top-10'  
//             // 'top-10 bg-white py-4 border-b border-border'
//         )}
//         onMouseLeave={() => setOpenMenu(null)}
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-2.5">
//               <Image src="/images/logo.webp" height={160} width={160} alt='logo' />
//             </Link>

//             {/* Desktop Nav */}
//             <nav className="hidden items-center gap-1 lg:flex">

//               {/* ===== Company (1st) ===== */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setOpenMenu('company')}
//               >
//                 <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm text-black transition-colors hover:text-ocean">
//                   Company
//                   <ChevronDown className="h-4 w-4" />
//                 </button>
//                 {openMenu === 'company' && (
//                   <div className="absolute left-0 top-full pt-3">
//                     <div className="w-56 overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-premium-lg">
//                       <Link
//                         href="/about-us"
//                         className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-black transition-colors hover:bg-sky"
//                       >
//                         <Building2 className="h-4 w-4 text-[#0868A0]" />
//                         About Us
//                       </Link>
//                       <Link
//                         href="/careers"
//                         className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-black transition-colors hover:bg-sky"
//                       >
//                         <Briefcase className="h-4 w-4 text-[#0868A0]" />
//                         Careers
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* ===== OUR SERVICES (MOVED HERE - 2nd position) ===== */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setOpenMenu('services')}
//               >
//                 <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm text-black transition-colors hover:text-ocean">
//                   Our Services
//                   <ChevronDown className="h-4 w-4" />
//                 </button>
//                 {openMenu === 'services' && !menuLoading && menuCategories.length > 0 && (
//                   <div className="absolute left-1/2 top-full pt-3 -translate-x-1/2">
//                     <div className="flex w-[920px] overflow-hidden rounded-2xl border border-border bg-white shadow-premium-lg">
//                       {/* Left sidebar - Categories */}
//                       <div className="w-[230px] flex-shrink-0 border-r border-border bg-sky/30 p-4">
//                         <h4 className="mb-3 px-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
//                           Categories
//                         </h4>
//                         <div className="space-y-1">
//                           {menuCategories.map((category) => {
//                             const Icon = getMenuCategoryIcon(category.slug);
//                             const isActive = category._id === activeCategoryId;
//                             return (
//                               <button
//                                 key={category._id}
//                                 onMouseEnter={() => setActiveCategoryId(category._id)}
//                                 className={cn(
//                                   'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors',
//                                   isActive
//                                     ? 'bg-brand text-white shadow-sm'
//                                     : 'text-muted-foreground hover:bg-white hover:text-black'
//                                 )}
//                               >
//                                 <Icon className={cn('h-4 w-4', isActive ? 'text-white' : 'text-[#0868A0]')} />
//                                 {category.name}
//                               </button>
//                             );
//                           })}
//                         </div>
//                       </div>

//                       {/* Middle content */}
//                       <div className="flex-1 p-5">
//                         <div className="mb-3 flex items-center justify-between">
//                           <h4 className="text-sm font-bold text-black">
//                             {activeCategory?.name || 'Services'}
//                           </h4>
//                         </div>

//                         {activeCategoryServices.length > 0 ? (
//                           <div className="grid grid-cols-2 gap-1.5">
//                             {activeCategoryServices.map((service) => (
//                               <Link
//                                 key={service._id}
//                                 href={`/services/${service.slug}`}
//                                 className="group flex items-center gap-2 rounded-lg px-3 py-2.5 transition-colors hover:bg-sky/50"
//                               >
//                                 <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-[#0868A0] opacity-0 transition-opacity group-hover:opacity-100" />
//                                 <p className="text-sm font-medium text-black group-hover:text-electric">
//                                   {service.title}
//                                 </p>
//                               </Link>
//                             ))}
//                           </div>
//                         ) : (
//                           <p className="text-sm text-muted-foreground py-4">
//                             No services available in this category.
//                           </p>
//                         )}
//                       </div>

//                       {/* Right featured panel */}
//                       <div className="flex w-[240px] flex-shrink-0 flex-col justify-between border-l border-border bg-sky/40 p-5">
//                         <div>
//                           <ServicesIllustration />
//                           <h4 className="mt-4 text-sm font-bold leading-snug text-black">
//                             Not sure which service fits?
//                           </h4>
//                           <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
//                             Get a free SEO &amp; growth audit and we&apos;ll map the right services to your goals.
//                           </p>
//                         </div>
//                         <Link
//                           href="/contact"
//                           className="mt-4 flex items-center justify-center gap-1.5 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ocean-dark"
//                         >
//                           Get Free Audit
//                           <ArrowRight className="h-3.5 w-3.5" />
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* ===== Our Work (3rd) ===== */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setOpenMenu('work')}
//               >
//                 <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm text-black transition-colors hover:text-ocean">
//                   Our Work
//                   <ChevronDown className="h-4 w-4" />
//                 </button>
//                 {openMenu === 'work' && (
//                   <div className="absolute left-0 top-full pt-3">
//                     <div className="w-56 overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-premium-lg">
//                       <Link
//                         href="/our-work/portfolio"
//                         className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-black transition-colors hover:bg-sky"
//                       >
//                         <Sparkles className="h-4 w-4 text-[#0868A0]" />
//                         Portfolio
//                       </Link>
//                       <Link
//                         href="/our-work/case-studies"
//                         className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-black transition-colors hover:bg-sky"
//                       >
//                         <TrendingUp className="h-4 w-4 text-[#0868A0]" />
//                         Case Studies
//                       </Link>
//                       <Link
//                         href="/our-work/testimonials"
//                         className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-black transition-colors hover:bg-sky"
//                       >
//                         <HeartPulse className="h-4 w-4 text-[#0868A0]" />
//                         Testimonials
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* ===== Industries (4th) ===== */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setOpenMenu('industries')}
//               >
//                 <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm text-black transition-colors hover:text-ocean">
//                   Industries
//                   <ChevronDown className="h-4 w-4" />
//                 </button>
//                 {openMenu === 'industries' && (
//                   <div className="absolute left-1/2 top-full pt-3 -translate-x-1/2">
//                     <div className="flex w-[760px] overflow-hidden rounded-2xl border border-border bg-white shadow-premium-lg">
//                       <div className="flex w-[220px] flex-shrink-0 flex-col justify-between border-r border-border bg-sky/40 p-6">
//                         <div>
//                           <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#0868A0] shadow-sm">
//                             <LayoutGrid className="h-3 w-3" />
//                             Industries
//                           </span>
//                           <h3 className="text-lg font-bold leading-snug text-black">
//                             Solutions built around your industry
//                           </h3>
//                           <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
//                             Playbooks and strategy tailored to how your customers actually buy.
//                           </p>
//                         </div>
//                         <div className="mt-6">
//                           <IndustriesIllustration />
//                         </div>
//                       </div>

//                       <div className="flex-1 p-5">
//                         <div className="mb-3 flex items-center justify-between">
//                           <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
//                             Choose your industry
//                           </h4>
//                         </div>
//                         {loading ? (
//                           <div className="grid grid-cols-2 gap-2">
//                             {[1, 2, 3, 4, 5, 6].map((i) => (
//                               <div key={i} className="animate-pulse rounded-xl bg-sky p-3">
//                                 <div className="flex items-start gap-3">
//                                   <div className="h-10 w-10 rounded-lg bg-gray-200"></div>
//                                   <div className="flex-1">
//                                     <div className="h-4 w-20 rounded bg-gray-200"></div>
//                                     <div className="mt-1 h-3 w-32 rounded bg-gray-200"></div>
//                                   </div>
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         ) : (
//                           <div className="grid grid-cols-2 gap-1.5">
//                             {industries.map((ind) => {
//                               const Icon = getIndustryIcon(ind.slug);
//                               return (
//                                 <Link
//                                   key={ind._id}
//                                   href={`/industries/${ind.slug}`}
//                                   className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-sky"
//                                 >
//                                   <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sky text-[#0868A0] transition-colors group-hover:bg-[#0868A0] group-hover:text-white">
//                                     <Icon className="h-5 w-5" />
//                                   </div>
//                                   <div className="min-w-0">
//                                     <p className="text-sm font-semibold text-black">
//                                       {ind.title}
//                                     </p>
//                                     <p className="mt-0.5 truncate text-xs text-muted-foreground">
//                                       {getShortDescription(ind.overview, 42)}
//                                     </p>
//                                   </div>
//                                 </Link>
//                               );
//                             })}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* ===== Blogs (5th) ===== */}
//               <Link
//                 href="/blogs"
//                 className="rounded-lg px-4 py-2 text-sm text-black transition-colors hover:text-ocean"
//               >
//                 Blogs
//               </Link>

//               {/* ===== Contact (6th) ===== */}
//               <Link
//                 href="/contact"
//                 className="rounded-lg px-4 py-2 text-sm text-black transition-colors hover:text-ocean"
//               >
//                 Contact
//               </Link>

//             </nav>

//             {/* CTA + Mobile toggle */}
//             <div className="flex items-center gap-3">
//               <Link
//                 href="/contact"
//                 className="hidden bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-ocean-dark sm:inline-flex"
//               >
//                 Get Free Proposal
//               </Link>
//               <button
//                 onClick={() => setMobileOpen(!mobileOpen)}
//                 className="relative z-[60] text-black lg:hidden"
//                 aria-label="Toggle menu"
//               >
//                 {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileOpen && (
//           <div className="lg:hidden">
//             <div
//               className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-white px-4 pb-8 pt-4"
//               style={{ top: scrolled ? '64px' : '104px' }}
//             >
//               {[
//                 {
//                   label: 'Company',
//                   items: [
//                     { label: 'About Us', href: '/about-us' },
//                     { label: 'Careers', href: '/careers' },
//                   ],
//                 },
//                 {
//                   label: 'Our Work',
//                   items: [
//                     { label: 'Portfolio', href: '/our-work/portfolio' },
//                     { label: 'Case Studies', href: '/our-work/case-studies' },
//                     { label: 'Testimonials', href: '/our-work/testimonials' },
//                   ],
//                 },
//               ].map((section) => (
//                 <div key={section.label} className="mb-2">
//                   <button
//                     onClick={() =>
//                       setMobileSubmenu(
//                         mobileSubmenu === section.label ? null : section.label
//                       )
//                     }
//                     className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-black"
//                   >
//                     {section.label}
//                     <ChevronDown
//                       className={cn(
//                         'h-5 w-5 transition-transform',
//                         mobileSubmenu === section.label && 'rotate-180'
//                       )}
//                     />
//                   </button>
//                   {mobileSubmenu === section.label && (
//                     <div className="ml-4 border-l-2 border-sky pl-2">
//                       {section.items.map((item) => (
//                         <Link
//                           key={item.href}
//                           href={item.href}
//                           className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-electric"
//                         >
//                           {item.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}

//               {/* Industries - Mobile */}
//               <div className="mb-2">
//                 <button
//                   onClick={() =>
//                     setMobileSubmenu(
//                       mobileSubmenu === 'Industries' ? null : 'Industries'
//                     )
//                   }
//                   className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-black"
//                 >
//                   Industries
//                   <ChevronDown
//                     className={cn(
//                       'h-5 w-5 transition-transform',
//                       mobileSubmenu === 'Industries' && 'rotate-180'
//                     )}
//                   />
//                 </button>
//                 {mobileSubmenu === 'Industries' && (
//                   <div className="ml-4 grid grid-cols-2 gap-1 border-l-2 border-sky pl-2">
//                     {loading ? (
//                       <p className="col-span-2 px-4 py-2.5 text-sm text-muted-foreground">
//                         Loading...
//                       </p>
//                     ) : (
//                       industries.map((ind) => (
//                         <Link
//                           key={ind._id}
//                           href={`/industries/${ind.slug}`}
//                           className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-electric"
//                         >
//                           {ind.title}
//                         </Link>
//                       ))
//                     )}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 href="/blogs"
//                 className="block rounded-lg px-4 py-3 text-base font-semibold text-black"
//               >
//                 Blogs
//               </Link>
//               <Link
//                 href="/contact"
//                 className="block rounded-lg px-4 py-3 text-base font-semibold text-black"
//               >
//                 Contact
//               </Link>

//               {/* Services — Mobile */}
//               <div className="mb-2 mt-2 border-t border-border pt-2">
//                 <button
//                   onClick={() =>
//                     setMobileSubmenu(
//                       mobileSubmenu === 'Services' ? null : 'Services'
//                     )
//                   }
//                   className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-black"
//                 >
//                   Our Services
//                   <ChevronDown
//                     className={cn(
//                       'h-5 w-5 transition-transform',
//                       mobileSubmenu === 'Services' && 'rotate-180'
//                     )}
//                   />
//                 </button>
//                 {mobileSubmenu === 'Services' && (
//                   <div className="ml-4 border-l-2 border-sky pl-2">
//                     {menuCategories.map((category) => (
//                       <div key={category._id} className="mb-1">
//                         <button
//                           onClick={() =>
//                             setMobileServiceSubmenu(
//                               mobileServiceSubmenu === category._id ? null : category._id
//                             )
//                           }
//                           className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-semibold text-black"
//                         >
//                           {category.name}
//                           <ChevronDown
//                             className={cn(
//                               'h-4 w-4 transition-transform',
//                               mobileServiceSubmenu === category._id && 'rotate-180'
//                             )}
//                           />
//                         </button>
//                         {mobileServiceSubmenu === category._id && (
//                           <div className="ml-4 border-l-2 border-sky/60 pl-2">
//                             {category.services.length > 0 ? (
//                               category.services.map((service) => (
//                                 <Link
//                                   key={service._id}
//                                   href={`/services/${service.slug}`}
//                                   className="block rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-electric"
//                                 >
//                                   {service.title}
//                                 </Link>
//                               ))
//                             ) : (
//                               <p className="px-4 py-2 text-sm text-muted-foreground">
//                                 No services available
//                               </p>
//                             )}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 href="/contact"
//                 className="mt-4 flex items-center justify-center bg-brand px-6 py-3 text-base font-semibold text-white shadow-glow"
//               >
//                 Get Free Proposal
//               </Link>
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Building2,
  HeartPulse,
  ShoppingBag,
  Briefcase,
  Scale,
  Landmark,
  GraduationCap,
  Hotel,
  UtensilsCrossed,
  Sparkles,
  Search,
  TrendingUp,
  Code2,
  MousePointerClick,
  PenTool,
  Share2,
  LayoutGrid,
  Mail,
  Phone,
  MapPin,
  type LucideIcon,
} from 'lucide-react';
import { services } from '@/lib/services';
import { cn } from '@/lib/utils';
import { BASE_URL } from '@/utils/baseUrl';

const industryIcons: Record<string, LucideIcon> = {
  'real-estate': Building2,
  healthcare: HeartPulse,
  ecommerce: ShoppingBag,
  b2b: Briefcase,
  legal: Scale,
  finance: Landmark,
  education: GraduationCap,
  hospitality: Hotel,
  food: UtensilsCrossed,
  beauty: Sparkles,
  'digital-marketing-for-ecommerce': ShoppingBag,
  more: Briefcase,
};

const defaultIcon = Building2;

interface Industry {
  _id: string;
  title: string;
  slug: string;
  banner: {
    public_id: string;
    secure_url: string;
  };
  overview: string;
  content: string;
  benefits: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  cta: {
    heading: string;
    subheading: string;
    buttonText: string;
    buttonLink: string;
  };
  metaTitle: string;
  metaDescription: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface MenuCategory {
  _id: string;
  name: string;
  slug: string;
  services: Array<{
    _id: string;
    title: string;
    slug: string;
  }>;
}

const menuCategoryIcons: Record<string, LucideIcon> = {
  'seo': Search,
  'digital-marketing': TrendingUp,
  'social-media': Share2,
  'web-development': Code2,
  'content-marketing': PenTool,
  'ppc': MousePointerClick,
};

const getMenuCategoryIcon = (slug: string): LucideIcon => {
  return menuCategoryIcons[slug] || Briefcase;
};

function ServicesIllustration() {
  return (
    <svg viewBox="0 0 240 180" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="svcGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E10600" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#E10600" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="240" height="180" rx="20" fill="url(#svcGrad)" />
      <rect x="34" y="112" width="18" height="34" rx="4" fill="#E10600" opacity="0.35" />
      <rect x="62" y="94" width="18" height="52" rx="4" fill="#E10600" opacity="0.55" />
      <rect x="90" y="70" width="18" height="76" rx="4" fill="#E10600" opacity="0.8" />
      <rect x="118" y="46" width="18" height="100" rx="4" fill="#E10600" />
      <path
        d="M34 108 L62 88 L90 62 L118 40 L152 30"
        stroke="#0A0A0A"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="152" cy="30" r="6" fill="#0A0A0A" />
      <circle cx="182" cy="70" r="22" fill="#ffffff" stroke="#E10600" strokeWidth="4" />
      <line x1="197" y1="86" x2="212" y2="101" stroke="#E10600" strokeWidth="5" strokeLinecap="round" />
      <path d="M172 70a10 10 0 0 1 10 -10" stroke="#E10600" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
    </svg>
  );
}

function IndustriesIllustration() {
  return (
    <svg viewBox="0 0 220 170" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="indGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A0A0A" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#E10600" stopOpacity="0.14" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="220" height="170" rx="20" fill="url(#indGrad)" />
      <rect x="26" y="90" width="26" height="56" rx="5" fill="#E10600" opacity="0.9" />
      <rect x="58" y="66" width="26" height="80" rx="5" fill="#0A0A0A" opacity="0.85" />
      <rect x="90" y="104" width="26" height="42" rx="5" fill="#E10600" opacity="0.6" />
      <rect x="122" y="50" width="26" height="96" rx="5" fill="#E10600" />
      <rect x="154" y="80" width="26" height="66" rx="5" fill="#0A0A0A" opacity="0.7" />
      {[0, 1, 2].map((row) =>
        [26, 58, 90, 122, 154].map((x, i) => (
          <rect
            key={`${row}-${x}`}
            x={x + 8}
            y={70 + row * 16}
            width="10"
            height="8"
            rx="1.5"
            fill="#ffffff"
            opacity="0.55"
          />
        ))
      )}
      <circle cx="39" cy="60" r="4" fill="#0A0A0A" />
      <circle cx="167" cy="46" r="4" fill="#E10600" />
      <path d="M39 60 L167 46" stroke="#E10600" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
    </svg>
  );
}

function TopBar({ scrolled }: { scrolled: boolean }) {
  return (
    <div
      className={cn(
        'fixed inset-x-0 top-0 z-[60] hidden bg-[#E90102] text-white transition-all duration-300 md:block',
        scrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      )}
    >
      <div className="container mx-auto flex h-10 items-center px-4 text-xs">
        <div className="flex items-center gap-2 border-r border-white/15 pr-4">
          <Mail className="h-3.5 w-3.5 text-white" />
          <a href="mailto:info@digitalkeddy.in" className="transition-colors hover:text-white/70">
            info@digitalkeddy.in
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center gap-4 border-r border-white/15 px-4">
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-white" />
            <a href="tel:+919625350146" className="transition-colors hover:text-white/70">
              +91 96253 50146
            </a>
          </div>
          <span className="h-3 w-px bg-white/15" />
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-white" />
            <span>Malviya Nagar, Delhi, India</span>
          </div>
        </div>
        <Link
          href="/contact"
          className="flex items-center gap-1.5 pl-4 font-semibold text-white transition-colors hover:text-white/70"
        >
          Get Free Audit
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [loading, setLoading] = useState(true);
  const [mobileServiceSubmenu, setMobileServiceSubmenu] = useState<string | null>(null);

  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
  const [menuLoading, setMenuLoading] = useState(true);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const [activeServiceSlug, setActiveServiceSlug] = useState(services[0]?.slug ?? '');
  const activeService = services.find((s) => s.slug === activeServiceSlug) ?? services[0];

  const pathname = usePathname();

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const res = await fetch(`${BASE_URL}/industries?status=published&limit=20`);
        const data = await res.json();
        if (data.success && data.data) {
          setIndustries(data.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching industries:', error);
        setLoading(false);
      }
    };
    fetchIndustries();
  }, []);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(`${BASE_URL}/services/menu`);
        const data = await res.json();
        if (data.success && data.data) {
          setMenuCategories(data.data);
          if (data.data.length > 0) {
            setActiveCategoryId(data.data[0]._id);
          }
        }
        setMenuLoading(false);
      } catch (error) {
        console.error('Error fetching menu:', error);
        setMenuLoading(false);
      }
    };
    fetchMenu();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const getIndustryIcon = (slug: string): LucideIcon => {
    return industryIcons[slug] || defaultIcon;
  };

  const getShortDescription = (overview: string, maxLength: number = 60) => {
    if (!overview) return '';
    if (overview.length <= maxLength) return overview;
    return overview.substring(0, maxLength) + '...';
  };

  const activeCategory = menuCategories.find(c => c._id === activeCategoryId);
  const activeCategoryServices = activeCategory?.services || [];

  return (
    <>
      <TopBar scrolled={scrolled} />
      <header
        className={cn(
          'fixed inset-x-0 z-50 transition-all duration-300',
          scrolled
            ? 'top-0 bg-white py-3 shadow-[0_4px_24px_rgba(10,10,10,0.1)]'
            : 
            'top-0 bg-white py-4 border-b border-border lg:top-10'  
            // 'top-10 bg-white py-4 border-b border-border'
        )}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/images/logo.webp" height={160} width={160} alt='logo' />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 lg:flex">

              {/* ===== Company (1st) ===== */}
              <div
                className="relative"
                onMouseEnter={() => setOpenMenu('company')}
              >
                <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm text-black transition-colors hover:text-ocean">
                  Company
                  <ChevronDown className="h-4 w-4" />
                </button>
                {openMenu === 'company' && (
                  <div className="absolute left-0 top-full pt-3">
                    <div className="w-56 overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-premium-lg">
                      <Link
                        href="/about-us"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-black transition-colors hover:bg-muted"
                      >
                        <Building2 className="h-4 w-4 text-[#E10600]" />
                        About Us
                      </Link>
                      <Link
                        href="/careers"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-black transition-colors hover:bg-muted"
                      >
                        <Briefcase className="h-4 w-4 text-[#E10600]" />
                        Careers
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* ===== OUR SERVICES (MOVED HERE - 2nd position) ===== */}
              <div
                className="relative"
                onMouseEnter={() => setOpenMenu('services')}
              >
                <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm text-black transition-colors hover:text-ocean">
                  Our Services
                  <ChevronDown className="h-4 w-4" />
                </button>
                {openMenu === 'services' && !menuLoading && menuCategories.length > 0 && (
                  <div className="absolute left-1/2 top-full pt-3 -translate-x-1/2">
                    <div className="flex w-[920px] overflow-hidden rounded-2xl border border-border bg-white shadow-premium-lg">
                      {/* Left sidebar - Categories */}
                      <div className="w-[230px] flex-shrink-0 border-r border-border bg-muted/60 p-4">
                        <h4 className="mb-3 px-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Categories
                        </h4>
                        <div className="space-y-1">
                          {menuCategories.map((category) => {
                            const Icon = getMenuCategoryIcon(category.slug);
                            const isActive = category._id === activeCategoryId;
                            return (
                              <button
                                key={category._id}
                                onMouseEnter={() => setActiveCategoryId(category._id)}
                                className={cn(
                                  'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors',
                                  isActive
                                    ? 'bg-brand text-white shadow-sm'
                                    : 'text-muted-foreground hover:bg-white hover:text-black'
                                )}
                              >
                                <Icon className={cn('h-4 w-4', isActive ? 'text-white' : 'text-[#E10600]')} />
                                {category.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Middle content */}
                      <div className="flex-1 p-5">
                        <div className="mb-3 flex items-center justify-between">
                          <h4 className="text-sm font-bold text-black">
                            {activeCategory?.name || 'Services'}
                          </h4>
                        </div>

                        {activeCategoryServices.length > 0 ? (
                          <div className="grid grid-cols-2 gap-1.5">
                            {activeCategoryServices.map((service) => (
                              <Link
                                key={service._id}
                                href={`/services/${service.slug}`}
                                className="group flex items-center gap-2 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted/70"
                              >
                                <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-[#E10600] opacity-0 transition-opacity group-hover:opacity-100" />
                                <p className="text-sm font-medium text-black group-hover:text-electric">
                                  {service.title}
                                </p>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground py-4">
                            No services available in this category.
                          </p>
                        )}
                      </div>

                      {/* Right featured panel */}
                      <div className="flex w-[240px] flex-shrink-0 flex-col justify-between border-l border-border bg-muted/60 p-5">
                        <div>
                          <ServicesIllustration />
                          <h4 className="mt-4 text-sm font-bold leading-snug text-black">
                            Not sure which service fits?
                          </h4>
                          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                            Get a free SEO &amp; growth audit and we&apos;ll map the right services to your goals.
                          </p>
                        </div>
                        <Link
                          href="/contact"
                          className="mt-4 flex items-center justify-center gap-1.5 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ocean-dark"
                        >
                          Get Free Audit
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ===== Our Work (3rd) ===== */}
              <div
                className="relative"
                onMouseEnter={() => setOpenMenu('work')}
              >
                <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm text-black transition-colors hover:text-ocean">
                  Our Work
                  <ChevronDown className="h-4 w-4" />
                </button>
                {openMenu === 'work' && (
                  <div className="absolute left-0 top-full pt-3">
                    <div className="w-56 overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-premium-lg">
                      <Link
                        href="/our-work/portfolio"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-black transition-colors hover:bg-muted"
                      >
                        <Sparkles className="h-4 w-4 text-[#E10600]" />
                        Portfolio
                      </Link>
                      <Link
                        href="/our-work/case-studies"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-black transition-colors hover:bg-muted"
                      >
                        <TrendingUp className="h-4 w-4 text-[#E10600]" />
                        Case Studies
                      </Link>
                      <Link
                        href="/our-work/testimonials"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-black transition-colors hover:bg-muted"
                      >
                        <HeartPulse className="h-4 w-4 text-[#E10600]" />
                        Testimonials
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* ===== Industries (4th) ===== */}
              <div
                className="relative"
                onMouseEnter={() => setOpenMenu('industries')}
              >
                <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm text-black transition-colors hover:text-ocean">
                  Industries
                  <ChevronDown className="h-4 w-4" />
                </button>
                {openMenu === 'industries' && (
                  <div className="absolute left-1/2 top-full pt-3 -translate-x-1/2">
                    <div className="flex w-[760px] overflow-hidden rounded-2xl border border-border bg-white shadow-premium-lg">
                      <div className="flex w-[220px] flex-shrink-0 flex-col justify-between border-r border-border bg-muted/60 p-6">
                        <div>
                          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#E10600] shadow-sm">
                            <LayoutGrid className="h-3 w-3" />
                            Industries
                          </span>
                          <h3 className="text-lg font-bold leading-snug text-black">
                            Solutions built around your industry
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                            Playbooks and strategy tailored to how your customers actually buy.
                          </p>
                        </div>
                        <div className="mt-6">
                          <IndustriesIllustration />
                        </div>
                      </div>

                      <div className="flex-1 p-5">
                        <div className="mb-3 flex items-center justify-between">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Choose your industry
                          </h4>
                        </div>
                        {loading ? (
                          <div className="grid grid-cols-2 gap-2">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                              <div key={i} className="animate-pulse rounded-xl bg-muted p-3">
                                <div className="flex items-start gap-3">
                                  <div className="h-10 w-10 rounded-lg bg-gray-200"></div>
                                  <div className="flex-1">
                                    <div className="h-4 w-20 rounded bg-gray-200"></div>
                                    <div className="mt-1 h-3 w-32 rounded bg-gray-200"></div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-1.5">
                            {industries.map((ind) => {
                              const Icon = getIndustryIcon(ind.slug);
                              return (
                                <Link
                                  key={ind._id}
                                  href={`/industries/${ind.slug}`}
                                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
                                >
                                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted text-[#E10600] transition-colors group-hover:bg-[#E10600] group-hover:text-white">
                                    <Icon className="h-5 w-5" />
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-sm font-semibold text-black">
                                      {ind.title}
                                    </p>
                                    <p className="mt-0.5 truncate text-xs text-muted-foreground">
                                      {getShortDescription(ind.overview, 42)}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ===== Blogs (5th) ===== */}
              <Link
                href="/blogs"
                className="rounded-lg px-4 py-2 text-sm text-black transition-colors hover:text-ocean"
              >
                Blogs
              </Link>

              {/* ===== Contact (6th) ===== */}
              <Link
                href="/contact"
                className="rounded-lg px-4 py-2 text-sm text-black transition-colors hover:text-ocean"
              >
                Contact
              </Link>

            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-ocean-dark sm:inline-flex"
              >
                Get Free Proposal
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative z-[60] text-black lg:hidden"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden">
            <div
              className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-white px-4 pb-8 pt-4"
              style={{ top: scrolled ? '64px' : '104px' }}
            >
              {[
                {
                  label: 'Company',
                  items: [
                    { label: 'About Us', href: '/about-us' },
                    { label: 'Careers', href: '/careers' },
                  ],
                },
                {
                  label: 'Our Work',
                  items: [
                    { label: 'Portfolio', href: '/our-work/portfolio' },
                    { label: 'Case Studies', href: '/our-work/case-studies' },
                    { label: 'Testimonials', href: '/our-work/testimonials' },
                  ],
                },
              ].map((section) => (
                <div key={section.label} className="mb-2">
                  <button
                    onClick={() =>
                      setMobileSubmenu(
                        mobileSubmenu === section.label ? null : section.label
                      )
                    }
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-black"
                  >
                    {section.label}
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 transition-transform',
                        mobileSubmenu === section.label && 'rotate-180'
                      )}
                    />
                  </button>
                  {mobileSubmenu === section.label && (
                    <div className="ml-4 border-l-2 border-[#E10600]/30 pl-2">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-electric"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Industries - Mobile */}
              <div className="mb-2">
                <button
                  onClick={() =>
                    setMobileSubmenu(
                      mobileSubmenu === 'Industries' ? null : 'Industries'
                    )
                  }
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-black"
                >
                  Industries
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 transition-transform',
                      mobileSubmenu === 'Industries' && 'rotate-180'
                    )}
                  />
                </button>
                {mobileSubmenu === 'Industries' && (
                  <div className="ml-4 grid grid-cols-2 gap-1 border-l-2 border-[#E10600]/30 pl-2">
                    {loading ? (
                      <p className="col-span-2 px-4 py-2.5 text-sm text-muted-foreground">
                        Loading...
                      </p>
                    ) : (
                      industries.map((ind) => (
                        <Link
                          key={ind._id}
                          href={`/industries/${ind.slug}`}
                          className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-electric"
                        >
                          {ind.title}
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>

              <Link
                href="/blogs"
                className="block rounded-lg px-4 py-3 text-base font-semibold text-black"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="block rounded-lg px-4 py-3 text-base font-semibold text-black"
              >
                Contact
              </Link>

              {/* Services — Mobile */}
              <div className="mb-2 mt-2 border-t border-border pt-2">
                <button
                  onClick={() =>
                    setMobileSubmenu(
                      mobileSubmenu === 'Services' ? null : 'Services'
                    )
                  }
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-black"
                >
                  Our Services
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 transition-transform',
                      mobileSubmenu === 'Services' && 'rotate-180'
                    )}
                  />
                </button>
                {mobileSubmenu === 'Services' && (
                  <div className="ml-4 border-l-2 border-[#E10600]/30 pl-2">
                    {menuCategories.map((category) => (
                      <div key={category._id} className="mb-1">
                        <button
                          onClick={() =>
                            setMobileServiceSubmenu(
                              mobileServiceSubmenu === category._id ? null : category._id
                            )
                          }
                          className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-semibold text-black"
                        >
                          {category.name}
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform',
                              mobileServiceSubmenu === category._id && 'rotate-180'
                            )}
                          />
                        </button>
                        {mobileServiceSubmenu === category._id && (
                          <div className="ml-4 border-l-2 border-[#E10600]/20 pl-2">
                            {category.services.length > 0 ? (
                              category.services.map((service) => (
                                <Link
                                  key={service._id}
                                  href={`/services/${service.slug}`}
                                  className="block rounded-lg px-4 py-2 text-sm text-muted-foreground hover:text-electric"
                                >
                                  {service.title}
                                </Link>
                              ))
                            ) : (
                              <p className="px-4 py-2 text-sm text-muted-foreground">
                                No services available
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="mt-4 flex items-center justify-center bg-brand px-6 py-3 text-base font-semibold text-white shadow-glow"
              >
                Get Free Proposal
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}