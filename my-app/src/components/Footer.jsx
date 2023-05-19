import {BsEmojiSmileFill, BsGlobe} from 'react-icons/bs'
import {AiOutlineGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'
import tmdblogo from '../images/tmdb icon.svg'
export default function Footer(){
    return(
        <div className="footer-container">
           <div><span>MADE BY YAEL KAUFMAN <BsEmojiSmileFill size={10}/></span></div>
            <div><img className="tmdb_logo" src={tmdblogo}/></div>
            <div className="connect-footer">
                <span>CONNECT WITH ME:</span>
                <a href = "http://github.com/ykallday"><AiOutlineGithub size={15}/></a>
                <a href = "http://linkedin.com/in/yael-kaufman"><AiFillLinkedin size={15}/></a>
                <a href = "http://yaelkaufman.com"><BsGlobe size={15}/></a>
                <a href="mailto:yaelkauf29@gmail.com"><AiOutlineMail size={15}/></a>
            </div>
        </div>
    )
}