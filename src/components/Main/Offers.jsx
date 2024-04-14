import PropTypes from "prop-types";

const Offers = ({ data }) => {
  return (
    <section>
        {/* <h2 className="text-center text-2xl font-bold mb-2">{data.title}</h2>
        <ul className="flex justify-center font-medium text-lg gap-4 mb-5">
            {data.categories.map((categorie, index) => {
                return (
                    <li key={index} className="hover:underline" >{categorie}</li>
                    )
            })}
        </ul> */}
    <div className="mx-auto max-w-screen-xl grid xl:grid-cols-2 grid-cols-1 gap-5 px-4">
      {
          data.subOffers.map((offers) => {
              return (
                  <>
                    <div className="relative">
                        <img className="rounded-2xl w-full" src={offers.imageMain} alt="A" />
                        <div className="absolute inset-x-0 bottom-0 rounded-b-2xl text-center text-white bg-color-1 md:py-6 py-2">
                            <h2 className="md:text-5xl text-2xl font-semibold">Hasta 50% dscto.</h2>
                            <h2 className="md:text-5xl text-2xl font-semibold mb-2">¡Llévate todo!</h2>
                            <p className="md:text-base text-sm">Disfruta de descuentos exclusivos</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-2 gap-5 *:rounded-2xl">
                        {offers.products.map((product,index) => {
                            return (
                                <div key={index} className="relative group flex justify-center items-center bg-color-3 shadow-color-sombra shadow-md lg:h-auto h-72">
                                    <img src={product.image} alt="a" className="group-hover:scale-110 transition-all duration-5 w-48 mb-10" />
                                    <p className="absolute top-4 left-4 px-3 rounded-full bg-sky-600 text-white">{product.discount}</p>
                                    <div className="absolute inset-x-0 bottom-6 flex flex-col text-center">
                                        <h3 className="text-xl font-bold px-4">{product.title}</h3>
                                        <p className="text-sm">{product.information}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            )
        })
    }
    </div>
    </section>
  );
};

Offers.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Offers;
