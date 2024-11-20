

// https://stackoverflow.com/questions/11517150/how-to-change-background-color-of-cell-in-table-using-java-script

// I assign all the calendar cells to the constant variable calendar and have the start and end dates set to null
const calendarCells = document.querySelectorAll('.calendar td');
let startDate = null;
let endDate = null;

// Each cell in the calendar has an event listener assigned for a 'click'. Once that event is triggered
// the variable selectedDate is assigned the date that is in that cell
// If there is no date selected at all, the first  click will be the "startDate" and the second will be the "endDate".
// These dates are then converted from the javascripts standard date format of "yyyy-mm-dd" to dd/mm/yyyy to make it easier to read
// If both the endDate and the startDate are not null (they are selected), then on the next click they are set to null.
// This allows the user to start again and select a new start and end date. 
calendarCells.forEach(cell => {
  cell.addEventListener('click', () => {
    const selectedDate = cell.getAttribute('data-date');

    if (!startDate) {
      
      startDate = new Date(selectedDate);
      const convertedStartDate = startDate.toLocaleDateString('en-GB');
      document.getElementById('start-date').textContent = convertedStartDate;
      cell.style.backgroundColor = '#d3a87c'; 
    } else if (!endDate && new Date(selectedDate) > startDate) {
        endDate = new Date(selectedDate);
        const convertedEndDate = endDate.toLocaleDateString('en-GB');
        document.getElementById('end-date').textContent = convertedEndDate;
        cell.style.backgroundColor = '#d3a87c'; 
    } else {
      
      startDate = null;
      endDate = null;
      document.getElementById('start-date').textContent = 'None';
      document.getElementById('end-date').textContent = 'None';
      calendarCells.forEach(c => (c.style.backgroundColor = '#e6d8c6')); 
    }
  });
});
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// Creating an intersection observer so that when certain sections enter the viewport, a certain annimation will occur, like a reveal etc

document.addEventListener("DOMContentLoaded", () => {
  const hiddenSections = document.querySelectorAll(".hidden, .slide-in-left, .fade-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal"); 
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 20% of the section is in the viewport
    }
  );

  hiddenSections.forEach(section => observer.observe(section));
});

// This script allows the hamburger menu to be functional when the screen size is smaller than 768 px
const hamburgerMenu = document.getElementById('hamburger-btn');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

// Event listener to show the sidebar
hamburgerMenu.addEventListener('click', () => {
    sideMenu.classList.add('active'); 
});

// Event listener to hide the sidebar
closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('active');
});