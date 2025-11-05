# SQL Query Execution Order

**Important:** SQL is not processed in the order it is written. Understanding the processing order is crucial for debugging and working with aliases.

**Processing order:**

1. **FROM** - Processed first (specifies which table to use)
2. **SELECT** - Processed second (selects the fields)
3. **LIMIT** - Processed last (limits the number of results)

**Example:**

```sql
SELECT name
FROM people
LIMIT 10;
```

**Why this matters:**

- Before any data can be selected, SQL needs to know which table to select from
- Aliases created in SELECT can only be referenced later in the query after SELECT is processed
- When debugging, knowing execution order helps you understand where the error might be occurring

# Debugging SQL - Common Errors

Debugging is a major skill in SQL. The best way to master it is to make mistakes and learn from them.

## 1. Misspelled Keywords or Field Names

**Error type:** Usually easy to debug

Some error messages are very helpful and will pinpoint the exact problem, even suggesting a solution.

**Example:**

```sql
SELECT nam FROM people;  -- 'nam' is misspelled
```

_Error message will indicate that the field "nam" doesn't exist and may suggest "name"_

> **Note:** Your code editor will typically point out exactly where the error is for spelling mistakes.

## 2. Missing Commas

**Error type:** Harder to debug

Forgetting a comma between field names is very common. Error messages for missing commas are less helpful - they show the general area but don't pinpoint the exact location.

**Example:**

```sql
SELECT title, country duration  -- Missing comma between country and duration
FROM films;
```

_The error message uses a caret (^) below the code to point to the general area. It might point to "duration", but you need to look back to find the missing comma after "country"._

## 3. Misspelled Keywords

**Error type:** Moderately easy to debug

When keywords like SELECT, FROM, or LIMIT are misspelled, the error message with the caret (^) indicator is usually accurate.

**Example:**

```sql
SELCT name FROM people;  -- 'SELCT' is misspelled
```

## Debugging Tips

- Check for missing commas between field names
- Verify spelling of keywords (SELECT, FROM, WHERE, LIMIT, etc.)
- Verify spelling of field and table names
- Remember that error carets (^) show the general area, not always the exact location
- Review your code carefully when error messages are vague
