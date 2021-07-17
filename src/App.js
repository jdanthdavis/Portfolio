import GlobalStyles from "./globalStyles"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </>
  )
}

export default App;
