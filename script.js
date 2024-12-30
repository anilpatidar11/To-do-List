// user input text contain in inputBox name variable
const inputBox = document.getElementById("input-box");

// list itme contain
const listContainer = document.getElementById("list-container");

//create li tag when type any todo and assign value of input to li tag
// create span tag to cross button

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

//add event listener when click li tag to check list item and  remove item

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

//to save task  when refresh browser

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

//saved task show in viewport
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
