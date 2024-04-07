import index from "../../mock/main.json"
import Nav from "../General/Nav"
import Main from "../Main/Main"
import Categories from "../Main/Categories"
import Offers from "../Main/Offers"
import MainProducts from "../Main/MainProducts"
import RecommendedProducts from "../Main/RecommendedProducts"
import Product from "../Product/Product"
import Footer from "../General/Footer"
import Feature from "../Product/Feature"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import SignIn from "../Login/SignIn"
import SignUp from "../Login/SignUp"
import NewProfile from "../Account/NewProfile"
function App() {

  return (
    <>
        <div className="relative">
          <div className="fixed top-0 left-0 right-0 z-10">
            <Nav data={index.sections.nav} />
          </div>
        </div>
        <NewProfile />
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        {/* <ShoppingCart /> */}
        {/* <Product />
        <Feature /> */}
        {/* <Main data={index.sections.main} />
        <div className="h-4"/>
        <Categories data={index.sections.categories} />
        <div className="h-4"/>
        <Offers data={index.sections.offers} />
        <div className="h-4"/>
        <MainProducts data={index.sections.mainProducts} />
        <div className="h-4"/>
        <RecommendedProducts data={index.sections.recommendedProducts} />
        <div className="h-4"/> */}
        <Footer data={index.sections.footer} />
    </>
  )
}

export default App
