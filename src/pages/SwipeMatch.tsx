import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, X, MessageCircle, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface StartupProfile {
  id: string;
  name: string;
  description: string;
  industry: string;
  image: string;
}

const mockStartups: StartupProfile[] = [
  {
    id: "1",
    name: "EcoTech Solutions",
    description: "Sustainable energy solutions for modern businesses",
    industry: "CleanTech",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "HealthAI",
    description: "AI-powered healthcare diagnostics",
    industry: "HealthTech",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    name: "FinFlow",
    description: "Next-generation payment processing",
    industry: "FinTech",
    image: "/placeholder.svg",
  },
];

const SwipeMatch = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<string | null>(null);
  const { toast } = useToast();

  const currentProfile = mockStartups[currentIndex];

  const handleSwipe = (swipeDirection: "left" | "right") => {
    setDirection(swipeDirection);
    
    if (swipeDirection === "right") {
      toast({
        title: "It's a match! 🎉",
        description: `You liked ${currentProfile.name}`,
      });
    }

    setTimeout(() => {
      setDirection(null);
      if (currentIndex < mockStartups.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0); // Reset to beginning when reaching the end
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-primary/10 p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-secondary">
          Find Your Next Investment
        </h1>
        
        <div className="relative h-[500px] w-full">
          <AnimatePresence>
            {currentProfile && (
              <motion.div
                key={currentProfile.id}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{
                  x: direction === "left" ? -300 : direction === "right" ? 300 : 0,
                  opacity: 0,
                  transition: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <Card className="overflow-hidden backdrop-blur-lg bg-white/90 shadow-xl">
                  <div
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${currentProfile.image})` }}
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2">{currentProfile.name}</h2>
                    <p className="text-muted-foreground mb-4">{currentProfile.description}</p>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {currentProfile.industry}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            className="h-14 w-14 rounded-full border-2 border-destructive hover:bg-destructive hover:text-white transition-colors"
            onClick={() => handleSwipe("left")}
          >
            <X className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="h-14 w-14 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-colors"
            onClick={() => handleSwipe("right")}
          >
            <Heart className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-primary"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-primary"
          >
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SwipeMatch;