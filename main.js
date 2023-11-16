$(document).ready(function() {
    $('form button').click(function() {
        
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const inputListaDeTarefas = $('texto').val();
        const novaTarefa = $('<li></li>');
        console.log $(inputListaDeTarefas)
    })
}) 