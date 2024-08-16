const profile = document.querySelector(".profile");
const accInfo = document.querySelector(".acc-info");
const profileDetailShow = document.querySelector(".profile-detail-show");
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
accInfo.addEventListener("click", () => {
    profileDetailShow.innerHTML = `
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
    `
    const editBtn2 = document.querySelector(".edit-profile-btn2");
    editBtn2.addEventListener("click", () =>{
        editFormShow(userData)
    });
});

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

