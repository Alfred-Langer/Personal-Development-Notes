# The Goal: Clear Communication

Creating a plot is easy. Creating the **right** plot that clearly communicates your message is the real challenge.

For every visualization, consider:

1. **The data**: What type of data do you have? What are its characteristics?
2. **The story**: What insight or message do you want to convey?
3. **The audience**: Who will view this? What context do they need?

## Key Customization Options

| Customization        | Purpose                                               |
| -------------------- | ----------------------------------------------------- |
| **Plot type**        | Line, scatter, histogram, etc. - choose based on data |
| **Axis labels**      | Tell viewers what each axis represents                |
| **Title**            | Provide context and main message                      |
| **Tick marks**       | Control scale and add units                           |
| **Grid lines**       | Make it easier to read values                         |
| **Text annotations** | Highlight specific data points or add notes           |
| **Colors**           | Distinguish data series or highlight key information  |

The best way to learn customization is through **practice and examples**.

---

# Labeling Axes

Use `plt.xlabel()` and `plt.ylabel()` to add descriptive labels to your axes:

```python
import matplotlib.pyplot as plt

year = [1950, 1970, 1990, 2010]
pop = [2.519, 3.692, 5.263, 6.972]

plt.plot(year, pop)
plt.xlabel("Year")
plt.ylabel("Population (billions)")
plt.show()  # Always call customizations BEFORE show()
```

**Important:** Call `xlabel()`, `ylabel()`, and other customizations **before** `plt.show()`, otherwise they won't be displayed.

---

# Adding a Title

Use `plt.title()` to add a descriptive title that explains what the visualization shows:

```python
plt.plot(year, pop)
plt.xlabel("Year")
plt.ylabel("Population (billions)")
plt.title("World Population Projections")
plt.show()
```

The title helps viewers immediately understand the purpose and context of your visualization.

---

# Customizing Axis Ticks

Matplotlib automatically determines tick marks based on your data, but you can customize them for better clarity.

## Setting Tick Positions with `yticks()` and `xticks()`

Control where tick marks appear on your axes:

```python
# Extended data with projections to 2100
year = [1950, 1970, 1990, 2010, 2030, 2050, 2070, 2090, 2100]
pop = [2.519, 3.692, 5.263, 6.972, 8.5, 9.8, 10.5, 11.0, 11.2]

plt.plot(year, pop)
plt.xlabel("Year")
plt.ylabel("Population")

# Set y-axis ticks from 0 to 12 with intervals of 2
plt.yticks([0, 2, 4, 6, 8, 10, 12])

plt.show()
```

**Why customize ticks?**

- Starting the y-axis at 0 shows the full scale of growth
- Consistent intervals make the plot easier to read
- Puts data in proper perspective

## Custom Tick Labels

You can provide custom labels for your tick marks using a second argument:

```python
plt.plot(year, pop)
plt.xlabel("Year")
plt.ylabel("Population")

# First argument: tick positions
# Second argument: custom labels for those positions
plt.yticks([0, 2, 4, 6, 8, 10, 12],
           ['0', '2B', '4B', '6B', '8B', '10B', '12B'])

plt.show()
```

**Key points:**

- Both lists must have the **same length**
- First list: numerical positions
- Second list: string labels to display
- Useful for adding units (B for billions) or formatting numbers

---

# Adding Grid Lines

Use `plt.grid()` to add grid lines that make it easier to read values from your plot:

```python
plt.plot(year, pop)
plt.xlabel("Year")
plt.ylabel("Population (billions)")
plt.title("World Population Projections")

# Add grid lines
plt.grid(True)

plt.show()
```

## Grid Customization Options

You can customize the appearance of grid lines:

```python
# Basic grid
plt.grid(True)  # Turn on grid

# Customize grid appearance
plt.grid(True,
         linestyle='--',    # Dashed lines
         linewidth=0.5,     # Thin lines
         alpha=0.7)         # Slightly transparent

# Grid for only one axis
plt.grid(True, axis='y')   # Only horizontal grid lines
plt.grid(True, axis='x')   # Only vertical grid lines
```

**When to use grids:**

- ✓ When viewers need to read precise values from the plot
- ✓ When you have many data points spread across the plot
- ✗ Can be distracting if overused or too prominent
- ✗ May not be necessary for simple plots with few data points

---

# Adding Text Annotations

Use `plt.text()` to add custom text anywhere on your plot to highlight specific points or provide additional context:

