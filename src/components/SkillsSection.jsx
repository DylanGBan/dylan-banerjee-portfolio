import { TypeAnimation } from "react-type-animation"
import { useInView } from "react-intersection-observer";

const lang = [
  {
    skill: "Java",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        className="w-14 h-14"
        mb-2
      ></img>
    ),
    mastery: `95%`,
  },

  {
    skill: "Git/Github",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        className="w-14 h-14"
        mb-2
      ></img>
    ),
    mastery: `90%`,
  },

  {
    skill: "Python",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        className="w-14 h-14"
        mb-2
      ></img>
    ),
    mastery: `90%`,
  },

  {
    skill: "C/C++",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
        className="w-14 h-14"
        mb-2
      ></img>
    ),
    mastery: `85%`,
  },

  {
    skill: "Android App Development",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
        className="w-14 h-14"
        mb-2
      ></img>
    ),
    mastery: `80%`,
  },

  {
    skill: "Tailwind",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        className="w-14 h-14"
        mb-2
      ></img>
    ),
    mastery: `80%`,
  },

  {
    skill: "CSS",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        className="w-14 h-14"
        mb-2
      ></img>
    ),
    mastery: `80%`,
  },

  {
    skill: "React",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        className="w-14 h-14"
        mb-2
      ></img>
    ),
    mastery: `75%`,
  },

  {
    skill: "Javascript",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        className="w-14 h-14"
        mb-2
      ></img>
    ),
    mastery: `70%`,
  },

  {
    skill: "Matlab",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"
        className="w-14 h-14"
        mb-2
      ></img>
    ),
    mastery: `70%`,
  },

  {
    skill: "R",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg"
        className="w-14 h-14"
        mb-2
      ></img>
    ),
    mastery: `68%`,
  },
];

export const SkillsSection = () => {

    const { ref: typeRef, inView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });


  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="container grid grid-cols-2 md:grid-cols-4 gap-5 items-center">
          {lang.map((lang, key) => (
            <div
              key={key}
              className="flex flex-col items-center p-4 bg-primary/20 rounded-xl shadow-lg transition transform hover:scale-105
              hover:bg-primary"
            >
              {lang.icon}
              <span className="text-shadow-md font-medium py-2">
                {lang.skill}
              </span>
            </div>
          ))}
        </div>

        {/* Typing Animation */}

        <div
          ref={typeRef}
          className="text-lg md:text-xl py-10 font-semibold text-primary mx-auto w-auto"
        >
         {inView && (
            <TypeAnimation
              sequence={[
                "There is lots of cool things I can do with all of my skill sets! The projects below are just some examples of what I can do"
          ]}
              speed={30}
              cursor={true}
              wrapper="span"
              className="text-5xl font-semibold text-primary text-glow"
              repeat={0}
            />
          )}
        </div>
      </div>
    </section>
  );
};
