# Selecting Data in Pandas DataFrames

Once you have a DataFrame, you need to know how to access specific rows, columns, or individual elements. Pandas provides multiple ways to select data, each with different use cases.

---

# Understanding Pandas Series vs DataFrames

Before diving into selection methods, it's important to understand the difference:

**Pandas Series:**

- A **1-dimensional** labeled array
- Think of it as a single column or row with labels
- Has an index and values

**Pandas DataFrame:**

- A **2-dimensional** labeled data structure
- Multiple Series stacked together (each column is a Series)
- Has row labels (index) and column labels

**Key insight:** A DataFrame is essentially multiple Series combined together!

## Series vs DataFrame: What Gets Returned?

When selecting data, the return type depends on **dimensionality**:

**Returns a Series (1D):**

- Single row or single column selected without brackets: `df.loc['RU']` or `df.loc[:, 'country']`
- Results in a one-dimensional structure

**Returns a DataFrame (2D):**

- Selection wrapped in a list (even single items): `df.loc[['RU']]` or `df.loc[:, ['country']]`
- Multiple rows or columns: `df.loc[['RU', 'IN']]`
- Maintains a two-dimensional grid structure

**Quick rule:** Use **lists** `['item']` to get a DataFrame; use **strings/direct values** `'item'` to get a Series.

---

# Column Selection with Square Brackets `[]`

## Selecting a Single Column (Returns Series)

Use **single square brackets** with the column name:

```python
import pandas as pd

# Sample DataFrame
brics = pd.read_csv('brics.csv', index_col=0)

# Select the 'country' column
brics['country']
```

**Output:**

```
BR          Brazil
RU          Russia
IN           India
CH           China
SA    South Africa
Name: country, dtype: object
```

**Notice:**

- Returns a **Pandas Series** (1D)
- Shows `Name: country, dtype: object` at the bottom
- Contains row labels and values

**Check the type:**

```python
type(brics['country'])  # Returns: pandas.core.series.Series
```

## Selecting a Single Column (Returns DataFrame)

Use **double square brackets** to keep it as a DataFrame:

```python
# Select 'country' column as a DataFrame
brics[['country']]
```

**Output:**

```
         country
BR        Brazil
RU        Russia
IN         India
CH         China
SA  South Africa
```

**Notice:**

- Returns a **DataFrame** (2D)
- Column header is preserved
- Useful when you need DataFrame methods/functionality

**Check the type:**

```python
type(brics[['country']])  # Returns: pandas.core.frame.DataFrame
```

## Selecting Multiple Columns

Use **double square brackets** with a list of column names:

```python
# Select multiple columns
brics[['country', 'capital']]
```

**Output:**

```
         country    capital
BR        Brazil   Brasilia
RU        Russia     Moscow
IN         India  New Delhi
CH         China    Beijing
SA  South Africa   Pretoria
```

**Result:** A "sub-DataFrame" containing only the specified columns.

**Think of it as:** Putting a list of column names inside square brackets:

```python
columns_to_select = ['country', 'capital']
brics[columns_to_select]
```

---

# Row Selection with Square Brackets `[]` (Slicing)

You can select rows using **slice notation**, similar to Python lists:

```python
# Select rows by position (slice)
brics[1:4]  # Rows at index 1, 2, 3 (end is exclusive!)
```

**Output:**

```
    country    capital   area  population
RU   Russia     Moscow 17.100      143.50
IN    India  New Delhi  3.286     1252.00
CH    China    Beijing  9.597     1357.00
```

**Important notes:**

- Uses **position-based indexing** (0, 1, 2, 3, 4...)
- The end of the slice is **exclusive** (`1:4` means indices 1, 2, 3)
- Returns a **DataFrame**

**⚠️ Critical Rule:** You **must** use a slice to select rows with square brackets. You cannot use a single integer like `brics[1]`.

```python
# ❌ WRONG - Looks for a column named 1
brics[1]  # KeyError: 1

# ✓ CORRECT - Use a slice
brics[1:2]  # Returns row at position 1

# ✓ BETTER - Use .iloc[] for single row selection
brics.iloc[1]   # Returns Series
brics.iloc[[1]] # Returns DataFrame
```

**Why?** Without a slice, Pandas assumes you're trying to select a **column** with that name, not a row by position.

**Common patterns:**

