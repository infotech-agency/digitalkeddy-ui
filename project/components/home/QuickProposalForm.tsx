

// 'use client';

// import { useState } from 'react';
// import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
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
//   const [form, setForm] = useState(initialForm);
//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
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

//       setSubmitted(true);
//       setForm(initialForm);
//       // No timeout: the thank-you message stays in place of the form
//     } catch (err) {
//       setError(
//         err instanceof Error ? err.message : 'Something went wrong. Please try again.'
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const inputClass =
//     'w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 disabled:opacity-60';
//   const labelClass = 'mb-2 block text-sm font-semibold text-brand';

//   return (
//     <div
//       className={`rounded-3xl border border-border bg-sky p-8 shadow-premium lg:p-10 ${className}`}
//     >
//       {submitted ? (
//         /* Thank You Message - replaces the whole form */
//         <div className="flex flex-col items-center justify-center py-10 text-center">
//           <CheckCircle2 className="h-16 w-16 text-green-600" />
//           <h2 className="mt-5 text-2xl font-bold text-brand sm:text-3xl">
//             Thank you! Your proposal request has been sent successfully.
//           </h2>
//           <p className="mt-3 text-base text-muted-foreground">
//             We will get back to you within 24 hours.
//           </p>
//         </div>
//       ) : (
//         <>
//           <h2 className="text-2xl font-bold text-brand sm:text-3xl">{title}</h2>
//           <p className="mt-3 text-base text-muted-foreground">{description}</p>

//           {/* Error Message */}
//           {error && (
//             <div className="mt-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
//               <AlertCircle className="h-6 w-6 shrink-0 text-red-600" />
//               <p className="text-sm font-semibold text-red-800">{error}</p>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="mt-8 space-y-5">
//             <div className="grid gap-5 sm:grid-cols-2">
//               <div>
//                 <label className={labelClass}>Full Name *</label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   value={form.name}
//                   onChange={handleChange}
//                   className={inputClass}
//                   placeholder="John Doe"
//                   disabled={loading}
//                 />
//               </div>
//               <div>
//                 <label className={labelClass}>Phone *</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   required
//                   value={form.phone}
//                   onChange={handleChange}
//                   className={inputClass}
//                   placeholder="+91 98765 43210"
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             <div className="grid gap-5 sm:grid-cols-2">
//               <div>
//                 <label className={labelClass}>Service of Interest *</label>
//                 <select
//                   name="selectedService"
//                   required
//                   value={form.selectedService}
//                   onChange={handleChange}
//                   className={inputClass}
//                   disabled={loading}
//                 >
//                   {serviceOptions.map((option) => (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className={labelClass}>Website (optional)</label>
//                 <input
//                   type="url"
//                   name="website"
//                   value={form.website}
//                   onChange={handleChange}
//                   className={inputClass}
//                   placeholder="https://yourwebsite.com"
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             <div>
//               <label className={labelClass}>Message *</label>
//               <textarea
//                 name="message"
//                 required
//                 rows={4}
//                 value={form.message}
//                 onChange={handleChange}
//                 className={inputClass}
//                 placeholder="Tell us about your goals, challenges, and what you're looking to achieve..."
//                 disabled={loading}
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="inline-flex w-full items-center justify-center gap-2 bg-brand px-8 py-4 text-base font-semibold text-white shadow-glow transition-all hover:bg-ocean-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="h-5 w-5 animate-spin" />
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   Send Message
//                   <Send className="h-5 w-5" />
//                 </>
//               )}
//             </button>

//             <p className="text-xs text-muted-foreground">
//               * Required fields. By submitting this form, you agree to our privacy policy.
//             </p>
//           </form>
//         </>
//       )}
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Send, AlertCircle, Loader2 } from 'lucide-react';
import { BASE_URL } from '@/utils/baseUrl';

// Service options for dropdown
const serviceOptions = [
  { value: '', label: 'Select a service' },
  { value: 'SEO Services', label: 'SEO Services' },
  { value: 'Digital Marketing', label: 'Digital Marketing' },
  { value: 'Web Development', label: 'Web Development' },
  { value: 'PPC / Paid Marketing', label: 'PPC / Paid Marketing' },
  { value: 'Content Marketing', label: 'Content Marketing' },
  { value: 'Social Media Marketing', label: 'Social Media Marketing' },
  { value: 'Mobile App Development', label: 'Mobile App Development' },
  { value: 'E-commerce Development', label: 'E-commerce Development' },
  { value: 'Brand Strategy', label: 'Brand Strategy' },
  { value: 'Other / Not Sure', label: 'Other / Not Sure' },
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
};

export default function QuickProposalForm({
  title = 'Get Your Free Proposal',
  description = 'Fill out the form below and our team will get back to you within one business day.',
  className = '',
}: QuickProposalFormProps) {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/proposals`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          selectedService: form.selectedService,
          website: form.website || '',
          message: form.message,
          // Same payload shape as the contact page
          email: '',
          company: '',
          budget: '',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit proposal');
      }

      // Success -> thank you page par redirect
      router.push('/thank-you');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
      setLoading(false); // error par button wapas enable karo
    }
  };

  const inputClass =
    'w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 disabled:opacity-60';
  const labelClass = 'mb-2 block text-sm font-semibold text-brand';

  return (
    <div
      className={`rounded-3xl border border-border bg-sky p-8 shadow-premium lg:p-10 ${className}`}
    >
      <h2 className="text-2xl font-bold text-brand sm:text-3xl">{title}</h2>
      <p className="mt-3 text-base text-muted-foreground">{description}</p>

      {/* Error Message */}
      {error && (
        <div className="mt-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
          <AlertCircle className="h-6 w-6 shrink-0 text-red-600" />
          <p className="text-sm font-semibold text-red-800">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Full Name *</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className={inputClass}
              placeholder="John Doe"
              disabled={loading}
            />
          </div>
          <div>
            <label className={labelClass}>Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
              placeholder="+91 98765 43210"
              disabled={loading}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Service of Interest *</label>
            <select
              name="selectedService"
              required
              value={form.selectedService}
              onChange={handleChange}
              className={inputClass}
              disabled={loading}
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Website (optional)</label>
            <input
              type="url"
              name="website"
              value={form.website}
              onChange={handleChange}
              className={inputClass}
              placeholder="https://yourwebsite.com"
              disabled={loading}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Message *</label>
          <textarea
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={inputClass}
            placeholder="Tell us about your goals, challenges, and what you're looking to achieve..."
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 bg-brand px-8 py-4 text-base font-semibold text-white shadow-glow transition-all hover:bg-ocean-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="h-5 w-5" />
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground">
          * Required fields. By submitting this form, you agree to our privacy policy.
        </p>
      </form>
    </div>
  );
}