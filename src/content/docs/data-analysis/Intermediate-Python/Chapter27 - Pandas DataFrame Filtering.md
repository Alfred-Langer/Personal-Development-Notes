# Filtering Pandas DataFrames

This document covers how to filter Pandas DataFrames using comparison operators, logical operations, and boolean indexing. Understanding DataFrame filtering is essential for data analysis.

---

# The Three-Step Filtering Process

Filtering DataFrames follows a consistent three-step process:

1. **Select** the column(s) to use for filtering
2. **Apply** comparison/logical operators to create a boolean Series
3. **Use** the boolean Series to index the DataFrame

---

# Step-by-Step Filtering Walkthrough

## Step 1: Select the Column

```python
import pandas as pd

# Sample DataFrame
brics = pd.DataFrame({
    'country': ['Brazil', 'Russia', 'India', 'China', 'South Africa'],
    'capital': ['Brasilia', 'Moscow', 'New Delhi', 'Beijing', 'Pretoria'],
    'area': [8.516, 17.10, 3.286, 9.597, 1.221],
    'population': [200.4, 143.5, 1252, 1357, 52.98]
})

# Step 1: Select the column
area_column = brics['area']
print(area_column)
```

**Output:**

```
0     8.516
1    17.100
2     3.286
3     9.597
4     1.221
Name: area, dtype: float64
```

## Step 2: Create Boolean Series

```python
# Step 2: Apply comparison operator
mask = brics['area'] > 8
print(mask)
```

**Output:**

```
0     True
1     True
2    False
3     True
4    False
Name: area, dtype: bool
```

**Result:** A Pandas Series of booleans (essentially a 1D boolean NumPy array)

## Step 3: Index the DataFrame

```python
# Step 3: Use boolean Series to filter DataFrame
filtered_brics = brics[mask]
print(filtered_brics)
```

**Output:**

```
  country  capital   area  population
0  Brazil  Brasilia  8.516      200.40
1  Russia    Moscow 17.100      143.50
3   China   Beijing  9.597     1357.00
```

## All in One Line (Most Common)

```python
import pandas as pd

# All three steps combined
filtered_brics = brics[brics['area'] > 8]
print(filtered_brics)
```

**This is the standard pattern you'll use in practice!**

---

# Why This Works: Pandas is Built on NumPy

Pandas Series are built on top of NumPy arrays, so they inherit the same behavior:

```python
import pandas as pd
import numpy as np

# Create a Pandas Series
ages_series = pd.Series([18, 25, 30, 15, 42, 12])

# Apply comparison - returns boolean Series
mask = ages_series > 18
print(type(mask))  # <class 'pandas.core.series.Series'>
print(mask.values)  # Access underlying NumPy array
# Output: [False  True  True False  True False]

# The underlying NumPy array powers the operation
print(type(mask.values))  # <class 'numpy.ndarray'>
```

**Key insight:** Operations on Pandas Series are actually NumPy operations under the hood!

---

# Using Logical Operators with Pandas

Since Pandas is built on NumPy, you use **bitwise operators** to combine conditions.

## AND Operator (`&`)

Filter rows that meet **multiple conditions**:

```python
import pandas as pd

brics = pd.DataFrame({
    'country': ['Brazil', 'Russia', 'India', 'China', 'South Africa'],
    'area': [8.516, 17.10, 3.286, 9.597, 1.221],
    'population': [200.4, 143.5, 1252, 1357, 52.98]
})

# Countries with area > 8 AND population > 200
filtered = brics[(brics['area'] > 8) & (brics['population'] > 200)]
print(filtered)
```

**Output:**

```
 country   area  population
3   China  9.597     1357.00
```

**⚠️ Critical:** Parentheses around each condition are **required**!

```python
# ❌ WRONG - Causes error
# filtered = brics[brics['area'] > 8 & brics['population'] > 200]

# ✓ CORRECT - Always use parentheses
filtered = brics[(brics['area'] > 8) & (brics['population'] > 200)]
```

