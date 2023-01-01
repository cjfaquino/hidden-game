/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';

function ProgressiveImg({
  placeholderSrc,
  src,
  dbLevel,
  handleLoad,
  alt,
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    // wait for db to connect before loading on game page
    // will be true for home page
    if (dbLevel) {
      img.onload = () => {
        setImgSrc(src);
        handleLoad();
      };
    }
  }, [src, dbLevel]);

  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? 'loading' : 'loaded';

  return (
    <img {...{ src: imgSrc, ...props }} alt={alt} className={customClass} />
  );
}

ProgressiveImg.propTypes = {
  placeholderSrc: PropType.string.isRequired,
  src: PropType.string.isRequired,
  handleLoad: PropType.func,
  alt: PropType.string,
  dbLevel: PropType.oneOfType([PropType.shape({}), PropType.bool]),
};

ProgressiveImg.defaultProps = {
  alt: '',
  dbLevel: true,
  handleLoad: () => {},
};

export default ProgressiveImg;
