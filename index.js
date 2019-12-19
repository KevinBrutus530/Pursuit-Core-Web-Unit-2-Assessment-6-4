document.addEventListener("DOMContentLoaded", () => {
    let select = document.querySelector("select")
    let form = document.querySelector("form")
    let ul = document.querySelector("ul")
    let info = document.querySelector("#info")
    let userInput = document.querySelector("#text")
    let filmTitle = document.createElement("h3")


    const fetchFilms = async () => {
        try{
            let res = await axios.get("https://ghibliapi.herokuapp.com/films/")
            let data = res.data 
            // debugger

            let description = document.createElement("p")
            let year = document.createElement("p")

            data.forEach(film => {
                let option = document.createElement("option")
                option.innerText = film.title
                description.innerText = film.description
                year.innerText = film.release_date
                select.appendChild(option)
            })

            select.addEventListener("change", (event) => {
                info.innerHTML = ""
                filmTitle.innerText = event.target.value
                info.appendChild(filmTitle)
                info.appendChild(year)
                info.appendChild(description)

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