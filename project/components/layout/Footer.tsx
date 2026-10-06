
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-data';
import { services } from '@/lib/services';
import { industries } from '@/lib/industries';
import { getWebsiteSettings } from '@/lib/settings';

export default function Footer() {
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const websiteSettings = await getWebsiteSettings();
        setSettings(websiteSettings);
      } catch (error) {
        console.error('Failed to fetch settings:', error);
      }
    };
    fetchSettings();
  }, []);

  // ---- Fallbacks (used only if backend has nothing) ----
  const fallbackPhones = ['+91 9971591023'];
  const fallbackWhatsapps = ['+91 9971591023'];
  const fallbackEmails = ['info@wisdommarketing.in'];

  // Prefer backend, else fallback. Filter out empty strings.
  const phones: string[] = (
    settings?.phones?.length ? settings.phones : fallbackPhones
  ).filter(Boolean);

  const whatsapps: string[] = (
    settings?.whatsapps?.length ? settings.whatsapps : fallbackWhatsapps
  ).filter(Boolean);

  const emails: string[] = (
    settings?.emails?.length ? settings.emails : fallbackEmails
  ).filter(Boolean);

  const address =
    settings?.address ?? 'Sec-15A, Faridabad Haryana - 121007';

  // strip non-digits for wa.me / tel: links
  const digits = (v: string) => v.replace(/\D/g, '');

  return (
    <footer className="w-full bg-[#0a0a0a] text-white font-sans relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1600px]">
        {/* ===== Main Grid ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-0">

          {/* ===== BLUE CONTACT CARD ===== */}
          <div
            className="lg:col-span-3 relative"
            style={{ filter: 'drop-shadow(4px 6px 10px rgba(0,0,0,0.45))' }}
          >
            <div
              // className="relative bg-gradient-to-br from-[#0129FF] to-[#031143] p-8 pr-10 h-full min-h-[30px] flex flex-col justify-center"
              className="relative bg-gradient-to-br from-[#E10600] to-[#4A0300] p-8 pr-10 h-full min-h-[30px] flex flex-col justify-center"
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 48px) 0, 100% 48px, 100% 100%, 0 100%)',
              }}
            >
              <h3 className="text-[26px] font-bold mb-7 text-white">
                Contact Us
              </h3>

              <ul className="space-y-5">
                {/* Address */}
                {address && (
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" />
                    <span className="text-[14px] leading-relaxed text-white font-normal">
                      {address}
                    </span>
                  </li>
                )}

                {/* Emails (multiple) */}
                {emails.length > 0 && (
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" />
                    <div className="text-[14px] leading-relaxed text-white space-y-1">
                      <span className="block">
                        {emails.length > 1 ? 'Email Us :' : 'Email Us :'}
                      </span>
                      {emails.map((e, i) => (
                        <a
                          key={i}
                          href={`mailto:${e}`}
                          className="block hover:underline break-all"
                        >
                          {e}
                        </a>
                      ))}
                    </div>
                  </li>
                )}

                {/* Phones (multiple) */}
                {phones.length > 0 && (
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" />
                    <div className="text-[14px] leading-relaxed text-white space-y-1">
                      <span className="block">
                        {phones.length > 1 ? 'Phone :' : 'Phone :'}
                      </span>
                      {phones.map((p, i) => (
                        <a
                          key={i}
                          href={`tel:${digits(p)}`}
                          className="block hover:underline"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </li>
                )}

                {/* WhatsApps (multiple) */}
                {whatsapps.length > 0 && (
                  <li className="flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" />
                    <div className="text-[14px] leading-relaxed text-white space-y-1">
                      <span className="block">WhatsApp :</span>
                      {whatsapps.map((w, i) => (
                        <a
                          key={i}
                          href={`https://wa.me/${digits(w)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:underline"
                        >
                          {w}
                        </a>
                      ))}
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* ===== Right Side: 3 Columns ===== */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 lg:py-12 px-6 lg:px-10">

            {/* --- IT Services --- */}
            <div>
              <h4 className="text-[20px] font-semibold text-white mb-6">
                IT Services
              </h4>
              <ul className="space-y-4">
                {services.map((svc) => (
                  <li key={svc.slug}>
                    <span className="text-[13px] text-white/90 hover:text-[#ff6b00] transition-colors duration-200 uppercase tracking-wide">
                      {svc.shortTitle}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- COMPANY --- */}
            <div>
              <h4 className="text-[20px] font-semibold text-white mb-6">
                COMPANY
              </h4>
              <ul className="space-y-4">
                <li>
                  <span className="text-[14px] text-white/90 hover:text-[#ff6b00] transition-colors">
                    Web Development
                  </span>
                </li>
                <li>
                  <span className="text-[14px] text-white/90 hover:text-[#ff6b00] transition-colors">
                    wordpress development
                  </span>
                </li>
                <li>
                  <span className="text-[14px] text-white/90 hover:text-[#ff6b00] transition-colors">
                    Digital Marketing Institutes
                  </span>
                </li>
                <li>
                  <span className="text-[14px] text-white/90 hover:text-[#ff6b00] transition-colors">
                    Privacy Policy
                  </span>
                </li>
                <li>
                  <span className="text-[14px] text-white/90 hover:text-[#ff6b00] transition-colors">
                    Contact Us
                  </span>
                </li>
              </ul>
            </div>

            {/* --- About Us --- */}
            <div>
              <h4 className="text-[20px] font-semibold text-white mb-6">
                About Us
              </h4>
              <p className="text-[14px] text-white/90 leading-relaxed mb-6">
                {siteConfig.description ??
                  'We are a team of professional Digital Marketing experts. We strive to transform your marketing experience taking it to a brand-new level.'}
              </p>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 bg-[#F90D0E] px-5 py-2.5 text-[13px] font-semibold text-white rounded transition-colors hover:bg-[#6BAA44]"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="border-t border-white/10 py-5 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 px-6 lg:px-10">
          <p className="text-[13px] text-gray-300 text-center">
            © {new Date().getFullYear()}{' '}
            {siteConfig.name ?? 'Wisdom Marketing-Digital Marketing'} | All
            rights reserved
          </p>

          <div className="flex items-center gap-3">
            {[
              { Icon: Linkedin, href: settings?.socialLinks?.linkedin, label: 'LinkedIn' },
              { Icon: Twitter, href: settings?.socialLinks?.twitter, label: 'Twitter' },
              { Icon: Instagram, href: settings?.socialLinks?.instagram, label: 'Instagram' },
              { Icon: Facebook, href: settings?.socialLinks?.facebook, label: 'Facebook' },
            ]
              .filter((s) => s.href)
              .map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-[#ff6b00] hover:bg-[#ff6b00] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}