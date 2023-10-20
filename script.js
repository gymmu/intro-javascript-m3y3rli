function sayHello() {
  alert("Hello World!")
}

function changeBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = "purple" 
}

function deleteText() {
  const elemToDeleteText = document.querySelector("#to-delete")
  elemToDeleteText.textContent = "Inhalt gelöscht"
}

function incrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num + 1
  numberElement.textContent = num
}

function decrementCounter() {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num - 1
  numberElement.textContent = num
}

function resetCounter() {
  const numberElement = document.querySelector("#counter")
  numberElement.textContent = 0
}

function writeText() {
  const inputElem = document.querySelector("#input")
  const outputElem = document.querySelector("#output")
  const outText = outputElem.textContent
  outputElem.textContent = outText + "\n" + inputElem.value
}

function clickBackground() {
  
}
