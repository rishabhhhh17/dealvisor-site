import { Nav } from '@/components/sections/nav';
import { Hero } from '@/components/sections/hero';
import { LogoStrip } from '@/components/sections/logo-strip';
import { StatStrip } from '@/components/sections/stat-strip';
import { FeatureRow } from '@/components/sections/feature-row';
import { PipelineMock, MandateMock, KnowledgeMock, AskMock } from '@/components/sections/feature-mocks';
import { PullQuote } from '@/components/sections/pull-quote';
import { Problem } from '@/components/sections/problem';
import { HowItWorks } from '@/components/sections/how-it-works';
import { UseCases } from '@/components/sections/use-cases';
import { Testimonials } from '@/components/sections/testimonials';
import { Credibility } from '@/components/sections/credibility';
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
        <FeatureRow
          eyebrow="Pipeline"
          title={<>A pipeline that <span className="text-accent">speaks IB.</span></>}
          body="Seven stages from Origination to Closed. Drag to advance. Velocity benchmarks flag stale mandates before they go cold."
          bullets={[
            'IB-native stages, not SaaS stages',
            'Drag-to-advance with audit trail',
            'Velocity alerts on stale mandates',
          ]}
          visual={<PipelineMock />}
          cta={{ label: 'Book a demo', href: '#pricing' }}
          tone="cream"
        />

        <FeatureRow
          reverse
          eyebrow="Mandates"
          title={<>One page <span className="text-accent">per mandate.</span> Everything on it.</>}
          body="Counterparties, NDAs, IMs, LOIs, retainers, success fees, recorded calls. The full life of a mandate, in one place."
          bullets={[
            'Counterparty-by-counterparty NDA + LOI status',
            'Retainer + success-fee economics inline',
            'Meeting transcripts auto-attached',
          ]}
          visual={<MandateMock />}
          tone="white"
        />
      </div>

      <PullQuote />

      <FeatureRow
        eyebrow="Knowledge"
        title={<>A wiki <span className="text-accent">your firm uses.</span></>}
        body="Wikilinks between people, firms, and mandates. Hybrid lexical and vector search across every IM, teaser, and memo your firm has produced."
        bullets={[
          'Hybrid lexical + pgvector search',
          'Templates for sector and target profiles',
          'Memos linked back to the mandate they came from',
        ]}
        visual={<KnowledgeMock />}
        tone="cream"
      />

      <FeatureRow
        reverse
        eyebrow="Ask"
        title={<>Ask in plain English. <span className="text-accent">Get cited answers.</span></>}
        body={<>&ldquo;Which counterparties signed an NDA in Q1?&rdquo; &mdash; grounded in your firm&apos;s data, never the open web.</>}
        bullets={[
          'Inline citations to documents and transcripts',
          "Grounded in your firm's data, never the open web",
          'Read-only — no autonomous actions',
        ]}
        visual={<AskMock />}
        tone="white"
      />

      <Problem />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <Credibility />
      <PreFooterCTA />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
