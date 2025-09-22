---
title: "High-Level Overview of Web Development"
description: "Describes the basic fundamental pieces and processes of Web Dev."
---

## General Flow of a Website/Web Application

- **Client** = A user with a browser visiting a website
- **Server** = A computer/system that is hosting the website

1.  The Client sends a request to a Server by typing in the website's
    domain in their browser.
2.  The Server receives the request, gathers all the files associated
    with the website, and sends them back to the Client as a response.
3.  The Client receives the files, and the website is rendered and
    viewable within their browser.

---

## Static vs. Dynamic Websites

**Static Websites**

- Files never change and always render the same way for every visitor.

**Dynamic Websites**

- Files/content change depending on data outside of the website's
  files.
- Examples of dynamic content sources:
- Data from a Database
- Data from a Backend Service

**Easy ways to tell:**

- If the website has no Backend functionality → the website is **Static**.
- If the files are exactly the same before being stored on the Server
  and after being sent to the Client → the website is **Static**.

**Note:**\
There is such a thing as a Static Website with Dynamic capabilities. Example: A website's files don't change
from being stored on the Server to being sent to the Client. On the surface you would think this is a Static Website.
However let's say once the website is rendered, some Javascript is run which contacts an API and then depending on the
response, some UI components are changed/updated. In this example, although the files didn't change from the Server to
the Client, they were dynamically updated afterwards on the Frontend through Javascript.

#### In Summary:

1. True static sites (files never change, no dynamic updates)
2. Static-generated sites with dynamic behavior (files are the same from server to client, but JavaScript modifies content after load—e.g., fetching data from an API)
3. Dynamic sites (server customizes the response before sending it to the client)

---

## The 3 Languages of Front-End Development

1.  **HTML** → Contains all the content and elements of your Website
2.  **CSS** → Styles all your content and makes it aesthetically
    pleasing
3.  **JavaScript** → Handles frontend logic and is responsible for
    interactivity and animations on the UI
