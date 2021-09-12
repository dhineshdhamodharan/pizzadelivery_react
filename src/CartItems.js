import React from 'react';
function CartItems(props)
{
    console.log(props);
    return(
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
      <div class="fw-bold">{props.data.data.name} {props.data.data.size}</div>
      ₹{props.data.data.price} 
    </div>
    <span onClick={()=>{props.handleRemove(props.data.data._id)}} style={{cursor:'pointer'}} class="badge bg-primary rounded-pill">X</span>
  </li>
    )
}
export default CartItems;