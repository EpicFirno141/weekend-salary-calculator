function recordData(event) {
    event.preventDefault();
    let firstName = document.querySelector('#firstNameValue').value;
    let lastName = document.querySelector('#lastNameValue').value;
    let id = document.querySelector('#idValue').value;
    let title = document.querySelector('#titleValue').value;
    let salary = document.querySelector('#salaryValue').value;
    let tableDiv = document.querySelector('#tableData');
    tableDiv.innerHTML += `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>$ ${salary}</td>
        <td><button onClick="removeEntry(event)">Delete</button></td>
    </tr>
    `;
}

function removeEntry(event) {

}