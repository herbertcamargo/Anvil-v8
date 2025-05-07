/**
 * index.js
 * Main entry point for YouTube integration
 */

(function() {
  // Initialize the YouTube components when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing YouTube components');
    
    // Setup thumbnail click handlers
    if (window.YouTubePlayer && window.YouTubePlayer.setupThumbnailHandlers) {
      window.YouTubePlayer.setupThumbnailHandlers();
    }
  });
})();