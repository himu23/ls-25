import React from 'react';
import { Card, Button } from 'react-bootstrap';

function VideoCard({ video, isLiked, onLike, isSaved, onSave }) {
  return (
    <Card className="mb-4" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={video.thumbnail} alt={video.title} />
      <Card.Body>
        <Card.Title>{video.title}</Card.Title>
        <Card.Text>
          <strong>{video.channel}</strong><br />
          {video.views} views • {video.time}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button
            variant={isLiked ? 'danger' : 'outline-danger'}
            onClick={() => onLike(video.id)}
          >
            ❤️
          </Button>
          <Button
            variant={isSaved ? 'danger' : 'outline-success'}
            onClick={() => onSave(video)}
          >
            {isSaved ? 'Remove' : '➕ Watch Later'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default VideoCard;
