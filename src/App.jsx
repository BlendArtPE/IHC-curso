import {Routes, Route} from "react-router-dom"

import index from "./mock/main.json"
import Nav from "./components/General/Nav"

import Footer from "./components/General/Footer"
import ShoppingCart from "./components/ShoppingCart/ShoppingCart"
import SignIn from "./components/Login/SignIn"
import SignUp from "./components/Login/SignUp"
import SectionMain from "./components/Main/SectionMain"
import SectionProduct from "./components/Product/SectionProduct"
import Account from "./components/Account/Account"
function App() {

  return (
    <>
        <div className="relative">
          <div className="fixed top-0 left-0 right-0 z-10">
            <Nav data={index.sections.nav} />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<SectionMain data={index}/>} />
          <Route path="/product" element={<SectionProduct />} />
          <Route path="/signin" element={<SignUp />} />
          <Route path="/signup" element={<SignIn />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer data={index.sections.footer} />
    </>
  )
}

export default App
