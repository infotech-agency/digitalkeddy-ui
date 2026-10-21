

// 'use client';

// import { useState, useEffect, type ReactNode } from 'react';
// import SectionHeading from '@/components/common/SectionHeading';
// import FAQAccordion from '@/components/common/FAQAccordion';
// import { BASE_URL } from '@/utils/baseUrl';

// interface FaqCategory {
//   _id: string;
//   name: string;
//   slug: string;
// }

// interface FAQ {
//   _id: string;
//   question: string;
//   answer: string;
//   sortOrder: number;
// }

// interface GroupedFaq {
//   category: FaqCategory;
//   faqs: FAQ[];
// }

// function FAQSectionShell({ children }: { children: ReactNode }) {
//   return (
//     <section className="relative overflow-hidden bg-sky py-20 lg:py-28">
//       <div className="pointer-events-none absolute inset-0 z-0">
//         <img
//           src="/images/faq.svg"
//           alt=""
//           className="h-full w-full object-cover opacity-100"
//         />
//         <div className="absolute inset-0 bg-sky/80" />
//       </div>
//       <div className="container relative z-10 mx-auto px-4">{children}</div>
//     </section>
//   );
// }

// export default function HomeFAQ() {
//   const [groups, setGroups] = useState<GroupedFaq[]>([]);
//   const [activeCategoryId, setActiveCategoryId] = useState<string>('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchFaqs = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`${BASE_URL}/faqs/grouped`);
//         const data = await response.json();

//         if (data.success && data.data) {
//           // Sirf wahi categories rakho jinke andar kam se kam 1 FAQ hai
//           const nonEmpty = data.data.filter((g: GroupedFaq) => g.faqs.length > 0);
//           setGroups(nonEmpty);
//           if (nonEmpty.length > 0) setActiveCategoryId(nonEmpty[0].category._id);
//         } else {
//           setError('Failed to fetch FAQs');
//         }
//       } catch (err) {
//         console.error('Error fetching FAQs:', err);
//         setError('Failed to load FAQs');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFaqs();
//   }, []);

//   const activeGroup = groups.find((g) => g.category._id === activeCategoryId);

//   const transformFaqs = (apiFaqs: FAQ[]) =>
//     apiFaqs
//       .slice()
//       .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
//       .map((faq) => ({ question: faq.question, answer: faq.answer }));

//   if (loading) {
//     return (
//       <FAQSectionShell>
//         <SectionHeading
//           eyebrow="FAQ"
//           title="Frequently Asked Questions"
//           description="Everything you need to know about working with DigitalKeddy. Still have questions? Reach out — we are happy to help."
//         />
//         <div className="mt-14 space-y-4">
//           {[1, 2, 3, 4, 5].map((i) => (
//             <div
//               key={i}
//               className="animate-pulse rounded-2xl border border-border bg-white p-6 shadow-premium"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="h-6 w-3/4 rounded bg-gray-200"></div>
//                 <div className="h-5 w-5 rounded bg-gray-200"></div>
//               </div>
//               <div className="mt-3 h-4 w-full rounded bg-gray-200"></div>
//               <div className="mt-2 h-4 w-2/3 rounded bg-gray-200"></div>
//             </div>
//           ))}
//         </div>
//       </FAQSectionShell>
//     );
//   }

//   if (error || groups.length === 0) {
//     return (
//       <FAQSectionShell>
//         <SectionHeading
//           eyebrow="FAQ"
//           title="Frequently Asked Questions"
//           description="Everything you need to know about working with DigitalKeddy. Still have questions? Reach out — we are happy to help."
//         />
//         <div className="mt-14 text-center">
//           <p className="text-muted-foreground">
//             {error || 'No FAQs available at the moment.'}
//           </p>
//           <div className="mt-6">
            
//             <a  href="/contact"
//               className="inline-flex items-center gap-2 bg-ocean px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-ocean-dark"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </FAQSectionShell>
//     );
//   }

//   return (
//     <FAQSectionShell>
//       <SectionHeading
//         eyebrow="FAQ"
//         title="Frequently Asked Questions"
//         description="Everything you need to know about working with DigitalKeddy. Still have questions? Reach out — we are happy to help."
//       />

