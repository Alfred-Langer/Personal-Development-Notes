---
title: "HTML5 Semantic Elements Part Two"
description: "Covering Article, Section, and Div Elements"
---

## Article (`<article>`)

Represents self-contained, independent content that could stand alone and still make sense if distributed elsewhere.

**What Makes Content an Article:**
The key test is whether the content could be pulled out and placed somewhere else (RSS feed, another website, a newsletter) and still be complete and meaningful on its own.

**Typical Uses:**

- Blog posts
- News articles
- Forum posts
- Product cards
- User comments
- Social media posts

**Key Characteristics:**

- Independently distributable
- Self-contained and complete
- Makes sense without surrounding context

**Example:**

```html
<article>
  <h2>10 Tips for Better Sleep</h2>
  <p>Getting good sleep is essential for health...</p>
  <footer>
    <p>Published on October 6, 2025 by Jane Doe</p>
  </footer>
</article>
```

---

## Section (`<section>`)

Represents a thematic grouping of related content, usually with a heading.

**What Makes Content a Section:**
It groups related content by theme or topic within a larger document. It's part of the overall page structure rather than something that stands alone.

**Typical Uses:**

- Chapters in a document
- Tabbed content areas
- Grouped features on a page
- Different topics on a single page

**Key Characteristics:**

- Thematically related content
- Part of a larger whole
- Usually has a heading describing the section

**Example:**

```html
<section>
  <h2>Our Services</h2>
  <p>We provide a range of web development services...</p>
  <ul>
    <li>Web Design</li>
    <li>SEO Optimization</li>
    <li>Content Marketing</li>
  </ul>
</section>
```

---

## Article vs Section vs Div

### When to Use Each

**`<article>`** - Self-contained, independent content

- Could be distributed independently (RSS feed, newsletter, etc.)
- Makes complete sense on its own
- Could be removed from the page and still be meaningful

**`<section>`** - Thematic grouping of related content

- Groups related content by theme
- Usually has a heading
- Part of a larger document structure

**`<div>`** - Generic container with no semantic meaning

- Use when no semantic element fits
- Purely for styling or JavaScript purposes
- Layout and wrapper purposes

### The Decision Process

**Ask yourself:**

1. Is this content independent and self-contained? → Use `<article>`
2. Is this a themed grouping of content? → Use `<section>`
3. Do I just need a container for styling/layout? → Use `<div>`

### Examples

**Article Examples:**

- Blog posts
- News articles
- Forum posts
- Product cards
- User comments
- Social media posts

```html
<article>
  <h2>Understanding HTML5</h2>
  <p>HTML5 introduced semantic elements...</p>
  <footer>
    <p>Posted by John Doe on October 6, 2025</p>
  </footer>
</article>
```

**Section Examples:**

- Chapters in a document
- Tabbed content areas
- Grouped features on a page
- Thematic content divisions

```html
<section>
  <h2>Our Services</h2>
  <p>We offer web design, SEO, and marketing...</p>
</section>
```

**Div Examples:**

- Layout wrappers
- Styling containers
- Grid/flexbox containers
- JavaScript targets

```html
<div class="container">
  <div class="row">
    <div class="column">
      <p>Content here...</p>
    </div>
  </div>
</div>
```

### Combined Example

```html
<body>
  <!-- DIV: Layout wrapper -->
  <div class="page-wrapper">
    <!-- SECTION: Thematic grouping -->
    <section>
      <h2>Latest Blog Posts</h2>

      <!-- ARTICLE: Independent content -->
      <article>
        <h3>Post Title 1</h3>
        <p>Post content...</p>
      </article>

      <article>
        <h3>Post Title 2</h3>
        <p>Post content...</p>
      </article>
    </section>
  </div>
</body>
```

### Key Principle

**Use the most specific, meaningful element that fits. If no semantic element makes sense, then use `<div>`.**

---

## Quick Reference

| Element     | Purpose                | Independence              |
| ----------- | ---------------------- | ------------------------- |
| `<article>` | Self-contained content | Yes - stands alone        |
| `<section>` | Themed grouping        | No - part of larger whole |
| `<div>`     | Generic container      | N/A - no semantic meaning |
