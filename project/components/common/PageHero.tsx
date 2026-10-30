import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/common/Reveal';
import ContactForm from '../layout/Form';

interface PageHeroProps {
  breadcrumb: string;
  title: string;
  description: string;
  image: string;
}

export default function PageHero({
  breadcrumb,
  title,
  description,
  image,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand pt-36 pb-20 lg:pt-48 lg:pb-28">
      
      <div className="container relative mx-auto px-4">
  <div className="grid items-center gap-12 lg:grid-cols-12">
    {/* Left Content */}
    <Reveal direction="up" className="lg:col-span-7">
      <nav className="mb-6 flex items-center gap-2 text-sm text-sky/60">
        <Link href="/" className="transition-colors hover:text-sky">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-sky">{breadcrumb}</span>
      </nav>

      <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sky/80">
        {description}
      </p>
    </Reveal>

    {/* Right Form */}
    <Reveal direction="left" className="lg:col-span-5">
      <div className="mx-auto w-full max-w-md lg:ml-auto">
        <ContactForm />
      </div>
    </Reveal>
  </div>
</div>
    </section>
  );
}
