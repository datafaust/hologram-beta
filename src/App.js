import React, { useState, useEffect } from 'react';
//import ReactPlayer from "react-player";
import classes from './app.module.css';
//import YouTube from 'react-youtube';

const api = "http://192.168.0.128:3002"
//const api = "http://handler:3002/get_song/"
//const api = "http://192.168.0.128:3004/get_song"

function App() {


  //const [link, setLink] = useState([]);
  const [id, setId] = useState([]);
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
        console.log(api)
        console.log(apiData[0])
        setId(apiData[0].song_id);
      });
  }

  const getSource = async () => {
    fetch(`${api}/get_source`)
      .then((resp) => resp.json())
      .then((apiData) => {
        console.log(api)
        console.log(apiData[0])
        setId(apiData[0].source);
      });
  }


  useEffect(() => {
    try {
      setInterval(async () => {
        //getSong()
        //getId();
        route = getSource();
        if(route == 'youtube') {
          getId();
        } else {
          print('render local')
        }
      }, 5000);
    } catch (e) {
      console.log(e);
    }
  }, []); // Dependency-array


  return (
    <div className={classes.container}>


      <div>{id ? <div className={classes.linktext}>{ id }</div> : <div></div>}</div>

      {/**TOP & BOTTOM VIDEO */}

      <div>
        <iframe
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=1&enablejsapi=1"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </iframe>
      </div>

      <div>
        <iframe
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=1&enablejsapi=1"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </iframe>
      </div>

      <div>
        <iframe
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=1&enablejsapi=1"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </iframe>
      </div>
      <div>
        <iframe
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=1&enablejsapi=1"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
        </iframe>
      </div>



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
