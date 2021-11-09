import './listItem.scss'
import {useState} from "react"
import Modal from '../../pages/modal/Modal'

export default function ListItem({index}) {    
    // mobile/tablet에서는 modal 활용
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
                <img src="https://material.asset.catchplay.com/WAR-TW-002-A0073/artworks/posters/WAR-TW-002-A0073-P704.jpg" alt="harry potter and the chamber of secrets" />
            </div>       
            <>{modalOpen && <Modal modalClose={modalClose}></Modal>}</>
        </>
    )
}
