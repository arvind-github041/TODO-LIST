let elementduedate = '';
let elementtodo = '';

const data =[];
function gettodo(){
 elementtodo = document.querySelector('.js-todo-element').value;
 elementduedate = document.querySelector('.js-dueDate').value;
 
 data.push({name : elementtodo,
        dueDate : elementduedate
 });
 rander();
 console.log(data);   

 document.querySelector('.js-todo-element').value =''; 
 document.querySelector('.js-dueDate').value ='';
}
function rander() {
    let innercode = '';

    for (let i = 0; i < data.length; i++) {
        innercode += `
            <div class="todo-item ${data[i].done ? 'done' : ''}">
                <span class="tick">✔</span>
                <span>${data[i].name} — ${data[i].dueDate}</span>
                <button onclick="markDone(${i})">Done</button>
                <button onclick="deleteTodo(${i})">Delete</button>
            </div>
        `;
    }

    document.querySelector('.js-todisplay').innerHTML = innercode;
}

function markDone(index) {
    data[index].done = true;
    rander();
}

function deleteTodo(index) {
    data.splice(index, 1);
    rander();
}