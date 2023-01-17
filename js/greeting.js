const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginBtnSubmit(event) {
  // onLodinBtnSubmit 함수
  event.preventDefault(); // 기본 동작 제어(새로고침)
  loginForm.classList.add(HIDDEN_CLASSNAME); // login-form을 hidden
  const username = loginInput.value; // 입력값을 username 변수에 저장
  localStorage.setItem(USERNAME_KEY, username); // 변수화된 username 값을 username이라는 key롸 함께 localstorage에 저장
  paintGreeting(username); // username value 입력되면 함수 실행
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username} Have a nice day.`; //비어있는 h1 element요소 안에 text 추가
  greeting.classList.remove(HIDDEN_CLASSNAME); // greeting의 hidden 제거 -> h1 표시
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // first localStorage에서 정보를 불러온다 key에 해당한 value 값을 string으로 받게됨

if (savedUsername === null) {
  //value 없으면
  loginForm.classList.remove(HIDDEN_CLASSNAME); // loginForm의 hidden 제거 -> login-form 표시
  loginForm.addEventListener("submit", onLoginBtnSubmit); // loginForm에 addEventListener를 추가, submit 발생하면 onLoginBtnSubmit함수 실행
} else {
  //value있으면
  paintGreeting(savedUsername); // 함수 실행
}
