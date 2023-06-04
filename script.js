const inputValue = document.querySelector('#input');
const addTodo = document.querySelector('.fa-plus');
const tugas = document.querySelector('#tasks');

let data = [];

const today = new Date();
const options = {month:"short", day:"numeric", year:"numeric"};

addTodo.addEventListener('click', (e) => {
    if(inputValue.value === ""){
        alert("Your input is blank");
    }
    else {
        const item = `
        <div id="task-item">
            <p>${inputValue.value}</p>
            <div class="options">
                <div class="date">${today.toLocaleDateString("en-US", options)}</div>
                <div class="olah">
                    <i onclick="ceklis(this)" class="fa-solid fa-check"></i>
                    <i onclick="edit(this)" class="fa-solid fa-pen-to-square"></i>
                    <i onclick="hapus(this)" class="fa-solid fa-trash-can"></i>
                </div>
            </div>
        </div>
        `;
        const position = "afterbegin";
    
        tugas.insertAdjacentHTML(position, item);
        // tugas.innerHTML += `
        // <div id="task-item">
        //     <p>${inputValue.value}</p>
        //     <div class="options">
        //         <div class="date">${today.toLocaleDateString("en-US", options)}</div>
        //         <div class="olah">
        //             <i onclick="ceklis(this)" class="fa-solid fa-check"></i>
        //             <i onclick="edit(this)" class="fa-solid fa-pen-to-square"></i>
        //             <i onclick="hapus(this)" class="fa-solid fa-trash-can"></i>
        //         </div>
        //     </div>
        // </div>`;
        inputValue.value = "";
    }
});

function ceklis(e) {
    e.parentElement.parentElement.previousElementSibling.classList.toggle('garis');
}

function hapus(e) {
    e.parentElement.parentElement.parentElement.remove();
}

function edit(e) {
    inputValue.value = e.parentElement.parentElement.previousElementSibling.textContent;
    hapus(e);
}

document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        if (inputValue.value === "") {
            alert("Your input is blank");
        }
        else {
            addTodo.click();
        }
    }
});