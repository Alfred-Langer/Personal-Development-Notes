# NumPy Comparison Operators and Filtering

This document covers how comparison and logical operators work with NumPy arrays, including element-wise operations and boolean indexing.

---

# Comparison Operators with NumPy Arrays

When you use comparison operators with NumPy arrays, the operation is applied **element-wise**, returning a **boolean array**.

## Element-Wise Comparisons

```python
import numpy as np

# Create a NumPy array
ages = np.array([18, 25, 30, 15, 42, 12])

# Apply comparison operator
result = ages > 18
print(result)
```

**Output:**

```
[False,  True,  True, False,  True, False]
```

**What happened:**

- Each element was compared individually: `18 > 18?` → False, `25 > 18?` → True, etc.
- Result is a **boolean array** with same shape as original

## All Comparison Operators Work Element-Wise

```python
import numpy as np

numbers = np.array([10, 20, 30, 40, 50])

# All of these return boolean arrays
print(numbers == 30)     # [False False  True False False]
print(numbers != 30)     # [ True  True False  True  True]
print(numbers > 25)      # [False False  True  True  True]
print(numbers < 25)      # [ True False False False False]
print(numbers >= 30)     # [False False  True  True  True]
print(numbers <= 30)     # [ True  True  True False False]
```

---

# Boolean Indexing with NumPy Arrays

You can use the boolean array to **filter** the original array:

```python
import numpy as np

ages = np.array([18, 25, 30, 15, 42, 12])

# Create boolean mask
mask = ages > 18
print(mask)  # [False  True  True False  True False]

# Use mask to filter
adults = ages[mask]
print(adults)  # [25 30 42]
```

**Or in one line:**

```python
adults = ages[ages > 18]
print(adults)  # [25 30 42]
```

**How it works:**

1. `ages > 18` creates boolean array `[False, True, True, False, True, False]`
2. `ages[boolean_array]` returns only elements where the boolean is `True`

---

# Logical Operators with NumPy Arrays

Regular Python logical operators (`and`, `or`, `not`) **don't work** with NumPy arrays for element-wise operations. Instead, use NumPy's logical functions.

## Why Regular Operators Fail

```python
import numpy as np

ages = np.array([18, 25, 30, 15, 42, 12])

# ❌ This causes an error!
# result = (ages > 18) and (ages < 40)
# ValueError: The truth value of an array with more than one element is ambiguous
```

**Problem:** Python's `and` expects single boolean values, not arrays.

---

# NumPy Logical Functions

NumPy provides special functions for element-wise logical operations:

## `np.logical_and()` - Element-Wise AND

Returns `True` only where **both** conditions are `True`:

```python
import numpy as np

ages = np.array([18, 25, 30, 15, 42, 12])

# Find ages between 18 and 40 (exclusive)
result = np.logical_and(ages > 18, ages < 40)
print(result)  # [False  True  True False False False]

# Use it to filter
filtered_ages = ages[np.logical_and(ages > 18, ages < 40)]
print(filtered_ages)  # [25 30]
```

## `np.logical_or()` - Element-Wise OR

Returns `True` where **at least one** condition is `True`:

```python
import numpy as np

ages = np.array([18, 25, 30, 15, 42, 12])

# Find ages that are either under 18 OR over 40
result = np.logical_or(ages < 18, ages > 40)
print(result)  # [False False False  True  True  True]

# Use it to filter
filtered_ages = ages[np.logical_or(ages < 18, ages > 40)]
print(filtered_ages)  # [15 42 12]
```

## `np.logical_not()` - Element-Wise NOT

Reverses boolean values:

```python
import numpy as np

ages = np.array([18, 25, 30, 15, 42, 12])

# Find ages NOT greater than 25
mask = ages > 25
result = np.logical_not(mask)
print(result)  # [ True  True False  True False  True]

# Use it to filter
filtered_ages = ages[np.logical_not(ages > 25)]
print(filtered_ages)  # [18 25 15 12]
```

---

# Combining Multiple Logical Operations

```python
import numpy as np

scores = np.array([55, 72, 88, 45, 91, 68])

# Find scores that are:
# (between 60 and 80) OR (above 90)
condition1 = np.logical_and(scores >= 60, scores <= 80)
condition2 = scores > 90
result = np.logical_or(condition1, condition2)

print(result)  # [False  True False False  True  True]
filtered_scores = scores[result]
print(filtered_scores)  # [72 91 68]
```

