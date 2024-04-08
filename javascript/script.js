let addTaskButton;
let orderedList;
//preset tasks
const presetTasks = [
    {taskName: "Wake Up", startTime: "07:30", endTime: "07:35" },
    {taskName: "Breakfast", startTime: "07:45", endTime: "08:00" }
]

function getHTMLElements() {
    addTaskButton = document.querySelector("#addTaskButton");
    addTaskButton.addEventListener('click', addTaskFromUserInput);

    orderedList = document.querySelector("#taskList")
} 

//A function that changes the class of the parentLi when it's child checkbox is clicked
function onCheckBoxChange(parentLi, checkBox) {
    console.log("checkbox clicked");
    console.log(parentLi);
    console.log(checkBox);
    if (checkBox.checked){
        parentLi.classList.add("crossed-out");
    }
    else {
        parentLi.classList.remove("crossed-out");
    }
}
    
function addTaskFromUserInput() {
    console.log("added a task");

    //get values of both input boxes
    const inputBox = document.querySelector("#taskInputBox");
    const startTimeInputBox = document.querySelector("#startTimeInputBox");
    const endTimeInputBox = document.querySelector("#endTimeInputBox");
    let inputTask = inputBox.value;
    let startTime = startTimeInputBox.value;
    let endTime = endTimeInputBox.value;
    

    //clear input boxes
    inputBox.value = "";
    startTimeInputBox.value = "";
    endTimeInputBox.value = "";


    
    makeANewTask(inputTask, startTime, endTime);
}

//A function that creates a new task and adds it to the ordered list
function makeANewTask(taskText, taskStartTime, taskEndTime) {

    const newLi = document.createElement("li");
    newLi.textContent = taskText + ": [" + taskStartTime + "]" + " - " + " [" + taskEndTime + "]";

    const checkBox = document.createElement("input");
    checkBox.setAttribute('type', "checkbox");
    
    newLi.appendChild(checkBox);
    orderedList.appendChild(newLi);
}

//function that removes a task
//event.target retrieves where an event occured
//event.target.closest searches for the element that triggered event.target and finds the closest one
function removeATask(event) {
    if (event.target.type === "checkbox") {
      const listItem = event.target.closest("li");
      onCheckBoxChange(listItem, event.target);
      console.log("done with task");
    }
  }
function runProgram() {
    console.log("Program is running");
    getHTMLElements();
    
    orderedList.addEventListener("click", removeATask);
    //make preset takss
    for (const task of presetTasks) {
        makeANewTask(task.taskName, task.startTime, task.endTime);}
}

document.addEventListener('DOMContentLoaded', runProgram);
