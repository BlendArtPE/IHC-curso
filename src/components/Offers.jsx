import PropTypes from "prop-types";

const Offers = ({ data }) => {
  return (
    <section>
        <h2 className="text-center text-2xl font-bold mb-2">{data.title}</h2>
        <ul className="flex justify-center font-medium text-lg gap-4 mb-5">
            {data.categories.map((categorie, index) => {
                return (
                    <li key={index} className="hover:underline" >{categorie}</li>
                    )
            })}
        </ul>
    <div className="mx-auto max-w-screen-xl grid grid-cols-2 gap-5">
      {
          data.subOffers.map((offers) => {
              return (
                  <>
                <img className="rounded-2xl" src={offers.imageMain} alt="A" />
                <div className="grid grid-cols-2 grid-rows-2 gap-5 *:rounded-2xl">
                    {offers.products.map((product,index) => {
                        return (
                            <div key={index} className="relative">
                                <img src={product.image} alt="a" className="rounded-2xl" />
                                <p className="absolute top-4 left-4 px-3 rounded-full bg-sky-600 text-white">{product.discount}</p>
                                <div className="absolute inset-x-0 bottom-6 flex flex-col text-center">
                                    <h3 className="font-bold">{product.title}</h3>
                                    <p>{product.information}</p>
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
