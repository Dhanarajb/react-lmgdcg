import React, { useState } from 'react';
import '../style.css';
// const images = [
//   'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=2000',
//   'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg',
//   'https://images.healthshots.com/healthshots/en/uploads/2021/12/23084654/eating-food.jpg',
// ];
const Page1 = () => {
  const [curImg, setCurrImg] = useState(1);

  // const nextImage = () => {
  //   setCurrImg(curImg === images.length - 1 ? 0 : curImg + 1);
  // };
  const HandleImageChange = () => {
    setCurrImg(curImg === 1 ? 1 : 2);
  };
  return (
    <div className="image-change" onClcick={HandleImageChange}>
      <img
        src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=2000"
        alt={`Image ${curImg}`}
      />

      <div className="page1">
        <h1>Dessert | Bar | Kitchen</h1>
        <p>its good restuarant in the hyderavar....ymmm</p>
        <button className="cont">ContactUs</button>
      </div>

      {/* {images.map((image, index) => {
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={`slideshow-image ${index === curImg ? 'active' : ' '}`}
        />;
      })}
      <button onClick={nextImage}>Next</button> */}
    </div>
  );
};
export default Page1;
