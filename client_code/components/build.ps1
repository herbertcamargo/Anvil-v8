# Build script for Windows
Write-Host "Building components..."

# Set Node.js path
$env:Path += ";C:\Users\herbert.camargo\Downloads\node-v24.0.0-win-x64"

# Install dependencies if node_modules doesn't exist
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..."
    & "C:\Users\herbert.camargo\Downloads\node-v24.0.0-win-x64\npm.cmd" install
}

# Build the components
Write-Host "Building components..."
& "C:\Users\herbert.camargo\Downloads\node-v24.0.0-win-x64\npm.cmd" run build

# Copy the built files to the theme directory
Write-Host "Copying files to theme directory..."
$themeDir = "../../theme/js"
if (-not (Test-Path $themeDir)) {
    New-Item -ItemType Directory -Path $themeDir -Force
}

Copy-Item "dist/*.js" -Destination $themeDir -Force

Write-Host "Build complete!" 