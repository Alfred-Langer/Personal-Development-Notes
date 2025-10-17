---
title: "Semantic Elements Example: Recipe Website"
description: "Real-world website example using Article, Section, and Aside elements"
---

# Recipe Website Semantic HTML Examples

This document shows three different pages from a recipe website and explains when and why to use `<article>`, `<section>`, and `<aside>` elements.

---

## Page 1: Recipe Listing Homepage

**Purpose:** Display a list of available recipes

```html
<body>
  <header>
    <h1>Delicious Recipes</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/desserts">Desserts</a>
      <a href="/dinner">Dinner</a>
    </nav>
  </header>

  <main>
    <h2>Latest Recipes</h2>
    
    <!-- ARTICLE: Complete recipe preview #1 -->
    <article>
      <img src="chocolate-cookies.jpg" alt="Chocolate chip cookies">
      <h3>Chocolate Chip Cookies</h3>
      <p>Classic homemade cookies with gooey chocolate chips. Ready in 30 minutes!</p>
      <p>Prep: 10 min | Cook: 12 min | Servings: 24 cookies</p>
      <a href="/recipes/chocolate-chip-cookies">View Recipe</a>
    </article>
    
    <!-- ARTICLE: Complete recipe preview #2 -->
    <article>
      <img src="spaghetti.jpg" alt="Spaghetti carbonara">
      <h3>Spaghetti Carbonara</h3>
      <p>Authentic Italian pasta with crispy bacon and creamy sauce.</p>
      <p>Prep: 5 min | Cook: 15 min | Servings: 4</p>
      <a href="/recipes/spaghetti-carbonara">View Recipe</a>
    </article>
    
    <!-- ARTICLE: Complete recipe preview #3 -->
    <article>
      <img src="stir-fry.jpg" alt="Chicken stir fry">
      <h3>Chicken Stir Fry</h3>
      <p>Quick and healthy weeknight dinner with colorful vegetables.</p>
      <p>Prep: 15 min | Cook: 10 min | Servings: 4</p>
      <a href="/recipes/chicken-stir-fry">View Recipe</a>
    </article>
  </main>
  
  <!-- ASIDE: Bonus content - cooking tips -->
  <aside>
    <h2>Kitchen Tips</h2>
    <ul>
      <li>Always preheat your oven for best results</li>
      <li>Use room temperature eggs for baking</li>
      <li>Taste as you cook and adjust seasonings</li>
    </ul>
  </aside>
  
  <!-- ASIDE: Bonus content - newsletter signup -->
  <aside>
    <h2>Get Weekly Recipes</h2>
    <p>Sign up for our newsletter and get new recipes delivered to your inbox!</p>
    <form>
      <input type="email" placeholder="Your email">
      <button>Subscribe</button>
    </form>
  </aside>

  <footer>
    <p>&copy; 2025 Delicious Recipes</p>
  </footer>
</body>
```

### Element Breakdown for Page 1:

**`<article>` Elements (Recipe Previews):**
- **Why `<article>`?** Each recipe preview is self-contained and complete. You can understand what the recipe is, how long it takes, and how many servings it makes without needing any other information from the page.
- Each preview has a title, description, timing info, and link - everything needed to understand that recipe option.
- These ARE the main content of this page - users came here to see recipe options.

**`<aside>` Elements (Kitchen Tips & Newsletter):**
- **Why `<aside>`?** These are bonus sections that aren't why users came to this page.
- Kitchen Tips: Nice to have, but not essential for browsing recipes. If removed, the page still works perfectly.
- Newsletter Signup: Related to recipes but supplementary. Users can still browse recipes without signing up.
- Both could be deleted and the main purpose of the page (showing recipes) remains intact.

**Why NOT `<section>` here?**
- The recipe previews aren't "parts" of something larger - they're individual complete items.
- We're not organizing one large piece of content into chapters/parts.

---

## Page 2: Single Recipe Page

**Purpose:** Display complete instructions for one specific recipe

