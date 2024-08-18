import { products } from "./products.js";

const profile = document.querySelector(".profile");
const accInfo = document.querySelector(".acc-info");
const profileDetailRight = document.querySelector(".profile-detail-right");
const editFormCon = document.querySelector(".editForm-con");


let userData = JSON.parse(localStorage.getItem("user"));
let userImg = localStorage.getItem("user-img");

console.log(userData)

profile.innerHTML = `
    <div class="main-profile-img">
        <img src="${userImg}" alt="">
    </div>

    <div class="profile-name">
        <h1>${userData.u_name}</h1>
        <p>${userData.u_email}</p>
    </div>

     <button class="edit-profile-btn1"><i class="fa-solid fa-pen-to-square fa-fade"></i></button>
`

const you_detail_show = () => {
    profileDetailRight.innerHTML = `
    <header>
        <h2>Account Information</h2>
    </header>

    <div class="profile-detail-show">
        <table>
        <tr>
            <td>
                Name
            </td>
            <td>-</td>
            <td>
                ${userData.u_name}
            </td>
        </tr>
        <tr>
            <td>
                Email 
            </td>
            <td>-</td>
            <td>
                ${userData.u_email}
            </td>
        </tr>
        <tr>
            <td>
                Phone Number
            </td>
            <td>-</td>
            <td>
            ${userData.u_phone}
            </td>
        </tr>
        <tr>
            <td>
                City 
            </td>
            <td>-</td>
            <td>
                ${userData.u_city}
            </td>
        </tr>
        <tr>
            <td>
                Address
            </td>
            <td>-</td>
            <td>
                ${userData.u_address}
            </td>
        </tr>
        
        </table>
        <button class="edit-profile-btn2">Edit<i class="fa-solid fa-pen-to-square fa-fade"></i></button>
    </div>
    

    
    `
    const editBtn2 = document.querySelector(".edit-profile-btn2");
    editBtn2.addEventListener("click", () =>{
        editFormShow(userData)
    });
}
accInfo.addEventListener("click", () => {
    you_detail_show();
});

you_detail_show();

const editBtn1 = document.querySelector(".edit-profile-btn1");


function editFormShow(data){
    editFormCon.style.display = "flex";
    editFormCon.innerHTML = `
     <form action="#" class="editForm">
       
        <table>
            <tr>
                <th><h1>Update Your About</h1></th>
            </tr>
            <tr>
                <td>
                    <label for="name">Name</label>
                    <input type="name" name="" id="name">
                </td>
            </tr>
            <tr>
                <td>
                    <label for="email">Email</label>
                    <input type="email" name="" id="email">
                </td>
            </tr>
            <tr>
                <td>
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone">
                </td>
            </tr>
            <tr>
                <td>
                    <label for="city">City</label>
                    <input type="text" id="city">
                </td>
            </tr>
            <tr>
                <td>
                    <label for="address">Address</label>
                    <textarea name="address" id="address"></textarea>
                </td>
            </tr>
            <tr>
                <td>
                    <button type="button" class="save-up">Save</button>
                    <button type="button" class="cancle-up" >Cancle</button>
                </td>
            </tr>
        </table>
    </form>
    `

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const city = document.querySelector("#city");
    const address = document.querySelector("#address");

    email.value = userData.u_email;
    name.value = userData.u_name;
    phone.value = userData.u_phone;
    city.value = userData.u_city;
    address.value = userData.u_address;

    document.querySelector(".save-up").addEventListener("click", () => {
        const user_info = {
            u_name : `${name.value}`,
            u_email : `${email.value}`,
            u_phone: phone.value,
            u_city: city.value,
            u_address: address.value
            }
    
            localStorage.setItem("user",JSON.stringify(user_info));
            window.location.reload();

    })
    document.querySelector(".cancle-up").addEventListener("click", ()=> {
        editFormCon.style.display = "none";
    })
}

editBtn1.addEventListener("click", () =>{
    editFormShow(userData)
});

