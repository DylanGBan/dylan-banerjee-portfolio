import { Linkedin, Mail, MapPin, SendHorizontal, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const getEmail = () => "\u0064ybanerjee@\u0075csd.edu";

  const highlights = [
    { title: "Based In", value: "San Diego, CA" },
    { title: "Response Time", value: "Under 24 hours" },
  ];

  const badges = ["Open to SWE roles", "Hybrid or Remote", "Let's collaborate"];

  const contactMethods = [
    {
      id: "email",
      icon: Mail,
      label: "Email",
      description:
        "Best for opportunities, collaborations, or quick questions.",
      action: `Say hello`,
      href: `mailto:${getEmail()}`,
      display: "",
    },
    {
      id: "location",
      icon: MapPin,
      label: "Location",
      description: "Available for roles across San Diego, California and beyond.",
      action: "View on Maps",
      href: "https://earth.google.com/web/search/California/",
      display: "",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      description: "Connect for professional updates and longer chats.",
      action: "Visit profile",
      href: "https://www.linkedin.com/in/dylan-banerjee",
      display: "",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-28 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/20 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/30 blur-[160px]" />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            Let’s build something memorable
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to <span className="text-primary">connect?</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Whether you have a role in mind, want to discuss a project, or just
            say hi, I’d love to hear from you. Choose the channel that works
            best below.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8 p-8 rounded-4xl bg-card/80 border border-border/60 shadow-xl">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I’m passionate about crafting performant, human-centered
                experiences. If you’re building something ambitious or need a
                dependable engineer for your team, let’s talk. Always open to
                learn new things!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-border/70 bg-background/60 px-5 py-4"
                  >
                    <p className="text-sm uppercase tracking-wide text-muted-foreground">
                      {item.title}
                    </p>
                    <p className="text-xl font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/30"
                >
                  {badge}
                </span>
              ))}
            </div>
            <a
              href={`mailto:${getEmail()}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-background font-semibold transition hover:scale-105"
            >
              <SendHorizontal className="w-4 h-4" />
              Draft an email
            </a>
          </div>

          <div className="space-y-6">
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.href}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setActiveCard(method.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={cn(
                  "block rounded-4xl border border-border/60 bg-background/80 p-6 transition duration-300",
                  activeCard === method.id &&
                    "ring-2 ring-primary/60 scale-[1.01] shadow-lg shadow-primary/10"
                )}
              >
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-semibold">{method.label}</p>
                      <span className="text-sm text-primary">
                        {method.action}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {method.description}
                    </p>
                    <p className="text-foreground font-medium">
                      {method.display}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
