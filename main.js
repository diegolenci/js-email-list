const listaEmail = document.getElementById('email')

for(let i = 1; i < 11; i++){

    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
.then(response => response.json())
.then(data => {
    console.log(data.response)
    listaEmail.innerHTML += `<li>${data.response}</li>`
})
.catch(Error => {
console.error(Error);
})
}


