import React from 'react';
import PropTypes from 'prop-types';

const Button = ({text, onClick}) => {
  const handleOnClick = () => {
    onClick();
  }

  return (
    <button type="button" onClick={handleOnClick}>{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  text: null,
  onClick: null
}

export default Button;
