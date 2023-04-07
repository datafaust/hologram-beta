import React, { useRef, useEffect } from 'react'
import classes from './streamplayer.module.css';

const StreamPlayer = ({ song }) => {

  
  // const videoRef = useRef(null)

  // useEffect(() => {
  //   if (videoRef.current) {
  //     // videoRef.current.pause()
  //     // videoRef.current.removeAttribute('src')
  //     videoRef.current.load()
  //   }
  // })

  // console.log('passed song url: ' + song.song_url)
  const api = "http://dejavu:3002"



  return (
    <div className={classes.container}>
      <div className={classes.linktext}>{ `Current ${song.source} Link: ${song.song_url}` }</div>
      
      <div className={classes.top}>
        {
          song && <video width="150" autoPlay muted src={`${api}/videos/${song.song_url}#t=20`} />
        }
      </div>
      <div className={classes.bottom}>
        {
          song && <video width="150" autoPlay muted src={`${api}/videos/${song.song_url}#t=20`} />
        }
      </div>
      <div className={classes.right}>
        {
          song && <video width="150" autoPlay muted src={`${api}/videos/${song.song_url}#t=20`} />
        }
      </div>
      <div className={classes.left}>
        {
          song && <video width="150" autoPlay muted src={`${api}/videos/${song.song_url}#t=20`} />
        }
      </div>
     
    </div>
  )
}

export default StreamPlayer


          
// ${api}/videos/${song.song_url}
// http://dejavu:3002/videos/Bee-Gees--Staying-Alive.mp4


// <iframe
//           title="left"
//           width="150"
//           src={`${api}/videos/${song.song_url}`}
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
//         </iframe>


// song &&  <video ref={videoRef} controls autoPlay>
//            <source src={`${api}/videos/${song.song_url}`} type='video/mp4'></source>
//           </video> 