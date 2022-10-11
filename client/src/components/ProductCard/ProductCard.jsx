import React from 'react';
import './productcard.scss';

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img src={`${props.thumbnail}`} alt="Product Image" className="product-card-image" />
      <div className="product-card-description">
        <h4 className="title">{props.title}</h4>
        <p className="description">{props.description}</p>
        <br />
        <p className="price-details">
          <b>${props.price}</b> |{' '}
          <span style={{ color: '#5BB318' }}>Offer: {props.discountPercentage}%</span>
        </p>
        <p className="ratings">
          Ratings : {props.rating}/5 <i className="fa-solid fa-star"></i>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
