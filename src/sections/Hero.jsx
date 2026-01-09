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
      <div className="container mx-auto px-9 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">

            {/* Headline com badge acima */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 pr-8 flex flex-col items-end"
              style={{ perspective: '700px' }}
            >
              {/* Badge */}
              <div
                className="animate-fade-in mb-6"
                style={{
                  transform: 'rotateY(25deg)',
                  transformOrigin: 'left center',
                }}
              >

              </div>

              <h1
                className="flex flex-col items-end text-10xl md:text-9xl lg:text-10xl font-black leading-none uppercase tracking-tight select-none"
                style={{
                  transform: 'rotateY(-25deg)',
                  transformOrigin: 'right center',
                }}
              >
                <InteractiveHoverText text="High School Student" className="text-4xl" />
                <InteractiveHoverText text="Aspiring Economist and Data Scientist" className="text-4xl mt-1 mb-6" />
                <InteractiveHoverText text="Amanda" className="text-15xl" />
                <InteractiveHoverText text="Massarioli" className="text-15xl" />

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