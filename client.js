let entryData = []
entryData.push(35000);
entryData.push(42000);
console.log(entryData);
calculateSalary();

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
    salaryArrayAdd(salary);
    calculateSalary();
}

function salaryArrayAdd(salary) {
    let editedNumber = salary.replace(',','');
    entryData.push(Number(editedNumber));
}

function removeEntry(event) {
    let removedSalary = event.target.parentElement.parentElement.getElementsByTagName('td')[4].innerHTML;
    let splitText = removedSalary.split(' ');
    let finishedNumber = splitText[1].replace(',','');
    let arrayEntry = entryData.indexOf(Number(finishedNumber));
    console.log('Removing: ' + finishedNumber + ' with an index of: ' + arrayEntry);
    entryData.splice(arrayEntry, 1);
    console.log('Array now contains: ' + entryData);
    calculateSalary();
    event.target.parentElement.parentElement.remove();
}

function calculateSalary(){
    let salaryTotal = 0;
    for(let salary of entryData){
        salaryTotal += salary;
    }
    let monthlyCost = salaryTotal/12;
    let monthlyDiv = document.querySelector('#calculatorResult');
    monthlyDiv.innerHTML = `$ ${numberRound(monthlyCost)}`;
}

function numberRound(number) {
    let rounded = Math.round(number*100);
    let finishRound = rounded/100;
    return finishRound;
}