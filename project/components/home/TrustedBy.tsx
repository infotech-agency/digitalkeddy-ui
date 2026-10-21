

// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { BASE_URL } from '@/utils/baseUrl';

// interface Client {
//   _id: string;
//   companyName: string;
//   logo: {
//     public_id: string;
//     secure_url: string;
//   };
//   websiteUrl: string;
//   sortOrder: number;
// }

// const PER_GRID = 3; // logos inside one grid box

// const chunk = <T,>(arr: T[], size: number): T[][] => {
//   const out: T[][] = [];
//   for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
//   return out;
// };

// const gridBox =
//   'grid grid-cols-3 items-center gap-2 border-b border-r border-[#bdb9b1] bg-white px-3 py-6 sm:gap-4 sm:px-6 md:py-8';

// const Heading = () => (
//   <div className="mb-10 text-center">
//     <h2 className="text-2xl  uppercase tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl">
//       Our Precious Clients
//     </h2>
//     <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm">
//       Our integrated model leads to the efficiency and transparency of our work.
//       <br className="hidden sm:block" /> Below are some of our remarkable clients.
//     </p>
//   </div>
// );

// export default function TrustedBy() {
//   const [clients, setClients] = useState<Client[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/clients?limit=50`);
//         const data = await res.json();

//         if (data.success && data.data) {
//           const sortedClients = data.data.sort(
//             (a: Client, b: Client) => (a.sortOrder || 0) - (b.sortOrder || 0)
//           );
//           setClients(sortedClients);
//         }
//       } catch (error) {
//         console.error('Error fetching clients:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClients();
//   }, []);

//   if (loading) {
//     return (
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-4">
//           <Heading />
//           <div className="mx-auto max-w-5xl border-l border-t border-[#bdb9b1]">
//             <div className="grid grid-cols-1 md:grid-cols-2">
//               {Array.from({ length: 4 }).map((_, i) => (
//                 <div key={i} className={gridBox}>
//                   {Array.from({ length: PER_GRID }).map((__, j) => (
//                     <div key={j} className="mx-auto h-10 w-full max-w-[110px] animate-pulse rounded bg-gray-200" />
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (clients.length === 0) return null;

//   const groups = chunk(clients, PER_GRID);
//   // Keep an even number of grids so the last desktop row stays closed.
//   const padGrid = groups.length % 2 === 1;

//   return (
//     <section className="bg-white py-16">
//       <div className="container mx-auto px-4">
//         <Heading />

//         <div className="mx-auto max-w-5xl border-l border-t border-[#bdb9b1]">
//           <div className="grid grid-cols-1 md:grid-cols-2">
//             {groups.map((group, gi) => (
//               <div key={gi} className={gridBox}>
//                 {group.map((client) => {
//                   const logo = (
//                     <div className="relative mx-auto h-10 w-full max-w-[130px] sm:h-12 md:h-14">
//                       <Image
//                         src={client.logo.secure_url}
//                         alt={client.companyName}
//                         fill
//                         className="object-contain"
//                         sizes="(max-width: 768px) 100px, 140px"
//                       />
//                     </div>
//                   );

//                   return client.websiteUrl ? (
//                     <Link
//                       key={client._id}
//                       href={client.websiteUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={client.companyName}
//                       className="block transition-transform duration-300 hover:scale-105"
//                     >
//                       {logo}
//                     </Link>
//                   ) : (
//                     <div key={client._id}>{logo}</div>
//                   );
//                 })}
//               </div>
//             ))}

//             {padGrid && <div className={`${gridBox} hidden md:block`} />}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { BASE_URL } from '@/utils/baseUrl';

interface Client {
  _id: string;
  companyName: string;
  logo: {
    public_id: string;
    secure_url: string;
  };
  websiteUrl: string;
  sortOrder: number;
}

/** Ek logo card (backdrop-blur hata diya — animate hote waqt lag karta hai) */
function LogoCard({ client }: { client: Client }) {
  return (
    <div
      className="relative mr-4 flex h-16 w-36 shrink-0 items-center justify-center rounded-2xl
                 border border-slate-200/80 bg-white shadow-[0_8px_24px_-12px_rgba(15,28,76,0.2)]
                 transition-shadow duration-300 hover:shadow-[0_12px_32px_-10px_rgba(15,28,76,0.3)]
                 md:mr-8 md:h-20 md:w-44"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-50 via-transparent to-transparent" />
      <div className="relative h-10 w-24 md:h-12 md:w-32">
        <Image
          src={client.logo.secure_url}
          alt={client.companyName}
          fill
          loading="eager"
          className="object-contain"
          sizes="(max-width: 768px) 96px, 128px"
        />
      </div>
    </div>
  );
}

