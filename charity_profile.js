// for the alert
function doSomething() {
    alert("Please fill out the entire form");
}
// loading for the script
window.onload = function() {
    // Get the "Volunteer now" button by its id
    const button = document.getElementById('volunteer-btn');
    
    // Check if the button exists before attaching the event listeners
    if (button) {
        // for the click
        button.addEventListener('onclick', doSomething);
        
        // Add a 'click' event listener to show a message when the button is clicked.
        button.addEventListener('click', function() {
            alert("This is where you fill out the volunteer form!");

            // Change the background color of the button to purple.
            button.style.backgroundColor = 'purple';
            button.style.color = 'white';  // Change text color to white for contrast
        });
    }
};
