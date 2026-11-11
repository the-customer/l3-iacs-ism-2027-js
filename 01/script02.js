// const h2 = document.querySelector('h2');
// const h2 = document.querySelector('#title');
const h2 = document.getElementById("title")
const btn = document.querySelector("button")
const form = document.querySelector("form")
// const usernameInput = document.querySelector("input#userName")
const usernameInput = document.querySelector("#userName")
const passwordInput = document.querySelector("#password")


// function handleClick(e){
//     console.log(e)
//     alert("Bonjour tout le monde!")
// }

// btn.addEventListener('click',handleClick)

const handleSubmit = (e) => {
    e.preventDefault();

    checkRequired([usernameInput,passwordInput]);
    checkLength(usernameInput,3,25);
    checkLength(passwordInput,6,25);
}


const checkRequired = (inputs) => {
    inputs.forEach(input => {
        if(input.value.trim() == ""){
            showError(input,'is required');
        }else{
            showSuccess(input);
        }
    });  
}


const checkLength = (input,min,max) => {
    const taille = input.value.trim().length;
    if(taille < min){
        showError(input,`must have at least ${min} characters`)
    }else if(taille > max){
        showError(input, `must have less than ${max} characters`)
    }else{
        showSuccess(input)
    }
}

const showError = (input, msg) => {
    input.className = "error"
    //recuperer la balise small de ce champs
    const parent = input.parentNode;
    const small = parent.querySelector('small');
    small.className = "error"
    small.innerText = `${input.id} ${msg}!!!`
}

const showSuccess = (input) => {
    input.className = "success"
    //recuperer la balise small de ce champs
    const parent = input.parentNode;
    const small = parent.querySelector('small');
    small.className = ""
}

form.addEventListener('submit',handleSubmit)
btn.addEventListener('mouseenter',()=>{
    btn.style.backgroundColor = 'red'
})

btn.addEventListener('mouseleave',()=>{
    btn.style.backgroundColor = '#5784ff'
})



// h2.innerHTML = "Formulaire by innerHTML"
// h2.innerText = "Formulaire"
// h2.textContent = "Formulaire avec textContent"
// h2.style.color = 'red'
// h2.style.backgroundColor = "rgb(0,20,10)"

// console.log(h2)