# Marci Metzger Website Revamp

A modern, elegant single-page website redesign for Marci Metzger - The Ridge Realty Group.

## Project Structure

```
marci-metzger-revamp/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── images/             # Image assets directory
└── README.md           # This file
```

## Features

- **Modern Design**: Clean, elegant layout with smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling, form validation, and dynamic interactions
- **All Original Content**: Includes all content from the original website
- **Performance Optimized**: Fast loading times and smooth user experience

## Adding Images

To add images from the original website:

1. Visit https://marcimetzger.com/
2. Right-click on images and select "Save Image As..."
3. Save images to the `images/` directory
4. Update image paths in `index.html`:

   - **Hero Section**: Add a background image to `.hero` class in `styles.css`
   - **About Section**: Update `.image-placeholder` to use an actual image
   - **Gallery**: Replace `.gallery-image-placeholder` divs with `<img>` tags

### Example Image Updates:

**For the About Section:**
```html
<div class="about-image">
    <img src="images/marci-metzger.jpg" alt="Marci Metzger">
</div>
```

**For the Gallery:**
```html
<div class="gallery-item">
    <img src="images/property-1.jpg" alt="Property Image">
</div>
```

## Local Development

1. Open `index.html` in a web browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

## Deployment

### Free Hosting Options:

1. **Netlify** (Recommended)
   - Drag and drop the project folder to https://app.netlify.com/drop
   - Or connect via Git

2. **Vercel**
   - Install Vercel CLI: `npm i -g vercel`
   - Run `vercel` in the project directory

3. **GitHub Pages**
   - Create a repository
   - Upload files
   - Enable GitHub Pages in repository settings

4. **Neocities**
   - Sign up at https://neocities.org/
   - Upload files via web interface

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Design Improvements

### Original vs. Revamped:

1. **Navigation**: Fixed header with smooth scroll navigation
2. **Hero Section**: Full-screen hero with gradient background and call-to-action buttons
3. **Typography**: Modern font pairing (Playfair Display + Inter)
4. **Color Scheme**: Professional green palette with gold accents
5. **Layout**: Improved spacing and visual hierarchy
6. **Interactivity**: Smooth animations and hover effects
7. **Forms**: Enhanced form styling and validation
8. **Mobile**: Fully responsive mobile navigation menu

## Customization

### Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1a472a;
    --secondary-color: #2d5a3d;
    --accent-color: #c9a961;
}
```

### Fonts

Fonts are loaded from Google Fonts. To change:
1. Visit https://fonts.google.com/
2. Select new fonts
3. Update the `<link>` tag in `index.html`
4. Update font-family in `styles.css`

## Contact Information

- **Phone**: (206) 919-6886
- **Address**: 3190 HW-160, Suite F, Pahrump, Nevada 89048
- **Website**: https://marcimetzger.com/

## License

This project is created for the Web Builder assignment.
