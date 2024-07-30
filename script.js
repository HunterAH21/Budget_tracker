function addTransaction() {
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    if (type === 'choose' || name === '' || amount === '') {
        alert('Please fill in all fields');
        return;
    }

    const table = document.getElementById('transaction-list');
    const row = table.insertRow();
    row.insertCell(0).innerText = type;
    row.insertCell(1).innerText = name;
    row.insertCell(2).innerText = `$${amount}`;
    const deleteCell = row.insertCell(3);
    deleteCell.innerHTML = '<button class="delete-button" onclick="deleteTransaction(this)">Delete</button>';
}

function deleteTransaction(element) {
    const row = element.parentNode.parentNode;
    row.parentNode.removeChild(row);
}