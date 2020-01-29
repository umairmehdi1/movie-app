let txtval = document.getElementById('exampleInputEmail1');

document.getElementById('search').addEventListener('click',function(e){
    e.preventDefault();

    let v = txtval.value;
    getMovies(v);

    // 
    // console.log(v);


});

function getMovies(v){
    // console.log(v);
    axios.get('http://www.omdbapi.com/?apikey=9f11493a&s='+v)
    .then((response)=>{
        console.log(response);
        let movies = response.data.Search;
        let outputResult = "";
        $.each(movies,(index,movies)=>{
            outputResult += 
            `
            <div class="col-md-3">
                <div class="well text-center">
                <img src="${movies.Poster}">
                <h4>${movies.Title}</h4>
                <a onclick="movieSelected('${movies.imdbID}')" class="btn btn-alert" href="${movies.imdbID}">Movie Details</a>

                </div>
            </div>
            `;

        })
        $('#movies').html(outputResult);

        





    })
    .catch((err)=>{
        console.log("Error :"+err);
    })
    }



