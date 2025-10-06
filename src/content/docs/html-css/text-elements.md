---
title: "Text Elements"
description: "Introduction to the fundamental HTML elements used for text"
---

## Various Elements Used for Text

HTML provides a number of elements that can be used specifically for displaying text on your website. They are:
- Header Elements (`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`)
- Paragraph Elements (`<p>`)
- List Elements (`<ul>`, `<ol>`, `<li>`)

#### Wait a minute, I can just paste text in my HTML without putting it inside an element. Why should I use text elements?

Although you *can* place text directly into your HTML document without the use of an element, there are two main reasons why you should use them:

1. HTML ignores white space, including line breaks. This means that even if you have five individual paragraphs of text, it will be displayed as a single paragraph with no distinction between them.  

2. Text elements provide you with the ability to structure your text cleanly. Going back to our five paragraph example, you could place each paragraph within its own `<p>` tag pair and now they'll be displayed individually.

---

## Header Elements (`<h1>`–`<h6>`)

These elements are commonly used for titles and headings on pages. They range from `<h1>` (the top-level heading) to `<h6>` (the smallest heading).  

- `<h1>` is generally used for the main page title.  
- `<h2>` through `<h6>` are used for subsections and smaller headings.  

> Note: While there’s no syntax error in using multiple `<h1>` tags, it’s considered best practice to have only one `<h1>` per page. This improves accessibility and search engine optimization (SEO).  

Example:
```html
<h1>This is the title of my page</h1>

<h2>I am an aspiring Web Developer</h2>
<p>I am making it my goal to be dedicated to learning as much as I can about Web Development</p>
```

---

## Paragraph Elements (`<p>`)

The `<p>` element is used to display blocks of text as paragraphs. Each paragraph of text should be wrapped in its own pair of `<p>` tags. Browsers will automatically add spacing (margins) between paragraphs.  

Example:
```html
<p>This is my first line of text</p>

<p>This is my second line of text</p>

<p>This is my third line of text. See how we are all separated from each other. That is the power of the <p> tag.</p>
```

### Paragraphs vs Line Breaks (`<p>` vs `<br>`)

While both `<p>` and `<br>` affect how text appears on the page, they serve very different purposes:  

- **`<p>` (Paragraph)**:  
  - Creates a block of text that represents a complete thought or idea.  
  - Adds vertical spacing (margins) before and after by default.  
  - Semantically meaningful — screen readers and search engines recognize it as a paragraph.  
  - Allows for the block of text of be targeted by CSS for styling or Javascript for interactivity.

- **`<br>` (Line Break)**:  
  - Breaks the text onto a new line, but does not create a new paragraph block.  
  - Carries no semantic meaning — purely visual.  
  - Useful for things like poetry, addresses, or manual line breaks inside the same paragraph.  

Example comparison:

```html
<!-- Using <p> -->
<p>This is my first thought.</p>
<p>This is my second thought.</p>

<!-- Using <br> -->
This is my first thought.<br>
This is my second thought.
```

The `<p>` version creates two distinct paragraphs with spacing, while the `<br>` version creates two lines in the *same paragraph*.  

---

## List Elements (`<ul>`, `<ol>`, `<li>`)

Whenever you want to display a list of items on your page, you will use list elements. There are three key elements in this category:

1. **Unordered List** `<ul>` → Displays list items with bullets.  
2. **Ordered List** `<ol>` → Displays list items with numbers.  
3. **List Item** `<li>` → Defines each item in the list.  

Example:
```html
<ul>
  <li>Pants</li>
  <li>Shirts</li>
  <li>Shoes</li>
</ul>

<ol>
  <li>Gold</li>
  <li>Copper</li>
  <li>Nickel</li>
</ol>
```

### Child vs Parent Elements

Whenever you have elements nested within another element, you can describe their relationship using parent and child terminology:  

- The `<li>` tags are the **children** of the `<ul>` or `<ol>` tag.  
- The `<ul>` or `<ol>` tag is the **parent** of its `<li>` children.  

This concept will be very important later when we dive into CSS.  

---

## Text Stylers (`<strong>`, `<em>`)

Text stylers are used to bold or italicize text. But beyond style, they also carry semantic meaning:  

1. `<strong>` → Marks text of strong importance (browsers usually render it in bold).  
2. `<em>` → Marks text with emphasis (browsers usually render it in italics).  

Example:
```html
<p>This is <strong>my</strong> wedding!</p>
<!-- In this example, the word 'my' would be bolded on the web page -->

<p>I have to say that guy was pretty... <em>suspicious</em> if I do say so myself</p>
<!-- In this example, the word "suspicious" would be italicized on the web page -->
```

> Note: You can also use `<b>` or `<i>` for bold and italicized text respectively. However, these are not recommended today because they are purely visual and not semantic. Semantic elements (`<strong>`, `<em>`) are better for accessibility and meaning.  
