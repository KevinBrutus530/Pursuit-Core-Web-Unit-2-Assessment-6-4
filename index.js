document.addEventListener("DOMContentLoaded", () => {
    let select = document.querySelector("select")
    let info = document.querySelector("#info")
    let userInput = document.querySelector("#text")
    let submit = document.querySelector("#submit")
    const fetchFilms = async () => {
        let res = await axios.get("https://ghibliapi.herokuapp.com/films/")
        let films = res.data
        films.forEach(film => {
            let option = document.createElement("option")
            option.innerText = film.title
            select.appendChild(option)
        })
    } 
    fetchFilms()
})