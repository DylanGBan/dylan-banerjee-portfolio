import { Linkedin, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// const contacts = [

//   {
//     icon: <Mail />,
//     point: getEmail()
//   }
// ]

export const ContactSection = () => {

  const [isHovering, setIsHovering] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  const getEmail = () => {
    return "\u0064ybanerjee@\u0075csd.edu";
  };

  return (
    <section id="contact" className="py-10 md:py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Contact me in any of these forms of communication if you would like to
          speak to me about my work!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 h-auto">
          <div
            className="flex flex-col items-center justify-center gap-6 rounded-4xl bg-card"
            onMouseEnter={() => {
              setIsHovering(true);
              setCurrentCard(1);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              setCurrentCard(null);
            }}
          >
            <div
              className={cn(
                "h-fit pt-6",
                isHovering && currentCard == 1 ? "motion-preset-seesaw" : ""
              )}
            >
              <Mail className="h-20 w-20 text-primary" />
            </div>

            <div className="h-fit font-bold text-xl pb-6">
              <a
                href={`mailto:${getEmail()}`}
                className="email text-muted-foreground hover:text-primary transition-colors"
              >
                dybanerjee<span className="hidden">12</span>@
                <span className="hidden">mask.</span>ucsd.edu
              </a>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center gap-6 rounded-4xl bg-card"
            onMouseEnter={() => {
              setIsHovering(true);
              setCurrentCard(2);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              setCurrentCard(null);
            }}
          >
            <div
              className={cn(
                "h-fit pt-6",
                isHovering && currentCard == 2 ? "motion-preset-seesaw" : ""
              )}
            >
              <MapPin className="h-20 w-20 text-primary" />
            </div>

            <div className="h-fit font-bold text-xl pb-6">
              <a
                href="https://earth.google.com/web/search/California/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                San Diego, California
              </a>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center gap-6 rounded-4xl bg-card"
            onMouseEnter={() => {
              setIsHovering(true);
              setCurrentCard(3);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              setCurrentCard(null);
            }}
          >
            <div
              className={cn(
                "h-fit pt-6",
                isHovering && currentCard == 3 ? "motion-preset-seesaw" : ""
              )}
            >
              <Linkedin className="h-20 w-20 text-primary" />
            </div>

            <div className="h-fit font-bold text-xl pb-6">
              <a
                href="https://www.linkedin.com/in/dylan-banerjee"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                My Linkedin Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
