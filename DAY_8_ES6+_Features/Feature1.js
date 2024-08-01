/* Feature Request -> 1 :
    Template Literals Script:
        - Write a script that demonstrates the use of template literals to create and log string with embedded variables and multi-line strings.
*/

const Fname = "John Doe";
const Lname = "Smith";
const age = 30;
const Post = "SDE";

// Using template literals

const introduction = `Hello i am ${Fname + Lname} 
i am ${age} years old
Working as an ${Post}`;

console.log(introduction);
