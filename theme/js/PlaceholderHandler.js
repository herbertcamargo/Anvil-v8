/**
 * PlaceholderHandler.js
 * Handles image placeholders in the YouTube grid
 */

(function() {
  window.PlaceholderHandler = {
    /**
     * Apply a default placeholder to images
     * @param {HTMLImageElement} img - The image element
     * @param {string} fallbackSrc - Fallback image source
     */
    applyPlaceholder: function(img, fallbackSrc) {
      if (!img) return;
      
      const originalSrc = img.src;
      
      // Handle image load error
      img.onerror = function() {
        if (img.src !== fallbackSrc) {
          img.src = fallbackSrc;
        }
      };
      
      // If image already has error, apply placeholder
      if (img.naturalWidth === 0) {
        img.src = fallbackSrc;
      }
    }
  };
})();