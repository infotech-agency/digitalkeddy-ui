

// import Link from 'next/link';
// import Image from 'next/image';
// import { Reveal } from '@/components/common/Reveal';

// const CONTACTS = [
//   {
//     label: 'Email Us',
//     value: 'info@digitalkeddy.in',
//     href: 'mailto:info@digitalkeddy.in',
//   },
//   {
//     label: 'Phone',
//     value: '96253 50146',
//     href: 'tel:+919625350146',
//   },
//   {
//     label: 'WhatsApp',
//     value: '96253 50146',
//     href: 'https://wa.me/919625350146',
//   },
// ];

// export default function CTABanner({
//   title = 'Let Us Discuss Your Next Stage of Growth',
//   text = 'Tell us about your business and the customers you want to reach. We will help you identify a practical starting point for your digital marketing.',
//   primaryText = 'Get My Free Marketing Plan',
//   primaryHref = '/contact',
//   secondaryText = 'Call Digital Keddy',
//   secondaryHref = 'tel:+919625350146',
//   illustrationSrc = '/images/success.png',
// }: {
//   title?: string;
//   text?: string;
//   primaryText?: string;
//   primaryHref?: string;
//   secondaryText?: string;
//   secondaryHref?: string;
//   illustrationSrc?: string;
// }) {
//   return (
//     <section className="relative overflow-hidden bg-[#F7A8B8] py-20 lg:py-28">
//       <div className="container relative z-10 mx-auto px-4">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand sm:text-4xl lg:text-5xl">
//             {title}
//           </h2>

//           <p className="mt-4 text-base leading-relaxed text-brand/80 sm:text-lg">
//             {text}
//           </p>

//           <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
//             <Link
//               href={primaryHref}
//               className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-brand shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
//             >
//               {primaryText}
//             </Link>
//             <a
//               href={secondaryHref}
//               className="inline-flex items-center justify-center rounded-full border-2 border-brand px-8 py-3 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
//             >
//               {secondaryText}
//             </a>
//           </div>
//         </Reveal>

//         {/* Contact details */}
//         <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
//           {CONTACTS.map((c) => (
//             <li
//               key={c.label}
//               className="rounded-2xl bg-white/70 px-5 py-4 text-center backdrop-blur-sm"
//             >
//               <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand/70">
//                 {c.label} :
//               </p>
//               <a
//                 href={c.href}
//                 {...(c.label === 'WhatsApp'
//                   ? { target: '_blank', rel: 'noopener noreferrer' }
//                   : {})}
//                 className="mt-1 block break-words text-base font-semibold text-brand hover:underline"
//               >
//                 {c.value}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Illustration (optional) */}
//         {illustrationSrc && (
//           <div className="relative mx-auto mt-12 max-w-3xl">
//             <Image
//               src={illustrationSrc}
//               alt=""
//               width={1200}
//               height={500}
//               className="h-auto w-full object-contain"
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
} from 'lucide-react';

const contacts = [
  {
    label: 'Email Us',
    value: 'info@digitalkeddy.in',
    href: 'mailto:info@digitalkeddy.in',
    icon: Mail,
    external: false,
  },
  {
    label: 'Call Our Team',
    value: '+91 96253 50146',
    href: 'tel:+919625350146',
    icon: Phone,
    external: false,
  },
  {
    label: 'WhatsApp Us',
    value: '+91 96253 50146',
    href: 'https://wa.me/919625350146',
    icon: MessageCircle,
    external: true,
  },
];

type CTABannerProps = {
  title?: string;
  text?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  illustrationSrc?: string;
};

export default function CTABanner({
  title = 'What would you like to improve?',
  text = 'Tell us where your business stands and what you want to achieve. We’ll help you work out where to start.',
  primaryText = 'Get Your Free Proposal',
  primaryHref = '/contact',
  secondaryText = 'Call Our Team',
  secondaryHref = 'tel:+919625350146',
  illustrationSrc,
}: CTABannerProps) {
  return (
    <section
      aria-label="Discuss your project"
      className="bg-white px-5 py-16 sm:px-8 lg:py-20"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#111] px-6 py-10 sm:px-10 sm:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#E10600]/20 blur-[80px]"
        />

        <div className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
              Let’s Talk
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              {title}
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300">
              {text}
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E10600] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#B91C1C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {primaryText}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>

              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                {secondaryText}
              </a>
            </div>
          </div>

          <ul className="mt-10 grid gap-3 border-t border-white/15 pt-7 md:grid-cols-3">
            {contacts.map(({ icon: Icon, ...contact }) => (
              <li key={contact.label}>
                <a
                  href={contact.href}
                  target={contact.external ? '_blank' : undefined}
                  rel={contact.external ? 'noopener noreferrer' : undefined}
                  className="flex h-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-red-300"
                  />

                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">
                      {contact.label}
                    </p>
                    <p className="mt-1 break-words text-sm font-medium text-white">
                      {contact.value}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          {illustrationSrc && (
            <div className="mx-auto mt-8 max-w-2xl">
              <Image
                src={illustrationSrc}
                alt=""
                width={1200}
                height={500}
                sizes="(max-width: 768px) 90vw, 672px"
                className="h-auto w-full object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}