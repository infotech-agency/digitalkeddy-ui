

// import './globals.css';
// import type { Metadata } from 'next';
// import { Poppins } from 'next/font/google';
// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';

// import { BASE_URL } from '@/utils/baseUrl';

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700', '800'],
//   variable: '--font-poppins',
//   display: 'swap',
// });

// async function getSEOSettings() {
//   try {
//     const res = await fetch(`${BASE_URL}/seo`, {
//       cache: 'no-store',
//     });
//     if (!res.ok) return null;
//     const data = await res.json();
//     return data.data;
//   } catch (error) {
//     console.log("SEO fetch error:", error);
//     return null;
//   }
// }

// async function getHomeSchema() {
//   try {
//     // http://localhost:5000/api/pages/slug/home
//     const res = await fetch(`${BASE_URL}/pages/slug/home`, {
//       cache: 'no-store',
//     });
//     if (!res.ok) return null;
//     const data = await res.json();
//     return data?.data?.schemaJson || null;
//   } catch (error) {
//     console.log("Schema fetch error:", error);
//     return null;
//   }
// }

// // ---------- Generic <head> HTML parser ----------
// // Parses a raw HTML string that may contain <script>, <meta>, <link>,
// // and <noscript> tags (in any combination/order) into structured nodes
// // so each can be rendered as its own React element.

// type HeadNode =
//   | { type: 'script'; attrs: string; content: string }
//   | { type: 'meta'; attrs: string }
//   | { type: 'link'; attrs: string }
//   | { type: 'noscript'; content: string };

// function parseHeadElements(html?: string | null): HeadNode[] {
//   if (!html) return [];

//   const nodes: HeadNode[] = [];
//   // Order matters: script/noscript (with closing tags) checked first,
//   // then void-ish tags like meta/link.
//   const regex =
//     /<script([^>]*)>([\s\S]*?)<\/script>|<noscript>([\s\S]*?)<\/noscript>|<meta([^>]*?)\/?>|<link([^>]*?)\/?>/gi;

//   let match: RegExpExecArray | null;
//   while ((match = regex.exec(html)) !== null) {
//     if (match[1] !== undefined) {
//       nodes.push({ type: 'script', attrs: match[1] || '', content: match[2] || '' });
//     } else if (match[3] !== undefined) {
//       nodes.push({ type: 'noscript', content: match[3] || '' });
//     } else if (match[4] !== undefined) {
//       nodes.push({ type: 'meta', attrs: match[4] || '' });
//     } else if (match[5] !== undefined) {
//       nodes.push({ type: 'link', attrs: match[5] || '' });
//     }
//   }

//   return nodes;
// }

// // Parses an attribute string like: name="foo" content="bar" async
// // into a plain object: { name: "foo", content: "bar", async: true }
// function parseAttrs(attrString: string): Record<string, string | boolean> {
//   const attrs: Record<string, string | boolean> = {};
//   const attrRegex = /([a-zA-Z0-9_-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'))?/g;
//   let m: RegExpExecArray | null;

//   while ((m = attrRegex.exec(attrString)) !== null) {
//     const key = m[1];
//     if (!key) continue;
//     const value = m[2] !== undefined ? m[2] : m[3] !== undefined ? m[3] : true;
//     attrs[key] = value;
//   }

//   return attrs;
// }

// // Checks header, body, and footer script blocks for a GTM container ID,
// // since GTM can legitimately be placed in any of these locations.
// function extractGTMId(...htmlBlocks: (string | null | undefined)[]): string | null {
//   for (const html of htmlBlocks) {
//     if (!html) continue;
//     const match = html.match(/GTM-[A-Z0-9]+/);
//     if (match) return match[0];
//   }
//   return null;
// }

// // Renders an array of parsed head nodes as React elements.
// function renderHeadElements(nodes: HeadNode[], keyPrefix: string) {
//   return nodes.map((node, i) => {
//     const key = `${keyPrefix}-${i}`;

//     if (node.type === 'meta') {
//       const attrs = parseAttrs(node.attrs) as any;
//       return <meta key={key} {...attrs} />;
//     }

//     if (node.type === 'link') {
//       const attrs = parseAttrs(node.attrs) as any;
//       return <link key={key} {...attrs} />;
//     }

//     if (node.type === 'noscript') {
//       // May contain raw HTML like <img .../> (e.g. Facebook Pixel fallback)
//       return (
//         <noscript key={key} dangerouslySetInnerHTML={{ __html: node.content }} />
//       );
//     }

//     // script
//     const attrs = parseAttrs(node.attrs);
//     const srcMatch = node.attrs.match(/src=["']([^"']+)["']/);
//     const isAsync = !!attrs.async;
//     const isDefer = !!attrs.defer;
//     const scriptType = typeof attrs.type === 'string' ? attrs.type : undefined;

//     if (srcMatch) {
//       return (
//         <script
//           key={key}
//           src={srcMatch[1]}
//           async={isAsync}
//           defer={isDefer}
//           type={scriptType}
//         />
//       );
//     }

