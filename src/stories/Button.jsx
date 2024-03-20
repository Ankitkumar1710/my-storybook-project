import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import { RxAvatar } from "react-icons/rx";

export const Button = ({ type, backgroundColor, size, label, iconPosition, icon, ...props }) => {
  const typeClass = type === 'neutral' ? 'storybook-button--neutral' : 'storybook-button--default';
  const mode = type === 'primary' ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, typeClass].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {iconPosition === 'left' && icon && <RxAvatar />} 
      {label}
      {iconPosition === 'right' && icon && <RxAvatar />} 
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'primary', 'neutral']),
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

Button.defaultProps = {
  type: 'default',
  backgroundColor: null,
  size: 'medium',
  icon: true,
  iconPosition: 'left',
};
