import React, { useState, useEffect } from 'react';
//import ReactPlayer from "react-player";
//import classes from './app.module.css';
import YoutubePlayer from './components/YoutubePlayer';
import StreamPlayer from './components/StreamPlayer';
//import Test from './components/test';
//import YouTube from 'react-youtube';
const api = "http://192.168.0.128:3002"
//const api = "http://dejavu:3002"
const start = "20";
//const mock = {'song_url': 'Bee-Gees--Staying-Alive.mp4'}
//const api = "http://handler:3002"


function App() {

  const [song, setSong] = useState([])
  // const [videoId, setVideoId] = useState(null)

      const getSong = async () => {
       
       await fetch(`${api}/get_song`)
        .then(res => res.json())
        .then(res => {
          console.log(res[0])
          setSong(res[0])
        })
        .catch((error) => {
          console.log(error)
        });

      }


  useEffect(() => {
     getSong()

    try {
      setInterval(async () => {
        getSong()
      }, 6000);
    } catch (e) {
      console.log(e);
    }
  }, []); // Dependency-array


  return (
    <div>
      {song && song.source === 'youtube' ? <YoutubePlayer song={song} start={start} /> : <StreamPlayer song={song}/>}
      {/* {song && <YoutubePlayer song={song} start={start} />} */}
      {/* {mock && <StreamPlayer song={mock}/> } */}
    </div>
  );
}

export default App;