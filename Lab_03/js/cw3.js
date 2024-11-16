const productList = document.getElementById('productList');
const searchBar = document.getElementById('searchBar');
const filters = document.getElementById('filters');
let display = {};

///////////////////// FILTROWANIE 'SELECT' /////////////////////

filters.addEventListener('click', (e) => {
    const selectValue = e.target.value;
    if (selectValue == 'Default') {
        loadProducts();
    }
    else if (selectValue == 'Sort A-Z') {
        sortAsc();
    }
    else if (selectValue == 'Sort Z-A') {
        sortDesc();
    }
})

///////////////////// FUNKCJE SORTUJĄCE /////////////////////

function compareASC (a, b) {
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    return 0;
}

function compareDESC (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
    return 0;
}

const sortAsc = () => {
    const sorted = display.products.sort(compareASC);
    displayProducts(sorted);
}

const sortDesc = () => {
    const sorted = display.products.sort(compareDESC);
    displayProducts(sorted);
}

///////////////////// WYSZUKIWARKA /////////////////////

searchBar.addEventListener('keyup', (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (searchValue == ''){
        displayProducts(display.products);
    }
    else {
        const filtered = display.products.filter((product) => {
            return (
                product.title.toLowerCase().includes(searchValue) ||
                product.description.toLowerCase().includes(searchValue)
            );
        });
        displayProducts(filtered);
    }
});


////////////////////// SETUP /////////////////////

const loadProducts = async () => {
    try {
        const url = await fetch('https://dummyjson.com/products');
        display = await url.json();
        displayProducts(display.products);
    } catch (error) {
        console.error(error);
    }
};

const displayProducts = (products) => {

    const htmlString = products.map((product) => {
            return `
            <li class="product">
                <div class="text">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                </div>
                <img src="${product.thumbnail}"</img>
            </li>
        `;
        })
        .join('');
    productList.innerHTML = htmlString;
};

/////////////////////

loadProducts();
