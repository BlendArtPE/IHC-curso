import PropTypes from "prop-types";

const Main = ({ data }) => {
  console.log(data);

  return (
    <section className="">
      {data.carrousel.map((main) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="relative">
            <img
              src={main.image}
              className="w-screen h-screen object-cover"
              alt="asd"
            />
            <div className="absolute inset-y-1/2 w-full flex flex-row justify-between items-center px-6">
              <div className="flex flex-row items-center gap-6">
                <i className="fa-solid fa-circle-chevron-left"></i>
                <div className="space-y-6">
                  <h1 className="text-6xl font-bold">{main.title}</h1>
                  <div>
                    <h2 className="text-lg font-semibold">{main.subTitle}</h2>
                    <p className="text-base w-96">{main.text}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <a href="" className="font-bold underline underline-offset-4">{main.buttons[0]}</a>
                    <a href="" className="bg-black text-white rounded-full px-4 py-1">{main.buttons[1]}</a>
                  </div>
                </div>
              </div>
              <i className="fa-solid fa-circle-chevron-right"></i>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Main;

Main.propTypes = {
  data: PropTypes.object.isRequired,
};
