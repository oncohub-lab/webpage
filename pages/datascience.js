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
      <div className={sDash.links}>
        <Link href='https://oncohub-lab.gitbook.io/data-science/'>
          <div>
            <div>wiki </div>
            <div>
              <Image src='/social/book.svg' height={24} width={24} />
            </div>
          </div>
        </Link>
        <Link href='https://discord.gg/GtTQqU9t'>
          <div>
            <div>discord </div>
            <div>
              <Image src='/social/discord.svg' height={24} width={24} />
            </div>
          </div>
        </Link>
        <Link href='https://github.com/oncohub-lab'>
          <div>
            <div>repo </div>
            <div>
              <Image src='/social/github.svg' height={24} width={24} />
            </div>
          </div>
        </Link>
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
