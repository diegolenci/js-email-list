
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
.then(response => response.json())
.then(data => {
    console.log(data.response)
})
.catch(Error => {
console.error(Error);
})