import Link from 'next/link';
import { LANDING_CONFIGS } from '@/config/landings';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Маркетингові лендінги</h1>
      <p className="text-lg md:text-xl mb-10">Оберіть лендінг:</p>
      <div className="flex flex-wrap gap-4 justify-center">
        {LANDING_CONFIGS.map((config) => (
          <Link
            key={config.name}
            href={`/${config.name}`}
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition"
          >
            {config.name.toUpperCase()}
          </Link>
        ))}
      </div>
    </main>
  );
}