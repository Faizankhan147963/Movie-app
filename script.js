let inputText = document.querySelector(".inputText")
let mainBody = document.querySelector(".mainBody")
let inputSubmit = document.querySelector("form")
let my_api = "3dfaa949";

const fetch_movie = async (movie) => {
    try {
        var url = `https://www.omdbapi.com/?apikey=${my_api}&t=${movie}`
        var response = await fetch(url)
        var data = await response.json();
        console.log(data);
        load_Movie(data)
    } catch (error) {
        mainBody.innerHTML = "<h1>Not Found Movie....</h1>"
    }

}


const load_Movie = (data) => {
    mainBody.innerHTML = "";
    const { Actors, Awards, Country, BoxOffice, Director, Language, Genre, Poster, Plot, Released, Response, Runtime, Title, Year, imdbRating } = data;

    const Movie_element = document.createElement("div")
    Movie_element.classList.add("movie_elemtn")

    Movie_element.innerHTML += `
        <h2>Title : ${Title}</h2>
        <h4>Actors :${Actors}</h4>
    `

    const Movie_gwnre = document.createElement("div")
    Movie_gwnre.classList.add("genre")
    Genre.split(",").forEach(element => {
        const p = document.createElement("p")
        p.innerHTML = element;
        Movie_gwnre.appendChild(p)
    });
    Movie_element.appendChild(Movie_gwnre)

    Movie_element.innerHTML += `
        <h5>Awards : ${Awards}</h5>
        <h5>Country : ${Country}</h5>
        <h5>Director : ${Director}</h5>
        <h5>Languages : ${Language}</h5>
        <h5>Released data :${Released}</h5>
        <h5>RunTime :${Runtime}</h5>
        <h5>year Of Launch : ${Year}</h5>   
    `;

    const movie_poster = document.createElement("div")
    movie_poster.classList.add("image")
    movie_poster.innerHTML += `
        <img src=${Poster}/>
    `
    mainBody.appendChild(movie_poster)

    mainBody.appendChild(Movie_element)
}

inputSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    var movie = inputText.value;
    if (movie !== "") {
        inputText.value = ""
        mainBody.innerHTML = "<h1>Fetching Movie.....</h1>"
        fetch_movie(movie)
    }else{
        mainBody.innerHTML="<h1>Please Enter Your Movie  Name....!</h1>"
    }


})