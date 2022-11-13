import Image from 'next/image';
import Link from 'next/link';

import { useSelector } from 'react-redux';

import sDao from '../styles/dao/Dao.module.css';

export default function Dao() {
  const language = useSelector((state) => state.reducer.ctrlReducer.language);

  return (
    <div className={sDao.container}>
      <div className={sDao.title}>
        <h1 style={{ textAlign: 'center' }}>DAO Dashboard</h1>
      </div>
      <div className={sDao.links}>
        <Link href='https://oncohub-lab.gitbook.io/crypto-ecosystem/'>
          <div>
            <div>tokenomics</div>
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
        <Link href='https://github.com/oncohub-dao'>
          <div>
            <div>repo </div>
            <div>
              <Image src='/social/github.svg' height={24} width={24} />
            </div>
          </div>
        </Link>
      </div>
      <div className={sDao.tools}>
        <div>
          <Image src='/tools/hardhat.svg' height={60} width={60} />
        </div>
        <div>
          <Image src='/tools/ethers.svg' height={60} width={60} />
        </div>
        <div>
          <Image src='/tools/openzeppelin.svg' height={120} width={120} />
        </div>
      </div>
    </div>
  );
}
