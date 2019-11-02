import React from 'react';
import videojs from 'video.js'

const videoPlayer = (props) => {

    let video = <div>
        <video id="video-player"/>
    </div>

    var player = videojs("video-player");

    player.src({
        src: props.video.hls
    })

    console.log(player);

    return (
        {video}
    )
};

export default videoPlayer;