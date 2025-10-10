---
title: "Images and Attributes"
description: "Introduction to <img> tag and HTML attributes"
---

## Images in HTML (`<img>`)

To place images within your web page, you use the `<img>` tag.  

Example:
```html
<img src="my-headshot.png" alt="A picture of my headshot" width="50" height="100">
```

> Note: Unlike most elements we’ve worked with so far that have both an opening and closing tag, the `<img>` tag is a **void element**. Void elements do not wrap content, so they don’t have a closing tag.  

> In HTML5, you can simply write `<img ...>`. Writing `<img ... />` with a trailing slash is also valid, but optional.  

Correct:
```html
<img src="example.png" alt="Example Image" width="50" height="50">
```

Also Valid:
```html
<img src="example.png" alt="Example Image" width="50" height="50"/>
```

Incorrect:
```html
<img src="example.png" alt="Example Image" width="50" height="50"></img>
```

---

## How to use the `<img>` Tag

The `<img>` tag commonly uses four attributes:

1. **`src` (source)** — Pathway to the image file you want to display. Can be a relative path (e.g., `images/photo.png`) or an absolute URL (e.g., `https://example.com/photo.png`). *Required*  
2. **`alt` (alternate text)** — A description of the image. Displayed as text if the image can’t be loaded. Also essential for accessibility. *Strongly recommended*  
3. **`width`** — The width of the image in pixels (default unit). Other units (%, em, etc.) are typically applied via CSS. *Optional*  
4. **`height`** — The height of the image in pixels (default unit). Other units usually set via CSS. *Optional*  

---

### Why `alt` is Important

- **Accessibility**: Screen readers use the `alt` text to describe images to visually impaired users. Without it, the image content is lost to them.  
- **Fallback**: If the image fails to load, the `alt` text will be displayed instead.  
- **SEO (Search Engine Optimization)**: Search engines rely on `alt` text to understand image content. Descriptive `alt` text helps your images appear in image search results and improves overall page relevance.  

> Tip: Write `alt` text that is descriptive but concise. For purely decorative images, use `alt=""` so screen readers skip them.

---

### What Happens if You Don’t Provide Width/Height?

If you don’t set the width or height of an `<img>`, the image will display at its **original source dimensions**.  
Setting width/height can help browsers reserve layout space in advance, reducing layout shifts while pages load.  

> Note: Image width and height aren't typically set with HTML attributes nowadays as CSS is often responsible for that. For now we can use them but just note that we should using CSS to handle image sizing.

---

## What Are Attributes?

Attributes are properties you set within the opening tag of an element that help define its behavior and functionality.  

Examples of attributes for `<img>`: `src`, `alt`, `width`, `height`.  
As you become more familiar with HTML, you’ll see many more attributes that can be set and modified.  

---

## Other Common Notable Attributes

### The `lang` Attribute for the `<html>` Tag

Defines the **primary language** of the webpage content.  

Example:  
```html
<html lang="en">
```
- `lang="en"` → English  
- `lang="fr"` → French  
- `lang="es"` → Spanish  

Why it matters:  
- **Accessibility**: Screen readers use it to apply correct pronunciation rules.  
- **SEO**: Search engines use it to determine the page’s language for indexing and search results.  
- **Internationalization**: Makes it easier to adapt your site for different languages and audiences.  
>Example: Chrome and other modern browsers will attempt to translate text if the website is not in the user's native language. By specifying the language, Chrome knows for sure what the language of the source text is. Without it, Chrome will have to guess which could result in mistranslations.

---

### The `charset` Attribute for the `<meta>` Tag

Defines the **character encoding** for the webpage.  

Example:  
```html
<head>
  <meta charset="UTF-8">
</head>
```

Why it matters:  
- `UTF-8` is the modern web standard. It supports nearly all characters: letters, numbers, accented characters (é, ñ), symbols (€, ©), and even emojis (😊).  
- Without specifying encoding, browsers will guess which encoding to use which can result in broken characters or “mojibake” (garbled text).  
- Always include it at the top of your `<head>` so the browser knows how to interpret the page’s content correctly.  
