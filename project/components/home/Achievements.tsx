// "use client"
// import { useState, useEffect } from 'react';
// import { Reveal } from '@/components/common/Reveal';
// import Counter from '@/components/common/Counter';
// import { Trophy, Users, Rocket, Award, CheckCircle, Sparkles } from 'lucide-react';
// import { BASE_URL } from '@/utils/baseUrl';

// interface AchievementItem {
//   _id: string;
//   label: string;
//   value: number;
//   suffix: string;
//   icon: string;
//   description?: string;
// }

// const IconMap: Record<string, any> = {
//   trophy: Trophy,
//   users: Users,
//   rocket: Rocket,
//   award: Award,
//   check: CheckCircle,
//   sparkles: Sparkles
// };

// /**
//  * Inline SVG background (encoded as data URI) so no extra file is needed.
//  * Rose (#F43F5E) with darker quadrants and gradient polygons.
//  */
// const BG_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
// <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 200 200'>
//   <rect fill='#F43F5E' width='200' height='200'/>
//   <defs>
//     <linearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'>
//       <stop offset='0' stop-color='#000' stop-opacity='0'/>
//       <stop offset='1' stop-color='#000' stop-opacity='1'/>
//     </linearGradient>
//     <linearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'>
//       <stop offset='0' stop-color='#000' stop-opacity='0'/>
//       <stop offset='1' stop-color='#000' stop-opacity='1'/>
//     </linearGradient>
//   </defs>
//   <g fill='#d91f4a' fill-opacity='0.6'>
//     <rect x='100' width='100' height='100'/>
//     <rect y='100' width='100' height='100'/>
//   </g>
//   <g fill-opacity='0.5'>
//     <polygon fill='url(#a)' points='100 30 0 0 200 0'/>
//     <polygon fill='url(#b)' points='100 100 0 130 0 100 200 100 200 130'/>
//   </g>
// </svg>
// `)}`;

// export default function Achievements() {
//   const [achievements, setAchievements] = useState<AchievementItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAchievements = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/counters`);
//         const result = await response.json();

//         if (result.success && result.data) {
//           const sortedData = result.data.sort((a: any, b: any) => a.sortOrder - b.sortOrder);
//           setAchievements(sortedData);
//         }
//       } catch (error) {
//         console.error("Error fetching achievements data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAchievements();
//   }, []);

//   return (
//     <section
//       style={{
//         backgroundColor: "#F43F5E",
//         backgroundImage: `url("${BG_SVG}")`,
//         backgroundRepeat: "repeat",
//         backgroundSize: "200px 200px",
//         backgroundPosition: "center",
//       }}
//       className="relative overflow-hidden py-20 lg:py-28"
//     >
//       <div className="container relative z-10 mx-auto px-4">
//         {/* Header — plain, no eyebrow chrome, no highlighted word */}
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
//             The numbers behind 12 years of growth
//           </h2>
//           <p className="mt-4 text-lg leading-relaxed text-white/80">
//             500+ brands, one consistent outcome: measurable results from
//             data-driven digital marketing.
//           </p>
//         </div>

//         {/* Stat strip — one surface, not a grid of identical cards */}
//         <Reveal className="relative mx-auto mt-16 max-w-5xl">
//           {/* single deliberate glow, not symmetric corner decoration */}
//           <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-40 -translate-y-1/2 bg-white/10 blur-3xl" />

//           {loading ? (
//             <div className="grid grid-cols-2 gap-y-10 border-y border-white/20 py-10 sm:grid-cols-4 sm:divide-x sm:divide-white/20">
//               {[...Array(4)].map((_, index) => (
//                 <div key={index} className="flex flex-col items-center gap-3 px-6">
//                   <div className="h-6 w-6 animate-pulse rounded-full bg-white/20" />
//                   <div className="h-10 w-20 animate-pulse rounded bg-white/20" />
//                   <div className="h-3 w-28 animate-pulse rounded bg-white/20" />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 gap-y-10 border-y border-white/20 py-10 sm:grid-cols-4 sm:divide-x sm:divide-white/20">
//               {achievements.map((item) => {
//                 const Icon = IconMap[item.icon?.toLowerCase()] || Award;

//                 return (
//                   <div
//                     key={item._id}
//                     className="flex flex-col items-center gap-3 px-6 text-center"
//                   >
//                     <Icon className="h-6 w-6 text-white/70" strokeWidth={1.5} />

//                     <div className="text-4xl font-semibold tracking-tight text-white lg:text-5xl">
//                       <Counter value={item.value} suffix={item.suffix} />
//                     </div>

//                     <div className="text-sm font-medium text-white/80">
//                       {item.label}
//                     </div>

//                     {item.description && (
//                       <p className="text-xs leading-relaxed text-white/60">
//                         {item.description}
//                       </p>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </Reveal>
//       </div>
//     </section>
//   );
// }

"use client"
import { useState, useEffect } from 'react';
import { Reveal } from '@/components/common/Reveal';
import Counter from '@/components/common/Counter';
import { Trophy, Users, Rocket, Award, CheckCircle, Sparkles } from 'lucide-react';
import { BASE_URL } from '@/utils/baseUrl';

interface AchievementItem {
  _id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
  description?: string;
}

const IconMap: Record<string, any> = {
  trophy: Trophy,
  users: Users,
  rocket: Rocket,
  award: Award,
  check: CheckCircle,
  sparkles: Sparkles
};

export default function Achievements() {
  const [achievements, setAchievements] = useState<AchievementItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch(`${BASE_URL}/counters`);
        const result = await response.json();

        if (result.success && result.data) {
          const sortedData = result.data.sort((a: any, b: any) => a.sortOrder - b.sortOrder);
          setAchievements(sortedData);
        }
      } catch (error) {
        console.error("Error fetching achievements data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(135deg, #E10600 0%, #B91C1C 45%, #4A0300 100%)",
      }}
      className="relative overflow-hidden py-20 lg:py-28"
    >
      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The numbers behind 12 years of growth
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            500+ brands, one consistent outcome: measurable results from
            data-driven digital marketing.
          </p>
        </div>

        {/* Stat strip — white surface, black text */}
        <Reveal className="relative mx-auto mt-16 max-w-5xl">
          {loading ? (
            <div className="grid grid-cols-2 gap-y-10 rounded-2xl bg-white py-10 shadow-xl sm:grid-cols-4 sm:divide-x sm:divide-black/10">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex flex-col items-center gap-3 px-6">
                  <div className="h-6 w-6 animate-pulse rounded-full bg-gray-200" />
                  <div className="h-10 w-20 animate-pulse rounded bg-gray-200" />
                  <div className="h-3 w-28 animate-pulse rounded bg-gray-200" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-y-10 rounded-2xl bg-white py-10 shadow-xl sm:grid-cols-4 sm:divide-x sm:divide-black/10">
              {achievements.map((item) => {
                const Icon = IconMap[item.icon?.toLowerCase()] || Award;

                return (
                  <div
                    key={item._id}
                    className="flex flex-col items-center gap-3 px-6 text-center"
                  >
                    <Icon className="h-6 w-6 text-[#E10600]" strokeWidth={1.5} />

                    <div className="text-4xl font-semibold tracking-tight text-black lg:text-5xl">
                      <Counter value={item.value} suffix={item.suffix} />
                    </div>

                    <div className="text-sm font-medium text-black/80">
                      {item.label}
                    </div>

                    {item.description && (
                      <p className="text-xs leading-relaxed text-black/60">
                        {item.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}