import Link from 'next/link';
import Image from 'next/image';

import { useSelector } from 'react-redux';

import sPartners from '../../styles/index/Partners.module.css';

export const Partners = () => {
  const language = useSelector((state) => state.reducer.ctrlReducer.language);

  return (
    <div className={sPartners.partners}>
      <h2>Partners</h2>
      <div>
        {/* <Image src='/partners/nio.jpeg' width='128' height='64' />
        <Image src='/partners/dco.jpg' width='128' height='128' />
        <Image src='/partners/cf.jpeg' width='128' height='128' /> */}
      </div>
    </div>
  );
};
