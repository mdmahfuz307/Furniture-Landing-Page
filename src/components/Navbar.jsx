import { Link, NavLink } from 'react-router';
import { FaBagShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { FaTimes } from "react-icons/fa"; 

const navItems = [
    { path: "/", label: "Furniture",},
    { path: "/shop", label: "Shop",},
    { path: "/about", label: "About Us",},
    { path: "/contact", label: "Contact",},
];


const NavItems = ({toggleMenu}) => {
    return (
      <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
        {navItems.map((item, index) => (
          <li key={index} onClick={toggleMenu}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-amber-500 font-bold" : "hover:text-amber-500"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    );
}


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  const [isScrolled, setIsScrolled] = useState(false); 


  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Correctly toggle menu state
  };

  //when scroll, apply bg color to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent text-white"
        }`}
      >
        <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4">
          {/* LOGO */}

          <Link to="/" className="font-bold">
            Panto
          </Link>

          {/* Hamburger menu for mobile */}
          <div
            className="md:hidden text-xl cursor-pointer"
            onClick={toggleMenu}
          >
            {isMenuOpen ? null : <FaBars />}
          </div>

          {/* Desktop menu items */}
          <div className="hidden md:flex">
            <NavItems />
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden`}
          >
            <div
              className="absolute top-4 right-4 text-xl cursor-pointer"
              onClick={toggleMenu}
            >
              <FaTimes />
            </div>
            <NavItems toggleMenu={toggleMenu} />
          </div>

          {/* Card Items */}
          <div className="hidden md:block cursor-pointer relative">
            <FaBagShopping className="text-xl" />
            <sup className="absolute top-0 -right-3 bg-amber-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
              0
            </sup>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;