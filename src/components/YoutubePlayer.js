import React from 'react';
import classes from './youtubeplayer.module.css';



const YoutubePlayer = ({ song, start }) => {

    let link = "https://www.youtube.com/embed/" + song.song_id + "?autoplay=1&mute=1&enablejsapi=1&start=" + start

    return (
        <div className={classes.container}>

            <div className={classes.linktext}>{`Current ${song.source} Link: ${song.song_id}`}</div>

            <div className={classes.top}>
                <iframe
                    width="150"
                    src={link}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
                </iframe>
            </div>

            <div className={classes.bottom}>
                <iframe
                    width="150"
                    src={link}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
                </iframe>
            </div>

            <div className={classes.right}>
                <iframe
                    width="150"
                    src={link}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
                </iframe>
            </div>

            <div className={classes.left}>
                <iframe
                    width="150"
                    src={link}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
                </iframe>
            </div>

        </div>
    );
};

export default YoutubePlayer;
