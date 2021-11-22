import './listItem.scss'
import {useState} from "react"
import Modal from '../modal/Modal'

export default function ListItem(props) {    

    const [modalOpen, setModalOpen] = useState(false)
    const modalClose = () => {
        setModalOpen(!modalOpen)
        if(modalOpen){
            document.body.style.overflow = "unset";
        }else{
            document.body.style.overflow = "hidden";
        }
    }

    // 마우스 오버 시 트레일러 영상 출력(유튜브 영상)
    return (
        <>
            <div className="listItem" onClick={modalClose}>
                <span className="ranking">{props.idx+1}</span>
                <img src={props.image} alt={props.title} />
            </div>       
            <>{modalOpen && <Modal movieId={props.movieId} modalClose={modalClose}></Modal>}</>
        </>
    )
}
