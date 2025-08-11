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
              <div className="flex px-20 mb-0 justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}headshot.png`}
                  className="rounded w-auto h-auto"
                />
              </div>

              <div className="flex flex-row pt-4 justify-center">
                <a
                  href={`${
                    import.meta.env.BASE_URL
                  }Dylan-Banerjee-Resume-2025.pdf`}
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
                    <p className="text-muted-foreground text-sm">
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
                      <span className="italic pt-2">
                        Minor: Cognitive Science (Machine Learning Discipline)
                      </span>
                    </p>
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
                    <h4 className="font-semibold text-lg"> Goal</h4>
                    <p className="text-muted-foreground"> (Goals)</p>
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
                    <p className="text-muted-foreground">
                      {" "}
                      <li>Skiing</li>
                      <li>Play video games</li>
                      <li>Fish</li>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}