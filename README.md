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
│   └── site.js              # Global site configuration
├── _includes/
│   ├── footer.njk           # Footer component
│   └── logo.njk             # Logo component  
├── _layouts/
│   └── base.njk             # Base HTML layout
├── css/
│   └── main.css             # Main stylesheet
├── assets/                  # Static assets (images, etc.)
├── index.njk                # Home page content
├── robots.txt               # Search engine directives
└── sitemap.xml              # XML sitemap
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build the site**:
   ```bash
   npm run build
   ```

3. **Serve locally with hot reload**:
   ```bash
   npm run serve
   ```

4. **Debug build process**:
   ```bash
   npm run debug
   ```

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

### Component Structure
- **Layouts**: Base templates for different page types
- **Includes**: Reusable components (header, footer, navigation)
- **Data Files**: Centralized configuration and content
- **Partials**: Smaller, focused content blocks

### Content Organization
- Semantic HTML5 elements
- Logical heading hierarchy
- Structured data with microformats
- Separation of content and presentation

## 🔄 Deployment

The site generates static files in the `_site/` directory. Deploy to any static hosting service:

- **Netlify**: Connect your repository for automatic deploys
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use the build action for automated deployment
- **Traditional hosting**: Upload `_site/` contents to your server

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