## OR Operator (`|`)

Filter rows that meet **at least one condition**:

```python
# Countries with area > 15 OR population < 100
filtered = brics[(brics['area'] > 15) | (brics['population'] < 100)]
print(filtered)
```

**Output:**

```
       country   area  population
1       Russia  17.10      143.50
4  South Africa   1.221       52.98
```

## NOT Operator (`~`)

Filter rows that **don't meet** a condition:

```python
# Countries NOT with small populations (population >= 100)
filtered = brics[~(brics['population'] < 100)]
print(filtered)
```

**Output:**

```
  country   area  population
0  Brazil  8.516      200.40
1  Russia 17.100      143.50
2   India  3.286     1252.00
3   China  9.597     1357.00
```

---

# Combining Multiple Conditions

You can create complex filters by combining multiple conditions:

```python
import pandas as pd

brics = pd.DataFrame({
    'country': ['Brazil', 'Russia', 'India', 'China', 'South Africa'],
    'area': [8.516, 17.10, 3.286, 9.597, 1.221],
    'population': [200.4, 143.5, 1252, 1357, 52.98]
})

# Complex filter: Large area OR (small area AND large population)
filtered = brics[(brics['area'] > 10) | ((brics['area'] < 5) & (brics['population'] > 1000))]
print(filtered)
```

**Output:**

```
  country   area  population
1  Russia  17.10      143.50
2   India  3.286     1252.00
```

**Breakdown:**

- `brics['area'] > 10` → Russia (17.10)
- `(brics['area'] < 5) & (brics['population'] > 1000)` → India (3.286 area, 1252 population)

---

# Complete Filtering Examples

## Example 1: Simple Filter

```python
import pandas as pd

# Sample data
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'age': [25, 30, 35, 28, 22],
    'salary': [50000, 60000, 75000, 55000, 48000]
})

# Filter: People over 25
filtered_df = df[df['age'] > 25]
print(filtered_df)
```

**Output:**

```
      name  age  salary
1      Bob   30   60000
2  Charlie   35   75000
3    Diana   28   55000
```

## Example 2: Multiple Conditions with AND

```python
# Filter: Age > 25 AND salary > 55000
filtered_df = df[(df['age'] > 25) & (df['salary'] > 55000)]
print(filtered_df)
```

**Output:**

```
      name  age  salary
1      Bob   30   60000
2  Charlie   35   75000
```

## Example 3: Multiple Conditions with OR

```python
# Filter: Age < 25 OR salary > 70000
filtered_df = df[(df['age'] < 25) | (df['salary'] > 70000)]
print(filtered_df)
```

**Output:**

```
      name  age  salary
2  Charlie   35   75000
4      Eve   22   48000
```

## Example 4: Negation with NOT

```python
# Filter: NOT (age > 30)
filtered_df = df[~(df['age'] > 30)]
print(filtered_df)
```

**Output:**

```
    name  age  salary
0  Alice   25   50000
1    Bob   30   60000
3  Diana   28   55000
4    Eve   22   48000
```

---

# Advanced Filtering Methods

## Using `.isin()` for Multiple Values

Filter rows where a column matches any value in a list:

```python
import pandas as pd

df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'age': [25, 30, 35, 28, 22],
    'salary': [50000, 60000, 75000, 55000, 48000]
})

# Filter: Names that are either 'Alice' or 'Charlie' or 'Eve'
filtered_df = df[df['name'].isin(['Alice', 'Charlie', 'Eve'])]
print(filtered_df)
```

**Output:**

```
      name  age  salary
0    Alice   25   50000
2  Charlie   35   75000
4      Eve   22   48000
```

**Why use `.isin()`?**

- Cleaner than: `(df['name'] == 'Alice') | (df['name'] == 'Charlie') | (df['name'] == 'Eve')`
- More readable
- Better performance with many values

## String Methods for Filtering

Pandas provides string methods through `.str` accessor:

