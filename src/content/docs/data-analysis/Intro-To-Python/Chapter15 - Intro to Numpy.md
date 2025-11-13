# Lists vs NumPy Arrays

Python lists are quite powerful as they allow users to:
- Create collections of data values
- Store multiple types of data within a single list
- Modify, add, and remove values at will

However, one of the main downsides to Python lists is that they are not the most efficient when it comes to speed and memory. This is especially true when you need to conduct operations on all the values within a list. Iterating through every element of a list and performing an operation every time is expensive. 

Luckily, there is an alternative data structure that can be used: the **NumPy array**.

---

# What is NumPy?

NumPy, short for Numeric Python, is a popular Python package used in Data Science.

**Importing NumPy:**
```python
import numpy as np  # Standard convention
```

**Installation:**
NumPy comes pre-installed in most data science environments, but if needed:
```bash
pip install numpy
```

## Key Differences from Python Lists

The NumPy Array has two main aspects that differ from a Python list:

1. **Data must be homogeneous** (only one data type throughout the collection)
   - If you try to create an array with mixed types, NumPy will convert everything to a single type
   - Example: `np.array([1.0, "is", True])` → all converted to strings

2. **You can perform calculations across the entire array** (element-wise operations)

**Example:**
```python
# Creation of Python lists
height = [1.73, 1.68, 1.71, 1.89, 1.79]
weight = [65.4, 59.2, 63.6, 88.4, 68.7]

# Creation of NumPy Arrays from Python lists
np_height = np.array(height)
np_weight = np.array(weight)

# Performing BMI calculation using the NumPy Arrays as operands
bmi = np_weight / np_height ** 2  # Element-wise calculation!
```

---

# NumPy Arrays vs Lists: Different Behaviors

Python lists and NumPy arrays are completely different object types. This means that the methods, attributes, and operations of lists will not apply to NumPy arrays in the same way.

**Example - Addition behaves differently:**
```python
# Python Lists - Concatenation
x = [1, 2, 3]
y = [4, 5, 6]
z = x + y  # Result: [1, 2, 3, 4, 5, 6]

# NumPy Arrays - Element-wise addition
np_x = np.array(x)
np_y = np.array(y)
np_z = np_x + np_y  # Result: array([5, 7, 9])
```

---

# Indexing and Subsetting

Indexing with NumPy Arrays works similarly to Python lists:
```python
bmi = np.array([21.85, 20.97, 22.65, 26.56, 23.11])
bmi[1]  # Returns: 20.97 (second element)
```

## Boolean Indexing (Conditional Subsetting)

NumPy arrays support a powerful feature called **boolean indexing** that allows you to filter data based on conditions:

**Step 1: Create a boolean array using a comparison**
```python
bmi > 23  # Returns: array([False, False, False, True, True])
```

**Step 2: Use the boolean array to subset**
```python
bmi[bmi > 23]  # Returns: array([26.56, 23.11])
```

This selects only the elements where the condition is `True`.

**Another Example:**
```python
np_x = np.array([1, 2, 3, 4, 5, 6])
np_x_filtered = np_x[np_x % 2 == 0]  # Returns: array([2, 4, 6])
```

---

# Key Takeaways

- **NumPy arrays** are faster and more memory-efficient than lists for numerical operations
- **Element-wise operations** work automatically with NumPy arrays
- **Homogeneous data** - all elements must be the same type
- **Boolean indexing** is a powerful feature for filtering data based on conditions
- **Different behavior** - remember that lists and arrays handle operations differently!