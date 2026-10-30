
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Send, AlertCircle, Loader2 } from 'lucide-react';
// import { BASE_URL } from '@/utils/baseUrl';

// // Service options for dropdown
// const serviceOptions = [
//   { value: '', label: 'Select a service' },
//   { value: 'SEO Services', label: 'SEO Services' },
//   { value: 'Digital Marketing', label: 'Digital Marketing' },
//   { value: 'Web Development', label: 'Web Development' },
//   { value: 'PPC / Paid Marketing', label: 'PPC / Paid Marketing' },
//   { value: 'Content Marketing', label: 'Content Marketing' },
//   { value: 'Social Media Marketing', label: 'Social Media Marketing' },
//   { value: 'Mobile App Development', label: 'Mobile App Development' },
//   { value: 'E-commerce Development', label: 'E-commerce Development' },
//   { value: 'Brand Strategy', label: 'Brand Strategy' },
//   { value: 'Other / Not Sure', label: 'Other / Not Sure' },
// ];

// const initialForm = {
//   name: '',
//   phone: '',
//   selectedService: '',
//   website: '',
//   message: '',
// };

// type QuickProposalFormProps = {
//   title?: string;
//   description?: string;
//   className?: string;
// };

// export default function QuickProposalForm({
//   title = 'Get Your Free Proposal',
//   description = 'Fill out the form below and our team will get back to you within one business day.',
//   className = '',
// }: QuickProposalFormProps) {
//   const router = useRouter();
//   const [form, setForm] = useState(initialForm);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     if (error) setError(null);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(`${BASE_URL}/proposals`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: form.name,
//           phone: form.phone,
//           selectedService: form.selectedService,
//           website: form.website || '',
//           message: form.message,
//           // Same payload shape as the contact page
//           email: '',
//           company: '',
//           budget: '',
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Failed to submit proposal');
//       }

//       // Success -> thank you page par redirect
//       router.push('/thank-you');
//     } catch (err) {
//       setError(
//         err instanceof Error ? err.message : 'Something went wrong. Please try again.'
//       );
//       setLoading(false); // error par button wapas enable karo
//     }
//   };

//   const inputClass =
//     'w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 disabled:opacity-60';
//   const labelClass = 'mb-2 block text-sm font-semibold text-brand';

//   return (
//     <div
//       className={`rounded-3xl border border-border bg-sky p-8 shadow-premium lg:p-10 ${className}`}
//     >
//       <h2 className="text-2xl font-bold text-brand sm:text-3xl">{title}</h2>
//       <p className="mt-3 text-base text-muted-foreground">{description}</p>

//       {/* Error Message */}
//       {error && (
//         <div className="mt-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
//           <AlertCircle className="h-6 w-6 shrink-0 text-red-600" />
//           <p className="text-sm font-semibold text-red-800">{error}</p>
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="mt-8 space-y-5">
//         <div className="grid gap-5 sm:grid-cols-2">
//           <div>
//             <label className={labelClass}>Full Name *</label>
//             <input
//               type="text"
//               name="name"
//               required
//               value={form.name}
//               onChange={handleChange}
//               className={inputClass}
//               placeholder="John Doe"
//               disabled={loading}
//             />
//           </div>
//           <div>
//             <label className={labelClass}>Phone *</label>
//             <input
//               type="tel"
//               name="phone"
//               required
//               value={form.phone}
//               onChange={handleChange}
//               className={inputClass}
//               placeholder="+91 98765 43210"
//               disabled={loading}
//             />
//           </div>
//         </div>

//         <div className="grid gap-5 sm:grid-cols-2">
//           <div>
//             <label className={labelClass}>Service of Interest *</label>
//             <select
//               name="selectedService"
//               required
//               value={form.selectedService}
//               onChange={handleChange}
//               className={inputClass}
//               disabled={loading}
//             >
//               {serviceOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className={labelClass}>Website (optional)</label>
//             <input
//               type="url"
//               name="website"
//               value={form.website}
//               onChange={handleChange}
//               className={inputClass}
//               placeholder="https://yourwebsite.com"
//               disabled={loading}
//             />
//           </div>
//         </div>

//         <div>
//           <label className={labelClass}>Message *</label>
//           <textarea
//             name="message"
//             required
//             rows={4}
//             value={form.message}
//             onChange={handleChange}
//             className={inputClass}
//             placeholder="Tell us about your goals, challenges, and what you're looking to achieve..."
//             disabled={loading}
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="inline-flex w-full items-center justify-center gap-2 bg-brand px-8 py-4 text-base font-semibold text-white shadow-glow transition-all hover:bg-ocean-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
//         >
//           {loading ? (
//             <>
//               <Loader2 className="h-5 w-5 animate-spin" />
//               Sending...
//             </>
//           ) : (
//             <>
//               Send Message
//               <Send className="h-5 w-5" />
//             </>
//           )}
//         </button>

//         <p className="text-xs text-muted-foreground">
//           * Required fields. By submitting this form, you agree to our privacy policy.
//         </p>
//       </form>
//     </div>
//   );
// }

'use client';

import { useId, useRef, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowUpRight,
  AlertCircle,
  Check,
  Loader2,
} from 'lucide-react';
import { BASE_URL } from '@/utils/baseUrl';

const serviceOptions = [
  'SEO Services',
  'Digital Marketing',
  'Web Development',
  'PPC / Paid Marketing',
  'Content Marketing',
  'Social Media Marketing',
  'Mobile App Development',
  'E-commerce Development',
  'Brand Strategy',
  'Other / Not Sure',
];

