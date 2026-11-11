function bonjour(){
    console.log("Bonjour")
}

// const func = function(){
//    console.log("Bonjour")
// }

const func = () => {
   console.log("Bonjour")
}

// function somme (a,b){
//     return a+b;
// }

// const somme = function(a,b){
//     return a+b;
// }

// const somme = (a,b) => {
//     return a+b;
// }

const somme = (a,b) => a+b;

// const double = (a) => a*2;
const double = a => a*2;

const bonsoir = () => console.log("Bonsoir");

let b = 10;
const som = a => {
    s = a + b;
    return s;
}

// console.log(b,s);

const addition = (a,b) => a+b;
const soustraction = (a,b) => a-b;

const executerOperation = (a,b,x) => {
    let r = x(a,b)
    console.log("Le resultat est : ",r)
}


executerOperation(12,3,addition)    
// executerOperation(12,3,soustraction)
// executerOperation(12,3,function(a,b){return a*b})
// executerOperation(12,3,(a,b) => {

// })

// t = [12,2,3,4]

// t.array.forEach(function(element){

// });

// t.array.forEach(element => {
    
// });

function sss(n,m){
    return n + m
}

function afficherSom(a,b,action){
    s = action(a,b)
    console.log("la somme est :",s)
}

function moyenne(note1,note2,action){
    moy = action(note1,note2) / 2
    return moy
}


afficherSom(12,3,sss)

moyenne(14,17,sss)
moyenne(14,17,function(a,b){return b-a})



//Fonctions sur les tableaux:
const notes = [2,10,15,5,19,18]
//foreach => parcourir le tableau
notes.forEach(note => {
    console.log(note);
    
});
//push => ajouter une valeur du tableau
notes.push(10)
console.log(notes)
//map => transformer les element du tableau et de mettre la transformation dans un autre table.
const notesAvecBonus = notes.map(n => n + 2)
console.log(notesAvecBonus)

//filter => filtrer les elements tableau et retourn un nouveau tableau avec les elements filter:
const moys = notes.filter(n => n >= 10);
console.log(moys)

//find => Trouver le premier element qui correspond a la condition
const notesSup15 = notes.find(n => n > 15);
console.log(notesSup15);
//reduce => accumuler les valeur d'un tableau:

// som = 0
// notes.forEach(n => {
//     som += n
// })
const ss = notes.reduce((s,n) => s + n,0)

console.log(ss);

// Destructuring
const myTab = [23,4,-2,45,6,0]
// const x = myTab[0]
// const y = myTab[1]
// const z = myTab[2]
const [x,y] = myTab;
// const [x,...y] = myTab;
console.log(x,y)

const person = {
    nom: 'Toto',
    age :19,
    adr : 'Dakar Patte d\'Oie...'
}

// const nom = personne.nom
// const {nom, ...otherInfo} = person
const {nom, age, adr:adrNumber} = person
console.log(nom,adrNumber)

// copyPerson = person;
// person.nom = "titi"

// const copyPerson = {...person}
// const tabCopy = [...myTab]

const copyPerson = {id:1,...person,age:20,phone:'771431414'}
person.nom = "titi"

console.log(copyPerson);

