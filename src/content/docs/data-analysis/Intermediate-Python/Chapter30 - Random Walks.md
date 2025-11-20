# Random Walks

A **random walk** is a succession of random steps where each step depends on or builds upon the previous steps. This is different from independent random steps where each outcome has no relationship to previous outcomes.

**Real-world examples:**

- Path of a molecule moving through liquid or gas
- Financial status of a gambler over time
- Stock price movements
- Animal foraging patterns

---

# Random Steps vs Random Walk

## Random Steps (Independent)

Each outcome is **independent** - not affected by previous outcomes.

```python
import numpy as np

np.random.seed(123)

outcomes = []

for _ in range(10):
    coin = np.random.randint(0, 2)

    if coin == 0:
        outcomes.append("heads")
    else:
        outcomes.append("tails")

print(outcomes)
```

**Example Output:**

```
['heads', 'tails', 'tails', 'heads', 'tails', 'heads', 'heads', 'tails', 'tails', 'heads']
```

**Key characteristic:** Each flip is completely independent - no cumulative tracking.

---

## Random Walk (Cumulative)

Each step **builds upon** the previous state - tracking accumulation over time.

```python
import numpy as np

np.random.seed(123)

# Start with 0 tails
tails = [0]

for _ in range(10):
    coin = np.random.randint(0, 2)

    # Add coin value (0 or 1) to previous count
    tails.append(tails[-1] + coin)

print(tails)
```

**Example Output:**

```
[0, 0, 1, 2, 2, 3, 3, 3, 4, 5, 5]
```

**Key characteristic:** Each value depends on the previous value - cumulative tracking.

**Breakdown of the walk:**

- Start: 0 tails
- Flip 1: heads (0) → 0 + 0 = 0 tails
- Flip 2: tails (1) → 0 + 1 = 1 tail
- Flip 3: tails (1) → 1 + 1 = 2 tails
- Flip 4: heads (0) → 2 + 0 = 2 tails
- ... and so on

---

# Random Walk Pattern

The standard pattern for building a random walk:

```python
import numpy as np

np.random.seed(42)

# Step 1: Initialize list with starting value
walk = [0]

# Step 2: Loop for desired number of steps
for _ in range(10):
    # Step 3: Generate random step
    step = np.random.randint(-1, 2)  # -1, 0, or 1

    # Step 4: Add to previous position
    new_position = walk[-1] + step

    # Step 5: Append to list
    walk.append(new_position)

print(walk)
```

**Output:**

```
[0, 1, 1, 2, 2, 1, 1, 0, -1, -1, 0]
```

---

# Comparison: Steps vs Walk

## Visual Comparison

```python
import numpy as np

np.random.seed(123)

# Random STEPS (independent)
steps = []
for _ in range(10):
    coin = np.random.randint(0, 2)
    steps.append(coin)

print("Random Steps:", steps)
# [0, 1, 1, 0, 1, 0, 0, 1, 1, 0]
# No relationship between values

# Random WALK (cumulative)
walk = [0]
for _ in range(10):
    coin = np.random.randint(0, 2)
    walk.append(walk[-1] + coin)

print("Random Walk:", walk)
# [0, 0, 1, 2, 2, 3, 3, 3, 4, 5, 5]
# Each value builds on the previous
```

**Key difference:**

- **Steps:** `[0, 1, 1, 0, 1, ...]` - just the outcomes
- **Walk:** `[0, 0, 1, 2, 2, 3, ...]` - cumulative sum of outcomes

---

# Empire State Building Random Walk Example

Applying the random walk concept to the Empire State Building game:

```python
import numpy as np

np.random.seed(123)

# Starting step
step = 0
all_steps = [step]

# Simulate 100 dice rolls
for _ in range(100):
    die = np.random.randint(1, 7)

    if die <= 2:
        # Go down 1 step (but not below 0)
        step = max(0, step - 1)
    elif die <= 5:
        # Go up 1 step
        step += 1
    else:  # die == 6
        # Roll again and go up that many steps
        step += np.random.randint(1, 7)

    # Record current position
    all_steps.append(step)

print(f"Final step: {all_steps[-1]}")
print(f"First 10 positions: {all_steps[:10]}")
```

