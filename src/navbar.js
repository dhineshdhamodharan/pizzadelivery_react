import React from 'react'

function Navbar() {
  let handleClick = (e) => {
  window.localStorage.removeItem("userName")
  };
  let user=window.localStorage.getItem("userName")
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="./images/logo.png"></img>
        </a>
        <div class="d-flex justify-content-end">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/home">
                Menu
              </a>
            </li>

            {user?null:  <li class="nav-item">
              <a class="nav-link" href="/register">
                Register
              </a>
            </li>}

           {user?<li class="nav-item">
              <a class="nav-link">
                {user}
              </a>
            </li> :  <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li>}
            
            {user?<li class="nav-item">
              <a class="nav-link"  onClick={(e) => {
                  handleClick(e);
                }} href="/home">
                Logout
              </a>
            </li>:null}
          </ul>
        </div>
      </div>
    </nav>
        </div>
    )
}

export default Navbar
