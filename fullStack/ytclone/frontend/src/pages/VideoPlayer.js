import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axiosConfig';

const VideoPlayer = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get(`videos/${id}/`)
      .then(res => setVideo(res.data))
      .catch(err => console.error(err));

    // fetch comments
    axios.get(`videos/${id}/comments/`)
      .then(res => setComments(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const likeVideo = () => {
    axios.post('like/', { video: id }, {
      headers: { Authorization: `Token ${token}` }
    }).then(() => alert('Liked!'))
      .catch(err => alert('Login required'));
  };

  const addToWatchLater = () => {
    axios.post('watchlater/add/', { video: id }, {
      headers: { Authorization: `Token ${token}` }
    }).then(() => alert('Added to watch later'))
      .catch(err => alert('Login required'));
  };

  const postComment = (e) => {
    e.preventDefault();
    axios.post('comment/', { video: id, text: comment }, {
      headers: { Authorization: `Token ${token}` }
    }).then(res => {
      setComments([...comments, res.data]);
      setComment('');
    }).catch(err => alert('Login required'));
  };

  if (!video) return <p>Loading...</p>;

  return (
    <div>
      <h2>{video.title}</h2>
      <video width="640" height="360" controls>
        <source src={video.video_file} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{video.description}</p>
      <p>Category: {video.category}</p>

      <button onClick={likeVideo}>Like 👍</button>
      <button onClick={addToWatchLater}>Watch Later 🕒</button>

      <h4>Comments</h4>
      <form onSubmit={postComment}>
        <input
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Add a comment"
          required
        />
        <button type="submit">Post</button>
      </form>

      {comments.map(c => (
        <div key={c.id}>
          <strong>{c.user.username}</strong>: {c.text}
        </div>
      ))}
    </div>
  );
};

export default VideoPlayer;
