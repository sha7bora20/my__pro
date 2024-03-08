const form = document.getElementById('form');
const table = document.getElementById('table');

form.addEventListener('submit', e => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    const name = nameInput.value;
    const email = emailInput.value;

    if (name && email) {
        createRow(name, email);
        nameInput.value = '';
        emailInput.value = '';
    }
});

function createRow(name, email) {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = name;

    const emailCell = document.createElement('td');
    emailCell.textContent = email;

    const actionsCell = document.createElement('td');
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.addEventListener('click', () => {
        updateRow(row, name, email);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        deleteRow(row);
    });

    actionsCell.appendChild(updateButton);
    actionsCell.appendChild(deleteButton);

    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(actionsCell);

    table.appendChild(row);
}

function updateRow(row, name, email) {
    const nameCell = row.querySelector('td:first-child');
    const emailCell = row.querySelector('td:nth-child(2)');

    nameCell.textContent = name;
    emailCell.textContent = email;
}

function deleteRow(row) {
    row.remove();
}