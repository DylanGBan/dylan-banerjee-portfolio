import { useState } from "react";
import { cn } from "@/lib/utils";
import { BookOpen, ChevronDown, GraduationCap } from "lucide-react";

const courseGroups = [
  {
    title: "2022 – 2023",
    summary: "Foundations in programming and calculus",
    courses: [
      {
        term: "Winter 2023",
        code: "CSE 12",
        title: "Basic Data Structures & Object-Oriented Design",
        description:
          "Studied core data structures and object-oriented programming principles with an emphasis on abstraction and software design.",
        focus: ["Data Structures", "Object-Oriented Design", "Abstraction"],
      },
      {
        term: "Winter 2023",
        code: "CSE 15L",
        title: "Software Tools & Techniques Laboratory",
        description:
          "Applied professional software development tools including Unix, version control, debugging, and build systems.",
        focus: ["Unix", "Git", "Software Tooling"],
      },
      {
        term: "Winter 2023",
        code: "MATH 20B",
        title: "Calculus for Science & Engineering",
        description:
          "Extended calculus to integral techniques and applications relevant to engineering and physical sciences.",
        focus: ["Integral Calculus", "Applications", "Mathematical Analysis"],
      },
      {
        term: "Spring 2023",
        code: "CSE 30",
        title: "Computer Organization & Systems Programming",
        description:
          "Explored low-level programming, memory, and processor architecture through C programming and assembly concepts.",
        focus: ["Systems Programming", "Memory", "Computer Architecture"],
      },
      {
        term: "Spring 2023",
        code: "MATH 18",
        title: "Linear Algebra",
        description:
          "Covered vector spaces, linear transformations, eigenvalues, and matrix methods with computational applications.",
        focus: ["Linear Algebra", "Matrices", "Vector Spaces"],
      },
      {
        term: "Spring 2023",
        code: "MATH 20C",
        title: "Calculus & Analytic Geometry",
        description:
          "Introduced multivariable calculus including partial derivatives, multiple integrals, and vector-valued functions.",
        focus: ["Multivariable Calculus", "Vector Analysis", "Geometry"],
      },
      {
        term: "Summer 2023",
        code: "MATH 20D",
        title: "Introduction to Differential Equations",
        description:
          "Studied ordinary differential equations with applications to physical and biological systems.",
        focus: ["Differential Equations", "Modeling", "Applied Mathematics"],
      },
      {
        term: "Fall 2022",
        code: "CSE 11",
        title: "Accelerated Introduction to Programming",
        description:
          "Introduced structured programming and problem-solving techniques using a high-level programming language with emphasis on algorithmic thinking.",
        focus: ["Programming Fundamentals", "Problem Solving", "Algorithms"],
      },
      {
        term: "Fall 2022",
        code: "MATH 20A",
        title: "Calculus for Science & Engineering",
        description:
          "Developed foundational differential calculus skills for functions of one variable with applications to science and engineering problems.",
        focus: [
          "Differential Calculus",
          "Modeling",
          "Mathematical Foundations",
        ],
      },
    ],
  },
  {
    title: "2023 – 2024",
    summary: "Data structures, discrete math, and statistical reasoning",
    courses: [
      {
        term: "Winter 2024",
        code: "MATH 154",
        title: "Discrete Math & Graph Theory",
        description:
          "Developed mathematical tools for computer science including logic, combinatorics, graph theory, and proofs.",
        focus: ["Discrete Mathematics", "Graph Theory", "Proofs"],
      },
      {
        term: "Spring 2024",
        code: "CSE 100R",
        title: "Advanced Data Structures",
        description:
          "Analyzed and implemented advanced data structures with a focus on performance and algorithmic trade-offs.",
        focus: ["Advanced Data Structures", "Algorithms", "Performance"],
      },
      {
        term: "Spring 2024",
        code: "MATH 183",
        title: "Statistical Methods",
        description:
          "Introduced statistical inference, estimation, hypothesis testing, and regression techniques.",
        focus: ["Statistics", "Inference", "Regression"],
      },
      {
        term: "Fall 2024",
        code: "CSE 105",
        title: "Theory of Computation",
        description:
          "Studied formal languages, automata, computability, and complexity theory.",
        focus: ["Automata", "Computability", "Complexity Theory"],
      },
      {
        term: "Fall 2024",
        code: "MATH 103A",
        title: "Modern Algebra I",
        description:
          "Introduced group theory and abstract algebraic structures with rigorous proof-based reasoning.",
        focus: ["Group Theory", "Abstract Algebra", "Proof Techniques"],
      },
    ],
  },
  {
    title: "2024 – 2025",
    summary: "Algorithms, operating systems, and probabilistic foundations",
    courses: [
      {
        term: "Winter 2025",
        code: "CSE 101",
        title: "Design & Analysis of Algorithms",
        description:
          "Designed and analyzed efficient algorithms using asymptotic analysis, greedy methods, and dynamic programming.",
        focus: ["Algorithms", "Complexity Analysis", "Optimization"],
      },
      {
        term: "Winter 2025",
        code: "CSE 110",
        title: "Software Engineering",
        description:
          "Built large-scale software systems in teams with emphasis on design, testing, and collaboration.",
        focus: ["Software Engineering", "Team Projects", "Testing"],
      },
      {
        term: "Winter 2025",
        code: "MATH 103B",
        title: "Modern Algebra II",
        description:
          "Continued study of algebraic structures including rings, fields, and homomorphisms.",
        focus: ["Rings", "Fields", "Algebraic Structures"],
      },
      {
        term: "Spring 2025",
        code: "CSE 120",
        title: "Operating Systems Principles",
        description:
          "Examined concurrency, synchronization, memory management, and file systems at a conceptual level.",
        focus: ["Operating Systems", "Concurrency", "Memory Management"],
      },
      {
        term: "Spring 2025",
        code: "MATH 180A",
        title: "Introduction to Probability",
        description:
          "Established a rigorous foundation in probability theory and random variables.",
        focus: ["Probability", "Random Variables", "Distributions"],
      },
    ],
  },
  {
    title: "2025 – 2026",
    summary: "Advanced machine learning, systems, and numerical methods",
    courses: [
      {
        term: "Winter 2026",
        code: "CSE 190",
        title: "Data Center Systems",
        description:
          "Data center exploration and distributed systems learning. Topics reinforced through a data center application project. ",
        focus: ["Data Centers", "Research", "Systems"],
      },
      {
        term: "Winter 2026",
        code: "MATH 170A",
        title: "Introduction to Numerical Analysis",
        description:
          "Studied numerical methods for solving linear systems, interpolation, and approximation.",
        focus: ["Numerical Methods", "Linear Systems", "Approximation"],
      },
      {
        term: "Fall 2025",
        code: "CSE 150A",
        title: "AI: Probabilistic Models",
        description:
          "Applied probabilistic modeling techniques including Bayesian networks and hidden Markov models.",
        focus: ["Bayesian Models", "Inference", "Artificial Intelligence"],
      },
      {
        term: "Fall 2025",
        code: "CSE 151A",
        title: "Machine Learning: Learning Algorithms",
        description:
          "Studied supervised and unsupervised learning algorithms with theoretical and practical analysis.",
        focus: ["Machine Learning", "Optimization", "Generalization"],
      },
      {
        term: "Fall 2025",
        code: "CSE 221",
        title: "Graduate - Operating Systems",
        description:
          "Designed and implemented operating system components including virtual memory and process management.",
        focus: ["Virtual Memory", "Concurrency", "Systems Programming"],
      },
    ],
  },
];


