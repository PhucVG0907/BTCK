let product_area_2d = document.getElementById("product-area-2d")
let product_area_tt = document.getElementById("tt-product-area")
let product_area_an = document.getElementById("an-product-area")


async function getProducts() {
  let data = await fetch('data.json')
    .then(response => response.json())
    .then(json => json)
  console.log(data)
  loadProducts(data)
}

function loadProducts(data) {
  data.forEach(function (product) {
    if (product.Type == '2d') {
      console.log(product)
      let output = `
      <div class="card col-3 mx-2 product" style="width: 202px;">
      <div class="mb-3">
        <a href="#"><img src="${product.Img}" alt="" style="width: 100%; height: 200px;" ></a>
      </div>
      <div class="mb-3 m-lg-2 sp">
        <a href="#" style=" font-size: 15px;" class="product-title">${product.Name}</a>
      </div>
      <div class="mb-3 m-lg-2">
        <p> ${product.Gia} </p>
      </div>
    </div>
      `
     product_area_2d.innerHTML += output
    } if (product.Type == 'tt') {
      console.log(product)
      let output = `
      <div class="card col-3 mx-2 product" style="width: 202px;">
      <div class="mb-3">
        <a href="#"><img src="${product.Img}" alt="" style="width: 100%; height: 200px;" ></a>
      </div>
      <div class="mb-3 m-lg-2 sp">
        <a href="#" style=" font-size: 15px;" class="product-title">${product.Name}</a>
      </div>
      <div class="mb-3 m-lg-2">
        <p> ${product.Gia} </p>
      </div>
    </div>
      `
    product_area_tt.innerHTML += output
    } if (product.Type == 'an') {
      console.log(product)
      let output = `
      <div class="card col-3 mx-2 product" style="width: 202px;">
      <div class="mb-3">
        <a href="#"><img src="${product.Img}" alt="" style="width: 100%; height: 200px;" ></a>
      </div>
      <div class="mb-3 m-lg-2 sp">
        <a href="#" style=" font-size: 15px;" class="product-title">${product.Name}</a>
      </div>
      <div class="mb-3 m-lg-2">
        <p> ${product.Gia} </p>
      </div>
    </div>
      `
      product_area_an.innerHTML += output
    }
  }
  )
}

getProducts()

