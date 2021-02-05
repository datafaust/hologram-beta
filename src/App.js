//import React, { useState, useRef } from 'react';
import ReactPlayer from "react-player";
import classes from './app.module.css';

function App() {

  //const [videoFilePath, setVideoFileURL] = useState("./assets/beyondTheSea.mp4");

  // const vidRef = useRef(null);
  // const handlePlayVideo = () => {
  //   vidRef.current.play();
  // }

  return (
    <div className={classes.container}>

      

      {/**TOP & BOTTOM VIDEO */}
      <div className={classes.vertical}>
        <div className={classes.top}>
          <ReactPlayer
            playing={true}
            muted={true}
            url={"https://www.youtube.com/watch?v=-5CdAup0o-I"}
            width="50%"
            height="50%"
            controls={true}
          />
        </div>
        <div className={classes.bottom}>
          <ReactPlayer
            playing={true}
            muted={true}
            url={"https://www.youtube.com/watch?v=-5CdAup0o-I"}
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
            url={"https://www.youtube.com/watch?v=-5CdAup0o-I"}
            width="80%"
            height="50%"
            controls={true}
          />
        </div>
        <div className={classes.right}>
          <ReactPlayer
            playing={true}
            muted={true}
            url={"https://www.youtube.com/watch?v=-5CdAup0o-I"}
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



