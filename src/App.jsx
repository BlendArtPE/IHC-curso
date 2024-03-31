import index from "./mock/main.json"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Categories from "./components/Categories"
function App() {

  return (
    <>
        <div className="relative">
          <div className="fixed top-0 left-0 right-0 z-10">
            <Nav data={index.sections.nav} />
          </div>
        </div>
        <Main data={index.sections.main} />
        <div className="h-4"/>
        <Categories data={index.sections.categories} />
    </>
  )
}

export default App
