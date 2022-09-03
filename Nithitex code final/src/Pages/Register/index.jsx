import React, { useState } from "react";
import { Header } from "../../Components";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cPassword === password) {
      const data = {
        UserFullName: name,
        UserEmail: email,
        UserMobile: phone,
        UserPassword: password,
      };

      axios
        .post("http://api.nidhitex.com/api/UserAccount/CreateUserAccount", data)
        .then((res) => {
          const {
            data: { HasError, ResponseMessage, Data },
          } = res;
          if (HasError) setError(ResponseMessage);
          else {
            history.push("/");
          }
        });
    } else {
      setError("your password is not match");
    }
  };
  return (
    <>
      <Header />
      <section class="register">
        <form action="">
          <h3>register now</h3>
          <input
            type="text"
            name=""
            placeholder="enter your name"
            id=""
            class="box"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name=""
            placeholder="enter your email"
            id=""
            class="box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            name=""
            placeholder="enter your phone "
            id=""
            class="box"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            name=""
            placeholder="enter your password"
            id=""
            class="box"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <input
            type="password"
            name=""
            placeholder="re-enter your password"
            id=""
            class="box"
            value={cPassword}
            onChange={(e) => setcPassword(e.target.value)}
          />
          <span className="error">{error}</span>
          <input
            type="submit"
            value="register now"
            class="btn"
            onClick={(e) => handleSubmit(e)}
          />
          <p>already have an account?</p>
          <a href="/login" class="btn link">
            login now
          </a>
        </form>
      </section>
    </>
  );
};
export default Register;