export const ClassTimeline = () => {
  const orderedGroups = [...courseGroups].reverse();
  const [openGroup, setOpenGroup] = useState(orderedGroups[0].title);
  const totalYears = orderedGroups.length;

  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/20 blur-[150px]" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-secondary/30 blur-[150px]" />
      </div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <GraduationCap className="w-4 h-4" />
            UC San Diego Coursework
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Coursework <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A timeline of the most relevant courses I have taken at UC San Diego
          </p>
        </div>
        <div className="space-y-6">
          {orderedGroups.map((group, index) => {
            const isOpen = openGroup === group.title;
            return (
              <div
                key={group.title}
                className="rounded-4xl border border-border/60 bg-card/70 backdrop-blur px-5 py-6 shadow-inner"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() =>
                    setOpenGroup((prev) =>
                      prev === group.title ? "" : group.title
                    )
                  }
                >
                  <div>
                    <p className="text-sm uppercase tracking-wide text-muted-foreground">
                      Year {totalYears - index}
                    </p>
                    <p className="text-2xl font-bold">{group.title}</p>
                    <p className="text-muted-foreground mt-1">
                      {group.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold text-center">
                      {group.courses.length} classes
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-primary transition-transform duration-300",
                        isOpen ? "rotate-180" : ""
                      )}
                    />
                  </div>
                </button>
                <div
                  className={cn(
                    "transition-all duration-300 ease-in-out overflow-hidden",
                    isOpen
                      ? "mt-6 max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    {group.courses.map((course) => (
                      <div
                        key={course.code}
                        className="rounded-3xl border border-border/60 bg-background/80 px-5 py-5"
                      >
                        <div className="flex items-center justify-between gap-3 text-sm font-semibold text-primary">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10">
                            <BookOpen className="w-4 h-4" />
                            {course.term}
                          </span>
                          <span className="text-foreground/70">
                            {course.code}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mt-3">
                          {course.title}
                        </h3>
                        <p className="text-muted-foreground mt-2">
                          {course.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4 justify-center">
                          {course.focus.map((item) => (
                            <span
                              key={`${group.title}-${course.code}-${item}`}
                              className="px-3 py-1 rounded-full bg-secondary/20 text-sm font-medium text-foreground/80 border border-secondary/30"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
