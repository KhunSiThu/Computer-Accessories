import { products } from "./products.js";
import { product_show } from "./function.js";

const product_detail = JSON.parse(localStorage.getItem("product_box"));

document.querySelector(".s1").innerHTML = `
 <div class="d_left">
    <div class="main-img-con">
        <img class="main-img" src="${product_detail[0].img}.png" alt="">
    </div>
    <div class="choose-img">
        <button><img class="img-1" src="${product_detail[0].img}.png" alt=""></button>
        <button><img class="img-2" src="${product_detail[0].Images.img2}" alt=""></button>
        <button><img class="img-3" src="${product_detail[0].Images.img3}" alt=""></button>
    </div>
</div>
<div class="d_center">
    <div class="save-con">
        save <em>$${product_detail[0].save}</em>
    </div>
    <p class="pro_info">${product_detail[0].info}</p>
    <div class="rating">
    <span>Rating : <em>${product_detail[0].rating}</em></span>
    <div class="rat-star">
        
    </div>
    </div>
    
    <span>Price : <em class="pro_price">$${product_detail[0].price}</em></span>
    <div class="buy">
        
        <button id="buy_now" class="b3 buy_btn">Buy Now</button>
        <button class="cart_btn b3">Add To Cart<i class="fa-solid fa-cart-shopping cart_chose"></i></button>
    
    </div>
    
</div>
<ul class="d-right">
    <li>
        <i class="fa-solid fa-truck"></i>
        <div>
            <h3>Fast Shipping</h3>
            <p>Recrive products in amazing time</p>
        </div>
    </li>
    <li>
        <i class="fa-solid fa-rotate-left"></i>
        <div>
            <h3>Easy Return</h3>
            <p>Return policy that lets you shop at ease</p>
        </div>
    </li>
    <li>
        <i class="fa-solid fa-shield-halved"></i>
        <div>
            <h3>Always Authentic</h3>
            <p>We only sell 100% authenic products</p>
        </div>
    </li>
    <li>
        <i class="fa-solid fa-lock"></i>
        <div>
            <h3>Secure Shopping</h3>
            <p>Your data is always protected</p>
        </div>
    </li>
</ul>

`

const chooseImg = document.querySelector(".choose-img");
const mainImg = document.querySelector(".main-img");

const imgOnlyShowCon = document.querySelector(".img-only-show-con");

chooseImg.addEventListener("click", (e) => {
    if(e.target.classList.contains("img-1")){
        mainImg.src = document.querySelector(".img-1").src;
    }

    if(e.target.classList.contains("img-2")){
        mainImg.src = document.querySelector(".img-2").src;
    }

    if(e.target.classList.contains("img-3")){
        mainImg.src = document.querySelector(".img-3").src;
    }
})

mainImg.addEventListener("click", (e) => {
    imgOnlyShowCon.style.display = "block";

    imgOnlyShowCon.innerHTML = `
        <div class="img-only-show">
            <div class="ch-img">
                <button><img class="img-1" src="${product_detail[0].img}.png" alt=""></button>
                <button><img class="img-2" src="${product_detail[0].Images.img2}" alt=""></button>
                <button><img class="img-3" src="${product_detail[0].Images.img3}" alt=""></button>
            </div>
            <div class="ch-show">
                <img class="main" src="${mainImg.src}" alt="">
            </div>

            <button class="remove close"><i class="fa-solid fa-xmark"></i></button>
        </div>
    `

    const chooseImg = document.querySelector(".ch-img");
    const main_img = document.querySelector(".main");
    
    chooseImg.addEventListener("click", (e) => {
        if(e.target.classList.contains("img-1")){
            main_img.src = document.querySelector(".img-1").src;
        }
    
        if(e.target.classList.contains("img-2")){
            main_img.src = document.querySelector(".img-2").src;
        }
    
        if(e.target.classList.contains("img-3")){
            main_img.src = document.querySelector(".img-3").src;
        }
    });

    document.querySelector(".close").addEventListener("click", () => {
        imgOnlyShowCon.style.display = "none";
    })
})

let rat = Math.round(product_detail[0].rating);
for(let i = 0; i<rat; i++)
{
    document.querySelector(".rat-star").innerHTML += ` <i class="fa-solid fa-star"></i>`
}

const recom_pro = products.filter((pro) => {
    return pro.brand === product_detail[0].brand;
})

const recomProCon = document.querySelector(".recom-pro-con");

recom_pro.forEach((pro) => {
    product_show(recomProCon,pro);
})


