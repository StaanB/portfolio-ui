import logoNome from "../../assets/logo-staanb.png";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-14 py-5">
        <h1 className="flex items-center text-xl font-bold uppercase hover:text-orange-600 cursor-pointer ease-linear">
          <img src={logoNome} alt="StaanB" className="w-20 m-0 p-0 bg-cover" />{" "}
          Stanley Brenner
        </h1>
        <ul className="flex justify-between w-80 text-lg uppercase">
          <li className="font-medium hover:text-orange-600 cursor-pointer"><a href="#">Sobre</a></li>
          <li className="font-medium hover:text-orange-600 cursor-pointer"><a href="#">Portfólio</a></li>
          <li className="font-medium hover:text-orange-600 cursor-pointer"><a href="#">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
