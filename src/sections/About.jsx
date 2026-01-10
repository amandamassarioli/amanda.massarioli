import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import brazilMap from "../assets/brazil_map.png";

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-black/50 min-h-[80vh] flex items-center">

      {/* Background Map - Tech/Data Viz Style */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-2/3 h-full opacity-20 pointer-events-none select-none mix-blend-screen map-mask">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={brazilMap}
            alt="Brazil Data Map"
            className="w-full max-w-[800px] h-auto object-contain filter invert contrast-150 brightness-75"
          />

          {/* Beacon Location - São Paulo */}
          <div
            className="absolute"
            style={{
              top: '65%',
              left: '60%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            {/* Pulsing Rings */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_#ef4444] z-10" />
              <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-beacon-pulse opacity-75" />
              <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-beacon-pulse opacity-50 delay-75" style={{ animationDelay: '0.5s' }} />
              <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-beacon-pulse opacity-25 delay-150" style={{ animationDelay: '1s' }} />
            </div>

            {/* Label */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col">
              <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest leading-none whitespace-nowrap">São Paulo</span>
              <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest leading-none mt-1">Lat -23.55</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Content Card - Glassmorphism */}
        <div className="max-w-2xl relative">
          <div className="animate-fade-in">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium tracking-wider uppercase mb-6 backdrop-blur-md">
              About Me
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-100 text-white mb-8">
            Building the future, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-transparent italic font-serif font-light">
              exploring the unknown.
            </span>
          </h2>

          <div className="glass-strong p-8 md:p-10 rounded-3xl border-l-4 border-l-primary/50 animate-fade-in animation-delay-200 backdrop-blur-xl">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I’m a curious <span className="text-white font-medium">high school student</span> driven by a passion for technology and problem solving.
                My journey started by participating in academic Olympiads and has
                evolved into building projects that combine <span className="text-white font-medium">analysis, creativity, and real-world impact</span>.
              </p>
              <p>
                I’m especially interested in <span className="text-primary/80 font-medium">economics and data science</span>, exploring
                how data can inform better decisions, improve communities, and
                make an impact on our lives. I enjoy turning raw information into insights
                and practical solutions through programming, research, and structured
                analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
