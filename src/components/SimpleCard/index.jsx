import React from 'react';

import './style.scss';

function SimpleCard({
  title, image, active, onClick,
}) {
  return (
    <div onClick={onClick} className={`card--simple ${active && 'active'}`}>
      <img src={image} />
      <span>{title}</span>
    </div>
  );
}

export default SimpleCard;
