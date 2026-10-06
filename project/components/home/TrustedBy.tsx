

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

const PER_GRID = 3; // logos inside one grid box

const chunk = <T,>(arr: T[], size: number): T[][] => {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

const gridBox =
  'grid grid-cols-3 items-center gap-2 border-b border-r border-[#bdb9b1] bg-white px-3 py-6 sm:gap-4 sm:px-6 md:py-8';

const Heading = () => (
  <div className="mb-10 text-center">
    <h2 className="text-2xl  uppercase tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl">
      Our Precious Clients
    </h2>
    <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm">
      Our integrated model leads to the efficiency and transparency of our work.
      <br className="hidden sm:block" /> Below are some of our remarkable clients.
    </p>
  </div>
);

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

  if (loading) {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <Heading />
          <div className="mx-auto max-w-5xl border-l border-t border-[#bdb9b1]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className={gridBox}>
                  {Array.from({ length: PER_GRID }).map((__, j) => (
                    <div key={j} className="mx-auto h-10 w-full max-w-[110px] animate-pulse rounded bg-gray-200" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (clients.length === 0) return null;

  const groups = chunk(clients, PER_GRID);
  // Keep an even number of grids so the last desktop row stays closed.
  const padGrid = groups.length % 2 === 1;

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <Heading />

        <div className="mx-auto max-w-5xl border-l border-t border-[#bdb9b1]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {groups.map((group, gi) => (
              <div key={gi} className={gridBox}>
                {group.map((client) => {
                  const logo = (
                    <div className="relative mx-auto h-10 w-full max-w-[130px] sm:h-12 md:h-14">
                      <Image
                        src={client.logo.secure_url}
                        alt={client.companyName}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100px, 140px"
                      />
                    </div>
                  );

                  return client.websiteUrl ? (
                    <Link
                      key={client._id}
                      href={client.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={client.companyName}
                      className="block transition-transform duration-300 hover:scale-105"
                    >
                      {logo}
                    </Link>
                  ) : (
                    <div key={client._id}>{logo}</div>
                  );
                })}
              </div>
            ))}

            {padGrid && <div className={`${gridBox} hidden md:block`} />}
          </div>
        </div>
      </div>
    </section>
  );
}