```html
<body>
  <header>
    <h1>Delicious Recipes</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/desserts">Desserts</a>
      <a href="/dinner">Dinner</a>
    </nav>
  </header>

  <main>
    <!-- ARTICLE: The complete recipe -->
    <article>
      <h1>Chocolate Chip Cookies</h1>
      <img src="chocolate-cookies-large.jpg" alt="Freshly baked chocolate chip cookies">
      <p>These classic chocolate chip cookies are crispy on the edges, soft in the middle, and loaded with chocolate chips. Perfect for any occasion!</p>
      
      <div class="recipe-meta">
        <span>Prep Time: 10 minutes</span>
        <span>Cook Time: 12 minutes</span>
        <span>Total Time: 22 minutes</span>
        <span>Servings: 24 cookies</span>
      </div>
      
      <!-- SECTION: Part 1 of the recipe -->
      <section>
        <h2>Ingredients</h2>
        <ul>
          <li>2 cups all-purpose flour</li>
          <li>1 teaspoon baking soda</li>
          <li>1/2 teaspoon salt</li>
          <li>1 cup unsalted butter, softened</li>
          <li>3/4 cup granulated sugar</li>
          <li>3/4 cup brown sugar</li>
          <li>2 large eggs</li>
          <li>2 teaspoons vanilla extract</li>
          <li>2 cups chocolate chips</li>
        </ul>
      </section>
      
      <!-- SECTION: Part 2 of the recipe -->
      <section>
        <h2>Instructions</h2>
        <ol>
          <li>Preheat your oven to 350°F (175°C). Line baking sheets with parchment paper.</li>
          <li>In a medium bowl, whisk together flour, baking soda, and salt. Set aside.</li>
          <li>In a large bowl, cream together butter, granulated sugar, and brown sugar until light and fluffy.</li>
          <li>Beat in eggs one at a time, then stir in vanilla extract.</li>
          <li>Gradually blend in the flour mixture until just combined.</li>
          <li>Fold in chocolate chips.</li>
          <li>Drop rounded tablespoons of dough onto prepared baking sheets, spacing them 2 inches apart.</li>
          <li>Bake for 10-12 minutes, or until edges are golden brown.</li>
          <li>Cool on baking sheet for 5 minutes before transferring to a wire rack.</li>
        </ol>
      </section>
      
      <!-- SECTION: Part 3 of the recipe -->
      <section>
        <h2>Nutrition Information</h2>
        <p>Per cookie (approximate):</p>
        <ul>
          <li>Calories: 180</li>
          <li>Fat: 9g</li>
          <li>Carbohydrates: 24g</li>
          <li>Protein: 2g</li>
          <li>Sugar: 15g</li>
        </ul>
      </section>
      
      <!-- SECTION: Part 4 of the recipe -->
      <section>
        <h2>Chef's Tips</h2>
        <ul>
          <li>For chewier cookies, slightly underbake them and let them finish cooking on the hot pan.</li>
          <li>Use room temperature butter for best results - it should be soft but not melted.</li>
          <li>Don't overmix the dough after adding flour, or cookies will be tough.</li>
          <li>Cookies can be stored in an airtight container for up to 5 days.</li>
        </ul>
      </section>
      
      <footer>
        <p>Published on October 6, 2025 by Chef Maria Rodriguez</p>
      </footer>
    </article>
    
    <!-- ASIDE: Bonus content - author info -->
    <aside>
      <h2>About Chef Maria</h2>
      <img src="chef-maria.jpg" alt="Chef Maria Rodriguez">
      <p>Chef Maria Rodriguez is a pastry chef with 15 years of experience. She specializes in classic American desserts with a modern twist.</p>
      <a href="/chefs/maria">View all recipes by Maria</a>
    </aside>
    
    <!-- ASIDE: Bonus content - related recipes -->
    <aside>
      <h2>You Might Also Like</h2>
      <ul>
        <li><a href="/recipes/oatmeal-cookies">Oatmeal Raisin Cookies</a></li>
        <li><a href="/recipes/double-chocolate-cookies">Double Chocolate Cookies</a></li>
        <li><a href="/recipes/peanut-butter-cookies">Peanut Butter Cookies</a></li>
        <li><a href="/recipes/sugar-cookies">Classic Sugar Cookies</a></li>
      </ul>
    </aside>
    
    <!-- ASIDE: Bonus content - user tips -->
    <aside>
      <h2>Reader Tips</h2>
      <blockquote>
        <p>"I added walnuts to these and they were amazing!" - Sarah K.</p>
      </blockquote>
      <blockquote>
        <p>"Freezing the dough balls and baking from frozen works great for fresh cookies anytime." - David M.</p>
      </blockquote>
    </aside>
  </main>

  <footer>
    <p>&copy; 2025 Delicious Recipes</p>
  </footer>
</body>
```

### Element Breakdown for Page 2:

**`<article>` Element (The Recipe):**
- **Why `<article>`?** The entire recipe is self-contained and complete. Someone could save just this article and have everything they need to make the cookies.
- It includes the title, description, timing, ingredients, instructions, nutrition, and tips - a complete package.
- This IS the main content - users came to this page specifically for this recipe.

