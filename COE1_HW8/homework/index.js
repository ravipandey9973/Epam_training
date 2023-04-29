/* START TASK 1: Your code goes here */
const cells = document.querySelectorAll('.cell');

let yellowCells = [];
let blueRows = [];

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    // Toggle yellow background color on the clicked cell
    cell.classList.toggle('yellow');
    
    // Check if the clicked cell is in the first column
    if (cell.cellIndex === 0) {
      // Get the row of the clicked cell
      const row = cell.parentElement;
      
      // Check if any other cell in the row is already yellow
      const yellowCell = row.querySelector('yellow');
      if (!yellowCell) {
        // Toggle blue background color on the row
        row.classList.toggle('blue');
        // Add the row to the list of blue rows
        blueRows.push(row);
      }
    }
    
    // Check if the clicked cell is the special cell
    if (cell.classList.contains('special')) {
      // Toggle yellow background color on all cells except the clicked one
      cells.forEach(c => {
        if (c !== cell) {
          c.classList.toggle('yellow');
        }
      });
      // Clear the lists of yellow cells and blue rows
      yellowCells = [];
      blueRows.forEach(row => {
        row.classList.remove('blue');
      });
      blueRows = [];
    }
    
    // Update the list of yellow cells
    yellowCells = Array.from(cells).filter(c => c.classList.contains('yellow'));
    
    // Check if any row is still blue but has no yellow cells
    blueRows.forEach(row => {
      if (!row.querySelector('.yellow')) {
        // Remove the blue background color from the row
        row.classList.remove('blue');
        // Remove the row from the list of blue rows
        blueRows.splice(blueRows.indexOf(row), 1);
      }
    });
    
    // Set the background color of the cells based on the priority
    cells.forEach(cell => {
      if (cell.classList.contains('yellow')) {
        cell.style.backgroundColor = 'yellow';
      } else if (blueRows.includes(cell.parentElement)) {
        cell.style.backgroundColor = 'blue';
      } else {
        cell.style.backgroundColor = 'white';
      }
    });
  });
});

/* END TASK 1 */

/* START TASK 2: Your code goes here */
const phoneInput = document.getElementById('phone-input');
const sendBtn = document.getElementById('send-btn');
const notificationContainer = document.querySelector('.notification-container');
const notificationMessage = document.getElementById('notification-message');

phoneInput.addEventListener('input', () => {
  const phoneRegex = /^\+380\d{9}$/;
  const phoneValue = phoneInput.value.trim();
  if (phoneRegex.test(phoneValue)) {
    sendBtn.disabled = false;
    phoneInput.style.borderColor = 'black';
  } else {
    sendBtn.disabled = true;
    phoneInput.style.borderColor = 'red';
    notificationContainer.style.backgroundColor = 'red';
    notificationMessage.textContent = 'Type number does not follow format +380*********';
  }
});

sendBtn.addEventListener('click', () => {
  phoneInput.style.borderColor = 'green';
  notificationContainer.style.backgroundColor = 'green';
  notificationMessage.textContent = 'Data was successfully sent.';
});


/* END TASK 2 */

/* START TASK 3: Your code goes here */

/* END TASK 3 */
