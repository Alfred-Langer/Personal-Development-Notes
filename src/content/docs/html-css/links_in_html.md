---
title: "Links in HTML"
description: "Fundamentals of the <a> (anchor) tag in HTML"
---

## What is the `<a>` Tag?

The `<a>` tag (short for **anchor**) is used to create hyperlinks in HTML.  
These links can connect:
- One page to another
- A section within the same page
- A page to an external website
- A page to an email address or downloadable file

Example:
```html
<a href="https://www.example.com">Visit Example</a>
```
This will display as a clickable link: **Visit Example**

---

## Common Attributes of `<a>`

1. **`href` (Hypertext Reference)**  
   - Defines the destination of the link.  
   - Can be:
     - An **absolute URL**: `https://www.example.com`
     - A **relative URL**: `about.html` (relative to the current directory)
     - An **ID reference**: `#section1` (scrolls to an element on the same page)
     - A **protocol-based link**: `mailto:info@example.com` (opens email client) or `tel:+1234567890` (initiates a phone call on mobile)

   Example:
   ```html
   <a href="contact.html">Go to Contact Page</a>
   ```

2. **`target`**  
   - Defines how the link opens.  
   - Common values:
     - `_self` → Default. Opens in the same tab.  
     - `_blank` → Opens in a new tab/window.  
     - `_parent` / `_top` → Used in frames (rare today).  

   Example:
   ```html
   <a href="https://openai.com" target="_blank">Open OpenAI in a new tab</a>
   ```

3. **`title`**  
   - Provides extra information when hovering over the link.  
   Example:
   ```html
   <a href="resume.pdf" title="Download my resume">Resume</a>
   ```

4. **`download`**  
   - Instructs the browser that the target, commonly a file, should be downloaded and not opened in a tab. 
   Example:
   ```html
   <a href="brochure.pdf" download>Download Brochure</a>
   ```

---

## Linking Within the Same Page (Anchors)

You can use IDs to jump to specific sections of a page.

Example:
```html
<a href="#section1">Go to Section 1</a>

<h2 id="section1">Section 1</h2>
<p>This is Section 1 of the page.</p>
```

>Note: You’ve probably already noticed that `id` is an attribute of the `<h2>` element.  We’ll go into more detail about IDs when we get to CSS, but for now just know:  
- Any element within the body of your page can have an `id` attribute.  
- IDs should be **unique** on a page (no two elements should share the same `id`).  
- The `id` attribute is useful for anchors as well as selecting elements for CSS styling or JavaScript logic.  
---

## Accessibility Considerations

- **Descriptive Link Text**  
  Avoid vague text like “click here.” Instead, describe the purpose:  
  ```html
  <a href="about.html">Learn more about us</a>
  ```

- **Keyboard Navigation**  
  Anchor links are naturally focusable with the `Tab` key, which helps keyboard users.

- **Color & Contrast**  
  Make sure links are visually distinct (often underlined and colored by default).

---

## Best Practices

1. Always use `href`. An `<a>` without `href` is not focusable or accessible as a link.  
2. Use relative URLs for internal links, absolute URLs for external links.  
3. Open new tabs (`target="_blank"`) sparingly; warn users if you’re doing this.  
4. Keep link text meaningful and concise.  
5. Use `alt` text for linked images:  
   ```html
   <a href="home.html">
     <img src="logo.png" alt="Homepage">
   </a>
   ```

---

## Summary

- `<a>` creates links between pages, resources, or parts of the same document.  
- **Key attributes**: `href`, `target`, `title`, `download`.  
- Use links thoughtfully to improve **usability, accessibility, and SEO**.  
