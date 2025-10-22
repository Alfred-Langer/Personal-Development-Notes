---
title: "HTML5 Semantic Elements Part Two"
description: "Covering Article, Section, Aside, and Div Elements"
---

## Article (`<article>`)

Represents self-contained, complete content that provides all necessary information within itself. Think of it as an **instance of a content type**.

**What Makes Content an Article:**
The key test is whether this content is an **instance of something** - a repeatable type of content that you could have multiple of. Articles should be complete and understandable without needing any surrounding elements.

**Ask yourself:** "Is this an instance of a content type that could have multiple instances?"
- **YES** → Use `<article>` (blog post, recipe, product, comment)
- **NO** → Skip `<article>`, just use `<main>` (contact page, about page, settings page)

**Typical Uses:**

- Blog posts (instances of "blog post" type)
- News articles (instances of "article" type)
- Forum posts (instances of "post" type)
- Product cards (instances of "product" type)
- User comments (instances of "comment" type)
- Social media posts (instances of "post" type)
- Recipe cards (instances of "recipe" type)

**NOT typically used for:**
- Contact pages (unique, one-off page)
- About pages (unique, one-off page)
- Settings pages (unique, one-off page)
- Login pages (unique, one-off page)

**Key Characteristics:**

- An instance of a repeatable content type
- Self-contained and complete
- Provides all information needed to understand it
- Has a clear beginning and end
- Doesn't require surrounding content to make sense

**Example:**

```html
<article>
  <h2>10 Tips for Better Sleep</h2>
  <p>Getting good sleep is essential for health. Here are our top tips...</p>
  <ol>
    <li>Stick to a schedule</li>
    <li>Avoid caffeine late in the day</li>
    <li>Keep your bedroom cool</li>
  </ol>
  <footer>
    <p>Published on October 6, 2025 by Jane Doe</p>
  </footer>
</article>
```

---

## Section (`<section>`)

Represents a thematic grouping of related content that forms part of a larger whole, usually with a heading.

**What Makes Content a Section:**
It organizes larger content into logical parts or chapters. Each section is a piece of the complete content, helping to structure and break down information.

**Typical Uses:**

- Chapters in a document
- Parts of an article (Introduction, Methods, Results, Conclusion)
- Different topic areas on a page
- Grouped features or services
- Recipe sections (Ingredients, Instructions, Nutrition)

**Key Characteristics:**

- Part of a larger whole
- Thematically related content
- Usually has a heading describing the section
- Helps organize and structure content

**Example:**

```html
<article>
  <h1>Complete Guide to Baking Bread</h1>
  
  <section>
    <h2>Ingredients</h2>
    <ul>
      <li>3 cups flour</li>
      <li>1 packet yeast</li>
      <li>1 tsp salt</li>
    </ul>
  </section>
  
  <section>
    <h2>Instructions</h2>
    <ol>
      <li>Mix dry ingredients...</li>
      <li>Knead the dough...</li>
      <li>Let rise for 1 hour...</li>
    </ol>
  </section>
  
  <section>
    <h2>Tips for Success</h2>
    <p>Make sure your water is warm, not hot...</p>
  </section>
</article>
```

---

## Aside (`<aside>`)

Represents content that is tangentially related to the main content but not essential to understanding it. Think of it as "bonus" content.

**What Makes Content an Aside:**
Content that supplements or relates to the main content but isn't necessary for understanding the primary message. If you removed it, the main content would still be complete and make sense.

**Typical Uses:**

- Sidebars with related links
- Author bio boxes
- "Related articles" sections
- Pull quotes or callouts
- Glossary definitions
- Advertisement
- Fun facts or additional context
- "You might also like" suggestions

**Key Characteristics:**

- Supplementary or tangential content
- Related but not essential
- Could be removed without affecting main content
- Often appears visually separated (sidebar, box)

**Example:**

