import { useState } from "react";
import { Award, BookOpen, Code, Star, Trophy, X, MapPin, Clock, Calendar, ArrowLeft, Tag, Globe, Users } from "lucide-react";

const categories = ["All", "Extracurriculars", "Honors", "Hackathons"];

const achievements = [
    {
        id: 1,
        title: "National English Olympiad Gold Medal",
        category: "Honors",
        year: "2025",
        description: "Ranked top 2% nationwide in advanced English in reading, listening and understanding",
        detailedDescription: "Achieved Gold Medal performance (Top 2%) in the National English Language Olympiad, demonstrating exceptional English language proficiency and ranking among the top performers nationwide.",
        location: "Online",
        hours: "2 hours",
        icon: Trophy,
        tags: ["English", "Gold Medal", "Olympiad"],
        link: "https://www.seletaeducacao.com.br/obli?gad_source=1&gad_campaignid=23105632015&gbraid=0AAAABBAMTFqqcXYe2XhbveI6YVFQ_WjTy&gclid=CjwKCAiA64LLBhBhEiwA-Pxgu6FC1SlWWX7LaR8rzyE37Lj3mrR82JRaPH3Zt28V9b1lq8EUxOwLlxoC-o8QAvD_BwE"
    },
    {
        id: 2,
        title: "National English Language Olympiad - OBLI - Bronze Medal",
        category: "Honors",
        year: "2024",
        detailedDescription: "Achieved Bronze Medal performance (Top 8%) in the National English Language Olympiad, demonstrating strong English language proficiency.",
        hours: "3 hours",
        location: "Online",
        icon: Trophy,
        tags: ["English", "Bronze Medal", "Olympiad"],
        link: "https://www.seletaeducacao.com.br/obli?gad_source=1&gad_campaignid=23105632015&gbraid=0AAAABBAMTFqqcXYe2XhbveI6YVFQ_WjTy&gclid=CjwKCAiA64LLBhBhEiwA-Pxgu6FC1SlWWX7LaR8rzyE37Lj3mrR82JRaPH3Zt28V9b1lq8EUxOwLlxoC-o8QAvD_BwE"

    },
    {
        id: 3,
        title: "The Dream School Ambassador",
        category: "Extracurriculars",
        year: "2025 - Present",
        detailedDescription: "Serve as an official ambassador connecting students and institutional leadership. Represent the student body by identifying gaps in academic preparation, proposing improvements to curriculum design and mentorship structures, and supporting outreach initiatives. Assisted in ambassador training and engagement, and help strengthen the institution’s presence and credibility among prospective exchange applicants across Latin America.",
        location: "The Dream School",
        icon: Users,
        link: null
    },
    {
        id: 4,
        title: "Quantum Computing - Physics on Vacation - FIFE",
        category: "Honors",
        year: "2025",
        description: "Selected for a physics course in UNICAMP, a highly competitive program with a 5% acceptance rate among 400+ applicants.",
        detailedDescription: "An advanced course on Quantum Computing taught directly by the leading department in the Southern Hemisphere, alongside the first quantum computer in the region. I learned fundamental quantum computing concepts and deepened my knowledge in superconducting qubit creation, including advanced concepts such as Josephson Junctions and quantum circuit design. I had the privilege of witnessing the creation of Latin America's second qubit, gaining hands-on experience with cutting-edge quantum technologies at one of the most prestigious quantum research facilities in South America. With a highly competitive 5% acceptance rate, this program represents a significant academic achievement.",
        location: "Physics of Quantum Devices Lab - Gleb Wataghin Physics Institute - University of Campinas - UNICAMP",
        hours: "45 hours",
        icon: Star,
        tags: ["Physics", "UNICAMP"],
    },
    {
        id: 5,
        title: "Grand Prix SENAI Hackathon",
        category: "Hackathons",
        year: "2024",
        detailedDescription: "Participated in an intensive, team-based hackathon focused on solving real-world industrial and technological challenges. Collaborated under time constraints to develop innovative solutions, applying problem-solving, creativity, and technical reasoning while presenting ideas to mentors and evaluators.",
        location: "National Service for Industrial Learning - SENAI",
        hours: "40 hours",
        icon: Code,
        tags: ["Code", "Hackathon", "SENAI"],
    },
    {
        id: 6,
        title: "GitTogether SJC Community Member",
        category: "Extracurriculars",
        year: "2024 - Present",
        description: "Played an active role in the GitHub SJC Community.",
        detailedDescription: "Played an active role in the GitHub SJC Community, leading the ideation and implementation of programming projects and participating in workshops. Currently, I am preparing to expand this impact by hosting events for my school, combining community resources and partnerships with prominent education companies such as Alura and FIAP to inspire the next generation of programmers.",
        icon: BookOpen,
        tags: ["GitHub"],
    },
];

