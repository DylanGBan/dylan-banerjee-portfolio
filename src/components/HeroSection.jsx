import { ArrowDown } from "lucide-react"
import DarkVeil from "../blocks/Backgrounds/DarkVeil/DarkVeil";
import Particles from "../blocks/Backgrounds/Particles/Particles"

export const HeroSection = () => {
    return (
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
      >
        {/* hue 30 is close
          <DarkVeil hueShift={36}/> */}
        <div className="w-[100%] h-[100%] absolute inset-0">
          <Particles
            alphaParticles={false}
            speed={0.4}
            particleCount={600}
            particleColors={["#f8fafc", "#05080f"]}
          />
        </div>

        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-8xl font-bold tracking-tight ">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Dylan
              </span>
              <span className="text-primary opacity-0 animate-fade-in-delay-2">
                {" "}
                Banerjee
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              Welcome to my portfolio! I'm excited to have you learn more about
              me.
            </p>
          </div>
        </div>

        <a href="#about">
          <div className="opacity-0 absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in-delay-max">
            <span className="text-lg text-muted-foreground mb-2 animate-bounce">
              {" "}
              Scroll{" "}
            </span>
            <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
          </div>
        </a>
      </section>
    );
}