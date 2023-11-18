const nameInput = document.querySelector('.name')
const surnameInput = document.querySelector('.surname')
const ageInput = document.querySelector('.age')
const btn = document.querySelector('.add-btn')
const tBody = document.querySelector('tbody')

btn.addEventListener('click', () => {
    tBody.innerHTML += `
    <tr>
        <td>${nameInput.value}</td>
        <td>${surnameInput.value}</td>
        <td>${ageInput.value}</td>
    </tr>`

    nameInput.value = ''
    surnameInput.value = ''
    ageInput.value = ''
})