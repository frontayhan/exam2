const products = [
    {
        id: 1,
        title: "Samsung S26 Moonrise",
        price: 130,
        image: "images/phone1.png"
    },
    {
        id: 2,
        title: "iPhone 17 Amber",
        price: 130,
        image: "images/phone2.png"
    },
    {
        id: 3,
        title: "iPhone 17 Sunset",
        price: 130,
        image: "images/phone3.png"
    },
    {
        id: 4,
        title: "iPhone 17 Gold",
        price: 130,
        image: "images/phone4.png"
    },
    {
        id: 5,
        title: "Samsung S26 Black",
        price: 130,
        image: "images/phone5.png"
    }
];

const productsDiv = document.getElementById("products");

products.map((item) => {

    productsDiv.innerHTML += `
    
        <div class="swiper-slide">

            <div class="card">

                <span class="badge">Yeni</span>

                <img src="${item.image}" alt="">

                <h3>${item.title}</h3>

                <div class="bottom">

                    <span>${item.price} ₼</span>

                    <button>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>

                </div>

            </div>

        </div>
    `;
});

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },

    speed: 3000,

    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 5,
        }
    }
});