```python
import pandas as pd

df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'email': ['alice@gmail.com', 'bob@yahoo.com', 'charlie@gmail.com',
              'diana@hotmail.com', 'eve@gmail.com']
})

# Filter: Names that start with 'A'
filtered_df = df[df['name'].str.startswith('A')]
print(filtered_df)
```

**Output:**

```
    name           email
0  Alice  alice@gmail.com
```

**Common string methods:**

```python
# Contains substring
df[df['email'].str.contains('gmail')]

# Starts with
df[df['name'].str.startswith('A')]

# Ends with
df[df['email'].str.endswith('.com')]

# Case-insensitive contains
df[df['name'].str.lower().str.contains('ali')]
```

## Handling Missing Values (NaN)

Use `.isna()` and `.notna()` to filter based on missing values:

```python
import pandas as pd
import numpy as np

df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'score': [85, np.nan, 92, 78, np.nan]
})

# Filter: Rows with missing scores
missing_scores = df[df['score'].isna()]
print(missing_scores)
```

**Output:**

```
  name  score
1  Bob    NaN
4  Eve    NaN
```

```python
# Filter: Rows with valid scores
valid_scores = df[df['score'].notna()]
print(valid_scores)
```

**Output:**

```
      name  score
0    Alice   85.0
2  Charlie   92.0
3    Diana   78.0
```

**⚠️ Important:** Regular comparisons don't work with NaN!

```python
# ❌ WRONG - This doesn't work for NaN
filtered = df[df['score'] == np.nan]  # Returns empty DataFrame!

# ✓ CORRECT - Use .isna()
filtered = df[df['score'].isna()]
```

---

# Common Pitfalls and Solutions

## Pitfall 1: Forgetting Parentheses

```python
# ❌ WRONG - Operator precedence issues
# filtered = df[df['age'] > 25 & df['salary'] > 50000]  # Error!

# ✓ CORRECT - Always use parentheses
filtered = df[(df['age'] > 25) & (df['salary'] > 50000)]
```

**Why:** The `&` operator has higher precedence than `>`, causing unexpected evaluation order.

## Pitfall 2: Using Python's `and`/`or`/`not`

```python
# ❌ WRONG - Causes ValueError
# filtered = df[(df['age'] > 25) and (df['salary'] > 50000)]
# ValueError: The truth value of a Series is ambiguous

# ✓ CORRECT - Use bitwise operators
filtered = df[(df['age'] > 25) & (df['salary'] > 50000)]
```

**Why:** Python's `and`/`or` expect single boolean values, not arrays of booleans.

## Pitfall 3: Modifying Original DataFrame

Filtered DataFrames are often **views**, not copies:

```python
# Filter the DataFrame
filtered_df = df[df['age'] > 25]

# ⚠️ Modifying filtered_df might affect original df!
# Use .copy() to be safe
filtered_df = df[df['age'] > 25].copy()
filtered_df['age'] = 99  # Now safe - won't affect original
```

## Pitfall 4: Chaining Comparisons Doesn't Work

```python
# ❌ WRONG - This doesn't work as expected
# filtered = df[25 < df['age'] < 35]

# ✓ CORRECT - Split into two conditions
filtered = df[(df['age'] > 25) & (df['age'] < 35)]
```

---

# Best Practices and Tips

## Tip 1: Save Masks for Reuse

```python
# Create reusable masks
young = df['age'] < 30
high_earner = df['salary'] > 55000

# Combine them in different ways
filtered1 = df[young & high_earner]
filtered2 = df[young | high_earner]
filtered3 = df[young & ~high_earner]
```

**Benefits:**

- More readable code
- Easier to debug
- Can reuse masks multiple times

## Tip 2: Use `.query()` for Complex Filters

For complex filters, `.query()` can be more readable:

```python
# Using boolean indexing (verbose)
filtered = df[(df['age'] > 25) & (df['salary'] > 50000) & (df['name'] != 'Bob')]

# Using .query() (cleaner)
filtered = df.query('age > 25 and salary > 50000 and name != "Bob"')
```

