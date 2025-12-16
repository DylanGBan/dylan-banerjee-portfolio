import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Experience } from "./pages/Experience"
import { Showcase } from "./pages/Showcase"
import { Skills } from "./pages/Skills"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"
import { NotFound } from "./pages/NotFound"

function App() {

   const basename = import.meta.env.BASE_URL.replace(/\/+$/, "");

  return (
    <>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
