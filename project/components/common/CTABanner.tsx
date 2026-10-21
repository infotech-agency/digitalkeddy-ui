

// import Link from 'next/link';
// import Image from 'next/image';
// import { Reveal } from '@/components/common/Reveal';

// /**
//  * Pattern background (data URI, no extra asset file needed).
//  * Soft coral base with overlapping circle-arc texture, matching
//  * the reference design.
//  */
// const BG_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
// <svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'>
//   <rect width='120' height='120' fill='#F7A8B8'/>
//   <g fill='none' stroke='#F2809A' stroke-width='2' opacity='0.5'>
//     <circle cx='0' cy='0' r='40'/>
//     <circle cx='120' cy='120' r='40'/>
//     <circle cx='120' cy='0' r='40'/>
//     <circle cx='0' cy='120' r='40'/>
//     <circle cx='60' cy='60' r='40'/>
//   </g>
// </svg>
// `)}`;

// export default function CTABanner({
//   eyebrow = "Let's Work Together",
//   title = 'Need a Successful Project?',
//   buttonText = 'Contact Us',
//   buttonHref = '/contact',
//   illustrationSrc = '/images/success.png',
// }: {
//   eyebrow?: string;
//   title?: string;
//   buttonText?: string;
//   buttonHref?: string;
//   illustrationSrc?: string;
// }) {
//   return (
//     <section
//       style={{
//         backgroundColor: '#F7A8B8',
//         backgroundImage: `url("${BG_SVG}")`,
//         backgroundRepeat: 'repeat',
//         backgroundSize: '120px 120px',
//       }}
//       className="relative overflow-hidden py-20 lg:py-28"
//     >
//       <div className="container relative z-10 mx-auto px-4">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand/70">
//             {eyebrow}
//           </p>

//           <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand sm:text-4xl lg:text-5xl">
//             {title}
//           </h2>

//           <div className="mt-8 flex justify-center">
//             <Link
//               href={buttonHref}
//               className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-brand shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
//             >
//               {buttonText}
//             </Link>
//           </div>
//         </Reveal>

//         {/* Illustration */}
//         <div className="relative mx-auto mt-12 max-w-3xl">
//           <Image
//             src={illustrationSrc}
//             alt=""
//             width={1200}
//             height={500}
//             className="h-auto w-full object-contain"
//             priority={false}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/common/Reveal';

const CONTACTS = [
  {
    label: 'Email Us',
    value: 'info@digitalkeddy.in',
    href: 'mailto:info@digitalkeddy.in',
  },
  {
    label: 'Phone',
    value: '96253 50146',
    href: 'tel:+919625350146',
  },
  {
    label: 'WhatsApp',
    value: '96253 50146',
    href: 'https://wa.me/919625350146',
  },
];

export default function CTABanner({
  title = 'Let Us Discuss Your Next Stage of Growth',
  text = 'Tell us about your business and the customers you want to reach. We will help you identify a practical starting point for your digital marketing.',
  primaryText = 'Get My Free Marketing Plan',
  primaryHref = '/contact',
  secondaryText = 'Call Digital Keddy',
  secondaryHref = 'tel:+919625350146',
  illustrationSrc = '/images/success.png',
}: {
  title?: string;
  text?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  illustrationSrc?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#F7A8B8] py-20 lg:py-28">
      <div className="container relative z-10 mx-auto px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-brand/80 sm:text-lg">
            {text}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-brand shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
            >
              {primaryText}
            </Link>
            <a
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-full border-2 border-brand px-8 py-3 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              {secondaryText}
            </a>
          </div>
        </Reveal>

        {/* Contact details */}
        <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
          {CONTACTS.map((c) => (
            <li
              key={c.label}
              className="rounded-2xl bg-white/70 px-5 py-4 text-center backdrop-blur-sm"
            >
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand/70">
                {c.label} :
              </p>
              <a
                href={c.href}
                {...(c.label === 'WhatsApp'
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="mt-1 block break-words text-base font-semibold text-brand hover:underline"
              >
                {c.value}
              </a>
            </li>
          ))}
        </ul>

        {/* Illustration (optional) */}
        {illustrationSrc && (
          <div className="relative mx-auto mt-12 max-w-3xl">
            <Image
              src={illustrationSrc}
              alt=""
              width={1200}
              height={500}
              className="h-auto w-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}