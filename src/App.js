import React, { useState, useEffect } from 'react';
//import ReactPlayer from "react-player";
import classes from './app.module.css';
//import YouTube from 'react-youtube';

const api = "http://dejavu:3002"
const start = "20";
//const api = "http://handler:3002/get_song/"
//const api = "http://192.168.0.128:3002/get_song"

function App() {


  //const [link, setLink] = useState([]);
  const [id, setId] = useState([]);
  const [source, setSource] = useState([]);
  
  //const [color, setColor] = useState('white')


  // const getSong = async () => {
  //   // API to fetch some dummy data
  //   fetch(api)
  //     .then((resp) => resp.json())
  //     .then((apiData) => {
  //       console.log(apiData[0].link)
  //       setLink(apiData[0].link);
  //     });
  // }

  const getId = async () => {
    fetch(`${api}/get_song`)
      .then((resp) => resp.json())
      .then((apiData) => {
        console.log(apiData[0])
        setId(apiData[0].song_id);
      });
  }

  const getSource = async () => {
    let response = await fetch(`${api}/get_source`)
      .then((resp) => resp.json())
      .then((apiData) => {
        //console.log(apiData[0].source)
        setSource(apiData[0].source);
        return apiData[0].source
      });

    if( response === 'youtube') {
      getId()
    }
  }


  useEffect(() => {
    try {
      setInterval(async () => {
        //getSong()
        //getId();
        getSource();
      }, 6000);
    } catch (e) {
      console.log(e);
    }
  }, []); // Dependency-array


  return (
    <div className={classes.container}>


      <div>{id ? <div className={classes.linktext}>{ `Current Stream Link: ${id}` }</div> : <div></div>}</div>

      {/**TOP & BOTTOM VIDEO */}

      <div className={classes.top}>
        <iframe
          width = "150"
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=1&enablejsapi=1&start=" + start}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </iframe>
      </div>

      <div className={classes.bottom}>
        <iframe
          width = "150"
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=1&enablejsapi=1&start=" + start}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </iframe>
      </div>

      <div className={classes.right}>
        <iframe
          width = "150"
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=1&enablejsapi=1&start=" + start}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </iframe>
      </div>

      <div className={classes.left}>
        <iframe
          width = "150"
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=1&enablejsapi=1&start=" + start}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </iframe>
      </div>


      {/* <div>
        <iframe
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=1&enablejsapi=1&start=" + start}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </iframe>
      </div> */}

      {/* <div>
        <iframe
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=1&enablejsapi=1&start=" + start}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </iframe>
      </div> */}
      {/* <div>
        <iframe
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=1&enablejsapi=1&start=" + start}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </iframe>
      </div> */}



      {/**LEFT AND RIGHT VIDEO */}



    </div>
  );
}

export default App;



// <ReactPlayer
//             playing={true}
//             muted={true}
//             url={link}
//             width="80%"
//             height="50%"
//             controls={true}
//           />
