import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  Target,
  Zap,
  TrendingUp,
  Building2,
  Tag,
  CheckCircle2,
  Quote,
} from 'lucide-react';
import CTABanner from '@/components/common/CTABanner';
import { BASE_URL } from '@/utils/baseUrl';

// ---------- Types ----------
interface ApiCaseStudy {
  _id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  description?: string;      // optional long-form
  testimonial?: string;      // optional
  testimonialAuthor?: string;
  images: { public_id: string; secure_url: string }[];
  gallery: { public_id: string; secure_url: string }[];
  metaTitle?: string;
  metaDescription?: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}

// ---------- Fetch one ----------
async function getCaseStudy(slug: string): Promise<ApiCaseStudy | null> {
  try {
    // const res = await fetch(`${BASE_URL}/case-studies/${slug}`, {
    //   cache: 'no-store',
    // });
    const res = await fetch(`${BASE_URL}/case-studies/slug/${slug}`, {
  cache: 'no-store',
});
    if (!res.ok) return null;
    const json = await res.json();
    if (!json.success) return null;
    return json.data ?? null;
  } catch (err) {
    console.error('Failed to fetch case study', err);
    return null;
  }
}

// ---------- Fetch all (for related) ----------
async function getRelatedCaseStudies(currentSlug: string, industry?: string) {
  try {
    const res = await fetch(`${BASE_URL}/case-studies`, { cache: 'no-store' });
    if (!res.ok) return [];
    const result = await res.json();
    if (!result.success) return [];
    return (result.data as ApiCaseStudy[])
      .filter(
        (cs) =>
          cs.status === 'published' &&
          cs.slug !== currentSlug &&
          (!industry || cs.industry === industry)
      )
      .slice(0, 3);
  } catch (err) {
    console.error('Failed to fetch related case studies', err);
    return [];
  }
}

// ---------- Metadata ----------
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cs = await getCaseStudy(params.slug);
  if (!cs) {
    return { title: 'Case Study Not Found' };
  }
  return {
    title: cs.metaTitle || `${cs.title} | Case Study`,
    description: cs.metaDescription || cs.challenge?.slice(0, 160),
    alternates: { canonical: `/our-work/case-studies/${cs.slug}` },
    openGraph: {
      title: cs.metaTitle || cs.title,
      description: cs.metaDescription || cs.challenge?.slice(0, 160),
      images: cs.images?.[0]?.secure_url ? [cs.images[0].secure_url] : [],
      type: 'article',
    },
  };
}

