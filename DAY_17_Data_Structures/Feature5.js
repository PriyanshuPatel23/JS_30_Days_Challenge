/* Feature Request -> 5 :
    Graph Script:
        - Write a script that implements a graph and performs breadth-first search (optional).
*/

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList.has(vertex1)) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList.has(vertex2)) {
      this.addVertex(vertex2);
    }
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1); // Comment this line for a directed graph
  }

  // Perform breadth-first search (BFS)
  bfs(startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    const result = [];

    visited.add(startVertex);

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);

      const neighbors = this.adjacencyList.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }
}

// Example usage
const graph = new Graph();

// Adding vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

// Adding edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

// Perform BFS starting from vertex 'A'
const bfsResult = graph.bfs("A");
console.log("Breadth-First Search starting from vertex 'A':");
console.log(bfsResult.join(" -> ")); // Output: A -> B -> C -> D -> E
