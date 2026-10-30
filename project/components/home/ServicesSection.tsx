// 'use client';

// import { useEffect, useState } from 'react';
// import {
//   Code2,
//   Search,
//   Target,
//   Megaphone,
//   Share2,
//   PenTool,
//   ArrowRight,
//   Check,
//   Phone,
//   MessageCircle,
//   X,
// } from 'lucide-react';
// import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';

// /** Dark red -> crimson -> orange-red (sab sections me yahi gradient use ho raha hai) */
// const GRADIENT =
//   'linear-gradient(135deg, #b91c1c 0%, #e11d48 50%, #f97316 100%)';

// /** Contact details */
// const PHONE_DISPLAY = '+91 96253 50146';
// const PHONE_TEL = 'tel:+919625350146';
// const WHATSAPP_NUMBER = '919625350146';

// const services = [
//   {
//     title: 'Web Development',
//     description:
//       'Fast, responsive and conversion-focused websites built to turn visitors into customers.',
//     icon: Code2,
//     points: ['Custom website design', 'E-commerce & CMS', 'Speed & performance'],
//   },
//   {
//     title: 'SEO',
//     description:
//       'Rank higher on Google and bring in steady organic traffic that keeps growing every month.',
//     icon: Search,
//     points: ['Keyword & competitor research', 'On-page & technical SEO', 'Link building'],
//   },
//   {
//     title: 'Paid Marketing',
//     description:
//       'High-ROI ad campaigns across Google and social platforms, tracked down to every rupee.',
//     icon: Target,
//     points: ['Google & Meta Ads', 'Retargeting funnels', 'Budget optimization'],
//   },
//   {
//     title: 'Digital Marketing',
//     description:
//       'Complete data-driven digital strategy that connects every channel to measurable growth.',
//     icon: Megaphone,
//     points: ['Multi-channel strategy', 'Email & lead nurturing', 'Analytics & reporting'],
//   },
//   {
//     title: 'Social Media Marketing',
//     description:
//       'Grow your audience, build community and keep your brand active where your customers are.',
//     icon: Share2,
//     points: ['Content calendar & posting', 'Community management', 'Influencer outreach'],
//   },
//   {
//     title: 'Content Marketing',
//     description:
//       'Stories, blogs and creatives that build trust, educate buyers and drive them to act.',
//     icon: PenTool,
//     points: ['Blogs & articles', 'Video & creative assets', 'Brand storytelling'],
//   },
// ];

// export default function ServicesSection() {
//   const [active, setActive] = useState<(typeof services)[number] | null>(null);

//   // Esc se close + background scroll lock
//   useEffect(() => {
//     if (!active) return;

//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') setActive(null);
//     };
//     document.addEventListener('keydown', onKey);

//     const prevOverflow = document.body.style.overflow;
//     document.body.style.overflow = 'hidden';

//     return () => {
//       document.removeEventListener('keydown', onKey);
//       document.body.style.overflow = prevOverflow;
//     };
//   }, [active]);

//   return (
//     <section className="relative overflow-hidden bg-white py-20 lg:py-28">
//       <div className="container relative z-10 mx-auto px-4">
//         {/* Heading */}
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <p
//             style={{ backgroundImage: GRADIENT }}
//             className="mb-3 bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent"
//           >
//             Our Services
//           </p>
//           <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
//             Everything You Need to Grow Online
//           </h2>
//           <p className="mt-4 text-lg leading-relaxed text-slate-600">
//             From your website to your ads, we handle every part of your digital
//             growth under one roof.
//           </p>
//         </Reveal>

//         {/* Cards */}
//         <Stagger
//           className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
//           stagger={0.08}
//         >
//           {services.map((service) => {
//             const Icon = service.icon;

//             return (
//               <StaggerItem key={service.title} className="h-full">
//                 <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_10px_30px_-12px_rgba(15,28,76,0.15)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_28px_50px_-18px_rgba(15,28,76,0.45)]">
//                   {/* Top accent bar — gradient, slides in on hover */}
//                   <span
//                     style={{ backgroundImage: GRADIENT }}
//                     className="absolute left-0 top-0 h-1.5 w-0 transition-all duration-500 group-hover:w-full"
//                   />

