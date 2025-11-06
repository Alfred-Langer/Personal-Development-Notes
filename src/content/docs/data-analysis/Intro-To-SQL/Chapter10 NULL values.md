# NULL Values

**NULL** represents a missing, unknown, or not-applicable value in SQL.

**Why NULLs exist:**

- Human error during data entry
- Information not available
- Information unknown

**Why NULLs matter:** NULL values are very common in real-world databases and can significantly affect your analysis if not handled properly. For example, if you're analyzing data and assume all records have complete information, you might make inaccurate conclusions.

## How COUNT() Handles NULL Values

**Important:** COUNT() with a field name only counts records that have a non-NULL value in that field.

**Example:**

```sql
SELECT COUNT(birthdate) AS birthdate_count
FROM people;
```

_Returns: 6152 (only counts records where birthdate is NOT NULL)_

```sql
SELECT COUNT(*) AS total_records
FROM people;
```

_Returns: 8397 (counts all records, regardless of NULL values)_

**The difference:** 8397 - 6152 = 2245 records have NULL birthdates

## Finding NULL Values with IS NULL

Use the **IS NULL** operator with WHERE to filter for records with missing values.

**Example:**

```sql
SELECT name
FROM people
WHERE birthdate IS NULL;
```

_Returns all names where birthdate is missing_

**Counting NULL values:**

```sql
SELECT COUNT(*) AS missing_birthdates
FROM people
WHERE birthdate IS NULL;
```

_Returns: 2245 (the number of records with NULL birthdates)_

## Filtering Out NULL Values with IS NOT NULL

Use the **IS NOT NULL** operator to filter for records that have values (exclude NULLs).

**Example:**

```sql
SELECT name
FROM people
WHERE birthdate IS NOT NULL;
```

_Returns all names where birthdate is NOT missing_

**Counting non-NULL values:**

```sql
SELECT COUNT(*) AS non_missing_birthdates
FROM people
WHERE birthdate IS NOT NULL;
```

_Returns: 6152 (the number of records with birthdates)_

## COUNT(field) vs COUNT(\*) with IS NOT NULL

**Question:** What's the difference between these two queries?

```sql
-- Option 1
SELECT COUNT(birthdate) AS birthdate_count
FROM people;
```

```sql
-- Option 2
SELECT COUNT(*) AS birthdate_count
FROM people
WHERE birthdate IS NOT NULL;
```

**Answer:** There is no difference - both count non-NULL values and return the same result (6152).

> **Note:** While using `COUNT(field)` and `COUNT(*) WHERE field IS NOT NULL` produce the same result, explicitly using IS NOT NULL can make your intent clearer to other developers reading your code.

## Best Practices with NULL Values

- **Always check for NULLs** when working with real-world data
- Use IS NULL to identify how many missing values exist in your data
- Use IS NOT NULL to filter out incomplete records when necessary
- Be aware that NULL values can affect your analysis and lead to incorrect conclusions
- Don't worry - working with NULLs will become second nature as it's very common!

## Key Takeaways

- NULL = missing or unknown value
- COUNT(field) does not count NULL values
- COUNT(\*) counts all records, including those with NULLs
- Use IS NULL to find missing values
- Use IS NOT NULL to exclude missing values
