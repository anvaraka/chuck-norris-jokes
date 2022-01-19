const buttonEl = document.querySelector(".jokeBtn")
const jokeText = document.querySelector(".jokeText")
const image = document.querySelector("img")
const namee = document.querySelector("#name")
const surnamee = document.querySelector("#surname")


buttonEl.addEventListener("click", ()=>{
    fetch("http://api.icndb.com/jokes/random") // this is a method to bring data from server
    .then(response => response.json())
    .then(data => { jokeStr = data.value.joke
        const newStr = jokeStr.replaceAll("Chuck Norris", `${namee.value} ${surnamee.value}`)
        jokeText.innerHTML = newStr
        namee.value = ""
        surnamee.value = ""
    })
   

    image.classList.add("shake-img")
    setTimeout(()=>{
        image.classList.remove("shake-img")
    }, 2000)
})



