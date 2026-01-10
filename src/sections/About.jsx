import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import brazilMap from "../assets/brazil_map.png";
import pinIcon from "../assets/pin.png";

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-black/50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                exploring the impossible.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 text-lg">
              <p>
                I’m a curious high school student driven by a passion for technology and problem solving.
                My journey started by participating in academic Olympiads and has
                evolved into building projects that combine analysis, creativity,
                and real-world impact.
              </p>
              <p>
                I’m especially interested in economics and data science, exploring
                how data can inform better decisions, improve communities, and
                make an impact on our lives. I enjoy turning raw information into insights
                and practical solutions through programming, research, and structured
                analysis.
              </p>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center animate-fade-in animation-delay-300">
            <div className="relative w-full max-w-md">
              {/* Map Image */}
              <img
                src={brazilMap}
                alt="Map of Brazil"
                className="w-full h-auto opacity-80"
              />

              {/* Pin Indicator - Positioned for São Paulo */}
              <div
                className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-full"
                style={{
                  top: '78%',
                  left: '68%',
                }}
              >
                <img
                  src={pinIcon}
                  alt="Location Pin"
                  className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,0,0,0.5)] animate-bounce"
                />
              </div>

              {/* Brazil Label */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <span className="text-7xl font-black text-white/5 uppercase tracking-widest select-none">
                  Brazil
                </span>
              </div>
            </div>

            {/* Bottom Label */}
            <div className="absolute bottom-10 right-10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm font-medium text-white/60 tracking-widest uppercase">São Paulo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
