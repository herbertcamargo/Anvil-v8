/**
 * YouTubeGrid.js
 * Handles YouTube video grid functionality
 */

(function() {
  window.YouTubeGrid = {
    /**
     * Render video thumbnails in the grid
     * @param {Array} videos - Array of video objects
     * @param {string} defaultThumbnail - Default thumbnail URL
     */
    renderVideos: function(videos, defaultThumbnail) {
      const gridContainer = document.getElementById('youtube-grid');
      if (!gridContainer) return;
      
      // Clear existing thumbnails
      gridContainer.innerHTML = '';
      
      if (!videos || videos.length === 0) {
        gridContainer.innerHTML = '<p style="padding: 20px; text-align: center; color: #666;">No videos found</p>';
        return;
      }
      
      // Add thumbnails
      videos.forEach(function(video, index) {
        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.className = 'thumbnail-container';
        thumbnailContainer.setAttribute('data-index', index);
        thumbnailContainer.onclick = function() {
          window.handleThumbnailClick(index);
        };
        
        const img = document.createElement('img');
        img.className = 'thumbnail-image';
        img.src = video.thumbnailUrl || defaultThumbnail;
        img.alt = video.title || 'Video thumbnail';
        
        // Apply placeholder if image fails to load
        if (window.PlaceholderHandler) {
          window.PlaceholderHandler.applyPlaceholder(img, defaultThumbnail);
        }
        
        const title = document.createElement('h3');
        title.className = 'video-title';
        title.textContent = video.title || 'Untitled video';
        
        thumbnailContainer.appendChild(img);
        thumbnailContainer.appendChild(title);
        gridContainer.appendChild(thumbnailContainer);
      });
    }
  };
})();