```html
<main>
  <article>
    <h1>The History of JavaScript</h1>
    <p>JavaScript was created in 1995 by Brendan Eich...</p>
    <p>The language has evolved significantly over the years...</p>
  </article>
  
  <aside>
    <h2>About the Author</h2>
    <p>Sarah Chen is a web developer with 10 years of experience...</p>
  </aside>
  
  <aside>
    <h2>Related Articles</h2>
    <ul>
      <li><a href="#">The Evolution of CSS</a></li>
      <li><a href="#">Understanding TypeScript</a></li>
      <li><a href="#">Modern JavaScript Frameworks</a></li>
    </ul>
  </aside>
</main>
```

---

## Article vs Section vs Aside vs Div

### When to Use Each

**`<article>`** - Self-contained, complete content

- Provides all information needed within itself
- Has a clear beginning and end
- Understandable without surrounding elements
- Complete message or piece of content

**`<section>`** - Thematic grouping that's part of a larger whole

- Organizes content into logical parts
- Part of a larger document structure
- Usually has a heading
- Like chapters in a book

**`<aside>`** - Bonus/supplementary content

- Related but not essential to main content
- Tangential information
- Could be removed without affecting understanding
- "Nice to have" rather than "need to have"

**`<div>`** - Generic container with no semantic meaning

- Use when no semantic element fits
- Purely for styling or JavaScript purposes
- Layout and wrapper purposes

### The Decision Process

**Ask yourself:**

1. Is this complete content that makes sense on its own? → Use `<article>`
2. Is this a part/chapter of larger content? → Use `<section>`
3. Is this bonus content related to but not essential for the main content? → Use `<aside>`
4. Do I just need a container for styling/layout? → Use `<div>`

### Examples

**Article Examples:**

```html
<!-- Blog post preview on homepage -->
<article>
  <h2>Getting Started with HTML</h2>
  <p>HTML is the foundation of web development. In this guide...</p>
  <a href="/html-guide">Read more</a>
</article>

<!-- Product card -->
<article>
  <h3>Wireless Headphones</h3>
  <img src="headphones.jpg" alt="Wireless headphones">
  <p>Premium sound quality with 30-hour battery life</p>
  <p class="price">$149.99</p>
  <button>Add to Cart</button>
</article>
```

**Section Examples:**

```html
<!-- Recipe organized into sections -->
<article>
  <h1>Chocolate Chip Cookies</h1>
  
  <section>
    <h2>Ingredients</h2>
    <ul>
      <li>2 cups flour</li>
      <li>1 cup sugar</li>
    </ul>
  </section>
  
  <section>
    <h2>Instructions</h2>
    <ol>
      <li>Preheat oven to 350°F</li>
      <li>Mix ingredients...</li>
    </ol>
  </section>
</article>

<!-- Homepage with different topic sections -->
<main>
  <section>
    <h2>About Us</h2>
    <p>We are a team of passionate developers...</p>
  </section>
  
  <section>
    <h2>Our Services</h2>
    <p>We offer web design, development, and consulting...</p>
  </section>
  
  <section>
    <h2>Contact</h2>
    <p>Get in touch with us today...</p>
  </section>
</main>
```

**Aside Examples:**

```html
<!-- Blog post with sidebar -->
<main>
  <article>
    <h1>Understanding CSS Grid</h1>
    <p>CSS Grid is a powerful layout system...</p>
  </article>
  
  <aside>
    <h2>Related Topics</h2>
    <ul>
      <li><a href="#">CSS Flexbox</a></li>
      <li><a href="#">Responsive Design</a></li>
    </ul>
  </aside>
  
  <aside>
    <h2>Quick Tip</h2>
    <p>Always test your grid layouts on mobile devices!</p>
  </aside>
</main>
```

**Div Examples:**