**This is a random walk because:**

- Each position depends on the previous position
- We track cumulative progress over time
- The path is recorded in `all_steps`

---

# Different Types of Random Walks

## 1D Random Walk (Left/Right)

```python
import numpy as np

np.random.seed(42)

position = [0]

for _ in range(20):
    # Step left (-1) or right (+1)
    step = np.random.choice([-1, 1])
    position.append(position[-1] + step)

print(position)
# Example: [0, 1, 2, 1, 2, 3, 2, 1, 0, -1, 0, ...]
```

## Biased Random Walk

```python
import numpy as np

np.random.seed(42)

position = [0]

for _ in range(20):
    # 70% chance to go right, 30% to go left (biased)
    step = np.random.choice([-1, 1], p=[0.3, 0.7])
    position.append(position[-1] + step)

print(position)
# Tends to drift right over time
```

## Variable Step Size

```python
import numpy as np

np.random.seed(42)

position = [0]

for _ in range(20):
    # Random step size between -3 and 3
    step = np.random.randint(-3, 4)
    position.append(position[-1] + step)

print(position)
# Larger jumps in position
```

---

# Common Random Walk Patterns

## Pattern 1: Tracking Count (Coin Flips)

```python
# Count how many times you've flipped tails
tails_count = [0]

for _ in range(n):
    flip = np.random.randint(0, 2)  # 0=heads, 1=tails
    tails_count.append(tails_count[-1] + flip)
```

## Pattern 2: Tracking Position (Movement)

```python
# Track position in 1D space
position = [0]

for _ in range(n):
    step = np.random.choice([-1, 1])  # Left or right
    position.append(position[-1] + step)
```

## Pattern 3: Tracking with Boundaries

```python
# Position can't go below 0 (like Empire State Building)
position = [0]

for _ in range(n):
    step = np.random.randint(-2, 3)
    new_pos = position[-1] + step
    position.append(max(0, new_pos))  # Can't be negative
```

---

# Complete Example: Wealth Tracking (Gambler's Random Walk)

```python
import numpy as np

np.random.seed(123)

# Starting wealth: $100
wealth = [100]

# Gamble 50 times
for _ in range(50):
    # 50% chance to win or lose
    bet = np.random.choice([-10, 10])  # Lose $10 or win $10

    new_wealth = wealth[-1] + bet

    # Can't have negative wealth (go broke)
    if new_wealth < 0:
        new_wealth = 0

    wealth.append(new_wealth)

print(f"Starting wealth: ${wealth[0]}")
print(f"Final wealth: ${wealth[-1]}")
print(f"Maximum wealth: ${max(wealth)}")
print(f"Minimum wealth: ${min(wealth)}")

# Did the gambler go broke?
if wealth[-1] == 0:
    print("Gambler went broke!")
else:
    print("Gambler survived!")
```

---

# Quick Reference

## Random Steps (Independent)

```python
results = []
for _ in range(n):
    result = np.random.randint(0, 2)
    results.append(result)
```

**Characteristic:** Each value is independent

## Random Walk (Cumulative)

```python
walk = [0]
for _ in range(n):
    step = np.random.randint(0, 2)
    walk.append(walk[-1] + step)
```

**Characteristic:** Each value depends on previous value

## Key Syntax

```python
list[-1]          # Access last element
list.append(x)    # Add element to end
max(0, value)     # Ensure value is at least 0
```

---

# Key Takeaways

- **Random steps** are independent outcomes with no cumulative tracking
- **Random walk** tracks cumulative progress where each step builds on the previous
- Use `list[-1]` to access the most recent value in a walk
- Use `.append()` to add new values to the walk
- Initialize the list with a starting value: `walk = [0]`
- Random walks model many real-world processes: molecular motion, stock prices, gambling outcomes
- The **pattern**:
  1. Start with initial value
  2. Generate random step
  3. Add step to previous position
  4. Append to list
  5. Repeat

---

# Converting Steps to Walk

**The key difference in code:**

```python
# STEPS: Just append the random value
outcomes.append(coin)

# WALK: Add random value to previous position
walk.append(walk[-1] + coin)
```

This single line `walk[-1] + coin` is what transforms independent random steps into a cumulative random walk!
