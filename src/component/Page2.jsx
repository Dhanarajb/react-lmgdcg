import React from 'react';
import Sentence from './Sentence';
const Page2 = () => {
  return (
    <div className="main-page">
      <div className="left">
        <p>
          We specialize in Augmented-Reality, Virtual-Retail, Social AR,.
          Gamification, Real-time 3D, WebX, NFTs and other Creative Tech for
          brands.
        </p>
        <img
          className="img1"
          src="https://images.woodenstreet.de/image/cache/data%2Fcoffee-table%2Fian-round-coffee-table-honey-finish%2Fwalnut-finish%2Fupdated%2Fupdated%2F1-810x702.jpg"
          alt="table"
        />
      </div>
      <div className="right">
        <Sentence />
      </div>
    </div>
  );
};
export default Page2;
