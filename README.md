# Anvil YouTube Viewer

A simple YouTube viewer application built with Anvil.

## Features

- Displays a grid of YouTube videos
- Allows playing videos directly in the application
- Responsive design for desktop and mobile
- Clean, modern UI

## Usage

This application requires Anvil to run. To use:

1. Open the application in Anvil
2. Create a form with two containers: one for the grid and one for the player
3. Initialize the YouTubeIntegration class with these containers
4. Load videos by calling the update_videos method with an array of video objects

## Video Object Format

Each video object should have this format:

```python
{
    "id": "YouTube-Video-ID",
    "title": "Video Title",
    "thumbnailUrl": "URL-to-thumbnail-image"
}
```

## Example

```python
from client_code.YouTubeModule import YouTubeIntegration

# In your form class
def __init__(self, **properties):
    self.init_components(**properties)
    
    # Create the integration with your containers
    self.youtube = YouTubeIntegration(
        form=self,
        grid_container=self.video_grid_panel,
        player_container=self.video_player_panel
    )
    
    # Load some videos
    videos = [
        {
            "id": "dQw4w9WgXcQ",
            "title": "Never Gonna Give You Up",
            "thumbnailUrl": "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
        },
        # More videos...
    ]
    
    self.youtube.update_videos(videos)
```
