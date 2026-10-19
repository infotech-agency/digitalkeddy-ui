import type { Metadata } from 'next';
import BlogsContent from '@/components/blogs/BlogsContent';

export const metadata: Metadata = {
  title: 'Blog | Digital Marketing Insights & Strategies',
  description:
    'Actionable digital marketing insights, SEO tips, PPC strategies, and industry trends from the DigitalKeddy team.',
  alternates: { canonical: '/blogs' },
};

export default function BlogsPage() {
  return <BlogsContent />;
}
