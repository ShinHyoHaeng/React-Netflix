import React from 'react';
import { ArrowBackOutlined } from '@material-ui/icons'
import './watch.scss'
import YoutubeEmbed from '../../YoutubeEmbed'
import { Link } from 'react-router-dom';

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <Link to="/React-Netflix/list">
                    <ArrowBackOutlined/> 
                    Home
                </Link>
            </div>
            <YoutubeEmbed embedId="1bq0qff4iF8" className="video"/>
        </div>
    )
}
