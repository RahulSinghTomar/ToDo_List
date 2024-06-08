let addTaskbtn= document.querySelector("#addTaskbtn");
let newTaskInput= document.querySelector("#newtask");
let todolist = document.querySelector('#todolist');

let draggingTask = null;

function createTaskElement(taskText){
    let taskElement=document.createElement("div")
    taskElement.innerHTML=`
    <span>${taskText}</span>
    <button class="editTask">Edit</button>
    <button class="deleteTask"> Delete</button>
    `;

    let deleteBtn =taskElement.querySelector('.deleteTask');
    deleteBtn.addEventListener("click",()=>{
        taskElement.remove();
    })

    let editBtn = taskElement.querySelector(".editTask");
    editBtn.addEventListener("click",()=>{
        let newTaskText=prompt("edit the text", taskText)
        if(newTaskText !==""){
            taskElement.querySelector("span").innerText=newTaskText
        }
    })

    //dragstart dragend

    taskElement.draggable=true

    taskElement.addEventListener("dragstart", ()=>{
        draggingTask=taskElement;
        taskElement.classList.add("dragging");

    })

    taskElement.addEventListener("dragend", ()=>{
        taskElement.classList.remove("dragging");
        todolist.appendChild(draggingTask);
        draggingTask=null;
    })




    return taskElement;
}


addTaskbtn;addEventListener("click",function(){
    console.log("clicked");
    let taskText =newTaskInput.value.trim();
    if(taskText !==""){
       let taskElement= createTaskElement(taskText)
       todolist.appendChild(taskElement)
       newTaskInput.value="";

    }
})

todolist.addEventListener("dragover",(event)=>{
    event.preventDefault();
 let draggableElement= document.querySelector(".dragging");
 todolist.appendChild(draggableElement)
})
