# Filtering Data with WHERE

The **WHERE** clause allows us to filter data to focus only on records relevant to our needs. WHERE comes after FROM in the written query.

**Basic syntax:**

```sql
SELECT field_name
FROM table_name
WHERE condition;
```

## Filtering Numbers - Comparison Operators

Use comparison operators with WHERE to filter numerical data:

| Operator | Meaning                  | Example                      |
| -------- | ------------------------ | ---------------------------- |
| `>`      | Greater than (after)     | `WHERE release_year > 1960`  |
| `<`      | Less than (before)       | `WHERE release_year < 1960`  |
| `=`      | Equal to                 | `WHERE release_year = 1960`  |
| `>=`     | Greater than or equal to | `WHERE release_year >= 1960` |
| `<=`     | Less than or equal to    | `WHERE release_year <= 1960` |
| `<>`     | Not equal to             | `WHERE release_year <> 1960` |

**Example:**

```sql
SELECT title
FROM films
WHERE release_year > 1960;
```

_Returns all films released after 1960_

## Filtering Text - Using Strings

Use the equals operator (`=`) with **single quotation marks** around string values.

**Example:**

```sql
SELECT title
FROM films
WHERE country = 'Japan';
```

_Returns all films where the country is Japan_

## Multiple Criteria Filtering

You can enhance filters by adding multiple criteria using OR, AND, and BETWEEN keywords.

### OR Operator

Use OR when you want to satisfy **at least one** condition.

**Example:**

```sql
SELECT title
FROM films
WHERE release_year = 1994
   OR release_year = 2000;
```

_Returns films released in either 1994 OR 2000_

> **Important:** You must specify the field name for every OR condition. This is invalid: `WHERE release_year = 1994 OR 2000`

### AND Operator

Use AND when you want to satisfy **all** conditions.

**Example:**

```sql
SELECT title
FROM films
WHERE release_year >= 1994
  AND release_year <= 2000;
```

_Returns films released between 1994 and 2000 (both conditions must be true)_

> **Important:** You must specify the field name for every AND condition, just like with OR.

### Combining AND with OR

You can combine AND and OR operators for more complex filtering. Use **parentheses** to ensure correct execution order.

**Example:**

```sql
SELECT title
FROM films
WHERE (release_year = 1994 OR release_year = 1995)
  AND (certification = 'PG' OR certification = 'R');
```

_Returns films released in 1994 or 1995 that have either PG or R certification_

> **Critical:** Always enclose individual clauses in parentheses when combining AND/OR to ensure the correct execution order. Without parentheses, you may get unexpected results.

## Filtering Ranges with BETWEEN

The BETWEEN keyword provides a shorthand for filtering values within a specified range.

**Syntax:**

```sql
WHERE field_name BETWEEN value1 AND value2
```

**Example - Using comparison operators:**

```sql
SELECT title
FROM films
WHERE release_year >= 1994
  AND release_year <= 2000;
```

**Example - Using BETWEEN (equivalent to above):**

```sql
SELECT title
FROM films
WHERE release_year BETWEEN 1994 AND 2000;
```

> **Important:** BETWEEN is **inclusive**, meaning it includes both the beginning and end values. The example above includes films from both 1994 and 2000.

### Combining BETWEEN with AND/OR

BETWEEN can be combined with other operators for more powerful queries.

**Example:**

```sql
SELECT title
FROM films
WHERE release_year BETWEEN 1994 AND 2000
  AND country = 'United Kingdom';
```

_Returns all films released between 1994 and 2000 from the United Kingdom_

## Query Execution Order with WHERE

**Written order:**

```sql
SELECT title
FROM films
WHERE release_year > 1960
LIMIT 5;
```

**Execution order:**

1. **FROM** - Identify the table
2. **WHERE** - Filter the records
3. **SELECT** - Select the fields
4. **LIMIT** - Limit the results

> **Remember:** WHERE is processed before SELECT, so you cannot use aliases created in SELECT within the WHERE clause.