//     return (
//       <script
//         key={key}
//         type={scriptType}
//         dangerouslySetInnerHTML={{ __html: node.content }}
//       />
//     );
//   });
// }

// export const metadata: Metadata = {
//   metadataBase: new URL('https://digitalkeddy.in'),
//   title: {
//     default: 'DigitalKeddy | Digital Marketing, SEO & Web Development',
//     template: '%s | DigitalKeddy',
//   },
//   icons: {
//     icon: "/svg/favicon.ico",
//   },
//   alternates: {
//     canonical: '/',
//   },
//   openGraph: {
//     siteName: "DigitalKeddy",
//     title: "DigitalKeddy",
//     url: "https://digitalkeddy.in",
//     type: "website",
//   },
//   description:
//     'DigitalKeddy is a full-service digital marketing agency delivering SEO, PPC, web development, content marketing, and social media strategies.',
// };

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const seo = await getSEOSettings();
//   const schema = await getHomeSchema();

//   // FIX 1: <noscript> head me invalid hai (iframe wala GTM noscript head ko
//   // tod deta hai), isliye header se noscript nodes hata diye.
//   // GTM ka noscript neeche <body> ke start me gtmId se already render hota hai.
//   const headerNodes = parseHeadElements(seo?.headerScripts).filter(
//     (n) => n.type !== 'noscript'
//   );
//   const bodyNodes = parseHeadElements(seo?.bodyScripts);
//   const footerNodes = parseHeadElements(seo?.footerScripts);

//   // Check header, body, AND footer scripts for GTM ID,
//   // since GTM script could be placed in any of these locations
//   const gtmId = extractGTMId(seo?.headerScripts, seo?.bodyScripts, seo?.footerScripts);

//   return (
//     <html lang="en" className={poppins.variable}>
//       <head>
//         {/* Header Scripts + Meta tags (GTM, gtag, FB Pixel, Google verification, etc.) */}
//         {renderHeadElements(headerNodes, 'header')}

//         {/* Google Analytics (only used if separate googleAnalytics field is set) */}
//         {seo?.googleAnalytics && (
//           <>
//             <script
//               async
//               src={`https://www.googletagmanager.com/gtag/js?id=${seo.googleAnalytics}`}
//             />
//             <script
//               dangerouslySetInnerHTML={{
//                 __html: `
//                   window.dataLayer = window.dataLayer || [];
//                   function gtag(){dataLayer.push(arguments);}
//                   gtag('js', new Date());
//                   gtag('config','${seo.googleAnalytics}');
//                 `,
//               }}
//             />
//           </>
//         )}

//         {/* Schema JSON-LD */}
//         {schema?.map((item: any, index: number) => {
//           // FIX 2: agar item string nahi hai to .split crash na kare
//           if (typeof item !== 'string') return null;

//           const scripts = item
//             .split(/<script type="application\/ld\+json">|<\/script>/)
//             .filter(Boolean)
//             .map((s: string) => s.trim())
//             .filter((s: string) => s.startsWith('{'));

//           return scripts.map((json: string, i: number) => (
//             <script
//               key={`${index}-${i}`}
//               type="application/ld+json"
//               dangerouslySetInnerHTML={{ __html: json }}
//             />
//           ));
//         })}
//       </head>

//       <body className="font-sans antialiased">
//         {/* GTM noscript fallback — required, goes right after <body> opens.
//             Works whether GTM script lives in headerScripts, bodyScripts, or footerScripts. */}
//         {gtmId && (
//           <noscript>
//             <iframe
//               src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
//               height="0"
//               width="0"
//               style={{ display: 'none', visibility: 'hidden' }}
//             />
//           </noscript>
//         )}

//         {/* Body Scripts — rendered right after <body> opens */}
//         {renderHeadElements(bodyNodes, 'body')}
//         <Header />
//         <main>{children}</main>
//         <Footer />

//         {/* Footer Scripts */}
//         {renderHeadElements(footerNodes, 'footer')}
//       </body>
//     </html>
//   );
// }


import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BASE_URL } from '@/utils/baseUrl';

const GTM_ID = 'GTM-NJSH59TQ';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

