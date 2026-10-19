import type { Metadata } from 'next';
import ContactContent from '@/components/contact/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | Get Your Free Marketing Proposal',
  description:
    'Get in touch with DigitalKeddy for a free, no-obligation digital marketing proposal tailored to your business goals.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ContactContent />;
}
