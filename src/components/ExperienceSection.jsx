import { useState } from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    image: (
      <img
        src={`${import.meta.env.BASE_URL}oai-logo.png`}
        className="w-full h-full object-cover scale-155 translate-x-0.5 translate-y-0.5"
      />
    ),
    title: "Web Development Volunteer (Full Stack)",
    location: "Orgill Anesthesia Services Inc.",
    date: "August 2025 - Current",
    points: [
      "Personal project in coding and deploying company website with employee logins, company logistics, and contact points",
      "Employee logins include email verification and optional 2FA that can be used with authenticator apps",
    ],
  },

  {
    image: (
      <img
        src={`${import.meta.env.BASE_URL}ucsd-seal-logo.png`}
        className="w-full h-full object-cover"
      />
    ),
    title: "Post It With Tritons (Club)",
    location: "Univeristy of California San Diego",
    date: "October 2024 - Present",
    points: [
      "Vice President and Chief Technical Officer of club ",
      "Creating motivational cards for middle to high school students",
      "Allowing for a safe space for fellow UC San Diego students to relax and socialize",
    ],
  },

  {
    image: (
      <img
        src={`${import.meta.env.BASE_URL}stanford-junior-seal.png`}
        className="w-full h-full object-cover scale-110"
      />
    ),
    title: "Code In Place (Section Leader)",
    location: "Stanford University (Remote)",
    date: "April 2025 - May 2025",
    points: [
      "Teaching live virtual sections to students from around the world about basic Python oncepts",
      "Strengthening coding paradigms and schemes",
    ],
  },

  {
    image: (
      <img
        src={`${import.meta.env.BASE_URL}triton.png`}
        className="w-12 h-12 mx-1 object-cover translate-y-1 translate-x-0.5"
      />
    ),
    title: "Instructional Assistant (Python)",
    location: "Univeristy of California San Diego",
    date: "September 2024 - Decemeber 2024",
    points: [
      "Support students on learning the fundamentals of Python",
      "Breakdown misconceptions and offer clarification for students",
      "A tutor during lab hours to teach concepts and assist with assignments",
    ],
  },

  {
    image: (
      <img
        src={`${import.meta.env.BASE_URL}asg-logo.jpg`}
        className="w-auto h-auto object-cover translate-y-1.5 translate-x-1 scale-170"
      />
    ),
    title: "IT Intern / IT Associate",
    location: "American Systems Group",
    date: "November 2022 - September 2024",
    points: [
      "Troubleshooting technical issues, maintaining computer systems, and providing technical support to staff members.",
      "Hands-on experience in network administration, software installation, and system configuration",
    ],
  },
];

export const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(
    experiences.at(0)
  );

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          {" "}
          My <span className="text-primary"> Experience </span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-2/3">
            <div className="flex flex-col space-y-4">
              {experiences.map((experience, key) => (
                <div
                  key={key}
                  className={cn(
                    "flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300 transform-gpu",
                    selectedExperience == experience
                      ? "bg-primary scale-105 md:scale-110"
                      : "bg-primary/50"
                  )}
                  onClick={() => setSelectedExperience(experience)}
                >
                  {/* Image */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden mr-4">
                    {experience.image}
                  </div>

                  {/* Title and Location */}
                  <div className="mx-auto">
                    <h3 className="font-bold text-foreground text-xl">
                      {experience.title}
                    </h3>
                    <p className="font-semibold text-foreground/75 text-md">
                      {experience.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right sided card with information */}
          <div className="md:w-2/3">
            <div
              key={selectedExperience.title}
              class="bg-primary p-8 rounded-lg animate-fade-in"
            >
              {selectedExperience && (
                <>
                  <h1 className="text-left font-bold text-foreground text-3xl mb-4">
                    {selectedExperience.title}
                  </h1>
                  <p className="text-left font-semibold text-foreground/75 text-lg mb-4">
                    {selectedExperience.location}
                  </p>
                  <p className="text-left font-medium text-foreground mb-4 ">
                    {" "}
                    {selectedExperience.date}
                  </p>
                  <ul class="list-disc ml-5 space-y-2">
                    {selectedExperience.points.map((point) => (
                      <li className="text-sm font-medium text-foreground pl-1 tracking-wider text-left">
                        {point}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
