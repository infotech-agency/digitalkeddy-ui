// import Image from 'next/image';
// import { TrendingUp, ArrowRight, Target, Zap, FolderOpen } from 'lucide-react';
// import type { Metadata } from 'next';
// import Link from 'next/link';
// import PageHero from '@/components/common/PageHero';
// import CTABanner from '@/components/common/CTABanner';
// import { BASE_URL } from '@/utils/baseUrl';

// export const metadata: Metadata = {
//   title: 'Case Studies | Real Growth Stories',
//   description:
//     'Detailed case studies showing how our agency helped brands achieve measurable growth through digital marketing.',
//   alternates: { canonical: '/our-work/case-studies' },
// };

// interface ApiCaseStudy {
//   _id: string;
//   title: string;
//   slug: string;
//   client: string;
//   industry: string;
//   challenge: string;
//   solution: string;
//   result: string;
//   images: { public_id: string; secure_url: string }[];
//   gallery: { public_id: string; secure_url: string }[];
//   metaTitle: string;
//   metaDescription: string;
//   status: string;
// }

// function normalizeCaseStudy(cs: ApiCaseStudy) {
//   return {
//     slug: cs.slug,
//     title: cs.title,
//     client: cs.client,
//     industry: cs.industry,
//     challenge: cs.challenge,
//     solution: cs.solution,
//     result: cs.result,
//     image: cs.images?.[0]?.secure_url || '/placeholder.jpg',
//   };
// }

// async function getCaseStudies() {
//   try {
//     const res = await fetch(`${BASE_URL}/case-studies`, { cache: 'no-store' });
    
//     if (!res.ok) return [];
//     const result = await res.json();
//     if (!result.success) return [];
//     return (result.data || [])
//       .filter((cs: ApiCaseStudy) => cs.status === 'published')
//       .map(normalizeCaseStudy);
//   } catch (err) {
//     console.error('Failed to fetch case studies', err);
//     return [];
//   }
// }

// export default async function CaseStudiesPage() {
//   const caseStudies = await getCaseStudies();

//   return (
//     <>
//       <PageHero
//         breadcrumb="Case Studies"
//         title="Growth Stories, Backed by Data"
//         description="Every case study below shows the challenge, the strategy, and the measurable results we delivered. This is what evidence-based marketing looks like."
//         image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
//       />

//       <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
//         {/* Premium Background: Sharp Box Grid + Mesh Glow */}
//         <div className="pointer-events-none absolute inset-0 z-0">
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:48px_48px] opacity-60" />
//           <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px]" />
//           <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-leaf/5 blur-[120px]" />
//         </div>

//         <div className="container relative z-10 mx-auto max-w-7xl px-4">
//           {caseStudies.length === 0 ? (
//             <div className="mx-auto max-w-md border border-slate-200 bg-white p-12 text-center shadow-sm">
//               <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center bg-slate-50">
//                 <FolderOpen className="h-6 w-6 text-slate-400" />
//               </div>
//               <h3 className="text-xl font-bold text-brand">No Case Studies Found</h3>
//               <p className="mt-2 text-sm text-slate-500">No published case studies available at the moment. Please check back later.</p>
//             </div>
//           ) : (
//             <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
//               {caseStudies.map((cs) => (
//                 <div 
//                   key={cs.slug} 
//                   className="group relative flex h-full flex-col overflow-hidden border border-slate-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:border-slate-900 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
//                 >
//                   {/* Hover Top Accent Line */}
//                   <div className="absolute top-0 left-1/2 z-20 h-1 w-0 -translate-x-1/2 bg-electric transition-all duration-500 group-hover:w-1/2"></div>

//                   {/* Image Section */}
//                   <div className="relative h-64 overflow-hidden">
//                     <Image
//                       src={cs.image}
//                       alt={cs.title}
//                       fill
//                       className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                       sizes="(max-width: 768px) 100vw, 50vw"
//                     />
//                     {/* Cinematic Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    
//                     {/* Industry Badge */}
//                     <div className="absolute top-4 left-4 border-l-2 border-white/50 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
//                       {cs.industry}
//                     </div>

//                     {/* Client & Title (Over Image) */}
//                     <div className="absolute bottom-0 left-0 right-0 p-6">
//                       <p className="text-[11px] font-medium uppercase tracking-wider text-slate-300">
//                         {cs.client}
//                       </p>
//                       <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-white">
//                         {cs.title}
//                       </h3>
//                     </div>
//                   </div>

//                   {/* Content Body */}
//                   <div className="flex flex-1 flex-col p-6 lg:p-8">
                    
//                     {/* Challenge & Strategy Grid */}
//                     <div className="grid gap-6 sm:grid-cols-2">
//                       {cs.challenge && (
//                         <div>
//                           <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
//                             <Target className="h-3.5 w-3.5 text-electric" /> Challenge
//                           </h4>
//                           <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-4">
//                             {cs.challenge}
//                           </p>
//                         </div>
//                       )}
//                       {cs.solution && (
//                         <div>
//                           <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
//                             <Zap className="h-3.5 w-3.5 text-leaf" /> Strategy
//                           </h4>
//                           <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-4">
//                             {cs.solution}
//                           </p>
//                         </div>
//                       )}
//                     </div>

