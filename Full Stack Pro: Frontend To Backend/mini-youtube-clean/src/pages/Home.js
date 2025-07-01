import React, { useState, useEffect } from 'react';
import { videos } from '../data/dummyVideos';
import VideoCard from '../components/VideoCard';

function Home({ watchLater, setWatchLater }) {
  const [likedVideos, setLikedVideos] = useState(() => {
    const saved = sessionStorage.getItem('likedVideos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    sessionStorage.setItem('likedVideos', JSON.stringify(likedVideos));
  }, [likedVideos]);

  const handleLike = (id) => {
    setLikedVideos((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  const handleSave = (video) => {
    const alreadySaved = watchLater.find((v) => v.id === video.id);
    if (!alreadySaved) setWatchLater([...watchLater, video]);
  };

  return (
    <div className="d-flex flex-wrap gap-3">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          isLiked={likedVideos.includes(video.id)}
          onLike={handleLike}
          isSaved={watchLater.some((v) => v.id === video.id)}
          onSave={handleSave}
        />
      ))}
    </div>
  );
}

export default Home;
