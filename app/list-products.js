import './list-products.scss';

// images
import one from "./assets/images/1.jpg";
import two from "./assets/images/2.jpg";
import third from "./assets/images/3.jpg";
import fourth from "./assets/images/4.jpg";
import fifth from "./assets/images/5.jpg";
import sixth from "./assets/images/6.jpg";
import seventh from "./assets/images/7.jpg";
import eighth from "./assets/images/8.jpg";
import ninth from "./assets/images/9.jpg";



document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Painting',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: one
        },
        {
            name: 'Painting',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: two
        },
        {
            name: 'Painting',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: third
        },
        {
            name: "Painting",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: fourth
        },
        {
            name: "Painting",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: fifth
        },
        {
            name: "Painting",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: sixth
        },
        {
            name: "Painting",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: seventh
        },
        {
            name: "Painting",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: eighth
        },
        {
            name: "Painting",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: ninth
        }
    ];

    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover'

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        const addToCart = document.createElement('button');
        addToCart.classList.add('btn');
        addToCart.classList.add('btn-success');
        addToCart.classList.add('float-end');
        addToCart.textContent = "Add to cart";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(addToCart);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        productsContainer.appendChild(cardDiv);
    });
});