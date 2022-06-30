window.addEventListener("DOMContentLoaded", function(){
    let headerActiveItem = document.querySelector(".header-link")
    if(headerActiveItem){
        const posX = headerActiveItem.offsetLeft;
        const headerScroll = document.querySelector(".header-bottom")
        headerScroll.scrollBy(posX - 100, 0);
    }
})
