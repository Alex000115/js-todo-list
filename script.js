const list = document.getElementById('list');
const task = document.getElementById('task');

function add(){
  if(!task.value) return;
  const li = document.createElement('li');
  li.innerText = task.value;
  li.onclick = () => li.remove();
  list.appendChild(li);
  task.value = '';
}
