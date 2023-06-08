import { styled } from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

/**Styles*/
const Foot = styled.div`
  height: 40px;
  margin-top: 20px;
  background-color: #585e71;
  color: white;
  font-size: 15px;
  padding: 10px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.a`
  color: white;
  padding: 5px;
  padding-left: 7px;
`;
/*****/

const Footer = () => {
  return (
    <Foot>
      Made by Yael Kaufman
      <div>
        Connect with Me
        <Icon href="http://github.com/ykallday" target="_blank" title="GitHub">
          <BsGithub size={15} />
        </Icon>
        <Icon
          href="http://linkedin.com/in/yael-kaufman"
          target="_blank"
          title="Linkedin"
        >
          <BsLinkedin size={15} />
        </Icon>
        <Icon href="http://yaelkaufman.com" target="_blank" title="Website">
          <CgWebsite size={15} />
        </Icon>
        <Icon href="mailto:yaelkauf29@gmail.com" title="Email">
          <MdAlternateEmail size={15} />
        </Icon>
      </div>
    </Foot>
  );
};

export default Footer;
