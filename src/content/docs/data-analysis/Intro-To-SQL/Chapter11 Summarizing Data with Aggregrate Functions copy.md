# Summarizing Data with Aggregate Functions

When analyzing data, we often want to understand the dataset as a whole, not just individual records. SQL provides **aggregate functions** to summarize data.

**What is an aggregate function?**
A function that performs a calculation on multiple values and returns a single value.

**Key concept:** Aggregate functions operate on fields (columns), not records (rows).

## Common Aggregate Functions

### COUNT()

Counts the number of non-NULL values in a field (or all records with `*`).

**Example:**

```sql
SELECT COUNT(budget) AS budget_count
FROM films;
```

---

### AVG() - Average (Numerical Only)

Calculates the average of all values in a numerical field (INT or NUMERIC).

**Example:**

```sql
SELECT AVG(budget) AS avg_budget
FROM films;
```

_Returns: Over 39 million (average budget per film)_

> **Note:** AVG() can only be used with numerical fields since it requires arithmetic.

---

### SUM() - Sum (Numerical Only)

Calculates the total sum of all values in a numerical field (INT or NUMERIC).

**Example:**

```sql
SELECT SUM(budget) AS total_budget
FROM films;
```

_Returns: Over 181 billion (total budget of all films)_

> **Note:** SUM() can only be used with numerical fields since it requires arithmetic.

---

### MIN() - Minimum

Finds the smallest or "lowest" value in a field.

**With numbers:**

```sql
SELECT MIN(budget) AS min_budget
FROM films;
```

_Returns the lowest budget value_

**With strings:**

```sql
SELECT MIN(country) AS first_country
FROM films;
```

_Returns: "Afghanistan" (first alphabetically)_

**With dates:**

```sql
SELECT MIN(release_date) AS earliest_date
FROM films;
```

_Returns the earliest date_

---

### MAX() - Maximum

Finds the largest or "highest" value in a field.

**With numbers:**

```sql
SELECT MAX(budget) AS max_budget
FROM films;
```

_Returns the highest budget value_

**Example:** The 2006 South Korean movie "The Host" had a budget of over 12 billion (note: data contains multiple currencies, so direct comparison requires exchange rates).

**With strings:**

```sql
SELECT MAX(country) AS last_country
FROM films;
```

_Returns: "West Germany" (last alphabetically)_

**With dates:**

```sql
SELECT MAX(release_date) AS latest_date
FROM films;
```

_Returns the most recent date_

## Aggregate Functions with Different Data Types

| Function | Numerical (INT, NUMERIC) | Text (VARCHAR) | Dates |
| -------- | ------------------------ | -------------- | ----- |
| COUNT()  | ✓                        | ✓              | ✓     |
| AVG()    | ✓                        | ✗              | ✗     |
| SUM()    | ✓                        | ✗              | ✗     |
| MIN()    | ✓                        | ✓              | ✓     |
| MAX()    | ✓                        | ✓              | ✓     |

**Key takeaway:**

- AVG() and SUM() require numerical fields (arithmetic operations)
- COUNT(), MIN(), and MAX() work with non-numerical fields too

## Best Practice: Use Aliases with Aggregate Functions

When using aggregate functions, the result automatically uses the function name as the field name (e.g., "min", "max", "avg"). This is generic and unclear.

**Without alias (unclear):**

```sql
SELECT AVG(budget)
FROM films;
```

_Result field name: "avg" (not descriptive). Doesn't tell us what it's the average of_

**With alias (clear):**

```sql
SELECT AVG(budget) AS avg_budget
FROM films;
```

_Result field name: "avg_budget" descriptive and clear_

> **Always use descriptive aliases** when summarizing data to make your results clear to anyone reading your code.

## Key Takeaways

- Aggregate functions summarize data by performing calculations on multiple values
- They operate on columns (fields), not rows (records)
- COUNT(), MIN(), and MAX() work with any data type
- AVG() and SUM() only work with numerical data
- Always use aliases to make results clear and readable
