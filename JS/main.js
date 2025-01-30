const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const methodFetch = { method: 'GET' }

fetch(endpoint, methodFetch)
    .then(res => res.json())
    .then(data => {
        console.log(data)

    })
    .catch(error => {
        console.error(error)
    });
