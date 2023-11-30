buttonSearch = document.querySelector('[data-enter]')
let searchInput =document.getElementById('searchInput')
let cardContainer = document.querySelector('[data-cards]') 
fetch('https://randomuser.me/api?results=20')
.then(data=> data.json())
.then(result=> {
        let {results} = result 
    results.forEach( people =>{
            console.log(people);
        cardContainer.innerHTML += 
        `
        <div class="card" style="width: 18rem; ">
            <img src="${people.picture.large}" class="card-img-top img-fluid" alt="${people.name.first}">
            <div class="card-body">
            <h5 class="card-title">${people.name.title}. ${people.name.first} ${people.name.last}</h5>
            <p class="card-text">Age: ${people.registered.age}</p>
        </div>
        `
    })
})
function search() {  
    let searchInput =document.getElementById('searchInput')
    let cardContainer = document.querySelector('[data-cards]') 
    if(searchInput == data-cards){
        console.log(searchInput);
    }else {
        console.log('name not found');
    }

}

buttonSearch.addEventListener("click", search)
