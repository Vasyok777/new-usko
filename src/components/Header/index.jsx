import React, { useEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';
import logo from 'accets/img/vector/logo.svg';
import Button from 'components/UI/Button';

const Header = () => {
  const [lang, setLanguage] = useState('EN');
  const [openLang, setOpenLang] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [openDropMenu, setOpenDropMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const langRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    const handlerClickOutsite = (e) => {
      if (!e.composedPath().includes(langRef.current)) {
        setOpenLang(false);
      }
    };
    document.body.addEventListener('click', handlerClickOutsite);
    return () => document.body.removeEventListener + ('click', handlerClickOutsite);
  }, []);
  useEffect(() => {
    const handlerClickOutsite = (e) => {
      if (!e.composedPath().includes(menuRef.current)) {
        setToggle(false);
      }
    };
    document.body.addEventListener('click', handlerClickOutsite);
    return () => document.body.removeEventListener + ('click', handlerClickOutsite);
  }, []);
  const menu = [
    ['Home'],
    ['Services', 'Services 1', 'Services 2'],
    ['About us'],
    ['Resourses', 'Resourses 1', 'Resourses 2', 'Resourses 3'],
    ['contacts'],
  ];
  const language = ['EN', 'UA'];
  const handlerDropMenu = (e, index) => {
    e.stopPropagation();
    setActiveItem(index);
    setOpenDropMenu(!openDropMenu);
  };
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <a href="/" className={styles.nav__logo}>
            <img src={logo} alt="Logo" className={styles['nav__logo-img']} />
          </a>
          <ul className={styles.nav__list}>
            {menu.map((item) => (
              <React.Fragment key={item}>
                {item.length > 1 ? (
                  <li className={styles.nav__item}>
                    <a className={styles.nav__link} href="#">
                      {item[0]}
                      <svg
                        className={styles['nav__link-svg']}
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.5 6.75L9 11.25L13.5 6.75"
                          stroke="#4D4D4D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <ul className={styles[('nav__item', 'drop-menu')]}>
                      {item.slice(1).map((item) => (
                        <li key={item} className={styles[('nav__item', 'drop-menu__item')]}>
                          <a href="#" className={styles['drop-menu__link']}>
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className={styles.nav__item}>
                    <a href="#" className={styles.nav__link}>
                      {item}
                    </a>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
          <div className={styles.nav__lang} onClick={() => setOpenLang(!openLang)} ref={langRef}>
            <div className={styles['nav__lang-select']}>
              {lang}
              <svg
                className={`${styles['nav__link-svg']} ${openLang ? styles['active'] : ''}`}
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.5 6.75L9 11.25L13.5 6.75"
                  stroke="#4D4D4D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {openLang && (
              <ul className={styles['nav__lang-list']}>
                {language.map((item, idx) => (
                  <li
                    key={idx}
                    className={styles['nav__lang-item']}
                    onClick={() => setLanguage(item)}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a href="#" className={styles.nav__talk}>
            <Button className={styles.nav__btn}>let’s talk</Button>
          </a>
          <div
            className={`${styles['burger-menu']} ${toggle ? styles['burger-menu__active'] : ''}`}
            onClick={() => setToggle(!toggle)}
            ref={menuRef}>
            <span></span>
          </div>
          <ul className={`${styles.nav__list} ${toggle ? styles.active : ''}`}>
            {menu.map((item, index) => (
              <React.Fragment key={item}>
                {item.length > 1 ? (
                  <li className={styles.nav__item} onClick={(e) => handlerDropMenu(e, index)}>
                    <a className={styles.nav__link} href="#">
                      {item[0]}
                      <svg
                        className={styles['nav__link-svg']}
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.5 6.75L9 11.25L13.5 6.75"
                          stroke="#4D4D4D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <ul
                      className={`${styles[('nav__item', 'drop-menu')]} ${
                        activeItem === index ? styles.active : ''
                      }`}
                      onClick={handlerDropMenu}>
                      {openDropMenu &&
                        item.slice(1).map((item) => (
                          <li key={item} className={styles[('nav__item', 'drop-menu__item')]}>
                            <a href="#" className={styles['drop-menu__link']}>
                              {item}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </li>
                ) : (
                  <li className={styles.nav__item}>
                    <a href="#" className={styles.nav__link}>
                      {item}
                    </a>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
