function searchProduct() {
    let search_input = document.getElementById("searchbar").value
    let products_title = document.getElementsByClassName("product-title")
    let products = document.getElementsByClassName("product")
    
    for(i = 0; i < products_title.length; i++) {
        if(!products_title[i].innerHTML.includes(search_input)) {
            products[i].classList.add("hide")
        } else {
            products[i].classList.remove("hide")
        }
    }
}