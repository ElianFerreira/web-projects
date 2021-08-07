let inputBox = document.querySelector('.input-fild input');
let addBtn = document.querySelector('.input-fild button');
let todoList = document.querySelector('.todo-list');
let btnDeleteAll = document.querySelector('.btn-delete');

inputBox.onkeyup = () => {
  let userData = inputBox.value;
  if (userData.trim() != 0) {
    addBtn.classList.add('active');
  } else {
    addBtn.classList.remove('active');
  }
};

mostraTarefa();
addBtn.classList.remove('active');

addBtn.onclick = () => {
  let userData = inputBox.value;
  let getLocalStorage = localStorage.getItem('Nova Tarefa');
  if (getLocalStorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage);
  }
  listArr.push(userData);
  localStorage.setItem('Nova Tarefa', JSON.stringify(listArr));
  mostraTarefa();
};

function mostraTarefa() {
  let getLocalStorage = localStorage.getItem('Nova Tarefa');
  if (getLocalStorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage);
  }

  let tarefaPendente = document.querySelector('.pendentes');
  tarefaPendente.textContent = listArr.length;

  if (listArr.length > 0) {
    btnDeleteAll.classList.add('active');
  }else{
    btnDeleteAll.classList.remove('active');
  }

  let newLiTag = '';
  listArr.forEach((element, index) => {
    newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag;
  inputBox.value = '';
}

function deleteTask(index) {
  let getLocalStorage = localStorage.getItem('Nova Tarefa');
  listArr = JSON.parse(getLocalStorage);
  listArr.splice(index, 1);
  localStorage.setItem('Nova Tarefa', JSON.stringify(listArr));
  mostraTarefa();
}

btnDeleteAll.onclick = () => {
  listArr = [];
  localStorage.setItem('Nova Tarefa', JSON.stringify(listArr));
  mostraTarefa();
};
