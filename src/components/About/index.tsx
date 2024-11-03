import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

import mePicture from "../../assets/me-picture.jpeg";

const About = () => {
  return (
    <div
      id="about"
      className="w-11/12 m-auto mt-80 min-[420px]:mt-[40vh] md:mt-[60vh] lg:mt-[60vh] xl:mt-20 flex flex-col-reverse xl:flex-row h-[90vh] xl:h-[85vh]"
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
              {new Date().getFullYear() - 2019} anos - HTML, CSS, JS
            </label>
            <span className="flex items-center uppercase font-bold">
              <Progress value={80} className="min-w-[25rem] bg-stone-600 mr-5" />{" "}
              
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-8" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-8" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" className="w-8" />

            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <label className="uppercase font-bold">
              {new Date().getFullYear() - 2021} anos - Bootstrap, Tailwind
            </label>
            <span className="flex items-center uppercase font-bold">
              <Progress value={60} className="min-w-[25rem] bg-stone-600 mr-5" />{" "}

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" className="w-8 mr-1" />

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-8" />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
          >
            <label className="uppercase font-bold">
              {new Date().getFullYear() - 2021} anos - React, Typescript
            </label>
            <span className="flex items-center uppercase font-bold">
              <Progress value={60} className="min-w-[25rem] bg-stone-600 mr-5" />{" "}
              
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-8 mr-1" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" className="w-8" />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <label className="uppercase font-bold">
              {new Date().getFullYear() - 2024} anos - Go, Flutter, Dart
            </label>
            <span className="flex items-center uppercase font-bold">
              <Progress value={10} className="min-w-[25rem] bg-stone-600 mr-5" />{" "}
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" className="w-8 mr-1" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" className="w-8" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" className="w-8" />
            </span> 
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3.5 }}
          >
            <label className="uppercase font-bold">
              {new Date().getFullYear() - 2024} ano - Docker, MongoDB, GraphQL
            </label>
            <span className="flex items-center uppercase font-bold">
              <Progress value={20} className="min-w-[25rem] bg-stone-600 mr-5" />{" "}
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" className="w-8 mr-1" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg"className="w-8" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" className="w-8" />
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
