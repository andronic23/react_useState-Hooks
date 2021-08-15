import ProductModel from "./models/Product"
import Product from "./components/product/Product"
import CartModel from "./models/Cart"
import {Cart} from "./components/cart/Cart"
import { useState } from "react"



function App(props) {


    const products = [
      new ProductModel(1,"BMV", "https://live.staticflickr.com/4009/4611639006_27372e2401_b.jpg"),
    ]

    const cart = new CartModel(1)

    cart.add({
      quantity:2,
      item: products[0]
    })
   
    return (
      <div className="App">

      <div>
        <Cart count={0}/>
      </div>
      <hr/>

        { products.map(product=>
          <div>
            <Product product={product} />
          </div>
        )}
       
      
      </div>
    )
}

export default App;
