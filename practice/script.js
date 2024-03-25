const acesskey="I7z4cA0VozauZ37y7xt0lluO1a3K342l9plr124AHLo"

const formE1 = document.querySelector("form")
const SearchResult = document.getElementById("search-input")
const ss = document.querySelector(".container")
const showmore = document.getElementById("show-more")

let inputData ="";
let page= 1;

async function Search_Result(){
    const inputData = SearchResult.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client=${acesskey}`

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
}