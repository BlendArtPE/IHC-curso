import PropTypes from "prop-types";

const Main = ({ data }) => {

  return (
    <>
      {data.carrousel.map((main, index) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <main key={index} className="relative text-color-2">
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
                    {/* <h2 className="text-lg font-semibold">{main.subTitle}</h2> */}
                    <p className="text-xl w-96">{main.text}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <a href="" className="font-bold underline underline-offset-4">{main.buttons[0]}</a>
                    <a href="" className="bg-color-1 font-semibold rounded-full px-12 py-[6px]">{main.buttons[1]}</a>
                  </div>
                </div>
              </div>
              <i className="fa-solid fa-circle-chevron-right"></i>
            </div>
          </main>
        );
      })}
    </>
  );
};

export default Main;

Main.propTypes = {
  data: PropTypes.object.isRequired,
};
