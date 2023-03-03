$(document).ready(function(){
    $('#tel').mask('(00) 00000-0000', { placeholder: "(11) 55555-5555" });

    $('form').validate({
        rules: {
            nome: {
                required: true
            }, 
            email: {
                email: true,
                required: true
            },
            tel: {
                required: true,
                minlength: '15',
            }
        },
    })
})