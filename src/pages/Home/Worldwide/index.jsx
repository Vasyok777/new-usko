import { motion } from 'framer-motion';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from 'components/UI/Card';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './Worldwide.module.scss';
import { oneSlider, twoSlider, threeSlider, fourSlider } from 'accets/img';

const Worldwide = () => {
  const sliders = [
    { name: oneSlider, text: 'Pallets' },
    { name: twoSlider, text: 'Grains' },
    { name: threeSlider, text: 'Machinery' },
    { name: fourSlider, text: 'Cars & SUVs' },
    { name: oneSlider, text: 'Pallets' },
    { name: twoSlider, text: 'Grains' },
    { name: threeSlider, text: 'Machinery' },
    { name: fourSlider, text: 'Cars & SUVs' },
  ];
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
  return (
    <Card>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className={styles.worldwide}>
        <div className="container">
          <div className={styles.worldwide__content}>
            <motion.div variants={textAnimation} className={styles.worldwide__box}>
              <motion.h2 variants={textAnimation} className={`${styles.worldwide__title} title`}>
                We ship <span className="text__accent">worldwide</span>
              </motion.h2>
              <div className={styles.worldwide__arrows}>
                <svg
                  className="image-swiper-button-prev"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M63.3333 40H16.6666M16.6666 40L40 63.3334M16.6666 40L40 16.6667"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  className="image-swiper-button-next"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.6667 40H63.3334M63.3334 40L40 63.3334M63.3334 40L40 16.6667"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
            <div className={styles.worldwide__slider}>
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={4}
                slidesPerGroup={1}
                pagination={{ clickable: true }}
                breakpoints={{
                  1200: {
                    slidesPerView: 4,
                  },
                  920: {
                    slidesPerView: 3,
                  },
                  767: {
                    slidesPerView: 2,
                    pagination: true,
                  },
                  320: {
                    slidesPerView: 1,
                    pagination: { clickable: true },
                  },
                }}
                navigation={{
                  nextEl: '.image-swiper-button-next',
                  prevEl: '.image-swiper-button-prev',
                  disabledClass: `${styles['swiper-button-disabled']}`,
                }}>
                {sliders.map((slider, idx) => (
                  <SwiperSlide key={idx} className={styles.worldwide__slide}>
                    <img
                      className={styles['worldwide__slider-img']}
                      src={slider.name}
                      alt="Slider"
                    />
                    <h6 className={styles['worldwide__slider-name']}>{slider.text}</h6>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </Card>
  );
};

export default Worldwide;