**Note:** `.query()` uses Python's `and`/`or` keywords, not `&`/`|`!

## Tip 3: Filter Before Processing

```python
# ✓ GOOD - Filter first, then process
young_employees = df[df['age'] < 30]
avg_salary = young_employees['salary'].mean()

# Less efficient - processes all rows first
avg_salary = df['salary'][df['age'] < 30].mean()
```

---

# Comprehensive Example: Real-World Filtering

```python
import pandas as pd
import numpy as np

# Sample sales data
sales = pd.DataFrame({
    'product': ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard',
                'Mouse', 'Headphones', 'Webcam'],
    'price': [1200, 800, 450, 300, 75, 25, 150, 100],
    'stock': [15, 30, 0, 8, 50, 100, 25, 0],
    'rating': [4.5, 4.2, 3.8, 4.7, 4.0, 3.5, 4.3, np.nan],
    'category': ['Electronics', 'Electronics', 'Electronics', 'Electronics',
                 'Accessories', 'Accessories', 'Audio', 'Video']
})

# Example 1: Products that need restocking (stock < 10 and price > 50)
restock = sales[(sales['stock'] < 10) & (sales['price'] > 50)]
print("Need restocking:")
print(restock[['product', 'stock', 'price']])

# Example 2: High-value products (expensive OR high-rated)
premium = sales[(sales['price'] > 500) | (sales['rating'] >= 4.5)]
print("\nPremium products:")
print(premium[['product', 'price', 'rating']])

# Example 3: Products in specific categories
accessories = sales[sales['category'].isin(['Accessories', 'Audio'])]
print("\nAccessories and Audio:")
print(accessories[['product', 'category']])

# Example 4: Products with ratings (not missing)
rated = sales[sales['rating'].notna()]
print("\nRated products:")
print(rated[['product', 'rating']])

# Example 5: Complex filter - electronics with good ratings and stock
good_electronics = sales[
    (sales['category'] == 'Electronics') &
    (sales['rating'] >= 4.0) &
    (sales['stock'] > 0)
]
print("\nGood electronics in stock:")
print(good_electronics[['product', 'rating', 'stock']])
```

---

# Quick Reference

## Basic Filtering

```python
df[df['col'] > 5]                    # Simple condition
```

## Logical Operations

```python
df[(df['col1'] > 5) & (df['col2'] < 10)]   # AND
df[(df['col1'] < 5) | (df['col2'] > 10)]   # OR
df[~(df['col'] > 5)]                       # NOT
```

## Advanced Methods

```python
df[df['col'].isin([1, 2, 3])]              # Multiple values
df[df['col'].str.contains('text')]         # String matching
df[df['col'].isna()]                       # Missing values
df[df['col'].notna()]                      # Non-missing values
```

## Bitwise Operators

| Operator | Meaning | Example              |
| -------- | ------- | -------------------- |
| `&`      | AND     | `(cond1) & (cond2)`  |
| `\|`     | OR      | `(cond1) \| (cond2)` |
| `~`      | NOT     | `~(condition)`       |

**Remember:** Always use **parentheses** with bitwise operators!

---

# Key Takeaways

- **Filtering has 3 steps:** Select column → Create boolean mask → Index DataFrame
- **Pandas is built on NumPy** - Series inherit NumPy's boolean indexing behavior
- **Use bitwise operators** (`&`, `|`, `~`) to combine conditions
- **Always use parentheses** around each condition with bitwise operators
- **Don't use Python's `and`/`or`/`not`** - they don't work with Series
- **`.isin()`** is great for filtering multiple specific values
- **`.isna()` and `.notna()`** are essential for handling missing data
- **String methods** (`.str.contains()`, `.str.startswith()`, etc.) filter text data
- **Save masks** for reusable, readable code
- **Filter early** in your analysis pipeline for better performance