//                   {/* Soft gradient glow in corner on hover */}
//                   <span
//                     style={{ backgroundImage: GRADIENT }}
//                     className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
//                   />

//                   <div className="relative z-10 flex flex-1 flex-col">
//                     {/* Icon — turns gradient on hover */}
//                     <div className="relative mb-6 h-16 w-16">
//                       <div className="absolute inset-0 rounded-2xl bg-slate-100 transition-opacity duration-500 group-hover:opacity-0" />
//                       <div
//                         style={{ backgroundImage: GRADIENT }}
//                         className="absolute inset-0 rounded-2xl opacity-0 shadow-lg shadow-[#e11d48]/30 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
//                       />
//                       <div className="relative flex h-full w-full items-center justify-center">
//                         <Icon
//                           strokeWidth={1.75}
//                           className="h-8 w-8 text-[#e11d48] transition-colors duration-500 group-hover:text-white"
//                         />
//                       </div>
//                     </div>

//                     <h3 className="text-xl font-bold text-slate-900">
//                       {service.title}
//                     </h3>
//                     <p className="mt-3 text-sm leading-relaxed text-slate-900">
//                       {service.description}
//                     </p>

//                     {/* Points */}
//                     <ul className="mt-5 space-y-2.5">
//                       {service.points.map((point) => (
//                         <li
//                           key={point}
//                           className="flex items-center gap-2.5 text-sm text-slate-700"
//                         >
//                           <span
//                             style={{ backgroundImage: GRADIENT }}
//                             className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
//                           >
//                             <Check className="h-3 w-3 text-white" strokeWidth={3} />
//                           </span>
//                           {point}
//                         </li>
//                       ))}
//                     </ul>

//                     {/* Gradient button — opens popup */}
//                     <div className="mt-auto border-t border-slate-100 pt-8">
//                       <button
//                         type="button"
//                         onClick={() => setActive(service)}
//                         style={{ backgroundImage: GRADIENT }}
//                         className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#e11d48]/25 [text-shadow:0_1px_2px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#ef4444]/40 hover:brightness-105 active:translate-y-0 sm:w-fit"
//                       >
//                         Learn More
//                         <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </StaggerItem>
//             );
//           })}
//         </Stagger>
//       </div>

//       {/* Popup */}
//       {active && (
//         <div
//           className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
//           onClick={() => setActive(null)}
//           role="dialog"
//           aria-modal="true"
//           aria-label={active.title}
//         >
//           <div
//             className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white p-8 shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <span
//               style={{ backgroundImage: GRADIENT }}
//               className="absolute left-0 top-0 h-1.5 w-full"
//             />

//             <button
//               type="button"
//               onClick={() => setActive(null)}
//               aria-label="Close"
//               className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
//             >
//               <X className="h-5 w-5" />
//             </button>

//             <div
//               style={{ backgroundImage: GRADIENT }}
//               className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg shadow-[#e11d48]/30"
//             >
//               <active.icon className="h-7 w-7 text-white" strokeWidth={1.75} />
//             </div>

//             <h3 className="text-2xl font-bold text-slate-900">{active.title}</h3>
//             <p className="mt-2 text-sm leading-relaxed text-slate-600">
//               {active.description}
//             </p>
//             <p className="mt-3 text-sm text-slate-600">
//               Is service ke baare me baat karne ke liye humse abhi connect karein.
//             </p>

//             <p className="mt-5 text-center text-lg font-semibold text-slate-900">
//               {PHONE_DISPLAY}
//             </p>

//             <div className="mt-5 flex flex-col gap-3 sm:flex-row">
//               <a
//                 href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//                   `Hi, I'm interested in ${active.title}.`
//                 )}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:brightness-105"
//               >
//                 <MessageCircle className="h-4 w-4" />
//                 WhatsApp
//               </a>
//               <a
//                 href={PHONE_TEL}
//                 style={{ backgroundImage: GRADIENT }}
//                 className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:brightness-105"
//               >
//                 <Phone className="h-4 w-4" />
//                 Call Now
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

'use client';

