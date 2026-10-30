// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// /**
//  * FIX: Tailwind doesn't see dynamically constructed classes (like `${tile.pos}`).
//  * By adding this comment block, Tailwind's JIT compiler will "see" these exact strings
//  * and generate the necessary CSS for them. DO NOT DELETE THIS COMMENT.
//  * 
//  * left-[6%] top-[10%] lg:left-[9%] lg:top-[14%]
//  * right-[5%] top-[10%] lg:right-[8%] lg:top-[14%]
//  * left-[8%] bottom-[8%] lg:left-[14%] lg:bottom-[14%]
//  * right-[8%] bottom-[10%] lg:right-[20%] lg:bottom-[16%]
//  */
// const floatingTiles = [
//   {
//     src: '/icons/figma.png',
//     alt: 'Design icon',
//     pos: 'left-[6%] top-[10%] lg:left-[9%] lg:top-[14%]',
//     rotate: -12,
//     delay: 0,
//   },
//   {
//     src: '/icons/hashtag.png',
//     alt: 'Analytics icon',
//     pos: 'right-[5%] top-[10%] lg:right-[8%] lg:top-[14%]',
//     rotate: 12,
//     delay: 0.8,
//   },
//   {
//     src: '/icons/insta.png',
//     alt: 'Photo icon',
//     pos: 'left-[8%] bottom-[8%] lg:left-[14%] lg:bottom-[14%]',
//     rotate: 12,
//     delay: 1.6,
//   },
//   {
//     src: '/icons/megaphone.png',
//     alt: 'Voice icon',
//     pos: 'right-[8%] bottom-[10%] lg:right-[20%] lg:bottom-[16%]',
//     rotate: -12,
//     delay: 2.4,
//   },
// ];

// export default function Hero() {
//   return (
//     // HEIGHT REDUCED HERE
//     <section className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-28 lg:pb-20 mt-8">
//       {/* Soft red glow, top-left corner only (no grid) */}
//       <div className="pointer-events-none absolute -left-24 -top-24 z-0 h-[260px] w-[260px] rounded-full bg-[#E10600]/25 blur-[90px]" />

//       {/* Floating image tiles */}
//       <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
//         {floatingTiles.map((tile) => (
//           <motion.div
//             key={tile.src}
//             className={`absolute ${tile.pos}`}
//             style={{ rotate: tile.rotate }}
//             animate={{ y: [0, -10, 0] }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: 'easeInOut',
//               delay: tile.delay,
//             }}
//           >
//             <div className="flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20 lg:h-24 lg:w-24">
//               <Image
//                 src={tile.src}
//                 alt={tile.alt}
//                 width={80}
//                 height={80}
//                 className="h-12 w-12 object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Centered content */}
//       <div className="container relative z-20 mx-auto px-6 sm:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="mx-auto flex max-w-3xl flex-col items-center text-center"
//         >
//           {/* Eyebrow with gradient lines */}
//           <div className="flex items-center gap-3">
//             <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-[#FF3B30] to-[#E10600]" />
//             <span className="bg-gradient-to-r from-[#FF3B30] via-[#E10600] to-[#B91C1C] bg-clip-text text-xs font-semibold uppercase tracking-[0.18em] text-transparent sm:text-sm">
//               Growth Driven Marketing
//             </span>
//             <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-[#E10600] to-[#FF3B30]" />
//           </div>

//           {/* Headline */}
//           <h1 className="mt-5 text-3xl font-normal leading-[1.1] tracking-tight text-[#111] sm:text-3xl lg:text-4xl xl:text-7xl">
//             Digital Marketing
//             <br />
//             That Drives
//             <span className="mt-1 block bg-gradient-to-r from-[#FF3B30] via-[#E10600] to-[#B91C1C] bg-clip-text pb-2 font-serif text-3xl italic text-transparent sm:text-4xl lg:text-6xl xl:text-6xl">
//               Measurable Growth
//             </span>
//           </h1>

//           <p className="mt-4 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg">
//             SEO, PPC, web development, and content strategies that deliver
//             compounding ROI, not vanity metrics.
//           </p>

//           {/* CTAs */}
//           <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
//             <Link
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-lg bg-[#111] px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-black/80"
//             >
//               Get Free Proposal
//             </Link>
//             {/* <Link
//               href="/our-work/case-studies"
//               className="group inline-flex items-center gap-2 text-base font-bold text-black"
//             >
//               View Case Studies
//               <span className="transition-transform duration-300 group-hover:translate-x-1">
//                 ➔
//               </span>
//             </Link> */}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const floatingTiles = [
  {
    src: '/icons/figma.png',
    position: 'left-[6%] top-[12%] lg:left-[10%] lg:top-[18%]',
    rotate: -12,
    delay: 0,
  },
  {
    src: '/icons/hashtag.png',
    position: 'right-[6%] top-[12%] lg:right-[10%] lg:top-[18%]',
    rotate: 12,
    delay: 0.8,
  },
  {
    src: '/icons/insta.png',
    position: 'left-[8%] bottom-[12%] lg:left-[16%] lg:bottom-[16%]',
    rotate: 12,
    delay: 1.6,
  },
  {
    src: '/icons/megaphone.png',
    position: 'right-[8%] bottom-[12%] lg:right-[16%] lg:bottom-[16%]',
    rotate: -12,
    delay: 2.4,
  },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-white px-5 pb-20 pt-24 sm:px-8 sm:pb-24 lg:pb-28 lg:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 -z-10 h-96 w-96 rounded-full bg-[#E10600]/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
      >
        {floatingTiles.map((tile) => (
          <motion.div
            key={tile.src}
            className={`absolute ${tile.position}`}
            style={{ rotate: tile.rotate }}
            animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: tile.delay,
            }}
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-100 bg-white shadow-[0_12px_40px_-16px_rgba(15,23,42,0.2)] lg:h-24 lg:w-24">
              <Image
                src={tile.src}
                alt=""
                width={80}
                height={80}
                sizes="80px"
                className="h-14 w-14 object-contain lg:h-16 lg:w-16"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <div className="inline-flex items-center gap-2.5 rounded-full border border-red-100 bg-red-50/70 px-4 py-2">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-[#E10600]"
          />
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#B91C1C] sm:text-xs">
            Digital Marketing Agency
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-medium leading-[1.08] tracking-tight text-[#111] sm:text-5xl lg:text-6xl xl:text-7xl">
          Digital marketing
          <br />
          built around
          <span className="mt-2 block font-serif italic text-[#E10600]">
            your business goals.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          From SEO and paid ads to websites and social media, we help you reach
          the right people and turn their interest into enquiries and sales.
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:gap-6">
          <Link
            href="#get-proposal"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#111] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#E10600] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E10600] sm:w-auto"
          >
            Get Your Free Proposal
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-[#E10600] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E10600]"
          >
            Talk to Our Team
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-5 text-xs leading-5 text-slate-500">
          Tell us what you need. We’ll recommend a starting point.
        </p>
      </motion.div>
    </section>
  );
}