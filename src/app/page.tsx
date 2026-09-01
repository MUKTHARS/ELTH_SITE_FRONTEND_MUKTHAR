import {
  HeroSection,
  // LogoBar,
  ProblemSection,
  PlatformSection,
  SolutionSection,
  FeaturesExplainer,
  // FeaturesScribe,
  // FeaturesSymptom,
  // FeaturesLabReport,
  // FeaturesBriefing,
  // FeaturesDrugCheck,
  PatientAppSection,
  // HowItWorks,
  AudienceSection,
  // StatsSection,
  // ConsentSection,
  // IntegrationsSection,
  // TestimonialsSection,
  // RoadmapSection,
  // ComplianceSection,
  TrustStripSection,
  CtaSection,
} from '@sections/home'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <LogoBar /> */}
      <ProblemSection />
      <PlatformSection />
      <SolutionSection />
      <FeaturesExplainer />
      {/* <FeaturesScribe /> */}
      {/* <FeaturesSymptom /> */}
      {/* <FeaturesLabReport /> */}
      {/* <FeaturesBriefing /> */}
      {/* <FeaturesDrugCheck /> */}
      <PatientAppSection />
      {/* <HowItWorks /> */}
      <AudienceSection />
      {/* <StatsSection /> */}
      {/* <ConsentSection /> */}
      {/* <IntegrationsSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <RoadmapSection /> */}
      {/* <ComplianceSection /> */}
      <TrustStripSection />
      <CtaSection />
    </>
  )
}