//                     {/* Key Impact (Result) Block - Dark Dashboard Style */}
//                     {cs.result && (
//                       <div className="mt-8 flex items-center gap-4 border border-slate-200 bg-slate-900 p-5">
//                         <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-electric/20">
//                           <TrendingUp className="h-6 w-6 text-electric" />
//                         </div>
//                         <div>
//                           <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-500">
//                             Key Impact
//                           </span>
//                           <span className="text-base font-bold leading-tight text-white">
//                             {cs.result}
//                           </span>
//                         </div>
//                       </div>
//                     )}

//                     {/* Footer Link */}
//                     <div className="mt-auto pt-6">
//                       <Link 
//                         href={`/our-work/case-studies/${cs.slug}`} 
//                         className="group/link flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-brand transition-colors hover:text-electric"
//                       >
//                         Read Full Case Study
//                         <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       <CTABanner />
//     </>
//   );
// }

import Image from 'next/image';
import { TrendingUp, ArrowRight, FolderOpen } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/common/PageHero';
import CTABanner from '@/components/common/CTABanner';
import { BASE_URL } from '@/utils/baseUrl';

export const metadata: Metadata = {
  title: 'Case Studies | Real Growth Stories',
  description:
    'Detailed case studies showing how our agency helped brands achieve measurable growth through digital marketing.',
  alternates: { canonical: '/our-work/case-studies' },
};

interface ApiCaseStudy {
  _id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  images: { public_id: string; secure_url: string }[];
  gallery: { public_id: string; secure_url: string }[];
  metaTitle: string;
  metaDescription: string;
  status: string;
}

function normalizeCaseStudy(cs: ApiCaseStudy) {
  return {
    slug: cs.slug,
    title: cs.title,
    client: cs.client,
    industry: cs.industry,
    result: cs.result,
    image: cs.images?.[0]?.secure_url || '/placeholder.jpg',
  };
}

async function getCaseStudies() {
  try {
    const res = await fetch(`${BASE_URL}/case-studies`, { cache: 'no-store' });

    if (!res.ok) return [];
    const result = await res.json();
    if (!result.success) return [];
    return (result.data || [])
      .filter((cs: ApiCaseStudy) => cs.status === 'published')
      .map(normalizeCaseStudy);
  } catch (err) {
    console.error('Failed to fetch case studies', err);
    return [];
  }
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <>
      <PageHero
        breadcrumb="Case Studies"
        title="Growth Stories, Backed by Data"
        description="Every case study below shows the challenge, the strategy, and the measurable results we delivered. This is what evidence-based marketing looks like."
        image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
      />

      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
        {/* Premium Background: Sharp Box Grid + Mesh Glow */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:48px_48px] opacity-60" />
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-leaf/5 blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          {caseStudies.length === 0 ? (
            <div className="mx-auto max-w-md border border-slate-200 bg-white p-12 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center bg-slate-50">
                <FolderOpen className="h-6 w-6 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-brand">No Case Studies Found</h3>
              <p className="mt-2 text-sm text-slate-500">No published case studies available at the moment. Please check back later.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
              {caseStudies.map((cs) => (
                <Link
                  href={`/our-work/case-studies/${cs.slug}`}
                  key={cs.slug}
                  className="group relative flex h-full flex-col overflow-hidden border border-slate-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-slate-900 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                >
                  {/* Hover Top Accent Line */}
                  <div className="absolute top-0 left-1/2 z-20 h-1 w-0 -translate-x-1/2 bg-electric transition-all duration-500 group-hover:w-1/2" />

                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Cinematic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                    {/* Industry Badge */}
                    <div className="absolute top-4 left-4 border-l-2 border-white/50 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                      {cs.industry}
                    </div>

                    {/* Client & Title (Over Image) */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-slate-300">
                        {cs.client}
                      </p>
                      <h3 className="mt-1 text-2xl font-extrabold leading-tight tracking-tight text-white">
                        {cs.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Body — Key Impact only, rest lives on the detail page */}
                  <div className="flex flex-1 flex-col justify-between p-6 lg:p-8">
                    {cs.result ? (
                      <div className="flex items-center gap-4 border border-slate-200 bg-[#6BAB44] p-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#7ef534]">
                          <TrendingUp className="h-6 w-6 text-[#6BAB44]" />
                        </div>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-widest text-black">
                            Key Impact
                          </span>
                          <span className="text-base font-bold leading-tight text-white">
                            {cs.result}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}

                    {/* Footer Link */}
                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-brand transition-colors group-hover:text-[#6BAB44]">
                      Read Full Case Study
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}