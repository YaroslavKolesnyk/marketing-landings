import { notFound } from 'next/navigation';
import { LANDING_CONFIGS } from '@/config/landings';
import { Banner } from '@/components/Banner';
import { Advantages } from '@/components/Advantages';
import { Reviews } from '@/components/Reviews';
import { Footer } from '@/components/Footer';

export async function generateStaticParams() {
  return LANDING_CONFIGS.map((config) => ({
    landingName: config.name,
  }));
}

export default function LandingPage({ params }: { params: { landingName: string } }) {
  const config = LANDING_CONFIGS.find((c) => c.name === params.landingName);
  if (!config) notFound();

  return (
    <>
      <Banner title={config.title} description={config.description} />
      <Advantages />
      <Reviews />
      <Footer />
    </>
  );
}