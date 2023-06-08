import React from 'react';

import './style.scss';
import getImage from 'utils/image';
import discount from 'utils/math';

function ProductGallery({ games, title }) {
  return (
    <section className="gallery--section">
      <h3>{title}</h3>

      <div className="gallery--section-items">
        {
          games.map((game) => {
            const { originalPrice, discountPrice } = game.price.totalPrice;
            return (
              <div className="card--default">
                <img src={getImage(game.keyImages, 'Thumbnail')} alt="" />
                <p>{game.title}</p>
                <div className="card--default-info">
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

export default ProductGallery;
