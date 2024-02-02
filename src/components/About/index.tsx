import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

import mePicture from "../../assets/me-picture.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-11/12 m-auto mt-56 min-[420px]:mt-[40vh] md:mt-[60vh] lg:mt-[60vh] xl:mt-20 flex flex-col-reverse xl:flex-row h-[90vh] xl:h-[85vh]"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="xl:w-1/2"
        >
          <h2 className="w-full text-[1.5rem] xl:text-[2rem] mt-5 uppercase font-bold">
            Minhas habilidades e competências
          </h2>
          <p className="text-md text-center mt-5 mb-10">
            Eu particularmente não acredite que seja possível ranquear com
            certeza um nível de habilidade então irei deixar meu tempo de
            trabalho com cada uma delas.
          </p>
        </motion.div>

        <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/2 mb-5 xl:mb-0 flex flex-col text-start justify-center gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="uppercase font-bold">
              {new Date().getFullYear() - 2019} anos
            </label>
            <span className="flex items-center uppercase font-bold">
              <Progress value={80} className="w-[30rem] bg-stone-600 mr-5" />{" "}
              HTML
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <label className="uppercase font-bold">
              {new Date().getFullYear() - 2019} anos
            </label>
            <span className="flex items-center uppercase font-bold">
              <Progress value={80} className="w-[30rem] bg-stone-600 mr-5" />{" "}
              CSS
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <label className="uppercase font-bold">
              {new Date().getFullYear() - 2021} anos
            </label>
            <span className="flex items-center uppercase font-bold">
              <Progress value={60} className="w-[30rem] bg-stone-600 mr-5" />{" "}
              Bootstrap
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <label className="uppercase font-bold">
              {new Date().getFullYear() - 2019} anos
            </label>
            <span className="flex items-center uppercase font-bold">
              <Progress value={80} className="w-[30rem] bg-stone-600 mr-5" />{" "}
              Javascript
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
          >
            <label className="uppercase font-bold">
              {new Date().getFullYear() - 2021} anos
            </label>
            <span className="flex items-center uppercase font-bold">
              <Progress value={60} className="w-[30rem] bg-stone-600 mr-5" />{" "}
              Typescript
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <label className="uppercase font-bold">
              {new Date().getFullYear() - 2021} anos
            </label>
            <span className="flex items-center uppercase font-bold">
              <Progress value={60} className="w-[30rem] bg-stone-600 mr-5" />{" "}
              ReactJS
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3.5 }}
          >
            <label className="uppercase font-bold">
              {new Date().getFullYear() - 2023} anos
            </label>
            <span className="flex items-center uppercase font-bold">
              <Progress value={20} className="w-[30rem] bg-stone-600 mr-5" />{" "}
              NextJS
            </span>
          </motion.div>
        </div>
      </div>

      <div className="w-full xl:w-1/2 m-auto xl:flex items-center">
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          src={mePicture}
          alt="Stanley-2"
          className="object-cover w-full min-[420px]:w-[18rem] md:w-[30rem] lg:w-[15rem] xl:w-[40rem] h-[20rem] min-[420px]:h-[18rem] md:h-[30rem] lg:h-[15rem] xl:h-[40rem] m-auto rounded-full"
        />
      </div>
    </div>
  );
};

export default About;
