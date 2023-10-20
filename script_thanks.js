document.addEventListener('DOMContentLoaded', function() {
    var messageValue = localStorage.getItem("selectedValue"); /*Obtain the selected value*/
    var message = document.getElementById("message");
    message.textContent = "You selected " + messageValue + " out of 5";
});
