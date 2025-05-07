/**
 * YouTubeGrid.ts
 * TypeScript implementation for YouTube grid display and management
 */
/**
 * Represent a YouTube video item
 */
interface VideoItem {
    id: string;
    title: string;
    thumbnail_url?: string;
    description?: string;
    published?: string;
    channel?: {
        id?: string;
        title?: string;
    };
}
/**
 * Configuration options for the YouTube grid
 */
interface GridOptions {
    containerSelector: string;
    defaultThumbnail: string;
    maxVideos?: number;
    columns?: number;
    onThumbnailClick?: (index: number, videoId: string) => void;
}
/**
 * The YouTube Grid class
 * Manages the display and interaction of YouTube video thumbnails
 */
declare class YouTubeGrid {
    private options;
    private videos;
    private container;
    /**
     * Constructor
     * @param options - Configuration options
     */
    constructor(options: GridOptions);
    /**
     * Initialize the grid component
     */
    private initialize;
    /**
     * Apply CSS Grid styles to the container
     */
    private applyGridStyling;
    /**
     * Update the grid with new video data
     * @param videos - Array of video items to display
     */
    updateGrid(videos: VideoItem[]): void;
    /**
     * Create HTML for a thumbnail
     * @param video - The video item
     * @param index - The index in the videos array
     * @returns HTML string for the thumbnail
     */
    private createThumbnailHTML;
    /**
     * Create the empty state HTML
     * @returns HTML string for empty state
     */
    private createEmptyStateHTML;
    /**
     * Render the grid with current videos
     */
    private render;
    /**
     * Set up click handlers for thumbnails
     */
    private setupClickHandlers;
    /**
     * Get current videos
     * @returns Array of current video items
     */
    getVideos(): VideoItem[];
    /**
     * Get video at specific index
     * @param index - The index to retrieve
     * @returns The video item or null if not found
     */
    getVideoAt(index: number): VideoItem | null;
}
