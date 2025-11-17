# Introduction to Pandas

Most data that you'll work with as a data scientist is formatted in a **tabular structure** - organized in rows and columns like a spreadsheet.

**Common examples of tabular data:**

- Temperature measurements (date, time, location, temperature)
- Country information (name, capital, area, population)
- Sales records (date, product, quantity, price)
- Survey responses (respondent ID, age, answers)

---

# Why Not Just Use NumPy Arrays?

We already know about 2D NumPy arrays - why not use those for tabular data?

## The Problem with NumPy Arrays

NumPy arrays have a limitation: **all elements must be the same data type**.

**Example of mixed data types:**

```python
# BRICS country data has different types:
# - Country name: string
# - Capital: string
# - Area: float
# - Population: float

# NumPy would force everything to be the same type!
np.array([['Brazil', 'Brasilia', 8.516, 200.4],
          ['Russia', 'Moscow', 17.10, 143.5]])
# Everything becomes strings! Numbers lose their numeric properties
```

**We need a data structure that can:**

- Handle multiple data types in different columns
- Label rows and columns with meaningful names
- Provide powerful data manipulation tools

---

# Enter Pandas: DataFrames

**Pandas** is a high-level data manipulation library built on top of NumPy, developed by Wes McKinney.

**Key advantage:** Pandas can handle tabular data with **mixed data types** across different columns.

## What is a DataFrame?

A **DataFrame** is Pandas' main data structure - a 2D labeled data structure with:

- **Rows**: Observations (each row represents one data point)
- **Columns**: Variables (each column represents a feature/attribute)
- **Row labels** (index): Unique identifier for each row
- **Column labels**: Names for each variable

**Installation:**

```bash
pip install pandas
```

**Importing:**

```python
import pandas as pd  # Standard convention
```

---

# Creating DataFrames from Dictionaries

You can manually create a DataFrame from a Python dictionary.

## Method: Dictionary to DataFrame

**Structure:**

- **Keys** → Column labels
- **Values** → Column data (as lists)
- All lists must have the **same length**

**Example:**

```python
import pandas as pd

# Create dictionary with column data
data = {
    'country': ['Brazil', 'Russia', 'India', 'China', 'South Africa'],
    'capital': ['Brasilia', 'Moscow', 'New Delhi', 'Beijing', 'Pretoria'],
    'area': [8.516, 17.10, 3.286, 9.597, 1.221],      # in million km²
    'population': [200.4, 143.5, 1252.0, 1357.0, 52.98]  # in millions
}

# Create DataFrame
brics = pd.DataFrame(data)
print(brics)
```

**Output:**

```
       country    capital   area  population
0       Brazil   Brasilia  8.516      200.40
1       Russia     Moscow 17.100      143.50
2        India  New Delhi  3.286     1252.00
3        China    Beijing  9.597     1357.00
4  South Africa   Pretoria  1.221       52.98
```

## Setting Custom Row Labels (Index)

By default, Pandas uses numeric indices (0, 1, 2...). You can set custom row labels:

```python
import pandas as pd

# Create DataFrame
data = {
    'country': ['Brazil', 'Russia', 'India', 'China', 'South Africa'],
    'capital': ['Brasilia', 'Moscow', 'New Delhi', 'Beijing', 'Pretoria'],
    'area': [8.516, 17.10, 3.286, 9.597, 1.221],
    'population': [200.4, 143.5, 1252.0, 1357.0, 52.98]
}

brics = pd.DataFrame(data)

# Set custom row labels
brics.index = ['BR', 'RU', 'IN', 'CH', 'SA']

print(brics)
```

**Output:**

```
         country    capital   area  population
BR        Brazil   Brasilia  8.516      200.40
RU        Russia     Moscow 17.100      143.50
IN         India  New Delhi  3.286     1252.00
CH         China    Beijing  9.597     1357.00
SA  South Africa   Pretoria  1.221       52.98
```

**Note:** Row labels (also called the **index**) should be unique identifiers for each observation.

---

# Creating DataFrames from CSV Files

In real-world data science, you'll rarely build DataFrames manually. Instead, you'll import data from external files.

## CSV Files (Comma-Separated Values)

CSV is a common format for storing tabular data in plain text:

**Example CSV file (`brics.csv`):**

```
,country,capital,area,population
BR,Brazil,Brasilia,8.516,200.4
RU,Russia,Moscow,17.10,143.5
IN,India,New Delhi,3.286,1252
CH,China,Beijing,9.597,1357
SA,South Africa,Pretoria,1.221,52.98
```

## Reading CSV Files with `pd.read_csv()`

```python
import pandas as pd

# Read CSV file
brics = pd.read_csv('brics.csv')
print(brics)
```

**Problem - Default output:**

