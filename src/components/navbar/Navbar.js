import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

import styles from './Navbar.module.scss';

const navItems = [
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

const drawerVariants = {
  closed: { width: 0 },
  open: {
    width: '65%',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  close: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.pageYOffset > lastScrollY && window.pageYOffset > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`${styles['navbar__container']} ${isHidden && styles['hidden']}`}>
      <div className={styles['navbar__wrapper']}>
        <Link href="/">
          <a className={styles['navbar__logo']}>essevPi</a>
        </Link>
        <ul className={styles['navbar__links']}>
          {navItems.map((item) => (
            <li key={`link-${item.path}`}>
              <Link href={`/#${item.path}`}>{item.name}</Link>
            </li>
          ))}
          {/* <Link href="/CV.pdf" passHref>
            <button className={styles["navbar__cta-button"]}>
              Download
            </button>
          </Link> */}

        </ul>
        <div className={styles['navbar__menu']}>
          <IoMdMenu onClick={() => setIsOpen(prev => !prev)} />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className={styles['navbar__menu-drawer']}
                variants={drawerVariants}
                initial="closed"
                animate="open"
                exit="close"
              >
                <div className={styles['navbar__close-btn-wrapper']}>
                  <IoMdClose onClick={() => setIsOpen(prev => !prev)} />
                </div>
                <ul className={styles['navbar__links']}>
                  {navItems.map((item) => (
                    <li key={`link-${item.path}`}>
                      <Link href={`#${item.path}`}>
                        <a onClick={() => setIsOpen(false)}>{item.name}</a>
                      </Link>
                    </li>
                  ))}
                  {/* <Link href="/">
                    <a
                      className={styles['navbar__cta-button']}
                      style={{ margin: '1rem 0' }}
                    >
                      Contacts
                    </a>
                  </Link> */}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
