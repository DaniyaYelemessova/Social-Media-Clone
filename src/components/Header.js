import React from "react";

export default function Header() {
  return (
    <React.Fragment>
      <div className="header-container">
        <div className="navigation">
          <a className="active" href="#home">
            Home
          </a>
          <hr className="hr"/>
          <a href="#notification">Notification</a>
          <hr className="hr" />
          <a href="#messages">Messages</a>
        </div>

        <div className="searchAndTweet">
          <input className="input1" placeholder="Search"></input>
          <button className="tweet">TWEET</button>
        </div>
      </div>
      <hr className="headerHr"></hr>
    </React.Fragment>
  );
}
