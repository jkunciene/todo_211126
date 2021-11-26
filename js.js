"use strict"

const task=document.getElementById('task');
const priority=document.getElementById('priority');
const myTable=document.querySelector('tbody');

const myButton=document.getElementById('myButton');

myButton.addEventListener('click', function(e){
    e.preventDefault();
    addToDo();
});

function addToDo(){
    if(task.value !== ''){
        console.log(task.value);
        console.log(priority.value);
// kuriu eilute, ja idedu i table body
      const myRow=document.createElement('tr');
      myTable.appendChild(myRow);
// kuriu stulpeli, i ji idedu task reiksme
      const myCol=document.createElement('td');
      myCol.textContent=task.value; 
//   stulpeli appendinu eilutei     
      myRow.appendChild(myCol);

    //   mano kodas priority reiksmei ideti
      const myCol1=document.createElement('td');
      const myPriority=document.createElement('p');
      myPriority.innerText=priority.value;
      switch(priority.value){
            case 'High':
                myPriority.className="btn btn-warning";                               
                break;
            case 'Normal':
                myPriority.className="btn btn-success";                              
                break;
            case 'Low':
                myPriority.className="btn btn-info";                
                break;
      }
      myCol1.appendChild(myPriority)
      myRow.appendChild(myCol1);

    } else {
        alert("Iveskite uzduoti")
    }
}