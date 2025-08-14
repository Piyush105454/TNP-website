# Global CSS Style Guide

This document explains how to use the global CSS classes defined in `src/index.css`.

## Typography

### Headings
```jsx
<h1 className="heading-primary">Main Page Title</h1>
<h2 className="heading-secondary">Section Title</h2>
<h3 className="heading-tertiary">Subsection Title</h3>
```

### Text
```jsx
<p className="text-body">Regular paragraph text</p>
<p className="text-body-large">Larger paragraph text</p>
<p className="text-small">Small text for captions</p>
```

## Buttons

### Basic Button Usage
```jsx
<button className="btn btn-primary">Primary Button</button>
<button className="btn btn-secondary">Secondary Button</button>
<button className="btn btn-outline">Outline Button</button>
<button className="btn btn-ghost">Ghost Button</button>
```

### Button Sizes
```jsx
<button className="btn btn-primary btn-sm">Small</button>
<button className="btn btn-primary">Default</button>
<button className="btn btn-primary btn-lg">Large</button>
<button className="btn btn-primary btn-xl">Extra Large</button>
```

### Responsive Button
```jsx
<button className="btn btn-primary btn-responsive">Full Width on Mobile</button>
```

## Cards

### Basic Card
```jsx
<div className="card">
  <div className="card-header">
    <h3 className="heading-tertiary">Card Title</h3>
  </div>
  <div className="card-body">
    <p className="text-body">Card content goes here</p>
  </div>
  <div className="card-footer">
    <button className="btn btn-primary">Action</button>
  </div>
</div>
```

### Simple Card
```jsx
<div className="card">
  <div className="card-body">
    <h3 className="heading-tertiary mb-2">Simple Card</h3>
    <p className="text-body">Just body content</p>
  </div>
</div>
```

## Forms

### Form Group
```jsx
<div className="form-group">
  <label className="form-label" htmlFor="email">Email Address</label>
  <input 
    type="email" 
    id="email" 
    className="form-input" 
    placeholder="Enter your email"
  />
</div>
```

### Textarea
```jsx
<div className="form-group">
  <label className="form-label" htmlFor="message">Message</label>
  <textarea 
    id="message" 
    className="form-input form-textarea" 
    placeholder="Enter your message"
  ></textarea>
</div>
```

## Layout

### Container
```jsx
<div className="container">
  <p>Content with max-width and centered</p>
</div>

<div className="container-fluid">
  <p>Full width content with padding</p>
</div>
```

### Section Padding
```jsx
<section className="section-padding">
  <div className="container">
    <h2 className="heading-secondary">Section Title</h2>
  </div>
</section>
```

## Spacing Utilities

### Margins
```jsx
<div className="mb-0">No bottom margin</div>
<div className="mb-1">Small bottom margin</div>
<div className="mb-2">Medium bottom margin</div>
<div className="mb-3">Large bottom margin</div>
<div className="mb-4">Extra large bottom margin</div>
<div className="mb-5">Huge bottom margin</div>

<!-- Same pattern for mt-* (margin-top) -->
<div className="mt-3">Top margin</div>
```

## Text Alignment
```jsx
<p className="text-left">Left aligned text</p>
<p className="text-center">Center aligned text</p>
<p className="text-right">Right aligned text</p>
```

## Animations
```jsx
<div className="fade-in">Fades in on load</div>
<div className="slide-up">Slides up on load</div>
<div className="scale-in">Scales in on load</div>
```

## CSS Variables

You can use these CSS variables in your custom styles:

### Colors
- `var(--primary-red)` - Main red color
- `var(--primary-red-hover)` - Darker red for hover states
- `var(--secondary-blue)` - Blue accent color
- `var(--gray-50)` to `var(--gray-900)` - Gray scale

### Typography
- `var(--font-primary)` - Roboto font
- `var(--font-secondary)` - Inter font

### Spacing
- `var(--spacing-xs)` to `var(--spacing-xl)` - Consistent spacing

### Example Custom Component
```jsx
const CustomComponent = () => {
  return (
    <div className="card fade-in">
      <div className="card-body">
        <h2 className="heading-secondary mb-3">Welcome</h2>
        <p className="text-body mb-4">
          This component uses global styles for consistency.
        </p>
        <div className="flex gap-2">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>
    </div>
  );
};
```

## Best Practices

1. **Use global classes first** - Before writing custom CSS, check if a global class exists
2. **Combine with Tailwind** - Global classes work alongside Tailwind utilities
3. **Consistent spacing** - Use the margin/padding utilities for consistent spacing
4. **Responsive design** - Global classes are mobile-first and responsive
5. **Accessibility** - All global classes include proper focus states and accessibility features

## Color Palette

- **Primary Red**: #dc2626 (--primary-red)
- **Primary Red Hover**: #b91c1c (--primary-red-hover)
- **Secondary Blue**: #3b82f6 (--secondary-blue)
- **Gray Scale**: From #f9fafb (gray-50) to #111827 (gray-900)