# Looping Over Data Structures

This document covers how to loop over different Python data structures including dictionaries, NumPy arrays, and Pandas DataFrames. Each data structure requires a specific approach to iteration.

---

# Looping Over Dictionaries

When looping over a dictionary, you need to explicitly specify that you want to iterate over key-value pairs using the `.items()` method.

## Basic Dictionary Loop - Won't Work

```python
world = {
    'afghanistan': 30.55,
    'albania': 2.77,
    'algeria': 39.21
}

# ❌ This doesn't work
for key, value in world:
    print(key + " -- " + str(value))
# Error: too many values to unpack
```

**Problem:** Python doesn't know how to split the dictionary into two values per iteration. Iterating over world, only iterates through its keys and NOT through it's keys AND values.

## Correct Approach: Using `.items()`

```python
world = {
    'afghanistan': 30.55,
    'albania': 2.77,
    'algeria': 39.21
}

# ✓ Use .items() method
for key, value in world.items():
    print(key + " -- " + str(value))
```

**Output:**

```
afghanistan -- 30.55
albania -- 2.77
algeria -- 39.21
```

**How it works:**

- `.items()` generates both key and value on each iteration
- First variable (`key`) gets the key
- Second variable (`value`) gets the value

## Variable Names Are Arbitrary

```python
# You can use any variable names
for k, v in world.items():
    print(k + " -- " + str(v))

# Or more descriptive names
for country, population in world.items():
    print(country + " has " + str(population) + " million people")
```

**Important:** The **order** matters - first variable is always the key, second is always the value.

## Dictionary Iteration Order

**Note:** In Python 3.5 and earlier, dictionaries are **unordered** - iteration order is not guaranteed to match insertion order. In Python 3.7+, dictionaries maintain insertion order.

```python
world = {
    'afghanistan': 30.55,
    'albania': 2.77,
    'algeria': 39.21
}

# In Python 3.5 and earlier: order may vary
# In Python 3.7+: order is guaranteed (insertion order)
for country, population in world.items():
    print(country)
```

---

# Looping Over NumPy Arrays

NumPy arrays can be iterated using basic for loops for 1D arrays, but require special functions for multi-dimensional arrays.

## 1D NumPy Arrays

For 1D arrays, a basic for loop works perfectly:

```python
import numpy as np

bmi = np.array([21.85, 20.98, 22.65, 26.56, 23.11])

# Basic for loop
for val in bmi:
    print(val)
```

**Output:**

```
21.85
20.98
22.65
26.56
23.11
```

## 2D NumPy Arrays - Basic Loop Limitation

```python
import numpy as np

# Create 2D array
np_height = np.array([1.73, 1.68, 1.71, 1.89, 1.79])
np_weight = np.array([65.4, 59.2, 63.6, 88.4, 68.7])
meas = np.array([np_height, np_weight])

print(meas)
# Output:
# [[ 1.73  1.68  1.71  1.89  1.79]
#  [65.4  59.2  63.6  88.4  68.7 ]]

# Basic for loop - doesn't iterate over all elements!
for val in meas:
    print(val)
```

**Output:**

```
[1.73 1.68 1.71 1.89 1.79]
[65.4 59.2 63.6 88.4 68.7]
```

**Problem:** A 2D array is built from an array of 1D arrays, so the loop only iterates over the rows (1D arrays), not individual elements.

## 2D NumPy Arrays - Using `np.nditer()`

To iterate over **every element** in a multi-dimensional array, use `np.nditer()`:

```python
import numpy as np

np_height = np.array([1.73, 1.68, 1.71, 1.89, 1.79])
np_weight = np.array([65.4, 59.2, 63.6, 88.4, 68.7])
meas = np.array([np_height, np_weight])

# Use nditer() function
for val in np.nditer(meas):
    print(val)
```

**Output:**

```
1.73
1.68
1.71
1.89
1.79
65.4
59.2
63.6
88.4
68.7
```

**Result:** All 10 elements printed individually (first all heights, then all weights).

## **Note:** While you can technically use a neste for loop to iterate over 2D or even 3D Numpy arrays. It becomes more impractical when you many more dimensions. This is why np.nditer is preferred as it works regardless of how many dimensions there are.

# Looping Over Pandas DataFrames

