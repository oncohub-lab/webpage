import { useSelector } from 'react-redux';

import sObj from '../../styles/index/Objectives.module.css';

export const Objectives = () => {
  const language = useSelector((state) => state.reducer.ctrlReducer.language);

  return (
    <div className={sObj.objectives}>
      <div className={sObj.box1}>
        <div>🧬</div>
        {language === 'en' ? (
          <p>open source developers help fighting with cancer.</p>
        ) : (
          <p>programiści open source z pomocą w walce z nowotworami.</p>
        )}
      </div>
      <div className={sObj.box2}>
        <div>🌿</div>
        {language === 'en' ? (
          <p>
            leverage blockchain technology to make research decision community
            driven within transparent environment.
          </p>
        ) : (
          <p>
            wykorzystanie technologii blockchain aby decyzje o kierunku badań
            naukowych były wybierane przez zaangażowaną społeczność w
            transparentnym środowisku.
          </p>
        )}
      </div>
    </div>
  );
};
