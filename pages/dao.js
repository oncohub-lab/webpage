import Image from 'next/image';

import { useSelector } from 'react-redux';

import sDao from '../styles/dao/Dao.module.css';

export default function Dao() {
  const language = useSelector((state) => state.reducer.ctrlReducer.language);

  return (
    <div className={sDao.container}>
      <h1 style={{ textAlign: 'center' }}>OncoHub DAO under construction</h1>
      <Image src='/under_construction.svg' height={120} width={120} />
    </div>
  );
}
