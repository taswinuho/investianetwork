import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { motion } from "framer-motion";

const CredibilityCheck = () => {
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);
  const [credibilityScore, setCredibilityScore] = useState<number | null>(null);

  const getColorByScore = (score: number) => {
    if (score >= 80) return "#9b87f5";
    if (score >= 60) return "#7E69AB";
    return "#ea384c";
  };

  const getTextByScore = (score: number) => {
    if (score >= 80) return "High Credibility";
    if (score >= 60) return "Medium Credibility";
    return "Low Credibility";
  };

  const analyzeCredibility = async () => {
    if (!companyName.trim()) {
      toast.error("Please enter a company name");
      return;
    }

    setLoading(true);
    try {
      // Simulated AI analysis - replace with actual AI implementation
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const mockScore = Math.floor(Math.random() * 100);
      setCredibilityScore(mockScore);
      toast.success("Analysis completed successfully!");
    } catch (error) {
      toast.error("Failed to analyze company credibility");
      console.error("Credibility analysis error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="backdrop-blur-lg bg-white/80 shadow-xl hover:shadow-2xl transition-all duration-300 border-none">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-secondary">
              AI Credibility Check
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative group">
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter company name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:shadow-md"
              />
              <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            <Button
              onClick={analyzeCredibility}
              disabled={loading}
              className="w-full group hover:scale-102 transition-all duration-300"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
              ) : (
                "Analyze Credibility"
              )}
            </Button>

            {credibilityScore !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="text-center">
                  <h3
                    className="text-2xl font-semibold mb-2"
                    style={{ color: getColorByScore(credibilityScore) }}
                  >
                    {getTextByScore(credibilityScore)}
                  </h3>
                  <p className="text-4xl font-bold">{credibilityScore}%</p>
                </div>

                <Progress
                  value={credibilityScore}
                  className="h-3 transition-all duration-500"
                  indicatorClassName={`transition-all duration-500 bg-gradient-to-r ${
                    credibilityScore >= 80
                      ? "from-primary to-primary/80"
                      : credibilityScore >= 60
                      ? "from-[#7E69AB] to-[#7E69AB]/80"
                      : "from-red-500 to-red-400"
                  }`}
                />

                <div className="grid grid-cols-3 gap-4 pt-4">
                  {["Financial Health", "Market Presence", "Team Experience"].map(
                    (factor, index) => (
                      <motion.div
                        key={factor}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        <h4 className="font-medium text-secondary mb-2">
                          {factor}
                        </h4>
                        <Progress
                          value={Math.random() * 100}
                          className="h-2"
                          indicatorClassName={`bg-primary/70`}
                        />
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default CredibilityCheck;