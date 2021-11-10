import React from 'react';
import { ArrowBackOutlined } from '@material-ui/icons'
import './watch.scss'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import { Link } from 'react-router-dom';

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <Link to="/React-Netflix/home">
                    <ArrowBackOutlined/> 
                    Home
                </Link>
            </div>
            <YoutubeEmbed embedId="0Dj2kq5Neus" className="video"/>
        </div>
    )
}
