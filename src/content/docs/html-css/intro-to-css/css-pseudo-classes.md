---
title: "CSS Pseudo-Classes"
description: "Introduction to CSS Pseudo-Classes and common use cases"
---

## What are Pseudo-Classes?

A **pseudo-class** is a special type of CSS selector that targets elements in a specific **state** or **position** within the document structure.

**Key Characteristics:**

- Pseudo-classes begin with a colon (`:`)
- They can be used alone or combined with other selectors
- They select elements based on their state or relationship to other elements

**Syntax:**

```css
selector:pseudo-class {
  property: value;
}
```

**Example:**

```css
a:hover {
  color: red;
}
```

This targets all `<a>` elements when the user hovers over them.

---

## Common Structural Pseudo-Classes

These pseudo-classes target elements based on their position in the document structure.

### `:first-child`

Selects an element that is the **first child** of its parent.

**Example:**

```css
li:first-child {
  font-weight: bold;
}
```

```html
<ul>
  <li>First item - BOLD</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

### `:last-child`

Selects an element that is the **last child** of its parent.

**Example:**

```css
li:last-child {
  color: blue;
}
```

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Last item - BLUE</li>
</ul>
```

### `:nth-child(n)`

Selects the **nth child** of its parent. The `n` can be:

- A number (e.g., `3` for the third child)
- A keyword (`odd` or `even`)
- A formula (e.g., `2n` for every second child)

**Examples:**

```css
/* Select the 3rd list item */
li:nth-child(3) {
  background-color: yellow;
}

/* Select all odd list items */
li:nth-child(odd) {
  background-color: lightgray;
}

/* Select all even list items */
li:nth-child(even) {
  background-color: white;
}

/* Select every 3rd item starting from the first */
li:nth-child(3n) {
  font-weight: bold;
}
```

**Common Use Case - Alternating Table Rows:**

```css
tr:nth-child(odd) {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: white;
}
```

---

## Important Limitation of `:child` Pseudo-Classes

The `:first-child`, `:last-child`, and `:nth-child()` pseudo-classes work best when all children of a parent are the **same type of element**.

They can be problematic when a parent has **mixed child elements**.

### Example of the Problem:

**HTML:**

```html
<div>
  <p>Pants are cool!</p>
  <a href="">Click here to visit my Pants website</a>
</div>
```

**CSS:**

```css
a:first-child {
  color: red;
}
```

**Result:** The link will **NOT** be red because the `<a>` tag is not the first child of the `<div>`. The `<p>` tag is the first child.

### Solution: Use `:first-of-type` Instead

For mixed child elements, use the `:of-type` variants:

- `:first-of-type`
- `:last-of-type`
- `:nth-of-type(n)`

**Example:**

```css
a:first-of-type {
  color: red;
}
```

Now the link WILL be red because it's the first `<a>` element within the parent, even though it's not the first child overall.

---

## Common Interactive Pseudo-Classes

These pseudo-classes target elements based on user interaction.

### `:hover`

Applies styles when the user hovers over an element with their mouse.

**Example:**

```css
button:hover {
  background-color: blue;
  cursor: pointer;
}
```

**Common Use Case:**

```css
a:hover {
  text-decoration: underline;
  color: orange;
}
```

### `:active`

Applies styles when an element is being activated (e.g., the moment a button is clicked).

**Example:**

```css
button:active {
  background-color: darkblue;
  transform: scale(0.95);
}
```

### `:focus`

Applies styles when an element has focus (e.g., when a user clicks into an input field or tabs to a link).

**Example:**

```css
input:focus {
  border: 2px solid blue;
  outline: none;
}

a:focus {
  outline: 2px solid orange;
}
```

**Accessibility Note:** Never remove focus indicators without providing an alternative. Users who navigate with keyboards rely on these visual cues.

### `:visited`

Applies styles to links that the user has already visited.

**Example:**

```css
a:visited {
  color: purple;
}
```

**Security Note:** Due to privacy concerns, browsers limit which CSS properties can be styled with `:visited` (mainly just color-related properties).

---

## Form-Related Pseudo-Classes

These pseudo-classes are particularly useful for styling form inputs.

### `:disabled`

Targets form elements that are disabled.

**Example:**

```css
input:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}
```

```html
<input type="text" value="Can't edit me" disabled />
```

### `:enabled`

Targets form elements that are enabled (opposite of `:disabled`).

**Example:**

```css
input:enabled {
  border: 1px solid green;
}
```

### `:checked`

Targets checkboxes or radio buttons that are checked.

**Example:**

```css
input[type="checkbox"]:checked {
  outline: 2px solid green;
}
```

### `:required`

Targets form inputs that have the `required` attribute.

**Example:**

```css
input:required {
  border-left: 3px solid red;
}
```

### `:optional`

Targets form inputs that do NOT have the `required` attribute.

**Example:**

```css
input:optional {
  border-left: 3px solid gray;
}
```

### `:valid` and `:invalid`

These target form inputs based on whether their current value is valid according to their constraints.

**Example:**

