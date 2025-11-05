'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export const Banner = ({ title, description }: { title: string; description: string }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-blue-600 text-white py-24 px-6 text-center min-h-screen flex flex-col justify-center items-center">
      <h1 data-aos="fade-up" className="text-4xl md:text-6xl font-bold mb-6">
        {title}
      </h1>
      <p data-aos="fade-up" data-aos-delay="100" className="text-lg md:text-xl mb-8 max-w-2xl">
        {description}
      </p>
      <button
        data-aos="fade-up"
        data-aos-delay="200"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick={() => (window as any).fbq?.('track', 'Lead')} // БЕЗПЕЧНИЙ ВИКЛИК
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition transform hover:-translate-y-1"
      >
        Зв’язатися з нами
      </button>
    </section>
  );
};