export const AcademicAchievement = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedAchievement, setSelectedAchievement] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const filteredAchievements =
        activeCategory === "All"
            ? achievements
            : achievements.filter((item) => item.category === activeCategory);

    const handleBack = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setSelectedAchievement(null);
            setIsAnimating(false);
        }, 300); // Wait for exit animation
    };

    return (
        <section id="academic-achievements" className="min-h-screen py-32 px-6 container mx-auto relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="flex flex-col lg:flex-row gap-16 sticky top-0">
                {/* Left Sidebar - Navigation (Stays Static) */}
                <div className="lg:w-1/4 space-y-8 h-fit lg:sticky lg:top-32 animate-fade-in z-20">
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
                                onClick={() => {
                                    setActiveCategory(cat);
                                    if (selectedAchievement) handleBack();
                                }}
                                className={`text-left px-6 py-4 rounded-xl transition-all duration-300 border backdrop-blur-sm group relative overflow-hidden ${activeCategory === cat
                                    ? "border-primary/50 bg-primary/10 text-white shadow-[0_0_20px_rgba(32,178,166,0.2)]"
                                    : "border-transparent hover:bg-surface hover:border-white/10 text-muted-foreground hover:text-white"
                                    }`}
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
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

                {/* Right Content Area - Swappable View */}
                <div className="lg:w-3/4 relative min-h-[600px]">
                    {!selectedAchievement ? (
                        // ================= GRID VIEW =================
                        <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-8 duration-500">
                            {filteredAchievements.map((item, idx) => (
                                <div
                                    key={item.id}
                                    onClick={() => setSelectedAchievement(item)}
                                    className="group relative glass p-6 rounded-3xl overflow-hidden hover:bg-surface transition-all duration-300 border border-white/5 hover:border-primary/20 cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
                                    style={{
                                        animationDelay: `${idx * 50}ms`,
                                    }}
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 glass rounded-2xl text-primary bg-black/20 group-hover:scale-110 transition-transform duration-300">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-mono py-1 px-3 rounded-full border border-white/10 bg-black/20 text-muted-foreground">
                                            {item.year}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                                        {item.description}
                                    </p>

                                    <div className="pt-6 border-t border-white/5 flex justify-between items-center mt-auto">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">{item.category}</span>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                                            <ArrowLeft className="w-4 h-4 rotate-180 text-primary" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // ================= DETAIL VIEW =================
                        <div className={`animate-in fade-in slide-in-from-right-10 duration-500 ${isAnimating ? 'animate-out fade-out slide-out-to-right-10' : ''}`}>
                            {/* Navigation Header */}
                            <button
                                onClick={handleBack}
                                className="mb-6 group flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
                            >
                                <div className="p-2 rounded-full border border-white/10 bg-black/40 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                                    <ArrowLeft size={16} />
                                </div>
                                <span className="text-sm font-medium tracking-wide">Back to List</span>
                            </button>

                            {/* Main Detail Card */}
                            <div className="glass rounded-[2rem] border border-white/10 overflow-hidden relative">
                                {/* Decorative Gradient */}
                                <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-primary/10 to-transparent opacity-50 pointer-events-none" />

                                <div className="p-8 md:p-12 relative z-10">
                                    {/* Header Info */}
                                    <div className="flex flex-col md:flex-row gap-6 md:items-start mb-10">
                                        <div className="p-4 glass rounded-3xl text-primary bg-primary/5 border border-primary/20 shadow-[0_0_30px_rgba(32,178,166,0.15)] w-fit">
                                            <selectedAchievement.icon className="w-12 h-12" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/20 text-primary border border-primary/20">
                                                    {selectedAchievement.category}
                                                </span>
                                                <span className="text-sm text-muted-foreground border-l border-white/10 pl-3">
                                                    {selectedAchievement.year}
                                                </span>
                                            </div>
                                            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[0.9]">
                                                {selectedAchievement.title}
                                            </h1>
                                        </div>
                                    </div>

                                    {/* Content Layout */}
                                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                                        {/* Left Column: Stats & Meta */}
                                        <div className="md:col-span-1 space-y-6">
                                            <div className="space-y-4">
                                                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Details</h4>

                                                <div className="flex items-center gap-3 text-sm group">
                                                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                        <MapPin size={16} />
                                                    </div>
                                                    <span className="text-gray-300">{selectedAchievement.location}</span>
                                                </div>

                                                <div className="flex items-center gap-3 text-sm group">
                                                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                        <Clock size={16} />
                                                    </div>
                                                    <span className="text-gray-300">{selectedAchievement.hours}</span>
                                                </div>

                                                {selectedAchievement.link && (
                                                    <div className="flex items-center gap-3 text-sm group">
                                                        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                            <Globe size={16} />
                                                        </div>
                                                        <a href={selectedAchievement.link} className="text-primary hover:underline underline-offset-4">
                                                            View Project
                                                        </a>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="pt-6 border-t border-white/5">
                                                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Skills & Tools</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedAchievement.tags?.map(tag => (
                                                        <span key={tag} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all cursor-default flex items-center gap-1">
                                                            <Tag size={10} className="text-primary" /> {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Column: Description */}
                                        <div className="md:col-span-2">
                                            <h4 className="text-lg font-semibold text-white mb-4">About the Achievement</h4>
                                            <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
                                                {selectedAchievement.detailedDescription}
                                            </p>

                                            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                                                <p className="italic text-sm text-gray-400">
                                                    "{selectedAchievement.description}"
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};


