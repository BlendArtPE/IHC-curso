
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Nav = ({ data }) => {

  return (
    <header className="flex flex-row justify-between items-center px-10 h-20 bg-red-500">
      <div className="flex flex-row items-center gap-10">
        <Link className="font-bold text-lg" to={data.image.href}>{data.image.logo}</Link>
        <nav>
          <ul className="flex flex-row font-medium gap-3">
            {data.navigation.map((nav, index) => {
              return <Link key={index} to={nav.href} >{nav.name}</Link>;
            })}
          </ul>
        </nav>
      </div>
      <div className="flex gap-4 text-lg">
        {data.extra.map((logo, index) => {
          return (
          <Link key={index} to={logo.href}>
            <i className={logo.logo}></i>
          </Link>);
        })}
      </div>
    </header>
  );
};

export default Nav;

Nav.propTypes = {
  data: PropTypes.object.isRequired,
};
