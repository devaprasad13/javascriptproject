
const users = [
    {
        Task:"Meeting",
        Description:"client Meeting",
        Duration:"00:50:43",
    },
    {
        Task:"Project-abc",
        Description:"Develeopig-xyz",
        Duration:"01:42:02"
    },
    {
        Task:"Personal break",
        Description:"-",
        Duration:"00:22:15"
    },
    {
        Task:"Meeting",
        Description:"daily Scrum",
        Duration:"00:32:28"
    },
]
function deleteUser(index) {
    users.splice(index, 1); // Remove the user at the given index
    tables(users); // Redraw the table
}
var val = document.getElementById('cont')
val.innerHTML = tables(users)
function tables(users)
{
    let table = '<table>'
  table += '<tr><th>Task</th><th>Description</th><th>Duration</th><th>Action</th></tr>'
    users.map((res,index)=>table+=`<tr><td>${res.Task}</td><td>${res.Description}</td><td>${res.Duration}</td><td class="action-btns">
    <button id="delete-btn"  onclick="deleteUser(${index})">Delete</button>
</td></tr> `)
    table+='</table>'
    return table;
   
}
//delete
function deleteUser(index) {
    users.splice(index, 1); // Remove the user at the given index
    document.getElementById('cont').innerHTML = tables(users); // Redraw the table
}
document.getElementById('cont').innerHTML = tables(users);

// Event listener for delete button
document.getElementById('cont').addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const index = parseInt(event.target.dataset.index);
        deleteUser(index);
    }
});

const taskNameSelect = document.getElementById("task-name-select");
const taskDescriptionInput = document.getElementById("task-description-input");
const taskDurationDisplay= document.getElementById("task-duration-display");
var tb = document.querySelector('table')
function Add()
{
    const input1 = taskNameSelect.value;
    const input2 = taskDescriptionInput.value;
    const input3 = taskDurationDisplay.textContent;
  
    if(input1==""||input2==""||input3=="")
     {
        alert("Enter the Field");
     }
     else
     {
        const newRow = document.createElement("tr");

       
        newRow.innerHTML = `
            <td>${input1}</td>
            <td>${input2}</td>
            <td>${input3}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;

     
        tb.appendChild(newRow);

 
        users.push({
            Task: input1,
            Description: input2,
            Duration: input3
        });

        console.log(users);
     }
}

seconds=0;
minutes=0;
hours=0;
let timer;
let isRunning = false;
function  StartStop()
{
    

    if(!isRunning)
    {
        isRunning = true;
       timer = setInterval(()=>
    {
         seconds++;
         if(seconds>=60)
         {
            minutes++;
            seconds =0;
        
         if(minutes>=60)
         {
            hours++;
            minutes =0;
         
         }
         }
         let formatedTime =`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
         document.getElementById('task-duration-display').innerText = formatedTime;
         document.getElementById('watch').innerText = "Stop"
         
    
    },1000)
        
  
    document.getElementById('watch').style.backgroundColor="red"

    }
    else
    {
      
        clearInterval(timer)
        isRunning = false;
        document.getElementById('watch').innerText = "Start"
        document.getElementById('watch').style.backgroundColor="green"
    }
}

function helo()
{
     seconds =0;
     minutes =0;
     hours =0;
   
     let formatedTIme =`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
     document.getElementById('task-duration-display').innerText = formatedTIme;

     
}

var valie = document.getElementById('delete-btn');
valie.addEventListener('click',(event)=>
{
    if (event.target.classList.contains("delete-btn")) {
        const row = event.target.closest("tr");
        row.remove();
    }
})
//Filter
function filter() {
    const selectedValue = document.getElementById('cars').value;
    console.log(selectedValue)
    const filteredUsers = selectedValue === "Filter" ? users : users.filter(user => user.Task === selectedValue);
    document.getElementById('cont').innerHTML = tables(filteredUsers);
}


function handleDeleteButtonClick(event) {
    if (event.target.classList.contains("delete-btn")) {
        const row = event.target.closest("tr");
        const index = Array.from(row.parentNode.children).indexOf(row) - 1;
        deleteUser(index);
    }
}
document.getElementById("cont").addEventListener("click", handleDeleteButtonClick)
tables(users);
