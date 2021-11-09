import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined, ArrowBackOutlined } from '@material-ui/icons'
import YoutubeEmbed from '../../YoutubeEmbed'
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import './modal.scss'

const Modal = ({modalClose}) => {
    // modal 외부 영역 클릭 시 modal 닫힘
    // const onCloseModal = (e) => {
    //     console.log('e.target: ', e.target)
    //     console.log('e.tarcurrentTargetget: ', e.currentTarget)
    //     if(e.target === e.currentTarget){
    //         modalClose()
    //     }
    // }

    return createPortal(
        <div className="itemModal">
            <div className="back modal_button" onClick={modalClose}>
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

export default Modal