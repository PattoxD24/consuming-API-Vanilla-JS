const app = document.querySelector(".container");

const getUrl = new URLSearchParams(window.location.search);
const id = getUrl.get("id");
// console.log(id);

const url = "https://jsonplaceholder.typicode.com/photos";

fetch(`${url}`)
    .then(res => res.json())
    .then(data => {
        data.forEach(foto => {
            // console.log(foto.albumId)

            // if(foto.albumId == id){
            //     // console.log('si')
            //     const div = document.createElement('div');
            //     div.setAttribute('id', id)
            //     addClassName(div, 'fotoClass')
            //     const img = document.createElement("img");
            //     img.src = foto.thumbnailUrl;
            //     img.alt = foto.title;

            //     app.appendChild(div);
            //     div.appendChild(img);

            // }
        })

        data.map(foto => {
            if (foto.albumId == id) {
                // console.log('si')
                const div = document.createElement("div");
                div.setAttribute("id", id);
                addClassName(div, "fotoClass");
                const img = document.createElement("img");
                img.src = foto.thumbnailUrl;
                img.alt = foto.title;

                app.appendChild(div);
                div.appendChild(img);
            }
        })

    })
    .catch((err) => console.log(err));
