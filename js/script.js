"use strict"

let myRequest = new Request('/data.json');

fetch(myRequest)
    .then((resp)=> {
        // console.log(resp)
        return resp.json();
    })
    .then((data)=> {


        let headers = document.querySelector('.headers');
        let blockAuto = document.querySelector('.block_info_auto');

        const photo = {
            1: "/images/1.jpg",
            2: "/images/2.jpg",
            3: "/images/3.jpg",
            4: "/images/4.jpg",
            5: "/images/5.jpg",
            6: "/images/6.jpg"
        }
    
        headers.innerHTML = `
            <div class="header">
                <header class="headers">
                    <h2>${data.page_meta.h1}</h2>
                    <p>${data.page_meta.title}</p>
                </header>
            </div>
            <div class="nav_link">
                <a href="#">${data.nav[0].text}</a>
                <a href="#">${data.nav[1].text}</a>
                <a href="#">${data.nav[2].text}</a>
                <a href="#">${data.nav[3].text}</a>
            </div>
            <div class="down_link"> 
                <a href="#">${data.breadcrumbs[0].text}</a> >
                <a href="#">${data.breadcrumbs[1].text}</a> >
                <a href="#">${data.breadcrumbs[2].text}</a>
            </div>
        `;


        blockAuto.innerHTML = `
            <div class="imgAuto">
                <img src="${photo[1]}" alt="auto">
                <div class="titleAuto">
                <span class="auto_price">${data.stock[0].price} ${data.stock[0].price_currency}</span>
                    <h4>${data.stock[0].title}</h4>   
                    <p>Item Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis distinctio, officia tenetur a eaque deleniti, impedit accusamus, alias provident sint id odio neque laudantium! Saepe quisquam libero soluta itaque? </p> 
                    <div class="info_auto">
                    <span>${data.stock[0].year}</span>
                    <span>${data.stock[0].mileage} km</span>
                    <span>${data.stock[0].axle_configuration}</span>
                    </div>
                </div>
            </div>
            <div class="imgAuto">
                <img src="${photo[2]}" alt="auto">
                <div class="titleAuto">
                <span class="auto_price">${data.stock[1].price} ${data.stock[1].price_currency}</span>
                    <h4>${data.stock[1].title}</h4>   
                    <p>Item Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis distinctio, officia tenetur a eaque deleniti, impedit accusamus, alias provident sint id odio neque laudantium! Saepe quisquam libero soluta itaque? </p> 
                    <div class="info_auto">
                    <span>${data.stock[1].year}</span>
                    <span>${data.stock[1].mileage} km</span>
                    <span>${data.stock[1].axle_configuration}</span>
                    </div>
                </div>
            </div>
            <div class="imgAuto">
                <img src="${photo[3]}" alt="auto">
                <div class="titleAuto">
                <span class="auto_price">${data.stock[2].price} ${data.stock[2].price_currency}</span>
                    <h4>${data.stock[2].title}</h4>   
                    <p>Item Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis distinctio, officia tenetur a eaque deleniti, impedit accusamus, alias provident sint id odio neque laudantium! Saepe quisquam libero soluta itaque? </p> 
                    <div class="info_auto">
                    <span>${data.stock[2].year}</span>
                    <span>${data.stock[2].mileage} km</span>
                    <span>${data.stock[2].axle_configuration}</span>
                    </div>
                </div>
            </div>
            <div class="imgAuto">
                <img src="${photo[4]}" alt="auto">
                <div class="titleAuto">
                <span class="auto_price">${data.stock[3].price} ${data.stock[3].price_currency}</span>
                    <h4>${data.stock[3].title}</h4>   
                    <p>Item Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis distinctio, officia tenetur a eaque deleniti, impedit accusamus, alias provident sint id odio neque laudantium! Saepe quisquam libero soluta itaque? </p> 
                    <div class="info_auto">
                    <span>${data.stock[3].year}</span>
                    <span>${data.stock[3].mileage} km</span>
                    <span>${data.stock[3].axle_configuration}</span>
                    </div>
                </div>
            </div>
            <div class="imgAuto">
                <img src="${photo[5]}" alt="auto">
                <div class="titleAuto">
                <span class="auto_price">${data.stock[4].price} ${data.stock[4].price_currency}</span>
                    <h4>${data.stock[4].title}</h4>   
                    <p>Item Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis distinctio, officia tenetur a eaque deleniti, impedit accusamus, alias provident sint id odio neque laudantium! Saepe quisquam libero soluta itaque? </p> 
                    <div class="info_auto">
                    <span>${data.stock[4].year}</span>
                    <span>${data.stock[4].mileage} km</span>
                    <span>${data.stock[4].axle_configuration}</span>
                    </div>
                </div>
            </div>
            <div class="imgAuto">
                <img src="${photo[6]}" alt="auto">
                <div class="titleAuto">
                <span class="auto_price">${data.stock[5].price} ${data.stock[5].price_currency}</span>
                    <h4>${data.stock[5].title}</h4>   
                    <p>Item Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis distinctio, officia tenetur a eaque deleniti, impedit accusamus, alias provident sint id odio neque laudantium! Saepe quisquam libero soluta itaque? </p> 
                    <div class="info_auto">
                    <span>${data.stock[5].year}</span>
                    <span>${data.stock[5].mileage} km</span>
                    <span>${data.stock[5].axle_configuration}</span>
                    </div>
                </div>
            </div>
            <div class="input_auto input_down">
                <div class="tab">
                    <p><</p>
                    <p>1</p>
                    <p>2</p>
                    <p>></p>
                </div>
                <div class="input_sort">
                    <span>Sort by</span>
                    <select class="selectMeny">
                        <option value="1">Sort options</option>
                        <option value="2">Sort options</option>
                        <option value="3">Sort options</option>
                    </select>
                </div>
            </div>
            <div class="text_footer">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quos ullam atque accusantium ratione molestias soluta, provident nobis, assumenda dolorum voluptas incidunt inventore quia reiciendis quis? Quis quo molestias repellat? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda et at eveniet! Fugiat velit unde necessitatibus? Debitis illo vero aut. Iusto dolores, cupiditate error expedita veniam laborum repudiandae aspernatur eos?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quos ullam atque accusantium ratione molestias soluta,<a href="#">link</a>provident nobis, assumenda dolorum voluptas incidunt inventore quia reiciendis quis? Quis quo molestias repellat?
            Iste, aliquid ducimus! Delectus in nisi quaerat temporibus blanditiis, molestias deleniti ea illum laudantium numquam. Laborum vero eligendi minus recusandae culpa sequi exercitationem iusto, ipsum sed suscipit fuga molestias veritatis!x</p>
            </div>
            <div class="footer">
                <div class="content_footer">
                    <div class="content_item">
                        <h4>Logo / Company Name</h4>
                        <div class="item"><i class="fas fa-map-marker-alt"></i><span>Company Adress: Lorem ipsum dolor sit amet 18600, Netherlands</span></div>    
                        <div class="item"><i class="fas fa-phone"></i> <span>+38 958 755-00-00</span></div>   
                        <div class="footer_icon">
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter-square"></i>
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                    <div class="content_item">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quos ullam atque accusantium ratione molestias soluta, provident nobis, assumenda dolorum voluptas incidunt inventore quia reiciendis quis. Quis quo molestias repellat.</p>
                    </div>
                </div>
            </div>
            <div>
                <span class="footer_year">© 2019</span><span class="footer_word"> - Privacy Policy - Terms and Conditions</span>
            </div>
        `;

        console.log(data);
    });  

