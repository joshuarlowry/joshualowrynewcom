# Joshua Lowry Portfolio - 11ty Static Site

A modern, accessible static site built with [Eleventy (11ty)](https://11ty.dev/) following best practices for accessibility and modular content structure.

## 🌟 Features

- **Accessibility First**: WCAG 2.1 AA compliant with proper semantic HTML, ARIA labels, and keyboard navigation
- **Modular Architecture**: Structured content with reusable components and layouts
- **Performance Optimized**: Fast loading with optimized fonts and minimal CSS
- **SEO Ready**: Meta tags, Open Graph, structured data, and sitemap
- **Responsive Design**: Mobile-first approach with fluid typography
- **Modern CSS**: CSS custom properties, flexbox, and grid
- **Print Friendly**: Dedicated print styles for better document output

## 🏗️ Project Structure

```
src/
├── _data/
│   ├── site.js              # Global site configuration
│   └── content.js           # Modular content data
├── _includes/
│   ├── footer.njk           # Footer component
│   ├── logo.njk             # Logo component
│   ├── hero-section.njk     # Hero section component
│   ├── content-section.njk  # Generic content section component
│   └── page-sections.njk    # Section orchestration component
├── _layouts/
│   └── base.njk             # Base HTML layout
├── css/
│   └── main.css             # Main stylesheet
├── assets/                  # Static assets (images, etc.)
├── index.njk                # Home page assembly
├── robots.txt               # Search engine directives
└── sitemap.xml              # XML sitemap
```

## 🚀 Getting Started

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Serve locally with hot reload**:
   ```bash
   npm run serve
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Debug build process**:
   ```bash
   npm run debug
   ```

### Automated Deployment

The site includes GitHub Actions for automated GitHub Pages deployment:

- **Push to main branch** → Automatic build and deployment
- **Pull requests** → Build validation (no deployment)
- **GitHub Pages** → Free hosting with built-in SSL

📖 **See [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md) for 2-minute setup instructions.**

## ♿ Accessibility Features

### Built-in Accessibility
- **Semantic HTML**: Proper heading hierarchy, landmarks, and sectioning
- **ARIA Labels**: Comprehensive labeling for screen readers
- **Keyboard Navigation**: Full keyboard accessibility with visible focus indicators
- **Skip Links**: Quick navigation to main content
- **Color Contrast**: WCAG AA compliant color ratios
- **Reduced Motion**: Respects user's motion preferences
- **Screen Reader Support**: Optimized for assistive technologies

### Testing Accessibility
- Use tools like [axe DevTools](https://www.deque.com/axe/devtools/) or [WAVE](https://wave.webaim.org/)
- Test with keyboard navigation (Tab, Shift+Tab, Enter, Space)
- Verify with screen readers (NVDA, JAWS, VoiceOver)
- Check color contrast ratios

## 🎨 Customization

### Colors
Update CSS custom properties in `src/css/main.css`:
```css
:root {
  --brand-color: #130087;
  --highlight-color: #9FA8DA;
  --text-color: #5E5C64;
  /* ... other colors */
}
```

### Content
- Edit `src/_data/site.js` for global site settings
- Modify `src/index.njk` for homepage content
- Update components in `src/_includes/` for reusable elements

### Adding New Pages
1. Create a new `.njk` or `.md` file in `src/`
2. Add front matter with layout and metadata
3. Content will be automatically built and included in sitemap

## 🔧 Configuration

### Site Settings
Edit `src/_data/site.js` to update:
- Site title and description
- Author information
- Social media links
- SEO metadata
- Navigation structure

### 11ty Configuration
The `.eleventy.js` file includes:
- Markdown processing with anchor links
- Asset copying and watching
- Custom filters for dates
- Accessibility-focused plugins

## 📱 Responsive Design

The site uses a mobile-first approach with breakpoints:
- Base: Mobile devices (320px+)
- Tablet: 768px+
- Desktop: 1024px+

## 🔍 SEO Features

- Meta descriptions and titles
- Open Graph tags for social sharing
- Twitter Card metadata
- JSON-LD structured data
- XML sitemap generation
- Robots.txt file

## 🚦 Performance

- Optimized font loading with preload hints
- Minimal CSS with modern features
- Efficient build process
- Static file generation for fast delivery

## 📚 Modular Content Principles

### Component Architecture
- **Layouts**: Base templates for different page types
- **Generic Components**: Reusable templates that work with any content
- **Specific Components**: Specialized components for unique layouts
- **Orchestration Components**: Components that combine multiple elements
- **Data Files**: Centralized configuration and structured content

### Content Structure
- **Separation of Concerns**: Content data separated from presentation
- **Reusable Templates**: Generic components work with any content data
- **Semantic HTML**: Proper HTML5 elements and ARIA structure
- **Logical Flow**: Content organized in meaningful sections

### Content Management
- **Data-Driven**: All content stored in structured JavaScript objects
- **Easy Updates**: Change content without touching HTML/templates
- **Version Control**: Track content changes separately from code
- **Extensible**: Easy to add new content types and sections

### Example Structure
```javascript
// src/_data/content.js
{
  sectionName: {
    heading: "Section Title",
    showHeading: true,
    content: [
      "First paragraph...",
      "Second paragraph..."
    ]
  }
}
```

For detailed content management instructions, see [CONTENT_GUIDE.md](CONTENT_GUIDE.md).

## 🔄 Deployment

The site uses GitHub Actions for automated building and deployment. Multiple deployment options are available:

### GitHub Pages Setup
1. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   
2. **Deploy**:
   - Push to main branch
   - Site automatically builds and deploys!
   - Your site will be available at `https://yourusername.github.io/repository-name`

### Features
- ✅ **Free hosting** with GitHub Pages
- ✅ **Built-in SSL** certificate
- ✅ **Automatic deployment** on every push to main
- ✅ **Build validation** on pull requests
- ✅ **Custom domain** support (add CNAME file)

### Manual Deployment
For traditional hosting, build locally and upload the `_site/` directory:
```bash
npm run build
# Upload _site/ contents to your server
```

## 🤝 Contributing

When making changes:
1. Maintain accessibility standards
2. Test across different devices and browsers
3. Validate HTML and check for accessibility issues
4. Follow the existing code style and structure
5. Update documentation as needed

## 📄 License

MIT License - feel free to use this structure for your own projects!

---

Built with ♿ accessibility and 📱 modern web standards in mind.