const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const methodFetch = { method: 'GET' }
const card = document.querySelector(" .row");



fetch(endpoint, methodFetch)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        card.forEach(element => {


            const { date, id, title, url } = element

            row.innerHTML +=
                `
                < div class="card m-3" style = "width: 100%;" >
                    <figure class="position-relative">
                        <img class="position-absolute top-0 start-50 translate-middle" src="./img/pin.svg" alt="pin">
                    </figure>
                    <a href="">
                        <img src='${url} ' class="card-img-top p-3"
                            alt='${title} '>
                    </a>
                    <div class="card-body">
                        <h5 class=" sometype-mono card-title text-uppercase">'${date} '</h5>
                        <p class="card-text">'${title}' </p>
                    </div>
                </ div>

                `
        });

    })
    .catch(error => {
        console.error(error)
    });
