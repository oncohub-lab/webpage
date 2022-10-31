import Image from 'next/image';
import Link from 'next/link';

import { useSelector } from 'react-redux';

import sDash from '../styles/datascience/DataScience.module.css';

export default function DataScience() {
  const language = useSelector((state) => state.reducer.ctrlReducer.language);

  return (
    <div className={sDash.container}>
      <div className={sDash.title}>
        <h1 style={{ textAlign: 'center' }}>Data Science Dashboard</h1>
      </div>
      <div>
        under construction{' '}
        <Image src='/under_construction.svg' height={120} width={120} />
      </div>
      <div className={sDash.docs}>
        <h2>wiki page</h2>
        <Link href='https://oncohub-lab.gitbook.io/data-science/'>📚</Link>
      </div>
      <div className={sDash.tools}>
        <div>
          <Image src='/tools/numpylogo.svg' height={120} width={120} />
        </div>
        <div>
          <Image src='/tools/pandas.svg' height={120} width={120} />
        </div>
        <div>
          <Image src='/tools/scikit-learn.png' height={40} width={80} />
        </div>
        <div>
          <Image src='/tools/tensorFlow.svg' height={120} width={120} />
        </div>
      </div>
    </div>
  );
}
