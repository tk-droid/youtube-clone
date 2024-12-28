 import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info)

    if (!info) {
      return null;
  } 
    const {snippet, statistics} = info
    const {channelTitle, thumbnails, title} = snippet

    return (
     <div className='p-2 m-2 w-72 shadow-lg'>
    <img className="rounded-lg" alt='thumbnail' src={thumbnails.medium.url}/>
    <ul>
  <li className='font-bold py-2'>{title}</li>
  <li>{channelTitle}</li>
  <li className='flex items-center'>
  <span>{(statistics.viewCount / 1000000).toFixed(2)}M Views</span>
  <span className="ml-12">{new Date(snippet.publishedAt).toLocaleDateString('en-GB')}</span>
  </li>
  
</ul>
     </div>
   )
 }
 
 export default VideoCard
 