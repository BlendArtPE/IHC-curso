import main from "./mock/main.json"
import Nav from "./components/Nav"
function App() {

  return (
    <>
        <Nav data={main.sections.nav} />
    </>
  )
}

export default App
