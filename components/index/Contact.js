import { useSelector } from 'react-redux';

import sContact from '../../styles/index/Contact.module.css';

export const Contact = () => {
  const language = useSelector((state) => state.reducer.ctrlReducer.language);
  return (
    <div className={sContact.contact}>
      <div>{language === 'en' ? <h2>contact</h2> : <h2>kontakt</h2>}</div>
      <div>
        <p>mail: oncohub@proton.me</p>
      </div>
      {/* <p>nip: </p> */}
      {/* <p>krs: </p> */}
      {/* {language === 'en' ? <p>bank account: </p> : <p>konto bankowe: </p>} */}
      {/* {language === 'en' ? <p>ETH address: </p> : <p>address ETH: </p>} */}
      {/* {language === 'en' ? <p>BTC address: </p> : <p>address BTC: </p>} */}
    </div>
  );
};
