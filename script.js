const products = [
    {
        id:1,
        name:"Cà phê đen",
        price:"35.000đ",
        image:"https://images.unsplash.com/photo-1511920170033-f8396924c348"
    },
    {
        id:2,
        name:"Latte",
        price:"45.000đ",
        image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    },
    {
        id:3,
        name:"Cappuccino",
        price:"50.000đ",
        image:"https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    }
];

const productList = document.getElementById("productList");

if(productList){

    products.forEach(product => {

        productList.innerHTML += `
        
        <div class="card">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Thêm vào giỏ
            </button>
        </div>
        
        `;
    });
}

function addToCart(id){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(id);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Đã thêm vào giỏ hàng");
}