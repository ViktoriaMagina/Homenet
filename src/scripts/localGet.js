let key = localStorage.getItem("keyApplication")
const items = document.querySelectorAll(".data-item")
if(items.length > 0){
    items.forEach((item) => {
        if(item.getAttribute("data-item") == key){
            item.checked = true;
            localStorage.removeItem("keyApplication")
        }
    })
}