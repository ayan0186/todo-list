let inputBox = document.getElementById('input-box'); 
let listContainer = document.getElementById('list-container');
let deadlineBox = document.getElementById('deadline');

//add task
function addTask() { 
    if (inputBox.value === '') {
        alert("You must write a task!");
    } else {
        // Create a new list item
        let li = document.createElement("li");
        let deadlineText = deadlineBox.value;
        li.innerHTML = `${inputBox.value} ${deadlineText}`; // Add task and deadline

        // Create delete button (×)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // Cross (×) symbol
        span.onclick = function() {
            li.remove();  // Remove the task when delete button is clicked
        };

        li.appendChild(span);  // Append delete button to the list item
        listContainer.appendChild(li);  // Add the task to the list
        
        inputBox.value = '';  // Clear the task input box
        deadlineBox.value = '';  // Clear the deadline input box
    }
    saveData();
}

//check/remove task function
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

// Load saved tasks on page load
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); 

}

function showList() {
    listContainer.innerHTML = localStorage.getItem("data"); 
}

showList(); 