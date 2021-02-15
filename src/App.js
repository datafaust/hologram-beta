import React, { useState } from 'react';
import ReactPlayer from "react-player";
import classes from './app.module.css';

const api = "http://192.168.0.20:5000"
//const api = "http://dejavu_python_1:5000"


function App() {


  const [link, setLink] = useState(['https://www.youtube.com/watch?v=-5CdAup0o-I']);
  const [color, setColor] = useState('white')

  //FINAL SUBMIT
  const getSong = async () => {
    setLink(`https://www.youtube.com/watch?v=_p9YwR2PGtY`)

    let response = await fetch(`${api}/recognize`)
      .then(res => res.json())
      .then(res => {
        console.log(res["videos"][0])
        return res["videos"][0]["url_suffix"]
      })
      .catch((error) => {
        console.log(error)
      });
    //console.log(response)
    
    setLink(`https://www.youtube.com${response}`)
  }

  //const [videoFilePath, setVideoFileURL] = useState("./assets/beyondTheSea.mp4");

  // const vidRef = useRef(null);
  // const handlePlayVideo = () => {
  //   vidRef.current.play();
  // }

  return (
    <div className={classes.container}>

      <button  className={classes.reload} onClick={() => getSong()}>READ SONG</button>

      {/**TOP & BOTTOM VIDEO */}
      <div className={classes.vertical}>
        <div className={classes.top}>
          <ReactPlayer
            playing={true}
            muted={true}
            url={link}
            width="50%"
            height="50%"
            controls={true}
          />
        </div>
        <div className={classes.bottom}>
          <ReactPlayer
            playing={true}
            muted={true}
            url={link}
            width="50%"
            height="50%"
            controls={true}
          />
        </div>
      </div>


      {/**LEFT AND RIGHT VIDEO */}
      <div className={classes.horizontal}>
        <div className={classes.left}>
          <ReactPlayer
            playing={true}
            muted={true}
            url={link}
            width="80%"
            height="50%"
            controls={true}
          />
        </div>
        <div className={classes.right}>
          <ReactPlayer
            playing={true}
            muted={true}
            url={link}
            width="80%"
            height="50%"
            controls={true}
          />
        </div>
      </div>


    </div>
  );
}

export default App;



