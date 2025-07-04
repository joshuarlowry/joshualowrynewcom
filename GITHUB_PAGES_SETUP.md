# GitHub Pages Setup Guide

## 🚀 Quick Setup (2 minutes)

### Step 1: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**

### Step 2: Deploy
1. Push this code to your main branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at: `https://yourusername.github.io/repository-name`

## ✅ That's it! 

Your site now automatically:
- ✅ **Builds** on every push to main
- ✅ **Deploys** to GitHub Pages
- ✅ **Validates** builds on pull requests
- ✅ **Serves** with HTTPS enabled

## 🔧 Local Development

```bash
# Start development server
npm run serve

# Build for production (testing)
npm run build
```

## 🌐 Custom Domain (Optional)

If you want to use a custom domain:

1. **Add CNAME file**: The `CNAME` file in your repository root should contain your domain
2. **Configure DNS**: Point your domain to GitHub Pages:
   - For apex domain (example.com): A records to GitHub Pages IPs
   - For subdomain (www.example.com): CNAME to yourusername.github.io
3. **Enable in Settings**: Go to Settings → Pages → Custom domain

## 📝 Content Updates

To update your site content:

1. **Edit content**: Modify `src/_data/content.js` 
2. **Site settings**: Update `src/_data/site.js`
3. **Push changes**: Commit and push to main branch
4. **Auto-deploy**: Site updates automatically!

## 🔍 Troubleshooting

### Build Failed?
- Check the **Actions** tab for error details
- Verify `package.json` has correct dependencies
- Test locally with `npm run build`
- Ensure you're pushing to `main` or `master` branch

### Site Not Updating?
- Check that GitHub Pages is enabled
- Verify you're pushing to the correct branch (main/master)
- Wait a few minutes for deployment to complete

### Custom Domain Issues?
- Verify DNS settings
- Check CNAME file contents
- Allow 24-48 hours for DNS propagation

## 🎯 What Happens Next

Every time you:
- **Push to main** → Automatic deployment
- **Create Pull Request** → Build validation (no deployment)
- **Merge PR** → New deployment with changes

## 📊 Monitoring

- **Build Status**: Check the Actions tab
- **Site Status**: Visit your GitHub Pages URL
- **Build History**: All deployments are tracked in Actions

---

**🎉 Your site is now live and automatically deployed!**