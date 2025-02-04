//const overlay = document.querySelector('');
//const overlayImg = document.querySelector('');
//const overlayButton = document - querySelector('');
let card = document.getElementById("cardContainer");
let cards = [];



fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => response.json())
    .then(data => {



        data.forEach(element => {
            card.innerHTML +=
                `
            <div class="col-md-6 col-lg-4 ">
                <section class="card m-4 rotation" data-id="${element.id}">
                    <figure class="position-relative">
                        <img class="img-fluid p-3" src="${element.url}" alt="${element.title}">
                    </figure>
                    <a class="roation" href="#">
                        <img class="position-absolute top-0 start-50 translate-middle" src="./img/pin.svg" alt="pin">
                    </a>
                    <div class="card-body">
                        <p class="sometype-mono-regular fs-4 text-danger">${element.date} </p>
                        <h3 class="edu-tas-beginner-paragraph">${element.title} </h3>
                    </div>
                </section>
            </div>
               
            `

        });


        //link from html
        cards = document.querySelectorAll(".card");

        cards.forEach(element => {
            element.addEventListener("click", function () {
                let modal = document.getElementById("modal");
                modal.innerHTML =
                    `
                            
                                <button id="btnClose" class="btn btn-primary mx-auto d-block">CLOSE</button>
                            

                                <img width="600px" class="img-fluid p-3" src="https://marcolanci.it/boolean/assets/pictures/${element.getAttribute("data-id")}.png" alt="${element.title}">
                            
                            `
                modal.classList.add("transparent");
                modal.classList.remove("d-none");

                let btnClose = document.getElementById("btnClose");
                btnClose.addEventListener("click", function () {
                    modal.classList.add("d-none");
                    modal.classList.remove("transparent");

                })

            })
        });
    })
    .catch(error => {
        console.error(error);
    });


