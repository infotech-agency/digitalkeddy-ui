import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import SectionHeading from '@/components/common/SectionHeading';
import CTABanner from '@/components/common/CTABanner';
import Counter from '@/components/common/Counter';
import { Reveal, Stagger, StaggerItem } from '@/components/common/Reveal';
import { achievements, teamMembers, awards } from '@/lib/site-data';
import AwardsRecognition from '@/components/home/AwardsRecognition';
import Achievements from '@/components/home/Achievements';

export const metadata: Metadata = {
  title: 'About Us | Our Story & Mission',
  description:
    'Learn about DigitalKeddy — a full-service digital marketing agency with 12+ years of experience helping 500+ brands grow.',
  alternates: { canonical: '/about-us' },
};

const values = [
  {
    icon: Target,
    title: 'Results Over Vanity',
    description:
      'We measure success by your revenue, not by impressions or clicks. Every recommendation is tied to a business outcome.',
  },
  {
    icon: Eye,
    title: 'Radical Transparency',
    description:
      'You see everything — dashboards, data, and decisions. No black boxes, no hidden fees, no jargon designed to confuse.',
  },
  {
    icon: Heart,
    title: 'Genuine Partnership',
    description:
      'We treat your business as our own. Your goals become our goals, and we celebrate your wins as if they were ours.',
  },
];

const milestones = [
  { year: '2013', title: 'Founded in Hyderabad', description: 'Started as a 3-person SEO consultancy.' },
  { year: '2016', title: 'Expanded to Full-Service', description: 'Added PPC, web development, and content teams.' },
  { year: '2019', title: '100th Client Milestone', description: 'Crossed 100 active clients across 15 industries.' },
  { year: '2021', title: 'Google Premier Partner', description: 'Achieved Google Premier Partner status.' },
  { year: '2023', title: 'Team Grew to 50+', description: 'Senior strategists, engineers, and creatives.' },
  { year: '2026', title: '500+ Brands Scaled', description: 'Now serving 500+ brands across 30+ industries.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        title="We Help Brands Grow with Data-Driven Marketing"
        description="For over 12 years,DigitalKeddy has been the growth partner of choice for 500+ brands — from startups to enterprises — across 30+ industries."
        image="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
      />

      {/* Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal direction="right">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-primary-soft px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-electric">
                <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                Our Story
              </div>
              <h2 className="text-3xl font-bold text-brand sm:text-4xl">
                From a 3-Person Team to 500+ Brands
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                 DigitalKeddy was founded in 2013 with a simple belief: digital
                  marketing should be measured by revenue, not vanity metrics. What
                  started as a 3-person SEO consultancy has grown into a 50+ person
                  full-service agency trusted by brands across 30+ industries.
                </p>
                <p>
                  We have stayed true to our founding principle. Every strategy we
                  build, every campaign we launch, and every report we deliver is
                  tied to a business outcome — leads, pipeline, and revenue. That is
                  why our clients stay with us for an average of 4+ years.
                </p>
                <p>
                  Today, we are a Google Premier Partner and Meta Business Partner,
                  managing over ₹50 crore in annual ad spend and delivering an average
                  340% ROI for our clients. But we are just getting started.
                </p>
              </div>
            </Reveal>
            <Reveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-premium-lg">
                <Image
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="DigitalKeddy team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Achievements/>

      {/* Mission, Vision, Values */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Mission, Vision & Values"
            description="The principles that guide every decision we make and every campaign we run."
          />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.1}>
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="h-full rounded-2xl border border-border bg-sky p-8 shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-brand">{value.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-sky py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Our Journey"
            title="12 Years of Growth"
            description="From a small consultancy to a full-service agency trusted by 500+ brands."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08}>
                <div className="relative rounded-2xl border border-border bg-white p-7 shadow-premium">
                  <div className="text-3xl font-bold gradient-text">{m.year}</div>
                  <h3 className="mt-3 text-lg font-bold text-brand">{m.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet Our Leadership Team"
            description="Senior strategists with 10+ years of experience leading every client engagement."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-white shadow-premium transition-all hover:-translate-y-2 hover:shadow-premium-lg">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-bold text-brand">{member.name}</h3>
                    <p className="mt-1 text-sm font-medium text-electric">
                      {member.role}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section> */}

      {/* Awards */}
      <AwardsRecognition/>

      <CTABanner
        title="Want to Work with Us?"
        description="Whether you are looking for a growth partner or a career, we would love to hear from you."
        buttonText="Get Free Proposal"
        secondaryText="View Careers"
      />
    </>
  );
}
