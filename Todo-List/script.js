const todoInput = document.querySelector('#todo-input');


const createTodo = function() {
    const todoList = document.querySelector('#todo-list');
    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');
    
    newBtn.addEventListener('click', () => {
        newLi.classList.toggle('complete');
    });


    newLi.addEventListener('dblclick',() => {
        console.log('더블 클릭');
        newLi.remove();
    })

    newSpan.textContent = todoInput.value;
    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    todoInput.value = '';
    saveItemsFn();
    return todoList;
}

const keyCodeCheck = function() {
    if(window.event.keyCode === 13 && todoInput.value !== ''){
        createTodo();
    }
};


const deleteAll = function () {
    const liList = document.querySelectorAll('li');
    for (let i = 0; i < liList.length; i++) {
        liList[i].remove();
    }
}

const saveItemsFn = function (todoList) {
    const saveItems = [];
    for (let i = 0; i < todoList.children.length; i++) {
        const todoObj = {
            contents : todoList.children[i].querySelector('span').textContent,
            complete : todoList.children[i].classList.contains('complete'), 
        };
        saveItems.push(todoObj);        
    }
    console.log(saveItems)
}