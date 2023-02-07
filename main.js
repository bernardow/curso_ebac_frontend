const inpNum1 = document.querySelector('#inp-num1');
const inpNum2 = document.querySelector('#inp-num2');
const form = document.querySelector('#form');
const btnSub = document.querySelector('#btn-submit');
const btnRes = document.querySelector('#btn-reset');
const successMessage = document.querySelector('#success-message');

inpNum1.addEventListener('keyup', function(e){
    console.log(e.target.value);
    checkNumHeigher(inpNum1, inpNum2);
})

inpNum1.addEventListener('change', function(e){
    console.log(e.target.value);
    checkNumHeigher(inpNum1, inpNum2);
})

inpNum2.addEventListener('keyup', function(e){
    console.log(e.target.value);
    checkNumHeigher(inpNum1, inpNum2);
})

inpNum2.addEventListener('change', function(e){
    console.log(e.target.value);
    checkNumHeigher(inpNum1, inpNum2);
})

form.addEventListener('submit', function(e){
    e.preventDefault();

    successMessage.innerHTML = `Parabens! O numero ${inpNum2.value}, e maior que numero ${inpNum1.value}`;
    successMessage.style.display = 'block';
    btnSub.disabled = true;
    inpNum1.disabled = true;
    inpNum2.disabled = true;
    btnRes.style.display = 'block';
})

form.addEventListener('reset', function(e){
    btnSub.disabled = false;
    inpNum1.disabled = false;
    inpNum2.disabled = false;
    successMessage.style.display = 'none';
})

function checkNumHeigher(num1, num2){
    let errorMessage = document.querySelector('#error-message');
    let errorClass = document.querySelector('.error');

    if(num1.value < num2.value){
        btnSub.disabled = false;
        errorClass.style.display = 'none';
        errorMessage.classList.remove('error');
        inpNum1.style.outline = 'none'
    }else{
        btnSub.disabled = true;
        errorMessage.classList.add('error');
        errorClass = document.querySelector('.error');
        errorClass.style.display = 'Block';
        inpNum1.style.outline = '.5px solid red';
        errorMessage.innerHTML = `O numero ${inpNum1.value}, e maior ou igual ao numero ${inpNum2.value}`;
    }
}
