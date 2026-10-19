// 'use client';

// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay, Navigation } from 'swiper/modules';
// import { Star, Quote, Play } from 'lucide-react';
// import PageHero from '@/components/common/PageHero';
// import SectionHeading from '@/components/common/SectionHeading';
// import CTABanner from '@/components/common/CTABanner';
// import { Stagger, StaggerItem } from '@/components/common/Reveal';
// import { testimonials } from '@/lib/testimonials';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// export default function TestimonialsContent() {
//   const videoTestimonials = testimonials.filter((t) => t.video);

//   return (
//     <>
//       <PageHero
//         breadcrumb="Testimonials"
//         title="Client Stories of Growth"
//         description="We measure our success by our clients' success. Here is what they have to say about partnering withDigitalKeddy."
//         image="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
//       />

//       {/* Video-style testimonials */}
//       <section className="bg-white py-20 lg:py-28">
//         <div className="container mx-auto px-4">
//           <SectionHeading
//             eyebrow="Video Testimonials"
//             title="Hear It from Our Clients"
//             description="Watch our clients share their experience of working withDigitalKeddy."
//           />
//           <Stagger className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.1}>
//             {videoTestimonials.map((t) => (
//               <StaggerItem key={t.name}>
//                 <div className="group relative aspect-video overflow-hidden rounded-2xl border border-border shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
//                   <Image
//                     src={t.image}
//                     alt={t.name}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                     sizes="(max-width: 1024px) 100vw, 33vw"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/40 to-transparent" />
//                   <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 backdrop-blur transition-all group-hover:scale-110 group-hover:bg-electric">
//                     <Play className="h-7 w-7 fill-current text-electric group-hover:text-white" />
//                   </button>
//                   <div className="absolute bottom-0 left-0 right-0 p-5">
//                     <div className="flex gap-1 mb-2">
//                       {[...Array(t.rating)].map((_, j) => (
//                         <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                       ))}
//                     </div>
//                     <p className="font-bold text-white">{t.name}</p>
//                     <p className="text-sm text-sky/80">
//                       {t.role}, {t.company}
//                     </p>
//                   </div>
//                 </div>
//               </StaggerItem>
//             ))}
//           </Stagger>
//         </div>
//       </section>

//       {/* Review slider */}
//       <section className="relative overflow-hidden bg-brand py-20 lg:py-28">
//         <div className="absolute inset-0 bg-grid-dark opacity-20" />
//         <div className="container relative mx-auto px-4">
//           <SectionHeading
//             light
//             eyebrow="Client Reviews"
//             title="What Clients Say About Us"
//             description="Hundreds of brands have trusted us with their growth. Here is a selection of their stories."
//           />
//           <div className="mt-14">
//             <Swiper
//               modules={[Pagination, Autoplay, Navigation]}
//               spaceBetween={24}
//               slidesPerView={1}
//               pagination={{ clickable: true }}
//               navigation
//               autoplay={{ delay: 5000, disableOnInteraction: false }}
//               breakpoints={{
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//               className="pb-16"
//             >
//               {testimonials.map((t, i) => (
//                 <SwiperSlide key={i}>
//                   <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
//                     <div className="mb-4 flex items-center justify-between">
//                       <div className="flex gap-1">
//                         {[...Array(t.rating)].map((_, j) => (
//                           <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                         ))}
//                       </div>
//                       <Quote className="h-8 w-8 text-electric/40" />
//                     </div>
//                     <p className="flex-1 text-base leading-relaxed text-sky/90">
//                       "{t.quote}"
//                     </p>
//                     <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
//                       <div className="relative h-12 w-12 overflow-hidden rounded-full">
//                         <Image
//                           src={t.image}
//                           alt={t.name}
//                           fill
//                           className="object-cover"
//                           sizes="48px"
//                         />
//                       </div>
//                       <div>
//                         <p className="font-semibold text-white">{t.name}</p>
//                         <p className="text-sm text-sky/60">
//                           {t.role}, {t.company}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </section>

