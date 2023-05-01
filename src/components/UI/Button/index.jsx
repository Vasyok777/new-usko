import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.scss';

const Button = forwardRef(({ children, className, onClick }, ref) => {
  return (
    <button ref={ref} className={`${className} ${styles.btn}`} onClick={onClick}>
      {children}
    </button>
  );
});
export const MButton = motion(Button);
export default Button;