```css
input:valid {
  border: 2px solid green;
}

input:invalid {
  border: 2px solid red;
}
```

```html
<input type="email" required />
<!-- Red border until a valid email is entered, then green -->
```

---

## Negation Pseudo-Class

### `:not()`

Selects elements that do **NOT** match a given selector.

**Examples:**

```css
/* Select all list items except the first one */
li:not(:first-child) {
  margin-top: 10px;
}

/* Select all paragraphs that don't have the class "intro" */
p:not(.intro) {
  font-size: 14px;
}

/* Select all inputs that are not disabled */
input:not(:disabled) {
  background-color: white;
}
```

---

## Combining Pseudo-Classes

You can chain multiple pseudo-classes together for more specific targeting.

**Examples:**

```css
/* Style links on hover that have NOT been visited */
a:hover:not(:visited) {
  color: orange;
}

/* Style the first list item when hovered */
li:first-child:hover {
  background-color: lightblue;
}

/* Style required inputs that are invalid */
input:required:invalid {
  border: 2px solid red;
  background-color: #ffe6e6;
}
```

---

## Practical Examples

### Example 1: Styled Navigation Menu

```css
/* Default link style */
nav a {
  color: black;
  text-decoration: none;
  padding: 10px;
}

/* Hover effect */
nav a:hover {
  background-color: lightblue;
}

/* Active/clicked state */
nav a:active {
  background-color: darkblue;
  color: white;
}

/* Visited links */
nav a:visited {
  color: gray;
}
```

### Example 2: Alternating Table Rows

```css
/* Zebra striping for table rows */
table tr:nth-child(odd) {
  background-color: #f9f9f9;
}

table tr:nth-child(even) {
  background-color: white;
}

/* Hover effect on rows */
table tr:hover {
  background-color: #e6f2ff;
  cursor: pointer;
}
```

### Example 3: Form Validation Feedback

```css
/* Required fields have a red asterisk indicator */
input:required {
  border-left: 3px solid red;
}

/* Valid inputs get green border */
input:valid {
  border-left: 3px solid green;
}

/* Invalid inputs get red background tint */
input:invalid:not(:focus) {
  background-color: #ffe6e6;
}

/* Focused inputs get blue border */
input:focus {
  outline: none;
  border: 2px solid blue;
}
```

### Example 4: List with Special First and Last Items

```css
ul li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

/* First item gets no top border */
ul li:first-child {
  border-top: none;
  font-weight: bold;
}

/* Last item gets no bottom border */
ul li:last-child {
  border-bottom: none;
  font-style: italic;
}

/* All items except first have top margin */
ul li:not(:first-child) {
  margin-top: 5px;
}
```

---

## Best Practices

1. **Use Pseudo-Classes for State, Not Content**

   - Pseudo-classes are ideal for styling different states (hover, focus, checked)
   - For content-based styling, regular classes are often clearer

2. **Don't Over-Rely on `:nth-child()`**

   - If you find yourself using complex `:nth-child()` formulas, consider if adding a class would be clearer
   - Exception: Alternating table/list rows where `:nth-child(odd/even)` is perfect

3. **Consider `:of-type` for Mixed Content**

   - Use `:first-of-type`, `:last-of-type`, etc. when parent has mixed child elements
   - Use `:first-child`, `:last-child`, etc. when all children are the same element type

4. **Always Maintain Focus Indicators**

   - Never remove `:focus` styling without providing an alternative
   - Keyboard users need visual feedback

5. **Test Hover States on Touch Devices**
   - `:hover` doesn't work well on touchscreens
   - Consider using `:active` or `:focus` as fallbacks

---

## Quick Reference

| Pseudo-Class      | Targets                            |
| ----------------- | ---------------------------------- |
| `:first-child`    | First child of parent              |
| `:last-child`     | Last child of parent               |
| `:nth-child(n)`   | Nth child of parent                |
| `:first-of-type`  | First element of its type          |
| `:last-of-type`   | Last element of its type           |
| `:nth-of-type(n)` | Nth element of its type            |
| `:hover`          | Element when mouse is over it      |
| `:active`         | Element while being clicked        |
| `:focus`          | Element with keyboard/input focus  |
| `:visited`        | Links that have been visited       |
| `:disabled`       | Disabled form elements             |
| `:enabled`        | Enabled form elements              |
| `:checked`        | Checked checkboxes/radio buttons   |
| `:required`       | Required form inputs               |
| `:optional`       | Optional form inputs               |
| `:valid`          | Form inputs with valid values      |
| `:invalid`        | Form inputs with invalid values    |
| `:not(selector)`  | Elements that don't match selector |

---

## Summary

Pseudo-classes are powerful CSS selectors that let you target elements based on their state, position, or user interaction. They're essential for:

- Creating interactive hover effects
- Styling alternating rows in tables/lists
- Providing form validation feedback
- Improving accessibility with focus states
- Selecting specific elements without adding extra classes

Remember to use them thoughtfully - sometimes a simple class is clearer than a complex pseudo-class selector!