// ---------- Page ----------
export default async function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const cs = await getCaseStudy(params.slug);
  if (!cs) notFound();

  const heroImage = cs.images?.[0]?.secure_url || '/placeholder.jpg';
  const related = await getRelatedCaseStudies(cs.slug, cs.industry);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-slate-900">
        <Image
          src={heroImage}
          alt={cs.title}
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/40" />

        {/* Grid overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="container relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16 lg:pb-20">
          {/* Breadcrumb */}
          <Link
            href="/our-work/case-studies"
            className="mb-6 inline-flex w-fit items-center gap-2 border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Case Studies
          </Link>

          {/* Industry badge */}
          {cs.industry && (
            <span className="mb-4 inline-flex w-fit items-center gap-2 border-l-2 border-electric bg-black/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
              <Tag className="h-3 w-3" />
              {cs.industry}
            </span>
          )}

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {cs.title}
          </h1>

          {cs.client && (
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Building2 className="h-4 w-4 text-electric" />
                <span className="font-medium">{cs.client}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============ BODY ============ */}
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:48px_48px] opacity-60" />
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-leaf/5 blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

            {/* ===== Left: Main content ===== */}
            <div className="lg:col-span-8 space-y-10">

              {/* Challenge */}
              {cs.challenge && (
                <article className="border border-slate-200 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:p-10">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-electric/10">
                      <Target className="h-5 w-5 text-electric" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Section 01
                      </span>
                      <h2 className="text-xl font-extrabold text-brand lg:text-2xl">
                        The Challenge
                      </h2>
                    </div>
                  </div>
                  <p className="whitespace-pre-line text-base leading-relaxed text-slate-600">
                    {cs.challenge}
                  </p>
                </article>
              )}

              {/* Solution */}
              {cs.solution && (
                <article className="border border-slate-200 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:p-10">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-leaf/10">
                      <Zap className="h-5 w-5 text-leaf" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Section 02
                      </span>
                      <h2 className="text-xl font-extrabold text-brand lg:text-2xl">
                        Our Strategy
                      </h2>
                    </div>
                  </div>
                  <p className="whitespace-pre-line text-base leading-relaxed text-slate-600">
                    {cs.solution}
                  </p>
                </article>
              )}

              {/* Result — dark dashboard block */}
              {cs.result && (
                <article className="relative overflow-hidden bg-slate-900 p-8 lg:p-10">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />
                  <div className="relative">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center bg-electric/20">
                        <TrendingUp className="h-5 w-5 text-electric" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                          Section 03
                        </span>
                        <h2 className="text-xl font-extrabold text-white lg:text-2xl">
                          The Result
                        </h2>
                      </div>
                    </div>
                    <p className="whitespace-pre-line text-base leading-relaxed text-slate-200">
                      {cs.result}
                    </p>
                  </div>
                </article>
              )}

              {/* Long description (optional) */}
              {cs.description && (
                <article className="border border-slate-200 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:p-10">
                  <h2 className="mb-4 text-xl font-extrabold text-brand lg:text-2xl">
                    Project Overview
                  </h2>
                  <p className="whitespace-pre-line text-base leading-relaxed text-slate-600">
                    {cs.description}
                  </p>
                </article>
              )}

              {/* Gallery */}
              {cs.gallery?.length > 0 && (
                <div>
                  <h2 className="mb-6 text-xl font-extrabold text-brand lg:text-2xl">
                    Project Gallery
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {cs.gallery.map((img, i) => (
                      <div
                        key={img.public_id || i}
                        className="group relative aspect-[4/3] overflow-hidden border border-slate-200 bg-white"
                      >
                        <Image
                          src={img.secure_url}
                          alt={`${cs.title} — image ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {cs.testimonial && (
                <article className="relative border-l-4 border-electric bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:p-10">
                  <Quote className="absolute right-8 top-8 h-10 w-10 text-slate-100" />
                  <p className="relative text-lg italic leading-relaxed text-slate-700">
                    "{cs.testimonial}"
                  </p>
                  {cs.testimonialAuthor && (
                    <p className="mt-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                      — {cs.testimonialAuthor}
                    </p>
                  )}
                </article>
              )}
            </div>

            {/* ===== Right: Sidebar ===== */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 lg:self-start">

              {/* Snapshot card */}
              <div className="border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-400">
                  Project Snapshot
                </h3>
                <dl className="space-y-4">
                  {cs.client && (
                    <div className="flex items-start gap-3 border-b border-slate-100 pb-3">
                      <Building2 className="mt-0.5 h-4 w-4 text-electric" />
                      <div>
                        <dt className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          Client
                        </dt>
                        <dd className="text-sm font-semibold text-brand">
                          {cs.client}
                        </dd>
                      </div>
                    </div>
                  )}
                  {cs.industry && (
                    <div className="flex items-start gap-3 border-b border-slate-100 pb-3">
                      <Tag className="mt-0.5 h-4 w-4 text-leaf" />
                      <div>
                        <dt className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          Industry
                        </dt>
                        <dd className="text-sm font-semibold text-brand">
                          {cs.industry}
                        </dd>
                      </div>
                    </div>
                  )}
                  {cs.result && (
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-electric" />
                      <div>
                        <dt className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          Key Impact
                        </dt>
                        <dd className="text-sm font-semibold text-brand">
                          {cs.result}
                        </dd>
                      </div>
                    </div>
                  )}
                </dl>
              </div>

              {/* CTA card */}
              <div className="border border-slate-200 bg-slate-900 p-6 text-white shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <h3 className="text-lg font-extrabold">
                  Want results like this?
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Let's talk about your goals and map out a strategy that moves
                  the numbers.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-electric px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-electric/90"
                >
                  Get a Free Audit
                </Link>
              </div>

              {/* Related */}
              {related.length > 0 && (
                <div className="border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-400">
                    Related Case Studies
                  </h3>
                  <ul className="space-y-5">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/our-work/case-studies/${r.slug}`}
                          className="group flex gap-4"
                        >
                          <div className="relative h-16 w-16 shrink-0 overflow-hidden border border-slate-200">
                            <Image
                              src={r.images?.[0]?.secure_url || '/placeholder.jpg'}
                              alt={r.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="64px"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                              {r.industry}
                            </p>
                            <p className="mt-0.5 line-clamp-2 text-sm font-semibold text-brand transition-colors group-hover:text-electric">
                              {r.title}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>

          {/* Bottom back link */}
          <div className="mt-16 flex justify-center">
            <Link
              href="/our-work/case-studies"
              className="inline-flex items-center gap-2 border border-slate-300 bg-white px-6 py-3 text-sm font-bold uppercase tracking-widest text-brand transition-colors hover:border-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* <CTABanner /> */}
    </>
  );
}