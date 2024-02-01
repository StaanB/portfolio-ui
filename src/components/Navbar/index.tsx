import { motion } from "framer-motion";

import logoNome from "../../assets/logo-staanb.png";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-14 py-5">
        <motion.h1
          whileHover={{ color: "#ea580c" }}
          className="flex items-center text-xl font-bold uppercase cursor-pointer ease-in"
        >
          <img src={logoNome} alt="StaanB" className="w-20 m-0 p-0 bg-cover" />{" "}
          Stanley Brenner
        </motion.h1>
        <ul className="flex justify-between w-80 text-lg uppercase">
          <motion.li
            whileHover={{ color: "#ea580c" }}
            className="font-medium cursor-pointer"
          >
            <a href="#">Sobre</a>
          </motion.li>
          <motion.li
            whileHover={{ color: "#ea580c" }}
            className="font-medium cursor-pointer"
          >
            <a href="#">Portfólio</a>
          </motion.li>
          <motion.li
            whileHover={{ color: "#ea580c" }}
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
