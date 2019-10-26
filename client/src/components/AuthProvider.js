import React from "react";
import ReactDOM from "react-dom";
import { AuthConsumer } from "react-auth0-lock";

export default class App extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {({ isAuthenticated, accessToken, logout, login }) => {
          return isAuthenticated ? (
            <p>
              The user is authenticated!
              <button onClick={() => logout("http://localhost:8080")}>
                Logout
              </button>
            </p>
          ) : (
            <p>
              The user is not authenticated.{" "}
              <button onClick={() => login()}>Login</button>
            </p>
          );
        }}
      </AuthConsumer>
    );
  }
}