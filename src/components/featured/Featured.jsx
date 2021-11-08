import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}

            {/* 배경 이미지(dummy image) */}
            <img src="https://images.ctfassets.net/usf1vwtuqyxm/4ZvGyBKC4ACJjntjPa9GPC/b874be064afe0a773cb2d8a8e16bf9a6/HP-F1-philosophers-stone-harry-shows-scar-on-hogwarts-express-web-landscape.jpg?fm=jpg&q=70&w=2560" alt="" />
            
            {/* 텍스트 영역 */}
            <div className="info">
                <img src="https://www.jing.fm/clipimg/full/112-1128075_harry-potter-and-the-sorcerers-stone-logo-harry.png" alt="Harry Potter And The Sorcerer's Stone" />
                <span className="desc">An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
