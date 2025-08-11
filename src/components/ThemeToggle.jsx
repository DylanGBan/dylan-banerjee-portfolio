import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export const ThemeToggle = () => {
    
    const[isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")

        if(storedTheme == "dark") {
            setDarkMode(true)
            document.documentElement.classList.add("dark");
        }else{
            setDarkMode(false);
            localStorage.setItem("theme", "light");
        }
    }, [])

    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        }
    };

    return (
      <button onClick={toggleTheme} className={cn("fixed max-sm:mr-10 max-sm:pt-0.5 right-5 z-50 py-0.2 rounded-full transition-colors duration-300",
        "focus:outline-hidden hover:animate-pulse-subtle"
      )}>
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>
    );
}