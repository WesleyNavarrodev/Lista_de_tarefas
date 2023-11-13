const form = document.getElementById('texto')
form.addEventListener('submit', function (e){
    e.preventDefault();

const ListaDeTarefa = document.getElementById('lista');

    alert(`Tarefa:${ListaDeTarefa.value}`);
});