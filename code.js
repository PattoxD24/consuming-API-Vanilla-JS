const app = document.querySelector('.container');

const url = 'https://jsonplaceholder.typicode.com/photos';

let albums = []

fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(foto => {
        albums.push(foto.albumId)
    })
    albums = albums.filter(onlyunique)

    albums.forEach(album => {
        const div = document.createElement('div');
        div.setAttribute('id', album)
        addClassName(div, 'albumClass')
        div.addEventListener('click', ()=>{
            window.location.href = `./album.html?id=${album}`
        })
        const img = document.createElement('img');

        // console.log(data.length)
        for (let i = 0; i < data.length; i++) {

            // const element = array[index];
            if (data[i].albumId === album) {
                // console.log(data[i].id)
                img.src = data[i].thumbnailUrl;
                img.alt = data[i].title;
                i += 49;
            }
            
        }
        

        div.appendChild(img)
        app.appendChild(div)

    })
})

.catch(err => console.log("error: "+err));



