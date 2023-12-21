const siteDomain = "https://slc-render.onrender.com";
let productContainer;


// Fetch Data
async function getDatafromApi(endPoint) {
    let res = await fetch(`${siteDomain}/${endPoint}`);
    let finalRes = await res.json();
    productContainer = finalRes;
    displayProducts();
}
getDatafromApi("products");


// Display Data
function displayProducts() {
    let temp = "";
    productContainer.forEach((products) => (temp += `
                    <div class="col-md-4">
                        <div class="product_item overflow-hidden rounded-1 position-relative" data-category=${products.category}>
                            <div class="product_img overflow-hidden rounded-3">
                                <img class="w-100" src="${products.image}" alt="">
                            </div>
                            <div class="product_name position-absolute">
                                <p class="text-uppercase fs-4 text-white">${products.productName}</p>
                                <a class="showCollection shop_btn btn text-danger fw-bold bg-light" onclick="showinProducts(this)">Shop Now ></a>
                            </div>
                        </div>
                    </div>
    `)
    );
    document.getElementById("showProducts").innerHTML = temp;
}
function showinProducts(e) {
    const element = e.parentElement.parentElement;
    let collectionCatgory = element.getAttribute("data-category");
    location.assign(`collections.html?category=${collectionCatgory}`);
}


// Scroll Btn
const scrollBtn = document.getElementById('scroll_btn');
window.onscroll = function () {
    if (scrollY >= 500) {
        scrollBtn.style.display = 'flex';
    }
    else {
        scrollBtn.style.display = 'none';
    }
}
scrollBtn.onclick = function () {
    scroll({
        left:0,
        top: 0,
        behavior:"smooth"
    })
}