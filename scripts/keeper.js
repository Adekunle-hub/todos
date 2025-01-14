const todoArray = JSON.parse(localStorage.getItem('todo')) || [
  `
      <div class="todo">
      <h1>Hello</h1>
      <p>Lets go</p>
      <button class="delete-button js-delete-button">
      <i class="fas fa-trash"></i> Delete
      </button>
      </div>`,
];

console.log(todoArray.h1)
const textArea = document.querySelector('.js-textarea')

const inputArea = document.querySelector('.js-title-box')

const plusSign = document.querySelector('.js-plus-sign')

const todoGrid = document.querySelector('.js-todo-grid')

function renderPage(){
  const savedTodos = JSON.parse(localStorage.getItem('todo')) || [];
  savedTodos.innerHTML ='';
  todoArray.forEach((html)=>{
    todoGrid.insertAdjacentHTML('beforeend', html);
  })
  
}



function generateFullTextArea(){

textArea.addEventListener('click',()=>{
  
  inputArea.style.display = 'block'
  const lines = textArea.value.split('\n').length;
  textArea.rows = Math.max(lines, 3)
  plusSign.style.display = 'block'
})
}

generateFullTextArea()


function renderHTML(){
  plusSign.addEventListener('click', ()=>{
    title = inputArea.value;
    description = textArea.value;
    if(title ==''||description ===''){
      alert('Please fill the inputs')

    }else{
    const html =
     `
    <div class="todo">
        <h1>${inputArea.value}</h1>
        <p>${textArea.value}</p>
        <button class="delete-button js-delete-button">
          <i class="fas fa-trash"></i> Delete
        </button>
      </div>
    `
   
    inputArea.value ='';
    textArea.value ='';
    saveToStorage()
    console.log(todoArray)

  }
  })}
renderHTML()
renderPage()


function deleteHTML(){
  todoGrid.addEventListener('click', (event)=>{
    if(event.target.classList.contains('js-delete-button')){
      const todo = event.target.closest('.todo')
      if(todo){
        const index = Array.from(todoGrid.children).indexOf(todo)
        todoArray.splice(index, 1)
        todoGrid.innerHTML = todoArray.join('')

        saveToStorage()
        console.log(todoArray)
      }
    }
  })
}
deleteHTML();


function saveToStorage(){
  localStorage.setItem('todo', JSON.stringify(todoArray))
}

console.log(todoArray)
