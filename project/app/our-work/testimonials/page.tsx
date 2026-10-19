import type { Metadata } from 'next';
import TestimonialsContent from '@/components/portfolio/TestimonialsContent';

export const metadata: Metadata = {
  title: 'Testimonials | What Our Clients Say',
  description:
    'Video and written testimonials from brands who have grown withDigitalKeddy. Real stories, real results.',
  alternates: { canonical: '/our-work/testimonials' },
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}
