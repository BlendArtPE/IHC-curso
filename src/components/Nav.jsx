import PropTypes from "prop-types";

const Nav = ({ data }) => {
  console.log(data.extra);

  return (
    <header className="flex flex-row justify-between items-center px-10 h-20 bg-red-500">
      <div className="flex flex-row items-center gap-10">
        <h1 className="font-bold text-lg">{data.image}</h1>
        <nav>
          <ul className="flex flex-row font-medium gap-3">
            {data.navigation.map((nav) => {
              return <li key={nav}>{nav}</li>;
            })}
          </ul>
        </nav>
      </div>
      <div className="flex gap-4 text-lg">
        {data.extra.map((logo) => {
          return <i key={logo.name} className={logo.logo}></i>;
        })}
      </div>
    </header>
  );
};

export default Nav;

Nav.propTypes = {
  data: PropTypes.object.isRequired,
};