**`<section>` Elements (Ingredients, Instructions, Nutrition, Tips):**
- **Why `<section>`?** Each of these is a part/chapter of the larger recipe.
- Ingredients: One organized part of the recipe
- Instructions: Another organized part of the recipe
- Nutrition: Another part providing additional info about the recipe
- Chef's Tips: Another part with helpful advice for making the recipe
- Together, these sections form the complete recipe. None of them make sense alone - you need all the parts.

**`<aside>` Elements (About Chef, Related Recipes, Reader Tips):**
- **Why `<aside>`?** These are bonus sections that enhance but aren't essential to making the cookies.
- About Chef: Interesting but not needed to bake the cookies. If removed, you can still make the recipe perfectly fine.
- Related Recipes: Helpful suggestions but not essential to this recipe. Could be deleted without affecting the main content.
- Reader Tips: Nice additional ideas but supplementary. The recipe works without these community suggestions.

**Why this structure?**
- The recipe (article) is the main complete content
- The sections organize the recipe into logical parts
- The asides provide bonus information around the recipe

---

## Page 3: Recipe Category Page

**Purpose:** Display recipes organized by type/category

```html
<body>
  <header>
    <h1>Delicious Recipes</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/desserts">Desserts</a>
      <a href="/dinner">Dinner</a>
    </nav>
  </header>

  <main>
    <h1>Dessert Recipes</h1>
    <p>Satisfy your sweet tooth with our collection of delicious dessert recipes, from cookies to cakes!</p>
    
    <!-- SECTION: Groups cookie recipes together -->
    <section>
      <h2>Cookies</h2>
      <p>Classic and creative cookie recipes for every occasion.</p>
      
      <!-- ARTICLE: Complete recipe preview -->
      <article>
        <img src="chocolate-cookies.jpg" alt="Chocolate chip cookies">
        <h3>Chocolate Chip Cookies</h3>
        <p>Classic homemade cookies with gooey chocolate chips.</p>
        <p>Prep: 10 min | Cook: 12 min</p>
        <a href="/recipes/chocolate-chip-cookies">View Recipe</a>
      </article>
      
      <!-- ARTICLE: Complete recipe preview -->
      <article>
        <img src="oatmeal-cookies.jpg" alt="Oatmeal raisin cookies">
        <h3>Oatmeal Raisin Cookies</h3>
        <p>Chewy oatmeal cookies packed with raisins and cinnamon.</p>
        <p>Prep: 10 min | Cook: 12 min</p>
        <a href="/recipes/oatmeal-cookies">View Recipe</a>
      </article>
      
      <!-- ARTICLE: Complete recipe preview -->
      <article>
        <img src="sugar-cookies.jpg" alt="Sugar cookies">
        <h3>Sugar Cookies</h3>
        <p>Soft and buttery cookies perfect for decorating.</p>
        <p>Prep: 15 min | Cook: 10 min</p>
        <a href="/recipes/sugar-cookies">View Recipe</a>
      </article>
    </section>
    
    <!-- SECTION: Groups cake recipes together -->
    <section>
      <h2>Cakes</h2>
      <p>Moist and delicious cakes for celebrations or everyday treats.</p>
      
      <!-- ARTICLE: Complete recipe preview -->
      <article>
        <img src="chocolate-cake.jpg" alt="Chocolate cake">
        <h3>Classic Chocolate Cake</h3>
        <p>Rich, moist chocolate cake with chocolate frosting.</p>
        <p>Prep: 20 min | Cook: 35 min</p>
        <a href="/recipes/chocolate-cake">View Recipe</a>
      </article>
      
      <!-- ARTICLE: Complete recipe preview -->
      <article>
        <img src="vanilla-cake.jpg" alt="Vanilla cake">
        <h3>Vanilla Birthday Cake</h3>
        <p>Light and fluffy vanilla cake with buttercream frosting.</p>
        <p>Prep: 25 min | Cook: 30 min</p>
        <a href="/recipes/vanilla-cake">View Recipe</a>
      </article>
      
      <!-- ARTICLE: Complete recipe preview -->
      <article>
        <img src="carrot-cake.jpg" alt="Carrot cake">
        <h3>Carrot Cake</h3>
        <p>Spiced carrot cake with cream cheese frosting and walnuts.</p>
        <p>Prep: 20 min | Cook: 40 min</p>
        <a href="/recipes/carrot-cake">View Recipe</a>
      </article>
    </section>
    
    <!-- SECTION: Groups pie recipes together -->
    <section>
      <h2>Pies</h2>
      <p>From fruity to creamy, these pies are always a crowd-pleaser.</p>
      
      <!-- ARTICLE: Complete recipe preview -->
      <article>
        <img src="apple-pie.jpg" alt="Apple pie">
        <h3>Classic Apple Pie</h3>
        <p>Traditional apple pie with flaky crust and cinnamon apples.</p>
        <p>Prep: 30 min | Cook: 50 min</p>
        <a href="/recipes/apple-pie">View Recipe</a>
      </article>
      
      <!-- ARTICLE: Complete recipe preview -->
      <article>
        <img src="pumpkin-pie.jpg" alt="Pumpkin pie">
        <h3>Pumpkin Pie</h3>
        <p>Creamy pumpkin pie spiced perfectly for fall.</p>
        <p>Prep: 15 min | Cook: 55 min</p>
        <a href="/recipes/pumpkin-pie">View Recipe</a>
      </article>
    </section>
  </main>
  
  <!-- ASIDE: Bonus content - baking tips -->
  <aside>
    <h2>Baking Success Tips</h2>
    <ul>
      <li>Always measure flour correctly - spoon it into the measuring cup and level it off</li>
      <li>Bring eggs and butter to room temperature before baking</li>
      <li>Invest in an oven thermometer - many ovens run hot or cold</li>
      <li>Don't open the oven door during baking - it releases heat and affects rising</li>
    </ul>
  </aside>
  
  <!-- ASIDE: Bonus content - seasonal suggestions -->
  <aside>
    <h2>Seasonal Favorites</h2>
    <p>This month's most popular desserts:</p>
    <ol>
      <li><a href="/recipes/pumpkin-pie">Pumpkin Pie</a></li>
      <li><a href="/recipes/apple-crisp">Apple Crisp</a></li>
      <li><a href="/recipes/cinnamon-rolls">Cinnamon Rolls</a></li>
    </ol>
  </aside>

  <footer>
    <p>&copy; 2025 Delicious Recipes</p>
  </footer>
</body>
```

