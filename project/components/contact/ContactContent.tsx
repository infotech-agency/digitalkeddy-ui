// 'use client';

// import { useState } from 'react';
// import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
// import PageHero from '@/components/common/PageHero';
// import SectionHeading from '@/components/common/SectionHeading';
// import FAQAccordion from '@/components/common/FAQAccordion';
// import CTABanner from '@/components/common/CTABanner';
// import { Reveal } from '@/components/common/Reveal';
// import { siteConfig, contactFaqs } from '@/lib/site-data';

// export default function ContactContent() {
//   const [submitted, setSubmitted] = useState(false);
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     company: '',
//     phone: '',
//     service: '',
//     message: '',
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setForm({ name: '', email: '', company: '', phone: '', service: '', message: '' });
//     setTimeout(() => setSubmitted(false), 5000);
//   };

//   return (
//     <>
//       <PageHero
//         breadcrumb="Contact"
//         title="Let's Build Your Growth Story"
//         description="Get a free, no-obligation proposal tailored to your goals. Our team will audit your current presence and build a roadmap to measurable growth — within 5 business days."
//         image="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
//       />

//       {/* Contact Form + Details */}
//       <section className="bg-white py-20 lg:py-28">
//         <div className="container mx-auto px-4">
//           <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
//             {/* Form */}
//             <Reveal direction="right">
//               <div className="rounded-3xl border border-border bg-sky p-8 shadow-premium lg:p-10">
//                 <h2 className="text-2xl font-bold text-brand sm:text-3xl">
//                   Get Your Free Proposal
//                 </h2>
//                 <p className="mt-3 text-base text-muted-foreground">
//                   Fill out the form below and our team will get back to you within
//                   one business day.
//                 </p>

//                 {submitted && (
//                   <div className="mt-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
//                     <CheckCircle2 className="h-6 w-6 text-green-600" />
//                     <p className="text-sm font-semibold text-green-800">
//                       Thank you! Your message has been sent. We will be in touch shortly.
//                     </p>
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit} className="mt-8 space-y-5">
//                   <div className="grid gap-5 sm:grid-cols-2">
//                     <div>
//                       <label className="mb-2 block text-sm font-semibold text-brand">
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         required
//                         value={form.name}
//                         onChange={handleChange}
//                         className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20"
//                         placeholder="John Doe"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-sm font-semibold text-brand">
//                         Email *
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         required
//                         value={form.email}
//                         onChange={handleChange}
//                         className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20"
//                         placeholder="john@company.com"
//                       />
//                     </div>
//                   </div>
//                   <div className="grid gap-5 sm:grid-cols-2">
//                     <div>
//                       <label className="mb-2 block text-sm font-semibold text-brand">
//                         Company
//                       </label>
//                       <input
//                         type="text"
//                         name="company"
//                         value={form.company}
//                         onChange={handleChange}
//                         className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20"
//                         placeholder="Your Company"
//                       />
//                     </div>
//                     <div>
//                       <label className="mb-2 block text-sm font-semibold text-brand">
//                         Phone
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={form.phone}
//                         onChange={handleChange}
//                         className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20"
//                         placeholder="+91 98765 43210"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="mb-2 block text-sm font-semibold text-brand">
//                       Service of Interest
//                     </label>
//                     <select
//                       name="service"
//                       value={form.service}
//                       onChange={handleChange}
//                       className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20"
//                     >
//                       <option value="">Select a service</option>
//                       <option value="seo">SEO Services</option>
//                       <option value="digital-marketing">Digital Marketing</option>
//                       <option value="web-development">Web Development</option>
//                       <option value="ppc">PPC / Paid Marketing</option>
//                       <option value="content-marketing">Content Marketing</option>
//                       <option value="social-media">Social Media Marketing</option>
//                       <option value="other">Other / Not Sure</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="mb-2 block text-sm font-semibold text-brand">
//                       Message *
//                     </label>
//                     <textarea
//                       name="message"
//                       required
//                       rows={4}
//                       value={form.message}
//                       onChange={handleChange}
//                       className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20"
//                       placeholder="Tell us about your goals..."
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="inline-flex w-full items-center justify-center gap-2 bg-ocean px-8 py-4 text-base font-semibold text-white shadow-glow transition-all hover:bg-ocean-dark sm:w-auto"
//                   >
//                     Send Message
//                     <Send className="h-5 w-5" />
//                   </button>
//                 </form>
//               </div>
//             </Reveal>

