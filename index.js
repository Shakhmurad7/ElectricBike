const block = document.querySelector('.mySwiper.bike')
const url = 'https://electric-bike-db.vercel.app/posts-bicycle'

axios.get(url).then(({data})=>{
    data.forEach(elem => {
        block.innerHTML += `
        <swiper-slide class="swiper-slides" >
         <div class="block">
            <div class="block-top-tetx">
            <img src="./img/${elem.logo}.svg">
                    <p>${elem.item}</p>
                </div>
                <div class="img-block">
                    <img src="./img/${elem.img}.png" alt="">
                    </div>
                    <p class="text-item">${elem.text}</p>
                    <p class="price">${elem.price}$</p>
                    </div>
        </swiper-slide>
                    `
    });
})