const initialForm = {
  name: '',
  phone: '',
  selectedService: '',
  website: '',
  message: '',
};

type QuickProposalFormProps = {
  title?: string;
  description?: string;
  className?: string;
  id?: string;
};

export default function QuickProposalForm({
  title = 'Let’s talk about your next move.',
  description = 'Tell us about your business and what you want to improve. Our team will get back to you within one business day.',
  className = '',
  id = 'get-proposal',
}: QuickProposalFormProps) {
  const router = useRouter();
  const fieldId = useId();
  const submitting = useRef(false);

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({ ...previous, [name]: value }));

    if (error) setError(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting.current) return;

    setError(null);

    const name = form.name.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();
    const phoneDigits = phone.replace(/\D/g, '');

    if (!name || !message || !form.selectedService) {
      setError('Please enter your name, select a service and add a message.');
      return;
    }

    if (
      !/^[+\d\s().-]+$/.test(phone) ||
      phoneDigits.length < 7 ||
      phoneDigits.length > 15
    ) {
      setError('Please enter a valid phone number with its country code.');
      return;
    }

    let website = form.website.trim();

    if (website) {
      if (!/^https?:\/\//i.test(website)) {
        website = `https://${website}`;
      }

      try {
        const parsed = new URL(website);

        if (
          !['http:', 'https:'].includes(parsed.protocol) ||
          !parsed.hostname.includes('.')
        ) {
          throw new Error('Invalid website');
        }

        website = parsed.href;
      } catch {
        setError('Please enter a valid website, such as yourwebsite.com.');
        return;
      }
    }

    submitting.current = true;
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/proposals`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          selectedService: form.selectedService,
          website,
          message,
          email: '',
          company: '',
          budget: '',
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || data?.success === false) {
        throw new Error(
          typeof data?.message === 'string'
            ? data.message
            : 'Could not submit your request. Please try again.',
        );
      }

      router.push('/thank-you');
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.',
      );

      submitting.current = false;
      setLoading(false);
    }
  }

  const inputClass =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-[#E10600] focus:outline-none focus:ring-2 focus:ring-red-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:opacity-70';

  const labelClass = 'mb-2 block text-sm font-medium text-slate-800';

  return (
    <section
      id={id}
      aria-labelledby={`${fieldId}-heading`}
      className={`scroll-mt-28 bg-white px-5 py-16 sm:px-8 lg:py-24 ${className}`}
    >
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-[#FAFAFA] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative overflow-hidden bg-[#111] p-7 text-white sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#E10600]/25 blur-[80px]"
          />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
              Get Your Free Proposal
            </p>

            <h2
              id={`${fieldId}-heading`}
              className="mt-5 max-w-sm text-3xl font-medium leading-tight tracking-tight sm:text-4xl"
            >
              {title}
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300 sm:text-base">
              {description}
            </p>

            <div className="mt-8 border-t border-white/15 pt-7">
              <p className="text-sm font-semibold">What happens next?</p>

              <ul className="mt-5 space-y-4">
                {[
                  'We review your business and requirements.',
                  'We discuss your goals and priorities.',
                  'We suggest a scope and next steps.',
                ].map((text) => (
                  <li
                    key={text}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-red-300"
                    />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-10 lg:p-12">
          <h3 className="text-xl font-semibold tracking-tight text-[#111] sm:text-2xl">
            Tell us what you’re working on.
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Fields marked * are required.
          </p>

          {error && (
            <div
              id={`${fieldId}-error`}
              role="alert"
              className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4"
            >
              <AlertCircle
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-red-600"
              />
              <p className="text-sm leading-6 text-red-800">{error}</p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            aria-busy={loading}
            aria-describedby={error ? `${fieldId}-error` : undefined}
            className="mt-6 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor={`${fieldId}-name`} className={labelClass}>
                  Full name *
                </label>

                <input
                  id={`${fieldId}-name`}
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your full name"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor={`${fieldId}-phone`} className={labelClass}>
                  Phone number *
                </label>

                <input
                  id={`${fieldId}-phone`}
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  maxLength={25}
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="+91 98765 43210"
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${fieldId}-service`} className={labelClass}>
                Service of interest *
              </label>

              <select
                id={`${fieldId}-service`}
                name="selectedService"
                required
                value={form.selectedService}
                onChange={handleChange}
                className={inputClass}
                disabled={loading}
              >
                <option value="" disabled>
                  Select a service
                </option>

                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor={`${fieldId}-website`} className={labelClass}>
                Website <span className="font-normal text-slate-500">(optional)</span>
              </label>

              <input
                id={`${fieldId}-website`}
                type="text"
                inputMode="url"
                autoComplete="url"
                name="website"
                maxLength={2048}
                value={form.website}
                onChange={handleChange}
                className={inputClass}
                placeholder="yourwebsite.com"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor={`${fieldId}-message`} className={labelClass}>
                What do you need help with? *
              </label>

              <textarea
                id={`${fieldId}-message`}
                name="message"
                required
                rows={4}
                maxLength={5000}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-y`}
                placeholder="Tell us about your business, your goals and what you need."
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E10600] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#B91C1C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E10600] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2
                    aria-hidden="true"
                    className="h-4 w-4 animate-spin"
                  />
                  Sending Your Request...
                </>
              ) : (
                <>
                  Get My Free Proposal
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </>
              )}
            </button>

            <p className="text-xs leading-5 text-slate-500">
              We’ll use these details to respond to your enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}