//       <div className="mt-14 flex flex-col gap-8 lg:flex-row">
//         {/* Left side — vertical category tabs */}
//         <div className="lg:w-64 lg:flex-shrink-0">
//           <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
//             {groups.map((g) => {
//               const isActive = g.category._id === activeCategoryId;
//               return (
//                 <button
//                   key={g.category._id}
//                   onClick={() => setActiveCategoryId(g.category._id)}
//                   className={`whitespace-nowrap rounded-full px-5 py-3 text-left text-sm font-semibold transition-all lg:whitespace-normal lg:rounded-xl ${
//                     isActive
//                       ? 'bg-ocean text-white shadow-premium'
//                       : 'bg-white text-gray-600 hover:bg-ocean/10'
//                   }`}
//                 >
//                   {g.category.name}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Right side — active category's FAQs */}
//         <div className="flex-1">
//           {activeGroup && <FAQAccordion items={transformFaqs(activeGroup.faqs)} />}
//         </div>
//       </div>

//       <div className="mt-8 text-center">
//         <p className="text-sm text-muted-foreground">
//           Can&apos;t find what you&apos;re looking for?{' '}
//           <a href="/contact" className="font-semibold text-electric hover:underline">
//             Contact our team
//           </a>
//         </p>
//       </div>
//     </FAQSectionShell>
//   );
// }

'use client';

import { useState, useEffect, type ReactNode, type CSSProperties } from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import FAQAccordion from '@/components/common/FAQAccordion';
import { BASE_URL } from '@/utils/baseUrl';

interface FaqCategory {
  _id: string;
  name: string;
  slug: string;
}

interface FAQ {
  _id: string;
  question: string;
  answer: string;
  sortOrder: number;
}

interface GroupedFaq {
  category: FaqCategory;
  faqs: FAQ[];
}

type Particle = {
  type: 'dot' | 'ring' | 'plus' | 'diamond';
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
  anim: 'float' | 'drift' | 'pulse';
};

// Fixed positions (Math.random nahi, warna hydration error aata hai)
const PARTICLES: Particle[] = [
  { type: 'dot',     top: '8%',  left: '6%',  size: 10, delay: 0,   duration: 7,  anim: 'float' },
  { type: 'ring',    top: '15%', left: '88%', size: 34, delay: 1,   duration: 9,  anim: 'drift' },
  { type: 'plus',    top: '28%', left: '14%', size: 18, delay: 2,   duration: 8,  anim: 'pulse' },
  { type: 'diamond', top: '12%', left: '45%', size: 14, delay: 0.5, duration: 10, anim: 'float' },
  { type: 'dot',     top: '40%', left: '94%', size: 8,  delay: 1.5, duration: 6,  anim: 'drift' },
  { type: 'ring',    top: '55%', left: '4%',  size: 44, delay: 3,   duration: 11, anim: 'float' },
  { type: 'plus',    top: '65%', left: '90%', size: 22, delay: 0.8, duration: 7,  anim: 'pulse' },
  { type: 'dot',     top: '78%', left: '20%', size: 12, delay: 2.2, duration: 8,  anim: 'drift' },
  { type: 'diamond', top: '85%', left: '70%', size: 16, delay: 1.2, duration: 9,  anim: 'float' },
  { type: 'ring',    top: '90%', left: '40%', size: 26, delay: 2.8, duration: 10, anim: 'pulse' },
  { type: 'dot',     top: '5%',  left: '72%', size: 6,  delay: 3.5, duration: 6,  anim: 'float' },
  { type: 'plus',    top: '48%', left: '50%', size: 14, delay: 1.8, duration: 9,  anim: 'drift' },
  { type: 'dot',     top: '33%', left: '78%', size: 14, delay: 0.3, duration: 8,  anim: 'pulse' },
  { type: 'diamond', top: '70%', left: '8%',  size: 12, delay: 2.5, duration: 7,  anim: 'drift' },
];

function ParticleShape({ p }: { p: Particle }) {
  const base: CSSProperties = {
    position: 'absolute',
    top: p.top,
    left: p.left,
    width: p.size,
    height: p.size,
    animation: `faq-${p.anim} ${p.duration}s ease-in-out ${p.delay}s infinite`,
  };

  if (p.type === 'dot') {
    return <span style={{ ...base, borderRadius: '9999px', background: 'rgba(220,38,38,0.35)' }} />;
  }

  if (p.type === 'ring') {
    return (
      <span style={{ ...base, borderRadius: '9999px', border: '2px solid rgba(220,38,38,0.30)' }} />
    );
  }

  if (p.type === 'diamond') {
    // clip-path use kiya taaki rotate ka animation se clash na ho
    return (
      <span
        style={{
          ...base,
          clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
          background: 'linear-gradient(135deg, rgba(244,63,94,0.45), rgba(249,115,22,0.35))',
        }}
      />
    );
  }

  // plus
  return (
    <span style={base}>
      <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-red-500/40" />
      <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-red-500/40" />
    </span>
  );
}

