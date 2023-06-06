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
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
            <label for="tab-1" class="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" class="sign-up" />
            <label for="tab-2" class="tab">
              Sign Up
            </label>
            <form className="login-form" onSubmit={login}>
              <div className="sign-in-htm">
                <div className="group">
                  <label for="user" class="label">
                    Username
                  </label>
                  <input
                    id="user"
                    onChange={handleTextChange}
                    value={state.username}
                    name="username"
                    label="Username"
                    type="text"
                    class="input"
                  />
                </div>
                <div className="group">
                  <label for="pass" class="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    onChange={handleTextChange}
                    value={state.password}
                    name="password"
                    // label="Password"
                    type="password"
                    class="input"
                    data-type="password"
                  />
                </div>
                <div class="group">
                  <input id="check" type="checkbox" class="check" checked />
                  <label for="check">
                    <div class="hr"></div>
                  </label>
                </div>
                <div className="group">
                  <input type="submit" className="button" value="Sign In" />
                </div>
                <div class="foot-lnk">
                  <a href="#forgot">Forgot Password?</a>
                </div>
              </div>
              <div class="sign-up-htm">
                <div class="group">
                  <label for="user" class="label">
                    Username
                  </label>
                  <input id="user" type="text" class="input" />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Repeat Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">
                    Email Address
                  </label>
                  <input id="pass" type="text" class="input" />
                </div>
                <div class="hr"></div>
                <div class="group">
                  <input type="submit" class="button" value="Sign Up" />
                </div>
                {/* <div class="foot-lnk">
                  <label for="tab-1">Already Member?</label>
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
