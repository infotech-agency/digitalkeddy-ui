


'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  MapPin, Clock, Briefcase, ArrowRight, Send, CheckCircle2, Heart, 
  Zap, TrendingUp, Users, DollarSign, Calendar, FileText, Award, 
  Upload, X, File, Loader2, Phone, Building, Linkedin, Globe, 
  CalendarDays, Wallet 
} from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import CTABanner from '@/components/common/CTABanner';
import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
import HtmlContent from '@/components/common/HtmlContent';
import { BASE_URL } from '@/utils/baseUrl';
// Types based on your API response
interface Career {
  _id: string;
  jobTitle: string;
  slug: string;
  department: string;
  experience: string;
  employmentType: string;
  salary: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  vacancies: number;
  deadline: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const perks = [
  {
    icon: TrendingUp,
    title: 'Growth-Focused',
    description: 'Learning budget, conference passes, and clear career paths.',
  },
  {
    icon: Heart,
    title: 'People-First Culture',
    description: 'Flexible hours, remote options, and genuine work-life balance.',
  },
  {
    icon: Zap,
    title: 'Meaningful Work',
    description: 'Work on real campaigns for real brands — see your impact.',
  },
  {
    icon: Briefcase,
    title: 'Top-Tier Benefits',
    description: 'Health insurance, performance bonuses, and equipment of your choice.',
  },
];

// Allowed file types
const ALLOWED_FILE_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export default function CareersContent() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [applied, setApplied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    experience: '',
    currentCompany: '',
    currentSalary: '',
    expectedSalary: '',
    noticePeriod: '',
    appliedPosition: '', 
    coverLetter: '',
    portfolioUrl: '',
    linkedinUrl: ''
  });

  // Fetch careers from API
  useEffect(() => {
    const fetchCareers = async () => {
      // http://localhost:5000/api/careers
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/careers`);
        const result = await response.json();
        
        if (result.success) {
          const openPositions = result.data.filter(
            (career: Career) => career.status === 'open'
          );
          setCareers(openPositions);
        } else {
          setError('Failed to fetch careers');
        }
      } catch (err) {
        setError('Error fetching careers');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFileError(null);

    if (!selectedFile) {
      setFile(null);
      return;
    }

    // Check file type
    if (!ALLOWED_FILE_TYPES.includes(selectedFile.type)) {
      setFileError('Please upload a PDF or DOC file');
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    // Check file size
    if (selectedFile.size > MAX_FILE_SIZE) {
      setFileError('File size must be less than 5MB');
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setFile(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
    setFileError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate file
    if (!file) {
      setFileError('Please upload your resume (PDF or DOC)');
      return;
    }

    setIsSubmitting(true);
    setFileError(null);

    try {
      // Create FormData for file upload
      const formData = new FormData();
      
      // Append all form fields
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('experience', form.experience);
      formData.append('currentCompany', form.currentCompany);
      formData.append('currentSalary', form.currentSalary);
      formData.append('expectedSalary', form.expectedSalary);
      formData.append('noticePeriod', form.noticePeriod);
      formData.append('appliedPosition', form.appliedPosition);
      formData.append('coverLetter', form.coverLetter);
      formData.append('portfolioUrl', form.portfolioUrl);
      formData.append('linkedinUrl', form.linkedinUrl);
      formData.append('resume', file);

      // Send to your API endpoint
      // http://localhost:5000/api/job-applications
      const response = await fetch(`${BASE_URL}/job-applications`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setApplied(true);
        setForm({ 
          name: '', 
          email: '', 
          phone: '',
          experience: '',
          currentCompany: '',
          currentSalary: '',
          expectedSalary: '',
          noticePeriod: '',
          appliedPosition: '', 
          coverLetter: '',
          portfolioUrl: '',
          linkedinUrl: ''
        });
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
        setTimeout(() => setApplied(false), 5000);
      } else {
        setFileError(result.message || 'Failed to submit application');
      }
    } catch (err) {
      console.error('Submit error:', err);
      setFileError('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to truncate text
  const truncateText = (text: string, maxLength: number = 120) => {
    const plainText = text.replace(/<[^>]*>/g, '');
    if (plainText.length <= maxLength) return plainText;
    return plainText.substring(0, maxLength) + '...';
  };

  // Helper to get employment type badge color
  const getEmploymentTypeColor = (type: string) => {
    const types: { [key: string]: string } = {
      'full-time': 'bg-green-100 text-green-700',
      'part-time': 'bg-blue-100 text-blue-700',
      'contract': 'bg-orange-100 text-orange-700',
      'internship': 'bg-purple-100 text-purple-700',
      'freelance': 'bg-pink-100 text-pink-700',
    };
    return types[type?.toLowerCase()] || 'bg-gray-100 text-gray-700';
  };

  return (
    <>
      <PageHero
        breadcrumb="Careers"
        title="Build Your Career at DigitalKeddy"
        description="We are a team of senior strategists, engineers, and creatives who love what we do. If you are passionate about digital marketing and want to work on meaningful campaigns for real brands, we want to meet you."
        image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
      />

      {/* Why Work With Us - Static */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Why Join Us"
            title="A Place Where You Can Grow"
            description="We invest in our people because our people are our product. Here is what makesDigitalKeddy a great place to build your career."
          />
          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <StaggerItem key={perk.title}>
                  <div className="h-full rounded-2xl border border-border bg-sky p-7 shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold text-brand">{perk.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {perk.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Open Positions - Dynamic from API in Grid */}
      <section className="overflow-x-hidden bg-sky py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Open Positions"
            title="Current Job Openings"
            description="We are always looking for talented people. Even if you do not see a perfect fit, send us your resume — we create roles for exceptional people."
          />
          
          {/* Loading State */}
          {loading && (
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-full rounded-2xl border border-border bg-white p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-24 rounded-full bg-gray-200" />
                        <div className="h-6 w-16 rounded-full bg-gray-200" />
                      </div>
                      <div className="h-6 w-3/4 rounded bg-gray-200" />
                      <div className="space-y-2">
                        <div className="h-4 w-full rounded bg-gray-200" />
                        <div className="h-4 w-5/6 rounded bg-gray-200" />
                        <div className="h-4 w-4/6 rounded bg-gray-200" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <div className="h-6 w-20 rounded-full bg-gray-200" />
                        <div className="h-6 w-24 rounded-full bg-gray-200" />
                        <div className="h-6 w-16 rounded-full bg-gray-200" />
                      </div>
                      <div className="h-10 w-full rounded bg-gray-200" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="mx-auto mt-14 max-w-4xl text-center">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
                <p className="text-red-600">⚠️ {error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 rounded-lg bg-red-600 px-6 py-2 text-white transition-colors hover:bg-red-700"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* No Openings */}
          {!loading && !error && careers.length === 0 && (
            <div className="mx-auto mt-14 max-w-4xl text-center">
              <div className="rounded-2xl border border-border bg-white p-8">
                <div className="mb-4 text-6xl">🔍</div>
                <h3 className="mb-2 text-xl font-bold text-brand">No Open Positions</h3>
                <p className="text-muted-foreground">
                  We don't have any open positions right now, but we're always looking for talented people.
                  Send us your resume and we'll reach out when a fit opens up.
                </p>
              </div>
            </div>
          )}

          {/* Job Listings in Grid */}
          {!loading && !error && careers.length > 0 && (
            <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" stagger={0.06}>
              {careers.map((job) => (
                <StaggerItem key={job._id}>
                  <div className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-premium transition-all hover:-translate-y-2 hover:border-electric/30 hover:shadow-premium-lg">
                    {/* Header with badges */}
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-gradient-primary-soft px-3 py-1 text-xs font-semibold text-electric">
                        {job.department}
                      </span>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getEmploymentTypeColor(job.employmentType)}`}>
                        {job.employmentType}
                      </span>
                      {job.vacancies > 1 && (
                        <span className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                          <Users className="h-3 w-3 flex-shrink-0" />
                          {job.vacancies}
                        </span>
                      )}
                    </div>

                    {/* Job Title */}
                    <h3 className="mb-2 break-words text-lg font-bold text-brand transition-colors line-clamp-2 group-hover:text-electric">
                      {job.jobTitle}
                    </h3>

                    {/* Description with HtmlContent */}
                    {job.description && (
                      <div className="mb-4 flex-1 overflow-hidden break-words text-sm text-muted-foreground line-clamp-3">
                        <HtmlContent 
                          html={job.description} 
                          className="prose prose-sm max-w-none break-words prose-p:mb-1"
                        />
                      </div>
                    )}

                    {/* Job Details */}
                    <div className="mb-4 space-y-2">
                      <div className="flex min-w-0 items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span className="min-w-0 truncate">{job.location}</span>
                      </div>
                      <div className="flex min-w-0 items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="h-4 w-4 flex-shrink-0" />
                        <span className="min-w-0 truncate">{job.experience}</span>
                      </div>
                      {job.salary && (
                        <div className="flex min-w-0 items-center gap-2 text-sm text-muted-foreground">
                          {/* <DollarSign className="h-4 w-4 flex-shrink-0" /> */}
                          ₹
                          <span className="min-w-0 truncate font-semibold text-green-600">{job.salary}</span>
                        </div>
                      )}
                      {job.deadline && (
                        <div className="flex min-w-0 items-center gap-2 text-xs text-orange-600">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span className="min-w-0 truncate">Apply by: {new Date(job.deadline).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}</span>
                        </div>
                      )}
                    </div>

                    {/* Requirements Preview */}
                    {job.requirements && job.requirements.length > 0 && (
                      <div className="mb-4">
                        <div className="mb-1 flex items-center gap-1 text-xs font-semibold text-brand">
                          <FileText className="h-3 w-3 flex-shrink-0" />
                          <span>Requirements:</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {job.requirements.slice(0, 2).map((req, idx) => (
                            <span key={idx} className="max-w-full truncate rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                              {req}
                            </span>
                          ))}
                          {job.requirements.length > 2 && (
                            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                              +{job.requirements.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Benefits Preview */}
                    {job.benefits && job.benefits.length > 0 && (
                      <div className="mb-4">
                        <div className="mb-1 flex items-center gap-1 text-xs font-semibold text-brand">
                          <Award className="h-3 w-3 flex-shrink-0" />
                          <span>Benefits:</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {job.benefits.slice(0, 2).map((benefit, idx) => (
                            <span key={idx} className="max-w-full truncate rounded-full bg-green-50 px-2 py-1 text-xs text-green-600">
                              {benefit}
                            </span>
                          ))}
                          {job.benefits.length > 2 && (
                            <span className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-600">
                              +{job.benefits.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Apply Button */}
                    <Link
                      href="#apply"
                      className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg border border-brand px-5 py-2.5 text-sm font-semibold text-brand transition-all hover:border-ocean hover:bg-ocean hover:text-white"
                    >
                      Apply Now
                      <ArrowRight className="h-4 w-4 flex-shrink-0" />
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </section>

      {/* Application Form with Complete Fields */}
      <section id="apply" className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Apply Now"
              title="Send Us Your Application"
              description="Tell us about yourself and which role you are interested in. We review every application personally."
            />
            <Reveal className="mt-10">
              <div className="rounded-3xl border border-border bg-sky p-8 shadow-premium lg:p-10">
                {applied && (
                  <div className="mb-6 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                    <p className="text-sm font-semibold text-green-800">
                      Thank you for applying! We will review your application and get back to you soon.
                    </p>
                  </div>
                )}

                {fileError && !applied && (
                  <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                    <X className="h-6 w-6 text-red-600" />
                    <p className="text-sm font-semibold text-red-800">{fileError}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Personal Information */}
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
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none"
                        placeholder="Your name"
                        disabled={isSubmitting}
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
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none"
                        placeholder="you@email.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-brand">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-brand focus:border-electric focus:outline-none"
                          placeholder="+1 555 123 4567"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-brand">
                        Years of Experience
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          name="experience"
                          value={form.experience}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-brand focus:border-electric focus:outline-none"
                          placeholder="e.g., 4 years"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Current Employment */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-brand">
                        Current Company
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          name="currentCompany"
                          value={form.currentCompany}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-brand focus:border-electric focus:outline-none"
                          placeholder="Current company name"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-brand">
                        Current Salary
                      </label>
                      <div className="relative">
                        <Wallet className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          name="currentSalary"
                          value={form.currentSalary}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-brand focus:border-electric focus:outline-none"
                          placeholder="$70,000"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Salary Expectations & Notice Period */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-brand">
                        Expected Salary
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          name="expectedSalary"
                          value={form.expectedSalary}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-brand focus:border-electric focus:outline-none"
                          placeholder="$90,000"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-brand">
                        Notice Period
                      </label>
                      <div className="relative">
                        <CalendarDays className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          name="noticePeriod"
                          value={form.noticePeriod}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-brand focus:border-electric focus:outline-none"
                          placeholder="e.g., 30 days"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Position */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-brand">
                      Position You Are Applying For *
                    </label>
                    <select
                      name="appliedPosition"
                      required
                      value={form.appliedPosition}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none"
                      disabled={isSubmitting}
                    >
                      <option value="">Select a position</option>
                      {careers.map((job) => (
                        <option key={job._id} value={job.jobTitle}>
                          {job.jobTitle} - {job.department}
                        </option>
                      ))}
                      <option value="other">Other / General Application</option>
                    </select>
                  </div>

                  {/* LinkedIn & Portfolio */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-brand">
                        LinkedIn Profile
                      </label>
                      <div className="relative">
                        <Linkedin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="url"
                          name="linkedinUrl"
                          value={form.linkedinUrl}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-brand focus:border-electric focus:outline-none"
                          placeholder="https://linkedin.com/in/username"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-brand">
                        Portfolio / Website
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="url"
                          name="portfolioUrl"
                          value={form.portfolioUrl}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-brand focus:border-electric focus:outline-none"
                          placeholder="https://yourportfolio.com"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-brand">
                      Resume / CV (PDF or DOC) *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        id="resume-upload"
                        disabled={isSubmitting}
                      />
                      
                      {!file ? (
                        <label
                          htmlFor="resume-upload"
                          className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border-2 border-dashed border-border bg-white px-6 py-8 transition-all hover:border-electric/50 hover:bg-sky/30"
                        >
                          <Upload className="h-8 w-8 text-muted-foreground" />
                          <div className="text-center">
                            <p className="font-semibold text-brand">Click to upload your resume</p>
                            <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (Max 5MB)</p>
                          </div>
                        </label>
                      ) : (
                        <div className="rounded-xl border border-electric/30 bg-electric/5 p-4">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              {file.type === 'application/pdf' ? (
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-50 text-red-600">
                                  <File className="h-8 w-8" />
                                </div>
                              ) : (
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                  <FileText className="h-8 w-8" />
                                </div>
                              )}
                            </div>

                            <div className="min-w-0 flex-1">
                              <p className="truncate font-semibold text-brand">{file.name}</p>
                              <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                                <span>{(file.size / 1024).toFixed(1)} KB</span>
                                <span className="text-xs uppercase text-electric">
                                  {file.type.split('/')[1] || 'file'}
                                </span>
                                {file.type === 'application/pdf' && (
                                  <span className="text-xs text-green-600">✓ PDF Format</span>
                                )}
                                {(file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') && (
                                  <span className="text-xs text-blue-600">✓ Word Document</span>
                                )}
                              </div>
                              {file.type === 'application/pdf' && (
                                <button
                                  type="button"
                                  onClick={() => {
                                    const url = URL.createObjectURL(file);
                                    window.open(url, '_blank');
                                  }}
                                  className="mt-2 flex items-center gap-1 text-xs text-electric hover:underline"
                                >
                                  <FileText className="h-3 w-3" />
                                  Preview PDF
                                </button>
                              )}
                            </div>

                            <button
                              type="button"
                              onClick={removeFile}
                              className="flex-shrink-0 rounded-full p-1 transition-colors hover:bg-red-100"
                              disabled={isSubmitting}
                            >
                              <X className="h-5 w-5 text-red-500" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Accepted formats: PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-brand">
                      Cover Letter
                    </label>
                    <textarea
                      name="coverLetter"
                      rows={5}
                      value={form.coverLetter}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 text-brand focus:border-electric focus:outline-none"
                      placeholder="Tell us about yourself, your experience, and why you want to joinDigitalKeddy..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 bg-ocean px-8 py-4 text-base font-semibold text-white shadow-glow transition-all hover:bg-ocean-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner
        title="Do Not See the Right Role?"
        description="We are always looking for exceptional talent. Send us your resume and we will reach out when a fit opens up."
        buttonText="Send Your Resume"
        secondaryText="Explore Our Work"
      />
    </>
  );
}