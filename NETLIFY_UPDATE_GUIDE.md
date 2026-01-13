# How to Update Your Netlify Site

## Quick Method: Drag & Drop (Easiest)

1. **Make your changes** to files locally (index.html, styles.css, script.js)
2. **Go to Netlify Dashboard**: https://app.netlify.com/
3. **Find your site** → Click on it
4. **In "Production deploys" section**: Drag and drop your entire `marci-metzger-revamp` folder
5. **Wait 10-30 seconds** → Your changes are live!

## Better Method: Git Integration (Recommended)

### Initial Setup (One Time):

1. **Create a GitHub repository**:
   - Go to https://github.com/new
   - Name it (e.g., `marci-metzger-website`)
   - Make it public or private
   - Click "Create repository"

2. **Connect to Git** (in your project folder):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

3. **Connect Netlify to GitHub**:
   - In Netlify dashboard → Site settings → Build & deploy
   - Click "Link to Git provider"
   - Choose GitHub and authorize
   - Select your repository
   - Netlify will auto-deploy!

### Making Updates (After Git Setup):

1. **Make your changes** locally
2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Updated [description of changes]"
   git push
   ```
3. **Netlify auto-deploys** - Changes go live automatically!

## What Gets Updated?

- ✅ HTML changes (content, structure)
- ✅ CSS changes (styling, colors, layout)
- ✅ JavaScript changes (functionality, animations)
- ✅ New images (add to images/ folder)
- ✅ Any file changes

## Tips:

- **Test locally first**: Open `index.html` in browser before deploying
- **Check Netlify logs**: If something breaks, check "Deploys" → Click deploy → View logs
- **Preview deploys**: Netlify creates preview URLs for each deploy (useful for testing)
- **Rollback**: If something breaks, go to "Deploys" → Click "..." → "Publish deploy" on an older version

## Common Updates:

### Change Colors:
Edit `styles.css` → Update CSS variables in `:root`

### Update Content:
Edit `index.html` → Change text, add sections, etc.

### Add Images:
1. Add image to `images/` folder
2. Update `index.html` with new image path
3. Redeploy

### Update Contact Info:
Edit `index.html` → Find contact section → Update phone/address
