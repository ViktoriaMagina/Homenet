
const links = document.querySelectorAll(".data-link");
let key;

if(links.length > 0){
    links.forEach(link => {
        link.addEventListener("click", function(){
            key = link.getAttribute('data-item')
            localStorage.setItem("keyApplication", key)
        })
    })
}