
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

const Nav = ({ data }) => {

  const navLinkStyles = ({ isActive }) => {
    return {
        fontWeight: isActive ? '600' : 'normal',
        textDecoration: isActive ? 'underline' : 'none',
        textDecorationThickness: isActive ? '0.2em' : 'auto',
        color: isActive? '#00E3F9' : 'white'
    }
  }

  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const [config, setConfig] = useState(false)
  return (
    <header className="flex flex-row justify-between items-center md:px-10 px-6 h-20 bg-gradient-to-r from-color-1 to-color-10 text-color-2 ">
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
          <i onClick={toggleVisibility} className={data.burguer.logo + " md:hidden block"}></i>
          <ul className={`absolute text-black z-30 ${config ? "flex" : "hidden"} flex-col -bottom-36
          bg-color-3 w-24 rounded-sm
          `}>
            <Link onClick={() => setConfig(false)} to="/signin" className="hover:bg-color-9 px-2 py-1 rounded-t-sm">Ingresar</Link>
            <Link onClick={() => setConfig(false)} to="/signup" className="hover:bg-color-9 px-2 py-1">Registrar</Link>
            <Link onClick={() => setConfig(false)} to="/account" className="hover:bg-color-9 px-2 py-1 rounded-t-sm">Cuenta</Link>
          </ul>
      </div>
      <ul className={`absolute ${visible ? "flex" : "hidden"} flex-col -bottom-40 left-0 bg-color-1 text-color-2 *:py-2 w-full z-20 text-center font-medium`}>
        <Link onClick={toggleVisibility} to="/">Inicio</Link>
        <Link onClick={toggleVisibility} to="/offers">Ofertas</Link>
        <Link onClick={toggleVisibility} to="/product">Producto</Link>
        <Link onClick={toggleVisibility} to="/catalogue">Catálogo</Link>
      </ul>
    </header>
  );
};

export default Nav;

Nav.propTypes = {
  data: PropTypes.object.isRequired,
};
