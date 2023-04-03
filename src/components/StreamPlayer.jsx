import React, { useRef, useEffect } from 'react'
import classes from './streamplayer.module.css';

const StreamPlayer = ({ song }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.removeAttribute('src')
      videoRef.current.load()
    }
  })

  console.log('passed song url: ' + song.song_url)


  return (
    <div className={classes.container}>
      <div className={classes.top}>
        {<iframe
          width="150"
          src={`http://dejavu:3002/videos/${song.song_url}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </iframe>}
      </div>
      <div className={classes.bottom}>
        {song && <iframe
          width="150"
          src={`http://dejavu:3002/videos/${song.song_url}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </iframe>}
      </div>
      <div className={classes.right}>
        {song && <iframe
          width="150"
          src={`http://dejavu:3002/videos/${song.song_url}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </iframe>}
      </div>
      <div className={classes.left}>
        {song && <iframe
          width="150"
          src={`http://dejavu:3002/videos/${song.song_url}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </iframe>}
      </div>
    </div>
  )
}

export default StreamPlayer
