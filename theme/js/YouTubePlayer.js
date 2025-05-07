/**
 * YouTubePlayer.js
 * Handles YouTube video player functionality
 */

(function() {
  window.YouTubePlayer = {
    /**
     * Load a YouTube video
     * @param {string} videoId - YouTube video ID
     * @param {string} title - Video title
     * @returns {Promise} - Promise that resolves when video is loaded
     */
    loadVideo: function(videoId, title) {
      return new Promise(function(resolve) {
        const playerContainer = document.getElementById('youtube-player');
        if (!playerContainer) {
          resolve({ error: 'Player container not found' });
          return;
        }
        
        // Update title if available
        const titleElement = document.querySelector('.video-title-display');
        if (titleElement && title) {
          titleElement.textContent = title;
        }
        
        // Create iframe
        playerContainer.innerHTML = `
          <iframe 
            src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            class="youtube-iframe">
          </iframe>
        `;
        
        resolve({ success: true });
      });
    },
    setupThumbnailHandlers: function() {
      console.log("Setting up YouTube thumbnail handlers");
      window.handleThumbnailClick = function(index) {
        YouTubePlayer.handleThumbnailClick(index);
      };
    },
    handleThumbnailClick: function(index) {
      var o = new CustomEvent("thumbnail-click", {
        detail: { index: index },
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(o);
    }
  };
})();