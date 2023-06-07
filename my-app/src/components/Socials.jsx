import { BsGlobe } from "react-icons/bs";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
export default function Socials() {
  return(
  <>
    <a href="http://github.com/ykallday">
      <AiOutlineGithub size={15} />
    </a>
    <a href="http://linkedin.com/in/yael-kaufman">
      <AiFillLinkedin size={15} />
    </a>
    <a href="http://yaelkaufman.com">
      <BsGlobe size={15} />
    </a>
    <a href="mailto:yaelkauf29@gmail.com">
      <AiOutlineMail size={15} />
    </a>
  </>
  )
}
