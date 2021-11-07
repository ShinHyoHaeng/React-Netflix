import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video">
    <iframe
      width="100%"
      height="100%"  
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1&modestbranding=1`} // 영상 음소거 자동재생, 컨트롤러 숨김 처리(controls=0) 
      frameBorder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Harry Potter and the Chamber of Secrets (2002) Official Trailer"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;