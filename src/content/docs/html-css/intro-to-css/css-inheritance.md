---
title: "CSS Inheritance"
description: "Understanding how CSS properties are inherited from parent to child elements"
---

## What is CSS Inheritance?

**Inheritance** is a concept in CSS that allows child elements to automatically inherit certain styles from their parent elements, without needing to explicitly define those styles again.

**Key Concept:**
When you set a style on a parent element, that style can "flow down" to all of its children and descendants.

**Example:**

```css
div {
  font-size: 24px;
  color: blue;
}
```

```html
<div>
  <p>This paragraph inherits the 24px font-size and blue color</p>
  <span>This span also inherits those styles</span>
</div>
```

Both the `<p>` and `<span>` elements will have 24px font-size and blue color, even though no CSS rules directly target them.

---

## How Inheritance Works

When a CSS property is inherited:

1. The browser looks for a style rule directly targeting the element
2. If not found, it looks at the element's parent for inherited properties
3. If not found, it continues up the chain to grandparents, great-grandparents, etc.
4. This continues until it reaches the root (`<html>` or `<body>`) or finds a value

**Visualization:**

```html
<body style="font-size: 16px;">
  <div style="color: blue;">
    <p style="font-weight: bold;">
      This text has:
      - font-size: 16px (inherited from body)
      - color: blue (inherited from div)
      - font-weight: bold (directly applied)
    </p>
  </div>
</body>
```

---

## Which Properties are Inherited?

Not all CSS properties are inherited. Generally, **text-related properties** are inherited, while **box model properties** are not.

### Properties That ARE Inherited:

**Text Properties:**
- `color`
- `font-family`
- `font-size`
- `font-weight`
- `font-style`
- `line-height`
- `letter-spacing`
- `text-align`
- `text-indent`
- `text-transform`
- `white-space`
- `word-spacing`

**List Properties:**
- `list-style`
- `list-style-type`
- `list-style-position`

**Other:**
- `cursor`
- `visibility`

### Properties That are NOT Inherited:

**Box Model:**
- `margin`
- `padding`
- `border`
- `width`
- `height`

**Positioning:**
- `position`
- `top`, `right`, `bottom`, `left`
- `z-index`

**Display:**
- `display`

**Background:**
- `background`
- `background-color`
- `background-image`

**Example of Non-Inherited Properties:**

```css
div {
  border: 2px solid red;
  padding: 20px;
  background-color: yellow;
}
```

```html
<div>
  <p>This paragraph does NOT inherit the border, padding, or background</p>
</div>
```

The paragraph will not have a red border, 20px padding, or yellow background.

---

## Overriding Inherited Styles

Inherited styles have **very low specificity** and are easily overridden by any direct CSS rule targeting the child element.

**Example:**

```css
/* Parent sets font-size */
.container {
  font-size: 24px;
  color: blue;
}

/* Child overrides font-size but keeps inherited color */
.container p {
  font-size: 16px;
  /* color: blue is still inherited */
}
```

```html
<div class="container">
  <p>This paragraph has 16px font (overridden) and blue color (inherited)</p>
</div>
```

**Key Point:**
Direct CSS rules always win over inherited styles, regardless of how specific the parent selector is.

---

## Setting Page-Wide Defaults with the Body Selector

The `<body>` element is the parent of all visible content on your page. You can use it to set default styles for your entire website.

**Example:**

```css
body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}
```

```html
<body>
  <h1>This heading inherits the font-family and color</h1>
  <p>This paragraph inherits all the body styles</p>
  <div>
    <span>This span also inherits from body</span>
  </div>
</body>
```

**Benefits:**
- Sets consistent defaults across your entire site
- Reduces repetition in your CSS
- Easy to maintain and update
- Creates a cohesive design foundation

**Best Practice:**
Always set base font properties on the body for consistency:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #222;
  background-color: #fff;
}
```

---

## When is Inheritance Practical?

Inheritance is most practical when you want to:

### 1. Set Site-Wide Defaults

```css
body {
  font-family: Georgia, serif;
  color: #333;
  line-height: 1.6;
}
/* Now all text uses these values unless overridden */
```

### 2. Style Text Within Containers

```css
.article {
  font-size: 18px;
  line-height: 1.8;
  color: #444;
}
```

```html
<div class="article">
  <h2>Article Title</h2>
  <p>All text in this article inherits the styling</p>
  <blockquote>Quotes inherit it too</blockquote>
</div>
```

### 3. Create Themed Sections

```css
.dark-section {
  color: white;
  background-color: #222;
}

.light-section {
  color: black;
  background-color: #f5f5f5;
}
```

```html
<section class="dark-section">
  <h2>Dark Theme Header</h2>
  <p>All text here is white (inherited)</p>
</section>
```

### 4. Reduce Code Repetition

**Without Inheritance:**

```css
.container h1 { font-family: Arial; color: blue; }
.container h2 { font-family: Arial; color: blue; }
.container h3 { font-family: Arial; color: blue; }
.container p { font-family: Arial; color: blue; }
.container span { font-family: Arial; color: blue; }
```

**With Inheritance:**

```css
.container {
  font-family: Arial;
  color: blue;
}
/* All children automatically inherit these properties */
```

---

## Universal Selector vs Inheritance

The **universal selector** (`*`) is different from inheritance. It directly targets every element on the page.

### Universal Selector: `*`

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**How it Works:**
- Targets **every single element** on the page
- Applies rules even to properties that normally aren't inherited
- Has the **lowest specificity** (Priority 0)
- Very easy to override

**Common Use Case - CSS Reset:**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

This removes default browser margins and paddings from all elements.

### Inheritance vs Universal Selector

**Key Differences:**

| Aspect | Inheritance | Universal Selector (`*`) |
|--------|-------------|--------------------------|
| **Mechanism** | Styles flow from parent to child | Directly targets all elements |
| **Properties** | Only inherited properties (text, etc.) | Can apply any property |
| **Specificity** | Lower than any selector | Priority 0 (lowest) |
| **Performance** | Efficient | Slightly less efficient |
| **Override** | Very easy to override | Very easy to override |

**Example Comparison:**

```css
/* Inheritance approach */
body {
  font-family: Arial;
  color: blue;
}
/* Only text properties are inherited */