Pandas DataFrames require special methods to iterate properly. The basic for loop doesn't work as expected.

## Basic For Loop - Unexpected Behavior

```python
import pandas as pd

# Load DataFrame
brics = pd.read_csv('brics.csv', index_col=0)

# Try basic for loop
for val in brics:
    print(val)
```

**Output:**

```
country
capital
area
population
```

**Problem:** Basic for loop only iterates over **column names**, not rows!

## Correct Approach: Using `.iterrows()`

To iterate over rows, use the `.iterrows()` method:

```python
import pandas as pd

brics = pd.read_csv('brics.csv', index_col=0)

# Iterate over rows using .iterrows()
for lab, row in brics.iterrows():
    print(lab)
    print(row)
```

**Output (first iteration):**

```
BR
country          Brazil
capital        Brasilia
area              8.516
population        200.4
Name: BR, dtype: object
```

**How it works:**

- `.iterrows()` generates **two pieces of data** on each iteration:
  1. **Row label** (index) - stored in `lab`
  2. **Row data** as a Pandas Series - stored in `row`

## Accessing Specific Columns During Iteration

Since `row` is a Pandas Series, you can select specific columns:

```python
import pandas as pd

brics = pd.read_csv('brics.csv', index_col=0)

# Print label and capital for each country
for lab, row in brics.iterrows():
    print(lab + ": " + row['capital'])
```

**Output:**

```
BR: Brasilia
RU: Moscow
IN: New Delhi
CH: Beijing
SA: Pretoria
```

---

# Adding Columns Based on Iterations

You can use `.iterrows()` to create new columns, but it's **not the most efficient approach**.

## Using `.iterrows()` to Add a Column

```python
import pandas as pd

brics = pd.read_csv('brics.csv', index_col=0)

# Add a column with country name length
for lab, row in brics.iterrows():
    # Calculate length of country name
    name_length = len(row['country'])

    # Add to new column at this row
    brics.loc[lab, 'name_length'] = name_length

print(brics)
```

**Output:**

```
         country    capital   area  population  name_length
BR        Brazil   Brasilia  8.516      200.40            6
RU        Russia     Moscow 17.100      143.50            6
IN         India  New Delhi  3.286     1252.00            5
CH         China    Beijing  9.597     1357.00            5
SA  South Africa   Pretoria  1.221       52.98           12
```

**How it works:**

1. Loop through each row with `.iterrows()`
2. Calculate `len(row['country'])` for each country name
3. Use `.loc[lab, 'name_length']` to add value at the correct row

**Drawback:** Creates a new Series object on every iteration - **inefficient** for large DataFrames!

---

# Better Approach: Using `.apply()`

For column-wise operations, `.apply()` is **much more efficient** than looping.

## Using `.apply()` - No Loop Needed!

```python
import pandas as pd

brics = pd.read_csv('brics.csv', index_col=0)

# Apply len() function to entire column
brics['name_length'] = brics['country'].apply(len)

print(brics)
```

**Output:**

```
         country    capital   area  population  name_length
BR        Brazil   Brasilia  8.516      200.40            6
RU        Russia     Moscow 17.100      143.50            6
IN         India  New Delhi  3.286     1252.00            5
CH         China    Beijing  9.597     1357.00            5
SA  South Africa   Pretoria  1.221       52.98           12
```

**How it works:**

- Select the column: `brics['country']`
- Apply function to each element: `.apply(len)`
- Assign result to new column: `brics['name_length'] = ...`

**Benefits:**

- ✓ **More efficient** - vectorized operation
- ✓ **More readable** - clear and concise
- ✓ **Faster** - especially on large datasets
- ✓ **No loop needed!**

## Custom Functions with `.apply()`

You can also apply custom functions:

```python
import pandas as pd

brics = pd.read_csv('brics.csv', index_col=0)

# Define custom function
def name_to_upper(name):
    return name.upper()

# Apply custom function
brics['country_upper'] = brics['country'].apply(name_to_upper)

# Or use lambda function
brics['country_upper'] = brics['country'].apply(lambda x: x.upper())

print(brics[['country', 'country_upper']])
```

**Output:**

```
         country country_upper
BR        Brazil        BRAZIL
RU        Russia        RUSSIA
IN         India         INDIA
CH         China         CHINA
SA  South Africa  SOUTH AFRICA
```

