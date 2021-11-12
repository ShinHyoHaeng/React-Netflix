import React,{useEffect, useState} from 'react';
import { withRouter } from 'react-router';
import {API_URL, API_KEY, IMAGE_BASE_URL } from '../../database/Movie'
import FeaturedImg from './FeaturedImg'
import './featured.scss'

function Featured(props) {
    const [Movies, setMovies] = useState([]);
    const [MainMovieImg, setMainMovieImg] = useState(null);

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetch(endpoint)
        .then((response) => (response.json()))
        .then((response) => {
            setMovies([response.results]);
            setMainMovieImg(MainMovieImg || response.results[0]);
        });
    }, []);
    return (
        <div className="featured">
            {/* {type && (
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
            )} */}

            {MainMovieImg && (
                <FeaturedImg  
                    image={`${IMAGE_BASE_URL}w1280/${MainMovieImg.backdrop_path}`}
                    title={MainMovieImg.original_title}
                    desc={MainMovieImg.overview}
                    movieId={MainMovieImg.id}
                />
            )}
        </div>
    )
}

export default withRouter(Featured);