# Content Management Guide

## 📝 Modular Content Structure

This site follows a modular content architecture that separates content from presentation, making it easy to maintain, update, and reuse content across different contexts.

## 🏗️ Content Architecture

### Content Data (`src/_data/content.js`)
All content is stored in a structured data file that defines:
- **Headings**: Section titles and visibility settings
- **Content**: Array of paragraphs for each section
- **Metadata**: Special formatting or interaction requirements

```javascript
module.exports = {
  sectionName: {
    heading: "Section Title",
    showHeading: true,  // or false for screen-reader only
    content: [
      "First paragraph content...",
      "Second paragraph content..."
    ]
  }
};
```

### Component Structure
- **Generic Components**: Reusable templates that work with any content
- **Specific Components**: Specialized components for unique layouts
- **Orchestration Components**: Components that combine multiple elements

## 🔧 How to Edit Content

### 1. Basic Text Changes
Edit `src/_data/content.js`:

```javascript
// Change section content
about: {
  heading: "About Me",
  showHeading: false,
  content: [
    "Your new first paragraph here...",
    "Your new second paragraph here..."
  ]
}
```

### 2. Add New Sections
1. Add section to `src/_data/content.js`
2. Add section to `src/_includes/page-sections.njk`
3. Update navigation if needed

### 3. Site-wide Information
Edit `src/_data/site.js` for:
- Site title and description
- Contact information
- SEO metadata
- Social media links

## 📋 Current Content Sections

### Hero Section
**File**: `src/_includes/hero-section.njk`
**Content**: Uses `site.author` and `site.tagline` from site data
**Purpose**: Main heading and subtitle

### About Section
**Data**: `content.about`
**Features**: Hidden heading (screen-reader only)
**Content**: Introduction and approach description

### Leadership Section
**Data**: `content.leadership`
**Features**: Visible heading
**Content**: Leadership philosophy and approach

### Design Section
**Data**: `content.design`
**Features**: Visible heading, multiple paragraphs
**Content**: Design methodology and experience stories

### Contact Section
**Data**: `content.contact`
**Features**: Call-to-action link
**Content**: Contact invitation with LinkedIn link

## 🔄 Content Flow

```
content.js → page-sections.njk → content-section.njk → index.njk
```

1. **Data Definition**: Content defined in `content.js`
2. **Section Orchestration**: `page-sections.njk` sets up each section
3. **Template Application**: `content-section.njk` renders the content
4. **Page Assembly**: `index.njk` includes all components

## 🎨 Customization Options

### Section Visibility
Control heading display:
```javascript
showHeading: true   // Visible heading
showHeading: false  // Screen-reader only (uses .sr-only class)
```

### Content Types
- **Text paragraphs**: Simple string content
- **Rich content**: HTML allowed in content strings
- **Special elements**: CTAs, links, and interactive elements

### Adding Rich Content
```javascript
content: [
  "This is a paragraph with <strong>bold text</strong>.",
  "This paragraph has a <a href='#'>link</a>."
]
```

## 🔧 Technical Implementation

### Generic Content Section Component
**File**: `src/_includes/content-section.njk`
**Purpose**: Reusable template for any content section
**Features**:
- Dynamic section ID
- Conditional heading visibility
- Automatic paragraph rendering
- Optional CTA support

### Usage Pattern
```njk
{% set sectionData = content.sectionName %}
{% set sectionId = "section-id" %}
{% include "content-section.njk" %}
```

## 📈 Benefits of This Structure

### For Content Managers
- **Easy Updates**: Change content in one place
- **No HTML Knowledge**: Pure content editing
- **Consistent Structure**: Uniform formatting across sections
- **Version Control**: Track content changes easily

### For Developers
- **Reusable Components**: DRY principle implementation
- **Maintainable Code**: Clear separation of concerns
- **Extensible**: Easy to add new sections or content types
- **Type-Safe**: Structured data prevents errors

### For Accessibility
- **Consistent Markup**: Uniform semantic structure
- **Proper Headings**: Controlled heading hierarchy
- **Screen Reader Support**: Built-in accessibility features
- **Keyboard Navigation**: Standard interaction patterns

## 🚀 Adding New Content Types

### 1. Image Sections
Add to content data:
```javascript
portfolio: {
  heading: "Portfolio",
  showHeading: true,
  content: ["Portfolio description..."],
  images: [
    {
      src: "/assets/project1.jpg",
      alt: "Project 1 description",
      caption: "Project 1 - Web Design"
    }
  ]
}
```

### 2. List Sections
Add to content data:
```javascript
skills: {
  heading: "Skills",
  showHeading: true,
  content: ["Skills introduction..."],
  list: [
    "User Experience Design",
    "Design Leadership",
    "User Research"
  ]
}
```

### 3. Custom Components
Create specialized components for unique layouts:
```njk
<!-- src/_includes/portfolio-section.njk -->
<section class="content-section portfolio-section">
  <!-- Custom portfolio layout -->
</section>
```

## 🔍 Content Guidelines

### Writing Style
- **Conversational**: Personal and approachable tone
- **Specific**: Include concrete examples and details
- **Scannable**: Use clear paragraphs and logical flow
- **Accessible**: Write for all reading levels

### Content Structure
- **Progressive Disclosure**: Start broad, get specific
- **Logical Flow**: Each section builds on the previous
- **Call to Action**: Guide readers to next steps
- **Personal Touch**: Include authentic experiences

### SEO Considerations
- **Keywords**: Include relevant professional terms naturally
- **Headings**: Use descriptive, keyword-rich headings
- **Meta Descriptions**: Update in site data for each page
- **Internal Linking**: Connect related content sections

## 🛠️ Maintenance

### Regular Updates
- Review content quarterly for accuracy
- Update experience examples and projects
- Check all links and contact information
- Validate accessibility compliance

### Content Audit
- Ensure all sections serve the site's purpose
- Remove outdated information
- Add new experiences and skills
- Optimize for current keywords

---

*This guide should be updated as the content structure evolves.*