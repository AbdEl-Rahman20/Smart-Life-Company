const siteDomain = "https://slc-render.onrender.com";
let collectionContainer;


// Fetch Data
async function getDatafromApi(endPoint) {
    let res = await fetch(`${siteDomain}/${endPoint}`);
    let finalRes = await res.json();
    collectionContainer = finalRes.filter(e => e.category == window.location.href.split("=")[1]);
    displayCollections();
}
getDatafromApi("collections");


// Display Data
function displayCollections() {
    let temp = "";
    collectionContainer.forEach((collections) => (temp += `
                    <div class="col-md-2">
                        <div class="collection_item bg-light rounded-2 overflow-hidden position-relative data-id=${collections.id}" onclick="showinCollections(${collections.id})">
                            <div class="collection_img mt-2 overflow-hidden">
                                <img src="${collections.image}" alt="">
                            </div>
                            <div class="collection_description">
                                <p href="items.html" class="showItems collection_name">${collections.itemName}</p>
                                <div class="newPrice fw-bold">${collections.offer ? collections.newPrice : collections.oldPrice}EGP</div>
                                <span class="oldPrice text-danger"><del>${collections.newPrice ? collections.oldPrice : ""}</del></span>
                                ${collections.offer ? `<span class="offer text-danger">${Math.trunc((100 - (collections.newPrice / collections.oldPrice) * 100))}% OFF</span>` : ""}
                            </div>
                        </div>
                    </div>
    `)
    );
    document.getElementById("showCollections").innerHTML = temp;
}
function showinCollections(itemId) {
    localStorage.setItem("itemID", JSON.stringify(`${itemId}`));
    location.assign("items.html");
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
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}







/* 
                            <div class="collection_icon wish_icon position-absolute rounded-pill">
                                <i class="fa-solid fa-heart"></i>
                            </div>
                            <div class="collection_icon position-absolute rounded-pill">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>
*/