```
  Unnamed: 0       country    capital   area  population
0         BR        Brazil   Brasilia  8.516      200.40
1         RU        Russia     Moscow 17.100      143.50
2         IN         India  New Delhi  3.286     1252.00
3         CH         China    Beijing  9.597     1357.00
4         SA  South Africa   Pretoria  1.221       52.98
```

**Issue:** The first column (row labels) is treated as a data column!

## Solution: Specify Index Column

Use the `index_col` parameter to tell Pandas which column contains the row labels:

```python
import pandas as pd

# Read CSV and set first column as index
brics = pd.read_csv('brics.csv', index_col=0)
print(brics)
```

**Correct output:**

```
         country    capital   area  population
BR        Brazil   Brasilia  8.516      200.40
RU        Russia     Moscow 17.100      143.50
IN         India  New Delhi  3.286     1252.00
CH         China    Beijing  9.597     1357.00
SA  South Africa   Pretoria  1.221       52.98
```

**Perfect!** Now the DataFrame has proper row labels and all columns are correctly identified.

---

# Common `read_csv()` Parameters

The `read_csv()` function has many parameters for customizing data import:

| Parameter   | Purpose                                   | Example                  |
| ----------- | ----------------------------------------- | ------------------------ |
| `index_col` | Specify which column to use as row labels | `index_col=0`            |
| `header`    | Specify which row contains column names   | `header=0`               |
| `names`     | Provide custom column names               | `names=['col1', 'col2']` |
| `sep`       | Specify delimiter (default is comma)      | `sep=';'` for semicolon  |
| `skiprows`  | Skip rows at beginning                    | `skiprows=2`             |
| `na_values` | Specify what values mean "missing"        | `na_values=['NA', '?']`  |

**Example with multiple parameters:**

```python
# Read CSV with custom settings
df = pd.read_csv('data.csv',
                 index_col=0,           # First column as index
                 sep=';',               # Semicolon-separated
                 na_values=['NA', '-']) # Treat 'NA' and '-' as missing
```

**Tip:** Check the [official documentation](https://pandas.pydata.org/docs/reference/api/pandas.read_csv.html) for the complete list of parameters!

---

# DataFrame Structure Summary

A Pandas DataFrame consists of:

```
         country    capital   area  population  ← Column labels
         -------    -------   ----  ----------
BR        Brazil   Brasilia  8.516      200.40  ← Row (observation)
RU        Russia     Moscow 17.100      143.50  ← Row (observation)
IN         India  New Delhi  3.286     1252.00  ← Row (observation)
CH         China    Beijing  9.597     1357.00  ← Row (observation)
SA  South Africa   Pretoria  1.221       52.98  ← Row (observation)
↑
Row labels (index)
```

**Key components:**

1. **Data values** - The actual content (can be different types per column)
2. **Column labels** - Names for each variable
3. **Row labels (index)** - Unique identifiers for each observation

---

# Pandas vs NumPy: Quick Comparison

| Feature        | NumPy Arrays          | Pandas DataFrames            |
| -------------- | --------------------- | ---------------------------- |
| **Data types** | Single type only      | Mixed types per column       |
| **Labels**     | Numeric indices only  | Custom row & column labels   |
| **Use case**   | Numerical computation | Data analysis & manipulation |
| **Level**      | Lower-level           | Higher-level                 |
| **Built on**   | C/Fortran             | NumPy                        |

**When to use each:**

- **NumPy**: Mathematical operations, numerical computing, homogeneous data
- **Pandas**: Data analysis, real-world datasets, mixed data types, labeled data

---

# Key Takeaways

- **Pandas** is built on NumPy for high-level data manipulation
- **DataFrames** are 2D labeled data structures that can hold mixed data types
- **Create from dictionary**: `pd.DataFrame(dict)` - keys become columns
- **Create from CSV**: `pd.read_csv('file.csv', index_col=0)` - common for real data
- **Row labels (index)** uniquely identify observations
- **Column labels** identify variables/features
- Pandas is **essential** for data science - handles real-world messy data better than NumPy
- Always check `read_csv()` documentation for powerful import options

---

# Complete Example: Building a DataFrame

```python
import pandas as pd

# Method 1: From dictionary
data = {
    'country': ['Brazil', 'Russia', 'India', 'China', 'South Africa'],
    'capital': ['Brasilia', 'Moscow', 'New Delhi', 'Beijing', 'Pretoria'],
    'area': [8.516, 17.10, 3.286, 9.597, 1.221],
    'population': [200.4, 143.5, 1252.0, 1357.0, 52.98]
}

brics = pd.DataFrame(data)
brics.index = ['BR', 'RU', 'IN', 'CH', 'SA']

# Method 2: From CSV (more common in practice)
brics = pd.read_csv('brics.csv', index_col=0)

# Now you can work with your DataFrame!
print(brics)
print(brics.shape)  # (5, 4) - 5 rows, 4 columns
print(brics.dtypes) # See data types of each column
```
