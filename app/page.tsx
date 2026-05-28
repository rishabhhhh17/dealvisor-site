import { Nav } from '@/components/sections/nav';
import { Hero } from '@/components/sections/hero';
import { MarqueeBar } from '@/components/sections/marquee-bar';
import { StatStrip } from '@/components/sections/stat-strip';
import { Problem } from '@/components/sections/problem';
import { Bento } from '@/components/sections/bento';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Credibility } from '@/components/sections/credibility';
import { CTA } from '@/components/sections/cta';
import { FAQ } from '@/components/sections/faq';
import { Footer } from '@/components/sections/footer';

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <MarqueeBar />
      <StatStrip />
      <Problem />
      <Bento />
      <HowItWorks />
      <Credibility />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
