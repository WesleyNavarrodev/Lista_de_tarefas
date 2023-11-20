$(document).ready(function() {
    $('form button').click(function() {
        
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        const inputListaDeTarefas = $("#texto").val();
        const novaTarefa = $(`<li>${inputListaDeTarefas}</li>`);
        $("#lista").append(novaTarefa);
    })
})

$(document).ready(function() {
    $('#lista').on('click', 'li', function(){
        $(this).toggleClass('completed')
    });
});