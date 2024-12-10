import { motion } from "framer-motion";

interface ProfileCardProps {
  name: string;
  description: string;
  image: string;
  tags: string[];
}

export const ProfileCard = ({
  name,
  description,
  image,
  tags,
}: ProfileCardProps) => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
    >
      <div
        className="h-64 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-secondary/60 mb-4 group-hover:text-secondary transition-colors duration-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};