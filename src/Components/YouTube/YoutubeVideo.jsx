// API_KEY = AIzaSyAi32wpU7So8oFJ_R9UwMH3CKWX_ZIa0SQ
// channel id = UCE_M8A5yxnLfW0KghEeajjw
// search_link : https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyAi32wpU7So8oFJ_R9UwMH3CKWX_ZIa0SQ
import React, { useState, useEffect } from 'react';


function YoutubeVideo() {
    // Initialize state to store videos using useState, which allows us to store and update data in a functional component
    const [videos, setVideos] = useState([]);

    // Fetch videos on component mount using useEffect, which allows us to handle side effects (like API calls) in a functional component
    useEffect(() => {
        async function fetchVideos() {
            const API_KEY = 'AIzaSyAi32wpU7So8oFJ_R9UwMH3CKWX_ZIa0SQ';
            const CHANNEL_ID = 'UCE_M8A5yxnLfW0KghEeajjw'; 
            const MAX_RESULTS = 8;
            const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`;

            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                const videoData = data.items.map((item) => {
                    return {
                        id: item.id.videoId,
                        title: item.snippet.title,
                        thumbnail: item.snippet.thumbnails.medium.url
                    };
                });

                setVideos(videoData);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        }

        fetchVideos();
    }, []); // The empty array ensures the effect runs only once after the initial render

    return (
        <div className="youtube-video-container">
            {videos.map((video) => (
                <div key={video.id} className="youtube-video">
                    <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                        <img src={video.thumbnail} alt={video.title} className="youtube-video-thumbnail" />
                        <h3 className="youtube-video-title">{video.title}</h3>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default YoutubeVideo;
