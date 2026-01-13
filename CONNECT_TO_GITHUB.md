# Connect Your Netlify Site to GitHub (After Manual Deploy)

You've already deployed manually, but you can still connect to GitHub for easier updates!

## Step-by-Step Guide

### 1. Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `marci-metzger-website` (or any name you like)
3. Choose **Public** or **Private**
4. **Don't** initialize with README (you already have files)
5. Click **"Create repository"**

### 2. Upload Your Code to GitHub

Open your terminal/command prompt in your project folder and run:

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Marci Metzger website"

# Rename branch to main
git branch -M main

# Add GitHub repository (replace YOUR-USERNAME and YOUR-REPO with your actual values)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to GitHub
git push -u origin main
```

**Note**: Replace `YOUR-USERNAME` with your GitHub username and `YOUR-REPO` with the repository name you created.

### 3. Connect Netlify to GitHub

1. **Go to your Netlify dashboard**: https://app.netlify.com/
2. **Click on your site** (magenta-stroopwafel-2e14c2)
3. **Go to**: Site settings → **Build & deploy**
4. **Under "Continuous Deployment"**, click **"Link to Git provider"**
5. **Choose GitHub** and authorize Netlify
6. **Select your repository**: `marci-metzger-website` (or whatever you named it)
7. **Configure build settings**:
   - Build command: (leave empty - no build needed)
   - Publish directory: `/` (root)
8. **Click "Deploy site"**

### 4. That's It!

Now whenever you make changes:

```bash
git add .
git commit -m "Updated [description]"
git push
```

Netlify will **automatically** detect the changes and deploy them!

## Benefits of Git Integration

✅ **Automatic deployments** - Push to GitHub, Netlify auto-deploys  
✅ **Version history** - See all your changes over time  
✅ **Preview deploys** - Test changes before going live  
✅ **Rollback** - Easily revert to previous versions  
✅ **Team collaboration** - Others can contribute  

## Or Keep Using Drag & Drop

If you prefer to keep it simple, you can **continue using drag & drop**:
- Just drag your folder to Netlify whenever you make changes
- No Git needed
- Works perfectly fine!

## Troubleshooting

**"Repository not found"**: Make sure you've pushed your code to GitHub first (Step 2)

**"Build failed"**: 
- Build command should be **empty**
- Publish directory should be **/** (root)

**Want to keep manual deploys?**: That's fine! You can use both methods - Git for automatic, or drag & drop for quick updates.
