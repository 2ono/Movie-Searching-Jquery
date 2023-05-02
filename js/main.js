$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
       let searchText = $('#searchText').val();
       getMovies(searchText);
        e.preventDefault();
    })
})

function getMovies(searchText) {
    // 하루 천개 사용할수 있는 개인 api입니다. 따로 사용하실분은 가입 따로 하시고 api받으세요.
    axios.get('http://www.omdbapi.com/?apikey=340ad3d5&s=' + searchText)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
}