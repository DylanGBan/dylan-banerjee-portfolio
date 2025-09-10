import { ArrowRight, CloudAlertIcon, ExternalLink, Github } from "lucide-react";
import { Modal } from "./Modal";
import { useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Stock Bot",
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
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
    }
    return <img src="" className="w-10 h-10" />;
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg font-semibold">
          Here are some of the projects that I have finished or are still in the
          process of working on! Click the Github symbol on each project card to
          go to the repository associated with that project.{" "}
          {/*Click on
            the card to get a brief but detailed summary of the project you
            click on. */}
        </p>

        {/* Cards for the projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover hover:bg-primary"
              // onClick={() => {
              //   setOpen(true);
              //   setSelectedProject(project);
              // }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                ></img>
              </div>

              {/* Tags in the project cards, langauge associated */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tag.map((tag) => (
                    <span
                      className="px-2 py-1 text-xs font-medium rounded-full border border-foreground
                       bg-secondary text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {getStatus(project.status)}
                </div>

                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {project.title}
                </h3>

                <div className="flex text-sm pb-4 text-left">{project.description}</div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      className={cn(
                        "text-foreground/80 hover:text-background-opposite transition-colors duration-300",
                        !project.gitHubUrl && "hidden"
                      )}
                    >
                      {" "}
                      <Github size={20} />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* General github link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/DylanGBan"
            target="_blank"
            className="page-button w-fit flex items-center mx-auto gap-2 hover:animate-pulse-multi"
          >
            <Github /> <span> Main Profile</span>
          </a>
        </div>

        {/* Modal */}
        <Modal open={open} onClose={() => setOpen(false)}>
          {selectedProject && (
            <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-auto md:w-xl">
              <h1 className="text-center text-muted-foreground font-bold text-3xl mx-6 mt-6 mb-4">
                {selectedProject.title}
              </h1>

              <div className="flex flex-wrap justify-center text-lg font-medium text-foreground">
                (Summary)
                {/* {selectedProject.description} */}
              </div>

              <div className="p-6">
                <div className="flex flex-col">
                  {selectedProject.tag.map((tag) => (
                    <>
                      <div
                        className={cn(
                          "flex mx-2 mb-4 justify-center space-y-3"
                        )}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
                          {getIcon(tag)}
                        </div>

                        {/* Description for each tag in modal */}
                        <span className="flex mt-1 pl-2 max-w-sm md:max-w-lg">
                          (Use case of each tag )
                        </span>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};