/* Universal selector approach */
* {
  font-family: Arial;
  color: blue;
}
/* Explicitly applies to every element */
```

**When to Use Which:**

**Use Inheritance (body selector):**
- Setting site-wide text styles
- Default font properties
- Base text colors
- Natural and efficient

**Use Universal Selector (`*`):**
- CSS resets (removing default margins/padding)
- Box-sizing for all elements
- When you need to override non-inherited properties

---

## Practical Examples

### Example 1: Page-Wide Typography

```css
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.2;
  /* font-family and color are inherited from body */
}

p {
  margin-bottom: 1em;
  /* All text properties inherited from body */
}
```

### Example 2: Themed Card Component

```css
.card {
  padding: 20px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #555;
}

.card h3 {
  font-size: 18px; /* Override inherited font-size */
  /* color: #555 is still inherited */
}

.card p {
  /* Inherits font-size: 14px and color: #555 from .card */
}
```

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card description with inherited styles</p>
</div>
```

### Example 3: CSS Reset with Universal Selector

```css
/* Remove all default margins and padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Set site defaults with inheritance */
body {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #1a1a1a;
}
```

### Example 4: Section-Based Color Themes

```css
.hero-section {
  background-color: #003366;
  color: white; /* All text inside inherits white color */
  padding: 60px 20px;
}

.content-section {
  color: #333; /* All text inside inherits dark color */
  padding: 40px 20px;
}
```

```html
<section class="hero-section">
  <h1>Welcome</h1>
  <p>This text is white (inherited)</p>
</section>

<section class="content-section">
  <h2>About Us</h2>
  <p>This text is dark (inherited)</p>
</section>
```

### Example 5: Overriding Inherited Styles

```css
body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #333;
}

.special-text {
  font-family: 'Courier New', monospace; /* Override */
  color: red; /* Override */
  /* font-size: 16px is still inherited */
}

.large-text {
  font-size: 24px; /* Override */
  /* font-family and color are still inherited */
}
```

---

## Common Pitfalls and Solutions

### Pitfall 1: Expecting Non-Inherited Properties to Inherit

**Problem:**

```css
.container {
  border: 2px solid red;
  padding: 20px;
}
```

```html
<div class="container">
  <p>Why doesn't this paragraph have a border and padding?</p>
</div>
```

**Solution:**
Understand which properties inherit. For non-inherited properties, target the elements directly:

```css
.container p {
  border: 2px solid red;
  padding: 20px;
}
```

### Pitfall 2: Forgetting Inherited Styles Can Be Overridden

**Problem:**

```css
body {
  color: blue;
}

/* Later in CSS file */
p {
  color: red; /* Confused why blue doesn't show */
}
```

**Solution:**
Remember that any direct rule overrides inheritance. Check your CSS for conflicting rules.

### Pitfall 3: Over-Using the Universal Selector

**Problem:**

```css
* {
  font-size: 16px;
  color: blue;
  margin: 10px;
  padding: 10px;
}
/* Now EVERYTHING has these properties, even elements that shouldn't */
```

**Solution:**
Use the universal selector sparingly, mainly for resets:

```css
* {
  box-sizing: border-box;
}

body {
  font-size: 16px;
  color: blue;
}
```

---

## Best Practices

1. **Use Body for Text Defaults**
   - Set font-family, font-size, line-height, and color on body
   - Lets all text inherit consistently

2. **Understand What Inherits**
   - Text properties inherit
   - Box model properties do not
   - Saves you from unexpected behavior

3. **Use Universal Selector for Resets Only**
   - Good for margin: 0, padding: 0, box-sizing
   - Avoid using it for styling
   - Keep it minimal

4. **Layer Your Styles**
   - Start with body defaults
   - Add component-specific styles
   - Override when needed
   - Leverage the cascade

5. **Document Your Base Styles**
   - Make it clear what's inherited
   - Comment your body and universal selector rules
   - Helps team members understand the foundation

---

## Debugging Inheritance Issues

When styles aren't being inherited as expected:

1. **Check if the Property Inherits**
   - Is it a text property? Likely inherits
   - Is it a box model property? Likely doesn't inherit
   - Look up the property on MDN if unsure

2. **Use Browser DevTools**
   - Inspect the element
   - Check the "Computed" tab
   - See where each property value comes from

3. **Look for Overriding Rules**
   - Check if a more specific rule is overriding the inherited style
   - Remember: direct rules always beat inheritance

4. **Verify the Parent-Child Relationship**
   - Make sure the element is actually a descendant of the parent
   - Check your HTML structure

---

## Summary

**Key Takeaways:**

- **Inheritance** allows child elements to inherit certain CSS properties from their parents
- **Text-related properties** generally inherit (font-family, color, font-size, etc.)
- **Box model properties** generally do NOT inherit (margin, padding, border, etc.)
- **Inherited styles** have very low specificity and are easily overridden
- **Use `body`** to set site-wide text defaults
- **Universal selector (`*`)** targets every element directly, not through inheritance
- **Universal selector** should be used sparingly, mainly for CSS resets

**Remember:** Inheritance is a powerful tool for creating consistent, maintainable styles across your entire website. Understanding what inherits and what doesn't will help you write cleaner, more efficient CSS!