//             {/* Contact Details */}
//             <Reveal direction="left">
//               <div className="space-y-6">
//                 <div className="rounded-2xl border border-border bg-white p-7 shadow-premium">
//                   <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary-soft text-electric">
//                     <Mail className="h-7 w-7" />
//                   </div>
//                   <h3 className="text-lg font-bold text-brand">Email Us</h3>
//                   <p className="mt-2 text-sm text-muted-foreground">
//                     For proposals, partnerships, and general inquiries.
//                   </p>
//                   <a
//                     href={`mailto:${siteConfig.email}`}
//                     className="mt-3 block text-base font-semibold text-electric hover:underline"
//                   >
//                     {siteConfig.email}
//                   </a>
//                 </div>

//                 <div className="rounded-2xl border border-border bg-white p-7 shadow-premium">
//                   <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary-soft text-electric">
//                     <Phone className="h-7 w-7" />
//                   </div>
//                   <h3 className="text-lg font-bold text-brand">Call Us</h3>
//                   <p className="mt-2 text-sm text-muted-foreground">
//                     Mon–Fri, 9:00 AM – 7:00 PM IST
//                   </p>
//                   <a
//                     href={`tel:${siteConfig.phone}`}
//                     className="mt-3 block text-base font-semibold text-electric hover:underline"
//                   >
//                     {siteConfig.phone}
//                   </a>
//                 </div>

//                 <div className="rounded-2xl border border-border bg-white p-7 shadow-premium">
//                   <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary-soft text-electric">
//                     <MapPin className="h-7 w-7" />
//                   </div>
//                   <h3 className="text-lg font-bold text-brand">Visit Us</h3>
//                   <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//                     {siteConfig.address}
//                   </p>
//                 </div>

//                 <div className="rounded-2xl border border-border bg-brand p-7 shadow-premium">
//                   <div className="mb-3 flex items-center gap-3">
//                     <Clock className="h-6 w-6 text-electric" />
//                     <h3 className="text-lg font-bold text-white">Response Time</h3>
//                   </div>
//                   <p className="text-sm text-sky/80">
//                     We respond to all inquiries within one business day. For urgent
//                     matters, call us directly.
//                   </p>
//                 </div>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* Map Placeholder */}
//       <section className="bg-sky py-12">
//         <div className="container mx-auto px-4">
//           <Reveal>
//             <div className="relative h-96 overflow-hidden rounded-3xl border border-border shadow-premium-lg">
//               <div className="flex h-full items-center justify-center bg-gradient-to-br from-brand to-electric">
//                 <div className="text-center">
//                   <MapPin className="mx-auto h-16 w-16 text-white/80" />
//                   <h3 className="mt-4 text-2xl font-bold text-white">
//                     {siteConfig.name}
//                   </h3>
//                   <p className="mt-2 max-w-md text-sky/80">
//                     {siteConfig.address}
//                   </p>
//                   <a
//                     href="https://maps.google.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-4 inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-brand transition-all hover:bg-sky"
//                   >
//                     <MapPin className="h-4 w-4" />
//                     Open in Google Maps
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="bg-white py-20 lg:py-28">
//         <div className="container mx-auto px-4">
//           <SectionHeading
//             eyebrow="FAQ"
//             title="Contact FAQs"
//             description="Quick answers to common questions about getting started withDigitalKeddy."
//           />
//           <div className="mt-14">
//             <FAQAccordion items={contactFaqs} />
//           </div>
//         </div>
//       </section>

//       <CTABanner />
//     </>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, AlertCircle, Loader2 } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import FAQAccordion from '@/components/common/FAQAccordion';
import CTABanner from '@/components/common/CTABanner';
import { Reveal } from '@/components/common/Reveal';
import { siteConfig, contactFaqs } from '@/lib/site-data';
import { BASE_URL } from '@/utils/baseUrl';
import { getWebsiteSettings } from '@/lib/settings';

// API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

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

