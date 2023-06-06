import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cookie from "cookie";
import { ClockLoader } from "react-spinners";

import "../SignIn.css";
import "../preload.css";

const SignIn = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();

    document.cookie = cookie.serialize("loggedIn", "true", {
      maxAge: 60,
    });
    navigate("/dashboard");
  };

  //preLoad
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="preload">
          <ClockLoader color={"#61398F"} loading={loading} size={100} />
        </div>
      ) : (
        <div className="login-wrap">
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              defaultChecked
            />
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">
              Sign Up
            </label>
            <form className="login-form" onSubmit={login}>
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Username
                  </label>
                  <input
                    id="user"
                    onChange={handleTextChange}
                    value={state.username}
                    name="username"
                    label="Username"
                    type="text"
                    className="input"
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    onChange={handleTextChange}
                    value={state.password}
                    name="password"
                    // label="Password"
                    type="password"
                    className="input"
                    data-type="password"
                  />
                </div>
                <div className="group">
                  <input
                    id="check"
                    type="checkbox"
                    className="check"
                    defaultChecked
                  />
                  <label htmlFor="check">
                    <div className="hr"></div>
                  </label>
                </div>
                <div className="group">
                  <input type="submit" className="button" value="Sign In" />
                </div>
                <div className="foot-lnk">
                  <a href="#forgot">Forgot Password?</a>
                </div>
              </div>
              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Username
                  </label>
                  <input id="user2" type="text" className="input" />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="pass2"
                    type="password"
                    className="input"
                    data-type="password"
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Repeat Password
                  </label>
                  <input
                    id="repeatpass"
                    type="password"
                    className="input"
                    data-type="password"
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Email Address
                  </label>
                  <input id="email" type="text" className="input" />
                </div>
                <div className="hr"></div>
                <div className="group">
                  <input type="submit" className="button" value="Sign Up" />
                </div>
                {/* <div className="foot-lnk">
                  <label htmlFor="tab-1">Already Member?</label>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
