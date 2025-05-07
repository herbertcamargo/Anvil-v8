import React, { useState, useEffect } from 'react';
import YouTubeGrid from './YouTubeGrid';
import YouTubePlayer from './YouTubePlayer';

interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
}

interface YouTubeIntegrationProps {
  defaultThumbnail?: string;
}

const YouTubeIntegration: React.FC<YouTubeIntegrationProps> = ({ defaultThumbnail }) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
  };

  const updateVideos = (newVideos: Video[]) => {
    setVideos(newVideos);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-4">Video Player</h2>
        <YouTubePlayer video={selectedVideo} />
      </div>
      
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-4">YouTube Video Results</h2>
        <YouTubeGrid 
          videos={videos}
          onVideoSelect={handleVideoSelect}
          defaultThumbnail={defaultThumbnail}
        />
      </div>
    </div>
  );
};

export default YouTubeIntegration; 