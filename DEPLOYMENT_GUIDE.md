# Deployment Guide

This guide covers automated deployment options for your 11ty site using GitHub Actions.

## 🚀 Deployment Options

### 1. GitHub Pages (Recommended for GitHub repositories)
### 2. Netlify (Great for custom domains and features)
### 3. Vercel (Excellent for performance and global CDN)

---

## 📦 GitHub Pages Deployment

**File**: `.github/workflows/build-deploy.yml` (already configured)

### Setup Instructions:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Configure Repository**:
   - No additional secrets required
   - Uses built-in `GITHUB_TOKEN`

3. **Custom Domain** (optional):
   - Add your domain to the `CNAME` file in the root
   - Configure DNS to point to GitHub Pages

### Features:
- ✅ Free hosting
- ✅ Built-in SSL
- ✅ Easy setup
- ✅ No external dependencies
- ❌ Limited to static sites only

---

## 🌐 Netlify Deployment

**File**: `.github/workflows/netlify-deploy.yml` (alternative option)

### Setup Instructions:

1. **Get Netlify Credentials**:
   - Sign up at [netlify.com](https://netlify.com)
   - Go to User Settings → Applications → Personal access tokens
   - Create a new token

2. **Create Netlify Site**:
   - Create a new site (you can use a placeholder for now)
   - Note the Site ID from Site Settings → General → Site Information

3. **Configure GitHub Secrets**:
   - Go to your repository → Settings → Secrets and variables → Actions
   - Add these secrets:
     - `NETLIFY_AUTH_TOKEN`: Your personal access token
     - `NETLIFY_SITE_ID`: Your site ID

4. **Activate Workflow**:
   - Rename `.github/workflows/netlify-deploy.yml` to replace the main workflow
   - Or keep both and disable the one you don't want to use

### Features:
- ✅ Instant deployments
- ✅ Preview deployments for PRs
- ✅ Custom domains
- ✅ Form handling
- ✅ Edge functions
- ✅ Build optimization

---

## ⚡ Vercel Deployment

**File**: `.github/workflows/vercel-deploy.yml` (alternative option)

### Setup Instructions:

1. **Get Vercel Credentials**:
   - Sign up at [vercel.com](https://vercel.com)
   - Install Vercel CLI: `npm i -g vercel`
   - Run `vercel login` and authenticate

2. **Link Your Project**:
   - In your project directory, run: `vercel link`
   - Follow the prompts to link to your Vercel project

3. **Get Required IDs**:
   - Organization ID: Found in your Vercel account settings
   - Project ID: Found in `.vercel/project.json` after linking

4. **Create Vercel Token**:
   - Go to Vercel Dashboard → Settings → Tokens
   - Create a new token

5. **Configure GitHub Secrets**:
   - Add these secrets to your repository:
     - `VERCEL_TOKEN`: Your Vercel token
     - `VERCEL_ORG_ID`: Your organization ID
     - `VERCEL_PROJECT_ID`: Your project ID

### Features:
- ✅ Global CDN
- ✅ Instant deployments
- ✅ Preview deployments
- ✅ Custom domains
- ✅ Analytics
- ✅ Edge functions

---

## 🔧 Configuration Files

### For All Platforms
The build process uses these npm scripts:
```json
{
  "scripts": {
    "build": "eleventy",
    "serve": "eleventy --serve",
    "clean": "rm -rf _site"
  }
}
```

### Netlify Configuration (Optional)
Create `netlify.toml` in your project root:
```toml
[build]
  command = "npm run build"
  publish = "_site"

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Vercel Configuration (Optional)
Create `vercel.json` in your project root:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "_site"
      }
    }
  ]
}
```

---

## 🚦 Choosing the Right Platform

### Choose GitHub Pages if:
- Your repository is already on GitHub
- You want the simplest setup
- You don't need advanced features
- You're okay with the `.github.io` domain

### Choose Netlify if:
- You want the best developer experience
- You need form handling
- You want advanced deployment features
- You need custom redirects/headers

### Choose Vercel if:
- You prioritize performance
- You want the best global CDN
- You need advanced analytics
- You plan to add API routes later

---

## 🔍 Troubleshooting

### Common Issues:

1. **Build Fails**:
   - Check that `package.json` has correct dependencies
   - Verify Node.js version compatibility
   - Check for syntax errors in templates

2. **Deployment Permissions**:
   - Ensure repository has correct permissions
   - Check that secrets are properly configured
   - Verify token permissions

3. **Custom Domain Issues**:
   - Verify DNS settings
   - Check CNAME file is correct
   - Allow time for DNS propagation

### Debug Steps:

1. **Check Action Logs**:
   - Go to Actions tab in GitHub
   - Click on the failed workflow
   - Review detailed logs

2. **Test Locally**:
   ```bash
   npm install
   npm run build
   npm run serve
   ```

3. **Validate Build Output**:
   - Check that `_site` directory is created
   - Verify files are generated correctly
   - Test the built site locally

---

## 📈 Performance Optimization

### For All Platforms:
- Enable build caching (already configured)
- Optimize images before adding to assets
- Use responsive images
- Minimize CSS and JavaScript

### Platform-Specific:
- **GitHub Pages**: Use Jekyll-compatible plugins
- **Netlify**: Enable build optimization and asset optimization
- **Vercel**: Use their image optimization service

---

## 🔄 Workflow Management

### Using Multiple Workflows:
1. Keep only the workflow file you want to use
2. Rename unused workflows to `.yml.disabled`
3. Or use conditional logic to enable/disable based on branch

### Branch-Based Deployments:
- `main/master`: Production deployment
- `develop`: Staging deployment (configure separately)
- `feature/*`: Preview deployments (platform-dependent)

---

## 📚 Additional Resources

- [11ty Documentation](https://11ty.dev/docs/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)

---

*Choose the deployment option that best fits your needs and follow the setup instructions above.*