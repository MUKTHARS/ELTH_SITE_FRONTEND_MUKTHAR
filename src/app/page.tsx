import {
  HeroSection,
  LogoBar,
  ProblemSection,
  SolutionSection,
  FeaturesScribe,
  FeaturesSymptom,
  FeaturesLabReport,
  FeaturesBriefing,
  FeaturesDrugCheck,
  HowItWorks,
  StatsSection,
  ConsentSection,
  IntegrationsSection,
  TestimonialsSection,
  RoadmapSection,
  ComplianceSection,
  CtaSection,
} from '@sections/home'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoBar />
      <ProblemSection />
      <SolutionSection />
      <FeaturesScribe />
      <FeaturesSymptom />
      <FeaturesLabReport />
      <FeaturesBriefing />
      <FeaturesDrugCheck />
      <HowItWorks />
      <StatsSection />
      <ConsentSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <RoadmapSection />
      <ComplianceSection />
      <CtaSection />
    </>
  )
}
