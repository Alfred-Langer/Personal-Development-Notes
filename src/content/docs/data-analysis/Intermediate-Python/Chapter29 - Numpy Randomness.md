# Random Number Generation in Python

Random numbers are essential for simulations, statistical analysis, and modeling real-world scenarios involving chance or probability. This document covers how to generate random numbers using NumPy.

---

# Understanding Random vs Pseudo-Random

## True Random Numbers

**True random numbers** are generated from physical processes that are inherently unpredictable (e.g., radioactive decay, atmospheric noise).

## Pseudo-Random Numbers

**Pseudo-random numbers** are what computers generate. They:

- Use a mathematical formula (algorithm) to generate numbers
- Start from an initial value called a **seed**
- Appear random but are actually deterministic
- Follow a predictable sequence for a given seed

**Key insight:** Pseudo-random numbers are "random enough" for most purposes and have the advantage of being **reproducible**.

---

# NumPy Random Package

NumPy provides a `random` subpackage with functions for generating pseudo-random numbers.

**Import:**

```python
import numpy as np
```

---

# Common Random Functions

## `np.random.rand()` - Random Float (0 to 1)

Generates a random floating-point number between **0 and 1** (0 inclusive, 1 exclusive).

```python
import numpy as np

# Generate a single random float
random_num = np.random.rand()
print(random_num)  # Example output: 0.5488135039273248
```

**Range:** `[0, 1)` (0 ≤ value < 1)

**Multiple random numbers:**

```python
# Generate 5 random floats
random_nums = np.random.rand(5)
print(random_nums)
# Example output: [0.71518937 0.60276338 0.54488318 0.4236548  0.64589411]
```

---

## `np.random.randint()` - Random Integer

Generates a random integer within a specified range.

**Syntax:** `np.random.randint(low, high)`

- `low` (inclusive): Minimum value
- `high` (exclusive): Maximum value (NOT included)

```python
import numpy as np

# Generate random integer between 0 and 1 (0 or 1)
coin = np.random.randint(0, 2)
print(coin)  # Output: 0 or 1
```

**Example: Simulating a die (1-6):**

```python
# Roll a die
die = np.random.randint(1, 7)  # 7 is not included
print(die)  # Output: 1, 2, 3, 4, 5, or 6
```

**Multiple random integers:**

```python
# Roll a die 10 times
rolls = np.random.randint(1, 7, size=10)
print(rolls)
# Example output: [4 2 6 1 5 3 6 2 4 1]
```

---

# Setting a Random Seed

## Why Use Seeds?

Setting a seed ensures **reproducibility** - the same sequence of "random" numbers will be generated each time.

**Use cases:**

- Debugging code
- Sharing reproducible analyses
- Testing/validation
- Ensuring consistent results across runs

## How to Set a Seed

Use `np.random.seed(number)` before generating random numbers:

```python
import numpy as np

# Set seed to 123
np.random.seed(123)

# Generate random numbers
print(np.random.rand())  # Always: 0.6964691855978616
print(np.random.rand())  # Always: 0.28613933495037946
```

**Key point:** The seed can be **any integer** - it's just a starting point for the algorithm.

---

# Seed Demonstration: Reproducibility

```python
import numpy as np

# First run with seed 123
np.random.seed(123)
print("First sequence:")
print(np.random.rand())  # 0.6964691855978616
print(np.random.rand())  # 0.28613933495037946

# Reset seed to 123
np.random.seed(123)
print("\nSecond sequence (same seed):")
print(np.random.rand())  # 0.6964691855978616 (same!)
print(np.random.rand())  # 0.28613933495037946 (same!)

# Different seed
np.random.seed(456)
print("\nThird sequence (different seed):")
print(np.random.rand())  # 0.7742336894342167 (different!)
print(np.random.rand())  # 0.4358648591338757 (different!)
```

**Output:**

```
First sequence:
0.6964691855978616
0.28613933495037946

Second sequence (same seed):
0.6964691855978616
0.28613933495037946

Third sequence (different seed):
0.7742336894342167
0.4358648591338757
```

**Observation:** Same seed → Same sequence of random numbers

---

# Practical Example: Coin Toss Simulation

## Simple Coin Toss

```python
import numpy as np

# Set seed for reproducibility
np.random.seed(123)

# Simulate coin toss (0 = heads, 1 = tails)
coin = np.random.randint(0, 2)

# Interpret result
if coin == 0:
    print("Heads")
else:
    print("Tails")
```

**Output:** `Heads` (always the same with seed 123)

## Multiple Coin Tosses

```python
import numpy as np

np.random.seed(123)

# Toss coin 10 times
tosses = np.random.randint(0, 2, size=10)
print(tosses)
# Output: [0 1 1 0 1 0 0 1 1 0]

# Count heads and tails
heads = np.sum(tosses == 0)
tails = np.sum(tosses == 1)

print(f"Heads: {heads}, Tails: {tails}")
# Output: Heads: 5, Tails: 5
```

---

# Practical Example: Die Roll Simulation

