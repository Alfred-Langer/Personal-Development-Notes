---
title: "What is CSS?"
description: "General introduction to CSS, selectors, declarations, and styling methods"
---

**CSS** stands for **Cascading Style Sheets**.

HTML describes the content on the page. CSS describes how the content on the page is visually styled and presented.

CSS consists of numerous properties that the developer can use to format, style, and modify the appearance of HTML elements.

These include: **Color**, **Font**, **Layout**, **Spacing**, and much more.

---

## Why "Cascading"?

CSS is called "cascading" because multiple style rules can apply to the same element. The browser uses **specificity** and **order** to determine which styles take precedence when there are conflicts.

---

## CSS Selectors and Declarations/Styles

When writing your CSS, you will first select the element or elements that you want to style through the use of a **selector**. Afterwards you will open up a declaration body with `{}`. Within the declaration body, you will then place your **Declarations** or **Styles** which are key-value pairs.

### What Can Selectors Target?

Selectors can target various parts of your HTML:

- **Elements** — Select by HTML tag name (e.g., `p`, `h1`, `div`)
- **Classes** — Select by class attribute (e.g., `.class-name`) *(covered later)*
- **IDs** — Select by id attribute (e.g., `#id-name`) *(covered later)*
- **And more** — Attributes, pseudo-classes, combinations, etc. *(covered later)*

### CSS Declaration Syntax

**Syntax**: `property: value;`
- A colon (`:`) separates the property from its value
- A semicolon (`;`) ends each declaration

**Keys** are the attributes/properties you will be setting, and **values** are what you want to set to the attribute/property.

Example:
```css
h1 {
  color: blue;
  font-size: 24px;
}
```

In this example:
- **`h1`** is the **selector** (targeting all `<h1>` elements)
- **`color`** and **`font-size`** are **properties**
- **`blue`** and **`24px`** are **values**

---


## Inline CSS, Internal CSS, External CSS

### Inline CSS

Inline CSS uses the `style` attribute of HTML elements to write CSS. 

Example:
```html
<p style="color: red; font-size: 18px;">This is inline CSS</p>
```
**NOTE**: It is **highly discouraged** to use inline-style in your production apps. It's considered **bad practice**.

---

### Internal CSS

Internal CSS is when you define your CSS rules within your `<head>` section. You will begin by creating an opening `<style>` tag and closing `</style>` tag. Within these tags you will then place all your CSS rules that will affect the elements in that specific page.

Example:
```html
<head>
  <style>
    p {
      color: green;
      font-size: 16px;
    }
  </style>
</head>
```

---

### External CSS

External CSS is when you have a `.css` file that your HTML document links to via a `<link>` tag in the `<head>` section of your HTML page.

In the `.css` file you will define your multiple CSS rules that will then be applied to the elements in your HTML page. Most of the time you will use `.css` files that you have created and then link to using relative paths. However you can in fact link to other `.css` files that were created by someone else via absolute links.

Example:
```html
<link href="styles.css" rel="stylesheet">
```

**Why is the `rel` attribute required?**  
The `rel="stylesheet"` attribute tells the browser the **relationship** between the HTML document and the linked file—specifically that it's a stylesheet to be used for styling.

> Note: The `<link>` tag is self-closing and does not have a closing tag.

---

### When to Use Each Method

**Internal and External CSS** are used more often for **separation of concerns**.

If you have a lot of lines of CSS, then you use **External CSS**.

---

## Styling Text Properties

Common CSS properties for styling text include:

- **`color`** — Sets the text color
- **`font-family`** — Specifies the font typeface
- **`font-size`** — Sets the size of the text
- **`font-style`** — Defines styles like italic or normal
- **`text-align`** — Aligns text (left, right, center, justify)
- **`text-transform`** — Controls capitalization (uppercase, lowercase, capitalize)
- **`line-height`** — Sets the spacing between lines of text

---

## Interesting Nuggets

- Even though you should only have one `<h1>` in your page, its font size doesn't necessarily have to be larger than all of your other header elements. The purpose of having a single `<h1>` element is for **semantics sake**. So technically, you can have one or more `<h2>` elements that have a larger font size than your `<h1>` element.

- The **default font size** of text is **16px**.

- **Inheritance** was mentioned but will be covered later.

- When styling lists, it's more common to select the `<li>` elements as opposed to the `<ol>` or `<ul>` elements.