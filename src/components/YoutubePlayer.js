import React from 'react';
import classes from './youtubeplayer.module.css';



const YoutubePlayer = ({ song, start }) => {

    let link = "https://www.youtube.com/embed/" + song.song_id + "?autoplay=1&mute=1&enablejsapi=1&start=" + start

    return (
        <div className={classes.container}>

         <div className={classes.linktext}>{ `Current Stream Link: ${song.song_id}` }</div>
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



// function YoutubePlayer({ song, start }) {

//     // const { song, start } = props;

    
//     return (
    
//         <div className={classes.container}>

//         <div>{song ? <div className={classes.linktext}>{ `Current Stream Link: ${song.url}` }</div> : <div></div>}</div>
  

//                 <div className={classes.top}>
//                     <iframe
//                         width="150"
//                         src={"https://www.youtube.com/embed/" + song.url + "?autoplay=1&mute=1&enablejsapi=1&start=" + start}
//                         title="YouTube video player"
//                         frameborder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
//                     </iframe>
//                 </div>

//                 <div className={classes.bottom}>
//                     <iframe
//                         width="150"
//                         src={"https://www.youtube.com/embed/" + song.url + "?autoplay=1&mute=1&enablejsapi=1&start=" + start}
//                         title="YouTube video player"
//                         frameborder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
//                     </iframe>
//                 </div>

//                 <div className={classes.right}>
//                     <iframe
//                         width="150"
//                         src={"https://www.youtube.com/embed/" + song.url + "?autoplay=1&mute=1&enablejsapi=1&start=" + start}
//                         title="YouTube video player"
//                         frameborder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
//                     </iframe>
//                 </div>

//                 <div className={classes.left}>
//                     <iframe
//                         width="150"
//                         src={"https://www.youtube.com/embed/" + song.url + "?autoplay=1&mute=1&enablejsapi=1&start=" + start}
//                         title="YouTube video player"
//                         frameborder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
//                     </iframe>
//                 </div>


//                 {/* <div>
//   <iframe
//     src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=1&enablejsapi=1&start=" + start}
//     title="YouTube video player"
//     frameborder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
//   </iframe>
// </div> */}

//                 {/* <div>
//   <iframe
//     src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=1&enablejsapi=1&start=" + start}
//     title="YouTube video player"
//     frameborder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
//   </iframe>
// </div> */}
//                 {/* <div>
//   <iframe
//     src={"https://www.youtube.com/embed/" + id + "?autoplay=1&mute=1&enablejsapi=1&start=" + start}
//     title="YouTube video player"
//     frameborder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
//   </iframe>
// </div> */}



//                 {/**LEFT AND RIGHT VIDEO */}


//             </div>

 
//     );
// }

// export default UtubePlayer;

