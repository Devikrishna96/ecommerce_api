let products = [];

fetchData=()=>{
let data= fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data => {
    products = data 
    displayProducts(data)}
)
}

displayProducts=(data)=>{
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; 

    data.forEach(product => {
        const productCard = `
        <div class="col-md-4 col-sm-6 product-card">
            <div class="card shadow-sm border-light rounded">
                <!-- Image section with a fixed size -->
                <img src="${product.image}" class="card-img-top" alt="${product.title}" style="object-fit: cover; height: 350px;">
                <div class="card-body">
                    <!-- Title and price -->
                    <h5 class="card-title text-truncate">${product.title}</h5>
                    <p class="card-text">$${product.price}</p>
                    <!-- Description -->
                    <p class="card-text text-truncate">${product.description.substring(0, 100)}...</p>
                    <a href="#" class="btn btn-primary btn-sm stretched-link">View Details</a>
                </div>
            </div>
        </div>`;
        productList.innerHTML += productCard;
    });
    
};
searchProducts = () => {
    const query = document.getElementById('search-bar').value.toLowerCase();  

    const filteredProducts = products.filter(product => {
        return product.title.toLowerCase().includes(query) || product.description.toLowerCase().includes(query);
    });

    displayProducts(filteredProducts);  
};

window.onload = fetchData;
