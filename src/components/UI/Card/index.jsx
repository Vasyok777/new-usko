import styles from './Card.module.scss';

const Card = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.root}>{children}</div>
    </div>
  );
};

export default Card;
