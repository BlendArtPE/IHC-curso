import main from "./mock/main.json"
import Nav from "./components/Nav"
import Main from "./components/Main"
function App() {

  return (
    <>
        <div className="relative">
          <div className="fixed top-0 left-0 right-0 z-10">
            <Nav data={main.sections.nav} />
          </div>
        </div>
        <Main data={main.sections.main} />
    </>
  )
}

export default App
