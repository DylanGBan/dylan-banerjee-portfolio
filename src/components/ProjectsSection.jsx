import { Github, FolderGit2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Stock Bot",
    sellingPoint: `A stock bot that gives stock information, with news articles to the user. Powered by AI and other Python libraries.`,
    tag: ["Telegram", "Python", "OpenAI API"],
    gitHubUrl: "https://github.com/DylanGBan/Telegram-Stock-Bot",
  },
  {
    id: 2,
    title: "Smart Meeting Summarizer",
    sellingPoint: `A smart meeting summarizer that takes audio files and returns important bullet points and an AI powered summary to the user.`,
    tag: ["Python", "OpenAI API", "Scikit-learn"],
    gitHubUrl: "https://github.com/DylanGBan/Smart-Meeting-Summarizer",
  },
  {
    id: 3,
    title: "Habitizer",
    sellingPoint: `A habit tracking app built with Android Studio, developed in collaboration with a team using industry SWE norms.`,
    tag: ["Android Studio", "Java"],
    gitHubUrl: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <FolderGit2 className="w-4 h-4" />
            Featured Work
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg font-semibold">
            Here are the current projects that I am working on and some that I have finished!
          </p>
        </div>

        <div>
          {/* Column headers — desktop only */}
          <div className="hidden md:grid grid-cols-[2rem_13rem_1fr_16rem_1.5rem] gap-x-8 items-center pb-3 border-b border-primary/30">
            <span />
            <span className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest">
              Project
            </span>
            <span className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest">
              About
            </span>
            <span className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest">
              Stack
            </span>
            <span />
          </div>

          {/* Project rows */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group grid grid-cols-[2rem_1fr_1.5rem] md:grid-cols-[2rem_13rem_1fr_16rem_1.5rem]
                         gap-x-8 gap-y-1.5 items-start md:items-center
                         border-b border-border/30 py-5
                         hover:bg-primary/10 transition-all duration-300 rounded-sm"
            >
              {/* Index */}
              <span className="text-primary/30 group-hover:text-primary font-mono text-sm leading-relaxed transition-colors duration-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="font-semibold text-foreground text-sm leading-relaxed group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              {/* GitHub — top-right on mobile */}
              <div className="flex justify-end md:hidden row-start-1 col-start-3">
                {project.gitHubUrl ? (
                  <a
                    href={project.gitHubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground/20 group-hover:text-primary transition-colors duration-300"
                  >
                    <Github size={14} />
                  </a>
                ) : (
                  <span className="w-[14px]" />
                )}
              </div>

              {/* Selling point */}
              <p className="col-start-2 col-span-2 md:col-span-1 md:col-start-auto text-sm text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors duration-300">
                {project.sellingPoint}
              </p>

              {/* Tags */}
              <p className="col-start-2 col-span-2 md:col-span-1 md:col-start-auto text-xs font-mono text-muted-foreground/40 group-hover:text-primary/70 whitespace-nowrap transition-colors duration-300">
                {project.tag.join(" · ")}
              </p>

              {/* GitHub — desktop column */}
              <div className="hidden md:flex justify-end">
                {project.gitHubUrl ? (
                  <a
                    href={project.gitHubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground/20 group-hover:text-primary transition-colors duration-300"
                  >
                    <Github size={14} />
                  </a>
                ) : (
                  <span className="w-[14px]" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/DylanGBan"
            target="_blank"
            className="page-button w-fit flex items-center mx-auto gap-2 hover:animate-pulse-multi"
          >
            <Github /> <span>Main Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};
