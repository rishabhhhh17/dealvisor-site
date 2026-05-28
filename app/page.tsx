import { Nav } from '@/components/sections/nav';
import { Hero } from '@/components/sections/hero';
import { StatStrip } from '@/components/sections/stat-strip';
import { Problem } from '@/components/sections/problem';
import { ProductShowcase } from '@/components/sections/product-showcase';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Credibility } from '@/components/sections/credibility';
import { CTA } from '@/components/sections/cta';
import { FAQ } from '@/components/sections/faq';
import { Footer } from '@/components/sections/footer';

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <StatStrip />
      <Problem />
      <ProductShowcase />
      <HowItWorks />
      <Credibility />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
