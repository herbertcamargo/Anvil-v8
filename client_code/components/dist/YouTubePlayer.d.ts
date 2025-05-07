/**
 * YouTubePlayer.ts
 * TypeScript implementation of YouTube player functionality for Anvil
 */
interface VideoData {
    id: string;
    title: string;
    thumbnail_url?: string;
}
interface ThumbnailClickEvent extends CustomEvent {
    detail: {
        index: number;
        videoId?: string;
    };
}
interface YouTubePlayerInterface {
    loadVideo(videoId: string, title: string): Promise<{
        videoId: string;
        title: string;
    }>;
    setupThumbnailHandlers(): void;
    handleThumbnailClick(index: number): void;
}
/**
 * YouTubePlayer implementation
 * Handles video loading and thumbnail interaction
 */
declare class YouTubePlayerImpl implements YouTubePlayerInterface {
    /**
     * Load a YouTube video by ID and update the player
     * @param videoId - The YouTube video ID
     * @param title - The video title
     * @returns Promise resolving to video info
     */
    loadVideo(videoId: string, title: string): Promise<{
        videoId: string;
        title: string;
    }>;
    /**
     * Set up thumbnail click handlers
     */
    setupThumbnailHandlers(): void;
    /**
     * Handle thumbnail click events
     * @param index - The index of the clicked thumbnail
     */
    handleThumbnailClick(index: number): void;
}
