# What is Data Visualization?

Data visualization is the process of creating diagrams or visual aids to effectively describe and summarize your data. Effective visualizations allow you to:

- **Explore** your data and discover patterns
- **Communicate** insights clearly to others
- Let the data "tell its own story"

There are various Python packages for creating visualizations, but the most popular and foundational is **Matplotlib**.

---

# Matplotlib

Matplotlib is the foundational visualization library in Python - many other plotting libraries are built on top of it.

**Installation:**

```bash
pip install matplotlib
```

**Importing:**

```python
import matplotlib.pyplot as plt  # Standard convention
```

The `pyplot` subpackage provides a MATLAB-like interface for creating plots.

---

# Creating a Line Plot

To create a line plot, use `plt.plot()` with two arguments:

- **First argument**: x-axis values (horizontal)
- **Second argument**: y-axis values (vertical)

**Example: World population over time**

```python
year = [1950, 1970, 1990, 2010]
pop = [2.519, 3.692, 5.263, 6.972]  # Population in billions

plt.plot(year, pop)  # Create the plot
plt.show()           # Display the plot
```

**Important:** `plt.plot()` tells Python **what** to plot, but `plt.show()` actually **displays** it. This separation allows you to add titles, labels, and other customizations before displaying.

---

# Displaying Visualizations

You must explicitly tell Python to display your plot:

```python
plt.show()
```

This is similar to how you need to use `print()` to display output in scripts. Python is "lazy" and waits for you to call `show()` in case you want to add more elements to the plot first.

---

# Clearing Plots with `plt.clf()`

When working with multiple plots in the same script, you may want to clear the current figure before creating a new one.

**`plt.clf()`** - **C**lear the current **F**igure

This function clears the current figure, removing all plots and allowing you to start fresh.

**Example:**

```python
import matplotlib.pyplot as plt

# First plot
plt.plot([1, 2, 3], [1, 2, 3])
plt.show()

# Clear the figure before creating a new plot
plt.clf()

# Second plot (starts fresh)
plt.scatter([1, 2, 3], [3, 2, 1])
plt.show()
```

**Without `plt.clf()`:** The second plot might overlay on or interfere with the first plot.

**With `plt.clf()`:** Each plot is independent and clean.

**Note:** If you're creating plots in separate code cells (like in Jupyter notebooks) or separate scripts, `plt.clf()` usually isn't necessary. It's most useful when you're creating multiple plots sequentially in the same script or interactive session.

## Related Functions

| Function      | What it does                                      |
| ------------- | ------------------------------------------------- |
| `plt.clf()`   | Clears the entire **figure** (all plots/subplots) |
| `plt.cla()`   | Clears only the current **axes** (single plot)    |
| `plt.close()` | Closes the figure window entirely                 |

For most cases, `plt.clf()` is what you'll need when you want to "reset" before creating a new visualization.

---

# Creating a Scatter Plot

A **scatter plot** displays individual data points without connecting them with lines. This is often more appropriate than line plots because it shows exactly where your data points are located.

**Example:**

```python
year = [1950, 1970, 1990, 2010]
pop = [2.519, 3.692, 5.263, 6.972]  # Population in billions

plt.scatter(year, pop)  # Create scatter plot instead of line plot
plt.show()             # Display the plot
```

## Line Plot vs Scatter Plot

| Line Plot (`plt.plot()`)         | Scatter Plot (`plt.scatter()`)       |
| -------------------------------- | ------------------------------------ |
| Connects data points with lines  | Shows individual points only         |
| Suggests continuous relationship | More "honest" - shows discrete data  |
| Good for showing trends          | Better when you have few data points |

**When to use scatter plots:**

- When you have individual, discrete data points
- When you want to show the exact locations of measurements
- When connecting points with lines might be misleading

---

# Reading the Plot: World Population Growth

Looking at our visualization:

- **1950**: ~2.5 billion people
- **2010**: ~7 billion people
- The world population nearly **tripled** in 60 years

This demonstrates the power of data visualization - complex trends become immediately obvious at a glance!

---

# Key Takeaways

- **Matplotlib** is the foundational Python visualization library
- Import with: `import matplotlib.pyplot as plt`
- **Line plots**: `plt.plot(x, y)` - connects points with lines
- **Scatter plots**: `plt.scatter(x, y)` - shows individual points
- **Always call** `plt.show()` to display your plots
- Choose scatter plots when you want to be "honest" about having discrete data points
