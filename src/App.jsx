import Navbar from "./Component/Navbar/Navbar"
import Home from "./Component/Home/Home"
import About from "./Component/About/About"
import Skills from "./Component/Skills/Skills"
import Projects from "./Component/Projects/Projects"
import Contact from "./Component/Contact/Contact"

function App() {

  return (
   <div className="bg-black h-auto w-full overflow-hidden">
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>

   </div>
  )
}

export default App
