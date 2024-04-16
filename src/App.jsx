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
import NotFound from "./components/General/NotFound"
import Catalogue from "./components/Catalogue/Catalogue"
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
          <Route path="product" element={<SectionProduct data={index}/>} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="shopping-cart" element={<ShoppingCart data={index}/>} />
          <Route path="account" element={<Account data={index} />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Footer data={index.sections.footer} />
    </>
  )
}

export default App
