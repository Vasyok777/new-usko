import { useState } from 'react';
import Button from 'components/UI/Button';
import styles from './Promo.module.scss';
import { bg, ques, moto, truck, delivery, ship, bus, train } from 'accets/img';
import Modal from 'components/UI/Modal';

const Promo = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <section className={styles.promo}>
        <div className="container">
          <div className={styles.promo__wrapper}>
            <div className={styles.promo__content}>
              <h1 className={`${styles.promo__title} title`}>Shipping around the world</h1>
              <p className={styles.promo__subtitle}>
                Reliable, flexible shipping solutions based on expertise
              </p>
              <div className={styles.promo__btns}>
                <a href="#" className={styles['promo__btn-link']}>
                  <Button className={styles['promo__btn-start']}>get started</Button>
                </a>
                <Button onClick={() => setModalActive(true)} className={styles.promo__btn}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_11_5446)">
                      <path
                        d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 9.99999C18.3334 5.39762 14.6024 1.66666 10 1.66666C5.39765 1.66666 1.66669 5.39762 1.66669 9.99999C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.33331 6.66666L13.3333 9.99999L8.33331 13.3333V6.66666Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_11_5446">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  watch video
                </Button>
              </div>
              <Modal active={modalActive} setActive={setModalActive}>
                <div className={styles.promo__videos}>
                  <iframe
                    className={styles.promo__video}
                    src="https://www.youtube.com/embed/Wx7vo__48oE"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
                </div>
              </Modal>
            </div>
            <div className={styles.promo__bg}>
              <img className={styles['promo__bg-img']} src={bg} alt="Map image" />
              <img src={moto} className={styles['promo__bg-moto']} alt="Moto icon" />
              <img src={truck} className={styles['promo__bg-truck']} alt="truck icon" />
              <img src={train} className={styles['promo__bg-train']} alt="train icon" />
              <img src={delivery} className={styles['promo__bg-delivery']} alt="delivery icon" />
              <img src={ship} className={styles['promo__bg-ship']} alt="ship icon" />
              <img src={bus} className={styles['promo__bg-bus']} alt="ship icon" />
              <img className={styles['promo__bg-ques']} src={ques} alt="Location icon" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promo;
