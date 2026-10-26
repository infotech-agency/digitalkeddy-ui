


// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { AlertCircle, FolderOpen } from 'lucide-react';
// import PageHero from '@/components/common/PageHero';
// import CTABanner from '@/components/common/CTABanner';
// import { Stagger, StaggerItem } from '@/components/common/Reveal';
// import { BASE_URL } from '@/utils/baseUrl';

// // Types based on your API response
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

// export default function PortfolioContent() {
//   const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch projects from API
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

//   // Loading state
//   if (loading) {
//     return (
//       <>
//         <PageHero
//           breadcrumb="Portfolio"
//           title="Our Work Speaks for Itself"
//           description="Explore a selection of brands we have helped grow through data-driven digital marketing. From startups to enterprises, the results speak."
//           image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
//         />
//         <section className="bg-white py-20 lg:py-28">
//           <div className="container mx-auto px-4">
//             <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
//               {[1, 2, 3, 4, 5, 6].map((i) => (
//                 <div key={i} className="animate-pulse bg-white">
//                   <div className="h-64 bg-slate-100" />
//                   <div className="space-y-3 p-6">
//                     <div className="h-4 w-2/3 bg-slate-100" />
//                     <div className="h-3 w-1/3 bg-slate-100" />
//                     <div className="h-12 bg-slate-100" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//         <CTABanner />
//       </>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <>
//         <PageHero
//           breadcrumb="Portfolio"
//           title="Our Work Speaks for Itself"
//           description="Explore a selection of brands we have helped grow through data-driven digital marketing. From startups to enterprises, the results speak."
//           image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
//         />
//         <section className="bg-white py-20 lg:py-28">
//           <div className="container mx-auto px-4 text-center">
//             <div className="mx-auto max-w-md border border-slate-200 p-8">
//               <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-red-200 bg-red-50">
//                 <AlertCircle className="h-6 w-6 text-red-500" />
//               </div>
//               <h2 className="text-xl font-bold text-brand">Something went wrong</h2>
//               <p className="mt-2 text-sm text-slate-500">{error}</p>
//               <button
//                 onClick={() => window.location.reload()}
//                 className="mt-6 border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
//               >
//                 Try again
//               </button>
//             </div>
//           </div>
//         </section>
//         <CTABanner />
//       </>
//     );
//   }

//   return (
//     <>
//       <PageHero
//         breadcrumb="Portfolio"
//         title="Our Work Speaks for Itself"
//         description="Explore a selection of brands we have helped grow through data-driven digital marketing. From startups to enterprises, the results speak."
//         image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
//       />

//       <section className="bg-white py-20 lg:py-28">
//         <div className="container mx-auto px-4">
//           {/* No Projects Message */}
//           {projects.length === 0 ? (
//             <div className="mx-auto max-w-md border border-slate-200 p-12 text-center">
//               <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-slate-200">
//                 <FolderOpen className="h-6 w-6 text-slate-400" />
//               </div>
//               <h3 className="text-xl font-bold text-brand">No projects found</h3>
//               <p className="mt-2 text-sm text-slate-500">No published projects available at the moment. Please check back later.</p>
//             </div>
//           ) : (
//             /* Grid: a single shared hairline border, like a printed contact sheet rather than stacked cards */
//             <Stagger
//               className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3"
//               stagger={0.06}
//             >
//               {projects.map((project, idx) => (
//                 <StaggerItem key={project._id}>
//                   <Link
//                     href={project.slug ? `/our-work/portfolio/${project.slug}` : '#'}
//                     className="group relative flex h-full flex-col bg-white transition-colors duration-300 hover:bg-slate-50"
//                   >
//                     {/* Image */}
//                     <div className="relative h-64 overflow-hidden bg-slate-100">
//                       <Image
//                         src={project.thumbnail?.secure_url || '/placeholder-project.jpg'}
//                         alt={project.title}
//                         fill
//                         className="object-cover"
//                         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       />
//                       {project.featured && (
//                         <div className="absolute top-4 right-4 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-900">
//                           Featured
//                         </div>
//                       )}
//                     </div>

