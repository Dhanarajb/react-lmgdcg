import React from 'react';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
const Footer = () => {
  return (
    <div className="footer">
      <img
        className="fooi"
        src="https://media.licdn.com/dms/image/C561BAQGHMmTNkPBrqg/company-background_10000/0/1646402235796?e=1678377600&v=beta&t=ZCU5u3SuucQBXO8VORs5yO_EUIlHf6ZNOmQQmmh9dEE"
        alt="logoo"
      />
      <h1>Desset.Bar.Kitchen</h1>
      <h4>9594300033</h4>
      <h4>savory@gmail.com</h4>
      <h4>Plot no 8, Indira nagar, Hyderbad 505050</h4>
      <ul>
        <li>
          <AiOutlineFacebook />
        </li>
        <li>
          <AiOutlineInstagram />
        </li>
        <li>
          <BsYoutube />
        </li>
      </ul>
    </div>
  );
};
export default Footer;
