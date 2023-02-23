$(document).ready(function(){
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-91'
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(11) 91234-5678'
    })

    $('#cep').mask('00000-000', {
        placeholder: '12345-000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: true
            },
            tel: {
                required: true
            },
            email: {
                email: true,
                required: true
            },
            cep: {
                required: true
            },
            endereco1: {
                required: true
            },
            endereco2: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            cpf: 'Por favor, insira o seu CPF',
            tel: 'Por favor, insira o seu telefone',
            email: 'Por favor, insira o seu email',
            cep: 'Por favor, insira o seu CEP',
            endereco1: 'Por favor, insira o seu endereço',
            endereco2: 'Por favor, insira o seu endereço'
        },
        highlight: function(element, errorClass) {
            $(element).fadeOut(function() {
                $(element).fadeIn();
            });
        },
        error: 'error',
        submitHandler: function(){
            alert('Cadastro feito com sucesso!')
            location.href = '/Screens/Home/';
        }
    })
})