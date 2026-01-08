import { useState } from "react";
import { Award, BookOpen, Code, Star, Trophy } from "lucide-react";

const categories = ["All", "Extracurriculars", "Honors", "Hackathons"];

const achievements = [
    {
        id: 1,
        title: "National Math Olympiad Gold Medal",
        category: "Honors",
        year: "2023",
        description: "Ranked top 1% nationwide in advanced calculus and combinatorics problem solving.",
        icon: Trophy,
    },
    {
        id: 2,
        title: "NASA Space Apps Challenge Winner",
        category: "Hackathons",
        year: "2022",
        description: "Developed an AI model to predict asteroid trajectories, winning the Global Nominee award.",
        icon: RocketIcon,
    },
    {
        id: 3,
        title: "Debate Club President",
        category: "Extracurriculars",
        year: "2021 - Present",
        description: "Leading a team of 30 students, organizing regional tournaments and mentoring junior members.",
        icon: UsersIcon,
    },
    {
        id: 4,
        title: "AP Scholar with Distinction",
        category: "Honors",
        year: "2023",
        description: "Awarded for outstanding performance on 5 or more AP exams with an average score of 4.5.",
        icon: Star,
    },
    {
        id: 5,
        title: "Regional Hackathon: Best UI/UX",
        category: "Hackathons",
        year: "2023",
        description: "Created an accessible educational platform for students with disabilities.",
        icon: Code,
    },
    {
        id: 6,
        title: "Scientific Research Paper Published",
        category: "Honors",
        year: "2023",
        description: "Published research on machine learning bias in the Journal of Student Research.",
        icon: BookOpen,
    },
];

// Helper icons (if not imported)
function RocketIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    );
}

function UsersIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

export const AcademicAchievement = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredAchievements =
        activeCategory === "All"
            ? achievements
            : achievements.filter((item) => item.category === activeCategory);

    return (
        <section id="academic-achievements" className="min-h-screen py-32 px-6 container mx-auto relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="flex flex-col lg:flex-row gap-16">
                {/* Left Sidebar - Navigation */}
                <div className="lg:w-1/4 space-y-8 animate-fade-in">
                    <div>
                        <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">
                            Academic
                            <br />
                            <span className="text-primary">Journey</span>
                        </h2>
                        <p className="text-muted-foreground text-sm">
                            Discover my milestones across various disciplines.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        {categories.map((cat, idx) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-left px-6 py-4 rounded-xl transition-all duration-300 border backdrop-blur-sm group relative overflow-hidden ${activeCategory === cat
                                        ? "border-primary/50 bg-primary/10 text-white shadow-[0_0_20px_rgba(32,178,166,0.2)]"
                                        : "border-transparent hover:bg-surface hover:border-white/10 text-muted-foreground hover:text-white"
                                    }`}
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                {/* Hover Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeCategory === cat ? 'hidden' : ''}`} />

                                <span className="relative z-10 text-lg font-medium tracking-wide">
                                    {cat}
                                </span>

                                {activeCategory === cat && (
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#20b2a6]" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Content - Grid */}
                <div className="lg:w-3/4">
                    <div className="grid md:grid-cols-2 gap-6">
                        {filteredAchievements.map((item, idx) => (
                            <div
                                key={item.id}
                                className="group relative glass p-8 rounded-3xl overflow-hidden hover:bg-surface transition-all duration-500 animate-fade-in border border-white/5 hover:border-primary/20"
                                style={{
                                    animationDelay: `${idx * 100}ms`,
                                }}
                            >
                                {/* Card Background Glow */}
                                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 glass rounded-2xl text-primary bg-black/20 group-hover:scale-110 transition-transform duration-300">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-mono py-1 px-3 rounded-full border border-white/10 bg-black/20 text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-colors">
                                            {item.year}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                        {item.description}
                                    </p>

                                    <div className="pt-6 border-t border-white/5 flex justify-between items-center mt-auto">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">{item.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};