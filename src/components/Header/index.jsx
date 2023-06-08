import React from 'react';

import logo from 'assets/logo.svg';
import globe from 'assets/globe.svg';
import user from 'assets/user.svg';

import './style.scss';

function Header() {
  return (
    <header className="header">
      <div className="header--left">
        <img src={logo} alt="home" />

        <nav>
          <ul>
            <li>商城</li>
            <li>常见问题</li>
            <li>帮助</li>
            <li>虚幻引擎</li>
          </ul>
        </nav>
      </div>

      <div className="header--right">
        <img src={globe} alt="translate" />

        <div className="account">
          <img src={user} alt="account" />
          <span>登录</span>
        </div>

        <button type="button">
          获取客户端
        </button>

      </div>
    </header>
  );
}

export default Header;
