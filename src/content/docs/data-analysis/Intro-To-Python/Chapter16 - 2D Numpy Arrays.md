# 2D NumPy Arrays

So far, we've only covered 1-dimensional arrays. However, if you check the type of a NumPy array, you'll see it's actually `numpy.ndarray`. 

The **n** in 'ndarray' stands for **n-dimensional**, meaning NumPy can handle arrays with any number of dimensions - 1D, 2D, 3D, and beyond.

---

# Creating a 2D NumPy Array

A 2D NumPy Array is created by passing in a **list of lists**, where each inner list becomes a row.

**Example:**
```python
# Create a 2D array with height and weight data
np_2d = np.array([[1.73, 1.68, 1.71, 1.89, 1.79],
                  [65.4, 59.2, 63.6, 88.4, 68.7]])

print(np_2d)
# Output:
# [[ 1.73  1.68  1.71  1.89  1.79]
#  [65.4  59.2  63.6  88.4  68.7 ]]

# Check dimensions
print(np_2d.shape)  # Output: (2, 5) - 2 rows, 5 columns
```

**Note:** `.shape` is an **attribute** (not a method), so there are no parentheses after it. Attributes provide information about the object, while methods perform actions.

**Remember:** The homogeneous data rule still applies - all elements must be the same type.

---

# Indexing a 2D NumPy Array

There are two ways to index 2D NumPy arrays:

## Method 1: Multiple Bracket Notation

Use separate square brackets for row and column selection:
```python
np_2d = np.array([[1.73, 1.68, 1.71, 1.89, 1.79],
                  [65.4, 59.2, 63.6, 88.4, 68.7]])

# Select row 0, then column 2 (first row, third element)
np_2d[0][2]  # Returns: 1.71
```

## Method 2: Single Bracket with Comma (Preferred)

Use a single pair of brackets with a comma separating row and column indices:
```python
# Same selection: row 0, column 2
np_2d[0, 2]  # Returns: 1.71
```

This notation is more intuitive - think of it like **(row, column)** coordinates.

## Slicing 2D Arrays

You can use slicing to select multiple rows and/or columns:
```python
# Select ALL rows, columns 1 and 2 (second and third columns)
np_2d[:, 1:3]
# Returns:
# [[1.68 1.71]
#  [59.2 63.6]]

# Select row 1 (second row), ALL columns
np_2d[1, :]  # Returns: array([65.4, 59.2, 63.6, 88.4, 68.7])

# Select rows 0-1, columns 1-2
np_2d[0:2, 1:3]
# Returns:
# [[1.68 1.71]
#  [59.2 63.6]]
```

**Key Points:**
- `:` means "all" (all rows or all columns)
- Slicing syntax: `start:end` (end is NOT included)
- `[row, column]` notation is clearer than `[row][column]`

---

# Element-Wise Calculations on 2D Arrays

Just like 1D arrays, you can perform element-wise calculations on 2D arrays:
```python
np_2d = np.array([[1.73, 1.68, 1.71, 1.89, 1.79],
                  [65.4, 59.2, 63.6, 88.4, 68.7]])

# Convert all heights from meters to inches (multiply by 39.37)
np_2d[0, :] * 39.37
# Returns: array([68.11, 66.14, 67.32, 74.41, 70.47])

# Calculate BMI for all family members
np_2d[1, :] / np_2d[0, :] ** 2
# Returns: array([21.85, 20.98, 21.75, 24.75, 21.44])
```

---

# Quick Reference: 2D Array Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Create 2D array | `np.array([[...], [...]])` | `np.array([[1,2], [3,4]])` |
| Check shape | `array.shape` | `(2, 5)` means 2 rows, 5 columns |
| Single element | `array[row, col]` | `arr[0, 2]` |
| Entire row | `array[row, :]` | `arr[1, :]` |
| Entire column | `array[:, col]` | `arr[:, 2]` |
| Slice rows & cols | `array[r1:r2, c1:c2]` | `arr[0:2, 1:3]` |