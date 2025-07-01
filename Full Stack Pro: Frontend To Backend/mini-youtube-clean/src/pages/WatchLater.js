import React from 'react';
import VideoCard from '../components/VideoCard';

function WatchLater({ watchLater, setWatchLater }) {
  const handleRemove = (id) => {
    const updated = watchLater.filter((video) => video.id !== id);
    setWatchLater(updated);
  };

  return (
    <div>
      <h3>Watch Later</h3>
      {watchLater.length === 0 ? (
        <p>No videos saved for later.</p>
      ) : (
        <div className="d-flex flex-wrap gap-3">
          {watchLater.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              isLiked={false} // not tracking like state here
              onLike={() => {}} // dummy
              isSaved={true}
              onSave={() => handleRemove(video.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default WatchLater;
