let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

}

window.onscroll = () =>{
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
}

let filterBtn = document.querySelectorAll('.filter-buttons .buttons');
let filterItem = document.querySelectorAll('.products .box-container .box');

filterBtn.forEach(button =>{

  button.onclick = () =>{
    filterBtn.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    let dataFilter = button.getAttribute('data-filter');

    filterItem.forEach(item =>{

      item.classList.remove('active');
      item.classList.add('hide');

      if(item.getAttribute('data-item') == dataFilter || dataFilter == 'all'){
        item.classList.remove('hide');
        item.classList.add('active');
      }

    });

  };

});

var swiper = new Swiper(".home-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".featured-slider", {
  centeredSlides: true,
  loop:true,
  spaceBetween:20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

$(document).ready(function(){
  $('.buttons').click(function(){
    const value = $(this).attrr('data-filter');
    if (value == 'all'){
      $('.box-container').show('1000');
    }
    else{
      $('box-container').not('.'+value).hide('1000');
      $('box-container').filter('.'+value).show('1000');
    }

  })
})


const btns = document.querySelectorAll(".btn");
const storeProducts = document.querySelectorAll(".store-product");


for(i = 0; i < btns.length; i++){
  btns[i].addEventListerner("click",(e) =>{
    e.preventDefault();

    const filter = e.target.dataset.filter;
    //console.log(filter)


    storeProducts.forEach((product)=>{
      if(filter == "all"){
        product.style.display = "block"

      }else{
        if(product.classList.contains(filter)){
          product.style.display = "block"
        }else{
          product.style.display = "none"
        }
      }
    })
  })

}



