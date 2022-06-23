import Link from 'next/link';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

import sBoard from '../../styles/index/MainBoard.module.css';

export const MainBoard = () => {
  const ref = useRef(null);
  const language = useSelector((state) => state.reducer.ctrlReducer.language);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={sBoard.board}>
      <p className={sBoard.john}>
        {language === 'en'
          ? '"Children, let us love not in word or speech but in deed and truth!" (1 John 3:18-24)'
          : '"Dzieci, nie miłujmy słowem i językiem ale czynem i prawdą!" (1 Jan 3:18-24)'}
      </p>
      <Link href='/' scroll={false}>
        <a className={sBoard.cta} onClick={handleClick}>
          {language === 'en' ? 'see what we do' : 'sprawdz co robimy'}
        </a>
      </Link>
      <div className={sBoard.scrollToMe} ref={ref}></div>
    </div>
  );
};
