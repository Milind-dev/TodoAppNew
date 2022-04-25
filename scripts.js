//adding inputs

let arr = [];

var TodoModify = document.getElementById("TodoModify");
// var remaingTime = new Date("Apr 24, 2022 10:45:00").getTime();
var remaingTime = new Date("Apr 24, 2022 17:50:00").getTime();
// console.log(remaingTime)
var x = setInterval(() => {
  var now = new Date().getTime();
  // console.log(now)
  var clockTime = remaingTime - now;
  // console.log(clockTime)
  var days = Math.floor(clockTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor((clockTime%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((clockTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((clockTime% (1000 * 60)) / 1000);

  document.getElementById("TimeRemaining").innerHTML = days + "day "+ hours + "hr " + minutes + "min " + seconds + "sec ";
    if (clockTime < 0) {
      clearInterval(x);
      document.getElementById("TimeRemaining").innerHTML = "time limit end";
    }
  }, 1000);


const display = () => {
    let html = arr.length+ "" 
    // let pages  = JSON.parse(localStorage.getItem('todoData'));
    let pages  = localStorage.getItem('todoData');
    if (pages.length < 0) {
        arr = [];
        // console.log("item is empty");
      } else {
        arr = JSON.parse(pages);
      }
    arr.forEach((element, index) => {
      html += `
      <div class="todoEditDelete">
                <p> ${index}-Task -${element}</p>
                <input type="hidden" id="currentIndex" />
                <div>
                    <button  class="todoEdit" onclick='edit(${index})'>Edit</button>
                    <button  class="todoDelete" onclick='deleteTodo(${index})'>Delete</button>
                </div>
        </div>`;
    }); 
    TodoModify.innerHTML = html ;
}

const adding = (e) => {

    e.preventDefault()
    let todoAdd = document.getElementById("todoItemsInput").value;
    let tododata = localStorage.getItem("todoData");
     if (tododata === null) {
        arr = [];
        alert('fill something')
      } else {
        arr = JSON.parse(tododata);
      }
      // arr.push({addData:todoAdd})
    arr.push(todoAdd)

    localStorage.setItem("todoData",JSON.stringify(arr)) || [];
    
    display()
}

const deleteTodo = (index) => {
    let todoData = localStorage.getItem("todoData");
    arr = JSON.parse(todoData);
    arr.splice(index,1);
    localStorage.setItem("todoData",JSON.stringify(arr));
    display();
}
// ---------------

const saveTask = document.getElementById("saveEdit");
const currentIndex = document.getElementById("currentIndex");
let todoAdd = document.getElementById("todoItemsInput");
const addTask = document.getElementById("add");

function edit(index) {
  currentIndex.value = index;
  let todo = localStorage.getItem("todoData");
  arr = JSON.parse(todo);
  todoAdd.value = arr[index];
  addTask.style.display = "none";
  saveTask.style.display = "block";
 }

 saveTask.addEventListener("click", () => {
  let todo = localStorage.getItem("todoData");
  arr = JSON.parse(todo);
  let id = currentIndex.value;
  console.log(id)
  arr[id] = todoAdd.value;
  console.log(arr[id])
  addTask.style.display = "block"; //addtaskbutton
  saveTask.style.display = "none";
  todoAdd.value = "";
  localStorage.setItem("todoData", JSON.stringify(arr));
  display();
 });

//load listener
window.addEventListener("load",function() {
    document.getElementById("add").addEventListener("click",adding)

    
    document.getElementById("todoTimer").innerText = getTimeRemaining;
})


