const siteDomain = "https://slc-render.onrender.com";
let itemContainer;


// Fetch Data
async function getDatafromApi(itemId) {
    let res = await fetch(`${siteDomain}/items/${itemId}`);
    let finalRes = await res.json();
    console.log(finalRes);
    displayItems(finalRes)
}
function getSingleItem() {
    if (localStorage.getItem("itemID")) {
        let singleItem = JSON.parse(localStorage.getItem("itemID"))
        console.log(singleItem);
        getDatafromApi(singleItem)
    }
}
getSingleItem()


// Display Data
function displayItems(data) {
    let temp = "";
    temp += `
                    <div class="col-md-6">
                        <div class="item_photo">
                            <img class="w-100" src="${data.image}" alt="">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="item_content mt-3">
                            <h3 class="itemName">${data.itemName}</h3>
                            <img src="${data.itemBrand}" class="item_brand w-25" alt="">
                            <p>Category: ${data.category}</p>
                            <h2 class="itemPrice">${data.itemPrice}EGP</h2>
                            <h4>Features:</h4>
                            <ul>
                                ${data.featuers1 ? `<li>${data.featuers1}</li>` : ""}
                                ${data.featuers2 ? `<li>${data.featuers2}</li>` : ""}
                                ${data.featuers3 ? `<li>${data.featuers3}</li>` : ""}
                                ${data.featuers4 ? `<li>${data.featuers4}</li>` : ""}
                                ${data.featuers5 ? `<li>${data.featuers5}</li>` : ""}
                                ${data.featuers6 ? `<li>${data.featuers6}</li>` : ""}
                                ${data.featuers7 ? `<li>${data.featuers7}</li>` : ""}
                                ${data.featuers8 ? `<li>${data.featuers8}</li>` : ""}
                            </ul>
                        </div>
                    </div>
`
    document.getElementById("showItems").innerHTML = temp;
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
                            <button class="btn add_cartbtn w-100 p-1 text-uppercase btn-outline-danger mb-1">add to cart</button>
                            <button class="btn add_cartbtn w-100 p-1 text-uppercase btn-outline-success">add to wishlist</button>
                    <div class="col-md-12">
                        <div class="item_description">
                            <h2>Description:</h2>
                            <p>${data.description}</p>
                        </div>
                    </div>
*/ 