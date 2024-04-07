import ListProducts from "./ListProducts"
import Price from "./Price"

const ShoppingCart = () => {
  return (
    <section className="mt-24 mx-auto h-screen max-w-screen-lg border grid grid-cols-4 gap-5">
        <ListProducts />
        <Price />
        
    </section>
  )
}

export default ShoppingCart
