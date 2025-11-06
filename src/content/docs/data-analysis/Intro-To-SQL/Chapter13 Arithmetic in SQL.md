# Arithmetic in SQL

SQL supports basic arithmetic operations using standard mathematical symbols.

**Arithmetic operators:**

- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`

**Examples:**

```sql
SELECT (10 + 2);  -- Returns: 12
SELECT (5 * 2);   -- Returns: 10
SELECT (10 - 5);  -- Returns: 5
SELECT (10 / 2);  -- Returns: 5
```

> **Note:** Parentheses indicate when calculations should execute and provide clarity, even when not strictly required for single operations.

## Integer vs. Decimal Division

**Important:** SQL assumes you want an integer result when dividing an integer by an integer.

**Problem example:**

```sql
SELECT (4 / 3);  -- Returns: 1 (not 1.333...)
```

_Both numbers are integers, so SQL returns an integer (truncates the decimal)_

**Solution:** Add decimal places to your numbers for more precision.

```sql
SELECT (4.0 / 3.0);  -- Returns: 1.333...
```

_At least one number has a decimal, so SQL returns a decimal result_

**Rule:** If you perform division with at least one NUMERIC/decimal value, the result will include decimal places.

## Aggregate Functions vs. Arithmetic Operations

There's a key difference in how these work:

| Type                      | Direction                  | What it does                                                     | Example                                          |
| ------------------------- | -------------------------- | ---------------------------------------------------------------- | ------------------------------------------------ |
| **Aggregate Functions**   | Vertical (down columns)    | Operates on multiple values within a single field                | `SUM(budget)` adds all budgets                   |
| **Arithmetic Operations** | Horizontal (across fields) | Operates on values within a single record across multiple fields | `gross - budget` calculates profit for each film |

**Visual representation:**

**Aggregate (Vertical):**

```
budget column
------------
1000
2000  → SUM(budget) = 6000
3000
```

**Arithmetic (Horizontal):**

```
Record 1: gross (5000) - budget (1000) = 4000 profit
Record 2: gross (8000) - budget (2000) = 6000 profit
Record 3: gross (7000) - budget (3000) = 4000 profit
```

## Aliasing with Arithmetic

When using arithmetic operations, the query result **doesn't have a defined field name**, so you must use an alias.

**Without alias (unclear):**

```sql
SELECT gross - budget
FROM films;
```

_Result field name: "?column?" or "(gross - budget)" - not clear or useful_

**With alias (clear):**

```sql
SELECT gross - budget AS profit
FROM films;
```

_Result field name: "profit" - clear and descriptive!_

> **Best practice:** Always use an alias when performing arithmetic operations to accurately describe what the calculation represents.

## Aliasing with Multiple Aggregate Functions

Aliases are especially important when using multiple aggregate functions of the same type.

**Problem without aliases:**

```sql
SELECT
    MAX(budget),
    MAX(duration)
FROM films;
```

_Both fields would be named "max" - confusing!_

**Solution with aliases:**

```sql
SELECT
    MAX(budget) AS max_budget,
    MAX(duration) AS max_duration
FROM films;
```

_Each field has a clear, distinct name_

## Order of Execution with Aliases

**Critical:** Aliases are created during the SELECT phase, so they **cannot** be used in clauses that execute before SELECT.

**Execution order:**

1. FROM
2. WHERE
3. SELECT (aliases created here)
4. LIMIT

**This will NOT work:**

```sql
SELECT gross - budget AS profit
FROM films
WHERE profit > 1000000;  -- ERROR! "profit" doesn't exist yet
```

_WHERE executes before SELECT, so the alias hasn't been created_

**This WILL work:**

```sql
SELECT gross - budget AS profit
FROM films
WHERE gross - budget > 1000000;  -- Must use the full expression
```

_Or filter the data first, then create the alias_

> **Remember:** You cannot reference an alias in the WHERE clause because WHERE is processed before SELECT creates the alias.

## Key Takeaways

- SQL supports basic arithmetic: +, -, \*, /
- Be careful with integer division - use decimals (4.0) for precise results
- Aggregate functions work vertically (on fields), arithmetic works horizontally (across fields in a record)
- Always use aliases with arithmetic to make results clear
- Aliases are created in SELECT and cannot be used in WHERE
- Parentheses provide clarity in arithmetic expressions