```python
plt.plot(year, pop)
plt.xlabel("Year")
plt.ylabel("Population (billions)")
plt.title("World Population Projections")

# Add text annotation
# plt.text(x_position, y_position, "text to display")
plt.text(1950, 8.5, "Population Explosion!")

plt.show()
```

## Text Positioning and Styling

```python
plt.plot(year, pop)
plt.xlabel("Year")
plt.ylabel("Population (billions)")
plt.title("World Population Projections")

# Annotate a specific data point
plt.text(2010, 7.2, "7 billion reached",
         fontsize=12,           # Text size
         color='red',           # Text color
         style='italic',        # Font style
         weight='bold')         # Font weight

# Add a note with background
plt.text(1960, 10, "UN Projections",
         bbox=dict(facecolor='yellow', alpha=0.5))  # Background box

plt.show()
```

## Common Text Annotation Use Cases

**1. Highlighting important data points:**

```python
# Mark when population reached 7 billion
plt.scatter([2010], [6.972], color='red', s=100, zorder=5)
plt.text(2010, 7.5, "7B milestone\n(2010)",
         ha='center',          # Horizontal alignment
         fontsize=10)
```

**2. Adding context or explanations:**

```python
plt.text(1950, 1, "Post-WWII\nBaby Boom", fontsize=9, color='gray')
```

**3. Labeling regions or periods:**

```python
plt.text(2050, 10.5, "Projected slowdown",
         style='italic',
         color='blue')
```

## Text Alignment Options

| Parameter | Values                          | Description          |
| --------- | ------------------------------- | -------------------- |
| `ha`      | `'left'`, `'center'`, `'right'` | Horizontal alignment |
| `va`      | `'top'`, `'center'`, `'bottom'` | Vertical alignment   |

**Example with alignment:**

```python
# Center text at specific coordinates
plt.text(2000, 6, "Year 2000",
         ha='center',    # Horizontally centered on x=2000
         va='bottom')    # Text sits above y=6
```

---

# Example: Improving a Population Plot

## Before Customization

```python
plt.plot(year, pop)
plt.show()
```

**Problems:**

- No labels - what do the axes represent?
- No title - what is this showing?
- Y-axis doesn't start at 0 - hard to see full growth scale
- No context or annotations

## After Customization

```python
# Add historical data for context
year = [1800, 1850, 1900] + year
pop = [1.0, 1.262, 1.650] + pop

plt.plot(year, pop)
plt.xlabel("Year")
plt.ylabel("Population")
plt.title("World Population Projections")
plt.yticks([0, 2, 4, 6, 8, 10, 12],
           ['0', '2B', '4B', '6B', '8B', '10B', '12B'])

# Add grid for easier reading
plt.grid(True, alpha=0.3)

# Annotate key milestone
plt.text(2011, 7.5, "7 billion",
         fontsize=10, color='red')

plt.show()
```

**Improvements:**

- ✓ Clear axis labels
- ✓ Descriptive title
- ✓ Y-axis starts at 0 (shows true scale)
- ✓ Custom labels with "B" for billions
- ✓ Historical data added (shows dramatic recent growth)
- ✓ Grid lines for easier value reading
- ✓ Text annotation highlighting key milestone

**Result:** A clear story about population explosion in the last 60 years!

---

# Key Takeaways

- **Always label your axes** with `xlabel()` and `ylabel()`
- **Add a title** with `title()` to provide context
- **Customize ticks** with `yticks()` and `xticks()` to control scale and add units
- **Add grid lines** with `grid(True)` to help readers extract values
- **Use text annotations** with `text(x, y, "message")` to highlight key points
- **All customizations** must be called **before** `plt.show()`
- Good visualizations tell a clear story - choose customizations that support your message
- When in doubt, put yourself in the viewer's position: what context do they need?

---

# Quick Reference: Common Customizations

| Function       | Purpose                | Example                                      |
| -------------- | ---------------------- | -------------------------------------------- |
| `plt.xlabel()` | Label x-axis           | `plt.xlabel("Year")`                         |
| `plt.ylabel()` | Label y-axis           | `plt.ylabel("Population")`                   |
| `plt.title()`  | Add title              | `plt.title("World Population")`              |
| `plt.xticks()` | Customize x-axis ticks | `plt.xticks([0, 50, 100])`                   |
| `plt.yticks()` | Customize y-axis ticks | `plt.yticks([0, 5, 10], ['0', '5B', '10B'])` |
| `plt.grid()`   | Add grid lines         | `plt.grid(True)`                             |
| `plt.text()`   | Add text annotation    | `plt.text(2010, 7, "Note")`                  |
| `plt.show()`   | Display the plot       | `plt.show()`                                 |
