# Combining Aggregate Functions with WHERE

You can combine aggregate functions with the WHERE clause to summarize subsets of your data. This works because **WHERE is executed before SELECT** in the query execution order.

**Execution order reminder:**

1. FROM - Identify the table
2. WHERE - Filter the data
3. SELECT - Perform calculations/select fields
4. LIMIT - Limit results

## Examples: Aggregate Functions with WHERE

### Average with WHERE

```sql
SELECT AVG(budget) AS avg_budget
FROM films
WHERE release_year >= 2010;
```

_Returns the average budget of movies made in 2010 or later_

---

### SUM with WHERE

```sql
SELECT SUM(budget) AS total_budget
FROM films
WHERE release_year = 2010;
```

_Returns: Over 8.9 billion (total budget of all movies made in 2010)_

---

### MIN with WHERE

```sql
SELECT MIN(budget) AS min_budget
FROM films
WHERE release_year = 2010;
```

_Returns: 65,000 (smallest budget for movies made in 2010)_

---

### MAX with WHERE

```sql
SELECT MAX(budget) AS max_budget
FROM films
WHERE release_year = 2010;
```

_Returns: 600 million (the movie "Kites" in Indian Rupees)_

---

### COUNT with WHERE

```sql
SELECT COUNT(budget) AS budget_count
FROM films
WHERE release_year = 2010;
```

_Returns: 194 (number of non-NULL budget values for movies made in 2010)_

# Rounding Numbers with ROUND()

When working with numerical data, you often get results with many decimal places. Use **ROUND()** to clean up numbers and round to a specified decimal place.

**ROUND() only works with numerical fields.**

## ROUND() Syntax

```sql
ROUND(number_to_round, decimal_places)
```

**Parameters:**

- `number_to_round` - The number or field to round
- `decimal_places` - (Optional) Number of decimal places to round to

## Rounding to Decimal Places

Round to a specific number of decimal places (useful for currency).

**Example:**

```sql
SELECT ROUND(AVG(budget), 2) AS avg_budget
FROM films
WHERE release_year >= 2010;
```

_Rounds the average budget to 2 decimal places (e.g., 45123456.789 becomes 45123456.79)_

## Rounding to Whole Numbers

Omit the second parameter (or use 0) to round to a whole number.

**Example:**

```sql
SELECT ROUND(AVG(budget)) AS avg_budget
FROM films
WHERE release_year >= 2010;
```

_Rounds to a whole number (e.g., 45123456.789 becomes 45123457)_

**Equivalent to:**

```sql
SELECT ROUND(AVG(budget), 0) AS avg_budget
FROM films
WHERE release_year >= 2010;
```

## Rounding with Negative Parameters

Use a negative number to round to the **left** of the decimal point.

**Examples:**

```sql
SELECT ROUND(AVG(budget), -1) AS avg_budget
FROM films;
```

_Rounds to the nearest ten (e.g., 45123456 becomes 45123460)_

```sql
SELECT ROUND(AVG(budget), -5) AS avg_budget
FROM films;
```

_Rounds to the nearest hundred thousand (e.g., 45123456 becomes 45100000)_

| Parameter | Rounds to         | Example Input | Example Output |
| --------- | ----------------- | ------------- | -------------- |
| 2         | Hundredths        | 45123456.789  | 45123456.79    |
| 1         | Tenths            | 45123456.789  | 45123456.8     |
| 0         | Ones              | 45123456.789  | 45123457       |
| -1        | Tens              | 45123456.789  | 45123460       |
| -2        | Hundreds          | 45123456.789  | 45123500       |
| -5        | Hundred thousands | 45123456.789  | 45100000       |

## Practical Use Cases

**Currency (2 decimal places):**

```sql
SELECT ROUND(AVG(budget), 2) AS avg_budget_dollars
FROM films;
```

**Clean whole numbers:**

```sql
SELECT ROUND(COUNT(*) / 10.0, 0) AS avg_per_group
FROM films;
```

**Approximations (round to thousands):**

```sql
SELECT ROUND(SUM(budget), -3) AS total_budget_thousands
FROM films;
```

## Key Takeaways

- Combine WHERE with aggregate functions to summarize filtered data
- WHERE executes before SELECT, so filtering happens before calculations
- Use ROUND() to clean up decimal numbers
- Second parameter in ROUND() is optional (defaults to 0)
- Negative parameters round to the left of the decimal point
- ROUND() only works with numerical fields
