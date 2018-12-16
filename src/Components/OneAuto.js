import React from 'react';
import '../Style/OneAuto.css';

const OneAuto = (props) => {
  const { data } = props;
    const { id } = data.images[0];
    const prevId = id.substr(0, 2);
    return (
      <div className="wrapper-one-auto">
      <img src={`https://content.kufar.by/line_thumbs_2x/${prevId}/${id}.jpg`} alt='img'/>
        <div className="wrapper-title-price">
          <span className="title-car">{data.subject}</span>
          <div className="wrapper-price">
            <span className="price-byn">{data.price_byn}р.</span>
            <span className="price-usd">{data.price_usd}$</span>
          </div>
        </div>        
      </div>
    )
};

export default OneAuto;