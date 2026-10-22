import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You | DigitalKeddy',
  description: 'Thanks for contacting DigitalKeddy. We will get back to you shortly.',
  robots: { index: false, follow: false }, // thank-you page Google me index nahi hona chahiye
};

export default function ThankYouPage() {
  return (
    <main className="min-h-[90vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
          ✓
        </div>
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Thank You!</h1>
        <p className="mb-8 text-gray-600">
          Aapka message mil gaya hai. Hamari team 24 ghante ke andar aapse
          contact karegi aur aapka free marketing proposal share karegi.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}