import { useId, useRef, useState } from 'react';
import {
  Code2,
  Search,
  Target,
  Megaphone,
  Share2,
  PenTool,
  ArrowUpRight,
  Check,
  Phone,
  MessageCircle,
  X,
} from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description:
      'Websites that make your business easy to understand and your next step easy to take.',
    icon: Code2,
    points: [
      'Custom website design',
      'E-commerce & CMS',
      'Speed & mobile usability',
    ],
  },
  {
    title: 'SEO',
    description:
      'Help potential customers find your business when they search for what you offer.',
    icon: Search,
    points: [
      'Keyword & competitor research',
      'On-page & technical SEO',
      'Local search visibility',
    ],
  },
  {
    title: 'Paid Marketing',
    description:
      'Google and Meta campaigns planned around your audience, budget and conversion goals.',
    icon: Target,
    points: [
      'Google & Meta Ads',
      'Retargeting campaigns',
      'Conversion tracking',
    ],
  },
  {
    title: 'Digital Marketing',
    description:
      'A joined-up plan for your channels, with clear priorities and reporting.',
    icon: Megaphone,
    points: [
      'Channel strategy',
      'Email & lead nurturing',
      'Analytics & reporting',
    ],
  },
  {
    title: 'Social Media Marketing',
    description:
      'Give people a reason to follow your business and a clear picture of what you do.',
    icon: Share2,
    points: [
      'Content calendar & posting',
      'Community management',
      'Influencer outreach',
    ],
  },
  {
    title: 'Content Marketing',
    description:
      'Content that answers customer questions and helps them decide what to do next.',
    icon: PenTool,
    points: [
      'Blogs & website copy',
      'Video & creative assets',
      'Brand messaging',
    ],
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<(typeof services)[number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();

  function openService(
    service: (typeof services)[number],
    trigger: HTMLButtonElement,
  ) {
    triggerRef.current = trigger;
    setActive(service);
    dialogRef.current?.showModal();
  }

  function closeService() {
    dialogRef.current?.close();
  }

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-28 bg-white px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E10600]">
            Our Services
          </p>

          <h2
            id="services-heading"
            className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#111] sm:text-4xl"
          >
            What does your business need next?
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            A better website, more relevant enquiries or a clearer content plan.
            Start with the service that fits your priority.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-red-200 hover:bg-red-50/30 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#E10600]">
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6"
                      strokeWidth={1.75}
                    />
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-xs font-medium text-slate-400"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#111]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mb-7 mt-5 space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-1 h-4 w-4 shrink-0 text-[#E10600]"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-slate-100 pt-5">
                  <button
                    type="button"
                    onClick={(event) =>
                      openService(service, event.currentTarget)
                    }
                    aria-haspopup="dialog"
                    aria-label={`Discuss ${service.title}`}
                    className="inline-flex items-center gap-2 rounded-lg py-2 text-sm font-semibold text-[#111] transition-colors hover:text-[#E10600] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E10600]"
                  >
                    Discuss This Service
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeService();
        }}
        onClose={() => {
          setActive(null);
          triggerRef.current?.focus();
        }}
        className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-3xl border border-slate-200 bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-black/60"
      >
        {active && (
          <div className="relative p-7 sm:p-9">
            <button
              type="button"
              autoFocus
              onClick={closeService}
              aria-label="Close service details"
              className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E10600]"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[#E10600]">
              <active.icon aria-hidden="true" className="h-7 w-7" />
            </div>

            <h3 id={titleId} className="mt-5 text-2xl font-semibold">
              {active.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {active.description}
            </p>

            <ul className="mt-5 space-y-3">
              {active.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm">
                  <Check
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-[#E10600]"
                  />
                  {point}
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t border-slate-100 pt-5 text-sm leading-6 text-slate-600">
              Share your requirements with our team to discuss scope and pricing.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href={`https://wa.me/919625350146?text=${encodeURIComponent(
                  `Hi, I'd like to discuss ${active.title} for my business.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#111] px-5 py-3.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                WhatsApp Us
              </a>

              <a
                href="tel:+919625350146"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold hover:bg-slate-50"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                Call Our Team
              </a>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}