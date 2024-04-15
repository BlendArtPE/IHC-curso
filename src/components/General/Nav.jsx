
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

const Nav = ({ data }) => {

  const navLinkStyles = ({ isActive }) => {
    return {
        fontWeight: isActive ? '600' : 'normal',
        textDecoration: isActive ? 'underline' : 'none',
        textDecorationThickness: isActive ? '0.2em' : 'auto',
        color: isActive? '#3b82f6' : 'white'
    }
}

  const [config, setConfig] = useState(false)
  return (
    <header className="flex flex-row justify-between items-center md:px-10 px-6 h-20 bg-color-1 text-color-2">
      <div className="flex flex-row items-center gap-10">
        <Link className="font-bold text-lg" to={data.image.href}>
          <img src={data.image.img} alt={data.image.alt} />
          {/* {data.image.logo} */}
        </Link>
        <nav>
          <ul className="md:flex hidden flex-row gap-3">
            {data.navigation.map((nav, index) => {
              return <NavLink style={navLinkStyles} key={index} to={nav.href} >{nav.name}</NavLink>;
              
            })}
          </ul>
        </nav>
      </div>
      <div className="relative flex items-center gap-4 text-lg">
        {/* {data.extra.map((logo, index) => {
          return (
          <Link key={index} to={logo.href}><i className={logo.logo}></i></Link>);
        })} */}
          <Link to="/search"><i className="fa-solid fa-magnifying-glass"></i></Link>
          <Link to="/shopping-cart"><i className="fa-solid fa-cart-shopping"></i></Link>
          <i onClick={() => setConfig(!config)} className="fa-solid fa-user"></i>
          <i className={data.burguer.logo + " md:hidden block"}></i>
          <ul className={`absolute text-black z-30 ${config ? "flex" : "hidden"} flex-col -bottom-36
          bg-color-3 w-24 rounded-xl
          `}>
            <Link onClick={() => setConfig(false)} to="/signin" className="hover:bg-color-9 px-2 py-1 rounded-t-xl">Ingresar</Link>
            <Link onClick={() => setConfig(false)} to="/signup" className="hover:bg-color-9 px-2 py-1">Registrar</Link>
            <Link onClick={() => setConfig(false)} to="/account" className="hover:bg-color-9 px-2 py-1 rounded-b-xl">Cuenta</Link>
          </ul>
      </div>
    </header>
  );
};

export default Nav;

Nav.propTypes = {
  data: PropTypes.object.isRequired,
};
