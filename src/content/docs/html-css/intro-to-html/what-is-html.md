---
title: "What is HTML?"
description: "General introduction of the HTML language and syntax."
---

**HTML** = HyperText Markup Language

- HTML is **NOT** a programming language. It is a _markup language_.
- A markup language describes what content will be displayed on a web page and how it will be structured.
- There is no logic that can be written using strictly HTML.
- HTML is understood by Web Browsers which allows the browser to render the language into a web page that is viewable by the User.

---

## Basic Anatomy of an HTML Element

Example:

```html
<p>HTML is a Markup Language</p>
```

1. **Opening tag**: Name of the element encased with `<` and `>`.
2. **Content**: Any text or elements placed between the opening and closing tags.
   - Elements can also be **nested** inside each other.  
     Example:
     ```html
     <p>This is <strong>important</strong> text.</p>
     ```
3. **Closing tag**: Name of the element encased with `</` and `>`.
   - Some elements do not have content and therefore don’t need a closing tag. These are called **void elements** (e.g., `br`, `hr`, `img`, `meta`, `link`).  
     Example:
     ```html
     <br />
     ```

---

## Basic Structure of an HTML Document

```html
<!DOCTYPE html> <!-- 1 -->

<html lang="en"> <!-- 2 -->

  <head> <!-- 3 -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My first webpage</title>
  </head> <!-- 3 -->

  <body> <!-- 4 -->
    <h1>Hello, world!</h1>
    <p>My name is Alfy, and this is my very first webpage :D</p>
  </body> <!-- 4 -->

</html> <!-- 2 -->
```

1. **`<!DOCTYPE html>`** — A declaration placed at the top of an HTML document that tells the browser to render the page in **HTML5 standards mode**. Without it, browsers fall back to _quirks mode_ (emulating old 1990s/2000s browser behavior).
2. **`<html>`** — Root element of the page. All other HTML elements must go inside these tags.
3. **`<head>`** — Contains information about the page that isn’t directly shown to the user, such as the title, metadata, and links to CSS/JS files.
4. **`<body>`** — Contains all visible content that will be displayed to the user, such as headings, paragraphs, images, and links.

---

### Is the DOCTYPE declaration really necessary?

Technically, you can omit the DOCTYPE declaration and the browser will still render your HTML. However, without it the browser will enter **quirks mode**, which can cause HTML, CSS, and even JavaScript to behave inconsistently across browsers.

By including `<!DOCTYPE html>` at the top of your document, you ensure that the browser treats the page as a **modern HTML5 document**, enabling consistent behavior and access to the latest features.
