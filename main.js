
document.addEventListener('DOMContentLoaded', function() {
  var addButton = document.getElementById('add-button');
  addButton.addEventListener('click', addTask);
});

function addTask() {
  var taskList = document.getElementById('task-list');
  var taskInput = document.getElementById('new-task');
  var newTask = taskInput.value;
  if(newTask.trim() !== '') {
    var listItem = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', function() {
      if(this.checked) {
        listItem.style.textDecoration = 'line-through';
      } else {
        listItem.style.textDecoration = 'none';
      }
    });
    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(' ' + newTask));
    taskList.appendChild(listItem);
    taskInput.value = '';
  } else {
    alert('Please enter a task.');
  }
}
