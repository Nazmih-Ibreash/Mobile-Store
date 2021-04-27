'use strict';

let allUsers = [];
function Users(name, type) {
    this.name = name;
    this.type = type;
    this.price;
    this.condition;

    this.randomPrice = function () {
        this.price = (Math.floor(Math.random() * 500) + 100);
        console.log(price);
        return this.price;
    }

    allUsers.push(this);
}

let userForm = document.getElementById('userForm');
let submit = document.getElementById('addNew');
let addedUser = [];

let right = document.getElementById('right');
let table = document.createElement('table');
right.appendChild(table);

let titles = ['User', 'Type', 'Price', 'condition'];
let head = document.createElement('tr');
table.appendChild(head);
for (let i = 0; i < titles.length; i++) {

    let title = document.createElement('th');
    head.appendChild(title);
    head.textContent = titles[i];

}



userForm.addEventListener('submit', addNewUser);
function addNewUser(event) {
    event.preventDefault();

    let userName = event.target.userName.value;
    console.log(userName);

    let phoneType = event.target.phones.value;
    console.log(phoneType);

    addedUser = new Users(userName, phoneType);

    let price = addedUser.randomPrice();

    console.log(addedUser);
    storage();
    getFromStorage();


}

function storage() {
    let stringOfUsers = JSON.stringify(allUsers);

    localStorage.setItem('newUser', stringOfUsers);
    console.log(setItem);
}
let stringToArrayUsers;

function getFromStorage() {
    let data = localStorage.getItem('newUser');
    stringToArrayUsers = JSON.parse(data);
    console.log(stringToArrayUsers);

    // if (stringToArrayUsers !== null) {
    //     allUsers=stringToArrayUsers;
    // }

    let newRow = document.createElement('tr');
    table.appendChild(newRow);
    for (let i = 0; i < titles.length; i++) {

        let cell = document.createElement('td');
        newRow.appendChild(cell);
        cell.textContent = stringToArrayUsers[i];

    }

}


