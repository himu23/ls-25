import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('myvideos/', {
      headers: { Authorization: `Token ${token}` }
    })
      .then(res => setVideos(res.data))
      .catch(err => console.error(err));
  }, [token]);

  return (
    <div>
      <h2>My Uploaded Videos</h2>
      {videos.map(video => (
        <div key={video.id}>
          <h4>{video.title}</h4>
          <Link to={`/video/${video.id}`}>Watch</Link>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
