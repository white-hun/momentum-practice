const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; // todos의 key

let toDos = []; // array;

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // array의 내용을 string 형태의 key:todos로 localstorage에 추가;
}

function deleteToDo(event) {
  const li = event.target.parentElement; //event의 target인 button의 부모element를 li로 저장;
  li.remove(); // li 제거
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 클릭한 li.id와 다른 toDo는 남긴다;
  saveToDos();
}

function paintToDo(newTodo) {
  // todo-list 한줄을 만드는 함수
  const li = document.createElement("li"); // li 생성
  li.id = newTodo.id; // 생성된 li의 id는 입력값에 부여되는 랜덤한 숫자의 id
  const span = document.createElement("span"); // span 생성
  span.innerText = newTodo.text; //span의 text newTodo text 로 변경
  const button = document.createElement("button"); // button 생성
  button.innerText = "X"; // button의 text X로 변경
  button.addEventListener("click", deleteToDo); // button에 click 시 함수 실행하는 event 추가
  li.appendChild(span); // li의 child로 span 추가
  li.appendChild(button); // li의 child로 button 추가
  toDoList.appendChild(li); // todo-list에 span과 button이 추가된 li 추가;
}

function handleToDoSubmit(event) {
  event.preventDefault(); // 기본 동작 제어
  const newTodo = toDoInput.value; // 입력값 newTodo에 저장
  toDoInput.value = ""; // 저장된 후 input의 값 비움
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }; // 입력값에 랜덤한 숫자의 id를 부여
  toDos.push(newTodoObj); // toDos에 id부여된 item 저장
  paintToDo(newTodoObj); // 입력값을 인자로 함수 실행
  saveToDos(); // 함수 실행
}
toDoForm.addEventListener("submit", handleToDoSubmit); // todo-form애 submit 시 함수 실행되는 event 추가

const savedToDos = localStorage.getItem(TODOS_KEY); // array에 item을 추출;

if (savedToDos !== null) {
  // 가져올게 있으면
  const parsedToDos = JSON.parse(savedToDos); // text 상태의 item들을 사용가능 인수로 변환;
  toDos = parsedToDos; //
  parsedToDos.forEach(paintToDo); // 변환된 인수 각각에 함수 실행;
}

//array는 빈array로 시작
//시작될 때 localstroage에 저장되어있는 이전의 todo를 포함 시켜야한다
//