/**
 * Ek marquee row. List 2 baar render hoti hai aur track ko exactly -50% move
 * karte hain, isliye loop bilkul seamless hai (koi jump / gap nahi).
 */
function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: Client[];
  direction: 'left' | 'right';
  duration: number;
}) {
  return (
    <div
      className="trusted-mask overflow-hidden"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
        maskImage:
          'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
      }}
    >
      <div
        className={`trusted-track flex w-max ${
          direction === 'left' ? 'trusted-left' : 'trusted-right'
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[...items, ...items].map((client, i) => (
          <LogoCard key={`${client._id}-${i}`} client={client} />
        ))}
      </div>
    </div>
  );
}

export default function TrustedBy() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch(`${BASE_URL}/clients?limit=50`);
        const data = await res.json();

        if (data.success && data.data) {
          const sortedClients = data.data.sort(
            (a: Client, b: Client) => (a.sortOrder || 0) - (b.sortOrder || 0)
          );
          setClients(sortedClients);
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  /**
   * Row 1 = original order, Row 2 = half-rotated order (alag logos upar/neeche).
   * Kam clients hon to repeat karte hain taaki ek "set" screen se chauda rahe,
   * warna loop me khaali jagah dikhegi.
   */
  const { rowA, rowB } = useMemo(() => {
    if (clients.length === 0) return { rowA: [], rowB: [] };

    const fill = (list: Client[]) => {
      const out: Client[] = [];
      while (out.length < 10) out.push(...list);
      return out;
    };

    const mid = Math.ceil(clients.length / 2);
    const rotated = [...clients.slice(mid), ...clients.slice(0, mid)];

    return { rowA: fill(clients), rowB: fill(rotated) };
  }, [clients]);

  if (loading) {
    return (
      <section className="border-b border-border bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
            <p className="bg-gradient-to-r from-[#2b8be0] via-[#22BFA6] to-[#1fc46a] bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent sm:text-sm">
              Our Clients
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-[#2b8be0] via-[#22BFA6] to-[#1fc46a] bg-clip-text text-transparent">
                500+ Brands
              </span>{' '}
              Driving Real Growth
            </h2>
          <p
  style={{ color: 'black' }}
  className="mt-4 text-base leading-relaxed sm:text-lg"
>
  From fast-growing startups to established enterprises, businesses
  across industries rely on us for measurable digital results.
</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex-shrink-0">
                <div className="h-14 w-36 animate-pulse rounded-2xl bg-gray-200"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (clients.length === 0) return null;

  return (
    <section className="relative overflow-hidden border-b border-border bg-white py-16">
      {/* soft colored blobs */}
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#0868A0]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#6BAA44]/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <p className="bg-gradient-to-r from-[#2b8be0] via-[#22BFA6] to-[#1fc46a] bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent sm:text-sm">
            Our Clients
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-[#2b8be0] via-[#22BFA6] to-[#1fc46a] bg-clip-text text-transparent">
              500+ Brands
            </span>{' '}
            Driving Real Growth
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            From fast-growing startups to established enterprises, businesses
            across industries rely on us for measurable digital results.
          </p>
        </div>
      </div>

      {/* Full-bleed rows (container ke bahar, poori width) */}
      <div className="relative flex flex-col gap-4 md:gap-8">
        {/* Row 1 — LEFT se aati hai (right → left move) */}
        <MarqueeRow items={rowA} direction="left" duration={45} />
        {/* Row 2 — RIGHT se aati hai (left → right move) */}
        <MarqueeRow items={rowB} direction="right" duration={50} />
      </div>

      <style jsx global>{`
        @keyframes trusted-left {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes trusted-right {
          from { transform: translate3d(-50%, 0, 0); }
          to   { transform: translate3d(0, 0, 0); }
        }
        .trusted-track {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        .trusted-left  { animation-name: trusted-left; }
        .trusted-right { animation-name: trusted-right; }

        /* hover pe dono rows pause */
        .trusted-mask:hover .trusted-track {
          animation-play-state: paused;
        }

        /* motion kam chahne wale users ke liye */
        @media (prefers-reduced-motion: reduce) {
          .trusted-track { animation: none; }
        }
      `}</style>
    </section>
  );
}