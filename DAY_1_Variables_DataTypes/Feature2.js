/* Feature Request -> 2 :
    Reassignment Demo:
        - Create a script that demonstrates the difference in behavior between 'let' and 'const' when it comes to reassignment.
*/

let Demo = "Hello World";
console.log(`The Original value is ${Demo}`);

Demo = "Reassigned Value";
console.log(`The Modified value is ${Demo}`);

const Demo2 = "Hello World2";
console.log(`This is the original value in const ${Demo2}`);

Demo2 = "Reassigned Value";
console.log(`This is the modified value in const ${Demo2}`); // type error
