let setimg = document.getElementById('productimg')
let productName = document.getElementById('productName')
let productPrice = document.getElementById('productPrice')
let qty = document.getElementById('qty')
let getdata = JSON.parse(localStorage.getItem('productdetail'))

setimg.src = getdata[0].img
productName.innerText = getdata[0].orderName
productPrice.innerText = 'Rs. ' + getdata[0].size[0].price


let selectedSize = "Small"; // default

function selectSize(e) {
    document.querySelectorAll(".size-btn").forEach(btn => {
        btn.classList.remove("bg-[#208dbd]", "text-white");
        btn.classList.add("bg-transparent", "text-white");
    });

    e.classList.remove("bg-transparent");
    e.classList.add("bg-[#208dbd]", "text-white");

    selectedSize = e.dataset.size;
    console.log("Selected size:", selectedSize);
    if (e.innerText == 'Medium') {
        productPrice.innerText = 'Rs. ' + getdata[0].size[1].price
    } else if (e.innerText == 'Large') {
        productPrice.innerText = 'Rs. ' + getdata[0].size[2].price
    } else {
        productPrice.innerText = 'Rs. ' + getdata[0].size[0].price
    }
}
function addtocart() {
    if (localStorage.getItem('currentuser') == null) {
    alert('Please login first');
    window.location.href = './signup.html';
}else{
    let existingData = JSON.parse(localStorage.getItem("order")) || [];
    existingData.push(JSON.parse(localStorage.getItem('productdetail')))
    localStorage.setItem("order", JSON.stringify(existingData));
    location.reload();

}
    
}