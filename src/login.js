import React from "react";
import Navbar from "./navbar";
import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import env from "./settings.js";
import "./login.css";


function Login() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let loginData = await axios.post(`${env.api}/login`, {
        email,
        password,
      });
      console.log(loginData);

      window.localStorage.setItem("app_token", loginData.data.token);
      window.localStorage.setItem("userName", email );
      alert(`Login successful!`);
      history.push("/home");
    } catch (error) {
      alert("Please enter the valid credentials")
      console.log(error);
    }
  };

  let onClick = (e) => {
    history.push("/register");
  };
    return (
<div className="container">
<Navbar/>
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
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

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

                <input
                  class="w-100 btn btn-lg btn-primary"
                  type="submit"
                  value="Login"
                />
                  <a className="forgotpassword" href="/register">
                  Dont have account?
                 </a>
                <p class="mt-5 mb-3 text-muted">© 2017–2021</p>
              </form>
            </main>
          </div>
        </div>
</div>
    );
}
export default Login;