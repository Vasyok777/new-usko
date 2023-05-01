import { motion } from 'framer-motion';
import { MButton } from 'components/UI/Button';
import { experienceOne, experienceTwo } from 'accets/img';
import styles from './Experience.module.scss';

const Experience = () => {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  const textAnimationRight = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={styles.experience}>
      <div className="container">
        <div className={styles.experience__box}>
          <div className={styles[('experience__box-left', 'experience-left')]}>
            <motion.div
              custom={1}
              variants={textAnimation}
              className={styles['experience-left__box']}>
              <motion.span className={`${styles['experience-left__year']} text__accent`}>
                10+
              </motion.span>
              <motion.h2
                className={
                  `${styles['experience-left__title']}`
                    ? 'title'
                    : `${styles['experience-left__title']} title`
                }>
                Years in business
              </motion.h2>
            </motion.div>
            <motion.div
              variants={textAnimation}
              custom={2}
              className={styles['experience-left__bg']}>
              <img
                className={styles['experience-left__bg-img']}
                src={experienceOne}
                alt="Experience"
              />
            </motion.div>
          </div>
          <motion.div
            className={styles[('experience__box-right', 'experience-right')]}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}>
            <div className={styles['experience-right__box']}>
              <motion.h6
                variants={textAnimationRight}
                custom={1}
                className={styles['experience-right__box-title']}>
                Reliable, flexible shipping solutions
              </motion.h6>
              <motion.p
                variants={textAnimationRight}
                custom={2}
                className={styles['experience-right__box-text']}>
                USKO Shipping Inc is a full service worldwide freight transportation company,
                serving the needs of the international shipping industry.
                <br /> We strive for long-term partnerships with our customers by delivering <br />a
                wide range of services adapted to meet their specific needs.
              </motion.p>
              <a className={styles['experience-right__box-link']} href="#">
                <MButton variants={textAnimationRight}>more about us</MButton>
              </a>
            </div>
            <motion.div
              variants={textAnimationRight}
              custom={3}
              className={styles['experience-right__bg']}>
              <img
                className={styles['experience-right__bg-img']}
                src={experienceTwo}
                alt="Experience"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
