let peliculas=[
    {titulo:"Naruto", rating: 4.9,loHasVisto: true},

    {titulo:"Demon Slayer", rating: 4.5,loHasVisto: true},

    {titulo:"Ranma 1/2",rating: 4.0,loHasVisto: false}

    ];

    for(let i in peliculas){

        document.write(peliculas[i].titulo +" - "+peliculas[i].rating+" Estrellas, "+ (peliculas[i].loHasVisto? "La viste": "no la viste") +" <br>");
    }