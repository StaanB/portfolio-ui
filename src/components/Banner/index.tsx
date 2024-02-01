import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
import { SendHorizonal } from "lucide-react";
import { ArrowBigDown } from "lucide-react";

import bgMe from "../../assets/me-color.jpg";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen h-[85vh] flex flex-wrap items-center justify-between mx-14 py-5">
        <ul className="flex flex-col gap-6">
          <li>
            <a
              href="https://www.linkedin.com/in/stanley-brenner-front-end/"
              target="_blank"
            >
              <Linkedin className="hover:text-orange-600" />
            </a>
          </li>
          <li>
            <a href="https://github.com/StaanB" target="_blank">
              <Github className="hover:text-orange-600" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/staanb/" target="_blank">
              <Instagram className="hover:text-orange-600" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/+5571986895914" target="_blank">
              <SendHorizonal className="hover:text-orange-600" />
            </a>
          </li>
        </ul>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 100,
          }}
        >
          <img
            src={bgMe}
            alt="Stanley"
            className="bg-contain w-[45rem] relative right-36 rounded-full"
          />
        </motion.div>

        <div className="relative right-[18rem] bottom-[5rem]">
          <motion.h1
            whileHover={{ color: "#ea580c" }}
            className="w-[6rem] relative right-[6rem] text-[6rem] uppercase font-bold text-start cursor-pointer"
          >
            <Typewriter
              options={{
                strings: ["Desenvolvedor"],
                autoStart: true,
                loop: true,
                delay: 200,
              }}
            />
          </motion.h1>
          <h2 className="text-[3rem] uppercase font-bold text-center tracking-[2rem]">
            Front-End
          </h2>
          <p className="text-[2rem] mt-4 uppercase font-thin text-center">
            Stanley Brenner
          </p>
        </div>
        <ArrowBigDown className="fixed animate-bounce left-[95vw] top-[90vh]" />
      </div>
    </>
  );
};

export default Banner;