---

# Alternative Syntax: Bitwise Operators

There's a **shorthand syntax** using bitwise operators that's commonly used with NumPy (and essential for Pandas):

## Bitwise Operators: `&`, `|`, `~`

| NumPy Function     | Bitwise Operator | Meaning |
| ------------------ | ---------------- | ------- |
| `np.logical_and()` | `&`              | AND     |
| `np.logical_or()`  | `\|`             | OR      |
| `np.logical_not()` | `~`              | NOT     |

**⚠️ Critical:** When using bitwise operators, you **must use parentheses** around each condition!

```python
import numpy as np

ages = np.array([18, 25, 30, 15, 42, 12])

# Using NumPy functions (verbose)
result = np.logical_and(ages > 18, ages < 40)

# Using bitwise operators (shorter) - MUST USE PARENTHESES!
result = (ages > 18) & (ages < 40)  # ✓ Correct

# ❌ Without parentheses - WRONG!
# result = ages > 18 & ages < 40  # Causes errors due to operator precedence
```

## Examples with All Bitwise Operators

```python
import numpy as np

ages = np.array([18, 25, 30, 15, 42, 12])

# AND - both conditions must be True
result = (ages > 18) & (ages < 40)
print(ages[result])  # [25 30]

# OR - at least one condition must be True
result = (ages < 18) | (ages > 40)
print(ages[result])  # [15 42 12]

# NOT - reverse the condition
result = ~(ages > 25)
print(ages[result])  # [18 25 15 12]
```

---

# Complete NumPy Filtering Examples

## Example 1: Simple Filter

```python
import numpy as np

temperatures = np.array([72, 68, 85, 90, 65, 78])

# Filter temperatures above 70
hot_days = temperatures[temperatures > 70]
print(hot_days)  # [72 85 90 78]
```

## Example 2: Multiple Conditions with AND

```python
import numpy as np

prices = np.array([25, 50, 75, 100, 125, 150])

# Prices between 50 and 100 (inclusive)
affordable = prices[(prices >= 50) & (prices <= 100)]
print(affordable)  # [50 75 100]
```

## Example 3: Multiple Conditions with OR

```python
import numpy as np

grades = np.array([45, 67, 89, 92, 55, 78])

# Either failing (< 60) or excellent (>= 90)
extremes = grades[(grades < 60) | (grades >= 90)]
print(extremes)  # [45 92 55]
```

## Example 4: Complex Filtering

```python
import numpy as np

data = np.array([10, 25, 30, 45, 60, 75, 90])

# Values that are: (< 30) OR (between 50 and 70) OR (> 85)
condition1 = data < 30
condition2 = (data >= 50) & (data <= 70)
condition3 = data > 85
result = condition1 | condition2 | condition3

filtered = data[result]
print(filtered)  # [10 25 60 90]
```

---

# Quick Reference

## Comparison Operators (Element-Wise)

```python
arr > 5       # Greater than
arr < 5       # Less than
arr >= 5      # Greater than or equal
arr <= 5      # Less than or equal
arr == 5      # Equal to
arr != 5      # Not equal to
```

## Boolean Indexing

```python
arr[arr > 5]              # Filter array
arr[condition]            # Use boolean mask
```

## NumPy Logical Functions

```python
np.logical_and(cond1, cond2)    # Element-wise AND
np.logical_or(cond1, cond2)     # Element-wise OR
np.logical_not(condition)       # Element-wise NOT
```

## Bitwise Operators (Shorthand)

```python
(arr > 5) & (arr < 10)    # AND - MUST USE PARENTHESES
(arr < 5) | (arr > 10)    # OR - MUST USE PARENTHESES
~(arr > 5)                # NOT
```

---

# Key Takeaways

- **NumPy comparisons** are element-wise and return boolean arrays
- **Boolean arrays** can be used to filter (index) the original array
- **Python's `and`/`or`/`not`** don't work with arrays - use NumPy functions instead
- **NumPy logical functions:** `np.logical_and()`, `np.logical_or()`, `np.logical_not()`
- **Bitwise operators** (`&`, `|`, `~`) are shorthand for logical functions
- **Always use parentheses** with bitwise operators to avoid precedence issues
- **Multiple conditions** can be combined using logical operators
- **Boolean indexing** is fundamental to data filtering in NumPy and Pandas
