import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React,{useState} from 'react';
import Modal from '../modal/Modal'

function FeaturedImg(props) {
  
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
  
  return (
    <>
      <img src={props.image} alt={props.title} />
            
      <div className="info">
          <h1>{props.title}</h1>
          <span className="desc">{props.desc}</span>
          <div className="buttons">
              <button className="play">
                  <PlayArrow/>
                  <span>Play</span>
              </button>
              <button className="more" onClick={modalClose}>
                  <InfoOutlined/>
                  <span>Info</span>
              </button>
          </div>
      </div>
      {modalOpen && 
        <Modal movieId={props.movieId}/>
      }
    </>
  )
}

export default FeaturedImg;