```python
brics[0:1]   # First row
brics[:3]    # First three rows
brics[2:]    # From third row to end
```

---

# Advanced Selection with `.loc[]` (Label-Based)

`.loc[]` is the most versatile selection method. It uses **row and column labels** for selection.

**Syntax:** `df.loc[row_selection, column_selection]`

## Selecting Single Row (Returns Series)

```python
# Select row with label 'RU'
brics.loc['RU']
```

**Output:**

```
country       Russia
capital       Moscow
area            17.1
population     143.5
Name: RU, dtype: object
```

**Returns:** Pandas Series with row data

## Selecting Single Row (Returns DataFrame)

```python
# Select row with label 'RU' as DataFrame
brics.loc[['RU']]
```

**Output:**

```
    country capital  area  population
RU   Russia  Moscow  17.1       143.5
```

**Returns:** DataFrame with one row

## Selecting Multiple Rows

```python
# Select multiple rows by labels
brics.loc[['RU', 'IN', 'CH']]
```

**Output:**

```
    country    capital   area  population
RU   Russia     Moscow 17.100      143.50
IN    India  New Delhi  3.286     1252.00
CH    China    Beijing  9.597     1357.00
```

## Selecting Rows AND Columns

This is where `.loc[]` becomes powerful - you can select specific rows AND columns simultaneously:

```python
# Select specific rows AND specific columns
brics.loc[['RU', 'IN', 'CH'], ['country', 'capital']]
```

**Output:**

```
    country    capital
RU   Russia     Moscow
IN    India  New Delhi
CH    China    Beijing
```

**Format:** `df.loc[row_labels, column_labels]`

- **Before comma:** Row selection
- **After comma:** Column selection
- **Result:** Intersection of rows and columns

## Selecting All Rows, Specific Columns

Use `:` (colon) to select all rows:

```python
# All rows, but only 'country' and 'capital' columns
brics.loc[:, ['country', 'capital']]
```

**Output:**

```
         country    capital
BR        Brazil   Brasilia
RU        Russia     Moscow
IN         India  New Delhi
CH         China    Beijing
SA  South Africa   Pretoria
```

**The `:` means:** "All rows from beginning to end"

---

# Advanced Selection with `.iloc[]` (Position-Based)

`.iloc[]` works exactly like `.loc[]`, but uses **integer positions** instead of labels.

**Syntax:** `df.iloc[row_positions, column_positions]`

## Selecting Single Row

```python
# Select row at position 1 (Russia)
brics.iloc[[1]]
```

**Output:**

```
    country capital  area  population
RU   Russia  Moscow  17.1       143.5
```

**Note:** Position `1` corresponds to the row with label `'RU'` (second row, zero-indexed)

## Selecting Multiple Rows

```python
# Select rows at positions 1, 2, 3
brics.iloc[[1, 2, 3]]
```

**Output:**

```
    country    capital   area  population
RU   Russia     Moscow 17.100      143.50
IN    India  New Delhi  3.286     1252.00
CH    China    Beijing  9.597     1357.00
```

**Equivalent to:** `brics.loc[['RU', 'IN', 'CH']]`

## Selecting Rows AND Columns by Position

```python
# Rows at positions 1, 2, 3 AND columns at positions 0, 1
brics.iloc[[1, 2, 3], [0, 1]]
```

**Output:**

```
    country    capital
RU   Russia     Moscow
IN    India  New Delhi
CH    China    Beijing
```

**Column positions:**

- 0 = 'country'
- 1 = 'capital'
- 2 = 'area'
- 3 = 'population'

## Selecting All Rows, Specific Columns

```python
# All rows, but only columns at positions 0 and 1
brics.iloc[:, [0, 1]]
```

**Output:**

```
         country    capital
BR        Brazil   Brasilia
RU        Russia     Moscow
IN         India  New Delhi
CH         China    Beijing
SA  South Africa   Pretoria
```

---

# Comparison: `[]` vs `.loc[]` vs `.iloc[]`

| Method                 | Selection Type     | Rows  | Columns  | Use Case                    |
| ---------------------- | ------------------ | ----- | -------- | --------------------------- |
| `df['col']`            | Column by label    | ✗     | Single   | Quick column access         |
| `df[['col1', 'col2']]` | Columns by labels  | ✗     | Multiple | Select specific columns     |
| `df[1:4]`              | Rows by slice      | Slice | ✗        | Quick row slicing           |
| `df.loc[]`             | **Label-based**    | ✓     | ✓        | Most versatile, uses labels |
| `df.iloc[]`            | **Position-based** | ✓     | ✓        | When you know positions     |