function FAQSectionShell({ children }: { children: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-red-50 to-orange-50 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-red-400/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-rose-400/10 blur-3xl" />

        {PARTICLES.map((p, i) => (
          <ParticleShape key={i} p={p} />
        ))}
      </div>

      <style>{`
        @keyframes faq-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-22px); }
        }
        @keyframes faq-drift {
          0%, 100% { transform: translate(0, 0); }
          50%      { transform: translate(18px, -14px); }
        }
        @keyframes faq-pulse {
          0%, 100% { transform: scale(1);    opacity: 0.6; }
          50%      { transform: scale(1.35); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="faq-"] { animation: none !important; }
        }
      `}</style>

      <div className="container relative z-10 mx-auto px-4">{children}</div>
    </section>
  );
}

export default function HomeFAQ() {
  const [groups, setGroups] = useState<GroupedFaq[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/faqs/grouped`);
        const data = await response.json();

        if (data.success && data.data) {
          // Sirf wahi categories rakho jinke andar kam se kam 1 FAQ hai
          const nonEmpty = data.data.filter((g: GroupedFaq) => g.faqs.length > 0);
          setGroups(nonEmpty);
          if (nonEmpty.length > 0) setActiveCategoryId(nonEmpty[0].category._id);
        } else {
          setError('Failed to fetch FAQs');
        }
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        setError('Failed to load FAQs');
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const activeGroup = groups.find((g) => g.category._id === activeCategoryId);

  const transformFaqs = (apiFaqs: FAQ[]) =>
    apiFaqs
      .slice()
      .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
      .map((faq) => ({ question: faq.question, answer: faq.answer }));

  if (loading) {
    return (
      <FAQSectionShell>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with DigitalKeddy. Still have questions? Reach out — we are happy to help."
        />
        <div className="mt-14 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="animate-pulse rounded-2xl border border-border bg-white p-6 shadow-premium"
            >
              <div className="flex items-center justify-between">
                <div className="h-6 w-3/4 rounded bg-gray-200"></div>
                <div className="h-5 w-5 rounded bg-gray-200"></div>
              </div>
              <div className="mt-3 h-4 w-full rounded bg-gray-200"></div>
              <div className="mt-2 h-4 w-2/3 rounded bg-gray-200"></div>
            </div>
          ))}
        </div>
      </FAQSectionShell>
    );
  }

  if (error || groups.length === 0) {
    return (
      <FAQSectionShell>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with DigitalKeddy. Still have questions? Reach out — we are happy to help."
        />
        <div className="mt-14 text-center">
          <p className="text-muted-foreground">
            {error || 'No FAQs available at the moment.'}
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-ocean px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-ocean-dark"
            >
              Contact Us
            </a>
          </div>
        </div>
      </FAQSectionShell>
    );
  }

  return (
    <FAQSectionShell>
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about working with DigitalKeddy. Still have questions? Reach out — we are happy to help."
      />

      <div className="mt-14 flex flex-col gap-8 lg:flex-row">
        {/* Left side — vertical category tabs */}
        <div className="lg:w-64 lg:flex-shrink-0">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {groups.map((g) => {
              const isActive = g.category._id === activeCategoryId;
              return (
                <button
                  key={g.category._id}
                  onClick={() => setActiveCategoryId(g.category._id)}
                  className={`whitespace-nowrap rounded-full px-5 py-3 text-left text-sm font-semibold transition-all lg:whitespace-normal lg:rounded-xl ${
                    isActive
                      ? 'bg-ocean text-white shadow-premium'
                      : 'bg-white text-gray-600 hover:bg-ocean/10'
                  }`}
                >
                  {g.category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right side — active category's FAQs */}
        <div className="flex-1">
          {activeGroup && <FAQAccordion items={transformFaqs(activeGroup.faqs)} />}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a href="/contact" className="font-semibold text-electric hover:underline">
            Contact our team
          </a>
        </p>
      </div>
    </FAQSectionShell>
  );
}