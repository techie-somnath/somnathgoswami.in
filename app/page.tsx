import { SiteNav } from '@/components/portfolio/site-nav'
import { HeroSection } from '@/components/portfolio/hero-section'
import { AboutSection } from '@/components/portfolio/about-section'
import { WorkSection } from '@/components/portfolio/work-section'
import { AnalysisSection } from '@/components/portfolio/analysis-section'
import { JournalRedirectSection } from '@/components/portfolio/journal-redirect-section'
import { BeyondSection } from '@/components/portfolio/beyond-section'
import { ConnectSection } from '@/components/portfolio/connect-section'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <AnalysisSection />
        <JournalRedirectSection />
        <BeyondSection />
        <ConnectSection />
      </main>
    </>
  )
}
