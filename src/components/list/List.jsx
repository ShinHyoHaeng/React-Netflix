import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import './list.scss'
import React,{useEffect, useState} from 'react';
import {API_URL, API_KEY, IMAGE_BASE_URL } from '../../database/Movie'
import ListItem from '../listItem/ListItem'
import { withRouter } from 'react-router';

import Slider from "react-slick"
import "./slick.css"; 
import "./slick-theme.css";
import ImgSlider from './ImgSlider';


function List(props) {
    
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
            <ImgSlider>
                {Movies.map((movie, index) => (
                    <ListItem 
                        key={movie.id}
                        idx={index}
                        image={movie.poster_path ? `${IMAGE_BASE_URL}w500/${movie.poster_path}`:null}
                        movieId={movie.id}
                        title={movie.original_title}
                    />
                ))}
            </ImgSlider>
        </div>

    )
}

export default withRouter(List)