import React, { useState } from "react";
import { Header } from "../../Components";
import axios from "axios";
import './index.css'
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const loginNow = (e) => {
    e.preventDefault();
    if (email && password) {
      const data = {
        EmailorMobile: email,
        UserPassword: password,
      };

      axios
        .post(
          "http://api.nidhitex.com/api/Registration/ValidateManagementUserLogin",
          data
        )
        .then((res) => {
          const {
            data: { HasError, ResponseMessage, Data },
          } = res;
          if (HasError) setError(ResponseMessage);
          else {
            const [{ UserRoleID }] = Data;
            switch (UserRoleID) {
              case 1: {
                history.push('/admin')
              }
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setError("Please enter the username and password");
    }
  };
  return (
    <>
      <Header />
      <section class="login">
        <form>
          <h3>Login now</h3>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter your email"
            id=""
            class="box"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            id=""
            class="box"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div class="remember">
            <input type="checkbox" name="" id="remember-me" />
            <label for="remember-me"> Remember me </label>
          </div>
         <span className="error">{error}</span> 
          <input
            type="submit"
            value="login now"
            class="btn"
            onClick={(e) => loginNow(e)}
          />
          <p>don't have an account?</p>
          <a href="/register" class="btn link">
            Register now
          </a>
        </form>
      </section>
    </>
  );
};
export default Login;
