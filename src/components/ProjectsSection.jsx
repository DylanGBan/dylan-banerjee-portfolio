import { ArrowRight, CloudAlertIcon, ExternalLink, Github } from "lucide-react";
import { Modal } from "./Modal";
import { useState } from "react";
import { cn } from "@/lib/utils"


const projects = [
  {
    id: 1,
    title: "Stock Bot",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    image: "/projects/stockbot-telegram.png",
    tag: ["Telegram", "Python", "OpenAI API"],
    status: false,
    demoUrl: "#",
    gitHubUrl: "#",
  },
  {
    id: 2,
    title: "Smart Meeting Summarizer",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    image: "/projects/summarizer-code.png",
    tag: ["Python", "OpenAI API", "Scikit-learn"],
    status: false,
    demoUrl: "#",
    gitHubUrl: "#",
  },
];

export const ProjectsSection = () => {


    const [open, setOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)


    const getStatus = (exp) => {

      if(exp){
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full border bg-blue-500 border-blue-500 text-foreground">
            Finished
          </span>
        );
      }else{
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full border bg-orange-300 border-orange-300 text-foreground">
            In Progress
          </span>
        );
      }

    }

    const getIcon = (tag) => {
      
      if (tag.includes("OpenAI API")) {
        return (
          <img
            src="/projects/openai-logo.webp"
            className="w-10 h-10 object-cover"
          />
        );
      } else if (tag.includes("Telegram")) {
        return <img src="/projects/telegram-logo.png" className="w-10 h-10" />;
      } else if (tag.includes("Python")) {
        return (
          <img
            src="/projects/python-logo.jpg"
            className="w-10 h-10 object-cover"
          />
        );
      } else if (tag.includes("Scikit-learn")){
        return (
          <img
            src="/projects/scikit-logo.png"
            className="w-auto h-auto object-cover -translate-y-0.4 bg-white"
          />
        );
      }
      return <img src="/projects/project1.png" className="w-10 h-10" />;

    };


    return (
      <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {" "}
            Featured <span className="text-primary"> Projects </span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg font-semibold">
            Here are some of the projects that I have finished or are still in
            the process of working on! Click the github symbol on each project
            card to go to the repository associated with that project. Click on
            the card to get a brief but detailed summary of the project you
            click on.
          </p>

          {/* Cards for the projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {projects.map((project, key) => (
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover hover:bg-primary"
                onClick={() => {
                  setOpen(true);
                  setSelectedProject(project);
                }}
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

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        //   This target _blank will open it in a new link when clicked
                        target="_blank"
                        //The conditional checks if there is a link to that project
                        className={cn("text-foreground/80 hover:text-background-opposite transition-colors duration-300", 
                          project.demoUrl.includes("#") ? "hidden" : ""
                        )}
                      >
                        {" "}
                        <ExternalLink size={20} />{" "}
                      </a>
                      <a
                        href={project.gitHubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-background-opposite transition-colors duration-300"
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
              <Github />
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
                        <div className={cn("flex mx-2 mb-4 justify-center space-y-3")}>
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
}