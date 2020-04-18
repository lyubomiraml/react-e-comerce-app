import React from "react";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-items">
        <div className="content">
          <h1 className="title">HATS</h1>
          <p className="subtitle">Shop now</p>
        </div>
      </div>
      <div className="menu-items">
        <div className="content">
          <h1 className="title">JACKETS</h1>
          <p className="subtitle">Shop now</p>
        </div>
      </div>
      <div className="menu-items">
        <div className="content">
          <h1 className="title">SNEAKERS</h1>
          <p className="subtitle">Shop now</p>
        </div>
      </div>
      <div className="menu-items">
        <div className="content">
          <h1 className="title">WOMEN</h1>
          <p className="subtitle">Shop now</p>
        </div>
      </div>
      <div className="menu-items">
        <div className="content">
          <h1 className="title">MEN</h1>
          <p className="subtitle">Shop now</p>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;