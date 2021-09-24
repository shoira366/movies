const elForm = document.querySelector('#form');
const elInput = getElem('#input', elForm);
const elSelect = getElem('#select', elForm);
const elFilter = getElem('#filter', elForm);
const elList = document.querySelector('#list');
const elTemplete = document.querySelector('.templete').content





function movies(filmsArr, element){
    element.innerHTML = null;
    filmsArr.forEach((film) =>{
        const cloneTemplete = elTemplete.cloneNode(true)
        
        getElem('.img', cloneTemplete).src = film.poster;
        getElem('.title', cloneTemplete).textContent = film.title;
        getElem('.time', cloneTemplete).textContent = newDate(film.release_date);
        getElem('.time', cloneTemplete).datetype = newDate(film.release_date);
        
        let elMenu = getElem('.menu', cloneTemplete)
        
        element.appendChild(cloneTemplete)
        
        
        film.genres.forEach((genre )=>{
            let newItem = document.createElement('li')
            newItem.textContent = genre
            newItem.setAttribute('class', 'genres_list')
            elMenu.appendChild(newItem)
        })
        
    })
    
    
}
movies(films, elList)



function renderGenres(filmsArr, element){
    
    
    let result = []
    
    filmsArr.forEach((film) =>{
        
        film.genres.forEach(genre =>{
            if(!result.includes(genre)){
                result.push(genre)
            }
        })
        
    })
    result.forEach(genre =>{
        let newOption = createDOM ('option')
        newOption.textContent = genre;
        newOption.value = genre
        element.appendChild(newOption)
    })
}
renderGenres(films, elSelect)


elForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    
    let inputValue = elInput.value.trim();
    let selectValue = elSelect.value.trim();
    let filterValue = elFilter.value.trim()
    
    
    let regex = new RegExp(inputValue, 'gi')
    
    let filtered = films.filter((film) => film.title.match(regex));
    
    let findFilm = []
    
    if(selectValue === 'All'){
        findFilm = filtered;
    }else{
        findFilm = filtered.filter(film => film.genres.includes(selectValue))
    }
    
    
    // if(filterValue === 'new_old'){
    //     findFilm.sort((a, b) =>{
    //         if(a.release_date > b.release_date){
    //             return 1
    //         }
    //     })
    // }
    
    
    if(filterValue === 'a_z' ){
        findFilm.sort((a, b) =>{
            
            
            if(a.title > b.title){
                return 1
            }else if(a.title < b.title){
                return -1
            }else{
                return 0
            }
        })
        
    }else if(filterValue === 'old_new' ){
        findFilm.sort((a, b) =>{
            
            
            if(a.release_date > b.release_date){
                return 1
            }else if(a.release_date < b.release_date){
                return -1
            }else{
                return 0
            }
        })
        
    }else if (filterValue === 'z_a'){
        findFilm.sort((b, a) =>{
            if(a.title > b.title){
                return 1
            }else if(a.title < b.title){
                return -1
            }else{
                return 0
            }
        })
    }else if (filterValue === 'new_old'){
        findFilm.sort((b, a) =>{
            if(a.release_date > b.release_date){
                return 1
            }else if(a.release_date < b.release_date){
                return -1
            }else{
                return 0
            }
        })
    }
    
    movies(findFilm, elList)
})








// films.genres.forEach((genres) =>{

//     let newGenres = document.createElement('li');

//     newGenres.textContent = genres

//     elMenu.appendChild(newGenres);
// })
// cloneTemplete.appendChild(elMenu)




// function genres(film, genre){
//     let nmadir = []


// }

// function renderGenres(film, element){


//     let result = []

//     film.forEach(film =>{
//         film.genres.forEach((genres) =>{

//             if(!result.includes(genres)){
//                 result.push(genres)
//             }
//         })
//     })

//     result.forEach((genre) =>{
//         let newOption = document.createElement('option');
//         newOption.textContent = genre;
//         newOption.value = genre;
//         element.appendChild(newOption)
//     })

// }
// renderGenres(films, elSelect)


// films.forEach((films)=>{
//     let newLi = document.createElement('li');
//     let newImg = document.createElement('img');
//     let newTitle = document.createElement('h2');
//     let newMenu = document.createElement('ul');
//     let newItem = document.createElement('li');
//     let newTime = document.createElement('time');

//     let date = new Date(films.release_date);
//     let month = String(date.getMonth()+1).padStart(2, "0");
//     let day = date.getDate();
//     let year = date.getFullYear();


//     // films.genres.forEach((films.genres) =>{
//     //     console.log(films)
//     // })

//     newLi.setAttribute('class', 'box');
//     newImg.setAttribute('src', films.poster);
//     newTitle.textContent = films.title;
//     newItem.textContent = films.genres;
//     newTime.setAttribute('datetime', `${day}.${month}.${year}`);
//     newTime.textContent = `${day}.${month}.${year}`;


//     newLi.appendChild(newImg);
//     newLi.appendChild(newTitle);
//     newLi.appendChild(newMenu)
//     newMenu.appendChild(newItem);
//     newLi.appendChild(newTime)

//     elList.appendChild(newLi)
// })


// elForm.addEventListener('submit', function(e){
//     e.preventDefault()

//     let selectValue = elSelect.value.trim();
//     let inputValue = elInput.value.trim()

//     // const regex = new RegExp(inputValue, 'gi')

//     if(selectValue === 'All'){
//         console.log(films)
//     }
// })