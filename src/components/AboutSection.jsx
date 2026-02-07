import { ActivityIcon, BookOpenText, Building, Code, Square } from "lucide-react"
import BlurText from "../blocks/TextAnimations/BlurText/BlurText"

export const AboutSection = () => {
    return (
      <section id="about" className="py-24 px-4 relative ">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 pt-1.5">
              <div className="flex px-10 md:px-15 mb-0 justify-center md:w-lg md:h-lg">
                <img
                  src={`${import.meta.env.BASE_URL}headshot.png`}
                  className="rounded-3xl w-auto h-auto"
                />
              </div>

              <div className="flex flex-row pt-4 justify-center md:w-lg md:h-lg">
                <a
                  href={`${
                    import.meta.env.BASE_URL
                  }Dylan-Banerjee-Resume-2026.pdf`}
                  target="_blank"
                  className="page-button flex"
                >
                  <BlurText
                    text="Resume"
                    direction="top"
                    animateBy="letters"
                    delay={200}
                    className="text-lg text-foreground font-semibold"
                  />
                </a>
              </div>
            </div>

            {/* Cards for skills */}

            <div className="grid grid-cols-1 gap-6 pb-4">
              {/* Education*/}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Building className="h-6 w-6 text-foreground" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-shadow-2xs text-xl mb-2">
                      {" "}
                      Education
                    </h4>
                    <div className="text-muted-foreground text-sm">
                      {" "}
                      <span className="font-semibold">
                        Mathematics - Computer Science (BS) <br />
                      </span>
                      <span>
                        University Of California San Diego
                        <br />
                      </span>
                      <span className="text-center">
                        September, 2022 - Present <br />{" "}
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>

              {/* Goals*/}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-foreground" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg"> Goals</h4>
                    <ul className="flex-row text-muted-foreground text-sm list-disc pl-4 space-y-1">
                      {" "}
                      <li>
                        <span className="italic">Pursue</span> a Master’s in
                        Computer Science to advance my knowledge and research
                        skills.
                      </li>
                      <li>
                        <span className="italic">Develop</span> stronger
                        expertise in Software Engineering through hands-on
                        projects and problem solving.
                      </li>
                      <li>
                        <span className="italic">Explore</span> and understand
                        more about operating systems and
                        processors to gain deeper insight into system efficiency
                        and design.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Leisure*/}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <ActivityIcon className="h-6 w-6 text-foreground" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg"> Leisure</h4>
                    <ul className="flex-row text-muted-foreground text-sm list-disc pl-4 space-y-1">
                      {" "}
                      <li>Skiing</li>
                      <li>Playing video games</li>
                      <li>Fishing</li>
                      <li>
                        Fun Fact: I did my first Bike the Bay in San Diego last
                        year!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}