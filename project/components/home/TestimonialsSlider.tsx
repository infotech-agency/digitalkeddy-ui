// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay, Navigation } from 'swiper/modules';
// import { Star, Quote } from 'lucide-react';
// import SectionHeading from '@/components/common/SectionHeading';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { BASE_URL } from '@/utils/baseUrl';

// interface Testimonial {
//   _id: string;
//   clientName: string;
//   company: string;
//   photo: {
//     public_id: string;
//     secure_url: string;
//   };
//   review: string;
//   starRating: number;
//   videoUrl?: string;
//   featured: boolean;
//   createdAt: string;
//   updatedAt: string;
// }

// interface ApiResponse {
//   success: boolean;
//   message: string;
//   data: Testimonial[];
//   meta: {
//     total: number;
//     page: number;
//     limit: number;
//     pages: number;
//   };
// }

// /** Accent color (cards, quote badge, nav arrows) */
// const RED = '#E10600';

// /** Section background — red gradient */
// const SECTION_BG = {
//   backgroundImage:
//     'linear-gradient(135deg, #E10600 0%, #B91C1C 45%, #4A0300 100%)',
// };

// export default function TestimonialsSlider() {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/testimonials`);
//         if (!response.ok) throw new Error('Failed to fetch testimonials');
//         const data: ApiResponse = await response.json();
//         setTestimonials(data.data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'An error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTestimonials();
//   }, []);

//   if (loading) {
//     return (
//       <section style={SECTION_BG} className="relative overflow-hidden py-20 lg:py-28">
//         <div className="container relative mx-auto px-4">
//           <div className="flex items-center justify-center py-20">
//             <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section style={SECTION_BG} className="relative overflow-hidden py-20 lg:py-28">
//         <div className="container relative mx-auto px-4">
//           <div className="rounded-lg border border-white/30 bg-white/10 p-4 text-center text-white">
//             <p>Error loading testimonials: {error}</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (testimonials.length === 0) {
//     return (
//       <section style={SECTION_BG} className="relative overflow-hidden py-20 lg:py-28">
//         <div className="container relative mx-auto px-4">
//           <div className="text-center text-white/70">
//             <p>No testimonials available yet.</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section style={SECTION_BG} className="relative overflow-hidden py-20 lg:py-28">
//       <div className="container relative z-10 mx-auto px-4">
//         <SectionHeading
//           dark
//           title="What Our Clients Say"
//           description="We measure our success by our clients' success. Here is what they have to say about working with DigitalKeddy."
//         />

//         {/* Custom swiper CSS (white bullets on red bg, red arrows on white buttons) */}
//         <style jsx global>{`
//           .testimonials-swiper .swiper-pagination-bullet {
//             width: 10px;
//             height: 10px;
//             background: rgba(255, 255, 255, 0.4);
//             opacity: 1;
//             transition: all 0.3s ease;
//           }
//           .testimonials-swiper .swiper-pagination-bullet:hover {
//             background: rgba(255, 255, 255, 0.7);
//           }
//           .testimonials-swiper .swiper-pagination-bullet-active {
//             background: #ffffff;
//             width: 28px;
//             border-radius: 9999px;
//           }
//           .testimonials-swiper .swiper-button-next,
//           .testimonials-swiper .swiper-button-prev {
//             width: 44px;
//             height: 44px;
//             border-radius: 9999px;
//             background: #ffffff;
//             color: ${RED};
//             box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.25);
//             transition: all 0.3s ease;
//           }
//           .testimonials-swiper .swiper-button-next:hover,
//           .testimonials-swiper .swiper-button-prev:hover {
//             background: #0a0a0a;
//             color: #ffffff;
//             transform: scale(1.05);
//           }
//           .testimonials-swiper .swiper-button-next::after,
//           .testimonials-swiper .swiper-button-prev::after {
//             font-size: 16px;
//             font-weight: 700;
//           }
//         `}</style>

//         <div className="mt-14">
//           <Swiper
//             modules={[Pagination, Autoplay, Navigation]}
//             spaceBetween={24}
//             slidesPerView={1}
//             pagination={{ clickable: true }}
//             navigation
//             autoplay={{ delay: 5000, disableOnInteraction: false }}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             className="testimonials-swiper pb-20"
//           >
//             {testimonials.map((testimonial) => (
//               <SwiperSlide key={testimonial._id} className="!h-auto !overflow-visible">
//                 <div className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 pt-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#E10600]/30 hover:shadow-[0_20px_45px_-15px_rgba(225,6,0,0.35)]">

//                   {/* Top accent bar */}
//                   <span className="absolute left-0 top-0 h-1 w-0 rounded-tl-2xl bg-[#E10600] transition-all duration-500 group-hover:w-full" />

//                   {/* Quote badge — red */}
//                   <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#E10600] shadow-lg shadow-[#E10600]/30">
//                     <Quote className="h-5 w-5 text-white" />
//                   </div>

//                   {/* Stars */}
//                   <div className="mb-4 flex gap-1 pr-12">
//                     {[...Array(testimonial.starRating)].map((_, j) => (
//                       <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                     ))}
//                   </div>

//                   {/* Review */}
//                   <p className="flex-1 text-base leading-relaxed text-slate-700">
//                     “{testimonial.review}”
//                   </p>

//                   {/* Divider */}
//                   <div className="my-6 h-px w-full bg-slate-100" />

