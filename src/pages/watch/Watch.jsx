import React, {useEffect, useState} from 'react';
import {API_URL, API_KEY } from '../../database/Movie'
import { ArrowBackOutlined } from '@material-ui/icons'
import './watch.scss'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import { Link } from 'react-router-dom';

export default function Watch(props) {
    let movieId = props.match.params.movieId;
    const [video, setVideo] = useState([]);
    const [embedId, setEmbedId] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        const endpoint = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}`;
        fetch(endpoint)
        .then((response) => (response.json()))
        .then((response) => {
            setVideo(response.results)
            setEmbedId(response.results[0].key)
            setName(response.results[0].name)
        });
    }, []);
    return (
        <div className="watch">
            <div className="back">
                <Link to="/React-Netflix-Test/home">
                    <ArrowBackOutlined/> 
                    Home
                </Link>
            </div>
            {video && (
                <YoutubeEmbed embedId={embedId} name={name}></YoutubeEmbed>
            )}
        </div>
    )
}
