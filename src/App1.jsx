import index from "./mock/main.json"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Profile from "./components/Profile"

const App1 = () => {
  return (
    <>
        <div className="relative">
          <div className="fixed top-0 left-0 right-0 z-10">
            <Nav data={index.sections.nav} />
          </div>
        </div>
        <div className=" h-36"/>
        <Profile />
        <div className="h-4"/>
        <Footer data={index.sections.footer} />
    </>
  )
}

export default App1
