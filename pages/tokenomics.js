import Image from 'next/image';

import { useSelector } from 'react-redux';

import sTkoenomics from '../styles/tokenomics/Tokenomics.module.css';

export default function Tokenomics() {
  const language = useSelector((state) => state.reducer.ctrlReducer.language);

  return (
    <div className={sTkoenomics.container}>
      <h1 style={{ textAlign: 'center' }}>Tokenomics under construction</h1>
      <Image src='/under_construction.svg' height={120} width={120} />
    </div>
  );
}