//       <CTABanner />
//     </>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import CTABanner from '@/components/common/CTABanner';
import { Stagger, StaggerItem } from '@/components/common/Reveal';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { BASE_URL } from '@/utils/baseUrl';

// Types based on your API response
interface Testimonial {
  _id: string;
  clientName: string;
  company: string;
  photo: {
    public_id: string;
    secure_url: string;
  };
  review: string;
  starRating: number;
  videoUrl?: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function TestimonialsContent() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/testimonials`);
        const result = await response.json();
        
        if (result.success) {
          setTestimonials(result.data);
        } else {
          setError('Failed to fetch testimonials');
        }
      } catch (err) {
        setError('Error fetching testimonials');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Loading state
  if (loading) {
    return (
      <>
        <PageHero
          breadcrumb="Testimonials"
          title="Client Stories of Growth"
          description="We measure our success by our clients' success. Here is what they have to say about partnering withDigitalKeddy."
          image="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
        />
        <section className="bg-white py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Client Reviews"
              title="What Clients Say About Us"
              description="Hundreds of brands have trusted us with their growth. Here is a selection of their stories."
            />
            <div className="mt-14">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-64 rounded-2xl bg-gray-200 p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((j) => (
                            <div key={j} className="h-5 w-5 bg-gray-300 rounded" />
                          ))}
                        </div>
                        <div className="h-8 w-8 bg-gray-300 rounded" />
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-300 rounded w-full" />
                        <div className="h-4 bg-gray-300 rounded w-3/4" />
                        <div className="h-4 bg-gray-300 rounded w-5/6" />
                      </div>
                      <div className="mt-6 flex items-center gap-4 pt-5 border-t border-gray-200">
                        <div className="h-12 w-12 bg-gray-300 rounded-full" />
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-300 rounded w-24" />
                          <div className="h-3 bg-gray-300 rounded w-32" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
          breadcrumb="Testimonials"
          title="Client Stories of Growth"
          description="We measure our success by our clients' success. Here is what they have to say about partnering withDigitalKeddy."
          image="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
        />
        <section className="bg-white py-20 lg:py-28">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-brand mb-2">Something went wrong</h2>
              <p className="text-muted-foreground">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 gradient-primary text-white rounded-lg hover:shadow-lg transition-shadow"
              >
                Try Again
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
        breadcrumb="Testimonials"
        title="Client Stories of Growth"
        description="We measure our success by our clients' success. Here is what they have to say about partnering withDigitalKeddy."
        image="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
      />

      {/* Review slider only - removed video section */}
      <section className="relative overflow-hidden bg-brand py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-dark opacity-20" />
        <div className="container relative mx-auto px-4">
          <SectionHeading
            light
            eyebrow="Client Reviews"
            title="What Clients Say About Us"
            description="Hundreds of brands have trusted us with their growth. Here is a selection of their stories."
          />
          
          {/* No Testimonials Message */}
          {testimonials.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Testimonials Yet</h3>
              <p className="text-sky/60">Be the first to share your experience with us!</p>
            </div>
          ) : (
            <div className="mt-14">
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="pb-16"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial._id}>
                    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex gap-1">
                          {[...Array(testimonial.starRating || 5)].map((_, j) => (
                            <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <Quote className="h-8 w-8 text-electric/40" />
                      </div>
                      <p className="flex-1 text-base leading-relaxed text-sky/90">
                        "{testimonial.review}"
                      </p>
                      <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.photo?.secure_url || '/placeholder-avatar.jpg'}
                            alt={testimonial.clientName}
                            fill
                            className="object-cover"
                            sizes="48px"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/placeholder-avatar.jpg';
                            }}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{testimonial.clientName}</p>
                          <p className="text-sm text-sky/60">
                            {testimonial.company || 'Client'}
                          </p>
                        </div>
                      </div>
                      {/* Optional: Show featured badge */}
                      {testimonial.featured && (
                        <div className="mt-3">
                          <span className="text-xs px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded-full">
                            ⭐ Featured Review
                          </span>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}