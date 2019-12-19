document.addEventListener("DOMContentLoaded", () => {
    let select = document.querySelector("select")
    let form = document.querySelector("form")
    let ul = document.querySelector("ul")
    let info = document.querySelector("#info")
    let userInput = document.querySelector("#text")
    let submit = document.querySelector("#submit")

    const fetchFilms = async () => {
        try{
            let res = await axios.get("https://ghibliapi.herokuapp.com/films/")
            let data = res.data

            data.forEach(film => {
                let option = document.createElement("option")
                option.innerText = film.title
                select.appendChild(option)
            })

            select.addEventListener("change", (event) => {
                info.innerHTML = ""
                let filmTitle = document.createElement("h3")
                filmTitle.innerText = event.target.value
                info.appendChild(filmTitle)

                form.addEventListener("submit", (e) => {
                    e.preventDefault()
                    let li = document.createElement("li")
                    li.innerText = event.target.value + ": " + userInput.value
                    ul.appendChild(li)
                    userInput.value = ""
                })
            })
        }
        catch(err){
            console.log(err)
        }
    } 
    
    fetchFilms()

})