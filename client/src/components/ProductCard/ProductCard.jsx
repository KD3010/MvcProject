import React from 'react';
import './productcard.scss';

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img src={`${props.Thumbnail}`} alt="Product Image" className="product-card-image" />
      <div className="product-card-description">
        <h4 className="title">{props.Title}</h4>
        <p className="description">{props.Description}</p>
        <br />
        <p className="price-details">
          <b>${props.Price}</b> |{' '}
          <span style={{ color: '#5BB318' }}>Offer: {props.DiscountPercentage}%</span>
        </p>
        <p className="ratings">
          Ratings : {props.Rating}/5 <i className="fa-solid fa-star"></i>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
