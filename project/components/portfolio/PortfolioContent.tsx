

// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { ArrowRight, AlertCircle, FolderOpen, Star } from 'lucide-react';
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
//         <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
//           <div className="container mx-auto px-4">
//             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {[1, 2, 3, 4, 5, 6].map((i) => (
//                 <div key={i} className="animate-pulse border border-slate-200 bg-white shadow-sm">
//                   <div className="h-64 bg-slate-200" />
//                   <div className="space-y-4 p-6">
//                     <div className="h-4 w-3/4 bg-slate-200" />
//                     <div className="h-4 w-1/2 bg-slate-200" />
//                     <div className="h-20 bg-slate-100" />
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
//         <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
//           <div className="container mx-auto px-4 text-center">
//             <div className="mx-auto max-w-md border border-red-200 bg-white p-8 shadow-sm">
//               <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center bg-red-50">
//                 <AlertCircle className="h-6 w-6 text-red-500" />
//               </div>
//               <h2 className="text-xl font-bold text-brand">Something went wrong</h2>
//               <p className="mt-2 text-sm text-slate-500">{error}</p>
//               <button
//                 onClick={() => window.location.reload()}
//                 className="mt-6 inline-flex items-center gap-2 border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
//               >
//                 Try Again
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

//       <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
//         {/* Premium Background: Sharp Box Grid + Mesh Glow */}
//         <div className="pointer-events-none absolute inset-0 z-0">
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:48px_48px] opacity-60" />
//           <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px]" />
//           <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-leaf/5 blur-[120px]" />
//         </div>

//         <div className="container relative z-10 mx-auto px-4">
//           {/* No Projects Message */}
//           {projects.length === 0 ? (
//             <div className="mx-auto max-w-md border border-slate-200 bg-white p-12 text-center shadow-sm">
//               <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center bg-slate-50">
//                 <FolderOpen className="h-6 w-6 text-slate-400" />
//               </div>
//               <h3 className="text-xl font-bold text-brand">No Projects Found</h3>
//               <p className="mt-2 text-sm text-slate-500">No published projects available at the moment. Please check back later.</p>
//             </div>
//           ) : (
//             /* Grid */
//             <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
//               {projects.map((project) => (
//                 <StaggerItem key={project._id}>
//                   <div className="group relative flex h-full flex-col overflow-hidden border border-slate-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:border-slate-900 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                    
//                     {/* Hover Top Accent Line */}
//                     <div className="absolute top-0 left-1/2 z-20 h-1 w-0 -translate-x-1/2 bg-electric transition-all duration-500 group-hover:w-1/2"></div>

//                     {/* Image Container */}
//                     <div className="relative h-64 overflow-hidden">
//                       <Image
//                         src={project.thumbnail?.secure_url || '/placeholder-project.jpg'}
//                         alt={project.title}
//                         fill
//                         className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       />
//                       {/* Cinematic Gradient Overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                      
//                       {/* Featured Badge (Top Right) */}
//                       {project.featured && (
//                         <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-electric px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
//                           <Star className="h-3 w-3 fill-current" />
//                           Featured
//                         </div>
//                       )}

//                       {/* Primary Technology Tag (Top Left) */}
//                       <div className="absolute top-4 left-4 border-l-2 border-white/50 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
//                         {project.technology?.[0] || 'Web Dev'}
//                       </div>

//                       {/* Client & Title (Bottom of Image) */}
//                       <div className="absolute bottom-0 left-0 right-0 p-5">
//                         <p className="text-[11px] font-medium uppercase tracking-wider text-slate-300">
//                           {project.clientName || 'Confidential Client'}
//                         </p>
//                         <h3 className="mt-1 text-xl font-extrabold tracking-tight text-white">
//                           {project.title}
//                         </h3>
//                       </div>
//                     </div>

//                     {/* Content Body */}
//                     <div className="flex flex-1 flex-col p-6">
//                       <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
//                         {project.description}
//                       </p>
                      
//                       {/* Technology Stack Tags */}
//                       {project.technology && project.technology.length > 0 && (
//                         <div className="mt-5 flex flex-wrap gap-2">
//                           {project.technology.slice(0, 3).map((tech, idx) => (
//                             <span
//                               key={idx}
//                               className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                           {project.technology.length > 3 && (
//                             <span className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600">
//                               +{project.technology.length - 3}
//                             </span>
//                           )}
//                         </div>
//                       )}

