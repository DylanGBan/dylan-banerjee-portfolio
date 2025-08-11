import { Home } from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./pages/NotFound"

function App() {

   const basename = import.meta.env.BASE_URL.replace(/\/+$/, "");

  return (
    <>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
