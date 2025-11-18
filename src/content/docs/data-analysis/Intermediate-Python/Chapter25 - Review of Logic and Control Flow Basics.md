# Control Flow in Python

Control flow statements allow you to control the execution of your code based on conditions and repetition. This document covers conditional statements, logical operators, and loops.

---

# Conditional Statements: `if`, `elif`, `else`

Conditional statements allow your code to make decisions and execute different blocks based on conditions.

## Basic `if` Statement

```python
age = 18

if age >= 18:
    print("You are an adult")
```

**Output:** `You are an adult`

## `if-else` Statement

```python
temperature = 15

if temperature > 20:
    print("It's warm outside")
else:
    print("It's cold outside")
```

**Output:** `It's cold outside`

## `if-elif-else` Statement

Use `elif` (else if) to check multiple conditions:

```python
score = 75

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")
```

**Output:** `Grade: C`

## Important Notes

- **Indentation matters!** Code inside the conditional block must be indented (typically 4 spaces)
- Only the **first True condition** is executed, then the rest are skipped
- `else` is optional and executes when all conditions are False
- You can have multiple `elif` statements

**Example of execution flow:**

```python
x = 5

if x > 10:
    print("Greater than 10")  # Skipped
elif x > 3:
    print("Greater than 3")   # EXECUTED (first True condition)
elif x > 1:
    print("Greater than 1")   # Skipped (even though True!)
else:
    print("Less than or equal to 1")  # Skipped
```

**Output:** `Greater than 3`

---

# Comparison Operators

Comparison operators evaluate to `True` or `False`:

| Operator | Meaning               | Example  | Result  |
| -------- | --------------------- | -------- | ------- |
| `==`     | Equal to              | `5 == 5` | `True`  |
| `!=`     | Not equal to          | `5 != 3` | `True`  |
| `>`      | Greater than          | `5 > 3`  | `True`  |
| `<`      | Less than             | `5 < 3`  | `False` |
| `>=`     | Greater than or equal | `5 >= 5` | `True`  |
| `<=`     | Less than or equal    | `5 <= 3` | `False` |

**Examples:**

```python
x = 10
y = 20

print(x == y)   # False
print(x != y)   # True
print(x < y)    # True
print(x >= 10)  # True
```

**Works with strings too:**

```python
name = "Alice"

if name == "Alice":
    print("Hello, Alice!")  # Executed

if "ice" in name:
    print("Name contains 'ice'")  # Executed
```

---

# Logical Operators: `and`, `or`, `not`

Logical operators combine multiple conditions.

## `and` Operator

Returns `True` only if **both** conditions are True:

```python
age = 25
has_license = True

if age >= 18 and has_license:
    print("You can drive")
```

**Truth table for `and`:**
| Condition 1 | Condition 2 | Result |
|------------|-------------|--------|
| True | True | True |
| True | False | False |
| False | True | False |
| False | False | False |

## `or` Operator

Returns `True` if **at least one** condition is True:

```python
is_weekend = False
is_holiday = True

if is_weekend or is_holiday:
    print("No work today!")  # Executed
```

**Truth table for `or`:**
| Condition 1 | Condition 2 | Result |
|------------|-------------|--------|
| True | True | True |
| True | False | True |
| False | True | True |
| False | False | False |

## `not` Operator

Reverses the boolean value (True → False, False → True):

```python
is_raining = False

if not is_raining:
    print("Let's go outside!")  # Executed

# Equivalent to:
if is_raining == False:
    print("Let's go outside!")
```

**Truth table for `not`:**
| Condition | Result |
|-----------|--------|
| True | False |
| False | True |

## Combining Logical Operators

You can combine multiple logical operators:

```python
age = 25
has_license = True
has_car = False

if age >= 18 and has_license and not has_car:
    print("You can drive but need to rent a car")
```

**Order of operations:** `not` → `and` → `or`

```python
# Use parentheses for clarity
if (age >= 18 and has_license) or is_emergency:
    print("Can drive")
```

---

# For Loops

For loops iterate over sequences (lists, strings, ranges, etc.).

## Basic For Loop

```python
# Iterate over a list
fruits = ['apple', 'banana', 'cherry']

for fruit in fruits:
    print(fruit)
```

**Output:**

```
apple
banana
cherry
```

## Looping with `range()`

`range()` generates a sequence of numbers:

```python
# range(stop) - from 0 to stop-1
for i in range(5):
    print(i)
```

**Output:** `0 1 2 3 4`

```python
# range(start, stop) - from start to stop-1
for i in range(2, 6):
    print(i)
```

**Output:** `2 3 4 5`

```python
# range(start, stop, step) - with custom step size
for i in range(0, 10, 2):
    print(i)
```

**Output:** `0 2 4 6 8`

## Looping Over Strings

```python
word = "Python"

for letter in word:
    print(letter)
```

**Output:**

```
P
y
t
h
o
n
```

## Nested For Loops

```python
# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i*j}")
```

**Output:**

```
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
2 x 1 = 2
2 x 2 = 4
...
```

---

# `enumerate()` in For Loops

`enumerate()` gives you both the **index** and the **value** while looping:

## Basic Usage

```python
fruits = ['apple', 'banana', 'cherry']

for index, fruit in fruits:
    print(f"{index}: {fruit}")
```

**Output:**

```
0: apple
1: banana
2: cherry
```

## Custom Starting Index

