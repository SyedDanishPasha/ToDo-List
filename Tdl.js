function get_todo() {
    var todo = new Array;
    var todo_str = localStorage.getItem('td');
    if (todo_str !== null) {
        todo = JSON.parse(todo_str);
    }
    return todo;
}

function add() {
    var task = document.getElementById('task').value;
    var todo = get_todo();
    todo.push(task);
    localStorage.setItem('td', JSON.stringify(todo));
    show();
    return false;
}

function clearDefault(a) {
    if (a.defultValue == a.value) { a.value = "" }
};

function remove() {
    var id = this.getAttribute('id');
    var todo = get_todo();
    todo.splice(id, 1);
    localStorage.setItem('td', JSON.stringify(todo));
    show();
    return false;
}

function show() {
    var todo = get_todo();
    var html = '<ul>';
    for (var i = 0; i < todo.length; i++) {
        html += '<li>' + todo[i] + '<button class="remove" id="' + i + '">Delete</button> </li>';
    };
    html += '<ul>';
    document.getElementById('todo').innerHTML = html;

    var button = document.getElementsByClassName('remove');
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', remove);
    };
}

document.getElementById('add').addEventListener('click', add);
show();