import "./App.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import React, { useState } from "react";

const client_id = process.env.CLIENT_ID;

function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");

  const onLoginSucess = (res) => {
    setName(res.profileObj.name);
    setImage(res.profileObj.imageUrl);
    setEmail(res.profileObj.email);
    console.log("profile obj: ", res.profileObj);
    console.log("Tokem Obj", res.tokenObj);
    // console.log("issued at: ", res.tokenObj.first_issued_at);
    // console.log("expiers at: ", res.tokenObj.expires_at);
    // console.log("diff : ", res.tokenObj.expires_in);
  };

  const onFail = (res) => {
    console.log("[Login Failed]", res);
  };

  const onLogoutSucess = (res) => {
    setName("");
    setImage("");
    setEmail("");
    console.log("logout successful...!");
  };

  return (
    <div className="App">
      <div className="buton" style={{ marginTop: "100px" }}>
        <GoogleLogin
          type="dark"
          disabled={false}
          clientId={client_id}
          autoLoad={false}
          buttonText="Login with Google account"
          onSuccess={onLoginSucess}
          onFailure={onFail}
          cookiePolicy="http://localhost:3000"
          isSignedIn={true}
          theme="dark"
        />
      </div>
      <div style={{ marginTop: "100px" }}>
        <GoogleLogout
          clientId={client_id}
          buttonText="Logout"
          theme="dark"
          onLogoutSuccess={onLogoutSucess}
        />
      </div>
      <br />
      <br />
      <br />
      <div style={{ textAlign: "left", marginLeft: "200px" }}>
        <table>
          <tbody>
            <tr>
              <td>Profile pic: </td>
              <td>
                <img
                  style={{ borderRadius: "47px", height: "40px" }}
                  src={image.toString()}
                  alt=""
                ></img>
              </td>
            </tr>
            <tr>
              <td>Name: </td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Email: </td>
              <td>{email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;
