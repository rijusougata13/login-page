//importing React,Component,library,FontAwesome
import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF);

//Login Component
class Login extends Component {
  render() {
    return (
      //whole background area pink 1st div white and 2nd div red

      <div
        style={{
          backgroundColor: "pink",
          width: window.screen.availWidth,
          height: window.screen.availHeight,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            position: "absolute",
            top: 150,
            left: 250,
            width: 480,
            height: 500,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            boxShadow: "0px 13px 11px 7px #888888",
          }}
        >
          <h1 style={{ marginLeft: 175, marginTop: 30, fontSize: 40 }}>
            <b>Login</b>
          </h1>
          <div style={{ height: 130 }}>
            <a href="your link here">
              <FontAwesomeIcon
                icon={["fab", "facebook-f"]}
                style={{
                  position: "absolute",
                  top: 150,
                  left: 190,
                  borderRadius: "50%",
                  color: "black",
                  border: "0.6px solid grey",
                  background: "white",
                  blockSize: 30,
                  fontSize: 50,
                }}
              />
            </a>
            <a href="your link here">
              <FontAwesomeIcon
                icon={faGoogle}
                style={{
                  position: "absolute",
                  top: 150,
                  left: 240,
                  borderRadius: "60%",
                  color: "black",
                  border: "0.6px solid grey",
                  background: "white",

                  blockSize: 30,
                  fontSize: 40,
                }}
              ></FontAwesomeIcon>
            </a>
          </div>
          <h9
            style={{
              paddingTop: 110,
              marginLeft: 165,
            }}
          >
            {" "}
            or use your account
          </h9>
          <form style={{}} class="form-signin">
            <div style={{ marginLeft: 40, marginRight: 20, marginTop: 10 }}>
              <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="Email "
                required
                autofocus
                style={{
                  backgroundColor: "#d1e0e0",
                  width: 300,
                  marginLeft: 50,
                }}
              ></input>
              <label for="inputEmail"></label>
            </div>

            <div
              style={{
                marginLeft: 40,
                marginRight: 20,
              }}
            >
              <input
                class="w3-input w3-border"
                type="password"
                id="inputPassword"
                class="form-control"
                placeholder="Password"
                required
                style={{
                  backgroundColor: "#d1e0e0",
                  width: 300,
                  marginLeft: 50,
                }}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must contain at least one number and one uppercase and lowercase letter and special char, and at least 6 or more characters"
                required
              ></input>
              <label for="inputPassword"></label>

              <script type="text/javascript"></script>
            </div>
            <a href="your link here">
              <h8 style={{ marginLeft: 170, color: "black" }}>
                Forgot your password?
              </h8>
            </a>
            <script src="emailValidation.js"></script>
            <button
              onclick="validateEmail(document.form.inputEmail)"
              style={{
                marginTop: 15,
                background: "#ff4d4d",
                marginLeft: 185,
                borderRadius: 50,
                width: 130,
                height: 40,
              }}
              class="btn btn-primary btn-sm md-10 mb-3 button button4"
              type="submit"
            >
              Log in
            </button>
          </form>
        </div>
        <div
          style={{
            backgroundColor: " #ff5050",
            position: "absolute",
            top: 150,
            right: 210,
            width: 500,
            height: 500,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            boxShadow: "1px 15px 15px 2px #888888",
          }}
        >
          <h1
            style={{
              color: "white",
              marginLeft: 80,
              marginTop: 120,
              fontWeight: 4100000000000,
            }}
          >
            <b> HTML CSS Login</b>
          </h1>
          <h1
            style={{
              color: "white",
              marginLeft: 180,
              marginTop: 12,
              fontWeight: 4100000000000,
            }}
          >
            <b>FORM</b>
          </h1>
          <h6
            style={{
              color: "#c2c2d6",
              marginLeft: 40,
              marginTop: 40,
            }}
          >
            <p style={{ marginLeft: 70 }}>
              This login form is created using pure{" "}
            </p>
            <p style={{ marginLeft: 90 }}> HTML and CSS.For social icons,</p>
            <p style={{ marginLeft: 130 }}>FontAwesome is used.</p>
          </h6>
        </div>
      </div>
    );
  }
}

export default Login;
