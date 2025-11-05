# Counting Records with COUNT()

The **COUNT()** function allows us to count the number of records that have a value in a field.

**Basic syntax:**

```sql
SELECT COUNT(field_name) FROM table_name;
```

**Example:**

```sql
SELECT COUNT(birthdate) FROM people;
```

_Returns the number of records in the people table that have a value in the birthdate field._

> **Note:** A valid value means any value that is not NULL. We'll cover NULLs in more detail later.

## Counting Multiple Fields

To count values in multiple fields, use COUNT() multiple times in the same query.

**Example:**

```sql
SELECT
    COUNT(name) AS name_count,
    COUNT(birthdate) AS birthday_count
FROM people;
```

_This query result would have two columns (name_count and birthday_count) and a single row showing the count for each field._

## Counting Total Records with COUNT(\*)

To count the **total number of records** in a table (regardless of whether individual fields have values), use COUNT(\*) with an asterisk.

**Example:**

```sql
SELECT COUNT(*) FROM people;
```

_The asterisk represents all fields. This counts all records in the table._

# Combining COUNT() with DISTINCT

Often when counting, we may have duplicate values that inflate our count. Use **DISTINCT** with COUNT() to count only unique values in a field.

**Syntax:**

```sql
SELECT COUNT(DISTINCT field_name) FROM table_name;
```

**Example:**

```sql
SELECT COUNT(DISTINCT name) AS unique_names_count FROM people;
```

_Returns the number of unique names in the people table._

**Why this matters:**
If you have 6,152 birthdates but only 5,398 distinct birthdates, it means some people share the same birthday. COUNT() includes duplicates, while COUNT(DISTINCT) counts each unique value only once.
