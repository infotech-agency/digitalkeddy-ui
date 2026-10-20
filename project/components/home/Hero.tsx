

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * FIX: Tailwind doesn't see dynamically constructed classes (like `${tile.pos}`).
 * By adding this comment block, Tailwind's JIT compiler will "see" these exact strings
 * and generate the necessary CSS for them. DO NOT DELETE THIS COMMENT.
 * 
 * left-[6%] top-[10%] lg:left-[9%] lg:top-[14%]
 * right-[5%] top-[10%] lg:right-[8%] lg:top-[14%]
 * left-[8%] bottom-[8%] lg:left-[14%] lg:bottom-[14%]
 * right-[8%] bottom-[10%] lg:right-[20%] lg:bottom-[16%]
 */
const floatingTiles = [
  {
    src: '/icons/figma.png',
    alt: 'Design icon',
    pos: 'left-[6%] top-[10%] lg:left-[9%] lg:top-[14%]',
    rotate: -12,
    delay: 0,
  },
  {
    src: '/icons/hashtag.png',
    alt: 'Analytics icon',
    pos: 'right-[5%] top-[10%] lg:right-[8%] lg:top-[14%]',
    rotate: 12,
    delay: 0.8,
  },
  {
    src: '/icons/insta.png',
    alt: 'Photo icon',
    pos: 'left-[8%] bottom-[8%] lg:left-[14%] lg:bottom-[14%]',
    rotate: 12,
    delay: 1.6,
  },
  {
    src: '/icons/megaphone.png',
    alt: 'Voice icon',
    pos: 'right-[8%] bottom-[10%] lg:right-[20%] lg:bottom-[16%]',
    rotate: -12,
    delay: 2.4,
  },
];

export default function Hero() {
  return (
    // HEIGHT REDUCED HERE
    <section className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-28 lg:pb-20 mt-8">
      {/* Soft red glow, top-left corner only (no grid) */}
      <div className="pointer-events-none absolute -left-24 -top-24 z-0 h-[260px] w-[260px] rounded-full bg-[#E10600]/25 blur-[90px]" />

      {/* Floating image tiles */}
      <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
        {floatingTiles.map((tile) => (
          <motion.div
            key={tile.src}
            className={`absolute ${tile.pos}`}
            style={{ rotate: tile.rotate }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: tile.delay,
            }}
          >
            <div className="flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20 lg:h-24 lg:w-24">
              <Image
                src={tile.src}
                alt={tile.alt}
                width={80}
                height={80}
                className="h-12 w-12 object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Centered content */}
      <div className="container relative z-20 mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          {/* Eyebrow with gradient lines */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-[#FF3B30] to-[#E10600]" />
            <span className="bg-gradient-to-r from-[#FF3B30] via-[#E10600] to-[#B91C1C] bg-clip-text text-xs font-semibold uppercase tracking-[0.18em] text-transparent sm:text-sm">
              Growth Driven Marketing
            </span>
            <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-[#E10600] to-[#FF3B30]" />
          </div>

          {/* Headline */}
          <h1 className="mt-5 text-3xl font-normal leading-[1.1] tracking-tight text-[#111] sm:text-3xl lg:text-4xl xl:text-7xl">
            Digital Marketing
            <br />
            That Drives
            <span className="mt-1 block bg-gradient-to-r from-[#FF3B30] via-[#E10600] to-[#B91C1C] bg-clip-text pb-2 font-serif text-3xl italic text-transparent sm:text-4xl lg:text-6xl xl:text-6xl">
              Measurable Growth
            </span>
          </h1>

          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg">
            SEO, PPC, web development, and content strategies that deliver
            compounding ROI, not vanity metrics.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#111] px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-black/80"
            >
              Get Free Proposal
            </Link>
            {/* <Link
              href="/our-work/case-studies"
              className="group inline-flex items-center gap-2 text-base font-bold text-black"
            >
              View Case Studies
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ➔
              </span>
            </Link> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}