const todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
  }, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
  }];
  
  renderTodoList();
  
  function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach(function(value, index){
      const { name, dueDate } = value;
      const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
          todoList.splice(${index}, 1);
          renderTodoList();
        " class="delete-todo-button">Delete</button> 
      `;
      todoListHTML += html;
    });

    document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
  }
  


  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
  
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    if(!(name=='' || dueDate==''))
    {
        todoList.push({
            name,
            dueDate
          });
    }
    inputElement.value = '';
    dateInputElement.value = '';
  
    renderTodoList();
  }