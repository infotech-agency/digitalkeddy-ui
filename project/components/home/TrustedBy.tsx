


// 'use client';

// import { useState, useEffect, useMemo } from 'react';
// import Image from 'next/image';
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

// /** Ek logo card (backdrop-blur hata diya — animate hote waqt lag karta hai) */
// function LogoCard({ client }: { client: Client }) {
//   return (
//     <div
//       className="relative mr-4 flex h-16 w-36 shrink-0 items-center justify-center rounded-2xl
//                  border border-slate-200/80 bg-white shadow-[0_8px_24px_-12px_rgba(15,28,76,0.2)]
//                  transition-shadow duration-300 hover:shadow-[0_12px_32px_-10px_rgba(15,28,76,0.3)]
//                  md:mr-8 md:h-20 md:w-44"
//     >
//       <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-50 via-transparent to-transparent" />
//       <div className="relative h-10 w-24 md:h-12 md:w-32">
//         <Image
//           src={client.logo.secure_url}
//           alt={client.companyName}
//           fill
//           loading="eager"
//           className="object-contain"
//           sizes="(max-width: 768px) 96px, 128px"
//         />
//       </div>
//     </div>
//   );
// }

// /**
//  * Ek marquee row. List 2 baar render hoti hai aur track ko exactly -50% move
//  * karte hain, isliye loop bilkul seamless hai (koi jump / gap nahi).
//  */
// function MarqueeRow({
//   items,
//   direction,
//   duration,
// }: {
//   items: Client[];
//   direction: 'left' | 'right';
//   duration: number;
// }) {
//   return (
//     <div
//       className="trusted-mask overflow-hidden"
//       style={{
//         WebkitMaskImage:
//           'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
//         maskImage:
//           'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
//       }}
//     >
//       <div
//         className={`trusted-track flex w-max ${
//           direction === 'left' ? 'trusted-left' : 'trusted-right'
//         }`}
//         style={{ animationDuration: `${duration}s` }}
//       >
//         {[...items, ...items].map((client, i) => (
//           <LogoCard key={`${client._id}-${i}`} client={client} />
//         ))}
//       </div>
//     </div>
//   );
// }

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

//   /**
//    * Row 1 = original order, Row 2 = half-rotated order (alag logos upar/neeche).
//    * Kam clients hon to repeat karte hain taaki ek "set" screen se chauda rahe,
//    * warna loop me khaali jagah dikhegi.
//    */
//   const { rowA, rowB } = useMemo(() => {
//     if (clients.length === 0) return { rowA: [], rowB: [] };

//     const fill = (list: Client[]) => {
//       const out: Client[] = [];
//       while (out.length < 10) out.push(...list);
//       return out;
//     };

//     const mid = Math.ceil(clients.length / 2);
//     const rotated = [...clients.slice(mid), ...clients.slice(0, mid)];

//     return { rowA: fill(clients), rowB: fill(rotated) };
//   }, [clients]);

//   if (loading) {
//     return (
//       <section className="border-b border-border bg-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
//             <p className="bg-gradient-to-r from-[#2b8be0] via-[#22BFA6] to-[#1fc46a] bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent sm:text-sm">
//               Our Clients
//             </p>
//             <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
//               Trusted by{' '}
//               <span className="bg-gradient-to-r from-[#2b8be0] via-[#22BFA6] to-[#1fc46a] bg-clip-text text-transparent">
//                 500+ Brands
//               </span>{' '}
//               Driving Real Growth
//             </h2>
//           <p
//   style={{ color: 'black' }}
//   className="mt-4 text-base leading-relaxed sm:text-lg"
// >
//   From fast-growing startups to established enterprises, businesses
//   across industries rely on us for measurable digital results.
// </p>
//           </div>
//           <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
//             {[1, 2, 3, 4, 5, 6].map((i) => (
//               <div key={i} className="flex-shrink-0">
//                 <div className="h-14 w-36 animate-pulse rounded-2xl bg-gray-200"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (clients.length === 0) return null;

//   return (
//     <section className="relative overflow-hidden border-b border-border bg-white py-16">
//       {/* soft colored blobs */}
//       <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#0868A0]/10 blur-3xl" />
//       <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#6BAA44]/10 blur-3xl" />

//       <div className="container relative mx-auto px-4">
//         <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
//           <p className="bg-gradient-to-r from-[#2b8be0] via-[#22BFA6] to-[#1fc46a] bg-clip-text text-xs font-bold uppercase tracking-[0.2em] text-transparent sm:text-sm">
//             Our Clients
//           </p>
//           <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
//             Trusted by{' '}
//             <span className="bg-gradient-to-r from-[#2b8be0] via-[#22BFA6] to-[#1fc46a] bg-clip-text text-transparent">
//               500+ Brands
//             </span>{' '}
//             Driving Real Growth
//           </h2>
//           <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
//             From fast-growing startups to established enterprises, businesses
//             across industries rely on us for measurable digital results.
//           </p>
//         </div>
//       </div>

//       {/* Full-bleed rows (container ke bahar, poori width) */}
//       <div className="relative flex flex-col gap-4 md:gap-8">
//         {/* Row 1 — LEFT se aati hai (right → left move) */}
//         <MarqueeRow items={rowA} direction="left" duration={45} />
//         {/* Row 2 — RIGHT se aati hai (left → right move) */}
//         <MarqueeRow items={rowB} direction="right" duration={50} />
//       </div>

