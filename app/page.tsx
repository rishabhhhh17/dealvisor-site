import { Nav } from '@/components/sections/nav';
import { Hero } from '@/components/sections/hero';
import { LogoStrip } from '@/components/sections/logo-strip';
import { StatStrip } from '@/components/sections/stat-strip';
import { FeatureSpotlight } from '@/components/sections/feature-spotlight';
import { PipelineMock, MandateMock, KnowledgeMock, AskMock } from '@/components/sections/feature-mocks';
import { PullQuote } from '@/components/sections/pull-quote';
import { UseCases } from '@/components/sections/use-cases';
import { PreFooterCTA } from '@/components/sections/pre-footer-cta';
import { CTA } from '@/components/sections/cta';
import { FAQ } from '@/components/sections/faq';
import { Footer } from '@/components/sections/footer';

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <LogoStrip />
      <StatStrip />

      <div id="product">
        <FeatureSpotlight
          eyebrow="Pipeline"
          title={<>A pipeline that <span className="text-accent">speaks IB.</span></>}
          body="Seven stages from Origination to Closed. Drag to advance. Velocity benchmarks flag stale mandates before they go cold."
          visual={<PipelineMock />}
          tone="cream"
        />
        <FeatureSpotlight
          eyebrow="Mandates"
          title={<>One page per mandate. <span className="text-accent">Everything on it.</span></>}
          body="Counterparties, NDAs, IMs, LOIs, retainers, success fees, recorded calls — in one place."
          visual={<MandateMock />}
          tone="white"
        />
      </div>

      <PullQuote />

      <FeatureSpotlight
        eyebrow="Knowledge"
        title={<>A wiki <span className="text-accent">your firm uses.</span></>}
        body="Wikilinks between people, firms, and mandates. Hybrid lexical and vector search across every IM, teaser, and memo."
        visual={<KnowledgeMock />}
        tone="cream"
      />
      <FeatureSpotlight
        eyebrow="Ask"
        title={<>Ask in plain English. <span className="text-accent">Get cited answers.</span></>}
        body="Grounded in your firm's data, never the open web. Every claim has a source you can click."
        visual={<AskMock />}
        tone="white"
      />

      <UseCases />
      <PreFooterCTA />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
