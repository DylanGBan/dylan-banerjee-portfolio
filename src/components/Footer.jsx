import { ArrowUp } from "lucide-react"
import { Link } from "react-router-dom"


export const Footer = () =>{
    return <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        {/* add website domain instead of Dylan Banerjee */}
        <p className="text-sm text-muted-foreground"> &copy; {new Date().getFullYear()} Dylan Banerjee, All rights reserved.</p>
        <Link to="/" className="p-2 rounded-full
        bg-primary/10 hover:bg-primary/20 text-primary transition-colors animate-bounce"> <ArrowUp /></Link>
    </footer>
}