//       <style jsx global>{`
//         @keyframes trusted-left {
//           from { transform: translate3d(0, 0, 0); }
//           to   { transform: translate3d(-50%, 0, 0); }
//         }
//         @keyframes trusted-right {
//           from { transform: translate3d(-50%, 0, 0); }
//           to   { transform: translate3d(0, 0, 0); }
//         }
//         .trusted-track {
//           animation-timing-function: linear;
//           animation-iteration-count: infinite;
//           will-change: transform;
//           backface-visibility: hidden;
//         }
//         .trusted-left  { animation-name: trusted-left; }
//         .trusted-right { animation-name: trusted-right; }

//         /* hover pe dono rows pause */
//         .trusted-mask:hover .trusted-track {
//           animation-play-state: paused;
//         }

//         /* motion kam chahne wale users ke liye */
//         @media (prefers-reduced-motion: reduce) {
//           .trusted-track { animation: none; }
//         }
//       `}</style>
//     </section>
//   );
// }

'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { BASE_URL } from '@/utils/baseUrl';

interface Client {
  _id: string;
  companyName: string;
  logo: {
    public_id?: string;
    secure_url: string;
  };
  websiteUrl?: string;
  sortOrder?: number;
}

function isClient(value: unknown): value is Client {
  if (!value || typeof value !== 'object') return false;

  const client = value as Partial<Client>;

  return (
    typeof client._id === 'string' &&
    typeof client.companyName === 'string' &&
    typeof client.logo?.secure_url === 'string' &&
    client.logo.secure_url.trim().length > 0
  );
}

function LogoCard({ client }: { client: Client }) {
  return (
    <div className="relative mr-4 flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-white sm:mr-6 sm:h-24 sm:w-48">
      <div className="relative h-11 w-28 sm:h-12 sm:w-32">
        <Image
          src={client.logo.secure_url}
          alt={client.companyName}
          fill
          sizes="(max-width: 640px) 112px, 128px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

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
    <div className="trusted-mask overflow-hidden">
      <div
        className={`trusted-track flex w-max ${
          direction === 'left' ? 'trusted-left' : 'trusted-right'
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0"
            aria-hidden={copy === 1 ? true : undefined}
          >
            {items.map((client, index) => (
              <LogoCard
                key={`${client._id}-${index}`}
                client={client}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TrustedBy() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchClients() {
      try {
        const response = await fetch(`${BASE_URL}/clients?limit=50`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch clients: ${response.status}`);
        }

        const data = await response.json();

        if (data.success && Array.isArray(data.data)) {
          const sortedClients = data.data
            .filter(isClient)
            .sort(
              (a: Client, b: Client) =>
                (a.sortOrder ?? 0) - (b.sortOrder ?? 0),
            );

          setClients(sortedClients);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error('Error fetching clients:', error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void fetchClients();

    return () => controller.abort();
  }, []);

  const { rowA, rowB } = useMemo(() => {
    if (!clients.length) {
      return { rowA: [], rowB: [] };
    }

    function fillRow(list: Client[]) {
      const repeats = Math.max(1, Math.ceil(12 / list.length));

      return Array.from({ length: repeats }, () => list).flat();
    }

    const midpoint = Math.ceil(clients.length / 2);
    const rotated = [
      ...clients.slice(midpoint),
      ...clients.slice(0, midpoint),
    ];

    return {
      rowA: fillRow(clients),
      rowB: fillRow(rotated),
    };
  }, [clients]);

  if (!loading && clients.length === 0) return null;

  return (
    <section
      aria-labelledby="trusted-by-heading"
      aria-busy={loading}
      className="trusted-section relative overflow-hidden border-y border-slate-100 bg-[#FAFAFA] py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-11">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E10600]">
            Our Clients
          </p>

          <h2
            id="trusted-by-heading"
            className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-[#111] sm:text-3xl lg:text-4xl"
          >
            Brands we’ve worked with.
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Meet some of the businesses we’ve supported with design,
            development and digital marketing.
          </p>
        </div>
      </div>

      {loading ? (
        <div
          role="status"
          className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 px-5"
        >
          <span className="sr-only">Loading client logos</span>

          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              aria-hidden="true"
              className="h-20 w-40 animate-pulse rounded-2xl border border-slate-200 bg-slate-100 motion-reduce:animate-none sm:h-24 sm:w-48"
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 sm:gap-6">
          <MarqueeRow items={rowA} direction="left" duration={48} />
          <div aria-hidden="true">
            <MarqueeRow items={rowB} direction="right" duration={54} />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes trusted-slide-left {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes trusted-slide-right {
          from {
            transform: translate3d(-50%, 0, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }

        .trusted-section .trusted-mask {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            #000 8%,
            #000 92%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            #000 8%,
            #000 92%,
            transparent
          );
        }

        .trusted-section .trusted-track {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
          backface-visibility: hidden;
        }

        .trusted-section .trusted-left {
          animation-name: trusted-slide-left;
        }

        .trusted-section .trusted-right {
          animation-name: trusted-slide-right;
        }

        .trusted-section:hover .trusted-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .trusted-section .trusted-track {
            animation: none;
            transform: none;
            will-change: auto;
          }

          .trusted-section .trusted-mask {
            overflow-x: auto;
            -webkit-mask-image: none;
            mask-image: none;
          }
        }
      `}</style>
    </section>
  );
}