```python
fruits = ['apple', 'banana', 'cherry']

for index, fruit in enumerate(fruits, start=1):
    print(f"{index}: {fruit}")
```

**Output:**

```
1: apple
2: banana
3: cherry
```

## Why Use `enumerate()`?

**Without `enumerate()` (manual indexing):**

```python
fruits = ['apple', 'banana', 'cherry']

for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")
```

**With `enumerate()` (cleaner):**

```python
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
```

✓ More readable  
✓ More Pythonic  
✓ Less error-prone

## Practical Example

```python
# Find the position of a specific item
students = ['Alice', 'Bob', 'Charlie', 'Diana']

for index, student in enumerate(students):
    if student == 'Charlie':
        print(f"Found {student} at position {index}")
        break
```

**Output:** `Found Charlie at position 2`

---

# While Loops

While loops repeat as long as a condition is `True`.

## Basic While Loop

```python
count = 0

while count < 5:
    print(f"Count: {count}")
    count += 1
```

**Output:**

```
Count: 0
Count: 1
Count: 2
Count: 3
Count: 4
```

## Infinite Loops (Be Careful!)

```python
# This runs forever!
# while True:
#     print("This never stops!")
```

**Use `break` to exit:**

```python
count = 0

while True:
    print(count)
    count += 1
    if count >= 5:
        break  # Exit the loop
```

## `continue` Statement

Skip the rest of the current iteration:

```python
count = 0

while count < 5:
    count += 1
    if count == 3:
        continue  # Skip when count is 3
    print(count)
```

**Output:** `1 2 4 5` (3 is skipped)

## User Input with While Loop

```python
password = ""

while password != "secret":
    password = input("Enter password: ")
    if password != "secret":
        print("Incorrect! Try again.")

print("Access granted!")
```

## For Loop vs While Loop

**Use `for` when:**

- You know how many iterations you need
- Iterating over a sequence

**Use `while` when:**

- You don't know how many iterations in advance
- Loop should continue until a condition changes

---

# Loop Control Statements

## `break` - Exit the Loop

```python
for i in range(10):
    if i == 5:
        break  # Stop the loop entirely
    print(i)
```

**Output:** `0 1 2 3 4`

## `continue` - Skip to Next Iteration

```python
for i in range(5):
    if i == 2:
        continue  # Skip the rest when i is 2
    print(i)
```

**Output:** `0 1 3 4` (2 is skipped)

## `pass` - Do Nothing (Placeholder)

```python
for i in range(5):
    if i == 2:
        pass  # Placeholder - do nothing
    print(i)
```

**Output:** `0 1 2 3 4` (all printed, `pass` does nothing)

**When to use `pass`:**

```python
# Placeholder for code you'll write later
if temperature > 30:
    pass  # TODO: Add overheating logic
else:
    print("Temperature normal")
```

---

# Complete Examples

## Example 1: Combining Conditionals and Loops

```python
# Find all even numbers in a list
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = []

for num in numbers:
    if num % 2 == 0:
        even_numbers.append(num)

print("Even numbers:", even_numbers)
```

**Output:** `Even numbers: [2, 4, 6, 8, 10]`

## Example 2: Using `enumerate()` with Conditionals

```python
# Grade students based on scores
students = ['Alice', 'Bob', 'Charlie']
scores = [95, 78, 88]

for index, student in enumerate(students):
    score = scores[index]

    if score >= 90:
        grade = 'A'
    elif score >= 80:
        grade = 'B'
    else:
        grade = 'C'

    print(f"{student}: {score} - Grade {grade}")
```

**Output:**

```
Alice: 95 - Grade A
Bob: 78 - Grade C
Charlie: 88 - Grade B
```

## Example 3: While Loop with Multiple Conditions

```python
# Simple number guessing game
secret_number = 7
attempts = 0
max_attempts = 3

while attempts < max_attempts:
    guess = int(input("Guess the number (1-10): "))
    attempts += 1

    if guess == secret_number:
        print(f"Correct! You won in {attempts} attempts!")
        break
    elif guess < secret_number:
        print("Too low!")
    else:
        print("Too high!")
else:
    # This runs if loop completes without break
    print(f"Game over! The number was {secret_number}")
```

---

# Quick Reference

## Conditional Statements

```python
if condition:
    # code
elif another_condition:
    # code
else:
    # code
```

## Comparison Operators

`==`, `!=`, `>`, `<`, `>=`, `<=`

## Logical Operators

```python
and  # Both must be True
or   # At least one must be True
not  # Reverses the boolean
```

## For Loop

```python
for item in sequence:
    # code

for i in range(start, stop, step):
    # code
```

## Enumerate

```python
for index, value in enumerate(sequence):
    # code
```

## While Loop

```python
while condition:
    # code
```

## Loop Control

```python
break     # Exit loop
continue  # Skip to next iteration
pass      # Do nothing (placeholder)
```

---

# Key Takeaways

- **`if/elif/else`** allows conditional execution of code
- **Comparison operators** (`==`, `>`, etc.) create boolean conditions
- **Logical operators** (`and`, `or`, `not`) combine conditions
- **`for` loops** iterate over sequences
- **`enumerate()`** provides both index and value in for loops
- **`while` loops** repeat while a condition is True
- **`break`** exits a loop, **`continue`** skips to next iteration
- Always watch for **infinite loops** in while loops!
- **Indentation is critical** - Python uses it to define code blocks
