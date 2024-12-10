import { NavHeader } from "@/components/ui/nav-header";
import { HeroSection } from "@/components/ui/hero-section";
import { ProfileCard } from "@/components/ui/profile-card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavHeader />
      <HeroSection />
      <section className="py-24 bg-muted" id="features">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              How It Works
            </span>
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Simplified Startup-Investor Matching
            </h2>
            <p className="text-xl text-secondary/60">
              Our intelligent matching algorithm connects you with the perfect
              partners for your business journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ProfileCard
              name="TechVision AI"
              description="AI-powered analytics platform for business intelligence"
              image="/placeholder.svg"
              tags={["AI/ML", "SaaS", "Series A"]}
            />
            <ProfileCard
              name="GreenEnergy Solutions"
              description="Renewable energy solutions for sustainable future"
              image="/placeholder.svg"
              tags={["CleanTech", "Hardware", "Seed"]}
            />
            <ProfileCard
              name="FinTech Revolution"
              description="Next-gen payment processing platform"
              image="/placeholder.svg"
              tags={["FinTech", "Blockchain", "Series B"]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;