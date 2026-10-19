// import { notFound } from 'next/navigation';
// import type { Metadata } from 'next';
// import IndustryPage from '@/components/industries/IndustryPage';
// import { industries, getIndustry } from '@/lib/industries';

// export function generateStaticParams() {
//   return industries.map((i) => ({ slug: i.slug }));
// }

// export function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Metadata {
//   const industry = getIndustry(params.slug);
//   if (!industry) return {};
//   return {
//     title: industry.metaTitle,
//     description: industry.metaDescription,
//     alternates: { canonical: `/industries/${industry.slug}` },
//     openGraph: {
//       title: industry.metaTitle,
//       description: industry.metaDescription,
//       url: `https://infotechagency.com/industries/${industry.slug}`,
//       images: [{ url: industry.image, width: 1200, height: 800, alt: industry.name }],
//     },
//   };
// }

// export default function IndustryRoute({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const industry = getIndustry(params.slug);
//   if (!industry) notFound();
//   return <IndustryPage industry={industry} />;
// }




// import { notFound } from 'next/navigation';
// import type { Metadata } from 'next';
// import IndustryPage from '@/components/industries/IndustryPage';

// // API base URL
// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// // Fetch all industries for static paths
// async function getAllIndustries() {
//   try {
//     const res = await fetch(`${API_URL}/api/industries`, {
//       cache: 'no-store'
//     });
//     const data = await res.json();
//     return data.data || [];
//   } catch (error) {
//     console.error('Error fetching industries:', error);
//     return [];
//   }
// }

// // Fetch single industry by slug
// async function getIndustryBySlug(slug: string) {
//   try {
//     const res = await fetch(`${API_URL}/api/industries/slug/${slug}`, {
//       cache: 'no-store'
//     });
//     const data = await res.json();
//     console.log(data);
//     return data.data || null;
//   } catch (error) {
//     console.error('Error fetching industry:', error);
//     return null;
//   }
// }

// export async function generateStaticParams() {
//   const industries = await getAllIndustries();
//   return industries.map((industry: any) => ({
//     slug: industry.slug,
//   }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const industry = await getIndustryBySlug(params.slug);
//   if (!industry) return {};
  
//   return {
//     title: industry.metaTitle || `${industry.title} |DigitalKeddy`,
//     description: industry.metaDescription || industry.overview,
//     alternates: { canonical: `/industries/${industry.slug}` },
//     openGraph: {
//       title: industry.metaTitle || `${industry.title} |DigitalKeddy`,
//       description: industry.metaDescription || industry.overview,
//       url: `https://infotechagency.com/industries/${industry.slug}`,
//       images: [{ 
//         url: industry.banner?.secure_url || '', 
//         width: 1200, 
//         height: 800, 
//         alt: industry.title 
//       }],
//     },
//   };
// }

// export default async function IndustryRoute({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const industry = await getIndustryBySlug(params.slug);
//   if (!industry) notFound();
  
//   return <IndustryPage industry={industry} />;
// }


import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import IndustryPage from '@/components/industries/IndustryPage';
import { BASE_URL } from '@/utils/baseUrl';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

async function getAllIndustries() {
  try {
    const res = await fetch(`${BASE_URL}/industries`, {
      cache: 'no-store'
    });
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching industries:', error);
    return [];
  }
}

async function getIndustryBySlug(slug: string) {
  try {
    const res = await fetch(`${BASE_URL}/industries/slug/${slug}`, {
      cache: 'no-store'
    });
    const data = await res.json();
    return data.data || null;
  } catch (error) {
    console.error('Error fetching industry:', error);
    return null;
  }
}

export async function generateStaticParams() {
  const industries = await getAllIndustries();
  return industries.map((industry: any) => ({
    slug: industry.slug,
  }));
}

// 1. Dynamic Meta Title aur Description Validation ke saath
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const industry = await getIndustryBySlug(params.slug);
  if (!industry) return {};
  
  // Agar backend se metaTitle na aaye, toh fallback me main title use hoga
  const title = industry.metaTitle || `${industry.title} |DigitalKeddy`;
  const description = industry.metaDescription || industry.overview;

  return {
    title: title,
    description: description,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: title,
      description: description,
      url: `https://infotechagency.com/industries/${industry.slug}`,
      images: [{ 
        url: industry.banner?.secure_url || '', 
        width: 1200, 
        height: 800, 
        alt: industry.title 
      }],
    },
  };
}

export default async function IndustryRoute({
  params,
}: {
  params: { slug: string };
}) {
  const industry = await getIndustryBySlug(params.slug);
  if (!industry) notFound();
  
  return (
    <>
      {/* 2. Schema Markup injection (Google Structured Data Rich Snippets ke liye) */}
      {industry.schemaJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: typeof industry.schemaJson === 'object' 
              ? JSON.stringify(industry.schemaJson) 
              : industry.schemaJson
          }}
        />
      )}
      
      <IndustryPage industry={industry} />
    </>
  );
}