//                     {/* Content */}
//                     <div className="flex flex-1 flex-col p-6">
//                       <div className="flex items-baseline justify-between gap-4">
//                         <h3 className="text-lg font-bold leading-snug text-brand">
//                           {project.title}
//                         </h3>
//                         <span className="shrink-0 text-xs text-slate-400">
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
//                           {project.technology.length > 3 && `, +${project.technology.length - 3} more`}
//                         </p>
//                       )}

//                       {project.completionDate && (
//                         <div className="mt-auto border-t border-slate-100 pt-4 text-xs text-slate-400">
//                           Completed{' '}
//                           {new Date(project.completionDate).toLocaleDateString('en-US', {
//                             year: 'numeric',
//                             month: 'short',
//                           })}
//                         </div>
//                       )}
//                     </div>

//                     {/* Subtle state indicator instead of an arrow CTA */}
//                     <div className="absolute inset-y-0 left-0 w-0.5 bg-slate-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                   </Link>
//                 </StaggerItem>
//               ))}
//             </Stagger>
//           )}
//         </div>
//       </section>

//       <CTABanner />
//     </>
//   );
// }


'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { AlertCircle, FolderOpen } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Stagger, StaggerItem } from '@/components/common/Reveal';
import { BASE_URL } from '@/utils/baseUrl';

interface ProjectCategory {
  _id: string;
  name: string;
  slug: string;
  order?: number;
}

interface Project {
  _id: string;
  title: string;
  slug: string;
  industry?: string;
  category?: { _id: string; name: string; slug: string } | null;
  websiteUrl: string;
  technology: string[];
  description: string;
  thumbnail: {
    public_id: string;
    secure_url: string;
  };
  completionDate: string;
  featured: boolean;
  metaTitle: string;
  metaDescription: string;
  status: string;
  gallery: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const HERO = {
  breadcrumb: 'Portfolio',
  title: 'Our Work Speaks for Itself',
  description:
    'Explore a selection of brands we have helped grow through data-driven digital marketing. From startups to enterprises, the results speak.',
  image:
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
};

const GRID = 'grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3';

const tabClass = (active: boolean) =>
  `whitespace-nowrap rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
    active
      ? 'border-[#6BAB44] bg-[#6BAB44] text-white shadow-md'
      : 'border-slate-200 bg-white text-slate-600 hover:border-[#6BAB44]/50 hover:text-[#6BAB44]'
  }`;

const subTabClass = (active: boolean) =>
  `whitespace-nowrap rounded-lg px-4 py-1.5 text-[13px] font-medium transition-colors duration-300 ${
    active
      ? 'bg-slate-900 text-white'
      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
  }`;

export default function PortfolioContent() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<ProjectCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 'all' ya category slug
  const [activeCategory, setActiveCategory] = useState('all');
  // 'all' ya industry key (lowercase)
  const [activeIndustry, setActiveIndustry] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [projRes, catRes] = await Promise.all([
          fetch(`${BASE_URL}/projects?status=published&page=1&limit=200`),
          fetch(`${BASE_URL}/project-categories?status=published`),
        ]);
        const projResult = await projRes.json();
        const catResult = await catRes.json();

        if (projResult.success) {
          setProjects(
            projResult.data.filter((p: Project) => p.status === 'published')
          );
        } else {
          setError('Failed to fetch projects');
        }

