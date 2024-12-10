import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-muted to-white pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 hover:bg-primary/20 transition-colors duration-300 cursor-pointer backdrop-blur-sm"
          >
            Connecting Investors & Startups
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-secondary mb-6 tracking-tight hover:text-primary transition-colors duration-300"
          >
            Where Great Ideas Meet Smart Capital
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-secondary/60 mb-12 max-w-2xl mx-auto"
          >
            InvestorTinder makes it easy to connect startups with the right
            investors. Swipe, match, and grow your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button className="bg-primary text-white hover:bg-primary/90 h-12 px-8 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25">
              Join as Startup
            </Button>
            <Button
              variant="outline"
              className="border-2 h-12 px-8 text-lg hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-secondary/25"
            >
              Join as Investor
            </Button>
          </motion.div>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="p-8 rounded-2xl bg-white/50 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/60 group"
            >
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-secondary/60 group-hover:text-secondary transition-colors duration-300">
                Active Investors
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="p-8 rounded-2xl bg-white/50 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/60 group"
            >
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                1.2K
              </div>
              <div className="text-secondary/60 group-hover:text-secondary transition-colors duration-300">
                Startups
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="p-8 rounded-2xl bg-white/50 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/60 group"
            >
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                $50M+
              </div>
              <div className="text-secondary/60 group-hover:text-secondary transition-colors duration-300">
                Capital Raised
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};