import { cn } from "@/lib/utils";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Experience", to: "/experience" },
  { name: "Showcase", to: "/showcase" },
  { name: "Contact", to: "/contact" },
];


export const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect (() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }

      return () => {
        document.body.style.overflow = "";
      };
    }, [isMenuOpen]);


    return (
      <>
        <nav
          className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled
              ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
              : "py-5"
          )}
        >
          <div className="container flex items-center justify-between">
            <Link className="text-xl font-bold flex text-primary" to="/">
              <span className="relative px-5 z-10">
                {" "}
                <span className="text-glow text-foreground">Dylan's</span>{" "}
                Portfolio
              </span>
            </Link>

            {/* desktop */}
            <div className="hidden w-fit md:flex 2xl:flex-1/2 2xl:justify-center 2xl:ml-90 space-x-8">
              {navItems.map((item, key) => (
                <Link
                  key={key}
                  to={item.to}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* mobile */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden p-2 text-foreground z-50"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <ThemeToggle />
          </div>
        </nav>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center",
            "justify-center transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <Link
                key={key}
                to={item.to}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </>
    );
}
