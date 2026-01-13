# Image Guide

## Where to Place Your WebP Images

Place all your WebP image files in the **`images/`** folder in the project root.

## Image Naming Convention

The website is set up to use the following image files:

### About Section (Marci Metzger Photo)
- **File name**: `marci-metzger.webp`
- **Location**: `images/marci-metzger.webp`
- **Recommended size**: At least 800x600px (or similar aspect ratio)

### Gallery Section (Property Images)
- **File names**: 
  - `gallery-1.webp`
  - `gallery-2.webp`
  - `gallery-3.webp`
  - `gallery-4.webp`
  - `gallery-5.webp`
  - `gallery-6.webp`
- **Location**: `images/gallery-1.webp`, `images/gallery-2.webp`, etc.
- **Recommended size**: At least 1200x900px (4:3 aspect ratio works best)

## Customizing Image Names

If you want to use different file names:

1. **For the About section**: Edit `index.html` and find:
   ```html
   <img src="images/marci-metzger.webp" alt="Marci Metzger" class="about-img">
   ```
   Change `marci-metzger.webp` to your file name.

2. **For Gallery images**: Edit `index.html` and find the gallery section. Update each image source:
   ```html
   <img src="images/gallery-1.webp" alt="Property Image" class="gallery-img">
   ```
   Change `gallery-1.webp`, `gallery-2.webp`, etc. to your file names.

## Image Requirements

- **Format**: WebP (recommended for best performance)
- **About image**: Portrait or square orientation works best
- **Gallery images**: Landscape orientation (4:3 or 16:9 aspect ratio)
- **File size**: Optimize images to keep file sizes reasonable (under 500KB each recommended)

## Fallback Behavior

If an image fails to load, the website will automatically show a styled placeholder. This ensures the website always looks good even if some images are missing.

## Tips

- Use image optimization tools to compress WebP files while maintaining quality
- Ensure images are properly named and in the `images/` folder
- Test the website after adding images to ensure they display correctly
