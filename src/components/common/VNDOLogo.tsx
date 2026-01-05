import { motion } from "framer-motion";

interface VNDOLogoProps {
  className?: string;
  size?: number;
  color?: string;
  animated?: boolean;
}

export const VNDOLogo = ({
  className = "",
  size = 32,
  color = "currentColor",
  animated = false,
}: VNDOLogoProps) => {
  const logo = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      
      {/* Main circle background */}
      <circle
        cx="60"
        cy="60"
        r="55"
        fill="url(#logoGradient)"
        opacity="0.1"
      />
      
      {/* V shape - top left */}
      <path
        d="M 25 25 L 40 65 L 55 25"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* N shape - top right */}
      <path
        d="M 65 25 L 65 65 M 65 25 L 85 65 M 85 25 L 85 65"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* D shape - bottom left */}
      <path
        d="M 25 75 L 25 95 L 40 95 Q 50 95 50 85 Q 50 75 40 75 Z"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* O shape - bottom right */}
      <circle
        cx="75"
        cy="85"
        r="10"
        stroke={color}
        strokeWidth="7"
        fill="none"
      />
    </svg>
  );

  if (animated) {
    return (
      <motion.div
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
        transition={{ duration: 0.5 }}
      >
        {logo}
      </motion.div>
    );
  }

  return logo;
};

