import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Prisma",
  "Jest",
  "Cypress",
  "Figma",
  "Git",
  "GitHub Actions",
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Bg */}
      <div className="absolute inset-0 bg-black" />

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-0.5 h-0.5 rounded-full opacity-60"
            style={{
              backgroundColor: "rgba(228, 228, 228, 1)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20
                }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-9 pt-32 pb-20 relative z-10 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Column - Text Content */}
          <div className="space-y-8 h-full flex flex-col justify-center">

            {/* Headline com badge acima */}
            <div
              className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 pr-0 lg:pr-8 flex flex-col items-center lg:items-end w-full lg:w-auto hero-perspective-container"
            >
              <h1
                className="flex flex-col items-center lg:items-end font-black leading-none uppercase tracking-tight select-none hero-text-transform"
              >
                <InteractiveHoverText text="High School Student" className="text-xl md:text-3xl lg:text-4xl text-center lg:text-right" />
                <InteractiveHoverText text="Aspiring Economist and Data Scientist" className="text-xl md:text-3xl lg:text-4xl mt-2 mb-6 md:mb-8 text-center lg:text-right" />
                <InteractiveHoverText text="Amanda" className="text-6xl md:text-8xl lg:text-15xl" />
                <InteractiveHoverText text="Massarioli" className="text-6xl md:text-8xl lg:text-15xl" />
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

const InteractiveHoverText = ({ text, className = "" }) => {
  return (
    <span className={`inline-block group cursor-default ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-300 group-hover:text-transparent group-hover:[-webkit-text-stroke:2px_white] group-hover:-translate-y-4"
          style={{
            transitionDelay: `${index * 30}ms`
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};