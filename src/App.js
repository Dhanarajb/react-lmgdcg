import React from 'react';
import './style.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';
export default function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
