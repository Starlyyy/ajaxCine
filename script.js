function cineFind(movieName){
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=2dbca7a779fef19d8dc0acc77384df5a&query=${movieName}&language=pt-BR`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const movie = data.results[0];

                document.getElementById('results').innerHTML +=
                `
                <h2>${movie.title}</h2>
                <p>${movie.overview}</p>
                <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
                `;
            } else {
                alert('Filme nao encontrado');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

let botao = document.getElementById('searchButton');

botao.addEventListener('click', ()=>{
    let movieName = document.getElementById('movieName').value;
    if (movieName) {
        cineFind(movieName);
    } 
});
