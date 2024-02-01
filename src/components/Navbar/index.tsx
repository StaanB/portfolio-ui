import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

import logoNome from "../../assets/logo-staanb.png";

import { colors } from "@/lib/utils";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const Navbar = () => {
  return (
    <nav>
      <div className="w-11/12 m-auto flex flex-wrap items-center justify-center md:justify-between py-5 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
        <motion.h1
          whileHover={{ color: colors.mainColor }}
          className="flex items-center text-md md:text-xl font-bold uppercase cursor-pointer ease-in text-center"
        >
          <a className="flex items-center" onClick={() => scrollToTop()}>
            <img
              src={logoNome}
              alt="StaanB"
              className="w-6 xl:w-10 mr-3 p-0 bg-cover"
            />{" "}
            Stanley Brenner
          </a>
        </motion.h1>
        <ul className="flex mt-3 xl:mt-0 justify-evenly text-center w-80 text-md md:text-lg uppercase">
          <motion.li
            whileHover={{ color: colors.mainColor }}
            className="font-medium cursor-pointer "
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              Sobre
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ color: colors.mainColor }}
            className="font-medium cursor-pointer"
          >
            <a href="#">Portfólio</a>
          </motion.li>
          <motion.li
            whileHover={{ color: colors.mainColor }}
            className="font-medium cursor-pointer"
          >
            <a href="#">Contato</a>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
