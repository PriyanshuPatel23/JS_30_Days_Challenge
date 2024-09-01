/* Feature Request -> 3 :
    Pattern Printing Script:
        - Write a script that prints a pattern of stars using nested loops.
*/

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log("\n");
}
