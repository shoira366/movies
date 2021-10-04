const elForm = document.querySelector('#form');
const elInput = getElem('#input', elForm);
const elSelect = getElem('#select', elForm);
const elFilter = getElem('#filter', elForm);
const elList = document.querySelector('#list');
const elTemplete = document.querySelector('.templete').content
const bigModal = document.querySelector('.modal')
const miniModal = document.querySelector('.modalmini')
const closeBtn = getElem('.closebtn', miniModal);
const newTitle = getElem('.new_title', miniModal);
const newImg = getElem('.new_img', miniModal);
const newTime = getElem('.new_time', miniModal);
const newDiv = getElem('.new_div', miniModal);
const newText = getElem('.new_text', miniModal);
const Link = getElem('.link', miniModal);
const Modalmenu = document.querySelector('.modal_menu');



let nimadir = []

function movies(filmsArr, element){
    element.innerHTML = null;
    filmsArr.forEach((film) =>{
        const cloneTemplete = elTemplete.cloneNode(true)
        
        getElem('.img', cloneTemplete).src = film.poster;
        getElem('.title', cloneTemplete).textContent = film.title;
        getElem('.time', cloneTemplete).textContent = newDate(film.release_date);
        getElem('.time', cloneTemplete).datetype = newDate(film.release_date);
        
        let pressBtn = getElem('.press_btn', cloneTemplete);
        pressBtn.dataset.id = film.id
        
        pressBtn.addEventListener('click', (e)=>{
            let filmIdsec = e.target.dataset.id
            
            let movietop = films.find((film)=> film.id == filmIdsec);
            
            if(!nimadir.includes(movietop)){
                nimadir.push(movietop)
            }else{
                nimadir.splice(movietop, 1)
            }

            let Counter = document.querySelector('.counter')
            Counter.textContent = nimadir.length
            
            function renderModalmovie(arr, element){
                element.innerHTML = null;
                arr.forEach((film)=>{
                    const cloneTempletesec = elTemplete.cloneNode(true)
                    
                    getElem('.img', cloneTempletesec).src = film.poster;
                    getElem('.title', cloneTempletesec).textContent = film.title;
                    getElem('.time', cloneTempletesec).textContent = newDate(film.release_date);
                    getElem('.time', cloneTempletesec).datetype = newDate(film.release_date);
                    let pressBtn = getElem('.press_btn', cloneTempletesec);
                    pressBtn.dataset.id = film.id
                    
                    let miniMenu = document.createElement('ul');
                    film.genres.forEach((genre )=>{
                        let newItemsec = document.createElement('li')
                        newItemsec.textContent = genre
                        newItemsec.setAttribute('class', 'genres_list')
                        miniMenu.appendChild(newItemsec)
                    })
                    
                    pressBtn.addEventListener('click', (e)=>{
                        const dataId = e.target.dataset.id
                        const findIndex = nimadir.findIndex((film)=> film.id == dataId)
                        
                        nimadir.splice(findIndex, 1);
                        
                        renderModalmovie(arr, element)
                    })
                    
                    element.appendChild(cloneTempletesec)
                })
            }renderModalmovie(nimadir, Modalmenu)
            
            // let elList = document.createElement('li');
            // let elImg = document.createElement('img');
            // let elTitle = document.createElement('h2');
            // let miniMenu = document.createElement('ul');
            // let elTime = document.createElement('time');
            // let elDelete = document.createElement('span')
            
            
            // film.genres.forEach((genre )=>{
            //     let newItemsec = document.createElement('li')
            //     newItemsec.textContent = genre
            //     newItemsec.setAttribute('class', 'genres_list')
            //     miniMenu.appendChild(newItemsec)
            // })
            
            // elList.setAttribute('class', 'box')
            // elImg.setAttribute('src', movietop.poster);
            // elTitle.textContent = movietop.title;
            // elTime.textContent = newDate(film.release_date);
            // elTime.datatype = newDate(film.release_date);
            // elDelete.setAttribute('class', 'far fa-trash-alt fa-2x')
            // elList.appendChild(elImg)
            // elList.appendChild(elTitle);
            // elList.appendChild(miniMenu);
            // elList.appendChild(elTime);
            // elList.appendChild(elDelete)
            // Modalmenu.appendChild(elList);
            // smallModal.appendChild(Modalmenu)
            
            // console.log(movietop.poster)
            
            
            // console.log(filmIdsec)
            
            //         elDelete.addEventListener('click', ()=>{
            //             nimadir.splice(movietop, 1)
            //         })
        })
        
       
        
        
        const elShow = getElem('.btn', cloneTemplete)
        let elMenu = getElem('.menu', cloneTemplete)
        
        film.genres.forEach((genre )=>{
            let newItem = document.createElement('li')
            newItem.textContent = genre
            newItem.setAttribute('class', 'genres_list')
            elMenu.appendChild(newItem)
        })
        
        
        
        elShow.dataset.id = film.id
        
        elShow.addEventListener('click', (evt)=>{
            bigModal.classList.add('modal-active');
            miniModal.classList.add('miniactiv');
            const filmId = evt.target.dataset.id
            
            let result = filmsArr.find(element => element.id === filmId)
            
            // newImg.setAttribute('src', result.poster)
            newTitle.textContent = result.title;
            newTime.textContent = newDate(film.release_date);
            newTime.datatype = newDate(film.release_date);
            newText.textContent = result.overview;
            Link.textContent = 'Watch movie';
            Link.setAttribute('target', 'blank')
            Link.setAttribute('href', film.link)
            
            
        })
        
        closeBtn.addEventListener('click', ()=>{
            bigModal.classList.remove('modal-active');
            miniModal.classList.remove('miniactiv')
        })
        
        element.appendChild(cloneTemplete)
    })
    
    //Modal
    let addBtn = document.querySelector('.add-btn');
    let closeModal = document.querySelector('.close-modal');
    let elbigModal = document.querySelector('.big-modal');
    let smallModal = document.querySelector('.small-modal');
    
    //Modal open and close
    addBtn.addEventListener('click', ()=>{
        elbigModal.classList.add('open-modal');
        smallModal.classList.add('open-smallmodal');
        
        // let elList = document.createElement('li');
        // let elImg = document.createElement('img');
        
        // elImg.setAttribute('src', movietop.poster);
        // elList.appendChild(elImg)
        // Modalmenu.appendChild(elList)
        // smallModal.appendChild(Modalmenu)
    })
    
    
    closeModal.addEventListener('click', ()=>{
        elbigModal.classList.remove('open-modal');
        smallModal.classList.remove('open-smallmodal')
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