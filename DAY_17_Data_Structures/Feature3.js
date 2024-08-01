/* Feature Request -> 3 :
    Queue Script:
        - Write a script that implements a queue and simulates a printer queue.
*/

class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the first element of the queue
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items.shift();
  }

  // Peek at the first element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }

  // Display all elements in the queue
  display() {
    console.log(this.items.join(" <- "));
  }
}

// Function to simulate a printer queue
function simulatePrinterQueue() {
  const printerQueue = new Queue();

  // Function to add a print job to the queue
  function addPrintJob(job) {
    console.log(`Adding print job: ${job}`);
    printerQueue.enqueue(job);
    printerQueue.display();
  }

  // Function to process (print) a job from the queue
  function processPrintJob() {
    if (printerQueue.isEmpty()) {
      console.log("No print jobs to process");
    } else {
      const job = printerQueue.dequeue();
      console.log(`Processing print job: ${job}`);
      printerQueue.display();
    }
  }

  // Adding print jobs
  addPrintJob("Document1.pdf");
  addPrintJob("Image1.png");
  addPrintJob("Report.docx");

  // Processing print jobs
  processPrintJob();
  processPrintJob();
  processPrintJob();
  processPrintJob(); // This will show "No print jobs to process"
}

// Run the printer queue simulation
simulatePrinterQueue();

// Adding print job: Document1.pdf
// Document1.pdf
// Adding print job: Image1.png
// Document1.pdf <- Image1.png
// Adding print job: Report.docx
// Document1.pdf <- Image1.png <- Report.docx
// Processing print job: Document1.pdf
// Image1.png <- Report.docx
// Processing print job: Image1.png
// Report.docx
// Processing print job: Report.docx

// No print jobs to process
