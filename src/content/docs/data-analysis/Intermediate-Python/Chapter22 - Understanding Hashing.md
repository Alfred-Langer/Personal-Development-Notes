# Hashing in Dictionaries: Why Dictionaries Are Fast

Dictionaries in Python are incredibly fast at looking up values, even when they contain millions of key-value pairs. The secret behind this speed is a concept called **hashing**. Understanding how hashing works will help you appreciate why dictionaries are so powerful for data analysis.

---

# The Problem with Lists: Linear Search

To understand why dictionaries are fast, let's first see why lists are slow for lookups.

## How List Lookups Work

When you search for an item in a list, Python has to check **each element one by one** until it finds what you're looking for:

```python
countries = ['Afghanistan', 'Albania', 'Algeria', 'Angola', 'Argentina']

# To find 'Argentina', Python must:
# 1. Check 'Afghanistan' - not a match
# 2. Check 'Albania' - not a match
# 3. Check 'Algeria' - not a match
# 4. Check 'Angola' - not a match
# 5. Check 'Argentina' - MATCH! (finally)

'Argentina' in countries  # Checked 5 elements
```

**This is called Linear Search (or Sequential Search)**

## Time Complexity: O(n)

- **Best case**: Item is first → 1 comparison
- **Worst case**: Item is last or not present → n comparisons
- **Average case**: n/2 comparisons

**The bigger your list, the slower the search!**

```python
# Small list - fast
small_list = ['a', 'b', 'c', 'd', 'e']  # 5 elements
'd' in small_list  # Up to 5 comparisons

# Large list - slow
large_list = list(range(1000000))  # 1 million elements
999999 in large_list  # Up to 1,000,000 comparisons!
```

---

# The Dictionary Solution: Hash Tables

Dictionaries use a completely different approach called a **hash table**, which makes lookups nearly instantaneous regardless of size.

## What is Hashing?

**Hashing** is the process of converting a key (like a string) into a number (called a **hash value** or **hash code**) that can be used as an array index.

**Simple analogy:** Think of hashing like a filing system where each document gets a specific drawer number based on its name. Instead of searching through every drawer, you calculate which drawer to check.

## How Hash Functions Work

A **hash function** takes a key and produces a numerical hash value:

```python
# Python's built-in hash function
hash('Albania')      # Returns: 5573176751018365258
hash('Algeria')      # Returns: 2847561121550385913
hash('Afghanistan')  # Returns: -8516226297198632887

# Hash values are consistent
hash('Albania')  # Always returns the same number: 5573176751018365258
```

**Key properties of hash functions:**

1. **Deterministic**: Same input always produces same output
2. **Fast to compute**: Takes constant time
3. **Uniform distribution**: Spreads values across range
4. **Fixed size output**: Always produces a number in a specific range

---

# How Dictionaries Use Hashing

When you create a dictionary, Python uses hashing to store and retrieve data efficiently.

## Step 1: Storing a Key-Value Pair

```python
world = {}
world['Albania'] = 2.77
```

**What happens internally:**

1. **Hash the key**: Python computes `hash('Albania')` → large number
2. **Calculate position**: Converts hash to array index using modulo: `hash('Albania') % array_size`
3. **Store value**: Places `2.77` at that calculated position in memory

**Visual representation:**

```
Key: 'Albania'
  ↓ (hash function)
Hash: 5573176751018365258
  ↓ (modulo array_size)
Index: 42
  ↓
Memory[42] = 2.77
```

## Step 2: Looking Up a Value

```python
world['Albania']  # How does Python find the value?
```

**What happens internally:**

1. **Hash the key**: Compute `hash('Albania')` → same large number
2. **Calculate position**: `hash('Albania') % array_size` → same index (42)
3. **Retrieve value**: Get value directly from `Memory[42]` → `2.77`

**No searching required!** Python jumps directly to the correct location.

---

# Performance Comparison: Lists vs Dictionaries

## List Lookup Performance

```python
# Create a large list
countries = ['Country' + str(i) for i in range(1000000)]  # 1 million countries

# Search for last item
'Country999999' in countries  # Must check up to 1,000,000 items
```

**Time Complexity: O(n)** - Time increases linearly with size

## Dictionary Lookup Performance

```python
# Create a large dictionary
world = {'Country' + str(i): i for i in range(1000000)}  # 1 million countries

# Search for any item
world['Country999999']  # Direct access - just 1 operation!
```

**Time Complexity: O(1)** - Constant time, regardless of size!