//CheckOut
const check_form_container = document.querySelector(".check_form_container")
const check_form_show = (check_form_container,price) =>
    {
        check_form_container.style.display = "flex";
        check_form_container.innerHTML = `
            <form action="">
                <span class="check_close b3"><i class="fa-solid fa-xmark fa-beat"></i></span>
                <table class="left">
                    <tr>
                        <th>Your Address</th>
                    </tr>
                    <tr>
                        <td>
                            <label for="name"><i class="fa-solid fa-user-large"></i></label>
                            <input type="text" name="name" id="name" placeholder=" Enter Your Name">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="email"><i class="fa-solid fa-envelope"></i></label>
                            <input type="email" name="email" id="email" placeholder=" Your Email">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="phone"><i class="fa-solid fa-phone"></i></label>
                            <input type="tel" name="phone" id="phone" placeholder=" Your Phone Number">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="address"><i class="fa-solid fa-map-location-dot"></i></label>
                            <input type="text" name="address" id="address" placeholder=" Your Address">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="city"><i class="fa-solid fa-city"></i></label>
                            <input type="text" name="city" id="city" placeholder="City">
                        </td>
                        <td>
                            <label for="zip"><i class="fa-solid fa-location-crosshairs"></i></label>
                            <input type="text" name="zip" id="zip" placeholder="ZIP code">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <textarea name="" id=""></textarea>
                        </td>
                    </tr>
                </table>
                <table class="right">
                    <tr>
                        <th>Payment</th>
                    </tr>
                    <tr>
                        <td>
                            <p>Total Price</p>
                            <span>$ <em class="check_price">${parseInt(price)}</em></span>
                        </td>
                        <td><hr></td>
                        <td>
                            <p>Accept Cards</p>
                            <img src="/image/Credit-Card-Icons.png" alt="">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="card name"><i class="fa-solid fa-credit-card"></i></label>
                            <input type="tel" name="card name" id="card name" placeholder=" Name On Card">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="number"><i class="fa-solid fa-credit-card"></i></label>
                            <input type="password" name="number" id="number" placeholder=" Card Number">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="date"><i class="fa-solid fa-calendar-check"></i></label>
                            <input type="date" name="date" id="date" placeholder="Months / Years">
                        </td>
                        <td>
                            <label for="cvv">C V V</i></label>
                            <input type="text" name="cvv" id="cvv" placeholder=" CVV">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button class="b3">Continue To Checkout</button>
                        </td>
                    </tr>
                </table>
            </form>
        `;
    
            const check_close = document.querySelector(".check_close");
            check_close.addEventListener("click", () => {
                check_form_container.style.display = "none";
            });
    }

//Cart Items
const yourCart = document.querySelector(".your-cart");
const cart_products = JSON.parse(localStorage.getItem("cart_product"));

yourCart.addEventListener("click", (e) => {
    profileDetailRight.innerHTML = ""
    profileDetailRight.innerHTML = `
    <header>
        <h2>Your Cart</h2>
    </header>

    <div class="pro_cart_container">

        <div class="cart_pro_con cart_con">


            
        </div>
        <div class="cart_test" style="display: block;">
            <div>
                <p>Total Price</p> - <span class="total_price">27545</span>
            </div>
            <hr>
            <div>
                <img class="card_icon" src="/image/Credit-Card-Icons.png" alt="">
                <button class="check_btn b3">Checkout</button>
            </div>
        </div> 
        
    </div>
    `

    const you_cart_pro_con = document.querySelector(".cart_con")
    const pro_cart_container = document.querySelector(".pro_cart_container");
    const total_price = document.querySelector(".total_price");

    const cart_products_show = (cart_products) => {
        let sum_price = 0;
        you_cart_pro_con.innerHTML = "";
        cart_products.forEach((e) => {
            sum_price += e.price * e.quantity;
            total_price.textContent = parseInt(sum_price);
            you_cart_pro_con.innerHTML += `
            <div class="cart_pro">
                <div class="cart_img"><img src="${e.img}.png" alt=""></div>
                <div class="cart_info">
                    <p class="cart_pro_info">${e.info}</p>
                    <article>
                        <div class="pro_quantity bg_change">
                            <button class="q_pu">+</button>
                            <input class="bg_change q_value" value="${e.quantity}" type="text">
                            <button class="q_min">-</button>
                        </div>
                        <em>$ ${parseInt(e.price * e.quantity)}</em>
                    </article> 
                    <button class="remove_btn"><i class="fa-solid fa-xmark fa-fade remove"></i></button>              
                </div>
            </div>
            `;
        });

        if (cart_products.length === 0) {
            you_cart_pro_con.innerHTML = `
                <h4>
                    <i class="fa-solid fa-cart-arrow-down fa-bounce"></i>
                </h4>
            `;
        }

    }

    cart_products_show(cart_products);

    pro_cart_container.addEventListener("click", (e) => {
        if(e.target.classList.contains("q_pu"))
        {
            const cart_pro = e.target.closest(".cart_pro");
            const cart_pro_info = cart_pro.querySelector(".cart_pro_info").textContent;
        
            cart_products.map((e) => {
                if(e.info == cart_pro_info)
                {
                    e.quantity += 1;
                }
            })
            localStorage.setItem("cart_product",JSON.stringify(cart_products));
            cart_products_show(cart_products);
            
        }

        if(e.target.classList.contains("q_min"))
        {
            const cart_pro = e.target.closest(".cart_pro");
            const cart_pro_info = cart_pro.querySelector(".cart_pro_info").textContent;
            
            cart_products.map((e) => {
                if(e.info == cart_pro_info)
                {
                    if(e.quantity > 1)
                    {
                        e.quantity -= 1;
                    } else {
                        const remove_pro = cart_products.filter((pro) => {
                            return pro.info == cart_pro_info;
                            })[0];
                            
                            cart_products.splice(cart_products.indexOf(remove_pro),1);
                    }
                }
            })
            localStorage.setItem("cart_product",JSON.stringify(cart_products));
            cart_products_show(cart_products);
        }
    
        if(e.target.classList.contains("remove"))
        {
            const cart_pro = e.target.closest(".cart_pro");
    
            const cart_pro_info = cart_pro.querySelector(".cart_pro_info").textContent;
            const remove_pro = cart_products.filter((pro) => {
                return pro.info == cart_pro_info;
            })[0];
            
            cart_products.splice(cart_products.indexOf(remove_pro),1);
    
            localStorage.setItem("cart_product",JSON.stringify(cart_products));
            cart_products_show(cart_products);
        }

            // Display checkout form
        if (e.target.classList.contains("check_btn")) {
            const totalPrice = document.querySelector(".total_price");
            sum_price = totalPrice.textContent;
            check_form_show(check_form_container,sum_price);
        }

        
    })

})

