import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
import { SendHorizonal } from "lucide-react";

const SocialMedias = () => {
  return (
    <ul className="fixed w-fit md:w-10 md:h-56 top-[12vh] md:top-1/3 left-[20vw] min-[420px]:left-[30vw] md:left-[5vw] flex md:flex-col xl:flex-col gap-8 xl:gap-6 items-center z-50 backdrop-blur-sm">
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
        <a href="https://www.instagram.com/_staanb/" target="_blank">
          <Instagram className="hover:text-orange-600" />
        </a>
      </li>
      <li>
        <a href="https://wa.me/+5571986895914" target="_blank">
          <SendHorizonal className="hover:text-orange-600" />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedias;
