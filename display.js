const image = document.getElementById('image');

//display button
const displayButton = document.querySelector('.display');
//add eventListener
displayButton.addEventListener("click", displayPicture);

//clear button
const clearButton = document.querySelector('.clear');
//add eventListener
clearButton.addEventListener("click", clearPicture);

//eventlistener function 
function displayPicture() {
  const el = document.querySelector('.container').classList;
  el.add("add");
  el.remove("cleared")
}

//eventlistener function 
function clearPicture() {
  const picsCleared = document.querySelector('.container').classList;
  picsCleared.remove("add");
  picsCleared.add("cleared");
}