//                   {/* Author */}
//                   <div className="flex items-center gap-4">
//                     <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-[#E10600]/20 ring-offset-2 ring-offset-white transition-all duration-500 group-hover:ring-[#E10600]/60">
//                       <Image
//                         src={testimonial.photo?.secure_url || "https://static.vecteezy.com/system/resources/previews/021/548/095/non_2x/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"}
//                         alt={testimonial.clientName}
//                         fill
//                         className="object-cover"
//                         sizes="56px"
//                       />
//                     </div>
//                     <div className="min-w-0">
//                       <p className="truncate font-semibold text-slate-900">
//                         {testimonial.clientName}
//                       </p>
//                       <p className="truncate text-sm text-slate-500">
//                         {testimonial.company}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Video link */}
//                   {testimonial.videoUrl && (
//                     <a
//                       href={testimonial.videoUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#E10600] transition-colors hover:text-[#E10600]/80"
//                     >
//                       <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E10600]/10">
//                         ▶
//                       </span>
//                       Watch Video Testimonial
//                     </a>
//                   )}
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Star,
} from 'lucide-react';
import { BASE_URL } from '@/utils/baseUrl';

interface Testimonial {
  _id: string;
  clientName: string;
  company?: string;
  review: string;
  starRating?: number;
  photo?: {
    secure_url?: string;
  };
  videoUrl?: string;
}

function isTestimonial(value: unknown): value is Testimonial {
  if (!value || typeof value !== 'object') return false;

  const item = value as Partial<Testimonial>;

  return (
    typeof item._id === 'string' &&
    typeof item.clientName === 'string' &&
    item.clientName.trim().length > 0 &&
    typeof item.review === 'string' &&
    item.review.trim().length > 0
  );
}

function safeVideoUrl(value?: string) {
  if (!value) return null;

  try {
    const url = new URL(value);

    return ['https:', 'http:'].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}

function ReviewCard({ item }: { item: Testimonial }) {
  const [imageFailed, setImageFailed] = useState(false);

  const rating =
    typeof item.starRating === 'number' &&
    Number.isFinite(item.starRating)
      ? Math.min(5, Math.max(0, item.starRating))
      : null;

  const initials = item.clientName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase();

  const videoUrl = safeVideoUrl(item.videoUrl);

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-white/15 bg-white p-6 sm:p-7">
      <div className="flex min-h-6 items-center justify-between gap-4">
        {rating !== null ? (
          <div
            role="img"
            aria-label={`${rating} out of 5 stars`}
            className="flex gap-1"
          >
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                aria-hidden="true"
                className={`h-4 w-4 ${
                  index < Math.round(rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-slate-200'
                }`}
              />
            ))}
          </div>
        ) : (
          <span />
        )}

        <Quote aria-hidden="true" className="h-6 w-6 text-red-200" />
      </div>

      <blockquote className="mt-5 flex-1 whitespace-pre-line break-words text-sm leading-7 text-slate-700">
        {item.review}
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-red-50 text-sm font-semibold text-[#E10600]">
          {item.photo?.secure_url && !imageFailed ? (
            <Image
              src={item.photo.secure_url}
              alt=""
              fill
              sizes="44px"
              onError={() => setImageFailed(true)}
              className="object-cover"
            />
          ) : (
            <span aria-hidden="true">{initials}</span>
          )}
        </div>

        <div className="min-w-0">
          <p className="break-words text-sm font-semibold text-[#111]">
            {item.clientName}
          </p>

          {item.company && (
            <p className="mt-1 break-words text-xs text-slate-500">
              {item.company}
            </p>
          )}
        </div>
      </figcaption>

      {videoUrl && (
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-lg py-2 text-sm font-medium text-[#E10600] hover:underline"
        >
          Watch Video Review
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      )}
    </figure>
  );
}

export default function TestimonialsSlider() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const trackRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchTestimonials() {
      try {
        const response = await fetch(`${BASE_URL}/testimonials`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Testimonials request failed: ${response.status}`);
        }

        const result = await response.json();

        if (!result.success || !Array.isArray(result.data)) {
          throw new Error('Invalid testimonials response');
        }

        setTestimonials(result.data.filter(isTestimonial));
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error('Error fetching testimonials:', error);
        }
      }
    }

    void fetchTestimonials();

    return () => controller.abort();
  }, []);

  function scrollReviews(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    const card = track.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 20;
    const distance = (card?.getBoundingClientRect().width ?? 320) + gap;

    track.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });
  }

  if (!testimonials.length) return null;

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-[#111] px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
              Client Feedback
            </p>

            <h2
              id="testimonials-heading"
              className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
            >
              In our clients’ words.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-400">
              Their experience of working with Digital Keddy.
            </p>
          </div>

          {testimonials.length > 1 && (
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => scrollReviews(-1)}
                aria-label="Scroll to previous reviews"
                aria-controls="client-reviews"
                className="rounded-full border border-white/25 p-3 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <ArrowLeft aria-hidden="true" className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => scrollReviews(1)}
                aria-label="Scroll to next reviews"
                aria-controls="client-reviews"
                className="rounded-full border border-white/25 p-3 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        <ul
          id="client-reviews"
          ref={trackRef}
          tabIndex={0}
          aria-label="Client reviews"
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {testimonials.map((item) => (
            <li
              key={item._id}
              className="w-full shrink-0 snap-start md:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
            >
              <ReviewCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}