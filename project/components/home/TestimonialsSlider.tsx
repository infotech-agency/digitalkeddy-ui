'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { BASE_URL } from '@/utils/baseUrl';

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
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: Testimonial[];
  meta: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}

/** Accent color (cards, quote badge, nav arrows) */
const RED = '#E10600';

/** Section background — red gradient */
const SECTION_BG = {
  backgroundImage:
    'linear-gradient(135deg, #E10600 0%, #B91C1C 45%, #4A0300 100%)',
};

export default function TestimonialsSlider() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${BASE_URL}/testimonials`);
        if (!response.ok) throw new Error('Failed to fetch testimonials');
        const data: ApiResponse = await response.json();
        setTestimonials(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section style={SECTION_BG} className="relative overflow-hidden py-20 lg:py-28">
        <div className="container relative mx-auto px-4">
          <div className="flex items-center justify-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section style={SECTION_BG} className="relative overflow-hidden py-20 lg:py-28">
        <div className="container relative mx-auto px-4">
          <div className="rounded-lg border border-white/30 bg-white/10 p-4 text-center text-white">
            <p>Error loading testimonials: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section style={SECTION_BG} className="relative overflow-hidden py-20 lg:py-28">
        <div className="container relative mx-auto px-4">
          <div className="text-center text-white/70">
            <p>No testimonials available yet.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={SECTION_BG} className="relative overflow-hidden py-20 lg:py-28">
      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading
          dark
          title="What Our Clients Say"
          description="We measure our success by our clients' success. Here is what they have to say about working with DigitalKeddy."
        />

        {/* Custom swiper CSS (white bullets on red bg, red arrows on white buttons) */}
        <style jsx global>{`
          .testimonials-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: rgba(255, 255, 255, 0.4);
            opacity: 1;
            transition: all 0.3s ease;
          }
          .testimonials-swiper .swiper-pagination-bullet:hover {
            background: rgba(255, 255, 255, 0.7);
          }
          .testimonials-swiper .swiper-pagination-bullet-active {
            background: #ffffff;
            width: 28px;
            border-radius: 9999px;
          }
          .testimonials-swiper .swiper-button-next,
          .testimonials-swiper .swiper-button-prev {
            width: 44px;
            height: 44px;
            border-radius: 9999px;
            background: #ffffff;
            color: ${RED};
            box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.25);
            transition: all 0.3s ease;
          }
          .testimonials-swiper .swiper-button-next:hover,
          .testimonials-swiper .swiper-button-prev:hover {
            background: #0a0a0a;
            color: #ffffff;
            transform: scale(1.05);
          }
          .testimonials-swiper .swiper-button-next::after,
          .testimonials-swiper .swiper-button-prev::after {
            font-size: 16px;
            font-weight: 700;
          }
        `}</style>

        <div className="mt-14">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper pb-20"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial._id} className="!h-auto !overflow-visible">
                <div className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 pt-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#E10600]/30 hover:shadow-[0_20px_45px_-15px_rgba(225,6,0,0.35)]">

                  {/* Top accent bar */}
                  <span className="absolute left-0 top-0 h-1 w-0 rounded-tl-2xl bg-[#E10600] transition-all duration-500 group-hover:w-full" />

                  {/* Quote badge — red */}
                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#E10600] shadow-lg shadow-[#E10600]/30">
                    <Quote className="h-5 w-5 text-white" />
                  </div>

                  {/* Stars */}
                  <div className="mb-4 flex gap-1 pr-12">
                    {[...Array(testimonial.starRating)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="flex-1 text-base leading-relaxed text-slate-700">
                    “{testimonial.review}”
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px w-full bg-slate-100" />

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-[#E10600]/20 ring-offset-2 ring-offset-white transition-all duration-500 group-hover:ring-[#E10600]/60">
                      <Image
                        src={testimonial.photo?.secure_url || "https://static.vecteezy.com/system/resources/previews/021/548/095/non_2x/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"}
                        alt={testimonial.clientName}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-slate-900">
                        {testimonial.clientName}
                      </p>
                      <p className="truncate text-sm text-slate-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Video link */}
                  {testimonial.videoUrl && (
                    <a
                      href={testimonial.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#E10600] transition-colors hover:text-[#E10600]/80"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E10600]/10">
                        ▶
                      </span>
                      Watch Video Testimonial
                    </a>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}