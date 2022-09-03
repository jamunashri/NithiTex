import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './index.css'

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const history = useHistory();
  const loggedIn = (e) => {
    e.preventDefault();
    console.log("onclick funtion");
    if (username && password) {
      const data = {
        EmailorMobile: username,
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
          console.log(res, "res");
          if (HasError) seterror(ResponseMessage);
          else {
            const [{ UserRoleID }] = Data;
            switch (UserRoleID) {
              case 1: {
                history.push("/admin/home");
              }
            }
          }
        })
        .catch((err) => {
          seterror('Un Expected Error occurs please try again')
          console.log(err);
        });
    } else {
      seterror("Please enter the username and password");
    }
  };
  return (
    <>
    <div class="limiter">
		<div class="container-login100" style={{backgroundImage: "url('images/bg-01.jpg')";}}>
			<div class="wrap-login100">
				<form class="login100-form validate-form">
					<span class="login100-form-logo">
						<i class="zmdi zmdi-landscape"></i>
					</span>

					<span class="login100-form-title p-b-34 p-t-27">
						Log in
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						<input class="input100" type="text" name="username" placeholder="Username" />
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" type="password" name="pass" placeholder="Password" />
						<span class="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Login
						</button>
					</div>

				
				</form>
			</div>
		</div>
	</div>
        
        {/* <div class="row">
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title">ADMIN PANEL</div>

            <div class="col-lg-12 login-form">
              <div class="col-lg-12 login-form">
                <form>
                  <div class="form-group">
                    <label class="form-control-label">USERNAME</label>
                    <input
                      type="text"
                      class="form-control"
                      name="username"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">PASSWORD</label>
                    <input
                      type="password"
                      class="form-control"
                      i
                      name="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
                  {error && <span style={{color: 'red'}}>{error}</span>}
                  <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text"></div>
                    <div class="col-lg-6 login-btm login-button">
                      <button
                        type="submit"
                        class="btn btn-outline-primary"
                        onClick={(e) => loggedIn(e)}
                      >
                        LOGIN
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
          </div>
        </div> */}
  
    </>
  );
};
export default Login;
