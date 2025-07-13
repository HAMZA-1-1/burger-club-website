let data = JSON.parse(localStorage.getItem('order')) || [];
let subtotal = document.getElementById('subtotal');
let adcard = document.getElementById('adcard');

function renderCart() {
  adcard.innerHTML = '';
  let num = 0;

  data.forEach((item, i) => {
    adcard.innerHTML += `
      <div class="flex flex-col sm:flex-row justify-between items-center border-b border-gray-500 pb-4" id="item-${i}">
        <div class="flex items-center gap-4">
          <img src="${item[0].img}" alt="${item.orderName}" class="w-20 h-20 object-cover rounded-md" />
          <div>
            <h2 class="font-semibold text-lg">${item[0].orderName}</h2>
            
          </div>
        </div>
        <div class="flex items-center gap-4 mt-4 sm:mt-0">
          <p class="text-lg font-semibold">Rs. ${item[0].size[0].price}</p>
          <button onclick="deleteItem(${i})" class="text-red-500 text-xl hover:text-red-700">🗑️</button>
        </div>
      </div>
    `;

    num += Number(item[0].size[0].price) 
  });

  subtotal.innerText = num;
}

function deleteItem(index) {
  data.splice(index, 1); // Remove from array
  localStorage.setItem('order', JSON.stringify(data)); // Update localStorage

  renderCart(); // Re-render cart
  location.reload();

}

renderCart(); // Initial load



function checkout() {
  localStorage.removeItem('order');

  Swal.fire({
    title: "Your Order Delivered Soon",
    icon: "success"
  }).then(() => {
    location.reload(); // 🔁 Reload after alert is dismissed
  });
}
