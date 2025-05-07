import React from 'react';

interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
}

interface YouTubePlayerProps {
  video: Video | null;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ video }) => {
  if (!video) {
    return (
      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Select a video to play</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{video.title}</h3>
      <div className="aspect-video relative rounded-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YouTubePlayer; 