import Link from 'next/link';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage, toggleMobileMenu } from '../actions/ctrlActions';

import Burger from './Burger';

import sNav from '../styles/Nav.module.css';

export const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const dispatch = useDispatch();

  const language = useSelector((state) => state.reducer.ctrlReducer.language);
  const toggle = useSelector((state) => state.reducer.ctrlReducer.toggle);

  const handleClick = () => {
    dispatch(changeLanguage(language));
  };

  const onScroll = (event) => {
    let lastScrollY = window.pageYOffset;
    if (lastScrollY > 10) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={sNav.container}>
      <div className={sNav.brand}>
        <div className={sNav.logo}>
          <Image src='/logo/oncoIconD.svg' height={45} width={45} />
        </div>
        <div className={sNav.name}>
          <h1>OncoHub</h1>
        </div>
      </div>
      <div
        className={showNav ? sNav.curtine + ' ' + sNav.active : sNav.curtine}
      ></div>
      <div className={sNav.menuPc}>
        <div className={sNav.home}>
          <Link href='/'>home</Link>
        </div>
        <div className={sNav.dao}>
          <Link href='/dao'>dao</Link>
        </div>
        <div className={sNav.tokenomics}>
          <Link href='/tokenomics'>tokenomics</Link>
        </div>
        <div className={sNav.ds}>
          <Link href='/datascience'>data science</Link>
        </div>
        {language === 'pl' ? (
          <>
            <div onClick={handleClick} className={sNav.lang}>
              🇵🇱
            </div>
          </>
        ) : (
          <>
            <div onClick={handleClick} className={sNav.lang}>
              🇬🇧
            </div>
          </>
        )}
      </div>
      <ul
        className={
          toggle ? sNav.menuMobile + ' ' + sNav.active : sNav.menuMobile
        }
      >
        <div
          onClick={() => {
            dispatch(toggleMobileMenu(toggle));
          }}
        >
          <Link href='/'>home</Link>
          <Link href='/dao'>dao</Link>
          <Link href='/tokenomics'>tokenomics</Link>
          <Link href='/datascience'>data science</Link>
          {language === 'pl' ? (
            <div onClick={handleClick} className={sNav.lang}>
              🇵🇱
            </div>
          ) : (
            <div onClick={handleClick} className={sNav.lang}>
              🇬🇧
            </div>
          )}
        </div>
      </ul>
      <div className={sNav.burger}>
        <Burger />
      </div>
    </div>
  );
};
