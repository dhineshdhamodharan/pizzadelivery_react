import React from "react";
import "./home.css";
import Navbar from "./navbar";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import env from "./settings";
import { useHistory } from "react-router";
import Cart from "./cart";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
function Home() {
  const [menu, setMenu] = useState([]);
  const [cartItems, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);
  const history = useHistory();

  useEffect(() => {
    fetchmenu();
  }, []);

  let handleCart = async (id) => {
    try {
      let loggedinUser = window.localStorage.getItem("userName");
      if (!loggedinUser) {
        alert("Please login to continue");
        history.push("/login");
      } else {
        let item = await axios.get(`${env.api}/menus/${id}`);
        let addItem=await axios.post(`${env.api}/addItemToCart`,{item})
        setCartItem([...cartItems, item]);
        setTotal(total + item.data.price);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let fetchmenu = async () => {
    try {
      let menu = await axios.get(`${env.api}/menus`);
      console.log(menu);
      setMenu([...menu.data]);
    } catch (error) {
      console.log(error);
    }
  };
  let handleClick = (e) => {
    window.localStorage.removeItem("userName");
  };
  let removeItem=async (id)=>{
    let result=window.confirm("Are you sure to remove from the Cart?");
    if(result)
    {
      let item = await axios.get(`${env.api}/menus/${id}`);
      let cartIndex=cartItems.findIndex(obj=>obj._id==item.data._id)
      setTotal(total-item.data.price)
      cartItems.splice(cartIndex,1)
      setCartItem([...cartItems])
    }
  }
  let user = window.localStorage.getItem("userName");
  return (
    <div className="container">
<Navbar/>
      <section class="content">
        <div class="container1">
          <div class="left">
            <h6 style={{ fontStyle: "italic" }}>Are you hungry?</h6>
            <h1 className="wait">Don't wait !</h1>
            <h2 className="orderNow">Order Now!</h2>
          </div>
          <section class="cart">
            <h4 style={{color:"#39A9D0"}}><u>Cart Items</u></h4>
          <ol class="list-group list-group-numbered">
            {
              cartItems.length == 0 ? <h3>No items in cart</h3> : null
            }
             {
               cartItems.map((item)=>{
                return <CartItems handleRemove={removeItem} data={item}></CartItems>
               }
               )
             }
             <h1>Total-₹ {total}</h1>
             </ol>
              </section>
{/*           <div class="right">
            <img src="./images/hero-pizza.png"></img>
          </div> */}
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            
            <section class="pizzascontent">
              <h3 class="text1">All pizzas</h3>
            </section>
            {menu.map((item) => {
              return (
                <div className="col-lg-4 mt-4">
                  <div class="card">
                    <img src={item.img} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h6 class="card-title">{item.name}</h6>
                      <p class="card-text">{item.size}</p>
                      <p class="price">₹{item.price}</p>
                      <button
                        class="addtoCart btn-danger"
                        onClick={() => {
                          handleCart(item._id);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
