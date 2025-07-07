import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { Link } from 'react-router-dom';

const WatchLater = () => {
  const [videos, setVideos] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('watchlater/', {
      headers: { Authorization: `Token ${token}` }
    })
      .then(res => setVideos(res.data))
      .catch(err => console.error(err));
  }, [token]);

  return (
    <div>
      <h2>Watch Later</h2>
      {videos.map(video => (
        <div key={video.id}>
          <h4>{video.title}</h4>
          <Link to={`/video/${video.id}`}>Watch</Link>
        </div>
      ))}
    </div>
  );
};

export default WatchLater;
