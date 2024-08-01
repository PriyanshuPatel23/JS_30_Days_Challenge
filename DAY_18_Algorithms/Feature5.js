/* Feature Request -> 5 :
    Dynamic Programming Script:
        - Write a script that solves the Fibonacci sequence and knapsack problem using dynamic programming (optional).
*/

// Function to solve the Fibonacci sequence using dynamic programming
const fibonacci = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
};

// Function to solve the knapsack problem using dynamic programming
const knapsack = (weights, values, capacity) => {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
};

// Example usage of fibonacci
const fibN = 10;
const fibonacciNumbers = fibonacci(fibN);
console.log("Fibonacci sequence:", fibonacciNumbers);

// Example usage of knapsack
const weights = [1, 2, 3, 4];
const values = [10, 20, 30, 40];
const capacity = 5;
const maxValue = knapsack(weights, values, capacity);
console.log("Maximum value that can be obtained:", maxValue);

// Fibonacci sequence: [0, 1,  1,  2,  3, 5, 8, 13, 21, 34]
// Maximum value that can be obtained: 50
