import './listItem.scss'
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined, ArrowBackOutlined } from '@material-ui/icons'
import YoutubeEmbed from '../../YoutubeEmbed';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useState } from "react"

export default function LisItemMob( ) {
    const [isShowing, setIsShowing] = useState(true);
    const closeModal=(e)=>{
        setIsShowing(!isShowing);
    }
    return createPortal(
        <div className="itemModal" style={{display: !isShowing && "none"}}>
            <div className="back" onClick={closeModal}>
                <ArrowBackOutlined/> 
                Home
            </div>
            <YoutubeEmbed embedId="1bq0qff4iF8"/>        
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className="icon"/>
                    <Add className="icon"/>
                    <ThumbUpAltOutlined className="icon"/>
                    <ThumbDownOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span>2 hour 41 mins</span>
                    <span className="limit">ALL</span>
                    <span>2002</span>
                </div>
                <div className="desc">An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.</div>
                <div className="genre">Adventure, Family, Fantasy</div>
            </div>
            <Link to="/React-Netflix/watch" className="playBtn">
                <button><PlayArrow/> Play</button>
            </Link>
        </div>,
        document.getElementById("modal") 
    )
}
