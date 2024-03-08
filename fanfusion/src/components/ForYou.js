import React, { useState, useEffect } from 'react';

function ForYou() {
  // Define state to store fetched videos
  const [videos, setVideos] = useState([]);

  // Fetch data from YouTube API when component mounts
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UU9p4phe5cjnBlwtCzGgRw-g&key=AIzaSyCwNWvhH86QGzf9DWWqjFAf4SXAliIAC1M');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchVideos();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      <h1>For You</h1>
      <section>
        {videos.map(video => (
          <div key={video.snippet.resourceId.videoId} className="yt-video">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>{video.snippet.title}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ForYou;