//                       {/* Footer: Date & CTA */}
//                       <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
//                         {project.completionDate ? (
//                           <span className="text-xs font-medium text-slate-400">
//                             {new Date(project.completionDate).toLocaleDateString('en-US', {
//                               year: 'numeric',
//                               month: 'short',
//                             })}
//                           </span>
//                         ) : (
//                           <span />
//                         )}
//                         <span className="flex items-center gap-2 text-sm font-bold text-brand transition-colors group-hover:text-electric">
//                           View Project
//                           <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                         </span>
//                       </div>
//                     </div>
//                   </div>
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

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AlertCircle, FolderOpen } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import CTABanner from '@/components/common/CTABanner';
import { Stagger, StaggerItem } from '@/components/common/Reveal';
import { BASE_URL } from '@/utils/baseUrl';

// Types based on your API response
interface Project {
  _id: string;
  title: string;
  slug: string;
  clientName: string;
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

export default function PortfolioContent() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/projects`);
        const result = await response.json();

        if (result.success) {
          const publishedProjects = result.data.filter(
            (project: Project) => project.status === 'published'
          );
          setProjects(publishedProjects);
        } else {
          setError('Failed to fetch projects');
        }
      } catch (err) {
        setError('Error fetching projects');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Loading state
  if (loading) {
    return (
      <>
        <PageHero
          breadcrumb="Portfolio"
          title="Our Work Speaks for Itself"
          description="Explore a selection of brands we have helped grow through data-driven digital marketing. From startups to enterprises, the results speak."
          image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
        />
        <section className="bg-white py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse bg-white">
                  <div className="h-64 bg-slate-100" />
                  <div className="space-y-3 p-6">
                    <div className="h-4 w-2/3 bg-slate-100" />
                    <div className="h-3 w-1/3 bg-slate-100" />
                    <div className="h-12 bg-slate-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTABanner />
      </>
    );
  }

  // Error state
  if (error) {
    return (
      <>
        <PageHero
          breadcrumb="Portfolio"
          title="Our Work Speaks for Itself"
          description="Explore a selection of brands we have helped grow through data-driven digital marketing. From startups to enterprises, the results speak."
          image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
        />
        <section className="bg-white py-20 lg:py-28">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-md border border-slate-200 p-8">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-red-200 bg-red-50">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-xl font-bold text-brand">Something went wrong</h2>
              <p className="mt-2 text-sm text-slate-500">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-6 border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Try again
              </button>
            </div>
          </div>
        </section>
        <CTABanner />
      </>
    );
  }

  return (
    <>
      <PageHero
        breadcrumb="Portfolio"
        title="Our Work Speaks for Itself"
        description="Explore a selection of brands we have helped grow through data-driven digital marketing. From startups to enterprises, the results speak."
        image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          {/* No Projects Message */}
          {projects.length === 0 ? (
            <div className="mx-auto max-w-md border border-slate-200 p-12 text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-slate-200">
                <FolderOpen className="h-6 w-6 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-brand">No projects found</h3>
              <p className="mt-2 text-sm text-slate-500">No published projects available at the moment. Please check back later.</p>
            </div>
          ) : (
            /* Grid: a single shared hairline border, like a printed contact sheet rather than stacked cards */
            <Stagger
              className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3"
              stagger={0.06}
            >
              {projects.map((project, idx) => (
                <StaggerItem key={project._id}>
                  <Link
                    href={project.slug ? `/our-work/portfolio/${project.slug}` : '#'}
                    className="group relative flex h-full flex-col bg-white transition-colors duration-300 hover:bg-slate-50"
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden bg-slate-100">
                      <Image
                        src={project.thumbnail?.secure_url || '/placeholder-project.jpg'}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {project.featured && (
                        <div className="absolute top-4 right-4 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-900">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-lg font-bold leading-snug text-brand">
                          {project.title}
                        </h3>
                        <span className="shrink-0 text-xs text-slate-400">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-slate-500">
                        {project.clientName || 'Confidential client'}
                      </p>

                      <p className="mt-4 text-sm leading-relaxed text-slate-600 line-clamp-3">
                        {project.description}
                      </p>

                      {project.technology && project.technology.length > 0 && (
                        <p className="mt-4 text-xs text-slate-400">
                          {project.technology.slice(0, 3).join(', ')}
                          {project.technology.length > 3 && `, +${project.technology.length - 3} more`}
                        </p>
                      )}

                      {project.completionDate && (
                        <div className="mt-auto border-t border-slate-100 pt-4 text-xs text-slate-400">
                          Completed{' '}
                          {new Date(project.completionDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                          })}
                        </div>
                      )}
                    </div>

                    {/* Subtle state indicator instead of an arrow CTA */}
                    <div className="absolute inset-y-0 left-0 w-0.5 bg-slate-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}