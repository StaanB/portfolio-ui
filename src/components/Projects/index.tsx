import { motion } from "framer-motion";

import CardProject from "../CardProject";

import eplay from "../../assets/foto-eplay.png";
import efood from "../../assets/foto-efood-site.png";
import dpms from "../../assets/dpms-foto.jpeg";
import digitalize from "../../assets/digitalize.png";

const Projects = () => {
  return (
    <div
      id="portfolio"
      className="w-11/12 m-auto mt-20 md:mt-[60vh] lg:mt-20 xl:mt-40 flex flex-col items-center justify-between h-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="xl:w-1/2 flex flex-col items-center text-center"
      >
        <h2 className="w-full text-[1.5rem] xl:text-[2rem] mt-5 uppercase font-bold">
          Cada projeto tem sua peculiaridade!🧩
        </h2>
        <p className="text-md w-full lg:w-1/2 text-center mt-5 mb-10">
          Durante esses últimos venho desenvolvendo projetos que acredito ser
          comuns no mercado, fique a vontade para acessar!!
        </p>
      </motion.div>

      <CardProject
        cardPicture={dpms}
        projectName="DPMS"
        description="DPMS é um site desenvolvido na empresa Oxeanbits, um projeto completo e fascinante feito para gerenciar e organizar tarefas executadas em ambientes de construção civil, nele é utilizado várias tecnologias de ponta e diversas soluções tecnológicas"
        tags={["ReactJS", "SAAS", "Ruby", "Jest"]}
        flexRow="card-row"
      />

      <CardProject
        cardPicture={digitalize}
        projectName="Digitalize"
        description="Digitalize é um aplicativo desenvolvido para várias plataformas, servindo como gerenciador complexo de tabelas e completamente flexível sedo usado para gerenciar academias, hospitais, igrejas e diversos tipos de empresas"
        tags={["Flutter", "Dart", "GraphQL"]}
        flexRow="card-reverse"
      />

      <CardProject
        cardPicture={eplay}
        projectName="Eplay🎮"
        description="A Eplay é uma e-commerce de games online para compra de jogos, a
            interface é moderna e conta com funcionalidades únicas como
            carrinho, responsividade e finalização do checkout."
        tags={["ReactJS", "Styled-Components"]}
        linkGithub="https://github.com/StaanB/EPLAY"
        linkDemo="https://eplay-one.vercel.app/"
        flexRow="card-row"
      />

      <CardProject
        cardPicture={efood}
        projectName="Efood🍽️"
        description="A Efood é um site de delivery e entregas feito com ReactJS, usando uma API fake para restaurantes ela conta com carrinho, checkout, pagamento e entrega"
        tags={["ReactJS", "Styled-Components"]}
        linkGithub="https://github.com/StaanB/EFOOD"
        linkDemo="https://efood-blue.vercel.app/"
        flexRow="card-reverse"
      />
    </div>
  );
};

export default Projects;
