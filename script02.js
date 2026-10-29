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
    //1. recuperer les donnees:
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    
    if(username.length < 3){
        // alert("Username must have at least 3 characters!!!");
        usernameInput.className = "error"
        //recuperer la balise small de ce champs
        const parent = usernameInput.parentNode;
        const small = parent.querySelector('small');
        small.className = "error"
        small.innerText = "Username must have at least 3 characters!!!"
        return;
    }
    if(username.length > 25){
        // alert("Username must have less than 26 characters!!!");
        usernameInput.className = "error"
        //recuperer la balise small de ce champs
        const parent = usernameInput.parentNode;
        const small = parent.querySelector('small');
        small.className = "error"
        small.innerText = "Username must have less than 26 characters!!!"
        return;
    }
    usernameInput.className = "success"
    const parent = usernameInput.parentNode;
    const small = parent.querySelector('small');
    small.className = ""
    //2. valider les donnees : les inputs doivent avoir au minimum 6 caracteres pour mot de passe et 3 pour le username
    //3. Envoyer les donnees
    console.log("Formulaire soumis!")
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