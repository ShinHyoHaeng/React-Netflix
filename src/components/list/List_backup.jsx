import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import './list.scss'
import React,{useRef,useEffect, useState} from 'react';
import {API_URL, API_KEY, IMAGE_BASE_URL } from '../../database/Movie'
import ListItem from '../listItem/ListItem'
import { withRouter } from 'react-router';
 
function List(props) {
    const [isMoved, setIsMoved] = useState(false);
    
    // slider 번호 
    const [slideNumber, setSlideNumber] = useState(0);

    // slider 버튼 이벤트 함수
    const listRef = useRef();

    const handleClick = (direction) => {

        setIsMoved(true)

        let distance = listRef.current.getBoundingClientRect().x - 50;

        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber-1);
            listRef.current.style.transform = `translateX(${230+distance}px)`
        }
        if(direction === "right" && slideNumber < 5){
            setSlideNumber(slideNumber+1);
            listRef.current.style.transform = `translateX(${-230+distance}px)`
        }
    }

    
    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetch(endpoint)
        .then((response) => (response.json()))
        .then((response) => {
            console.log(response.results);
            setMovies([...response.results]);
        });
    }, []);

    return (
        <div className="list">
            <span className="listTitle">{props.title}</span>
            <div className="wrapper">
                {/* slider 버튼(prev) */}
                <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")} style={{display: !isMoved && "none"}} />

                {/* slider 이미지 영역 */}
                <div className="container" ref={listRef}>
                    {Movies.map((movie, index) => (
                            <ListItem 
                                key={index}
                                image={movie.poster_path ? `${IMAGE_BASE_URL}w500/${movie.poster_path}`:null}
                                movieId={movie.id}
                                title={movie.original_title}
                            />
                        ))
                    }
                </div>

                {/* slider 버튼(next) */}
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/>
            </div>
        </div>

    )
}

export default withRouter(List)