### Element Breakdown for Page 3:

**`<section>` Elements (Cookies, Cakes, Pies):**
- **Why `<section>`?** Each section groups recipes by category/theme.
- Cookies Section: Groups all cookie recipes together under one thematic heading
- Cakes Section: Groups all cake recipes together under one thematic heading  
- Pies Section: Groups all pie recipes together under one thematic heading
- These sections help organize the page's content into logical categories. They're part of the overall "Dessert Recipes" page structure.

**`<article>` Elements (Recipe Previews):**
- **Why `<article>`?** Each recipe preview is self-contained and complete.
- Each has a title, image, description, timing, and link - everything needed to understand that recipe option.
- You can understand what each recipe is without needing information from other previews or from the section heading.
- Even though they're grouped in sections, each preview stands alone as complete content.

**`<aside>` Elements (Baking Tips, Seasonal Favorites):**
- **Why `<aside>`?** These are bonus sections that aren't the main purpose of the page.
- Baking Success Tips: Helpful advice but not why users came to this page. They came to browse dessert recipes, not learn general baking tips.
- Seasonal Favorites: Nice suggestion list but supplementary. If removed, users can still browse all the dessert recipes just fine.
- Both could be deleted and the main function (browsing desserts by category) remains intact.

**Why this structure?**
- Sections organize recipes into categories (Cookies, Cakes, Pies)
- Articles are the individual recipe previews within each category
- Asides provide bonus tips and suggestions around the main content

---

## Summary

### Key Patterns Across All Three Pages:

**`<article>` is used for:**
- Recipe previews (self-contained cards with title, description, timing)
- Complete recipes (full instructions with all details needed)
- Each article can stand alone and be understood without surrounding content

**`<section>` is used for:**
- Parts of a recipe (Ingredients, Instructions, Nutrition sections)
- Category groupings (Cookies section, Cakes section, Pies section)
- Organizing larger content into logical chapters/parts

**`<aside>` is used for:**
- Kitchen tips and baking advice
- Author bios
- Related recipe suggestions
- Newsletter signups
- User comments/tips
- Seasonal recommendations
- Any "bonus" content that enhances but isn't essential

### The Decision Framework:

1. **Is this complete content on its own?** → `<article>`
2. **Is this a part/chapter of something bigger?** → `<section>`
3