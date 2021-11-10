import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import React from 'react';

function FeaturedImg(props) {
  return (
    <>
      <img src={props.image} alt="" />
            
      <div className="info">
          <h1>{props.title}</h1>
          <span className="desc">{props.desc}</span>
          <div className="buttons">
              <button className="play">
                  <PlayArrow/>
                  <span>Play</span>
              </button>
              <Link to={`/movies/${props.movieId}`}>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
              </Link>
          </div>
      </div>
    </>
  )
}

export default FeaturedImg;