---

# Complete Examples

## Example 1: Dictionary Iteration

```python
# Create dictionary of countries and populations
europe = {
    'spain': 46.77,
    'france': 66.03,
    'germany': 80.62,
    'italy': 59.83
}

# Iterate and print formatted output
for country, population in europe.items():
    print(f"{country.capitalize()} has {population} million inhabitants")
```

**Output:**

```
Spain has 46.77 million inhabitants
France has 66.03 million inhabitants
Germany has 80.62 million inhabitants
Italy has 59.83 million inhabitants
```

## Example 2: 2D NumPy Array Iteration

```python
import numpy as np

# Create 2D array with test scores
scores = np.array([[85, 90, 78],
                   [92, 88, 95],
                   [70, 85, 80]])

# Iterate over all elements
print("All scores:")
for score in np.nditer(scores):
    print(score)

# Calculate average per student (row)
print("\nAverage per student:")
for row in scores:
    print(f"Average: {np.mean(row):.2f}")
```

## Example 3: DataFrame Iteration vs `.apply()`

```python
import pandas as pd

# Sample DataFrame
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'salary': [50000, 60000, 75000]
})

# Method 1: Using .iterrows() (less efficient)
for lab, row in df.iterrows():
    df.loc[lab, 'senior'] = row['age'] >= 30

# Method 2: Using .apply() (more efficient)
df['senior'] = df['age'].apply(lambda x: x >= 30)

# Method 3: Even simpler - direct comparison (most efficient!)
df['senior'] = df['age'] >= 30

print(df)
```

---

# Key Differences Summary

| Data Structure       | Method/Function          | Returns                | Example                          |
| -------------------- | ------------------------ | ---------------------- | -------------------------------- |
| **Dictionary**       | `.items()` (method)      | Key and value          | `for k, v in dict.items():`      |
| **1D NumPy Array**   | Basic loop               | Individual elements    | `for val in arr:`                |
| **2D+ NumPy Array**  | `np.nditer()` (function) | All elements           | `for val in np.nditer(arr):`     |
| **Pandas DataFrame** | `.iterrows()` (method)   | Label and row (Series) | `for lab, row in df.iterrows():` |

**Important distinction:**

- Dictionaries and DataFrames use **methods** (`.items()`, `.iterrows()`)
- NumPy uses a **function** (`np.nditer()`)

---

# Quick Reference

## Dictionary

```python
for key, value in dict.items():
    # Use key and value
```

## NumPy Array (1D)

```python
for element in array:
    # Use element
```

## NumPy Array (2D+)

```python
for element in np.nditer(array):
    # Use element
```

## Pandas DataFrame (Iterating Rows)

```python
for label, row in df.iterrows():
    # Use label (index) and row (Series)
    value = row['column_name']
```

## Pandas DataFrame (Column Operations - Preferred)

```python
# Apply function to column
df['new_col'] = df['existing_col'].apply(function_name)

# Or use lambda
df['new_col'] = df['existing_col'].apply(lambda x: x * 2)
```

---

# Key Takeaways

- **Dictionaries:** Use `.items()` method to iterate over key-value pairs
- **1D NumPy arrays:** Basic for loop works fine
- **Multi-dimensional NumPy arrays:** Use `np.nditer()` function to iterate over all elements
- **Pandas DataFrames:**
  - Basic for loop only gives column names
  - Use `.iterrows()` method to iterate over rows (returns label and row as Series)
  - **Prefer `.apply()`** for column-wise operations - it's more efficient than looping
- **Order matters:** In all cases, the order of variables in unpacking is fixed
- **Efficiency matters:** For DataFrames, `.apply()` or vectorized operations are much faster than `.iterrows()`

---

# Best Practices

1. **For dictionaries:** Always use `.items()` when you need both keys and values
2. **For NumPy:** Use `np.nditer()` for multi-dimensional arrays
3. **For DataFrames:**
   - Use `.iterrows()` only when absolutely necessary (complex row-wise logic)
   - Prefer `.apply()` for simple column operations
   - Prefer vectorized operations (like `df['col'] > 5`) when possible - fastest!
4. **Readability:** Choose variable names that make your code self-documenting
