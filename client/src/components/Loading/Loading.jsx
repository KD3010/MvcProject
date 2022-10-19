import ReactLoading from 'react-loading';
import React from 'react';
import './loading.styles.scss';

const Loading = ({ type, color }) => {
  return (
    <div className="loading-container">
      <ReactLoading type={type} color={color} height={250} width={100} />
    </div>
  );
};

export default Loading;
