'use client';
import React, { useState } from 'react'
import YBIcon from './YBIcon';


function YoutubeEmbed({url, poster}) {
  const [posterVisible, setPosterVisible] = useState(true);
  const [play, setPlay] = useState(false);
  const vUrl = play
    ? `${url}?autoplay=1`
    : url;
  function hidePoster() {
    setPosterVisible(false);
    setPlay(true);
    console.log('here');
  }
  const styles = {
    backgroundImage: `url(${poster})`
  }
  return (
    <div className="youtube-embed" onClick={hidePoster}>
      <div className={`poster ` + (posterVisible ? 'poster-visible' : '')} style={styles}>
        <YBIcon name='ybicon-play' className='play-icon' />
      </div>
      {posterVisible == false &&
        <iframe 
          width='100%' 
          src={vUrl} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen></iframe>
      }
    </div>
  )
}

export default YoutubeEmbed