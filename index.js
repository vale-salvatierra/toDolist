let button = document.querySelector('#buttonAdd')
let cards = document.querySelector('#taskContainer') //div que contiene tarea creada



const addTask = (event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del botón

    let inputTaskHeader = document.querySelector('#card-header')
    let inputTaskBody = document.querySelector('#card-body')

    let card = document.createElement('div'); //crear card
    card.className = 'card mt-5';

    let cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    cardHeader.textContent = inputTaskHeader.value;

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardBody.textContent = inputTaskBody.value;

    let cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';


    const doneButton = document.createElement('button');
    doneButton.className = 'btn btn-success';
    doneButton.textContent = 'Completed!';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger';
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', (event) => {
        card.remove()
    })

    doneButton.addEventListener('click', () => {
        card.classList.add('text-decoration-line-through')
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        }); 
    })

    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(doneButton);
    cardBody.appendChild(deleteButton);

    taskContainer.appendChild(card);



}

button.addEventListener('click', (event) => {
    addTask(event)
})