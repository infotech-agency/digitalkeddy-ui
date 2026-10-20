

'use client';

import { useState, useEffect, type ReactNode } from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import FAQAccordion from '@/components/common/FAQAccordion';
import { BASE_URL } from '@/utils/baseUrl';

interface FaqCategory {
  _id: string;
  name: string;
  slug: string;
}

interface FAQ {
  _id: string;
  question: string;
  answer: string;
  sortOrder: number;
}

interface GroupedFaq {
  category: FaqCategory;
  faqs: FAQ[];
}

function FAQSectionShell({ children }: { children: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-sky py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/images/faq.svg"
          alt=""
          className="h-full w-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-sky/80" />
      </div>
      <div className="container relative z-10 mx-auto px-4">{children}</div>
    </section>
  );
}

export default function HomeFAQ() {
  const [groups, setGroups] = useState<GroupedFaq[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/faqs/grouped`);
        const data = await response.json();

        if (data.success && data.data) {
          // Sirf wahi categories rakho jinke andar kam se kam 1 FAQ hai
          const nonEmpty = data.data.filter((g: GroupedFaq) => g.faqs.length > 0);
          setGroups(nonEmpty);
          if (nonEmpty.length > 0) setActiveCategoryId(nonEmpty[0].category._id);
        } else {
          setError('Failed to fetch FAQs');
        }
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        setError('Failed to load FAQs');
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const activeGroup = groups.find((g) => g.category._id === activeCategoryId);

  const transformFaqs = (apiFaqs: FAQ[]) =>
    apiFaqs
      .slice()
      .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
      .map((faq) => ({ question: faq.question, answer: faq.answer }));

  if (loading) {
    return (
      <FAQSectionShell>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with DigitalKeddy. Still have questions? Reach out — we are happy to help."
        />
        <div className="mt-14 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="animate-pulse rounded-2xl border border-border bg-white p-6 shadow-premium"
            >
              <div className="flex items-center justify-between">
                <div className="h-6 w-3/4 rounded bg-gray-200"></div>
                <div className="h-5 w-5 rounded bg-gray-200"></div>
              </div>
              <div className="mt-3 h-4 w-full rounded bg-gray-200"></div>
              <div className="mt-2 h-4 w-2/3 rounded bg-gray-200"></div>
            </div>
          ))}
        </div>
      </FAQSectionShell>
    );
  }

  if (error || groups.length === 0) {
    return (
      <FAQSectionShell>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with DigitalKeddy. Still have questions? Reach out — we are happy to help."
        />
        <div className="mt-14 text-center">
          <p className="text-muted-foreground">
            {error || 'No FAQs available at the moment.'}
          </p>
          <div className="mt-6">
            
            <a  href="/contact"
              className="inline-flex items-center gap-2 bg-ocean px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-ocean-dark"
            >
              Contact Us
            </a>
          </div>
        </div>
      </FAQSectionShell>
    );
  }

  return (
    <FAQSectionShell>
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about working with DigitalKeddy. Still have questions? Reach out — we are happy to help."
      />

      <div className="mt-14 flex flex-col gap-8 lg:flex-row">
        {/* Left side — vertical category tabs */}
        <div className="lg:w-64 lg:flex-shrink-0">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {groups.map((g) => {
              const isActive = g.category._id === activeCategoryId;
              return (
                <button
                  key={g.category._id}
                  onClick={() => setActiveCategoryId(g.category._id)}
                  className={`whitespace-nowrap rounded-full px-5 py-3 text-left text-sm font-semibold transition-all lg:whitespace-normal lg:rounded-xl ${
                    isActive
                      ? 'bg-ocean text-white shadow-premium'
                      : 'bg-white text-gray-600 hover:bg-ocean/10'
                  }`}
                >
                  {g.category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right side — active category's FAQs */}
        <div className="flex-1">
          {activeGroup && <FAQAccordion items={transformFaqs(activeGroup.faqs)} />}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a href="/contact" className="font-semibold text-electric hover:underline">
            Contact our team
          </a>
        </p>
      </div>
    </FAQSectionShell>
  );
}