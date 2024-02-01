import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowBigDown } from "lucide-react";

import bgMe from "../../assets/me-color.jpg";

import { colors } from "@/lib/utils";

const Banner = () => {
  return (
    <>
      <div
        id="home"
        className="w-11/12 m-auto h-[80vh] xl:h-[85vh] flex flex-col xl:flex-wrap items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 100,
            duration: 2,
          }}
        >
          <img
            src={bgMe}
            alt="Stanley"
            className="object-cover w-[20rem] md:w-[25rem] xl:w-[45rem] mt-10 xl:mt-0 relative xl:right-30 rounded-full"
          />
        </motion.div>

        <div className="flex flex-col items-center justify-center text-center relative w-full xl:w-[25%] xl:right-[12rem]">
          <motion.h1
            whileHover={{ color: colors.mainColor }}
            className="text-[2rem] md:text-[4rem] xl:text-[6rem] uppercase font-bold text-start cursor-pointer"
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
          <h2 className="text-[1rem] md:text-[2rem] xl:text-[3rem] uppercase font-bold text-center tracking-[1rem]">
            Front-End
          </h2>
          <p className="md:text-[1rem] xl:text-[1.5rem] mt-4 uppercase font-thin text-center">
            Stanley Brenner
          </p>
        </div>
        <ArrowBigDown className="fixed animate-bounce xl:left-[95vw] top-[95vh] hover:text-orange-600 backdrop-blur-sm z-50" />
      </div>
    </>
  );
};

export default Banner;
