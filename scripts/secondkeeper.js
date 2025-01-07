const inputArea = document.querySelector('.js-title-box')
const plusSign = document.querySelector('.js-plus-sign')
const todoGrid = document.querySelector('.js-todo-grid')
const textArea = document.querySelector('.js-textarea')

const todoArray = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodo(){
let html = '';
todoArray.forEach((todo,index)=>{
  html += `
 <div class="todo" data-index = "${index}">
      <h1>${todo.arrayInput}</h1>
      <p>${todo.arrayPlaceholder}</p>
      <button class="delete-button js-delete-button">
      <i class="fas fa-trash"></i> Delete
      </button>
      </div>
`
})
todoGrid.innerHTML = html;
deleteTodo()
};


renderTodo()

function generateFullTextArea(){
  textArea.addEventListener('click',()=>{
    inputArea.style.display = 'block';
    const lines = textArea.value.split('\n').length;
    textArea.rows = Math.max(lines, 3);
    plusSign.style.display = 'block';
  })
}

generateFullTextArea()

function addTodo(){
  plusSign.addEventListener('click', ()=>{
    const title = inputArea.value;
    const description = textArea.value;
    if(title === '' || description===''){
      alert('Please fill in both fields:')
      return;
    }
    todoArray.push({
      arrayInput: title,
      arrayPlaceholder: description
    })
    renderTodo()
    saveToStorage()
    inputArea.value = '';
    textArea.value = '';
  })
}
addTodo()


function deleteTodo(){
  const deleteButtons = document.querySelectorAll('.js-delete-button')
  deleteButtons.forEach((deleteButton)=>{
    deleteButton.addEventListener('click', (event)=>{
        const todoElement = event.target.closest('.todo')
        const index = Number(todoElement.dataset.index);
        todoArray.splice(index, 1);
        renderTodo()
        saveToStorage()   
    })
  })

}


deleteTodo()
function saveToStorage(){
  localStorage.setItem('todos', JSON.stringify(todoArray))
}
saveToStorage()