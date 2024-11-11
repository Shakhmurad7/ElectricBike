const block = document.querySelector('.mySwiper.bike');
const sectionBikeBlock = document.querySelector('.section-bike-block')
const helmetBox = document.querySelector('.mySwiper.helmetBox')
const url = 'https://electric-bike-db.vercel.app/posts-bicycle';

axios.get(url).then(({ data }) => {
    data.forEach(elem => {
        block.innerHTML += `
        <swiper-slide class="swiper-slides">
            <div class="block">
                <div class="block-top-tetx">
                    <img src="./img/${elem.logo}.svg">
                    <p class="text-p" style="color: ${elem.item === 'В наличии' ? 'green' : 'red'};">
                        ${elem.item}
                    </p>
                </div>
                <div class="img-block">
                    <img src="./img/${elem.img}.png" alt="">
                </div>
                <p class="text-item">${elem.text}</p>
                <p class="price">${elem.price}$</p>
                 <button style='display: ${elem.item === 'В наличии' ? 'flex': 'none'}'>1 klik ile</button>
            </div>
        </swiper-slide>
        `;
    });
});

axios.get(url).then(({ data }) => {
    data.slice(0,3).forEach(elem => {
        sectionBikeBlock.innerHTML += `
            <div class="block">
                <div class="block-top-tetx">
                    <img src="./img/${elem.logo}.svg">
                    <p class="text-p" style="color: ${elem.item === 'В наличии' ? 'green' : 'red'};">
                        ${elem.item}
                    </p>
                </div>
                <div class="img-block">
                    <img src="./img/${elem.img}.png" alt="">
                </div>
                <p class="text-item">${elem.text}</p>
                <p class="price">${elem.price}$</p>
                 <button style='display: ${elem.item === 'В наличии' ? 'flex': 'none'}'>1 klik ile</button>
            </div>
        `;
    });
});


axios.get('https://electric-bike-db.vercel.app/postes-helmet').then(({data})=>{
    data.forEach(elem =>{
        helmetBox.innerHTML  += `
        <swiper-slide class="swiper-slides">
            <div class="block">
                <div class="block-top-tetx">
                    <p class="text-p" style="color: ${elem.item === 'В наличии' ? 'green' : 'red'};">
                        ${elem.item}
                    </p>
                </div>
                <div class="img-block">
                    <img src="./img/${elem.img}.png" alt="">
                </div>
                <p class="text-item">${elem.text}</p>
                <p class="price">${elem.price}$</p>
                <button style='display: ${elem.item === 'В наличии' ? 'flex': 'none'}'>1 klik ile</button>
            </div>
        </swiper-slide>
        `
    })
})