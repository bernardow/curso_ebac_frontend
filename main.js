$(document).ready(function(){
    const newToDo = $('.newToDo');
    const form = $('form');
    const rightLogo = '<img style="max-height: 24px" src="/rsc/logo-sem-ceta.png">'
    const doneLogo = '<img style="max-height: 24px" src="/rsc/logo.svg.png">'
    let cards = [];

    $('#addNewToDo').click(function(){
        newToDo.slideToggle();
    })

    $(form).on('submit', function(e){
        e.preventDefault();

        const taskName = $('#taskName');
        const newTask = $(`<li class="taskCard">${rightLogo}<p>${taskName.val()}</p></li>`);
        $(newTask).appendTo('ul');

        $(taskName).val('');

        cards = [];
        cards = $('li').toArray();
        $(cards).click(function(e){
            e.target.classList.add('done');
            $(e.target.children[0]).replaceWith(doneLogo);
        })
    })
})