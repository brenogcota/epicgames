import React from 'react';

import './style.scss';
import getImage from 'utils/image';
import discount from 'utils/math';

function CardThree({ games }) {
  return (
    <section className="cardthree">
      <div className="cardthree--items">
        {
          games.map((game) => {
            const { originalPrice, discountPrice } = game.price.totalPrice;
            return (
              <div className="card--cardthree">
                <img src={getImage(game.keyImages, 'OfferImageWide')} alt="" />
                <h4>{game.title}</h4>
                <span>{game.description}</span>
                <div className="card--cardthree-info">
                  <button type="button">
                    {discount(originalPrice, discountPrice)}
                    %
                  </button>
                  <span>
                    <s>{game.price.totalPrice.fmtPrice.originalPrice}</s>
                    <br />
                    <strong>{game.price.totalPrice.fmtPrice.discountPrice}</strong>
                  </span>
                </div>
              </div>
            );
          })
        }

      </div>
    </section>
  );
}

export default CardThree;
