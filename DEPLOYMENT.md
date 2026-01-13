# Deployment Guide

This guide will help you deploy the Marci Metzger website to a free hosting service.

## Option 1: Netlify (Recommended - Easiest)

1. **Visit Netlify**: Go to https://app.netlify.com/
2. **Sign up/Login**: Create a free account or login
3. **Deploy**:
   - Drag and drop the entire project folder onto the Netlify dashboard
   - Or click "Add new site" → "Deploy manually"
   - Upload the project folder
4. **Your site is live!** Netlify will provide you with a URL like `your-site-name.netlify.app`

## Option 2: Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   cd marci-metzger-revamp
   vercel
   ```

3. **Follow the prompts** and your site will be deployed!

## Option 3: GitHub Pages

1. **Create a GitHub repository**:
   - Go to https://github.com/new
   - Create a new repository (e.g., `marci-metzger-website`)

2. **Upload files**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "main" branch and "/ (root)" folder
   - Click Save
   - Your site will be available at `https://YOUR-USERNAME.github.io/YOUR-REPO`

## Option 4: Neocities

1. **Sign up**: Go to https://neocities.org/ and create a free account
2. **Upload files**:
   - Click "Upload" on your dashboard
   - Select all files (index.html, styles.css, script.js, README.md)
   - Upload the `images` folder separately if it contains images
3. **Your site**: Will be available at `https://YOUR-USERNAME.neocities.org`

## Option 5: Surge.sh

1. **Install Surge**:
   ```bash
   npm install -g surge
   ```

2. **Deploy**:
   ```bash
   cd marci-metzger-revamp
   surge
   ```

3. **Follow prompts** to create your account and deploy

## Before Deploying

1. **Add Images**: Make sure to download and add images from the original website to the `images/` folder
2. **Update Image Paths**: Update image references in `index.html` if needed
3. **Test Locally**: Open `index.html` in a browser to ensure everything works
4. **Check Links**: Verify all phone numbers and links work correctly

## Post-Deployment Checklist

- [ ] Test the website on mobile devices
- [ ] Verify all forms work correctly
- [ ] Check that images load properly
- [ ] Test navigation links
- [ ] Verify contact information is correct
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)

## Custom Domain (Optional)

Most hosting services allow you to connect a custom domain:
- **Netlify**: Domain settings → Add custom domain
- **Vercel**: Project Settings → Domains
- **GitHub Pages**: Repository Settings → Pages → Custom domain

## Need Help?

If you encounter any issues:
1. Check browser console for errors (F12)
2. Verify all file paths are correct
3. Ensure all files are uploaded
4. Check hosting service documentation
