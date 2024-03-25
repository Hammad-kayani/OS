const accessKey ="I7z4cA0VozauZ37y7xt0lluO1a3K342l9plr124AHLo"

const formE1 = document.querySelector("form")
const inputE2= document.getElementById("Search-input")
const searchResults= document.querySelector(".Search-results")
const showmore =document.getElementById("Show-more")

let inputdata="";
let page = 1;

async function searchimage() {
    inputdata= inputE2.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}
    &client_id=${accessKey}`

    const response= await fetch(url)
    const data= await response.json()

    const results = data.results

    console.log(results)
    
    if (page=== 1){
        searchResults.innerHTML=""
    }

    results.map((result)=>{
        const imagewrapper = document.createElement("div")
        imagewrapper.classList.add("search-result")
        const image = document.createElement("img")
        image.src= result.urls.small
        image.alt= result.alt_description;
        
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html;
        imageLink.target= "_blank";
        imageLink.textContent = result.alt_description;

        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imageLink);
        searchResults.appendChild(imagewrapper);
    
    
    })

    page++

    if(page > 1){
        showmore.style.display = "block"
    }
}

formE1.addEventListener("submit", (event)=>{
    event.preventDefault()
    page =1;
    searchimage()
})

showmore.addEventListener("click", ()=>{

    searchimage()
})