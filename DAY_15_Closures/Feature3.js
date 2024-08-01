/* Feature Request -> 3 :
    Unique ID Generator Script:
        - Write a script that generates unique IDs using a closure to keep track of the last generated ID.
*/

const createIdGenerator = () => {
  let lastId = 0;

  return () => {
    lastId++;
    return lastId;
  };
};

const generateId = createIdGenerator();

console.log(generateId());
console.log(generateId());
console.log(generateId());
console.log(generateId());
