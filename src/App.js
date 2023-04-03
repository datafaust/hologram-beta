import React, { useState, useEffect } from 'react';
//import ReactPlayer from "react-player";
import classes from './app.module.css';
import YoutubePlayer from './components/YoutubePlayer';
import StreamPlayer from './components/StreamPlayer';
import Test from './components/test';
//import YouTube from 'react-youtube';
const api = "http://dejavu:3002"
//const api = "http://dejavu:3002"
const start = "20";
const mock = {'song_url': 'Bee-Gees--Staying-Alive.mp4'}
//const api = "http://handler:3002"


function App() {


  //const [link, setLink] = useState([]);
  // const [state, setState] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  // const [id, setId] = useState(false);
  // const [source, setSource] = useState([]);
  const [song, setSong] = useState(null)
  // const [videoId, setVideoId] = useState(null)
  // const [show, setShow] = useState(false)
  
  //const [color, setColor] = useState('white')

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

    //   const fetchData = async () => {
    //     try {
    //         const response = await fetch(`${api}/get_song`);
    //         const json = await response.json();
    //         console.log(json[0]);
    //         setSong(json[0]);
    //     } catch (error) {
    //         console.log("error", error);
    //     }
    // };


  useEffect(() => {
     //fetchData()
     getSong()

    try {
      setInterval(async () => {
        getSong()
        //getId();
        //getSong();
        //fetchData();
      }, 6000);
    } catch (e) {
      console.log(e);
    }
  }, []); // Dependency-array


  return (
    <div>
      {
        song && song.source === 'youtube' ? <YoutubePlayer song={song} start={start} /> : <StreamPlayer song={song}/> 
      }
      {/* {song && <YoutubePlayer song={song} start={start} />} */}
      {/* {mock && <StreamPlayer song={mock}/> } */}
    </div>
  );
}

export default App;

//song.length && <YoutubePlayer song={song} start={start}/>
//   const getSong = async () => {
//     await fetch(`${api}/get_song`)
//       .then((resp) => resp.json())
//       .then((apiData) => {
//         console.log(apiData[0])
//         //console.log(apiData[0].song_url)
//         setSong(apiData[0]);
//         setSource(apiData[0].source);
//         setId(apiData[0].song_id)
//         setVideoId({ videoId : song.song_url  })
//         return setSong[0]
//       })
//   }

//   const playVideo = (e, videoId) => {
//     e.preventDefault()
//     setVideoId({ videoId : song.song_url  })
//     console.log(videoId)
//   }



//   useEffect(() => {

//     // on launch get information from table
//     getSong()

//     // repeat call every 6 seconds from table for song information
//     try {
//       setInterval(async () => {
//       //  getSong()
//         if( source === 'streamer') {
//           console.log('make streamer link...')
        
//         }
//       }, 6000);
//     } catch (e) {
//       console.log(e);
//     }
//    }, []
//   ); // Dependency-array


//   render(
//     <div>{song &&
//       <div>
//       { 
//         source === 'youtube' ? <YoutubePlayer id={song.id} start={start} />:<StreamPlayer song = {song} />
//       }
//       </div>
//     }</div>
//   )
// }

// export default App;



// // <ReactPlayer
// //             playing={true}
// //             muted={true}
// //             url={link}
// //             width="80%"
// //             height="50%"
// //             controls={true}
// //           />


//   // if(source === 'youtube') {

//   //   return <YoutubePlayer id={song.id} start={start} />

//   // } else {
    
//   //   return song && <StreamPlayer song = {song} />

//   // }