// "use client"
// import { useState } from "react";
// import { Phone } from "lucide-react";
// import Image from "next/image";


// interface Props {
//   whatsappNumber: string; // digits only, with country code, e.g. "911234567890"
//   phoneNumber: string; // e.g. "+911234567890"
//   whatsappMessage?: string;
// }

// function WhatsAppIcon({ className }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
//       <path d="M16.004 3C9.383 3 4.01 8.373 4.01 14.994c0 2.61.844 5.022 2.281 6.996L4.5 28.5l6.687-1.756a11.94 11.94 0 0 0 4.817 1.01h.005c6.62 0 11.993-5.373 11.993-11.994C28.002 8.373 22.629 3 16.004 3Zm0 21.79a9.77 9.77 0 0 1-4.98-1.363l-.357-.213-3.97 1.043 1.06-3.868-.233-.397a9.76 9.76 0 0 1-1.502-5.198c0-5.4 4.395-9.795 9.795-9.795 2.617 0 5.078 1.02 6.926 2.87a9.727 9.727 0 0 1 2.868 6.925c-.004 5.4-4.4 9.796-9.607 9.633Zm5.373-7.33c-.294-.147-1.74-.858-2.01-.955-.27-.098-.467-.147-.663.147-.196.294-.76.955-.933 1.15-.172.196-.343.22-.637.073-.294-.147-1.24-.457-2.362-1.457-.874-.78-1.464-1.744-1.636-2.038-.172-.294-.019-.454.129-.6.147-.147.343-.383.514-.575.172-.191.196-.336.294-.56.098-.222.049-.416-.049-.56-.098-.147-.417-1.004-.588-1.373-.157-.343-.316-.294-.44-.3l-.375-.007c-.13 0-.343.05-.514.244-.172.196-.66.645-.66 1.58 0 .933.686 1.834.784 1.96.098.128 1.34 2.043 3.29 2.86 1.947.816 1.947.545 2.298.512.35-.032 1.14-.466 1.3-.918.16-.451.16-.837.11-.918-.05-.08-.196-.128-.416-.22Z" />
//     </svg>
//   );
// }

// export default function FloatingContactButtons({
//   whatsappNumber,
//   phoneNumber,
//   whatsappMessage = "Hi! I'd like to know more about your services.",
// }: Props) {
//   const [showLabels, setShowLabels] = useState(false);

//   const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//     whatsappMessage
//   )}`;
//   const callHref = `tel:${phoneNumber}`;

//   return (
//     <div
//       className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
//       onMouseEnter={() => setShowLabels(true)}
//       onMouseLeave={() => setShowLabels(false)}
//     >
//       {/* WhatsApp */}
//       <a
//         href={whatsappHref}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Chat with us on WhatsApp"
//         className="group relative flex items-center"
//       >
//         <span
//           className={`mr-3 whitespace-nowrap rounded-lg bg-[#111827] px-3 py-1.5 text-sm font-medium text-white shadow-lg transition-all duration-200 ${
//             showLabels
//               ? "translate-x-0 opacity-100"
//               : "pointer-events-none translate-x-2 opacity-0"
//           }`}
//         >
//           Chat on WhatsApp
//         </span>
       
//         <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-white shadow-xl shadow-black/20 transition-transform duration-200 group-hover:scale-105">
//           {/* <WhatsAppIcon className="h-7 w-7" /> */}
//           <Image alt="wtsapp" height={50} width={50} src={'https://www.freeiconspng.com/thumbs/logo-whatsapp-png/logo-whatsapp-png-image-2.png'}/>
//         </span>
//       </a>

//       {/* Call */}
//       <a
//         href={callHref}
//         aria-label="Call us"
//         className="group relative flex items-center"
//       >
//         <span
//           className={`mr-3 whitespace-nowrap rounded-lg bg-[#111827] px-3 py-1.5 text-sm font-medium text-white shadow-lg transition-all duration-200 ${
//             showLabels
//               ? "translate-x-0 opacity-100"
//               : "pointer-events-none translate-x-2 opacity-0"
//           }`}
//         >
//           Call us now
//         </span>
//         <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#F90D0E] text-white shadow-xl shadow-black/20 transition-transform duration-200 group-hover:scale-105">
//           <Phone className="h-6 w-6" strokeWidth={2} />
//         </span>
//       </a>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";

interface Props {
  whatsappNumber: string; // digits only, with country code, e.g. "911234567890"
  phoneNumber: string; // e.g. "+911234567890"
  whatsappMessage?: string;
}

export default function FloatingContactButtons({
  whatsappNumber,
  phoneNumber,
  whatsappMessage = "Hi! I'd like to know more about your services.",
}: Props) {
  const [showLabels, setShowLabels] = useState(false);

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  const callHref = `tel:${phoneNumber}`;

  return (
    <>
      {/* ================= MOBILE: fixed bottom bar, 50-50 ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden pb-[env(safe-area-inset-bottom)] bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.15)]">
        {/* WhatsApp - 50% */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex w-1/2 items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-semibold text-white active:opacity-90"
        >
          <Image
            alt="WhatsApp"
            height={24}
            width={24}
            src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/logo-whatsapp-png-image-2.png"
          />
          WhatsApp
        </a>

        {/* Call - 50% */}
        <a
          href={callHref}
          aria-label="Call us"
          className="flex w-1/2 items-center justify-center gap-2 bg-[#F90D0E] py-3.5 text-sm font-semibold text-white active:opacity-90"
        >
          <Phone className="h-5 w-5" strokeWidth={2} />
          Call Now
        </a>
      </div>

      {/* ================= DESKTOP: floating buttons (same as before) ================= */}
      <div
        className="fixed bottom-6 right-6 z-50 hidden flex-col items-end gap-3 md:flex"
        onMouseEnter={() => setShowLabels(true)}
        onMouseLeave={() => setShowLabels(false)}
      >
        {/* WhatsApp */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="group relative flex items-center"
        >
          <span
            className={`mr-3 whitespace-nowrap rounded-lg bg-[#111827] px-3 py-1.5 text-sm font-medium text-white shadow-lg transition-all duration-200 ${
              showLabels
                ? "translate-x-0 opacity-100"
                : "pointer-events-none translate-x-2 opacity-0"
            }`}
          >
            Chat on WhatsApp
          </span>

          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-white shadow-xl shadow-black/20 transition-transform duration-200 group-hover:scale-105">
            <Image
              alt="WhatsApp"
              height={50}
              width={50}
              src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/logo-whatsapp-png-image-2.png"
            />
          </span>
        </a>

        {/* Call */}
        <a
          href={callHref}
          aria-label="Call us"
          className="group relative flex items-center"
        >
          <span
            className={`mr-3 whitespace-nowrap rounded-lg bg-[#111827] px-3 py-1.5 text-sm font-medium text-white shadow-lg transition-all duration-200 ${
              showLabels
                ? "translate-x-0 opacity-100"
                : "pointer-events-none translate-x-2 opacity-0"
            }`}
          >
            Call us now
          </span>
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#F90D0E] text-white shadow-xl shadow-black/20 transition-transform duration-200 group-hover:scale-105">
            <Phone className="h-6 w-6" strokeWidth={2} />
          </span>
        </a>
      </div>
    </>
  );
}