// import { Target, Award, Clock3, Phone, ArrowRight } from "lucide-react";

// const features = [
//   {
//     icon: Target,
//     title: "Guaranteed Results",
//     description:
//       "We ensure measurable outcomes that drive your business towards success.",
//   },
//   {
//     icon: Award,
//     title: "Quality Service",
//     description:
//       "Our expert team delivers top-notch solutions tailored to your needs.",
//   },
//   {
//     icon: Clock3,
//     title: "On-Time Delivery",
//     description: "We prioritize punctuality to keep your projects on track.",
//   },
// ];

// export default function AboutSection() {
//   return (
//     <section className="bg-white py-16 sm:py-20">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
//           {/* Left: staggered image collage */}
//           <div className="grid grid-cols-2 gap-4">
//             {/* Left column: tall image on top, short image below */}
//             <div className="flex flex-col gap-4">
//               <div className="h-56 overflow-hidden rounded-2xl sm:h-64">
//                 <img
//                   src="https://www.touchstoneinfotech.com/wp-content/uploads/2025/01/About-us-img1.jpg"
//                   alt="Team discussing a project around a laptop"
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <div className="h-36 overflow-hidden rounded-2xl sm:h-40">
//                 <img
//                   src="https://www.touchstoneinfotech.com/wp-content/uploads/2025/01/about-us-img3.jpg"
//                   alt="Team reviewing social media icons on a table"
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Right column: short image on top, tall image below */}
//             <div className="flex flex-col gap-4">
//               <div className="h-36 overflow-hidden rounded-2xl bg-sky-200 sm:h-40">
//                 <img
//                   src="https://www.touchstoneinfotech.com/wp-content/uploads/2025/01/about-us-img2.jpg"
//                   alt="Person promoting with a megaphone"
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <div className="h-56 overflow-hidden rounded-2xl bg-yellow-300 sm:h-64">
//                 <img
//                   src="https://www.touchstoneinfotech.com/wp-content/uploads/2025/01/about-us-img4.jpg"
//                   alt="Woman working on a laptop"
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right: content */}
//           <div>
//             <p className="text-[0.85rem] font-medium uppercase tracking-wider text-[#E10600] sm:text-sm">
//               About Digitalkeddy
//             </p>
//             <h2 className="mt-3 text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
//               Comprehensive Solutions for All Your Digital Business Needs
//             </h2>
//             <p className="mt-5 text-[0.95rem] leading-relaxed text-gray-700 sm:text-base">
//               Digitalkeddy is an award-winning company that offers a
//               wide range of digital solutions to help you accomplish your
//               goals. Our skilled team has expertise in web design, search
//               engine optimization (SEO), pay-per-click (PPC) advertising,
//               social media marketing (SMM), and other areas of expertise, and
//               we offer a variety of advanced services to help you achieve
//               your business goals in the digital world.
//             </p>

//             <div className="mt-8 space-y-6">
//               {features.map(({ icon: Icon, title, description }, i) => (
//                 <div
//                   key={title}
//                   className={`flex gap-4 ${
//                     i !== 0 ? "border-t border-gray-200 pt-6" : ""
//                   }`}
//                 >
//                   <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#E10600]">
//                     <Icon className="h-6 w-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-[1.05rem] font-semibold text-gray-900">
//                       {title}
//                     </h3>
//                     <p className="mt-1 text-[0.9rem] leading-relaxed text-gray-600">
//                       {description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-9 flex flex-wrap items-center gap-6">
//               <button className="inline-flex items-center gap-2 rounded bg-[#E10600] px-6 py-3 text-[0.9rem] font-semibold text-white transition-colors hover:bg-[#B91C1C]">
//                 Discover More
//                 <ArrowRight className="h-4 w-4" />
//               </button>

//               <div className="flex items-center gap-3">
//                 <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#E10600]">
//                   <Phone className="h-5 w-5 text-white" />
//                 </span>
//                 <div className="text-[0.9rem]">
//                   <p className="text-gray-500">Call anytime</p>
//                   <p className="font-semibold text-gray-900">
//                     +91 96253 50146

//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from 'next/link';
import {
  ArrowUpRight,
  Phone,
  Target,
  LayoutGrid,
  MessageSquare,
  Search,
  Code2,
  Megaphone,
  PenTool,
} from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Start with the business goal',
    description:
      'Define what you need to improve before deciding which channels to use.',
  },
  {
    icon: LayoutGrid,
    title: 'Keep the work connected',
    description:
      'Bring your website, campaigns and content together around the same plan.',
  },
  {
    icon: MessageSquare,
    title: 'Know what happens next',
    description:
      'Discuss the scope, responsibilities and timelines before work starts.',
  },
];

const capabilities = [
  { icon: Search, title: 'Search', subtitle: 'Help customers find you' },
  { icon: Code2, title: 'Websites', subtitle: 'Make the next step clear' },
  { icon: Megaphone, title: 'Campaigns', subtitle: 'Reach relevant audiences' },
  { icon: PenTool, title: 'Content', subtitle: 'Explain what you offer' },
];

export default function LilAbout() {
  return (
    <section
      aria-labelledby="about-heading"
      className="bg-white px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-3xl bg-[#111] p-6 sm:p-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E10600]/25 blur-[70px]"
          />

          <div className="relative">
            <div className="flex items-center justify-between border-b border-white/15 pb-6">
              <span className="text-sm font-semibold text-white">
                Digital Keddy
              </span>
              <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest text-slate-300">
                Our Approach
              </span>
            </div>

            <p className="mt-9 max-w-xs text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
              One business.
              <br />
              A connected digital plan.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {capabilities.map(({ icon: Icon, title, subtitle }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6 text-red-300"
                    strokeWidth={1.75}
                  />
                  <p className="mt-4 text-sm font-semibold text-white">
                    {title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {subtitle}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-7 text-xs leading-6 text-slate-400">
              Plan the work around what your customers need to see, understand
              and do.
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E10600]">
            About Digital Keddy
          </p>

          <h2
            id="about-heading"
            className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#111] sm:text-4xl"
          >
            Make your digital presence work together.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Digital Keddy works on websites, SEO, paid advertising and social
            media. We help businesses decide where to focus, what to create
            and how to measure the work.
          </p>

          <div className="mt-7 space-y-5">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#E10600]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#111]">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href="#get-proposal"
              className="inline-flex items-center gap-2 rounded-xl bg-[#E10600] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#B91C1C]"
            >
              Discuss Your Business
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>

            <a
              href="tel:+919625350146"
              className="inline-flex items-center gap-2 rounded-lg py-2 text-sm font-medium text-slate-700 hover:text-[#E10600]"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              +91 96253 50146
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}