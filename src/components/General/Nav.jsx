
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Nav = ({ data }) => {

  return (
    <header className="flex flex-row justify-between items-center md:px-10 px-6 h-20 bg-color-1 text-color-2">
      <div className="flex flex-row items-center gap-10">
        <Link className="font-bold text-lg" to={data.image.href}>
          <img src={data.image.img} alt={data.image.alt} />
          {/* {data.image.logo} */}
        </Link>
        <nav>
          <ul className="md:flex hidden flex-row font-medium gap-3">
            {data.navigation.map((nav, index) => {
              return <Link key={index} to={nav.href} >{nav.name}</Link>;
            })}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-4 text-lg">
        {data.extra.map((logo, index) => {
          return (
          <Link key={index} to={logo.href}>
            <i className={logo.logo}></i>
          </Link>);
        })}
            <i className={data.burguer.logo + " md:hidden block"}></i>
      </div>
    </header>
  );
};

export default Nav;

Nav.propTypes = {
  data: PropTypes.object.isRequired,
};
