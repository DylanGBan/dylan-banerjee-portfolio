import { Github } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Stock Bot",
    sellingPoint: `A stock bot that gives stock information, with news articles to the user. Powered by AI and other Python libraries.`,
    description: `
    Created a stock bot that tracks and gives recent news articles about stocks that are chosen by the user.
    Deployed through Telegram with the use of a Telegram bot, stock bot will record and document stocks that are added by the user.
    These stocks are sorted using SQLite. The most recent news about the stocks inside of the user's profile is gathered using yFinance.
    Daily morning digests are sent to the user, including an AI powered summary using OpenAI's API.
  `,
    image: `${import.meta.env.BASE_URL}projects/stockbot-telegram.png`,
    tag: ["Telegram", "Python", "OpenAI API"],
    status: false,
    demoUrl: "#",
    gitHubUrl: "https://github.com/DylanGBan/Telegram-Stock-Bot",
  },
  {
    id: 2,
    title: "Smart Meeting Summarizer",
    sellingPoint: `A smart meeting summarizer that takes audio files and returns important bullet points and AI powered summary to the user.`,
    description: `
    Created a smart meeting summarizer that takes important summaries from meeting audio files. Takes in a mp3 file and then uses Whisper from 
    OpenAI API, using moviepy to splice audio file into managable bites for Whisper to translate speech to text. Then using spaCy, keywords that 
    are said in the meeting will be displayed in built points, with relevant context. Finially using OpenAI, the full transcript is summarized.
    `,
    image: `${import.meta.env.BASE_URL}projects/summarizer-code.png`,
    tag: ["Python", "OpenAI API", "Scikit-learn"],
    status: false,
    demoUrl: "#",
    gitHubUrl: "https://github.com/DylanGBan/Smart-Meeting-Summarizer",
  },
  {
    id: 3,
    title: "Habitizer - Habit Tracking App",
    sellingPoint: `A habit tracking app that was built using Android Studio. Worked in collabration with a team and practiced industry SWE norms.`,
    description: `
    Class project for CSE 110 (Software Engineering). In a team, we created a habit tracking app using Andriod Studio and Java. 
    With the use of agile software processes ,unit testing, object mocking, dependency inversion, open-closed Principle, etc. we formulated our app. 
    Also learning important software engineering processes like story boards, burn-down/up charts, etc. The current github repo is private, as I am still
    a student at UC San Diego. Please look at my Github profile page for more information.  
    `,
    image: `${import.meta.env.BASE_URL}projects/habitizer.png`,
    tag: ["Android Studio", "Java"],
    status: true,
    demoUrl: "#",
    gitHubUrl: false,
  },
];

export const ProjectsSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleCard = (projectId) => {
    setExpandedId((prev) => (prev === projectId ? null : projectId));
  };

  const getStatus = (exp) => {
    if (exp) {
      return (
        <span className="px-2 py-1 text-xs font-medium rounded-full border bg-blue-500 border-blue-500 text-foreground">
          Finished
        </span>
      );
    } else {
      return (
        <span className="px-2 py-1 text-xs font-medium rounded-full border bg-orange-300 border-orange-300 text-foreground">
          In Progress
        </span>
      );
    }
  };

  const getIcon = (tag) => {
    if (tag.includes("OpenAI API")) {
      return (
        <img
          src={`${import.meta.env.BASE_URL}projects/openai-logo.webp`}
          className="w-10 h-10 object-cover"
        />
      );
    } else if (tag.includes("Telegram")) {
      return (
        <img
          src={`${import.meta.env.BASE_URL}projects/telegram-logo.png`}
          className="w-10 h-10"
        />
      );
    } else if (tag.includes("Python")) {
      return (
        <img
          src={`${import.meta.env.BASE_URL}projects/python-logo.jpg`}
          className="w-10 h-10 object-cover"
        />
      );
    } else if (tag.includes("Scikit-learn")) {
      return (
        <img
          src={`${import.meta.env.BASE_URL}projects/scikit-logo.png`}
          className="w-auto h-auto object-cover -translate-y-0.4 bg-white"
        />
      );
    } else if (tag.includes("Java")) {
      return (
        <img
          src={`${import.meta.env.BASE_URL}projects/java.png`}
          className="w-10 h-9 object-cover -translate-y-0.4 translate-x-0.4"
        />
      );
    } else if (tag.includes("Android Studio")) {
      return (
        <img
          src={`${import.meta.env.BASE_URL}projects/android_studio.webp`}
          className="w-10 h-9 object-cover -translate-y-0.4 translate-x-0.4"
        />
      );
    }
    return <img src="" className="w-10 h-10" />;
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg font-semibold">
          Here are the current projects that I am working on and some that I have finished!
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div
                key={project.id}
                className={cn(
                  "rounded-[28px] border border-border/60 bg-card/80 backdrop-blur shadow-xl flex flex-col overflow-hidden transition duration-300",
                  isExpanded && "ring-2 ring-primary/60"
                )}
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    {getStatus(project.status)}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="flex items-start justify-center gap-4 pb-2">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {project.tag.map((tag) => (
                      <span
                        key={`${project.id}-${tag}`}
                        className="px-3 py-1 text-xs font-semibold rounded-full border border-border bg-secondary/20 text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {isExpanded
                      ? project.description
                      : project.sellingPoint}
                  </p>
                  <button
                    type="button"
                    onClick={() => toggleCard(project.id)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border text-sm font-semibold px-4 py-2 text-foreground/80 hover:text-primary hover:border-primary transition-colors"
                  >
                    {isExpanded ? "Show less" : "View summary"}
                  </button>
                  <a
                    href={project.gitHubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "inline-flex self-center items-center gap-2 px-5 py-2 rounded-full border text-xs font-semibold text-foreground/80 hover:text-primary hover:border-primary transition-colors justify-center",
                      !project.gitHubUrl && "hidden"
                    )}
                  >
                    <Github size={16} /> 
                  </a>
                  <div
                    className={cn(
                      "grid gap-3 transition-all duration-300 ease-in-out overflow-hidden justify-center",
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    {project.tag.map((tag) => (
                      <div
                        key={`${project.id}-${tag}-detail`}
                        className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3 flex items-center gap-3"
                      >
                        <div className="w-9 h-9 rounded-full bg-secondary/30 flex items-center justify-center overflow-hidden">
                          {getIcon(tag)}
                        </div>
                        <div className="justify-center">
                          <p className="text-sm font-semibold text-foreground">
                            {tag}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
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
