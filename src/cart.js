import React from "react";
import "./cart.css";
import Navbar from "./navbar";
import { useLocation } from "react-router-dom";

function Cart(props) {
  const location = useLocation();
  console.log(props.location);
  return (
    <div className="container">
      <section className="cartaddeditems">
        <div className="order container mx-auto">
          <div className="ordersummary">
            <img src="./images/cart-black.png" />
            <h1 class="textorder">Order Summary</h1>
          </div>
          <div className="pizzalist">
              <div className="orderitemlist">
              <img className="imgitem" src="./images/pizza.png" />
            <div className="productsum">
              <h4>Margharita</h4>
              <span>Medium</span>
            </div>
            <span className="orderquantity">1Pcs</span>
            <span className="orderprice">₹300</span>
              </div>
              <div className="orderitemlist">
              <img className="imgitem" src="./images/pizza.png" />
            <div className="productsum">
              <h4>Margharita</h4>
              <span>Medium</span>
            </div>
            <span className="orderquantity">1Pcs</span>
            <span className="orderprice">₹300</span>
              </div>
        
            


          </div>
          <hr/>
          <div className="totalprice">
              <div>
                  <span class="texttotal">Total Amount:</span>
                  <span className="textamount">₹300</span>
              </div>
              <form action="" className="mt-12">
                  <input className="phonenumberbox"type="text" placeholder="Phonenumber"/><br/>
                  <input className="addressbox"type="text" placeholder="Address"/>
                  <div>
                  <div><button type="submit" className="btn btn-primary">Order Now</button></div> 
                {/*  <button type="submit" className="btn btn-primary">Login in to continue</button> */}
                 </div>
              </form>
          </div>
          
        </div>
        </section>

        {/* <section className="emptycart">
        <div className="container">
            <h1 className="cart-font">Cart Empty 😐</h1>
            <p className="des-font">You probably haven't ordered a Pizza yet.To order a pizza, go to the main page.<br/>
            <span><a href="/" className="btn btn-primary">Go back</a></span></p>
    
            <img class="cart-img" src="./images/empty-cart.png"></img> 
        </div> 
        </section>*/
        }
     
    </div>
  );
}

export default Cart;
