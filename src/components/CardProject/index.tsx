import { motion } from "framer-motion";

import { Github } from "lucide-react";
import { ArrowUpRightFromSquare } from "lucide-react";
import { colors } from "@/lib/utils";

type CardProps = {
  cardPicture: string;
  projectName: string;
  description: string;
  tags: string[];
  linkGithub?: string;
  linkDemo?: string;
  flexRow: string;
};

const CardProject = ({
  cardPicture,
  projectName,
  description,
  tags,
  linkGithub,
  linkDemo,
  flexRow,
}: CardProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, bottom: 10 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={`w-full lg:w-2/3 xl:w-10/12 p-3 xl:p-8 m-auto flex flex-col items-center justify-center bg-stone-900 rounded-md mb-20 ${flexRow}`}
      >
        <img
          src={cardPicture}
          alt={projectName}
          className="w-full xl:w-1/2 rounded-md"
        />

        <div className="w-full xl:w-1/2 h-4/5 flex flex-col items-center justify-between text-center">
          <h3 className="text-xl uppercase font-bold mb-5 mt-5 xl:mt-0 lg:mt-2">
            {projectName}
          </h3>
          <p className="w-full xl:w-10/12 mb-5">{description}</p>

          <ul className="w-5/6 lg:w-1/3 xl:w-1/3 flex justify-between items-center font-bold mb-5">
            {tags.map((tag) => {
              return <li>{tag}</li>;
            })}
          </ul>

          <div className="w-5/6 lg:w-1/3 xl:w-1/3 text-lg flex justify-between items-center font-semibold">
            <motion.a
              whileHover={{ color: colors.mainColor }}
              href={linkGithub}
              className="flex gap-1"
              target="_blank"
            >
              {linkGithub ? (
                <>
                  Code <Github />
                </>
              ) : ""}
            </motion.a>
            <motion.a
              whileHover={{ color: colors.mainColor }}
              href={linkDemo}
              className="flex gap-1"
              target="_blank"
            >
              {linkDemo ? (
                <>
                  Acesse! <ArrowUpRightFromSquare />
                </>
              ) : ""}

            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CardProject;
