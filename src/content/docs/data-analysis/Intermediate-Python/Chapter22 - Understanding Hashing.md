# What are Dictionaries?

A **dictionary** is a Python data structure that stores data as **key-value pairs**. Unlike lists, which use numerical indices, dictionaries allow you to associate meaningful keys with their corresponding values.

**Syntax:**

```python
my_dict = {'key1': value1, 'key2': value2, 'key3': value3}
```

---

# Why Use Dictionaries?

Dictionaries solve a common problem with lists: connecting related information without using indices.

## Problem with Lists

When tracking related data (like countries and populations), you need two separate lists:

```python
countries = ['Afghanistan', 'Albania', 'Algeria']
pop = [30.55, 2.77, 40.0]  # Population in millions

# To get Albania's population, you need to:
# 1. Find Albania's position
ind_alb = countries.index('Albania')  # Returns: 1

# 2. Use that index to get the population
pop[ind_alb]  # Returns: 2.77
```

**Problems:**

- Inconvenient - requires two steps
- Not intuitive - relies on matching indices
- Error-prone - easy to get lists out of sync

## Solution with Dictionaries

```python
world = {
    'Afghanistan': 30.55,
    'Albania': 2.77,
    'Algeria': 40.0
}

# Direct lookup - much simpler!
world['Albania']  # Returns: 2.77
```

**Benefits:**

- ✓ Direct access to values using meaningful keys
- ✓ More intuitive and readable
- ✓ Very fast lookups, even for huge dictionaries
- ✓ Keys and values stay connected

---

# Creating Dictionaries

Use **curly brackets** `{}` with **key:value pairs** separated by commas:

```python
# Empty dictionary
empty_dict = {}

# Dictionary with data
world = {
    'Afghanistan': 30.55,
    'Albania': 2.77,
    'Algeria': 40.0
}
```

**Syntax breakdown:**

- `{}` - Curly brackets define a dictionary
- `key: value` - Colon separates key from value
- `,` - Comma separates multiple key-value pairs

---

# Accessing Dictionary Values

Use **square brackets** with the key to access its corresponding value:

```python
world = {
    'Afghanistan': 30.55,
    'Albania': 2.77,
    'Algeria': 40.0
}

# Access a value by its key
world['Albania']  # Returns: 2.77
world['Algeria']  # Returns: 40.0
```

**Think of it as:** The key "opens the door" to the value!

---

# Dictionary Keys: Rules and Requirements

## Keys Must Be Unique

Each key can only appear **once** in a dictionary. If you use the same key multiple times, only the **last value** is kept:

```python
world = {
    'Albania': 2.77,
    'Algeria': 40.0,
    'Albania': 3.0  # This overwrites the first Albania entry
}

world['Albania']  # Returns: 3.0 (not 2.77!)
```

## Keys Must Be Immutable

Keys must be **immutable** objects (objects whose content cannot be changed after creation).

**Valid key types (immutable):**

- ✓ Strings: `'Albania'`
- ✓ Numbers: `42`, `3.14`
- ✓ Booleans: `True`, `False`
- ✓ Tuples: `(1, 2, 3)` (covered later)

**Invalid key types (mutable):**

- ✗ Lists: `[1, 2, 3]` - content can be changed
- ✗ Dictionaries: `{'a': 1}` - content can be changed

**Examples:**

```python
# Valid dictionary - all immutable keys
valid_dict = {
    'name': 'Alice',      # String key ✓
    42: 'answer',         # Integer key ✓
    3.14: 'pi',          # Float key ✓
    True: 'correct'      # Boolean key ✓
}

# Invalid dictionary - mutable key
invalid_dict = {
    [1, 2, 3]: 'value'   # List key ✗ - Causes TypeError!
}
```

---

# Adding and Updating Dictionary Entries

Use the same square bracket syntax to **add new** key-value pairs or **update existing** ones:

## Adding New Entries

```python
world = {
    'Afghanistan': 30.55,
    'Albania': 2.77,
    'Algeria': 40.0
}

# Add a new country
world['Sealand'] = 0.000027  # Population in millions

print(world)
# Output:
# {'Afghanistan': 30.55, 'Albania': 2.77, 'Algeria': 40.0, 'Sealand': 2.7e-05}
```

## Updating Existing Entries

```python
# Update Albania's population
world['Albania'] = 2.88  # New population value

print(world['Albania'])  # Returns: 2.88
```

---

# Checking if a Key Exists

Use the `in` keyword to check if a key exists in a dictionary:

```python
world = {
    'Afghanistan': 30.55,
    'Albania': 2.77,
    'Algeria': 40.0,
    'Sealand': 0.000027
}

# Check if key exists
'Sealand' in world     # Returns: True
'Germany' in world     # Returns: False
```

---

# Dictionary Methods

## Get All Keys: `.keys()`

Returns all the keys in the dictionary:

```python
world = {
    'Afghanistan': 30.55,
    'Albania': 2.77,
    'Algeria': 40.0
}

world.keys()
# Returns: dict_keys(['Afghanistan', 'Albania', 'Algeria'])
```

## Get All Values: `.values()`

Returns all the values in the dictionary:

```python
world.values()
# Returns: dict_values([30.55, 2.77, 40.0])
```

---

# Lists vs Dictionaries: When to Use Each

| Feature           | Lists                          | Dictionaries                            |
| ----------------- | ------------------------------ | --------------------------------------- |
| **Access method** | Numerical index                | Meaningful keys                         |
| **Order**         | Maintains insertion order      | Maintains insertion order (Python 3.7+) |
| **Use when**      | Order matters, sequential data | Need fast lookups by key                |
| **Best for**      | Collections of similar items   | Connecting related information          |
| **Lookup speed**  | Slower (must search)           | Very fast (direct key lookup)           |

**When to use Lists:**

- You need to maintain a specific order
- You're working with sequential data
- You need to access items by position

**When to use Dictionaries:**

- You need to quickly look up information by name/key
- You're connecting related pieces of information
- Order is less important than fast access

---

# Complete Example: World Population Data

```python
# Create dictionary with population data
world = {
    'Afghanistan': 30.55,
    'Albania': 2.77,
    'Algeria': 40.0
}

# Access a value
print(world['Albania'])  # Output: 2.77

# Add a new country
world['Sealand'] = 0.000027
print('Sealand' in world)  # Output: True

# Update existing entry
world['Albania'] = 2.88

# Get all keys
print(world.keys())
# Output: dict_keys(['Afghanistan', 'Albania', 'Algeria', 'Sealand'])

# Get all values
print(world.values())
# Output: dict_values([30.55, 2.88, 40.0, 2.7e-05])
```

---

# Key Takeaways

- **Dictionaries** store data as key-value pairs: `{'key': value}`
- **Keys must be unique** - duplicate keys will overwrite previous values
- **Keys must be immutable** - use strings, numbers, booleans (not lists!)
- **Access values** using square brackets: `dict['key']`
- **Add/update entries** with assignment: `dict['new_key'] = value`
- **Check existence** with `in`: `'key' in dict`
- **Get keys**: `dict.keys()`
- **Get values**: `dict.values()`
- Dictionaries provide **fast lookups** and are ideal for connecting related information
