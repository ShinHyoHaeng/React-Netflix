import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import './listItem.scss'
import {useState} from "react"
import YoutubeEmbed from '../../YoutubeEmbed'
import { Link } from 'react-router-dom';

export default function ListItem({index}) {

    // 이미지 마우스 오버 이벤트 발생 시 이미지 크기가 커짐 -> 이미지 위치값+여백값 계산 필요
    const [isHovered, setIsHovered] = useState(false)

    // 마우스 오버 시 트레일러 영상 출력(유튜브 영상)
    // const trailer = "https://youtu.be/1bq0qff4iF8"
    return (
        <div className="listItem" 
            style={{left: isHovered && index * 225 - 50 + index * 2.5}}
            onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}
        >
            <img src="https://material.asset.catchplay.com/WAR-TW-002-A0073/artworks/posters/WAR-TW-002-A0073-P704.jpg" alt="harry potter and the chamber of secrets" />
            {isHovered && (
                <Link to="/React-Netflix/watch">
                    {/* 삽입한 동영상 자동재생+반복 설정 */}
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
                </Link>
            )}
        </div>
    )
}
