# SQL Formatting and Style

SQL is flexible with formatting - it doesn't require specific capitalization, new lines, or indentation. However, following style guidelines makes your code easier to read, debug, and collaborate on with others.

**Guiding principle:** Write clear and readable code.

## General Formatting Guidelines

### Keywords and Functions

- **Capitalize** all SQL keywords (SELECT, FROM, WHERE, COUNT, etc.)
- Place keywords on **new lines** for better readability

**Example:**

```sql
SELECT name, birthdate
FROM people
LIMIT 10;
```

### Field, Table, and Database Names

- Use **lowercase**
- Use **snake_case** (underscores instead of spaces)
- Keep names clear and descriptive

**Examples:** `first_name`, `release_year`, `employee_id`

### Semicolons

- **Always end queries with a semicolon (;)**
- Indicates the end of a query (like a period at the end of a sentence)
- Required in some SQL flavors (good habit to develop)
- Essential when a file contains multiple queries

### Multiple Field Selection

When selecting multiple fields, some prefer to put each on a new line with indentation:

```sql
SELECT
    title,
    release_year,
    country
FROM films
LIMIT 3;
```

## Additional Guidelines from Holywell's SQL Style Guide

Holywell's guide provides detailed standards for SQL formatting. Key recommendations include:

### Indentation

- Use consistent indentation (typically 4 spaces)
- Indent fields under SELECT when using multiple lines
- Indent conditions under WHERE

### Aliases

- Use meaningful alias names
- Use `AS` keyword explicitly for clarity
- Alias names should be lowercase and should use snake case

**Example:**

```sql
SELECT
    COUNT(birthdate) AS total_birthdates,
    COUNT(DISTINCT birthdate) AS unique_birthdates
FROM people;
```

### New Lines

- Start each major keyword (SELECT, FROM, WHERE, ORDER BY) on a new line
- Place commas at the end of lines (not the beginning)

### Readability

- Avoid overly long lines of code
- Break complex queries into multiple lines
- Use whitespace to separate logical sections

## Dealing with Non-Standard Field Names

**Problem:** Sometimes you'll encounter poorly named fields with spaces (bad practice!)

**Solution:** Enclose the field name in double-quotes to indicate it's one field despite the space.

**Example:**

```sql
SELECT "release year"  -- Field name has a space (not ideal!)
FROM films;
```

> **Note:** This is a workaround for bad naming conventions. When creating your own tables, always avoid spaces in field names!

## Why Proper Formatting Matters

- **Collaboration:** Makes it easier for others to read and understand your code
- **Debugging:** Well-formatted code is easier to troubleshoot
- **Professionalism:** Clean, readable code is highly valued in the SQL community
- **Portability:** Following standards makes code easier to translate between SQL flavors
- **Maintenance:** Future you (and others) will appreciate clear formatting

## Key Takeaway

While SQL doesn't enforce these rules, following formatting guidelines is considered **best practice** and will make you a better SQL developer. Start with the basics (capitalized keywords, new lines, semicolons) and gradually adopt more detailed standards as you progress.
