import React from 'react';
import IconsSVG from 'assets/icons/sprite.svg';

export const Icons = ({ name, width, height, className, size }) => (
  <svg className={className} width={width || size} height={height || size}>
    <use xlinkHref={`${IconsSVG}#${name}`} />
  </svg>
);
