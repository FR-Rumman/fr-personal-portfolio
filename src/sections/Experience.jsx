const experience = [
  {
    period: "2022 - Present",
    role: "Senior Frontend Engineer",
    company: "YYYYYYYYYY Ltd",
    description:
      "Worked on scalable web applications, improved UI performance, and led frontend development initiatives.",
    technologies: ["React", "TypeScript", "Next.js", "SQL"],
    current: true,
  },
  {
    period: "2021 - 2022",
    role: "Frontend Developer",
    company: "Tech Solutions Ltd",
    description:
      "Built responsive user interfaces and collaborated with backend teams to integrate APIs.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    current: false,
  },
  {
    period: "2020 - 2021",
    role: "Junior Developer",
    company: "Creative Dev Studio",
    description:
      "Assisted in developing modern websites and learned best practices in frontend engineering.",
    technologies: ["HTML", "CSS", "JavaScript"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 
        bg-primary/5 rounded-full blur-3xl 
        -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary text-sm font-medium 
            tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold 
            leading-tight animate-fade-in 
            animation-delay-100 text-primary"
          >
            Experience that
            <span
              className="font-serif italic font-normal text-white"
            >
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground 
            animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious
            beginner to engineer building modern applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="timeline-glow absolute 
            left-0 md:left-1/2 top-0 bottom-0 
            w-0.5 bg-gradient-to-b 
            from-primary/70 via-primary/30 to-transparent 
            md:-translate-x-1/2"
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-0 md:left-1/2 
                  w-4 h-4 bg-primary rounded-full 
                  md:-translate-x-1/2"
                />

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className="glass p-6 rounded-2xl 
                    border border-primary/30 
                    hover:border-primary/50 
                    transition-all duration-500"
                  >
                    <span className="text-sm text-primary">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">
                      {exp.role}
                    </h3>

                    <p className="text-muted-foreground">
                      {exp.company}
                    </p>

                    <p className="mt-3 text-sm">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map(
                        (tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-3 py-1 text-xs 
                            border border-primary/30 
                            rounded-full"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};q