async function getSEOSettings() {
  try {
    const res = await fetch(`${BASE_URL}/seo`, {
      cache: 'no-store',
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data?.data ?? null;
  } catch (error) {
    console.error('SEO fetch error:', error);
    return null;
  }
}

async function getHomeSchema() {
  try {
    const res = await fetch(`${BASE_URL}/pages/slug/home`, {
      cache: 'no-store',
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data?.data?.schemaJson || null;
  } catch (error) {
    console.error('Schema fetch error:', error);
    return null;
  }
}

type HeadNode =
  | { type: 'script'; attrs: string; content: string }
  | { type: 'meta'; attrs: string }
  | { type: 'link'; attrs: string }
  | { type: 'noscript'; content: string };

function parseHeadElements(html?: string | null): HeadNode[] {
  if (!html) return [];

  const nodes: HeadNode[] = [];

  const regex =
    /<script([^>]*)>([\s\S]*?)<\/script>|<noscript>([\s\S]*?)<\/noscript>|<meta([^>]*?)\/?>|<link([^>]*?)\/?>/gi;

  let match: RegExpExecArray | null;

  while ((match = regex.exec(html)) !== null) {
    if (match[1] !== undefined) {
      nodes.push({
        type: 'script',
        attrs: match[1] || '',
        content: match[2] || '',
      });
    } else if (match[3] !== undefined) {
      nodes.push({
        type: 'noscript',
        content: match[3] || '',
      });
    } else if (match[4] !== undefined) {
      nodes.push({
        type: 'meta',
        attrs: match[4] || '',
      });
    } else if (match[5] !== undefined) {
      nodes.push({
        type: 'link',
        attrs: match[5] || '',
      });
    }
  }

  return nodes;
}

function parseAttrs(
  attrString: string
): Record<string, string | boolean> {
  const attrs: Record<string, string | boolean> = {};

  const attrRegex =
    /([a-zA-Z0-9_-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;

  let match: RegExpExecArray | null;

  while ((match = attrRegex.exec(attrString)) !== null) {
    const key = match[1];

    if (!key) continue;

    const value =
      match[2] !== undefined
        ? match[2]
        : match[3] !== undefined
          ? match[3]
          : match[4] !== undefined
            ? match[4]
            : true;

    attrs[key] = value;
  }

  return attrs;
}

function renderHeadElements(
  nodes: HeadNode[],
  keyPrefix: string
) {
  return nodes.map((node, i) => {
    const key = `${keyPrefix}-${i}`;

    if (node.type === 'meta') {
      const attrs = parseAttrs(node.attrs) as React.MetaHTMLAttributes<HTMLMetaElement>;

      return <meta key={key} {...attrs} />;
    }

    if (node.type === 'link') {
      const attrs = parseAttrs(node.attrs) as React.LinkHTMLAttributes<HTMLLinkElement>;

      return <link key={key} {...attrs} />;
    }

    if (node.type === 'noscript') {
      return (
        <noscript
          key={key}
          dangerouslySetInnerHTML={{ __html: node.content }}
        />
      );
    }

    const attrs = parseAttrs(node.attrs);
    const src =
      typeof attrs.src === 'string' ? attrs.src : undefined;
    const scriptType =
      typeof attrs.type === 'string' ? attrs.type : undefined;

    const isAsync = attrs.async === true || attrs.async === 'async';
    const isDefer = attrs.defer === true || attrs.defer === 'defer';

    if (src) {
      return (
        <script
          key={key}
          src={src}
          async={isAsync}
          defer={isDefer}
          type={scriptType}
        />
      );
    }

    return (
      <script
        key={key}
        type={scriptType}
        dangerouslySetInnerHTML={{ __html: node.content }}
      />
    );
  });
}

export const metadata: Metadata = {
  metadataBase: new URL('https://digitalkeddy.in'),
  title: {
    default: 'DigitalKeddy | Digital Marketing, SEO & Web Development',
    template: '%s | DigitalKeddy',
  },
  icons: {
    icon: '/svg/favicon.ico',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'DigitalKeddy',
    title: 'DigitalKeddy',
    url: 'https://digitalkeddy.in',
    type: 'website',
  },
  description:
    'DigitalKeddy is a full-service digital marketing agency delivering SEO, PPC, web development, content marketing, and social media strategies.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const seo = await getSEOSettings();
  const schema = await getHomeSchema();

  // Avoid duplicate noscript fallback from CMS header scripts.
  const headerNodes = parseHeadElements(
    seo?.headerScripts
  ).filter((node) => node.type !== 'noscript');

  const bodyNodes = parseHeadElements(seo?.bodyScripts);
  const footerNodes = parseHeadElements(seo?.footerScripts);

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {renderHeadElements(headerNodes, 'header')}

        {seo?.googleAnalytics && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${seo.googleAnalytics}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${seo.googleAnalytics}');
                `,
              }}
            />
          </>
        )}

        {Array.isArray(schema) &&
          schema.map((item: unknown, index: number) => {
            if (typeof item !== 'string') return null;

            const scripts = item
              .split(
                /<script type="application\/ld\+json">|<\/script>/i
              )
              .filter(Boolean)
              .map((s) => s.trim())
              .filter((s) => s.startsWith('{'));

            return scripts.map((json, i) => (
              <script
                key={`schema-${index}-${i}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: json }}
              />
            ));
          })}

        {!Array.isArray(schema) &&
          typeof schema === 'string' &&
          schema.trim().startsWith('{') && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: schema }}
            />
          )}
      </head>

      <body className="font-sans antialiased">
        {/* Google Tag Manager: fixed container ID */}
        <GoogleTagManager gtmId={GTM_ID} />

        {/* GTM noscript fallback must be immediately after body opens */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>

        {renderHeadElements(bodyNodes, 'body')}

        <Header />
        <main>{children}</main>
        <Footer />

        {renderHeadElements(footerNodes, 'footer')}
      </body>
    </html>
  );
}
