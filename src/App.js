import React, { useState, useEffect } from 'react';
import ReactPlayer from "react-player";
import classes from './app.module.css';
//import YouTube from 'react-youtube';

//const api = "http://192.168.0.128:3002/get_song/"
//const api = "handler:3002/get_song/"
const api = "http://localhost:3004/get_song"

function App() {


  const [link, setLink] = useState([]);
  //const [color, setColor] = useState('white')


  const getSong = async () => {
    // API to fetch some dummy data
    fetch(api)
      .then((resp) => resp.json())
      .then((apiData) => {
        //console.log(apiData[0].link)
        setLink(apiData[0].link);
      });
  }


  useEffect(() => {
    try {
      setInterval(async () => {
        getSong()
      }, 5000);
    } catch(e) {
      console.log(e);
    }
  }, []); // Dependency-array


  return (
    <div className={classes.container}>
      <div>{link ? <div className={classes.linktext}>{link}</div> : <div></div>}</div>
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



