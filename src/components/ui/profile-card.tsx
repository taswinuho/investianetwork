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
      className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden"
    >
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-secondary mb-2">{name}</h3>
        <p className="text-secondary/60 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};