import Navbar from "./navbar";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import env from "./settings.js";
import "./register.css";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const history = useHistory();
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        console.log({ username, email, password, confirmpassword });
        await axios.post(`${env.api}/register`, {
          username,
          password,
          email,
          confirmpassword,
        });
        alert("Registration successful!")
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <div className="container">
          <Navbar/>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <main class="form-signin">
                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <img
                    class="mb-4"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGiJ_tIEbFuvt7J7d17ldDOetn-PZteEIDQ&usqp=CAU"
                    alt=""
                    width="90"
                    height="100"
                  />
                  <h1 class="h3 mb-3 fw-normal">Please register</h1>
                  <div class="form-floating">
                    <input
                      type="name"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Enter your Name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <label for="floatingInput">Name</label>
                  </div>

                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      value={confirmpassword}
                      onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                    <label for="floatingPassword" importent>
                      Confirm Password
                    </label>
                  </div>
  
                  
                  <input
                    class="w-100 btn btn-lg btn-primary"
                    type="submit"
                    value="Register"
                  />
                   <a class="haveaccount" href="/login">
                   Already have account?
                 </a>
                  <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
                </form>
              </main>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Register;