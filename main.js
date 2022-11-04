let products = [["Apple", 2.4], ["Banana", 1.8], ["Melon", 1], ["Mango", 2.3]];


let container = document.querySelector('.conteiner');
let lowToHigh = document.querySelector('.lowToHigh');
let boxContainer = document.querySelector('.box-container');
let HighToLow = document.querySelector('.HighToLow');
let aToZ = document.querySelector('.aToZ');
let zToA = document.querySelector('.zToA');
let min = document.querySelector('.min');
let max = document.querySelector('.max');
let filter = document.querySelector('.filter');



products.map(item => {
    let box = document.createElement('div');
    boxContainer.appendChild(box);
    box.classList.add('box');

    let name = document.createElement('h5');
    name.innerHTML = 'Product Name:' + item[0];
    box.appendChild(name);

    let price = document.createElement('h5');
    price.innerHTML = 'Product Price:' + item[1];
    box.appendChild(price);
});

lowToHigh.addEventListener('click', function () {
    boxContainer.innerHTML = ''
    let prices = products.sort((a, b) => a[1] - b[1]);

    prices.map(item => {
        let box = document.createElement('div');
        boxContainer.appendChild(box);
        box.classList.add('box');

        let name = document.createElement('h5');
        name.innerHTML = 'Product Name:' + item[0];
        box.appendChild(name);

        let price = document.createElement('h5');
        price.innerHTML = 'Product Price:' + item[1];
        box.appendChild(price);
    });
});

HighToLow.addEventListener('click', function () {
    boxContainer.innerHTML = ''
    let prices = products.sort((a, b) => b[1] - a[1]);

    prices.map(item => {
        let box = document.createElement('div');
        boxContainer.appendChild(box);
        box.classList.add('box');

        let name = document.createElement('h5');
        name.innerHTML = 'Product Name:' + item[0];
        box.appendChild(name);

        let price = document.createElement('h5');
        price.innerHTML = 'Product Price:' + item[1];
        box.appendChild(price);

    });
});

aToZ.addEventListener('click', function () {
    boxContainer.innerHTML = ''
    let names = products.sort((a, b) => {
        if (a > b) {
            return 1
        } else if (b > a) {
            return -1
        } else {
            return 0
        }
    });

    names.map(item => {
        let box = document.createElement('div');
        boxContainer.appendChild(box);
        box.classList.add('box');

        let name = document.createElement('h5');
        name.innerHTML = 'Product Name:' + item[0];
        box.appendChild(name);

        let price = document.createElement('h5');
        price.innerHTML = 'Product Price:' + item[1];
        box.appendChild(price);
    });
});

zToA.addEventListener('click', function () {
    boxContainer.innerHTML = ''
    let names = products.sort((a, b) => {
        if (a > b) {
            return -1
        } else if (b > a) {
            return 1
        } else {
            return 0
        }
    });

    names.map(item => {
        let box = document.createElement('div');
        boxContainer.appendChild(box);
        box.classList.add('box');

        let name = document.createElement('h5');
        name.innerHTML = 'Product Name:' + item[0];
        box.appendChild(name);

        let price = document.createElement('h5');
        price.innerHTML = 'Product Price:' + item[1];
        box.appendChild(price);
    });
});

filter.addEventListener('click', function () {
    boxContainer.innerHTML = ''
    products.filter((item) => {
        if (item[1] > Number(min.value) && item[1] < Number(max.value)) {
            let box = document.createElement('div');
            box.classList.add('box');
            boxContainer.appendChild(box);

            let name = document.createElement('h5');
            name.innerHTML = 'Product Name:' + item[0];
            box.appendChild(name);

            let price = document.createElement('h5');
            price.innerHTML = 'Product Price:' + item[1];
            box.appendChild(price);
        }
    });
});


