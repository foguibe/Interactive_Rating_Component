document.addEventListener('DOMContentLoaded', function() { /*This line of code registers an event listener to execute a function when the HTML document has finished loading, making it ready for JavaScript manipulation.*/
    var submitBtn = document.getElementById("submit-btn"); /*Store the submit element in a variable called "ratings".*/
    var ratings = document.getElementsByName("rating"); /*Store all the elements having the name attribute value.*/
    var ratingsArray = [...ratings]; /*The abive line of code returns a nodelist so you wnat to convert it into an array instead.*/
    
    submitBtn.addEventListener("click", function() { /*Listen for clicks on the submit button and runs the lines of code below.*/
        var selected = null;
        for (var i = 0; i < ratingsArray.length; i++) { /*Iterate through the ratingsArray to find out wihich of the radio buttons was checked. Becasue they have the same name-value, when one is checked,
        the rest will be unchecked.*/
            if (ratingsArray[i].checked) {
                selected = ratingsArray[i].value; /*When you find the checked radio button, store its value.*/
                break; /*Then terminate the loop*/
            }
        }
        if (selected == null) {
            alert ("You must make a selection before submitting.") /*If at the end of the loop, it is found that no radiobutton was checked, display this message.*/
        }

        else {
            localStorage.setItem("selectedValue", selected); /*Use the localStorage feature to store the selected value.*/
            window.location.href = "thanks.html"; /*Open a new window: the thanks.html page*/
        }
    })
});