```python
import numpy as np

np.random.seed(42)

# Roll a die
die = np.random.randint(1, 7)
print(f"You rolled a {die}")

# Roll die 100 times and see distribution
rolls = np.random.randint(1, 7, size=100)

# Count frequency of each outcome
for i in range(1, 7):
    count = np.sum(rolls == i)
    print(f"{i}: {count} times ({count}%)")
```

**Example Output:**

```
You rolled a 6
1: 18 times (18%)
2: 17 times (17%)
3: 14 times (14%)
4: 18 times (18%)
5: 15 times (15%)
6: 18 times (18%)
```

---

# Other Useful Random Functions

## `np.random.random()` - Alternative to `rand()`

Similar to `rand()`, generates floats between 0 and 1:

```python
import numpy as np

np.random.seed(42)
print(np.random.random())  # 0.3745401188473625
```

## `np.random.choice()` - Random Selection from Array

Select random elements from an array:

```python
import numpy as np

options = ['rock', 'paper', 'scissors']

# Random choice
choice = np.random.choice(options)
print(choice)  # Example: 'paper'

# Multiple random choices
choices = np.random.choice(options, size=5)
print(choices)  # Example: ['rock' 'scissors' 'rock' 'paper' 'rock']
```

## `np.random.uniform()` - Random Float in Range

Generate random float in a specified range:

```python
import numpy as np

# Random float between 5 and 10
value = np.random.uniform(5, 10)
print(value)  # Example: 7.382
```

## `np.random.normal()` - Normal Distribution

Generate numbers from a normal (Gaussian) distribution:

```python
import numpy as np

# Mean=0, Standard Deviation=1
values = np.random.normal(0, 1, size=5)
print(values)
# Example: [-0.23415337  0.58850225  0.31088118 -0.92589836  0.71678066]
```

---

# Complete Example: Empire State Building Game Setup

```python
import numpy as np

# Set seed for reproducibility
np.random.seed(123)

# Game variables
step = 0
max_steps = 60
dice_rolls = 100

print("Starting Empire State Building game!")
print(f"Goal: Reach step {max_steps} in {dice_rolls} rolls\n")

# Simulate one die roll
die = np.random.randint(1, 7)
print(f"First roll: {die}")

# Determine action based on roll
if die <= 2:
    print("Move down 1 step")
    step = max(0, step - 1)  # Can't go below 0
elif die <= 5:
    print("Move up 1 step")
    step += 1
else:  # die == 6
    print("Roll again and move up that many steps!")
    extra_roll = np.random.randint(1, 7)
    print(f"Extra roll: {extra_roll}")
    step += extra_roll

print(f"Current step: {step}")
```

---

# Best Practices

## 1. Always Set Seed for Reproducible Analysis

```python
# ✓ Good - Reproducible
np.random.seed(42)
results = np.random.rand(100)

# ✗ Avoid in production code - Non-reproducible
results = np.random.rand(100)  # Different every time
```

## 2. Set Seed Once at Beginning

```python
import numpy as np

# Set seed once
np.random.seed(123)

# All subsequent random calls use this seed
data1 = np.random.rand(10)
data2 = np.random.randint(1, 100, size=10)
data3 = np.random.choice(['A', 'B', 'C'], size=10)
```

---

# Quick Reference

## Common Functions

| Function                  | Purpose                   | Example                     |
| ------------------------- | ------------------------- | --------------------------- |
| `np.random.rand()`        | Float between 0-1         | `np.random.rand()`          |
| `np.random.randint(a, b)` | Integer from a to b-1     | `np.random.randint(1, 7)`   |
| `np.random.choice(arr)`   | Random element from array | `np.random.choice([1,2,3])` |
| `np.random.uniform(a, b)` | Float between a and b     | `np.random.uniform(5, 10)`  |
| `np.random.normal(μ, σ)`  | Normal distribution       | `np.random.normal(0, 1)`    |

## Setting Seed

```python
np.random.seed(42)  # Any integer works
```

---

# Key Takeaways

- **Pseudo-random numbers** are deterministic but appear random
- **Seeds** enable reproducibility - same seed produces same sequence
- **`np.random.rand()`** generates floats between 0 and 1
- **`np.random.randint(a, b)`** generates integers from a to b-1 (b excluded)
- **Always set a seed** when you need reproducible results
- **Random simulations** (like coin tosses, die rolls) help estimate probabilities
- The seed can be **any integer** - commonly used: 42, 123, 0, etc.

---

# Why Reproducibility Matters

```python
# Without seed - different results every time
def experiment_bad():
    results = []
    for _ in range(5):
        results.append(np.random.rand())
    return np.mean(results)

print(experiment_bad())  # 0.523
print(experiment_bad())  # 0.612 (different!)

# With seed - same results every time
def experiment_good():
    np.random.seed(42)
    results = []
    for _ in range(5):
        results.append(np.random.rand())
    return np.mean(results)

print(experiment_good())  # 0.523
print(experiment_good())  # 0.523 (same!)
```

**Reproducibility allows:**

- Debugging
- Peer review
- Validation
- Consistent testing
- Sharing analyses with others
