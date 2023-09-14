const form = document.querySelector('#activities_form')
const approvedImg = '<img src="./images/aprovado.png" alt="emoji festejando">';
const disapprovedImg = '<img src="./images/reprovado.png" alt="emoji decepcionado">';
const activities = [];
const grades = [];
const spanApproved = '<span class="result approved">Aprovado</span>';
const spanDisapproved = '<span class="result disapproved">Reprovado</span>';
const minGrade = parseFloat(prompt('Digite a nota minima:'));

let rows = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    addRow();
    updateTbody();
    updateFinalGradeAverage();
})

function addRow() {
    const inputActivityName = document.querySelector('#activity_name');
    const inputActivityGrade = document.querySelector('#activity_grade');

    if (grades.includes(inputActivityName.value)) {
        alert(`A atividade ${inputActivityName.value} já foi inserida`);
    } else {
        activities.push(inputActivityName.value);
        grades.push(parseFloat(inputActivityGrade.value));
    
        let row = '<tr>';
        row += `<td>${inputActivityName.value}</td>`;
        row += `<td>${inputActivityGrade.value}</td>`;
        row += `<td>${inputActivityGrade.value >= minGrade ? approvedImg : disapprovedImg}</td>`;
        row += '</tr>';
    
        rows += row;
    }
    
    inputActivityName.value = '';
    inputActivityGrade.value = '';
}

function updateTbody() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = rows;
}

function updateFinalGradeAverage() {
    const finalAverage = calculateAverage();

    document.getElementById('final_average_value').innerHTML = finalAverage;
    document.getElementById('final_average_result').innerHTML = finalAverage >= minGrade ? spanApproved : spanDisapproved;
}

function calculateAverage() {
    let gradesSum = 0;

    for (let i = 0; i < grades.length; i++) {
        gradesSum += grades[i];
    }

    return gradesSum / grades.length;
}