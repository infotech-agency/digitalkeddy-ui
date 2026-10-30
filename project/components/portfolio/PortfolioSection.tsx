
// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { AlertCircle, FolderOpen, ArrowRight } from 'lucide-react';
// import { Stagger, StaggerItem } from '@/components/common/Reveal';
// import { BASE_URL } from '@/utils/baseUrl';

// interface Project {
//   _id: string;
//   title: string;
//   slug: string;
//   clientName: string;
//   websiteUrl: string;
//   technology: string[];
//   description: string;
//   thumbnail: {
//     public_id: string;
//     secure_url: string;
//   };
//   completionDate: string;
//   featured: boolean;
//   metaTitle: string;
//   metaDescription: string;
//   status: string;
//   gallery: any[];
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

// export default function PortfolioSection() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`${BASE_URL}/projects`);
//         const result = await response.json();

//         if (result.success) {
//           const publishedProjects = result.data.filter(
//             (project: Project) => project.status === 'published'
//           );
//           setProjects(publishedProjects);
//         } else {
//           setError('Failed to fetch projects');
//         }
//       } catch (err) {
//         setError('Error fetching projects');
//         console.error('Fetch error:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return (
//     <section className="bg-white py-20 lg:py-28">
//       <div className="container mx-auto px-4">
//         {/* Heading */}
//         <div className="mb-12 max-w-2xl">
//           <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
//             Portfolio
//           </p>
//           <h2 className="mt-3 text-3xl font-bold text-brand sm:text-4xl lg:text-5xl">
//             Our Work Speaks for Itself
//           </h2>
//           <p className="mt-4 text-base text-slate-500">
//             Explore a selection of brands we have helped grow through
//             data-driven digital marketing. From startups to enterprises, the
//             results speak.
//           </p>
//         </div>

//         {/* Loading */}
//         {loading && (
//           <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
//             {[1, 2, 3, 4, 5, 6].map((i) => (
//               <div key={i} className="animate-pulse bg-white">
//                 <div className="h-64 bg-slate-100" />
//                 <div className="space-y-3 p-6">
//                   <div className="h-4 w-2/3 bg-slate-100" />
//                   <div className="h-3 w-1/3 bg-slate-100" />
//                   <div className="h-12 bg-slate-100" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Error */}
//         {!loading && error && (
//           <div className="mx-auto max-w-md border border-slate-200 p-8 text-center">
//             <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-red-200 bg-red-50">
//               <AlertCircle className="h-6 w-6 text-red-500" />
//             </div>
//             <h3 className="text-xl font-bold text-brand">Something went wrong</h3>
//             <p className="mt-2 text-sm text-slate-500">{error}</p>
//             <button
//               onClick={() => window.location.reload()}
//               className="mt-6 border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
//             >
//               Try again
//             </button>
//           </div>
//         )}

//         {/* No Projects */}
//         {!loading && !error && projects.length === 0 && (
//           <div className="mx-auto max-w-md border border-slate-200 p-12 text-center">
//             <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-slate-200">
//               <FolderOpen className="h-6 w-6 text-slate-400" />
//             </div>
//             <h3 className="text-xl font-bold text-brand">No projects found</h3>
//             <p className="mt-2 text-sm text-slate-500">
//               No published projects available at the moment. Please check back
//               later.
//             </p>
//           </div>
//         )}

//         {/* Grid */}
//         {!loading && !error && projects.length > 0 && (
//           <>
//             <Stagger
//               className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3"
//               stagger={0.06}
//             >
//               {projects.map((project, idx) => (
//                 <StaggerItem key={project._id}>
//                   <div className="group relative flex h-full flex-col bg-white transition-colors duration-300 hover:bg-red-50">
//                     {/* Image: poori dikhegi, crop nahi hogi */}
//                     <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50">
//                       <Image
//                         src={project.thumbnail?.secure_url || '/placeholder-project.jpg'}
//                         alt={project.title}
//                         fill
//                         className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
//                         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       />
//                       {project.featured && (
//                         <div className="absolute top-4 right-4 bg-red-600 px-2.5 py-1 text-[11px] font-semibold text-white">
//                           Featured
//                         </div>
//                       )}
//                     </div>

//                     <div className="flex flex-1 flex-col p-6">
//                       <div className="flex items-baseline justify-between gap-4">
//                         <h3 className="text-lg font-bold leading-snug text-brand transition-colors duration-300 group-hover:text-red-600">
//                           {project.title}
//                         </h3>
//                         <span className="shrink-0 text-xs text-slate-400 transition-colors duration-300 group-hover:text-red-400">
//                           {String(idx + 1).padStart(2, '0')}
//                         </span>
//                       </div>
//                       <p className="mt-1 text-sm text-slate-500">
//                         {project.clientName || 'Confidential client'}
//                       </p>

//                       <p className="mt-4 text-sm leading-relaxed text-slate-600 line-clamp-3">
//                         {project.description}
//                       </p>

//                       {project.technology && project.technology.length > 0 && (
//                         <p className="mt-4 text-xs text-slate-400">
//                           {project.technology.slice(0, 3).join(', ')}
//                           {project.technology.length > 3 &&
//                             `, +${project.technology.length - 3} more`}
//                         </p>
//                       )}

