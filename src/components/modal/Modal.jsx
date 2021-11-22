import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined, Close, Star } from '@material-ui/icons'
import {API_URL, API_KEY, IMAGE_BASE_URL } from '../../database/Movie'
import { Link } from 'react-router-dom';
import './modal.scss'

const Modal = ({modalClose, movieId}) => {

    // modal 외부 영역 클릭 시 modal 닫힘
    const onCloseModal = (e) => {
        console.log('e.target: ', e.target)
        console.log('e.targetcurrentTarget: ', e.currentTarget)
        if(e.target === e.currentTarget){
            modalClose()
        }
    }

    const [Movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
        let endpointGenres = `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;

        fetch(endpointInfo)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            setMovie(response);
        });

        fetch(endpointGenres)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            setGenres(response);
        });
    },[])

    return createPortal(
        <div className="modal_container" onClick={onCloseModal}>
            <div className="itemModal">
                <div className="back">
                    <Close onClick={modalClose} className="modal_button" />
                </div>
                <div className="itemImg">
                    {Movie.backdrop_path &&
                        <img src={`${IMAGE_BASE_URL}w1280/${Movie.backdrop_path}`} alt={Movie.title}/>
                    }
                    <div className="itemText">
                        <h1>{Movie.original_title}</h1>
                    </div>
                </div>
                <div className="itemInfo">
                    <div className="icons">
                        <Link to={`/React-Netflix/watch/${movieId}`} className="playBtn" onClick={modalClose}>
                            <button><PlayArrow/></button>
                        </Link>  
                        <Add className="icon"/>
                        <ThumbUpAltOutlined className="icon"/>
                        <ThumbDownOutlined className="icon"/>
                    </div>
                    <div className="itemInfoTop">
                        <span>{Movie.runtime}min.</span>
                        <span className="limit"><Star className="icon"/> {Movie.vote_average}</span>
                        <span>{Movie.release_date}</span>
                    </div>
                    <p className="desc">{Movie.overview}</p>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    )
    
}

export default Modal