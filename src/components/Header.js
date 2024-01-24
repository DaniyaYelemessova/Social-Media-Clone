import React from "react";

export default function Header() {
  return (
    <React.Fragment>
      <div className="header-container">
        <div className="navigation">
          <a class="active" href="#home">
            Home
          </a>
          <hr />
          <a href="#notification">Notification</a>
          <hr />
          <a href="#messages">Messages</a>
        </div>

        <div className="searchAndTweet">
          <input placeholder="search"></input>
          <p className="tweet">Tweet</p>
        </div>
      </div>
    </React.Fragment>
  );
}
