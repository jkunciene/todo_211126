"use strict"

const task=document.getElementById('task');
const priority=document.getElementById('priority');

const myButton=document.getElementById('myButton');

myButton.addEventListener('click', function(e){
    e.preventDefault();
    addToDo();
});

function addToDo(){
    console.log(task.value);
    console.log(priority.value);
}