import {BsEmojiSmileFill} from 'react-icons/bs'
import tmdblogo from '../images/tmdb icon.svg'
import Socials from './Socials'
 
export default function Footer(){
    return(
        <div className="footer-container">
           <div><span>MADE BY YAEL KAUFMAN <BsEmojiSmileFill size={10}/></span></div>
            <div><img className="tmdb_logo" src={tmdblogo}/></div>
            <div className="connect-footer">
                <span>CONNECT WITH ME:</span>
                <Socials/>
            </div>
        </div>
    )
}