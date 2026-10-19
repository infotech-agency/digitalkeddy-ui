import type { Metadata } from 'next';
import CareersContent from '@/components/careers/CareersContent';

export const metadata: Metadata = {
  title: 'Careers | Join the DigitalKeddy Team',
  description:
    'Build your career at DigitalKeddy. We are hiring digital marketers, SEO specialists, developers, and designers.',
  alternates: { canonical: '/careers' },
};

export default function CareersPage() {
  return <CareersContent />;
}