## Real Performance Numbers

| Data Structure | Size            | Lookup Time           |
| -------------- | --------------- | --------------------- |
| List           | 10 items        | ~10 operations        |
| List           | 1,000 items     | ~1,000 operations     |
| List           | 1,000,000 items | ~1,000,000 operations |
| Dictionary     | 10 items        | ~1 operation          |
| Dictionary     | 1,000 items     | ~1 operation          |
| Dictionary     | 1,000,000 items | ~1 operation          |

**Dictionaries maintain constant-time lookups regardless of size!**

---

# Why Keys Must Be Immutable

Now we can understand why dictionary keys must be immutable objects!

## The Problem with Mutable Keys

```python
# Imagine if lists could be keys (they can't!)
bad_dict = {
    [1, 2, 3]: 'value'  # Causes TypeError!
}
```

**Why this doesn't work:**

1. **Store the key-value pair**:

   - Hash `[1, 2, 3]` → calculate position → store 'value'

2. **Modify the list**:

   - `key_list.append(4)` → Now key is `[1, 2, 3, 4]`

3. **Try to look up the value**:
   - Hash `[1, 2, 3, 4]` → **different hash!** → **different position!**
   - Python looks in wrong place → can't find the value!

**The key has changed, so the hash changes, and we lose access to our data!**

## Immutable Keys Solve This

```python
# Strings are immutable - perfect for keys
world = {'Albania': 2.77}

# You cannot change 'Albania' itself
# The string object 'Albania' will always hash to the same value
world['Albania']  # Always works!
```

**Immutable objects guarantee:**

- Hash value never changes
- Key always points to same location
- Values remain accessible

---

# Hash Collisions: What Happens When Two Keys Hash to the Same Position?

Sometimes two different keys produce the same hash value (after modulo). This is called a **collision**.

## Example of Collision

```python
# Simplified example (real collisions are rarer)
hash('Albania') % 100 = 42
hash('Algeria') % 100 = 42  # Same position!
```

## How Python Handles Collisions

Python uses a technique called **open addressing** (specifically, a method called probing):

1. Calculate hash position
2. If position is occupied by different key, try next position
3. Repeat until empty spot found or correct key found

**This is why lookups are "nearly" O(1) rather than exactly O(1)**

But collisions are rare with good hash functions, so dictionary lookups remain extremely fast in practice!

---

# Practical Implications for Data Analysis

Understanding hashing explains why certain operations are fast or slow:

## Fast Operations (O(1) - Constant Time)

```python
world = {'Afghanistan': 30.55, 'Albania': 2.77, 'Algeria': 40.0}

# All of these are FAST:
world['Albania']              # Lookup by key
world['Sealand'] = 0.000027  # Add new key
world['Albania'] = 2.88      # Update existing key
'Albania' in world           # Check if key exists
```

## Slower Operations

```python
# These require checking every item:
2.77 in world.values()  # Check if value exists - O(n)
list(world.keys())      # Get all keys - O(n)
```

**Rule of thumb:** Key-based operations are fast; value-based operations iterate through all items.

---

# Key Takeaways

1. **Lists use linear search** - must check each element sequentially (O(n))

2. **Dictionaries use hash tables** - directly compute storage location (O(1))

3. **Hash functions** convert keys to numbers for fast array indexing

4. **Keys must be immutable** because changing a key would change its hash, making the value inaccessible

5. **Dictionary lookups are constant time** - 1 million items? Still just ~1 operation!

6. **This is why dictionaries are crucial for data science** - when working with large datasets, fast lookups are essential

7. **Use dictionaries when you need fast key-based lookups** - the performance difference is dramatic for large datasets

---

# Visualization: List vs Dictionary Lookup

```
LIST LOOKUP (Linear Search):
countries = ['Afghanistan', 'Albania', 'Algeria', 'Angola', 'Argentina']
Finding 'Argentina':
[Afghanistan] → No
  [Albania] → No
    [Algeria] → No
      [Angola] → No
        [Argentina] → FOUND! (5 steps)

DICTIONARY LOOKUP (Hash Table):
world = {'Afghanistan': 30.55, 'Albania': 2.77, ...}
Finding 'Albania':
'Albania' → hash() → position 42 → world[42] → 2.77 (1 step)
```

**Result: Dictionaries are dramatically faster for lookups, especially with large datasets!**

---

This is the power of hashing - and why dictionaries are one of the most important data structures in Python for data analysis!
