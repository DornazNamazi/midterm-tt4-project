import './list-products.scss';



document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.getElementById('products');

    const products = [
        { image: 'assets/images/1.jpg', title: 'Product 1', description: 'High-quality product.', price: '$10' },
        { image: 'assets/images/2.jpg', title: 'Product 2', description: 'Durable and reliable.', price: '$15' },
        { image: 'assets/images/3.jpg', title: 'Product 3', description: 'Sleek and stylish.', price: '$20' },
        { image: 'assets/images/4.jpg', title: 'Product 4', description: 'Perfect for everyday use.', price: '$25' },
        { image: 'assets/images/5.jpg', title: 'Product 5', description: 'A must-have item.', price: '$30' },
        { image: 'assets/images/6.jpg', title: 'Product 6', description: 'Top-rated quality.', price: '$35' },
        { image: 'assets/images/7.jpg', title: 'Product 7', description: 'Best value for money.', price: '$40' },
        { image: 'assets/images/8.jpg', title: 'Product 8', description: 'User-friendly design.', price: '$45' },
        { image: 'assets/images/9.jpg', title: 'Product 9', description: 'Limited edition.', price: '$50' }
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



import './list-products.scss';  // Import SCSS for styling

    const products = [
        { image: 'assets/images/1.jpg', title: 'Product 1', description: 'High-quality product.', price: '$10' },
        { image: 'assets/images/2.jpg', title: 'Product 2', description: 'Durable and reliable.', price: '$15' },
        { image: 'assets/images/3.jpg', title: 'Product 3', description: 'Sleek and stylish.', price: '$20' },
        { image: 'assets/images/4.jpg', title: 'Product 4', description: 'Perfect for everyday use.', price: '$25' },
        { image: 'assets/images/5.jpg', title: 'Product 5', description: 'A must-have item.', price: '$30' },
        { image: 'assets/images/6.jpg', title: 'Product 6', description: 'Top-rated quality.', price: '$35' },
        { image: 'assets/images/7.jpg', title: 'Product 7', description: 'Best value for money.', price: '$40' },
        { image: 'assets/images/8.jpg', title: 'Product 8', description: 'User-friendly design.', price: '$45' },
        { image: 'assets/images/9.jpg', title: 'Product 9', description: 'Limited edition.', price: '$50' }
    ];

    document.addEventListener("DOMContentLoaded", () => {
        const productList = document.getElementById("product-list");
        products.forEach(product => {
            const productCard = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text"><strong>${product.price}</strong></p>
                            <button class="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>`;
            productList.innerHTML += productCard;
        });
    });

    