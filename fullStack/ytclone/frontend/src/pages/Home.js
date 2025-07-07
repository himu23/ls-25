import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { Link } from 'react-router-dom';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
  axios.get('videos/')
    .then(res => {
      console.log("Fetched videos:", res.data);
      setVideos(res.data);
    })
    .catch(err => {
      console.error("Error fetching videos:", err);
    });
}, []);

  return (
  <div className="container mt-4">
  <h2 className="mb-4">All Videos</h2>
  <div className="row">
    {videos.map(video => (
      <div key={video.id} className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm">
          <video className="card-img-top" controls style={{ height: '200px', objectFit: 'cover' }}>
            <source src={video.video_file} type="video/mp4" />
          </video>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{video.title}</h5>
            <p className="card-text text-truncate">{video.description}</p>
            <Link to={`/video/${video.id}`} className="btn btn-primary mt-auto">Watch</Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

);

};

export default Home;
console.log("Home component rendered");
