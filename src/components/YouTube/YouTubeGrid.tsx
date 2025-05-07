import React from 'react';

interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
}

interface YouTubeGridProps {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
  defaultThumbnail?: string;
}

const YouTubeGrid: React.FC<YouTubeGridProps> = ({ 
  videos, 
  onVideoSelect,
  defaultThumbnail = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='180' viewBox='0 0 320 180'%3E%3Crect width='320' height='180' fill='%23cccccc'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' text-anchor='middle' fill='%23666666'%3ENo Thumbnail%3C/text%3E%3C/svg%3E"
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <div
          key={video.id}
          className="cursor-pointer transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg rounded-lg overflow-hidden bg-white"
          onClick={() => onVideoSelect(video)}
        >
          <div className="aspect-video relative">
            <img
              src={video.thumbnailUrl || defaultThumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-3">
            <h3 className="text-sm font-medium line-clamp-2">{video.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YouTubeGrid; 