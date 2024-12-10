import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-muted to-white pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            Connecting Investors & Startups
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 tracking-tight">
            Where Great Ideas Meet Smart Capital
          </h1>
          <p className="text-xl text-secondary/60 mb-12 max-w-2xl mx-auto">
            InvestorTinder makes it easy to connect startups with the right
            investors. Swipe, match, and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-primary text-white hover:bg-primary/90 h-12 px-8 text-lg">
              Join as Startup
            </Button>
            <Button
              variant="outline"
              className="border-2 h-12 px-8 text-lg hover:bg-secondary hover:text-white transition-colors"
            >
              Join as Investor
            </Button>
          </div>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-secondary/60">Active Investors</div>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">1.2K</div>
              <div className="text-secondary/60">Startups</div>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-secondary/60">Capital Raised</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};