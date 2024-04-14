import ProductSelected from "./ProductSelected"
import ProductSelectedTwo from "./ProductSelectedTwo"

const ListProducts = () => {
  return (
    <div className="lg:col-span-4 col-span-6">
        <h1 className="font-medium text-3xl mb-4">Mi carrito de compras</h1>
        <div className="flex flex-col gap-3">
        <ProductSelectedTwo />
        {/* <ProductSelected />
        <ProductSelected />
        <ProductSelected />
        <ProductSelected /> */}
        </div>
    </div>
  )
}

export default ListProducts
