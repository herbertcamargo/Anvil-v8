/**
 * PlaceholderHandler.ts
 * TypeScript implementation for handling and blocking placeholder.com images
 */
interface PlaceholderOptions {
    avatarPlaceholder: string;
    defaultWidth: number;
    defaultHeight: number;
}
/**
 * PlaceholderHandler class
 * Handles intercepting and replacing placeholder.com images
 */
declare class PlaceholderHandler {
    private options;
    private observer;
    /**
     * Constructor
     * @param options - Configuration options for the placeholder handler
     */
    constructor(options: PlaceholderOptions);
    /**
     * Initialize the placeholder handling system
     */
    initialize(): void;
    /**
     * Block network requests to placeholder.com
     */
    private interceptNetworkRequests;
    /**
     * Generate placeholder SVG data URI
     * @param width - Width of the placeholder
     * @param height - Height of the placeholder
     * @returns Data URI for the placeholder
     */
    private generatePlaceholder;
    /**
     * Replace image source with placeholder if it's from placeholder.com
     * @param img - The image element to process
     */
    private replaceImgSrc;
    /**
     * Process all existing images on the page
     */
    private processExistingImages;
    /**
     * Set up mutation observer to catch dynamically added images
     */
    private setupMutationObserver;
    /**
     * Unregister service workers that might interfere
     */
    private unregisterServiceWorkers;
    /**
     * Clean up resources when done
     */
    cleanup(): void;
}
