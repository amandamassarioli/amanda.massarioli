import { Hammer } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden min-h-[50vh] flex items-center justify-center">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="flex flex-col items-center justify-center gap-6 animate-fade-in">
          <div className="p-6 rounded-full bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm animate-pulse">
            <Hammer className="w-12 h-12 text-primary" />
          </div>

          <div className="space-y-4 max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground">
              Under
              <span className="text-primary"> Construction</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              I'm currently building something amazing. Check back soon to see my latest projects!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