---

# `.loc[]` vs `.iloc[]`: Key Differences

## `.loc[]` - Label-Based Selection

**Uses row and column labels:**

```python
# Select by label
brics.loc['RU', 'country']           # Single element
brics.loc[['RU', 'IN'], ['country']] # Multiple rows/columns
brics.loc[:, 'country']              # All rows, one column
```

**Best when:**

- You know the row/column names
- Your data has meaningful labels
- You're writing readable, self-documenting code

## `.iloc[]` - Position-Based Selection

**Uses integer positions (like NumPy arrays):**

```python
# Select by position
brics.iloc[1, 0]           # Single element (row 1, column 0)
brics.iloc[[1, 2], [0]]    # Multiple rows/columns
brics.iloc[:, 0]           # All rows, first column
```

**Best when:**

- You need to select by position/index number
- You're iterating through rows/columns numerically
- Working with data without meaningful labels

---

# Complete Examples

## Example 1: Using Square Brackets

```python
import pandas as pd

brics = pd.read_csv('brics.csv', index_col=0)

# Select single column (Series)
countries = brics['country']

# Select multiple columns (DataFrame)
subset = brics[['country', 'capital']]

# Select rows by slice
first_three = brics[:3]
```

## Example 2: Using `.loc[]`

```python
# Single row (DataFrame)
russia = brics.loc[['RU']]

# Multiple rows
selection = brics.loc[['RU', 'IN', 'CH']]

# Rows and columns
subset = brics.loc[['RU', 'IN'], ['country', 'capital']]

# All rows, specific columns
capitals = brics.loc[:, ['country', 'capital']]

# Single element
russia_pop = brics.loc['RU', 'population']  # Returns: 143.5
```

## Example 3: Using `.iloc[]`

```python
# Single row (DataFrame)
russia = brics.iloc[[1]]

# Multiple rows
selection = brics.iloc[[1, 2, 3]]

# Rows and columns
subset = brics.iloc[[1, 2], [0, 1]]

# All rows, specific columns
capitals = brics.iloc[:, [0, 1]]

# Single element
russia_pop = brics.iloc[1, 3]  # Returns: 143.5
```

---

# Quick Reference Guide

```python
# COLUMNS
df['col']              # Single column → Series
df[['col']]            # Single column → DataFrame
df[['col1', 'col2']]   # Multiple columns → DataFrame

# ROWS (Slicing only)
df[1:4]                # Rows by position slice

# ROWS AND COLUMNS (Label-based)
df.loc['row']          # Single row → Series
df.loc[['row']]        # Single row → DataFrame
df.loc[['r1', 'r2']]   # Multiple rows → DataFrame
df.loc['row', 'col']   # Single element
df.loc[['r1', 'r2'], ['c1', 'c2']]  # Rows & columns
df.loc[:, 'col']       # All rows, one column

# ROWS AND COLUMNS (Position-based)
df.iloc[0]             # Single row → Series
df.iloc[[0]]           # Single row → DataFrame
df.iloc[[0, 1]]        # Multiple rows → DataFrame
df.iloc[0, 1]          # Single element
df.iloc[[0, 1], [0, 1]]  # Rows & columns by position
df.iloc[:, 0]          # All rows, first column
```

---

# Key Takeaways

- **Square brackets `[]`** are great for quick column access or row slicing
- **`.loc[]`** is the most versatile - select by **labels** (row/column names)
- **`.iloc[]`** selects by **integer position** (like NumPy arrays)
- **Single brackets** return a **Series**; **double brackets** return a **DataFrame**
- Use `.loc[]` when you want readable, label-based selection
- Use `.iloc[]` when you need position-based selection
- The syntax `df.loc[rows, columns]` is similar to NumPy's 2D indexing
- **Before comma** = rows; **After comma** = columns
- Use `:` to select "all" (all rows or all columns)

---

# Practice Makes Perfect!

The best way to master DataFrame selection is through practice. Try different combinations of:

- Single vs multiple selections
- Series vs DataFrame returns
- Label-based vs position-based selection
- Rows only, columns only, or both

Keep experimenting with `.loc[]` and `.iloc[]` - they're essential tools for data analysis!
