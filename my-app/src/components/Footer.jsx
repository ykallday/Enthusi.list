import {BsEmojiSmileFill} from 'react-icons/bs'
import tmdblogo from '../images/tmdb icon.svg'
export default function Footer(){
    return(
        <div className="footer-container">
            <span>MADE BY YAEL KAUFMAN <BsEmojiSmileFill size={10}/></span>
            <img className="tmdb_logo" src={tmdblogo}/>
        
        </div>
    )
}