// Favourite

const fav_products = JSON.parse(localStorage.getItem("fav_products"))

const yourFav = document.querySelector(".your-fav");

yourFav.addEventListener("click", () => {
    profileDetailRight.innerHTML = ""
    profileDetailRight.innerHTML = `
    <header>
        <h2>Your Favourite Items</h2>
    </header>

    <div class="fav_pro_container">

        <div class="fav_pro_con fav_con">


            
        </div>

    </div>
    `
    const fav_container = document.querySelector(".fav_pro_container");
    const fav_pro_con = document.querySelector(".fav_pro_con")

    const fav_show = (fav_products) => {
        fav_pro_con.innerHTML = "";
        fav_products.forEach((e) => {
            fav_pro_con.innerHTML += `
            <div class="fav_pro" no="${e.id}">
                <div class="fav_img"><img src="${e.img}.png" alt=""></div>
                <div class="fav_info">
                    <p class="fav_pro_info">${e.info}</p>
                    <article>
                        <span>Price: <em>$${e.price}</em></span>
                        <button id="buy_now" class="b3 buy_btn">Buy Now</button>
                        <button class="cart_btn b3"><i class="fa-solid fa-cart-shopping cart_chose"></i></button>
                    </article> 
                    <button class="remove_btn"><i class="fa-solid fa-xmark fa-fade fav_remove"></i></button>              
                </div>
            </div>
            `;

            if (fav_products.length === 0) {
                fav_pro_con.innerHTML = `
                    <h4>
                        <i class="fa-solid fa-cart-arrow-down fa-bounce"></i>
                    </h4>
                `;
            }
        });
    
    };

    fav_show(fav_products);

    fav_container.addEventListener("click", (e) => {
    
        // Add product to cart from favorites
        if (e.target.classList.contains("cart_btn") || e.target.classList.contains("cart_chose")) {
            const fav_pro_info = e.target.closest(".fav_pro").querySelector(".fav_pro_info").textContent;
            
            cart_products.map((e) => {
                if(e.info == fav_pro_info)
                {
                    e.quantity += 1;
                }
            });

            let check = cart_products.every((el) => {return el.info != fav_pro_info});

            if(check)
            {
                let fav_filter = products.filter((pro) => {
                    return pro.info == fav_pro_info;
                });

                fav_filter[0].quantity = 1;

                cart_products.push(fav_filter[0]);
                console.log(cart_products)
            }
            localStorage.setItem("cart_product",JSON.stringify(cart_products));
        }

        // Display checkout form
        if (e.target.classList.contains("buy_btn")) {
            const pro_info = e.target.closest(".fav_info").querySelector(".fav_pro_info").textContent;
            let pro_filter = products.filter((pro) => {
                return pro.info = pro_info;
            });
            
            check_form_show(check_form_container,pro_filter[0].price);
        }

        if(e.target.classList.contains("remove_btn") || e.target.classList.contains("fav_remove"))
        {
            console.log("click")
            const fav_pro = e.target.closest(".fav_pro");
    
            const fav_info = fav_pro.querySelector(".fav_pro_info").textContent;
            const remove_pro = cart_products.filter((pro) => {
                return pro.info == fav_info;
            })[0];
            
            fav_products.splice(fav_products.indexOf(remove_pro),1);
    
            localStorage.setItem("cart_product",JSON.stringify(fav_products));
            fav_show(fav_products);
        }
    })
})