//                       {project.completionDate && (
//                         <div className="mt-auto border-t border-slate-100 pt-4 text-xs text-slate-400 transition-colors duration-300 group-hover:border-red-100">
//                           Completed{' '}
//                           {new Date(project.completionDate).toLocaleDateString('en-US', {
//                             year: 'numeric',
//                             month: 'short',
//                           })}
//                         </div>
//                       )}
//                     </div>

//                     {/* Red accent bar */}
//                     <div className="absolute inset-y-0 left-0 w-0.5 bg-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                   </div>
//                 </StaggerItem>
//               ))}
//             </Stagger>

//             {/* All Projects Button */}
//             <div className="mt-12 flex justify-center">
//               <Link
//                 href="/portfolio"
//                 className="group inline-flex items-center gap-2 border border-red-600 bg-red-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-red-600"
//               >
//                 All Projects
//                 <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ImageIcon, RefreshCw } from 'lucide-react';
import { BASE_URL } from '@/utils/baseUrl';

interface Project {
  _id: string;
  title: string;
  clientName?: string;
  description?: string;
  technology?: string[];
  thumbnail?: {
    secure_url?: string;
  };
  featured?: boolean;
  status: string;
}

function isPublishedProject(value: unknown): value is Project {
  if (!value || typeof value !== 'object') return false;

  const project = value as Partial<Project>;

  return (
    typeof project._id === 'string' &&
    typeof project.title === 'string' &&
    project.status === 'published'
  );
}

function ProjectImage({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const src = project.thumbnail?.secure_url;

  return (
    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-slate-100 bg-slate-50">
      {src && !failed ? (
        <Image
          src={src}
          alt={`${project.title} project preview`}
          fill
          onError={() => setFailed(true)}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-contain p-3"
        />
      ) : (
        <div className="flex flex-col items-center gap-3 text-slate-400">
          <ImageIcon aria-hidden="true" className="h-8 w-8" />
          <span className="text-xs">Project preview unavailable</span>
        </div>
      )}

      {project.featured && (
        <span className="absolute left-4 top-4 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-700">
          Featured
        </span>
      )}
    </div>
  );
}

export default function PortfolioSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProjects() {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(`${BASE_URL}/projects`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Projects request failed: ${response.status}`);
        }

        const result = await response.json();

        if (!result.success || !Array.isArray(result.data)) {
          throw new Error('Invalid projects response');
        }

        const published: Project[] = result.data.filter(isPublishedProject);

        setProjects(
          [...published]
            .sort(
              (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
            )
            .slice(0, 6),
        );
      } catch (err) {
        if (!controller.signal.aborted) {
          console.error('Error fetching projects:', err);
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    void fetchProjects();

    return () => controller.abort();
  }, [attempt]);

  if (!loading && !error && projects.length === 0) return null;

  return (
    <section
      id="our-work"
      aria-labelledby="portfolio-heading"
      aria-busy={loading}
      className="scroll-mt-28 border-y border-slate-100 bg-[#FAFAFA] px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E10600]">
              Selected Work
            </p>

            <h2
              id="portfolio-heading"
              className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#111] sm:text-4xl"
            >
              Take a closer look at our work.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              A selection of published projects, with an overview of what
              we worked on.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg py-2 text-sm font-semibold text-[#111] hover:text-[#E10600]"
          >
            All Projects
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        {loading ? (
          <div role="status">
            <span className="sr-only">Loading projects</span>

            <div
              aria-hidden="true"
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <div className="aspect-[16/10] animate-pulse bg-slate-200 motion-reduce:animate-none" />
                  <div className="space-y-3 p-6">
                    <div className="h-5 w-2/3 rounded bg-slate-100" />
                    <div className="h-4 w-1/3 rounded bg-slate-100" />
                    <div className="h-16 rounded bg-slate-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : error ? (
          <div
            role="status"
            className="rounded-2xl border border-slate-200 bg-white p-8 text-center"
          >
            <p className="text-sm text-slate-600">
              We couldn’t load the projects. Please try again.
            </p>

            <button
              type="button"
              onClick={() => setAttempt((value) => value + 1)}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#111] px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              <RefreshCw aria-hidden="true" className="h-4 w-4" />
              Try Again
            </button>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const technologies = Array.isArray(project.technology)
                ? project.technology.filter(
                    (value): value is string => typeof value === 'string',
                  )
                : [];

              return (
                <article
                  key={project._id}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <ProjectImage key={project.thumbnail?.secure_url} project={project} />

                  <div className="flex flex-1 flex-col p-6">
                    {project.clientName && (
                      <p className="text-xs font-medium text-[#E10600]">
                        {project.clientName}
                      </p>
                    )}

                    <h3 className="mt-2 text-lg font-semibold leading-7 text-[#111]">
                      {project.title}
                    </h3>

                    {project.description && (
                      <p className="mt-3 line-clamp-4 text-sm leading-7 text-slate-600">
                        {project.description}
                      </p>
                    )}

                    {technologies.length > 0 && (
                      <div className="mt-auto pt-5">
                        <ul className="flex flex-wrap gap-2">
                          {technologies.slice(0, 3).map((technology, index) => (
                            <li
                              key={`${technology}-${index}`}
                              className="rounded-full bg-slate-100 px-3 py-1 text-[11px] text-slate-600"
                            >
                              {technology}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}