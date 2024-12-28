import React, {useEffect, useState} from "react";
import { YOUTUBE_VIDEO_API } from "../utils/Constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ()=>{
const [Videos, setVideos] = useState([]);
useEffect(()=>{
getVideos();
}, [])

const getVideos = async ()=>{
const data = await fetch(YOUTUBE_VIDEO_API);
const json = await data.json();
// console.log(json)
console.log(json.items);
setVideos(json.items); 
}

    return (
        <div className="flex flex-wrap">
            <AdVideoCard info={Videos[11]}/>
            {Videos.map((Video) => (
                <Link key={Video.id} to={"/watch?v="+ Video.id}><VideoCard key={Video.id} info={Video}/></Link>
                ))}
        </div>
    );
};
export default VideoContainer