```html
<!-- Layout wrapper -->
<div class="container">
  <div class="row">
    <div class="column">
      <article>
        <h2>Content here...</h2>
      </article>
    </div>
  </div>
</div>

<!-- Styling wrapper -->
<div class="card-wrapper">
  <article class="card">
    <h3>Card Title</h3>
    <p>Card content...</p>
  </article>
</div>
```

### Combined Example

```html
<body>
  <!-- DIV: Layout wrapper for styling -->
  <div class="page-wrapper">
    
    <main>
      <!-- ARTICLE: Complete blog post -->
      <article>
        <h1>The Ultimate Guide to Web Accessibility</h1>
        
        <!-- SECTION: Part of the blog post -->
        <section>
          <h2>Why Accessibility Matters</h2>
          <p>Making websites accessible ensures everyone can use them...</p>
        </section>
        
        <!-- SECTION: Another part of the blog post -->
        <section>
          <h2>Key Principles</h2>
          <ul>
            <li>Perceivable</li>
            <li>Operable</li>
            <li>Understandable</li>
          </ul>
        </section>
      </article>
      
      <!-- ASIDE: Bonus content related to the blog post -->
      <aside>
        <h2>About the Author</h2>
        <p>Mike Johnson is an accessibility advocate...</p>
      </aside>
      
      <!-- ASIDE: Another bonus section -->
      <aside>
        <h2>Related Articles</h2>
        <ul>
          <li><a href="#">WCAG Guidelines Explained</a></li>
          <li><a href="#">Testing for Accessibility</a></li>
        </ul>
      </aside>
    </main>
    
  </div>
</body>
```

---

## Main (`<main>`)

Represents the primary/dominant content of the document. There should only be ONE `<main>` element per page.

**What Makes Content Main:**
It's the main content of the page - the reason the page exists. It excludes repeated content like headers, footers, navigation, and sidebars that appear across multiple pages.

**Key Characteristics:**

- Only one `<main>` per page
- Contains the primary content
- Excludes site-wide repeated elements (header, footer, nav)
- Should be a direct child of `<body>` (or a landmark region)

**Example:**

```html
<body>
  <header>
    <h1>My Website</h1>
    <nav>...</nav>
  </header>
  
  <!-- MAIN: Primary content of this page -->
  <main>
    <article>
      <h2>Blog Post Title</h2>
      <p>This is the main content of the page...</p>
    </article>
  </main>
  
  <footer>
    <p>&copy; 2025 My Website</p>
  </footer>
</body>
```

---

## Quick Reference

| Element     | Purpose                     | Relationship to Content                    | Per Page |
| ----------- | --------------------------- | ------------------------------------------ | -------- |
| `<main>`    | Primary page content        | The main content area (only one per page)  | One      |
| `<article>` | Self-contained content      | Complete on its own                        | Multiple |
| `<section>` | Thematic grouping           | Part of a larger whole                     | Multiple |
| `<aside>`   | Supplementary content       | Related but not essential                  | Multiple |
| `<div>`     | Generic container           | No semantic meaning - styling/layout only  | Multiple |

---

## Page Structure

Here's how these elements typically work together:

```html
<body>
  <!-- HEADER: Site-wide header (not main content) -->
  <header>
    <h1>Website Name</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>
  
  <!-- MAIN: The primary content of THIS specific page -->
  <main>
    <!-- Your articles, sections, etc. go here -->
  </main>
  
  <!-- ASIDE: Can be inside OR outside main -->
  <aside>
    <!-- Sidebar content -->
  </aside>
  
  <!-- FOOTER: Site-wide footer (not main content) -->
  <footer>
    <p>&copy; 2025</p>
  </footer>
</body>
```

---

## Key Principle

**Use the most specific, meaningful element that fits. If no semantic element makes sense, then use `<div>`.**

Think of it this way:
- **`<main>`** = "This is THE primary content of the page"
- **`<article>`** = "This is a complete thing"
- **`<section>`** = "This is part of a thing"
- **`<aside>`** = "This is a bonus related to the thing"
- **`<div>`** = "This is just a box for styling"