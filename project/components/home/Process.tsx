

"use client";

import { useRef } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { processSteps } from "@/lib/site-data";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

export default function Process() {
  return (
    <section className="bg-white py-20 lg:py-0">
      <div className="container mx-auto px-4 lg:hidden">
        <SectionHeading
          eyebrow="Our Process"
          title="A Proven Path to Growth"
          description="We do not guess. We follow a battle-tested process that has delivered results for 500+ brands across 30+ industries."
        />
      </div>

      {/* MOBILE / TABLET — simple vertical stack, no scroll-jack */}
      <div className="container mx-auto px-4 pt-12 lg:hidden">
        <div className="grid gap-8 sm:grid-cols-2">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 mb-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-glow">
                  <DotLottieReact
                    src={step.animation}
                    autoplay
                    loop
                    className="h-full w-full"
                  />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-electric text-xs font-bold text-white">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-brand">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* DESKTOP — pinned horizontal scroll timeline */}
      <div className="hidden lg:block">
        <DesktopTimeline />
      </div>
    </section>
  );
}

function DesktopTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const total = processSteps.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.5,
  });

  const lineWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"], {
    clamp: true,
  });

  const rocketLeft = useTransform(smoothProgress, [0, 1], ["0%", "100%"], {
    clamp: true,
  });

  return (
    <section
      ref={containerRef}
      style={{ height: `${total * 70}vh` }}
      className="relative bg-white"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Our Process"
            title="A Proven Path to Growth"
            description="We do not guess. We follow a battle-tested process that has delivered results for 500+ brands across 30+ industries."
          />

          <div className="relative mt-16">
            {/* background track line — icon box (h-24) ke exact center pe */}
            <div className="absolute left-0 right-0 top-12 h-0.5 -translate-y-1/2 bg-border" />

            {/* animated progress line */}
            <motion.div
              style={{ width: lineWidth }}
              className="absolute left-0 top-12 h-1 -translate-y-1/2 bg-orange-500"
            />

            {/* rocket travelling along the line */}
            {/* <motion.div
              style={{ left: rocketLeft }}
              className="absolute top-12 -translate-x-1/2 -translate-y-1/2"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                className="rotate-90 drop-shadow-md"
              >
                <path
                  d="M12 2c2.5 2 4 5.5 4 9 0 1.5-.3 3-1 4.5l-3 3-3-3c-.7-1.5-1-3-1-4.5 0-3.5 1.5-7 4-9z"
                  fill="#0EA5E9"
                />
                <circle cx="12" cy="9" r="1.6" fill="white" />
                <path
                  d="M9 15l-2.5 1.5L7 19l2-1M15 15l2.5 1.5L17 19l-2-1"
                  stroke="#0EA5E9"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 17.5c0 1.5.5 2.8 1 3.5.5-.7 1-2 1-3.5"
                  fill="#F97316"
                />
              </svg>
            </motion.div> */}
            <motion.div
  style={{ left: rocketLeft }}
  className="absolute top-12 -translate-x-1/2 -translate-y-1/2"
>
  <Image
    src="/images/kd-rocket.png"
    alt="Progress rocket"
    width={200}
    height={200}
    className="drop-shadow-md"
  />
</motion.div>
            <div className="grid gap-8 lg:grid-cols-5">
              {processSteps.map((step, i) => (
                <ProcessStep
                  key={step.step}
                  step={step}
                  index={i}
                  total={total}
                  scrollYProgress={smoothProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// function ProcessStep({
//   step,
//   index,
//   total,
//   scrollYProgress,
// }: {
//   step: (typeof processSteps)[number];
//   index: number;
//   total: number;
//   scrollYProgress: MotionValue<number>;
// }) {
//   const start = index / total;
//   const end = (index + 0.6) / total;

//   const opacity = useTransform(scrollYProgress, [start, end], [0, 1], {
//     clamp: true,
//   });
//   const x = useTransform(scrollYProgress, [start, end], [-40, 0], {
//     clamp: true,
//   });
//   const scale = useTransform(scrollYProgress, [start, end], [0.85, 1], {
//     clamp: true,
//   });

//   return (
//     <motion.div
//       style={{ opacity, x, scale, willChange: "transform, opacity" }}
//       className="flex flex-col items-center text-center"
//     >
//       <div className="relative z-10 mb-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-glow">
//         <DotLottieReact
//           src={step.animation}
//           autoplay
//           loop
//           className="h-full w-full"
//         />

//         <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-electric text-xs font-bold text-white">
//           {step.step}
//         </span>
//       </div>

//       <h3 className="text-lg font-bold text-brand">{step.title}</h3>

//       <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
//         {step.description}
//       </p>
//     </motion.div>
//   );
// }

function ProcessStep({
  step,
  index,
  total,
  scrollYProgress,
}: {
  step: (typeof processSteps)[number];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 0.6) / total;

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1], {
    clamp: true,
  });
  const x = useTransform(scrollYProgress, [start, end], [-40, 0], {
    clamp: true,
  });

  return (
    <motion.div
      style={{ opacity, x, willChange: "transform, opacity" }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative z-10 mb-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-glow">
        <DotLottieReact
          src={step.animation}
          autoplay
          loop
          style={{ width: 96, height: 96 }}
        />

        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-electric text-xs font-bold text-white">
          {step.step}
        </span>
      </div>

      <h3 className="text-lg font-bold text-brand">{step.title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {step.description}
      </p>
    </motion.div>
  );
}