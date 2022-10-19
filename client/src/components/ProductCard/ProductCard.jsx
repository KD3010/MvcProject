import React from 'react';
import './productcard.scss';

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img src={`${props.thumbnail}`} alt="Product" className="product-card-image" />
      <div className="product-card-description">
        <h4 className="title">{props.title}</h4>
        <p className="description">{props.description.substring(0, 60) + '...'}</p>
        <p className="price-details">
          <b>${props.price}</b> |{' '}
          <span style={{ color: '#ffffff', backgroundColor: '#CC0C39', padding: '0.3rem 0.5rem' }}>
            Offer: {props.discountPercentage}%
          </span>
        </p>
        <p className="ratings">
          Ratings : {props.rating}/5 <i className="fa-solid fa-star"></i>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