        if (catResult.success) {
          setCategories(catResult.data || []);
        }
      } catch (err) {
        setError('Error fetching projects');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Category change hone par industry tab reset
  const handleCategory = (slug: string) => {
    setActiveCategory(slug);
    setActiveIndustry('all');
  };

  // Selected category ke projects
  const categoryProjects = useMemo(
    () =>
      activeCategory === 'all'
        ? projects
        : projects.filter((p) => p.category?.slug === activeCategory),
    [projects, activeCategory]
  );

  // Selected category ki industries (unique, tab ke liye)
  const industries = useMemo(() => {
    const map = new Map<string, string>();
    categoryProjects.forEach((p) => {
      const label = p.industry?.trim();
      if (label) {
        const key = label.toLowerCase();
        if (!map.has(key)) map.set(key, label);
      }
    });
    return Array.from(map, ([key, label]) => ({ key, label })).sort((a, b) =>
      a.label.localeCompare(b.label)
    );
  }, [categoryProjects]);

  // Final list: category + industry dono filter
  const visibleProjects = useMemo(
    () =>
      activeIndustry === 'all'
        ? categoryProjects
        : categoryProjects.filter(
            (p) => p.industry?.trim().toLowerCase() === activeIndustry
          ),
    [categoryProjects, activeIndustry]
  );

  // Loading state
  if (loading) {
    return (
      <>
        <PageHero {...HERO} />
        <section className="bg-slate-50 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className={GRID}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <div className="aspect-[1350/595] bg-slate-100" />
                  <div className="space-y-2 p-5">
                    <div className="h-3 w-1/3 rounded bg-slate-100" />
                    <div className="h-5 w-2/3 rounded bg-slate-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  // Error state
  if (error) {
    return (
      <>
        <PageHero {...HERO} />
        <section className="bg-slate-50 py-20 lg:py-28">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
                <AlertCircle className="h-7 w-7 text-red-500" />
              </div>
              <h2 className="text-xl font-bold text-brand">Something went wrong</h2>
              <p className="mt-2 text-sm text-slate-500">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-6 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Try again
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero {...HERO} />

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          {/* Category tabs */}
          {categories.length > 0 && (
            <div className="mb-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => handleCategory('all')}
                className={tabClass(activeCategory === 'all')}
              >
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c._id}
                  onClick={() => handleCategory(c.slug)}
                  className={tabClass(activeCategory === c.slug)}
                >
                  {c.name}
                </button>
              ))}
            </div>
          )}

          {/* Industry tabs (selected category ki industries) */}
          {industries.length > 0 && (
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveIndustry('all')}
                className={subTabClass(activeIndustry === 'all')}
              >
                All Industries
              </button>
              {industries.map((ind) => (
                <button
                  key={ind.key}
                  onClick={() => setActiveIndustry(ind.key)}
                  className={subTabClass(activeIndustry === ind.key)}
                >
                  {ind.label}
                </button>
              ))}
            </div>
          )}

          {visibleProjects.length === 0 ? (
            <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                <FolderOpen className="h-7 w-7 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-brand">No projects found</h3>
              <p className="mt-2 text-sm text-slate-500">
                No published projects available here at the moment. Please check back later.
              </p>
            </div>
          ) : (
            // key change hone par stagger animation dobara chalti hai
            <Stagger
              key={`${activeCategory}-${activeIndustry}`}
              className={GRID}
              stagger={0.06}
            >
              {visibleProjects.map((project) => (
                <StaggerItem key={project._id} className="h-full">
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_-8px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#6BAB44]/40 hover:shadow-[0_24px_45px_-18px_rgba(107,171,68,0.45)]">
                    {/* Top accent bar — slides in on hover */}
                    <span className="absolute left-0 top-0 z-20 h-1 w-0 bg-[#6BAB44] transition-all duration-500 group-hover:w-full" />

                    {/* Image — locked to 1350x595 ratio, fully filled */}
                    <div className="relative aspect-[1350/595] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={project.thumbnail?.secure_url || '/placeholder-project.jpg'}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {project.featured && (
                        <div className="absolute left-3 top-3 rounded-full bg-[#6BAB44] px-3 py-1 text-[11px] font-semibold text-white shadow-md">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Content — industry name + project title */}
                    <div className="flex flex-1 flex-col gap-1 border-t border-slate-100 px-5 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6BAB44]">
                        {project.industry || project.category?.name || 'Project'}
                      </p>
                      <h3 className="text-lg font-bold leading-snug text-brand transition-colors duration-300 group-hover:text-[#6BAB44]">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </section>
    </>
  );
}