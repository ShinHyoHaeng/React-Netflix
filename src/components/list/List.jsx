import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import './list.scss'
import React,{useEffect, useState} from 'react';
import {API_URL, API_KEY, IMAGE_BASE_URL } from '../../database/Movie'
import ListItem from '../listItem/ListItem'
import { withRouter } from 'react-router';

import Slider from "react-slick"
import "./slick.css"; 
import "./slick-theme.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
        <ArrowForwardIosOutlined className="SlickArrow"/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
        <ArrowBackIosOutlined className="SlickArrow"/>
    </div>
  );
}

function List(props) {
    const settings = {
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        swipe: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
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
            <Slider {...settings}>
                {Movies.map((movie, index) => (
                    <ListItem 
                        key={movie.id}
                        idx={index}
                        image={movie.poster_path ? `${IMAGE_BASE_URL}w500/${movie.poster_path}`:null}
                        movieId={movie.id}
                        title={movie.original_title}
                    />
                ))}
            </Slider>
        </div>

    )
}

export default withRouter(List)