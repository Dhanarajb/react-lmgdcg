import React from 'react';
import '../style.css';
const Header = () => {
  return (
    <div className="main">
      <ul>
        <li>Login</li>
        <li>Reservation</li>
        <li>Private-Parties</li>
        <li>
          {' '}
          <img
            className="img"
            src="https://media.licdn.com/dms/image/C560BAQG8enqJgEFrxg/company-logo_200_200/0/1646287799918?e=2147483647&v=beta&t=9WFdpCry2LZHIsJvkiEiHc6QwiSg1Guio1Nv3JcjbM8"
            alt="logo"
          />{' '}
        </li>
        <li>Events</li>
        <li>Contact US</li>
        <li>About US</li>
      </ul>
      <hr />
    </div>
  );
};
export default Header;
