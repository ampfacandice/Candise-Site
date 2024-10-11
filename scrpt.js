document.getElementById("about-link").addEventListener("click", function(event) {
    event.preventDefault();  // Prevent the default link behavior
    window.location.href = "about.html";  // Redirect to the About Us page
});
// Get the modal
var modal = document.getElementById("joinUsModal");

// Get the button that opens the modal
var btn = document.getElementById("join-us-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission (you can add your logic here)
document.getElementById("joinUsForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission
    alert("Thank you for joining!"); // Placeholder for your submission logic
    modal.style.display = "none"; // Close the modal
}