// Budget options for dropdown
const budgetOptions = [
  { value: '', label: 'Select your budget range' },
  { value: 'Under ₹5,000', label: 'Under ₹5,000' },
  { value: '₹5,000 - ₹10,000', label: '₹5,000 - ₹10,000' },
  { value: '₹10,000 - ₹25,000', label: '₹10,000 - ₹25,000' },
  { value: '₹25,000 - ₹50,000', label: '₹25,000 - ₹50,000' },
  { value: '₹50,000 - ₹100,000', label: '₹50,000 - ₹100,000' },
  { value: '₹100,000+', label: '₹100,000+' },
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [information,setInformation] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    selectedService: '',
    budget: '',
    website: '',
    message: '',
  });


  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const contactInfo = await getWebsiteSettings();
        setInformation(contactInfo);
      } catch (error) {
        console.error("Failed to fetch settings:", error);
      }
    };
  
    fetchInfo();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Prepare data for API
      const formData = {
        name: form.name,
        email: form.email,
        phone: form.phone || '',
        company: form.company || '',
        selectedService: form.selectedService || '',
        budget: form.budget || '',
        website: form.website || '',
        message: form.message || '',
      };

      const response = await fetch(`${BASE_URL}/proposals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit proposal');
      }

      // Success
      setSubmitted(true);
      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        selectedService: '',
        budget: '',
        website: '',
        message: '',
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        title="Let's Build Your Growth Story"
        description="Get a free, no-obligation proposal tailored to your goals. Our team will audit your current presence and build a roadmap to measurable growth — within 5 business days."
        image="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
      />

      {/* Contact Form + Details */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            {/* Form */}
            <Reveal direction="right">
              <div className="rounded-3xl border border-border bg-sky p-8 shadow-premium lg:p-10">
                <h2 className="text-2xl font-bold text-brand sm:text-3xl">
                  Get Your Free Proposal
                </h2>
                <p className="mt-3 text-base text-muted-foreground">
                  Fill out the form below and our team will get back to you within
                  one business day.
                </p>

                {/* Success Message */}
                {submitted && (
                  <div className="mt-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="text-sm font-semibold text-green-800">
                        Thank you! Your proposal request has been sent successfully.
                      </p>
                      <p className="text-xs text-green-700">
                        We will get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="mt-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                    <p className="text-sm font-semibold text-red-800">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-brand">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 disabled:opacity-60"
                        placeholder="John Doe"
                        disabled={loading}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-brand">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 disabled:opacity-60"
                        placeholder="john@company.com"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-brand">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 disabled:opacity-60"
                        placeholder="+91 98765 43210"
                        disabled={loading}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-brand">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 disabled:opacity-60"
                        placeholder="Connor Industries"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-brand">
                        Service of Interest *
                      </label>
                      <select
                        name="selectedService"
                        required
                        value={form.selectedService}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 disabled:opacity-60"
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
                      <label className="mb-2 block text-sm font-semibold text-brand">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 disabled:opacity-60"
                        disabled={loading}
                      >
                        {budgetOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-brand">
                      Website (optional)
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={form.website}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 disabled:opacity-60"
                      placeholder="https://yourwebsite.com"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-brand">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 disabled:opacity-60"
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
            </Reveal>

            {/* Contact Details */}
            <Reveal direction="left">
              <div className="space-y-6">
                <div className="rounded-2xl border border-border bg-white p-7 shadow-premium">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary-soft text-electric">
                    <Mail className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-brand">Email Us</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    For proposals, partnerships, and general inquiries.
                  </p>
                  <a
                    href={`mailto:${information?.email}`}
                    className="mt-3 block text-base font-semibold text-electric hover:underline"
                  >
                    {information?.email}
                  </a>
                </div>

                <div className="rounded-2xl border border-border bg-white p-7 shadow-premium">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary-soft text-electric">
                    <Phone className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-brand">Call Us</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Mon–Fri, 10:00 AM – 7:00 PM IST
                  </p>
                  <a
                    href={`tel:${information?.phone}`}
                    className="mt-3 block text-base font-semibold text-electric hover:underline"
                  >
                    {information?.phone}
                  </a>
                </div>

                {/* <div className="rounded-2xl border border-border bg-white p-7 shadow-premium">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary-soft text-electric">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-brand">Visit Us</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {information?.address}
                  </p>
                </div> */}
                <div className="rounded-2xl border border-border bg-white p-7 shadow-premium">
  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary-soft text-electric">
    <MapPin className="h-7 w-7" />
  </div>

  <h3 className="text-lg font-bold text-brand">Visit Us</h3>

  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
    {information?.address}
  </p>

  <div className="mt-6 overflow-hidden rounded-xl border">
    <iframe
      src={information?.googleMap}
      width="100%"
      height="250"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="border-0"
    />
  </div>
</div>
                <div className="rounded-2xl border border-border bg-brand p-7 shadow-premium">
                  <div className="mb-3 flex items-center gap-3">
                    <Clock className="h-6 w-6 text-electric" />
                    <h3 className="text-lg font-bold text-white">Response Time</h3>
                  </div>
                  <p className="text-sm text-sky/80">
                    We respond to all inquiries within one business day. For urgent
                    matters, call us directly.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
   

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="FAQ"
            title="Contact FAQs"
            description="Quick answers to common questions about getting started with DigitalKeddy."
          />
          <div className="mt-14">
            <FAQAccordion items={contactFaqs} />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}