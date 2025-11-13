# NumPy: Basic Statistics

When working with large datasets (thousands, millions, or billions of data points), you can't simply look at all the numbers to understand your data. Instead, you need to generate **summary statistics** to gain insights.

NumPy provides built-in functions to quickly calculate statistical measures on arrays.

---

# Common Statistical Functions

## Mean (Average)

Calculate the average value of all elements in an array:

```python
# Example: City-wide survey with 5000 people's height and weight
np_city = np.array([[1.73, 65.4],
                    [1.68, 59.2],
                    # ... 5000 rows total
                    [1.79, 68.7]])

# Get average height (first column)
avg_height = np.mean(np_city[:, 0])  # Returns: 1.75 meters
```

## Median

Find the middle value when data is sorted:

```python
# Get median height
median_height = np.median(np_city[:, 0])
```

The median represents the height of the middle person if you sorted everyone from shortest to tallest.

## Standard Deviation

Measure how spread out the data is:

```python
# Get standard deviation of heights
height_std = np.std(np_city[:, 0])
```

## Correlation Coefficient

Check if two variables are related (e.g., does height correlate with weight?):

```python
# Check correlation between height and weight
correlation = np.corrcoef(np_city[:, 0], np_city[:, 1])
```

---

# Other Useful NumPy Functions

```python
# Sum all elements
total_height = np.sum(np_city[:, 0])

# Sort array
sorted_heights = np.sort(np_city[:, 0])
```

**Note:** While Python has built-in `sum()` and `sorted()` functions, NumPy's versions are **much faster** because NumPy enforces a single data type in arrays, allowing for optimized calculations.

---

# Why Summary Statistics Matter

Summary statistics provide a **"sanity check"** for your data:

- If the average weight is 2000 kg, your measurements are likely incorrect
- They help you quickly understand the scale and distribution of your data
- They reveal patterns that aren't obvious from looking at raw numbers

---

# Key Takeaways

- Use `np.mean()` for average values
- Use `np.median()` for middle values
- Use `np.std()` for measuring spread
- Use `np.corrcoef()` to check relationships between variables
- NumPy statistical functions are **faster** than pure Python alternatives
- Always perform sanity checks on your data using summary statistics
